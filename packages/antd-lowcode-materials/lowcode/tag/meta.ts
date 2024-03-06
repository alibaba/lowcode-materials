import snippets from './snippets';

export default {
  snippets,
  componentName: 'Tag',
  title: '标签',
  category: '数据展示',
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
    },
    {
      name: 'closable',
      title: { label: '可关闭', tip: '标签是否可以关闭' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'bordered',
      title: { label: '是否边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'color',
      title: { label: '标签色', tip: '标签色' },
      propType: 'string',
      setter: ['ColorSetter'],

    },
    // {
    //   name: 'closeIcon',
    //   title: { label: '自定义关闭按钮', tip: '自定义关闭按钮' },
    //   propType: 'node',
    // },
    {
      name: 'onClose',
      title: { label: '关闭时的回调', tip: '关闭时的回调' },
      propType: 'func',
    },
    // {
    //   name: 'visible',
    //   title: { label: '是否显示标签', tip: '是否显示标签' },
    //   propType: 'bool',
    //   defaultValue: true,
    // },
    {
      name: 'icon',
      title: { label: '设置图标', tip: '设置图标' },
      propType: 'node',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onClose',
          description:"关闭时的回调",
          template: "onClose(event,${extParams}){\n// 关闭时的回调\nconsole.log('onClose',event);}",
        },
      ],
    },
  },
};
