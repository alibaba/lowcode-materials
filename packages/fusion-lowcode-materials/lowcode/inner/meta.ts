module.exports = {
  group: '原子组件',
  componentName: 'Inner',
  title: 'Inner',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Dialog',
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
      name: 'className',
      propType: 'string',
    },
    {
      name: 'title',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'footer',
      propType: {
        type: 'oneOfType',
        value: [
          'bool',
          {
            type: 'instanceOf',
            value: 'node',
          },
        ],
      },
    },
    {
      name: 'footerAlign',
      propType: {
        type: 'oneOf',
        value: ['left', 'center', 'right'],
      },
      defaultValue: 'right',
    },
    {
      name: 'footerActions',
      propType: {
        type: 'instanceOf',
        value: 'array',
      },
      defaultValue: ['ok', 'cancel'],
    },
    {
      name: 'onOk',
      propType: 'func',
    },
    {
      name: 'onCancel',
      propType: 'func',
    },
    {
      name: 'okProps',
      propType: 'object',
    },
    {
      name: 'cancelProps',
      propType: 'object',
    },
    {
      name: 'closeable',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'onClose',
      propType: 'func',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'role',
      propType: 'string',
      defaultValue: 'dialog',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'height',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
