module.exports = [
  {
    title: '提示',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_message.png',
    schema: {
      componentName: 'Message',
      props: {
        title: 'Alert',
        type: 'warning',
        shape: 'inline',
        size: 'medium',
        visible: true,
        animation: true,
        children: 'This item already has the label "travel", you can add a new label.',
      },
    },
  },
];
