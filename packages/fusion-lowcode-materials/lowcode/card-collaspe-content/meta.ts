module.exports = {
  group: '原子组件',
  componentName: 'CardCollaspeContent',
  title: 'CardCollaspeContent',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Card',
    main: '',
    destructuring: true,
    subName: 'CollaspeContent',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'contentHeight',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      description: '内容区域的固定高度',
      defaultValue: 120,
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
