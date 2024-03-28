module.exports = {
  group: '原子组件',
  componentName: 'Select.Option',
  title: 'Select.Option',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Select',
    main: '',
    destructuring: true,
    subName: 'Option',
  },
  props: [
    {
      name: 'value',
      propType: 'string',
      description: '选项值',
      defaultValue: 'test',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  icon: '',
  category: '信息输入',
};
