export default [
  {
    title: '主按钮',
    screenshot: require('./__screenshots__/button-1.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'primary',
        children: '主按钮',
      },
    },
  },
  {
    title: '次按钮',
    screenshot: require('./__screenshots__/button-2.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'default',
        children: '次按钮',
      },
    },
  },
  {
    title: '危险按钮',
    screenshot: require('./__screenshots__/button-3.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'danger',
        children: '危险按钮',
      },
    },
  },
  {
    title: '文字按钮',
    screenshot: require('./__screenshots__/button-4.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'text',
        children: '文字按钮',
      },
    },
  },
  {
    title: '虚框按钮',
    screenshot: require('./__screenshots__/button-5.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'dashed',
        children: '虚框按钮',
      },
    },
  },
  {
    title: '链接按钮',
    screenshot: require('./__screenshots__/button-6.png'),
    schema: {
      componentName: 'Button',
      props: {
        type: 'link',
        children: '链接按钮',
      },
    },
  },
];
