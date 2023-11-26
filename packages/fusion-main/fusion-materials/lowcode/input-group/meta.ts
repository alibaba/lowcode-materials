module.exports = {
  group: '原子组件',
  componentName: 'Input.Group',
  title: 'Input.Group',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Input',
    main: '',
    destructuring: true,
    subName: 'Group',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      description: '样式前缀',
      defaultValue: 'next-',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
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
      name: 'addonBefore',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '输入框前附加内容',
    },
    {
      name: 'addonBeforeClassName',
      propType: 'string',
      description: '输入框前附加内容css',
    },
    {
      name: 'addonAfter',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '输入框后附加内容',
    },
    {
      name: 'addonAfterClassName',
      propType: 'string',
      description: '输入框后额外css',
    },
    {
      name: 'rtl',
      propType: 'bool',
      description: 'rtl',
    },
  ],
  category: '基础',
};
