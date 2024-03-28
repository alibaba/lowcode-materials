module.exports = {
  group: '原子组件',
  componentName: 'Divider',
  title: '分隔符',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Divider',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'children',
      propType: 'string',
      description: '文案',
      defaultValue: '分隔符',
    },
    {
      name: 'dashed',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否虚线',
          en_US: 'Dashed',
        },
      },
      propType: {
        type: 'bool',
      },
      description: '是否为虚线',
      defaultValue: false,
    },
    {
      name: 'direction',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '朝向',
          en_US: 'Direction',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '线是水平还是垂直类型',
      defaultValue: 'hoz',
    },
    {
      name: 'orientation',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标题位置',
          en_US: 'Orientation',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['left', 'right', 'center'],
      },
      description: '分割线标题的位置',
      defaultValue: 'center',
    },
  ],
  icon: '',
  category: '通用',
  snippets: require('./snippets'),
};
