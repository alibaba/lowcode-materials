module.exports = [
  {
    title: '日期选择框',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_date-picker.png',
    schema: {
      componentName: 'DatePicker',
      props: {
        prefix: 'next-',
        format: 'YYYY-MM-DD',
        size: 'medium',
        hasClear: false,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        followTrigger: true,
      },
    },
  },
  {
    title: '日期区间',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_date-picker.png',
    schema: {
      componentName: 'RangePicker',
      props: {
        prefix: 'next-',
        format: 'YYYY-MM-DD',
        size: 'medium',
        type: 'date',
        hasClear: false,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        followTrigger: true,
      },
    },
  },
];
