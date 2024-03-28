module.exports = {
  group: '原子组件',
  componentName: 'List.Item',
  title: '列表项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'List',
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'title',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'description',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'media',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'extra',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
  ],
  icon: '',
  category: '信息输入',
};
