module.exports = {
  group: '原子组件',
  componentName: 'List',
  title: '列表',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'List',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'header',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium'],
      },
    },
    {
      name: 'footer',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'divider',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
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
