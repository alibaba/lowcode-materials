module.exports = {
  group: '原子组件',
  componentName: 'RangeCalendar',
  title: 'RangeCalendar',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Calendar',
    main: '',
    destructuring: true,
    subName: 'RangeCalendar',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      description: '样式前缀',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'defaultStartValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '默认的开始日期',
    },
    {
      name: 'defaultEndValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '默认的结束日期',
    },
    {
      name: 'startValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '开始日期（moment 对象）',
    },
    {
      name: 'endValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '结束日期（moment 对象）',
    },
    {
      name: 'disableChangeMode',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'format',
      propType: 'string',
      defaultValue: 'YYYY-MM-DD',
    },
    {
      name: 'showOtherMonth',
      propType: 'bool',
      description: '是否显示非本月的日期',
      defaultValue: false,
    },
    {
      name: 'defaultVisibleMonth',
      propType: 'func',
      description: '模板展示的月份（起始月份）',
    },
    {
      name: 'onVisibleMonthChange',
      propType: 'func',
      description:
        '展现的月份变化时的回调\n@param {Object} value 显示的月份 (moment 对象)\n@param {String} reason 触发月份改变原因',
    },
    {
      name: 'disabledDate',
      propType: 'func',
      description:
        '不可选择的日期\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@returns {Boolean}',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description: '选择日期单元格时的回调\n@param {Object} value 对应的日期值 (moment 对象)',
    },
    {
      name: 'dateCellRender',
      propType: 'func',
      description: '自定义日期单元格渲染',
    },
    {
      name: 'monthCellRender',
      propType: 'func',
      description:
        '自定义月份渲染函数\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@returns {ReactNode}',
    },
    {
      name: 'yearCellRender',
      propType: 'func',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'startValue',
          setter: 'DateSetter',
          supportVariable: true,
        },
        {
          name: 'defaultStartValue',
          setter: 'DateSetter',
          supportVariable: true,
        },
        {
          name: 'defaultEndValue',
          setter: 'DateSetter',
          supportVariable: true,
        },
        {
          name: 'endValue',
          setter: 'DateSetter',
          supportVariable: true,
        },
      ],
    },
  },
  category: '基础',
};
