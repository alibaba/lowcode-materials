module.exports = {
  group: '原子组件',
  componentName: 'Collapse.Panel',
  title: '折叠面板Panel',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Collapse',
    main: '',
    destructuring: true,
    subName: 'Panel',
  },
  props: [
    {
      name: 'children',
      propType: 'any',
    },
    {
      name: 'style',
      propType: 'object',
      description: '子组件接受行内样式',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁止用户操作',
    },
    {
      name: 'title',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标题',
    },
  ],
  configure: {
    component: {
      nestingRule: {
        parentWhitelist: ['Collapse'],
      },
    },
    advanced: {
      callbacks: {
        onHoverHook: () => false,
        onMouseDownHook: () => false,
        onClickHook: () => false,
        onMove: () => false,
      },
    },
  },
  icon: '',
  category: '信息输入',
};
