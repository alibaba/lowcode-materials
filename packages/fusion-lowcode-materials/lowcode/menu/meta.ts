module.exports = {
  group: '原子组件',
  componentName: 'Menu',
  title: '菜单',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Menu',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'onItemClick',
      propType: 'func',
      description:
        '点击菜单项触发的回调函数\n@param {String} key 点击的菜单项的 key 值\n@param {Object} item 点击的菜单项对象\n@param {Object} event 点击的事件对象',
    },
    {
      name: 'defaultOpenAll',
      propType: 'bool',
      description:
        "初始展开所有的子菜单，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效，优先级高于 defaultOpenKeys",
      defaultValue: false,
    },
    {
      name: 'onOpen',
      propType: 'func',
      description:
        '打开或关闭子菜单触发的回调函数\n@param {String} key 打开的所有子菜单的 key 值\n@param {Object} extra 额外参数\n@param {String} extra.key 当前操作子菜单的 key 值\n@param {Boolean} extra.open 是否是打开',
    },
    {
      name: 'mode',
      propType: {
        type: 'oneOf',
        value: ['inline', 'popup'],
      },
      description: '子菜单打开的模式',
      defaultValue: 'inline',
    },
    {
      name: 'triggerType',
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '子菜单打开的触发行为',
      defaultValue: 'click',
    },
    {
      name: 'openMode',
      propType: {
        type: 'oneOf',
        value: ['single', 'multiple'],
      },
      description:
        '展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效',
      defaultValue: 'multiple',
    },
    {
      name: 'inlineIndent',
      propType: 'number',
      description: '内连子菜单缩进距离',
      defaultValue: 20,
    },
    {
      name: 'inlineArrowDirection',
      propType: {
        type: 'oneOf',
        value: ['down', 'right'],
      },
      defaultValue: 'down',
    },
    {
      name: 'popupAutoWidth',
      propType: 'bool',
      description:
        '是否自动让弹层的宽度和菜单项保持一致，如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理',
      defaultValue: false,
    },
    {
      name: 'popupAlign',
      propType: {
        type: 'oneOf',
        value: ['follow', 'outside'],
      },
      description: '弹层的对齐方式',
      defaultValue: 'follow',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹出子菜单自定义 className',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description:
        '选中或取消选中菜单项触发的回调函数\n@param {Array} selectedKeys 选中的所有菜单项的值\n@param {Object} item 选中或取消选中的菜单项\n@param {Object} extra 额外参数\n@param {Boolean} extra.select 是否是选中\n@param {Array} extra.key 菜单项的 key\n@param {Object} extra.label 菜单项的文本\n@param {Array} extra.keyPath 菜单项 key 的路径',
    },
    {
      name: 'selectMode',
      propType: {
        type: 'oneOf',
        value: ['single', 'multiple'],
      },
      description: '选中模式，单选还是多选，默认无值，不可选',
    },
    {
      name: 'shallowSelect',
      propType: 'bool',
      description: '是否只能选择第一层菜单项（不能选择子菜单中的菜单项）',
      defaultValue: false,
    },
    {
      name: 'hasSelectedIcon',
      propType: 'bool',
      description: '是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分',
      defaultValue: true,
    },
    {
      name: 'labelToggleChecked',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'isSelectIconRight',
      propType: 'bool',
      description:
        '是否将选中图标居右，仅当 hasSelectedIcon 为true 时生效。\n注意：SubMenu 上的选中图标一直居左，不受此API控制',
      defaultValue: false,
    },
    {
      name: 'direction',
      propType: {
        type: 'oneOf',
        value: ['ver', 'hoz'],
      },
      description: '菜单第一层展示方向',
      defaultValue: 'ver',
    },
    {
      name: 'hozAlign',
      propType: {
        type: 'oneOf',
        value: ['left', 'right'],
      },
      description:
        "横向菜单条 item 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效",
      defaultValue: 'left',
    },
    {
      name: 'hozInLine',
      propType: 'bool',
      description:
        "横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示， 仅在 direction='hoz' mode='popup' 时生效",
      defaultValue: false,
    },
    {
      name: 'header',
      propType: 'node',
      description: '自定义菜单头部',
    },
    {
      name: 'footer',
      propType: 'node',
      description: '自定义菜单尾部',
    },
    {
      name: 'autoFocus',
      propType: 'bool',
      description: '是否自动获得焦点',
      defaultValue: false,
    },
    {
      name: 'focusedKey',
      propType: 'string',
      description: '当前获得焦点的子菜单或菜单项 key 值',
    },
    {
      name: 'focusable',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'onItemFocus',
      propType: 'func',
    },
    {
      name: 'onBlur',
      propType: 'func',
    },
    {
      name: 'embeddable',
      propType: 'bool',
      description:
        "是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Menu style={{lineHeight: '100px'}}>` 自定义高度",
      defaultValue: false,
    },
    {
      name: 'onItemKeyDown',
      propType: 'func',
    },
    {
      name: 'expandAnimation',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'itemClassName',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'openKeys',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'arrayOf',
            value: 'string',
          },
        ],
      },
      description: '当前打开的子菜单的 key 值',
    },
    {
      name: 'defaultOpenKeys',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'arrayOf',
            value: 'string',
          },
        ],
      },
      description: '初始打开的子菜单的 key 值',
      defaultValue: [],
    },
    {
      name: 'selectedKeys',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'arrayOf',
            value: 'string',
          },
        ],
      },
      description: '当前选中菜单项的 key 值',
    },
    {
      name: 'defaultSelectedKeys',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'arrayOf',
            value: 'string',
          },
        ],
      },
      description: '初始选中菜单项的 key 值',
      defaultValue: [],
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  icon: '',
  category: '信息输入',
};
