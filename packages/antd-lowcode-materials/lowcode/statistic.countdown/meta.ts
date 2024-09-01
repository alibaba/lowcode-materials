import snippets from './snippets';

export default {
  snippets,
  componentName: 'Statistic.Countdown',
  title: '统计数值',
  category: '数据展示',
  props: [
    {
      name: 'decimalSeparator',
      title: { label: '设置小数点', tip: '设置小数点' },
      propType: 'string',
    },
    {
      name: 'format',
      title: { label: '格式化时间', tip: '格式化倒计时展示' },
      propType: 'string',
    },

    {
      name: 'prefix',
      title: { label: '设置数值的前缀', tip: '设置数值的前缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'suffix',
      title: { label: '设置数值的后缀', tip: '设置数值的后缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'title',
      title: { label: '数值的标题', tip: '数值的标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'value',
      title: { label: '数值内容', tip: '数值内容' },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
    },
    {
      name: 'valueStyle',
      title: { label: '设置数值的样式', tip: '设置数值的样式' },
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'valueStyle',
            title: {
              label: '数字样式',
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
  configure: { supports: { style: true,

    events:[

      {
        name: 'onFinish',
        description:"完成的回调",

        template: "onFinish(${extParams}){\n// 完成的回调\n;}",
      },
      {
        name: 'onChange',
        description:"倒计时时间变化时触发	",

        template: "onChange(value,${extParams}){\n// 倒计时时间变化时触发	\nconsole.log('value');}",
      },
    ]

   },
 },
};
