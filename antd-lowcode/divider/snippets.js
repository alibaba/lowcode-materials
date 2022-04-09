export default [
  {
    title: '分割线',
    screenshot: 'divider-1.png',
    schema: {
      componentName: 'Divider',
      props: {},
    },
  },
  {
    title: '带文字分割线',
    screenshot: 'divider-2.png',
    schema: {
      componentName: 'Divider',
      props: {
        children: [
          {
            componentName: 'Typography.Text',
            props: {
              children: '分割文字',
            },
          },
        ],
      },
    },
  },
];
