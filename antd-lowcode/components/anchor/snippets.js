export default [
  {
    title: '锚点',
    screenshot: 'anchor-1.png',
    schema: {
      componentName: 'Anchor',
      props: {},
      children: [
        {
          componentName: 'Anchor.Link',
          props: {
            title: 'Document',
          },
        },
        {
          componentName: 'Anchor.Link',
          props: {
            title: 'API',
          },
        },
        {
          componentName: 'Anchor.Link',
          props: {
            title: 'Demo',
          },
        },
      ],
    },
  },
];
