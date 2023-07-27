import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Tree',
  title: '树形控件',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Tree',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'dataSource',
      propType: {
        type: 'object',
      },
      description: '数据源，该属性优先级高于 children',
    },
    {
      name: 'showLine',
      propType: 'bool',
      description: '是否显示树的线',
      defaultValue: false,
    },
    {
      name: 'selectable',
      propType: 'bool',
      description: '是否支持选中节点',
      defaultValue: true,
    },
    {
      name: 'onSelect',
      propType: 'func',
      description:
        '选中或取消选中节点时触发的回调函数\n@param {Array} selectedKeys 选中节点key的数组\n@param {Object} extra 额外参数\n@param {Array} extra.selectedNodes 选中节点的数组\n@param {Object} extra.node 当前操作的节点\n@param {Boolean} extra.selected 当前操作是否是选中',
    },
    {
      name: 'multiple',
      propType: 'bool',
      description: '是否支持多选',
      defaultValue: false,
    },
    {
      name: 'checkable',
      propType: 'bool',
      description: '是否支持勾选节点的复选框',
      defaultValue: false,
    },
    {
      name: 'checkStrictly',
      propType: 'bool',
      description: '勾选节点复选框是否完全受控（父子节点选中状态不再关联）',
      defaultValue: false,
    },
    {
      name: 'checkedStrategy',
      propType: {
        type: 'oneOf',
        value: ['all', 'parent', 'child'],
      },
      description:
        '定义选中时回填的方式\n@enumdesc 返回所有选中的节点, 父子节点都选中时只返回父节点, 父子节点都选中时只返回子节点',
      defaultValue: 'all',
    },
    {
      name: 'onCheck',
      propType: 'func',
      description:
        '勾选或取消勾选复选框时触发的回调函数\n@param {Array} checkedKeys 勾选复选框节点key的数组\n@param {Object} extra 额外参数\n@param {Array} extra.checkedNodes 勾选复选框节点的数组\n@param {Array} extra.checkedNodesPositions 包含有勾选复选框节点和其位置的对象的数组\n@param {Array} extra.indeterminateKeys 半选复选框节点 key 的数组\n@param {Object} extra.node 当前操作的节点\n@param {Boolean} extra.checked 当前操作是否是勾选',
    },
    {
      name: 'defaultExpandAll',
      propType: 'bool',
      description: '是否默认展开所有节点',
      defaultValue: false,
    },
    {
      name: 'autoExpandParent',
      propType: 'bool',
      description: '是否自动展开父节点，建议受控时设置为false',
      defaultValue: true,
    },
    {
      name: 'onExpand',
      propType: 'func',
      description:
        '展开或收起节点时触发的回调函数\n@param {Array} expandedKeys 展开的节点key的数组\n@param {Object} extra 额外参数\n@param {Object} extra.node 当前操作的节点\n@param {Boolean} extra.expanded 当前操作是否是展开',
    },
    {
      name: 'editable',
      propType: 'bool',
      description: '是否支持编辑节点内容',
      defaultValue: false,
    },
    {
      name: 'onEditFinish',
      propType: 'func',
      description:
        '编辑节点内容完成时触发的回调函数\n@param {String} key 编辑节点的 key\n@param {String} label 编辑节点完成时节点的文本\n@param {Object} node 当前编辑的节点',
    },
    {
      name: 'draggable',
      propType: 'bool',
      description: '是否支持拖拽节点',
      defaultValue: false,
    },
    {
      name: 'onDragStart',
      propType: 'func',
      description:
        '开始拖拽节点时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 拖拽的节点',
    },
    {
      name: 'onDragEnter',
      propType: 'func',
      description:
        '拖拽节点进入目标节点时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点\n@param {Array} info.expandedKeys 当前展开的节点key的数组',
    },
    {
      name: 'onDragOver',
      propType: 'func',
      description:
        '拖拽节点在目标节点上移动的时候触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点',
    },
    {
      name: 'onDragLeave',
      propType: 'func',
      description:
        '拖拽节点离开目标节点时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点',
    },
    {
      name: 'onDragEnd',
      propType: 'func',
      description:
        '拖拽节点拖拽结束时触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点',
    },
    {
      name: 'onDrop',
      propType: 'func',
      description:
        '拖拽节点放入目标节点内或前后触发的回调函数\n@param {Object} info 拖拽信息\n@param {Object} info.event 事件对象\n@param {Object} info.node 目标节点\n@param {Object} info.dragNode 拖拽的节点\n@param {Array} info.dragNodesKeys 拖拽的节点和其子节点 key 的数组\n@param {Number} info.dropPosition 放置位置，-1代表当前节点前，0代表当前节点里，1代表当前节点后',
    },
    {
      name: 'canDrop',
      propType: 'func',
      description: '节点是否可被作为拖拽的目标节点',
    },
    {
      name: 'loadData',
      propType: 'func',
      description: '异步加载数据的函数',
    },
    {
      name: 'filterTreeNode',
      propType: 'func',
      description: '按需筛选高亮节点',
    },
    {
      name: 'onRightClick',
      propType: 'func',
      description: '右键点击节点时触发的回调函数',
    },
    {
      name: 'isLabelBlock',
      propType: 'bool',
      description:
        '设置节点是否占满剩余空间，一般用于统一在各节点右侧添加元素(借助 flex 实现，暂时只支持 ie10+)',
      defaultValue: false,
    },
    {
      name: 'isNodeBlock',
      propType: 'bool',
      description: '设置节点是否占满一行',
      defaultValue: false,
    },
    {
      name: 'animation',
      propType: 'bool',
      description: '是否开启展开收起动画',
      defaultValue: true,
    },
    {
      name: 'focusedKey',
      propType: 'string',
      description: '当前获得焦点的子菜单或菜单项 key 值',
    },
    {
      name: 'renderChildNodes',
      propType: 'func',
      description: '渲染子节点',
    },
    {
      name: 'useVirtual',
      propType: 'bool',
      description: '是否开启虚拟滚动',
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
      name: 'onItemKeyDown',
      propType: 'func',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'dataSource',
        title: '节点数据',
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'showLine',
        title: '显示线',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'multiple',
        title: '支持多选',
        setter: {
          componentName: 'BoolSetter',
        },
        description: '是否支持多选',
        defaultValue: false,
      },
      {
        name: 'checkable',
        title: '复选框',
        setter: {
          componentName: 'BoolSetter',
        },
        description: '是否支持勾选节点的复选框',
        defaultValue: false,
      },
      {
        name: 'editable',
        title: '支持编辑',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      {
        name: 'draggable',
        title: '支持拖拽',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      {
        name: 'selectable',
        title: '支持选中',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      {
        name: 'defaultExpandedKeys',
        display: 'block',
        title: '默认展开的节点',
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'defaultSelectedKeys',
        display: 'block',
        title: '默认选中的节点',
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      events: ['onSelect', 'onCheck', 'onExpand'],
    },
  },
  icon: '',
  category: '信息展示',
  snippets,
};
