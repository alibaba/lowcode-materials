module.exports = {
  group: '原子组件',
  componentName: 'ErrorBoundary',
  title: 'ErrorBoundary',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'ConfigProvider',
    main: '',
    destructuring: true,
    subName: 'ErrorBoundary',
  },
  props: [
    {
      name: 'children',
      propType: {
        type: 'instanceOf',
        value: 'element',
      },
    },
    {
      name: 'afterCatch',
      propType: 'func',
      description:
        '捕获错误后的自定义处理, 比如埋点上传\n@param {Object} error 错误\n@param {Object} errorInfo 错误详细信息',
    },
    {
      name: 'fallbackUI',
      propType: 'func',
      description:
        '捕获错误后的展现 自定义组件\n@param {Object} error 错误\n@param {Object} errorInfo 错误详细信息\n@returns {Element} 捕获错误后的处理',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
