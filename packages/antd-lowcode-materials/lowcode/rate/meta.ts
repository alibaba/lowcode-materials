import snippets from './snippets';

export default {
  snippets,
  componentName: 'Rate',
  title: '评分',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认值' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'allowHalf',
      title: { label: '支持半选', tip: '支持半选' },
      propType: 'bool',
      defaultValue: false,
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
      name: 'character',
      title: { label: '符号', tip: '自定义字符' },
      propType: 'node',
    },
    {
      name: 'count',
      title: { label: '总数', tip: 'star 总数' },
      propType: 'number',
      defaultValue: 5,
      setter: 'NumberSetter'
    },
    // {
    //   name: 'value',
    //   title: { label: '当前值', tip: '当前数' },
    //   propType: 'number',
    // },

    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'tooltips',
      title: { label: '提示信息', tip: '自定义每项的提示信息' },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'onBlur',
      title: { label: '失去焦点时的回调', tip: '失去焦点时的回调' },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: { label: '选择时的回调', tip: '选择时的回调' },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: '获取焦点时的回调', tip: '获取焦点时的回调' },
      propType: 'func',
    },
    {
      name: 'onHoverChange',
      title: { label: '鼠标经过时回调', tip: '鼠标经过时数值变化的回调' },
      propType: 'func',
    },
    {
      name: 'onKeyDown',
      title: { label: '按键回调', tip: '按键回调' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onBlur',
          description:"失去焦点时的回调",

          template: "onBlur(${extParams}){\n// 失去焦点时的回调\nconsole.log('onBlur');}",
        },
        {
          name: 'onChange',
          description:"选择时的回调",

          template:
            "onChange(value,${extParams}){\n// 选择时的回调\nconsole.log('onChange',value);}",
        },
        {
          name: 'onFocus',
          description:"获取焦点时的回调",

          template: "onFocus(${extParams}){\n// 获取焦点时的回调\nconsole.log('onFocus');}",
        },
        {
          name: 'onHoverChange',
          description:"鼠标经过时数值变化的回调",

          template:
            "onHoverChange(value,${extParams}){\n// 鼠标经过时数值变化的回调\nconsole.log('onHoverChange',value);}",
        },
        {
          name: 'onKeyDown',
          description:"按键回调",

          template: "onKeyDown(event,${extParams}){\n// 按键回调\nconsole.log('onKeyDown',event);}",
        },
      ],
    },
  },
};
