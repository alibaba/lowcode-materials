module.exports = {
  group: '原子组件',
  componentName: 'Breadcrumb.Item',
  title: '面包屑 Item',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Breadcrumb',
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'children',
      description: '内容',
      propType: 'string',
    },
    {
      name: 'link',
      propType: 'string',
      description: '面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />`',
    },
    {
      name: 'activated',
      propType: 'bool',
    },
    {
      name: 'separator',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'className',
      propType: 'any',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: 'children',
        title: '文本内容',
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
  },
  icon: '',
  category: '引导',
};
