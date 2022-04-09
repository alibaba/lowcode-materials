export default [
  {
    title: '走马灯',
    screenshot: 'carousel-1.jpg',
    schema: {
      componentName: 'Carousel',
      children: [
        {
          componentName: 'Card',
          props: {
            key: 'panel-1',
          },
        },
        {
          componentName: 'Card',
          props: {
            key: 'panel-2',
          },
        },
      ],
    },
  },
];
