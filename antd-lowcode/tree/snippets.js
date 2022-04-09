export default [
  {
    title: '树形控件',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tree-1.jpg',
    schema: {
      componentName: 'Tree',
      props: {
        treeData: [
          {
            title: 'parent 0',
            key: '0-0',
            children: [
              { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
              { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
            ],
          },
          {
            title: 'parent 1',
            key: '0-1',
            children: [
              { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
              { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
            ],
          },
        ],
        defaultExpandAll: true,
      },
    },
  },
];
