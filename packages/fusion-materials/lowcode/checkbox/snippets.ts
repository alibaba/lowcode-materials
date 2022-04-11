module.exports = [
  {
    title: '复选按钮',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_menu.png',
    schema: {
      componentName: 'Checkbox',
      props: {
        label: 'Check Option',
      },
    },
  },
  {
    title: '复选按钮组',
    screenshot: 'https://img.alicdn.com/tfs/TB1EJN7uYY1gK0jSZTEXXXDQVXa-112-64.png',
    schema: {
      componentName: 'CheckboxGroup',
      props: {
        prefix: 'next-',
        dataSource: [
          {
            label: '选项一',
            value: '1',
          },
          {
            label: '选项二',
            value: '2',
          },
          {
            label: '选项三',
            value: '3',
          },
        ],
      },
    },
  },
];
