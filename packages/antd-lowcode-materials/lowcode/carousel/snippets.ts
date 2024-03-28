export default [
  {
    title: '走马灯',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/carousel-1.jpg',
    schema: {
      componentName: 'Carousel',
      props: {
        autoplay: false,
        autoplaySpeed:3000,
        dotPosition:'bottom',
        dots:true,
        fade:false,
        infinite:true,
        speed:500,
        easing:'linear',
        effect:'scrollx',
        waitForAnimate:false,
        

      },
      children: [
        {
          componentName: 'Col',
        },
        {
          componentName: 'Col',
  },
        // {
        //   componentName: 'Card',
        //   props: {
        //     key: 'panel-2',
        //   },
        // },
      ],
    },
  },
];
