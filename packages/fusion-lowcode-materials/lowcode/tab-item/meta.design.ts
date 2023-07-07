module.exports = {
  group: '原子组件',
  componentName: 'Tab.Item',
  title: '选项卡Item',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Tab',
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'isAutoContainer',
      initialValue: true,
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
      condition: () => false,
    },
    {
      name: 'title',
      propType: 'string',
      description: '选项卡标题',
    },
    {
      name: 'closeable',
      propType: 'bool',
      description: '单个选项卡是否可关闭',
      defaultValue: false,
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '选项卡是否被禁用',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isMinimalRenderUnit: true,
      disableBehaviors: '*',
      nestingRule: {
        parentWhitelist: ['Tab'],
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
  category: 'null',
};
