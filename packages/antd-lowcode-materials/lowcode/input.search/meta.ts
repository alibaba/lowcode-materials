import snippets from './snippets';

export default {
  snippets,
  componentName: 'Input.Search',
  title: '搜索框',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认值' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'value',
      title: { label: '当前值', tip: '当前值' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'loading',
      title: { label: '加载状态', tip: 'loading' },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'placeholder',
      title: { label: '占位提示', tip: '占位提示' },
      propType: 'string',
      defaultValue: '请输入',
      setter: 'StringSetter'
    },
    // {
    //   name: 'id',
    //   title: { label: '输入框ID', tip: '输入框的ID' },
    //   propType: 'string',
    // },
    {
      name: 'size',
      title: { label: '控件大小', tip: '控件大小' },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      setter: {
        componentName: 'RadioGroupSetter',
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
      name: 'enterButton',
      title: {
        label: '确认按钮',
        tip: '是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。',
      },
      propType: { type: 'oneOfType', value: ['bool', 'node'] },
      defaultValue: false,
    },
    {
      name: 'addonAfter',
      title: { label: '后置标签', tip: '后置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'addonBefore',
      title: { label: '前置标签', tip: '前置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'prefix',
      title: { label: '前缀', tip: '前缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'suffix',
      title: { label: '后缀', tip: '后缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'onChange',
      title: { label: '输入框内容变化时的回调', tip: '输入框内容变化时的回调' },
      propType: 'func',
    },
    {
      name: 'onPressEnter',
      title: { label: '按下回车的回调', tip: '按下回车的回调' },
      propType: 'func',
    },
    {
      name: 'onSearch',
      title: {
        label: '点击搜索或按下回车键时的回调',
        tip: '点击搜索或按下回车键时的回调',
      },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: '获取焦点回调', tip: '获取焦点回调' },
      propType: 'func',
    },
    {
      name: 'onKeyDown',
      title: { label: '按键按下时的回调', tip: '按键按下时的回调' },
      propType: 'func',
    },
    {
      name: 'onKeyPress',
      title: { label: '按键按下后的回调', tip: '按键按下之后释放之前的回调' },
      propType: 'func',
    },
    {
      name: 'onKeyUp',
      title: { label: '按键释放回调', tip: '按键释放之后的回调' },
      propType: 'func',
    },
    {
      name: 'onBlur',
      title: { label: '失去焦点回调', tip: '失去焦点回调' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"输入框内容变化时的回调",
          template:
            "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
        },
        {
          name: 'onPressEnter',
          description:"按下回车的回调",

          template:
            "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
        },
        {
          name: 'onSearch',
          description:"点击搜索图标",

          template:
            "onSearch(value,event,${extParams}){\n// 点击搜索图标、清除图标，或按下回车键时的回调\nconsole.log('onSearch',value,event);}",
        },
        {
          name: 'onFocus',
          description:"点击搜索图标",

          template: "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
        },
        {
          name: 'onKeyDown',
          description:"按键按下时的回调",

          template:
            "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
        },
        {
          name: 'onKeyPress',
          description:"按键按下后的回调",

          template:
            "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
        },
        {
          name: 'onKeyUp',
          description:"按键释放回调",

          template: "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
        },
        {
          name: 'onBlur',
          description:"按键释放回调",

          template: "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
        },
      ],
    },
  },
};
