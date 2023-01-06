export default [
  {
    title: '侧边抽屉',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-1.png',
    schema: {
      componentName: 'Drawer',
      props: {
        title: 'Basic Drawer',
        open: true,
        placement: 'right',
        destroyOnClose: true,
      },
      children: [
        {
          componentName: 'Typography.Paragraph',
          children: 'Some contents...',
        },
      ],
    },
  },
  {
    title: '底部抽屉',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-2.png',
    schema: {
      componentName: 'Drawer',
      props: {
        title: 'Basic Drawer',
        open: true,
        placement: 'bottom',
        destroyOnClose: true,
      },
      children: [
        {
          componentName: 'Typography.Paragraph',
          children: 'Some contents...',
        },
      ],
    },
  },
];
