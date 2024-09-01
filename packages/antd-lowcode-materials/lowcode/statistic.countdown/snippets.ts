export default [
  {
    title: '倒计时',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/statistic-1.png',
    schema: {
      componentName: 'Statistic.Countdown',
      props: {
        title: '倒计时',
        value: Date.now() + 1000 * 60 * 30 ,
        format:"HH:mm:ss"
      },
    },
  },
];
