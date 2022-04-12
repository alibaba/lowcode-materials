export default [
  {
    title: '对话框',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_dialog.png',
    schema: {
      componentName: 'Dialog',
      props: {
        prefix: 'next-',
        footerAlign: 'right',
        title: 'Title',
        footer: true,
        footerActions: ['ok', 'cancel'],
        closeable: 'esc,close',
        hasMask: true,
        align: 'cc cc',
        minMargin: 40,
        isAutoContainer: true,
        visible: true,
      },
    },
  },
];
