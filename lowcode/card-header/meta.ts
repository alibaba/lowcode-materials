module.exports = {
  group: '原子组件',
  componentName: 'CardHeader',
  title: 'CardHeader',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Card',
    main: '',
    destructuring: true,
    subName: 'Header',
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
      description: '卡片的标题',
    },
    {
      name: 'subTitle',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '卡片的副标题',
    },
    {
      name: 'extra',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标题区域的用户自定义内容',
    },
    {
      name: 'component',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
      description: '设置标签类型',
      defaultValue: 'div',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
