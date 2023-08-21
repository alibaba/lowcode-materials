import { IPublicModelNode } from '@alilc/lowcode-types';
import { IComponentDescription, ISnippet } from '../types';

const snippets: ISnippet[] = [
  {
    title: '需求占位',
    screenshot: 'https://img.alicdn.com/tfs/TB160cKkP39YK4jSZPcXXXrUFXa-112-64.png',
    schema: {
      title: '需求占位',
      componentName: 'StoryPlaceholder',
      props: {
        title: '需求占位描述',
        content: {
          subject: '需求标题',
          hideTitle: false,
          description:
            '<p><span>- 你可以在这里描述需求</span><br /><span>- 或者粘贴需求截图</span></p>',
        },
      },
    },
  },
];

interface INode extends IPublicModelNode {
  startRect: any;
  beforeSpan: number;
  parentRect: any;
}

const meta: IComponentDescription = {
  componentName: 'StoryPlaceholder',
  title: '需求占位',
  npm: {
    package: '@alifd/fusion-ui',
    version: 'latest',
    exportName: 'StoryPlaceholder',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    supports: {
      style: true,
    },
    props: [
      {
        name: 'maxHeight',
        title: '最大高度',
        propType: 'number',
        setter: 'NumberSetter',
        description: '最大高度',
      },
      {
        name: 'content',
        title: '需求关联',
        display: 'inline',
        supportVariable: true,
        setter: {
          componentName: 'EditSetter',
          props: {
            title: '编辑内容',
          },
        },
      },
    ],
  },
  advanced: {
    getResizingHandlers: () => {
      return ['e'];
    },
    callbacks: {
      onResizeStart: (e, currentNode: INode) => {
        const parent = currentNode.parent;
        if (parent) {
          const parentNode = parent.getDOMNode();
          if (parentNode) {
            currentNode.parentRect = parentNode.getBoundingClientRect();
          }
        }
        currentNode.beforeSpan = currentNode.getPropValue('colSpan') || 12;
        currentNode.startRect = currentNode.getRect();
      },
      onResize: (e, currentNode: INode) => {
        const { deltaX } = e;
        const startWidth = currentNode.startRect
          ? currentNode.startRect.width
          : currentNode.beforeSpan * (currentNode.parentRect.width / 12);
        let width = startWidth + deltaX;
        if (!currentNode.startRect) {
          currentNode.startRect = {
            width,
          };
        }
        width = Math.max(0, width); // 不能小于0
        width = Math.min(width, currentNode.parentRect.width); // 不能大于父容器宽度
        currentNode.getDOMNode().style.width = `${Math.round(width)}px`;
      },
      onResizeEnd: (e, currentNode) => {
        currentNode.setPropValue('style.width', currentNode.getDOMNode().style.width);
      },
    },
  },
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png',
  category: '基础元素',
  group: '精选组件',
  hidden: true,
};

export default {
  ...meta,
  snippets,
};
