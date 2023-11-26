export default [
  {
    title: '图片轮播',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_slider.png',
    schema: {
      componentName: 'Slider',
      props: {
        prefix: 'next-',
        animation: 'slide',
        arrows: true,
        arrowSize: 'medium',
        arrowPosition: 'inner',
        arrowDirection: 'hoz',
        autoplaySpeed: 3000,
        dots: true,
        dotsDirection: 'hoz',
        draggable: true,
        infinite: true,
        slide: 'div',
        slideDirection: 'hoz',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        triggerType: 'click',
        centerPadding: '50px',
        cssEase: 'ease',
        edgeFriction: 0.35,
        swipe: true,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        waitForAnimate: true,
      },
      children: [
        {
          componentName: 'Image',
          props: {
            src: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png',
          },
        },
        {
          componentName: 'Image',
          props: {
            src: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
          },
        },
        {
          componentName: 'Image',
          props: {
            src: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
          },
        },
        {
          componentName: 'Image',
          props: {
            src: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
          },
        },
      ],
    },
  },
];
