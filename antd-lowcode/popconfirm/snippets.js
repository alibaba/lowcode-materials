export default [
  {
    title: '气泡确认框',
    screenshot: 'popconfirm-1.jpg',
    schema: {
      componentName: 'Popconfirm',
      props: {
        title: '确定删除?',
        okType: 'primary',
        okText: '确定',
        cancelText: '取消',
      },
      children: {
        componentName: 'Button',
        props: {
          children: '删除',
        },
      },
    },
  },
];
