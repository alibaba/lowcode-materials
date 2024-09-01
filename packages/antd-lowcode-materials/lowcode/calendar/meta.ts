import snippets from './snippets';

export default {
  snippets,
  componentName: 'Calendar',
  title: '日历',
  category: '数据展示',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认展示的日期' },
      propType: 'date',
      setter: 'DateSetter',
    },
    // {
    //   name: 'dateCellRender',
    //   title: {
    //     label: '自定义日期追加渲染',
    //     tip: '自定义渲染日期单元格，返回内容会被追加到单元格',
    //   },
    //   propType: 'func',
      
    // },
    {
      name: 'dateCellRender',
      title: {
        label: '自定义单元格的内容',
        tip: '自定义单元格的内容',
      },
      propType: 'func',
      setter: [
        {
          componentName: 'FunctionSetter',
          props: {
            template:
              'dateCellRender(date,${extParams}){\n// 设置不可选择的日期\nreturn "日期"\n}',
          },
        },
        'VariableSetter',
      ],

      // setter: {
      //   componentName: 'SlotSetter',
      //   title: '关闭图标插槽',
      //   initialValue: {
      //     type: 'JSSlot',
      //     value: [
      //       {
      //         componentName: 'Icon',
      //         props: {
      //           type: 'CloseOutlined',
      //           size: 16
      //         },
      //       },
      //     ],
      //   },
      // },
      
    },
    // {
    //   name: 'dateFullCellRender',
    //   title: {
    //     label: '自定义渲染日期单元格，返回内容覆盖单元格',
    //     tip: '自定义渲染日期单元格，返回内容覆盖单元格',
    //   },
    //   propType: 'func',
    // },
    {
      name: 'disabledDate',
      title: { label: '不可选日期', tip: '不可选择的日期' },
      propType: 'func',
    },
    {
      name: 'fullscreen',
      title: { label: '全屏显示', tip: '是否全屏显示' },
      propType: 'bool',
      defaultValue: true,
    },
    // {
    //   name: 'locale',
    //   title: { label: '国际化配置', tip: '国际化配置' },
    //   propType: 'object',
    // },
    {
      name: 'mode',
      title: { label: '初始模式', tip: '初始模式' },
      propType: { type: 'oneOf', value: ['month', 'year'] },
      defaultValue: 'month',
    },
    // {
    //   name: 'monthCellRender',
    //   title: {
    //     label: '自定义渲染月单元格，返回内容会被追加到单元格',
    //     tip: '自定义渲染月单元格，返回内容会被追加到单元格',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'monthFullCellRender',
    //   title: {
    //     label: '自定义渲染月单元格，返回内容覆盖单元格',
    //     tip: '自定义渲染月单元格，返回内容覆盖单元格',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'validRange',
    //   title: { label: '设置可以显示的日期', tip: '设置可以显示的日期' },
    //   propType: { type: 'arrayOf', value: 'object' },
    // },
    // {
    //   name: 'value',
    //   title: { label: '当前值', tip: '展示日期' },
    //   propType: 'object',
    // },
    {
      name: 'onPanelChange',
      title: { label: '日期面板变化回调', tip: '日期面板变化回调' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: { label: '点击选择日期回调', tip: '点击选择日期回调' },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: { label: '日期变化回调', tip: '日期变化回调' },
      propType: 'func',
      
    },
    // {
    //   name: 'headerRender',
    //   title: { label: '自定义头部内容', tip: '自定义头部内容' },
    //   propType: 'func',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onPanelChange',
          description:"日期面板变化回调",

          template:
            "onPanelChange(date,mode,${extParams}){\n// 日期面板变化回调\nconsole.log('onPanelChange', date, mode);}",
        },
        {
          name: 'onSelect',
          description:"点击选择日期回调",

          template:
            "onSelect(date,${extParams}){\n// 点击选择日期回调\nconsole.log('onSelect', date);}",
        },
        {
          name: 'onChange',
          description:"日期变化回调",

          template:
            "onChange(date,${extParams}){\n// 日期变化回调\nconsole.log('onChange', date);}",
        },
      ],
    },
  },
};
