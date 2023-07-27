module.exports = {
  group: '原子组件',
  componentName: 'Paragraph',
  title: 'Paragraph',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Typography',
    main: '',
    destructuring: true,
    subName: 'Paragraph',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'component',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
      description: '设置标签类型',
      defaultValue: 'p',
    },
    {
      name: 'type',
      defaultValue: 'long',
    },
    {
      name: 'size',
      defaultValue: 'medium',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
