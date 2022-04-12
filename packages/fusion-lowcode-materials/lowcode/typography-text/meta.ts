module.exports = {
  group: '原子组件',
  componentName: 'Typography.Text',
  title: 'Text',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Typography',
    main: '',
    destructuring: true,
    subName: 'Text',
  },
  props: [
    {
      name: 'children',
      propType: 'string',
    },
    {
      name: 'delete',
      propType: 'bool',
      description: '添加删除线样式',
      defaultValue: false,
    },
    {
      name: 'mark',
      propType: 'bool',
      description: '添加标记样式',
      defaultValue: false,
    },
    {
      name: 'underline',
      propType: 'bool',
      description: '添加下划线样式',
      defaultValue: false,
    },
    {
      name: 'strong',
      propType: 'bool',
      description: '是否加粗',
      defaultValue: false,
    },
    {
      name: 'code',
      propType: 'bool',
      description: '添加代码样式',
      defaultValue: false,
    },
    {
      name: 'component',
      propType: {
        type: 'oneOf',
        value: ['span', 'h1', 'h2', 'h3', 'h4'],
      },
      description: '设置标签类型',
      defaultValue: 'span',
    },
    {
      name: 'onClick',
      propType: 'func',
      description: '鼠标点击',
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
        setter: 'TextAreaSetter',
        supportVariable: true,
      },
    ],
  },
  experimental: {
    callbacks: {
      onHoverHook: () => false,
      onMouseDownHook: () => false,
      onClickHook: () => false,
      onMove: () => false,
    },
  },
  category: '基础',
};
