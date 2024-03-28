module.exports = {
  group: '原子组件',
  componentName: 'Upload.Selecter',
  title: 'Upload.Selecter',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Upload',
    main: '',
    destructuring: true,
    subName: 'Selecter',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
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
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用上传功能',
    },
    {
      name: 'multiple',
      propType: 'bool',
      description: '是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件',
      defaultValue: false,
    },
    {
      name: 'dragable',
      propType: 'bool',
      description: '是否支持拖拽上传，`ie10+` 支持。',
    },
    {
      name: 'accept',
      propType: 'string',
      description:
        '接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description: '文件选择回调',
    },
    {
      name: 'onDragOver',
      propType: 'func',
      description: '拖拽经过回调',
    },
    {
      name: 'onDragLeave',
      propType: 'func',
      description: '拖拽离开回调',
    },
    {
      name: 'onDrop',
      propType: 'func',
      description: '拖拽完成回调',
    },
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'name',
      propType: 'string',
      defaultValue: 'file',
    },
  ],
  category: '基础',
};
