module.exports = {
  group: '原子组件',
  componentName: 'Form.Error',
  title: 'Form.Error',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Form',
    main: '',
    destructuring: true,
    subName: 'Error',
  },
  props: [
    {
      name: 'name',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'instanceOf',
            value: 'array',
          },
        ],
      },
      description: '表单名',
    },
    {
      name: 'field',
      propType: 'object',
      description: '自定义 field (在 Form 内不需要设置)',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'instanceOf',
            value: 'node',
          },
          'func',
        ],
      },
      description: '自定义错误渲染, 可以是 node 或者 function(errors, state)',
    },
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
  ],
  category: '基础',
};
