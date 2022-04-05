export default [
  {
    title: '间距',
    screenshot: 'space-1.png',
    schema: {
      componentName: 'Space',
      props: {},
      children: [
        {
          componentName: 'Button',
          props: {
            children: 'Button-1',
          },
        },
        {
          componentName: 'Button',
          props: {
            children: 'Button-2',
          },
        },
      ],
    },
  },
];
