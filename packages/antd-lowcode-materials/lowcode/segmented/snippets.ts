export default [
  {
    title: '分段控制器',
    screenshot: require('./__screenshots__/segmented.png'),
    schema: {
      componentName: 'Segmented',
      props: {
        options: ['Daily', 'Weekly', 'Monthly'],
        // value: 'Daily',
        defaultValue: 'Daily',
      },
    },
  },
];
