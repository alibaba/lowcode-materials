import snippets from './snippets';

export default {
  snippets,
  componentName: 'Cascader',
  title: '级联选择',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认的选中项', tip: '默认的选中项' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'value',
      title: { label: '当前选中项', tip: '当前选中项' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'options',
      title: { label: '选项数据', tip: '可选项数据源' },
      setter: 'JsonSetter',
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'changeOnSelect',
      title: {
        label: '点选触发',
        tip: '点选每级菜单选项值都会触发onChange',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'className',
      title: { label: '自定义类名', tip: '自定义类名' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'expandTrigger',
      title: { label: '菜单触发方式', tip: '触发次级菜单的展开的方式' },
      propType: { type: 'oneOf', value: ['click', 'hover'] },
    },
    {
      name: 'notFoundContent',
      title: { label: '无数据展示', tip: '无数据' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'placeholder',
      title: { label: '输入框占位文本', tip: '输入框占位文本' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'placement',
      title: { label: '浮层预设位置', tip: '浮层预设位置' },
      propType: {
        type: 'oneOf',
        value: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      },
    },
    {
      name: 'showSearch',
      title: { label: '支持搜索', tip: '在选择框中显示搜索框' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '输入框大小' },
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
      name: 'style',
      title: { label: '自定义样式', tip: '自定义样式' },
      propType: 'object',
    },
    {
      name: 'onChange',
      title: { label: '选择完成后的回调', tip: '选择完成后的回调' },
      propType: 'func',
    },
    {
      name: 'onPopupVisibleChange',
      title: { label: '显示/隐藏浮层的回调', tip: '显示/隐藏浮层的回调' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"选择完成后的回调",

          template:
            "onChange(value,selectedOptions,${extParams}){\n// 选择完成后的回调\nconsole.log('onChange', value, selectedOptions);}",
        },
        {
          name: 'onPopupVisibleChange',
          description:"隐藏浮层的回调",

          template:
            "onPopupVisibleChange(value,selectedOptions,${extParams}){\n// 显示/隐藏浮层的回调\nconsole.log('onPopupVisibleChange', value, selectedOptions);}",
        },
      ],
    },
  },
};
