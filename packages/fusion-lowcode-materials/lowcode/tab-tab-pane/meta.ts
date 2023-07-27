module.exports = {
  group: '原子组件',
  componentName: 'Tab.TabPane',
  title: 'Tab.TabPane',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Tab',
    main: '',
    destructuring: true,
    subName: 'TabPane',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'title',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '选项卡标题',
    },
    {
      name: 'closeable',
      propType: 'bool',
      description: '单个选项卡是否可关闭',
      defaultValue: false,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '选项卡是否被禁用',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  category: '基础',
};
