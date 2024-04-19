import snippets from './snippets';

export default {
  snippets,
  componentName: 'CustomTree',
  title: '高级树形控件',
  category: '数据展示',
  props: [
    {
      name: 'treeData',
      title: {
        label: '数据',
        tip: 'treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）',
      },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
    },
    {
      name: 'autoExpandParent',
      title: { label: '是否自动展开父节点', tip: '是否自动展开父节点' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'blockNode',
      title: { label: '是否节点占据一行', tip: '是否节点占据一行' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'checkable',
      title: {
        label: '节点前添加 Checkbox 复选框',
        tip: '节点前添加 Checkbox 复选框',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'checkedKeys',
      title: {
        label: '复选框节点',
        tip:
          '（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',
      },
      // propType: {
      //   type: 'oneOfType',
      //   value: [{ value: 'arrayOf', type: 'string' }, 'object'],
        
      // },
    },
    {
      name: 'checkStrictly',
      title: {
        label: '完全受控',
        tip: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联）',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'defaultCheckedKeys',
      title: { label: '默认选中值', tip: '默认选中复选框的树节点' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',
      },
    },
    {
      name: 'defaultExpandAll',
      title: { label: '默认展开所有树节点', tip: '默认展开所有树节点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'defaultExpandedKeys',
      title: { label: '默认展开指定的树节点', tip: '默认展开指定的树节点' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',
      },
    },
    {
      name: 'defaultExpandParent',
      title: { label: '默认展开父节点', tip: '默认展开父节点' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'defaultSelectedKeys',
      title: { label: '默认选中的树节点', tip: '默认选中的树节点' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',
      },
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'draggable',
      title: { label: '节点可拖拽', tip: '设置节点可拖拽（IE>8）' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'expandedKeys',
      title: {
        label: '展开指定节点',
        tip: '（受控）展开指定的树节点',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',}
    },
    {
      name: 'filterTreeNode',
      title: {
        label: '筛选树节点',
        tip: '按需筛选树节点（高亮），返回 true',
      },
      propType: 'func',
    },
    {
      name: 'loadData',
      title: { label: '异步加载数据', tip: '异步加载数据' },
      propType: 'func',
    },
    {
      name: 'loadedKeys',
      title: {
        label: '已经加载节点',
        tip: '（受控）已经加载的节点，需要配合 `loadData` 使用',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',
      },
    },
    {
      name: 'multiple',
      title: {
        label: '支持多选',
        tip: '支持点选多个节点（节点本身）',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'selectable',
      title: { label: '是否可选中', tip: '是否可选中' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'selectedKeys',
      title: {
        label: '选中的树节点',
        tip: '（受控）设置选中的树节点',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'JsonSetter',
      },
    },
    {
      name: 'showIcon',
      title: {
        label: '展示图标',
        tip:
          '是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    // {
    //   name: 'switcherIcon',
    //   title: {
    //     label: '自定义树节点的展开/折叠图标',
    //     tip: '自定义树节点的展开/折叠图标',
    //   },
    //   propType: 'node',
    // },
    {
      name: 'showLine',
      title: { label: '是否展示连接线', tip: '是否展示连接线' },
      propType: { type: 'oneOfType', value: ['bool'] },
    },
    {
      name: 'virtual',
      title: {
        label: '虚拟滚动',
        tip: '设置 false 时关闭虚拟滚动',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'onCheck',
      title: { label: '点击复选框触发', tip: '点击复选框触发' },
      propType: 'func',
    },
    {
      name: 'onDragEnd',
      title: { label: 'dragend 触发时调用', tip: 'dragend 触发时调用' },
      propType: 'func',
    },
    {
      name: 'onDragEnter',
      title: { label: 'dragenter 触发时调用', tip: 'dragenter 触发时调用' },
      propType: 'func',
    },
    {
      name: 'onDragLeave',
      title: { label: 'dragleave 触发时调用', tip: 'dragleave 触发时调用' },
      propType: 'func',
    },
    {
      name: 'onDragOver',
      title: { label: 'dragover 触发时调用', tip: 'dragover 触发时调用' },
      propType: 'func',
    },
    {
      name: 'onDragStart',
      title: { label: '开始拖拽时调用', tip: '开始拖拽时调用' },
      propType: 'func',
    },
    {
      name: 'onDrop',
      title: { label: 'drop 触发时调用', tip: 'drop 触发时调用' },
      propType: 'func',
    },
    {
      name: 'onExpand',
      title: { label: '展开/收起节点时触发', tip: '展开/收起节点时触发' },
      propType: 'func',
    },
    {
      name: 'onLoad',
      title: { label: '节点加载完毕时触发', tip: '节点加载完毕时触发' },
      propType: 'func',
    },
    {
      name: 'onRightClick',
      title: { label: '响应右键点击', tip: '响应右键点击' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: { label: '点击树节点触发', tip: '点击树节点触发' },
      propType: 'func',
    },
    {
      name: 'icon.rotate',
      title: {
        label: '旋转角度',
        tip: '图标旋转角度',
      },
      propType: 'number',
    },
    {
      name: 'icon.spin',
      title: { label: '旋转动画', tip: '是否有旋转动画' },
      propType: 'bool',
    },
    {
      name: 'icon.style',
      title: '图标样式',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'icon.style',
          title: {
            label: '图标样式',
            tip: 'icon.style | 用于设置 Drawer 头部的样式',
          },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onCheck',
          description:"点击复选框触发",

          template:
            "onCheck(checkedKeys,event,${extParams}){\n// 点击复选框触发\nconsole.log('onCheck',checkedKeys,event);}",
        },
        {
          name: 'onDragEnd',
          description:"结束触发时调用",

          template:
            "onDragEnd({event,node},${extParams}){\n// dragend 触发时调用\nconsole.log('onDragEnd',event,node);}",
        },
        {
          name: 'onDragEnter',
          description:"回车触发时调用",

          template:
            "onDragEnter({event,node,expandedKeys},${extParams}){\n// dragenter 触发时调用\nconsole.log('onDragEnter',event,node,expandedKeys);}",
        },
        {
          name: 'onDragLeave',
          description:"无结果触发调用",

          template:
            "onDragLeave({event,node},${extParams}){\n// dragleave 触发时调用\nconsole.log('onDragLeave',event,node);}",
        },
        {
          name: 'onDragOver',
          description:"dragover 触发时调用",

          template:
            "onDragOver({event,node},${extParams}){\n// dragover 触发时调用\nconsole.log('onDragOver',event,node);}",
        },
        {
          name: 'onDragStart',
          description:"开始拖拽时调用",

          template:
            "onDragStart({event,node},${extParams}){\n// 开始拖拽时调用\nconsole.log('onDragStart',event,node);}",
        },
        {
          name: 'onDrop',
          description:"触发时调用",

          template:
            "onDrop({event,node,dragNode,dragNodesKeys},${extParams}){\n// drop 触发时调用\nconsole.log('onDrop',event,node,dragNode,dragNodesKeys);}",
        },
        {
          name: 'onExpand',
          description:"展开/收起节点时触发",

          template:
            "onExpand(expandedKeys,{expanded,node},${extParams}){\n// 展开/收起节点时触发\nconsole.log('onExpand',expandedKeys,expanded,node);}",
        },
        {
          name: 'onLoad',
          description:"节点加载完毕时触发",

          template:
            "onLoad(loadedKeys,{event,node},${extParams}){\n// 节点加载完毕时触发\nconsole.log('onLoad',loadedKeys,event,node);}",
        },
        {
          name: 'onRightClick',
          description:"响应右键点击",

          template:
            "onRightClick({event,node},${extParams}){\n// 响应右键点击\nconsole.log('onRightClick',event,node);}",
        },
        {
          name: 'onSelect',
          description:"点击树节点触发",

          template:
            "onSelect(selectedKeys,event,${extParams}){\n// 点击树节点触发\nconsole.log('onSelect',selectedKeys,event);}",
        },
      ],
    },
  },
};
