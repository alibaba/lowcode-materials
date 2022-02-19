module.exports = {
  group: '原子组件',
  componentName: 'SubNav',
  title: 'SubNav',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Nav',
    main: '',
    destructuring: true,
    subName: 'SubNav',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'icon',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'instanceOf',
            value: 'node',
          },
        ],
      },
      description: '自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`',
    },
    {
      name: 'label',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标签内容',
    },
    {
      name: 'selectable',
      propType: 'bool',
      description: '是否可选',
      defaultValue: false,
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '导航项和子导航',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
