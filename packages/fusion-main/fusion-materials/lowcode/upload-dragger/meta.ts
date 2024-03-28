module.exports = {
  group: '原子组件',
  componentName: 'Upload.Dragger',
  title: 'Upload.Dragger',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Upload',
    main: '',
    destructuring: true,
    subName: 'DragUpload',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      description: '样式前缀',
      defaultValue: 'next-',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'shape',
      propType: 'string',
    },
    {
      name: 'onDragOver',
      propType: 'func',
    },
    {
      name: 'onDragLeave',
      propType: 'func',
    },
    {
      name: 'onDrop',
      propType: 'func',
    },
    {
      name: 'limit',
      propType: 'number',
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
      name: 'defaultValue',
      propType: {
        type: 'instanceOf',
        value: 'array',
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
      name: 'listType',
      propType: 'string',
    },
    {
      name: 'timeout',
      propType: 'number',
    },
  ],
  category: '基础',
};
