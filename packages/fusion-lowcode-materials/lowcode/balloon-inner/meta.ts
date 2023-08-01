module.exports = {
  group: '原子组件',
  componentName: 'BalloonInner',
  title: 'BalloonInner',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Balloon',
    main: '',
    destructuring: true,
    subName: 'Inner',
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
      name: 'closable',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'children',
      propType: 'any',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'alignEdge',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'onClose',
      propType: 'func',
    },
    {
      name: 'style',
      propType: 'any',
    },
    {
      name: 'align',
      propType: 'string',
      defaultValue: 'b',
    },
    {
      name: 'type',
      propType: 'string',
      defaultValue: 'normal',
    },
    {
      name: 'isTooltip',
      propType: 'bool',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'pure',
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  category: '基础',
};
