module.exports = {
  group: '原子组件',
  componentName: 'Typography',
  title: 'Text',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Typography',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'component',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
      description: '设置标签类型',
      defaultValue: 'article',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'children',
      title: '内容',
      propType: 'string',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  icon: '',
  category: '常用',
};
