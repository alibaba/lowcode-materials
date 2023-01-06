export default [
  {
    title: '普通型',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/modal-1.png',
    schema: {
      componentName: 'Modal',
      props: {
        title: 'Basic Modal',
        okText: '确认',
        cancelText: '取消',
        open: true,
        destroyOnClose: true,
      },
      children: [],
    },
  },
  {
    title: '隐藏底部',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/modal-2.png',
    schema: {
      componentName: 'Modal',
      props: {
        title: 'Basic Modal',
        okText: '确认',
        cancelText: '取消',
        open: true,
        footer: null,
        destroyOnClose: true,
      },
      children: [],
    },
  },
];
