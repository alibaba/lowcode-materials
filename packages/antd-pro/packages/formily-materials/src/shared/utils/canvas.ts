import { useState } from 'react';
import { uuid } from '../';
import type { Project, DocumentModel, Node } from '@alilc/lowcode-shell';

export const useCurrentDocument = (): DocumentModel => {
  const { currentDocument }: Project = (parent as any).AliLowCodeEngine.project;

  return currentDocument;
};

export const useCurrentNode = (componentId: string | Record<string, any>): Node => {
  const currentDocument = useCurrentDocument();

  const id: string = typeof componentId === 'object' ? componentId.componentId : componentId;

  return currentDocument.getNodeById(id);
};

export const useComponentSchema = (componentId: string) => {
  const currentNode = useCurrentNode(componentId);

  return currentNode.exportSchema();
};

export const matchComponent = (node: Node, name: ComponentNameMatcher, context?: any) => {
  if (name === '*') return true;

  const { componentName } = node;

  if (typeof name === 'function') return name(componentName || '', node, context);

  if (Array.isArray(name)) return name.includes(componentName);

  return componentName === name;
};

type ComponentNameMatcher =
  | string
  | string[]
  | ((name: string, node: Node, context?: any) => boolean);

export const queryNodesByComponentPath = (node: Node, path: ComponentNameMatcher[]): Node[] => {
  if (path?.length === 0) return [];
  if (path?.length === 1) {
    if (matchComponent(node, path[0])) {
      return [node];
    }
  }
  return matchComponent(node, path[0])
    ? node.children.reduce((buf, child) => {
        return buf.concat(queryNodesByComponentPath(child, path.slice(1)));
      }, [])
    : [];
};

export const findNodeByComponentPath = (node: Node, path: ComponentNameMatcher[]): Node => {
  if (path?.length === 0) return;
  if (path?.length === 1) {
    if (matchComponent(node, path[0])) {
      return node;
    }
  }
  if (matchComponent(node, path[0])) {
    for (let i = 0; i < node.children.size; i++) {
      const next = findNodeByComponentPath(node.children.get(i), path.slice(1));
      if (next) {
        return next;
      }
    }
  }
};

export const hasNodeByComponentPath = (node: Node, path: ComponentNameMatcher[]) =>
  !!findNodeByComponentPath(node, path);

export const useStableIds = (length = 10) => {
  const [stableIds] = useState(() => {
    const ids = [];
    for (let i = 0; i < length; i++) {
      ids.push(uuid());
    }
    return ids;
  });

  return stableIds;
};
