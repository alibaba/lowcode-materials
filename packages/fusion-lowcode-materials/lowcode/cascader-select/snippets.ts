module.exports = [
  {
    title: '级联选择器',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_cascader-select.png',
    schema: {
      componentName: 'CascaderSelect',
      props: {
        prefix: 'next-',
        size: 'medium',
        hasArrow: true,
        hasBorder: true,
        expandTriggerType: 'click',
        resultAutoWidth: true,
        notFoundContent: 'Not Found',
        dataSource: [
          {
            value: '2974',
            label: '西安',
            children: [
              {
                value: '2975',
                label: '西安市',
              },
              {
                value: '2976',
                label: '高陵县',
              },
              {
                value: '2977',
                label: '蓝田县',
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: '级联',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_cascader.png',
    schema: {
      componentName: 'Cascader',
      props: {
        prefix: 'next-',
        expandTriggerType: 'click',
        dataSource: [
          {
            value: '2974',
            label: '西安',
            children: [
              {
                value: '2975',
                label: '西安市',
              },
              {
                value: '2976',
                label: '高陵县',
              },
              {
                value: '2977',
                label: '蓝田县',
              },
            ],
          },
        ],
      },
    },
  },
];
