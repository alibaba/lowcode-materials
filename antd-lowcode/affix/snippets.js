export default [
  {
    title: '固钉',
    screenshot: 'affix-1.jpg',
    schema: {
      componentName: 'Affix',
      props: {
        offsetTop: 100,
      },
      children: [
        {
          componentName: 'Button',
          props: {
            children: 'Affix Top',
          },
        },
      ],
    },
  },
];
