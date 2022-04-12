module.exports = {
  group: '原子组件',
  componentName: 'Menu.Divider',
  title: '菜单分隔线',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Menu',
    main: '',
    destructuring: true,
    subName: 'Divider',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: false,
      nestingRule: {
        parentWhitelist: ['Menu', 'SubMenu', 'Menu.Group', 'MenuButton'],
      },
    },
  },
  experimental: {
    callbacks: {
      onHoverHook: () => false,
      onMouseDownHook: () => false,
      onClickHook: () => false,
      onMove: () => false,
    },
  },
  icon: '',
  category: '信息输入',
};
