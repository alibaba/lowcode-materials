module.exports = [
  {
    title: '气泡框',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_balloon.png',
    schema: {
      componentName: 'Balloon',
      props: {
        defaultVisible: true,
        prefix: 'next-',
        size: 'medium',
        type: 'normal',
        closable: true,
        align: 'b',
        offset: [0, 0],
        triggerType: 'hover',
        autoFocus: true,
        trigger: {
          type: 'JSSlot',
          props: {
            title: '触发元素',
          },
        },
      },
    },
  },
];
