import snippets from './snippets';

export default {
  snippets,
  componentName: 'CustomTreeSelect',
  title: '高级树选择',
  category: '表单',
  props: [
    {
      name: 'treeData',
      title: { label: '数据源', tip: '数据源' },
      setter: 'JsonSetter',
    },
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认选中值' },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
    },
    {
      name: 'value',
      title: { label: '当前值', tip: '当前值' },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
    },
    {
      name: 'fieldNames',
      title: { label: '自定义字段', tip: '当前值' },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
      defaultValue: {
        title: 'title',
        key: 'key',
        children: 'children'
      }
    },
    {
      name: 'treeCheckStrictly',
      title: { label: '完全受控', tip: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'autoClearSearchValue',
      title: {
        label: '自动清空搜索',
        tip: '当多选模式下值被选择，自动清空搜索框',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否显示边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    // {
    //   name: 'dropdownClassName',
    //   title: {
    //     label: '下拉菜单的 className 属性',
    //     tip: '下拉菜单的 className 属性',
    //   },
    //   propType: 'string',
    // },
    {
      name: 'dropdownMatchSelectWidth',
      title: {
        label: '下拉列表同款',
        tip: '下拉菜单和选择器同宽',
      },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    // {
    //   name: 'dropdownStyle',
    //   title: { label: '下拉菜单的样式', tip: '下拉菜单的样式' },
    //   setter: 'JsonSetter',
    // },
    {
      name: 'filterTreeNode',
      title: {
        label: '筛选节点',
        tip: '是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值',
      },
      propType: {
        type: 'oneOfType',
        value: ['bool', 'func']
      },
    },
    {
      name: 'labelInValue',
      title: {
        label: '值包含标签',
        tip:
          '是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'listHeight',
      title: { label: '设置弹窗滚动高度', tip: '设置弹窗滚动高度' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'loadData',
      title: { label: '异步加载数据', tip: '异步加载数据' },
      propType: 'func',
    },
    {
      name: 'maxTagCount',
      title: { label: '最多显示多少个 tag', tip: '最多显示多少个 tag' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'maxTagPlaceholder',
      title: { label: '隐藏 tag 时显示的内容', tip: '隐藏 tag 时显示的内容' },
      propType: { type: 'oneOfType', value: ['node', 'func'] },
    },
    {
      name: 'multiple',
      title: {
        label: '支持多选',
        tip: '支持多选（当设置 treeCheckable 时自动变为 true）',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'placeholder',
      title: { label: '选择框默认文字', tip: '选择框默认文字' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'showCheckedStrategy',
      title: {
        label: '定义选中项回填的方式',
        tip:
          '定义选中项回填的方式。`SHOW_ALL`: 显示所有选中节点(包括父节点)。`SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点',
      },
      propType: {
        type: 'oneOf',
        value: ['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD'],
      },
    },
    {
      name: 'showSearch',
      title: { label: '是否支持搜索框', tip: '是否支持搜索框' },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '选择框大小' },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      defaultValue: 'middle',
    },
    {
      name: 'showArrow',
      title: {
        label: '下拉图标',
        tip: '是否显示下拉图标，单选模式下默认 `true`',
      },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'suffixIcon',
      title: {
        label:
          '自定义后缀图标',
        tip:
          '暂废--自定义的选择框后缀图标, 多选模式下必须同时设置 `showArrow` 为 true',
      },
      propType: 'node',
    },
    {
      name: 'treeCheckable',
      title: { label: '显示勾选框', tip: '显示勾选框' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'treeDefaultExpandAll',
      title: { label: '默认展开所有树节点', tip: '默认展开所有树节点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'treeDefaultExpandedKeys',
      title: { label: '默认展开的树节点', tip: '默认展开的树节点' },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
    },
    {
      name: 'treeExpandedKeys',
      title: { label: '设置展开的树节点', tip: '设置展开的树节点' },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
    },
    {
      name: 'virtual',
      title: {
        label: '设置 false 时关闭虚拟滚动',
        tip: '设置 false 时关闭虚拟滚动',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'onChange',
      title: { label: '选中树节点时调用此函数', tip: '选中树节点时调用此函数' },
      propType: 'func',
    },
    {
      name: 'onSearch',
      title: { label: '文本框值变化时回调', tip: '文本框值变化时回调' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: { label: '被选中时调用', tip: '被选中时调用' },
      propType: 'func',
    },
    {
      name: 'onTreeExpand',
      title: { label: '展示节点时调用', tip: '展示节点时调用' },
      propType: 'func',
    },
    {
      name: 'treeIcon',
      title: {
        label: '图标显示',
        tip: '是否显示图标',
      },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'treeLine',
      title: {
        label: '线条启用',
        tip: '是否显示线条样式',
      },
      propType: 'bool',
      setter: 'BoolSetter'
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
    }
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"选中树节点时调用此函数",
          template:
            "onChange(value,label,extra,${extParams}){\n// 选中树节点时调用此函数\nconsole.log('onChange',value,label,extra);}",
        },
        {
          name: 'onSearch',
          description:"文本框值变化时回调",

          template:
            "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log('onSearch',value);}",
        },
        {
          name: 'onSelect',
          description:"被选中时调用",

          template:
            "onSelect(value,node,extra,${extParams}){\n// 被选中时调用\nconsole.log('onSelect',value,node,extra);}",
        },
        {
          name: 'onTreeExpand',
          description:"展示节点时调用",

          template:
            "onTreeExpand(expandedKeys,${extParams}){\n// 展示节点时调用\nconsole.log('onTreeExpand',expandedKeys);}",
        },
      ],
    },
  },
};
