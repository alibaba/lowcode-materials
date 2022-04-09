export default [
  {
    title: '单选框',
    screenshot: 'radio-1.png',
    schema: {
      componentName: 'Radio',
      props: {
        children: 'Radio',
      },
    },
  },
  {
    title: '单选框组',
    screenshot: 'radio-group-1.png',
    schema: {
      componentName: 'Radio.Group',
      props: {
        options: [
          {
            label: 'A',
            value: 'A',
          },
          {
            label: 'B',
            value: 'B',
          },
          {
            label: 'C',
            value: 'C',
          },
        ],
      },
    },
  },
];
