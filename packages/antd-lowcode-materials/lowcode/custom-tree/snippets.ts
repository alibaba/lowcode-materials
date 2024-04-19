export default [
  {
    title: '高级树形控件',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tree-1.jpg',
    schema: {
      componentName: 'CustomTree',
      props: {
        treeData: [
          {
            title: 'parent 0',
            key: '0-0',
            "icon": "BarsOutlined",

            children: [
              { title: 'leaf 0-0', key: '0-0-0', isLeaf: true,              "icon": "CalculatorOutlined"
            },
              { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
            ],
          },
          {
            title: 'parent 1',
            key: '0-1',
            "icon": "BulbOutlined",
            children: [
              { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
              { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
            ],
          },
        ],
        showIcon:true,
        defaultExpandAll: true,
      },
    },
  },
];
