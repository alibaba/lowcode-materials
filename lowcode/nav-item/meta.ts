module.exports = {
  group: '原子组件',
  componentName: 'Nav.Item',
  title: '导航项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Nav',
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'icon',
      propType: {
        type: 'icon',
      },
      description: '自定义图标',
    },
    {
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      description: '导航内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  icon: '',
  category: '引导',
};
