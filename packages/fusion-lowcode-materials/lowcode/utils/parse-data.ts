export const STATE_MARK: any = {
  '-': 'disabled',
  // tslint:disable-next-line:object-literal-sort-keys
  '*': 'active',
  '~': 'hover',
  '': 'normal',
};

export enum NodeType {
  divider = 'divider',
  node = 'node',
  comment = 'comment',
}

export enum ContentType {
  text = 'text',
  icon = 'icon',
}

export interface IContent {
  type: ContentType;
  value: string;
}

export interface INode {
  type: NodeType;
  state: string;
  value: string | IContent[];
  children: INode[];
}

export interface IParseOption {
  parseContent: boolean;
}

const getChildren = (template: string = ''): IContent[] => {
  if (!template) {
    return [];
  }

  return template
    .replace(/(\[.*?\])/g, '\n$1\n')
    .split('\n')
    .filter((v) => !!v)
    .map((d) => {
      switch (true) {
        case /^\[(.*)\]$/.test(d):
          return {
            type: 'icon',
            value: RegExp.$1,
          } as IContent;
        default:
          return {
            type: 'text',
            value: d,
          } as IContent;
      }
    });
};

export const parseData = (
  text: string,
  options: IParseOption = { parseContent: false },
): INode[] => {
  if (!text) {
    return [];
  }
  const root: INode = {
    type: NodeType.node,
    state: 'normal',
    value: '',
    children: [],
  };
  const stack: INode[] = [root];

  text
    .split('\n')
    .filter((line) => line.trim())
    .forEach((line) => {
      const re: any = /^(\t*)([#\-~*]?)(.*)$/.exec(line);
      const indent = (re[1] || '').length;
      const prefix = re[2] || '';
      const item: INode = {
        type: NodeType.node,
        state: 'normal',
        value: re[3] || '',
        children: [],
      };

      if (prefix === '-' && /^-{2,}$/.test(item.value as string)) {
        item.type = NodeType.divider;
      } else if (prefix === '#') {
        item.type = NodeType.comment;
      } else {
        item.state = STATE_MARK[prefix];
      }

      if (item.type === 'node' && options.parseContent) {
        item.value = getChildren(item.value as string);
      }

      while (indent <= stack.length - 2) {
        stack.pop();
      }

      stack[stack.length - 1].children.push(item);
      stack.push(item);
    });

  return root.children;
};

export default parseData;
