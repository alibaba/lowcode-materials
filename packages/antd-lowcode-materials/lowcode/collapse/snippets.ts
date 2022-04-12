export default [
  {
    title: '折叠面板',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/collapse-1.png',
    schema: {
      componentName: 'Collapse',
      props: {
        defaultActiveKey: ['collapse-item-1'],
      },
      children: [
        {
          componentName: 'Collapse.Panel',
          props: {
            header: '折叠项1',
            key: 'collapse-item-1',
          },
        },
        {
          componentName: 'Collapse.Panel',
          props: {
            header: '折叠项2',
            key: 'collapse-item-2',
          },
        },
      ],
    },
  },
];
