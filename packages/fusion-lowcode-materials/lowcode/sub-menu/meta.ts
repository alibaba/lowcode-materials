module.exports = {
  group: '原子组件',
  componentName: 'SubMenu',
  title: '子菜单',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Menu',
    main: '',
    destructuring: true,
    subName: 'SubMenu',
  },
  props: [
    {
      name: 'key',
      propType: 'string',
      description: '子菜单标识符',
    },
    {
      name: 'label',
      propType: 'node',
      description: '标签内容',
    },
    {
      name: 'selectable',
      propType: 'bool',
      description: '是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效',
      defaultValue: false,
    },
    {
      name: 'mode',
      propType: {
        type: 'oneOf',
        value: ['inline', 'popup'],
      },
      description: '子菜单打开方式，如果设置会覆盖 Menu 上的同名属性\n@default Menu 的 mode 属性值',
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
