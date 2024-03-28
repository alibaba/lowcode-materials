import { isStr } from '@formily/shared';
export * from './componentToSchema';
export * from './canvas';

// {{expression}}正则表达式
export const EXP_RE = /^\s*\{\{([\s\S]*)\}\}\s*$/;

/**
 * 判断是否为 {{expression}} 这样的表达式
 * @param value
 * @returns
 */
export const isExpression = (exp: unknown) => {
  if (!isStr(exp)) return false;
  return EXP_RE.test(exp);
};

export const matchComponent = (node, name: string | ((name: string) => boolean)) => {
  const { componentName } = node;
  if (typeof name === 'function') {
    return name(componentName);
  }
  return componentName === name;
};

// 根据组件名查找子节点
export const findNodeByComponentName = (node, name: string | ((name: string) => boolean)) => {
  if (node.children.size === 0) return [];
  const res = [];
  node.children.forEach((item) => {
    if (matchComponent(item, name)) {
      res.push(item);
    }
  });
  return res;
};

export const findComponentsByNodes = (components: any[], nodes: any[]) => {
  const ids = nodes.map((item) => item.id);
  const res = components.filter((item) => ids.includes(item.props.componentId));

  return res;
};

export const uuid = () => {
  return Math.random().toString(36).slice(2);
};
