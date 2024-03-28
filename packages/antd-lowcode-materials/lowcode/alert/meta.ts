import snippets from './snippets';

export default {
  snippets,
  componentName: 'Alert',
  title: '警告提示',
  category: '反馈',
  props: [
    // {
    //   name: 'afterClose',
    //   title: {
    //     label: '关闭动画结束后触发的回调函数',
    //     tip: '关闭动画结束后触发的回调函数',
    //   },
    //   propType: 'func',
    // },
    {
      name: 'banner',
      title: { label: '顶部公告', tip: '是否用作顶部公告' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'closable',
      title: { label: '可关闭', tip: '默认不显示关闭按钮' },
      propType: 'bool',
    },
    // {
    //   name: 'closeIcon',
    //   title: { label: '自定义关闭按钮', tip: '自定义关闭按钮' },
    //   // stter:[
    //   //   'SlotSetter','BoolSetter'
    //   // ]
    //   propType: { type: 'oneOfType', value: ['bool','node'] },
    // },
    {
      name: 'description',
      title: {
        label: '描述信息',
        tip: '警告提示的辅助性文字介绍',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'icon',
      title: {
        label: '图标',
        tip: '自定义图标，`showIcon` 为 true 时有效',
      },
      propType: 'node',
    },
    {
      name: 'message',
      title: { label: '警告提示内容', tip: '警告提示内容' },
      propType: { type: 'oneOfType', value: ['string','node'] },
    },
    {
      name: 'showIcon',
      title: { label: '显示图标', tip: '是否显示辅助图标' },
      propType: 'bool',
    },
    {
      name: 'type',
      title: { label: '类型', tip: '类型' },
      propType: {
        type: 'oneOf',
        value: ['success', 'info', 'warning', 'error'],
      },
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '成功',
                value: 'success',
              },
              {
                title: '信息',
                value: 'info',
              },
              {
                title: '告警',
                value: 'warning',
              },
              {
                title: '错误',
                value: 'error',
              },
            ],
          },
        },
      ]
    },
    {
      name: 'onClose',
      title: { label: '关闭时触发的回调函数', tip: '关闭时触发的回调函数' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onClose',
          description:"关闭时触发的回调函数",
          template:
            "onChange(event,${extParams}){\n// 关闭时触发的回调函数\nconsole.log('onChange');}",
        },
        {
          name: 'afterClose',
        },

      ],
    },
  },
};
