module.exports = {
  group: '原子组件',
  componentName: 'Menu.PopupItem',
  title: '自定义弹出内容',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Menu',
    main: '',
    destructuring: true,
    subName: 'PopupItem',
  },
  props: [
    {
      name: 'key',
      propType: 'string',
      description: '菜单项标识符',
    },
    {
      name: 'label',
      propType: 'node',
      description: '标签内容',
    },
    {
      name: 'children',
      propType: 'node',
      description: '自定义弹层内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Menu', 'SubMenu', 'Menu.Group', 'MenuButton'],
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
