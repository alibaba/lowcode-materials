export default [
  {
    title: '普通型',
    screenshot: 'modal-1.png',
    schema: {
      componentName: 'Modal',
      props: {
        title: 'Basic Modal',
        okText: '确认',
        cancelText: '取消',
        visible: true,
        destroyOnClose: true,
      },
      children: [],
    },
  },
  {
    title: '隐藏底部',
    screenshot: 'modal-2.png',
    schema: {
      componentName: 'Modal',
      props: {
        title: 'Basic Modal',
        okText: '确认',
        cancelText: '取消',
        visible: true,
        footer: null,
        destroyOnClose: true,
      },
      children: [],
    },
  },
];
