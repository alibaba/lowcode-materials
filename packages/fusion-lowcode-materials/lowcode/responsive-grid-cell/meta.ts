module.exports = {
  group: '原子组件',
  componentName: 'ResponsiveGrid.Cell',
  title: '布局容器 Cell',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'ResponsiveGrid',
    main: '',
    destructuring: true,
    subName: 'Cell',
  },
  props: [
    {
      name: 'colSpan',
      propType: 'number',
      description: '横向，占据几列',
    },
    {
      name: 'rowSpan',
      propType: 'number',
      description: '纵向，占据几行',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    advanced: {
      // 这个函数返回false会报错...
      getResizingHandlers: (node) => {
        const currentNodeIndex = node.index;
        const parent = node.parent;
        if (!parent) return [];
        let layout = parent.getPropValue('layout');
        if (!layout) return [];
        layout = layout.split(':').map((item) => parseInt(item, 10));
        // 最后一个节点不允许拖拽
        if (currentNodeIndex >= layout.length - 1) {
          return [];
        }
        return ['e'];
      },
      callbacks: {
        onResizeStart: (e, currentNode) => {
          const { trigger } = e;
          let nodeIndex = currentNode.index;
          let startLayout = currentNode.parent.getPropValue('layout');
          startLayout = startLayout.split(':').map((item) => parseInt(item, 10));
          let eachWidth = currentNode.getRect().width / startLayout[nodeIndex];
          // 暴露到currentNode节点上供onResize回调使用
          currentNode.nodeIndex = nodeIndex;
          currentNode.startLayout = startLayout;
          currentNode.eachWidth = eachWidth;
        },
        onResize: (e, currentNode) => {
          const { trigger, deltaX, deltaY } = e;
          const { nodeIndex, startLayout, eachWidth } = currentNode;
          let moveColumn = Math.round(deltaX / eachWidth);
          const layout = [...startLayout]; // 浅拷贝
          if (moveColumn > 0) {
            moveColumn = Math.min(moveColumn, layout[nodeIndex + 1] - 1);
          } else {
            moveColumn = -Math.min(-moveColumn, layout[nodeIndex] - 1);
          }
          layout[nodeIndex] += moveColumn;
          layout[nodeIndex + 1] -= moveColumn;
          // 获取下一个节点实例
          let nextNode = currentNode.parent.children.filter((c, index) => {
            return index === nodeIndex + 1;
          });
          // 为当前节点设置colSpan属性
          currentNode.setPropValue('colSpan', layout[nodeIndex]);
          // 为nextChild节点设置colSpan属性
          if (nextNode && nextNode[0]) {
            nextNode[0].setPropValue('colSpan', layout[nodeIndex + 1]);
          }
          // 为父容器设置layout属性
          currentNode.parent.setPropValue('layout', layout.join(':'));
        },
      },
    },
  },
  icon: '',
  category: '布局容器类',
};
