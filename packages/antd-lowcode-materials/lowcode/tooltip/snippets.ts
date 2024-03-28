export default [
  {
    title: '文字提示',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tooltip-1.jpg',
    schema: {
      componentName: 'Tooltip',
      props: {
        title: '提示内容',
      },
      children: {
        componentName: 'Button',
        props: {
          children: '文字提示',
        },
      },
    },
  },
];
