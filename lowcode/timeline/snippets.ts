module.exports = [
  {
    title: '时间轴',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_timeline.png',
    schema: {
      componentName: 'Timeline',
      props: {
        prefix: 'next-',
        fold: [],
        animation: true,
      },
      children: [
        {
          componentName: 'Timeline.Item',
          props: {
            state: 'process',
            title: 'Buy',
            time: '2022-02-01',
          },
        },
        {
          componentName: 'Timeline.Item',
          props: {
            title: 'Ship',
            time: '2022-02-01',
          },
        },
        {
          componentName: 'Timeline.Item',
          props: {
            title: 'Order',
            time: '2022-02-01',
          },
        },
      ],
    },
  },
];
