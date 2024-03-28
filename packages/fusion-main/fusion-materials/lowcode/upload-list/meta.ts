module.exports = {
  group: '原子组件',
  componentName: 'Upload.List',
  title: 'Upload.List',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Upload',
    main: '',
    destructuring: true,
    subName: 'List',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'locale',
      propType: 'object',
      description: '多语言',
    },
    {
      name: 'listType',
      propType: {
        type: 'oneOf',
        value: ['text', 'image', 'card'],
      },
      description: '文件列表，数据格式请参考 文件对象',
      defaultValue: 'text',
    },
    {
      name: 'value',
      propType: {
        type: 'instanceOf',
        value: 'array',
      },
      description: '文件列表',
      defaultValue: [],
    },
    {
      name: 'closable',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'onRemove',
      propType: 'func',
      description: '删除文件回调(支持Promise)',
    },
    {
      name: 'onCancel',
      propType: 'func',
      description: '取消上传回调(支持Promise)',
    },
    {
      name: 'onImageError',
      propType: 'func',
      description: '头像加载出错回调',
    },
    {
      name: 'onPreview',
      propType: 'func',
      description: 'listType=card时点击图片回调',
    },
    {
      name: 'extraRender',
      propType: 'func',
      description: '自定义额外渲染',
    },
    {
      name: 'progressProps',
      propType: 'object',
      description: '透传给Progress props',
    },
    {
      name: 'children',
      propType: 'node',
    },
    {
      name: 'uploader',
      propType: 'any',
    },
    {
      name: 'useDataURL',
      propType: 'bool',
      description: '可选参数，是否本地预览',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'isPreview',
      propType: 'bool',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
