module.exports = {
  componentName: 'RichText',
  title: '需求占位',
  npm: {
    package: '@alilc/lowcode-materials',
    version: 'latest',
    exportName: 'RichText',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      override: [
        {
          name: 'style',
          propType: 'object',
        },
        {
          name: 'maxHeight',
          title: '最大高度',
          propType: 'number',
          setter: 'NumberSetter',
          description: '最大高度',
        },
        {
          name: 'content',
          title: '需求内容',
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
  },
  advanced: {
    getResizingHandlers: () => {
      return ['e'];
    },
    callbacks: {
      onResizeStart: (e, currentNode) => {
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
      onResize: (e, currentNode) => {
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
        currentNode.getDOMNode().style['width'] = `${Math.round(width)}px`;
      },
      onResizeEnd: (e, currentNode) => {
        currentNode.setPropValue('style.width', currentNode.getDOMNode().style['width']);
      },
    },
  },
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png',
  category: '基础元素',
  group: '精选组件',
  snippets: require('./snippets'),
  hidden: true,
};
