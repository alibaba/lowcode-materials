import snippets from './snippets';

export default {
  snippets,
  componentName: 'Switch',
  title: '开关',
  category: '表单',
  props: [
    {
      name: 'defaultChecked',
      title: { label: '默认选中', tip: '默认是否选中' },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      name: 'checked',
      title: { label: '是否选中', tip: '当前是否选中，不受控' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '组件自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'checkedChildren',
      title: { label: '选中时内容', tip: '选中时的内容' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'unCheckedChildren',
      title: { label: '非选中时内容', tip: '非选中时的内容' },
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
      name: 'loading',
      title: { label: '加载中', tip: '加载中' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '开关大小' },
      propType: { type: 'oneOf', value: ['default', 'small'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '默认',
              value: 'default',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      defaultValue: 'default',
    },
    {
      name: 'onChange',
      title: { label: '变化时回调函数', tip: '变化时回调函数' },
      propType: 'func',
    },
    {
      name: 'onClick',
      title: { label: '点击时回调函数', tip: '点击时回调函数' },
      propType: 'func',
    },
    // {
    //   name: 'className',
    //   title: { label: '类名', tip: '类名' },
    //   propType: 'string',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"变化时回调函数",

          template:
            "onChange(checked,event,${extParams}){\n// 变化时回调函数\nconsole.log('onChange',checked,event);}",
        },
        {
          name: 'onClick',
          description:"点击时回调函数",

          template:
            "onClick(checked,event,${extParams}){\n// 点击时回调函数\nconsole.log('onClick',checked,event);}",
        },
      ],
    },
  },
};
