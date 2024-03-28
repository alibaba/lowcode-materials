moment?.locale?.('zh-cn');

export default {
  group: '原子组件',
  componentName: 'Calendar',
  title: '日历',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i3/O1CN01IAguy71sM0UGdpChd_!!6000000005751-55-tps-56-56.svg',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Calendar',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '默认选中的日期（moment 对象）',
    },
    {
      name: 'value',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '选中的日期值 (moment 对象)',
    },
    {
      name: 'modes',
      propType: {
        type: 'instanceOf',
        value: 'array',
      },
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
      description: '是否展示非本月的日期',
      defaultValue: true,
    },
    {
      name: 'defaultVisibleMonth',
      propType: 'func',
      description: '默认展示的月份',
    },
    {
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['card', 'fullscreen', 'panel'],
      },
      description: '展现形态',
      defaultValue: 'fullscreen',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description: '选择日期单元格时的回调\n@param {Object} value 对应的日期值 (moment 对象)',
    },
    {
      name: 'onModeChange',
      propType: 'func',
      description: '面板模式变化时的回调\n@param {String} mode 对应面板模式 date month year',
    },
    {
      name: 'onVisibleMonthChange',
      propType: 'func',
      description:
        '展现的月份变化时的回调\n@param {Object} value 显示的月份 (moment 对象)\n@param {String} reason 触发月份改变原因',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义样式类',
    },
    {
      name: 'dateCellRender',
      propType: 'func',
      description:
        '自定义日期渲染函数\n@param {Object} value 日期值（moment对象）\n@returns {ReactNode}',
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
      name: 'disabledDate',
      propType: 'func',
      description:
        '不可选择的日期\n@param {Object} calendarDate 对应 Calendar 返回的自定义日期对象\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@returns {Boolean}',
    },
    {
      name: 'locale',
      propType: 'object',
      description: '国际化配置',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: 'shape',
        title: '展现形态',
        setter: {
          componentName: 'RadioGroupSetter',
          props: { options: ['card', 'fullscreen', 'panel'] },
        },
      },
      {
        name: 'showOtherMonth',
        display: 'block',
        title: '展示非本月日期',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],

    supports: {
      style: true,
      events: ['defaultVisibleMonth', 'onSelect', 'onModeChange','onVisibleMonthChange','dateCellRender','monthCellRender','disabledDate'],
    }

  },
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01IAguy71sM0UGdpChd_!!6000000005751-55-tps-56-56.svg',
  category: '信息展示',
  snippets: require('./snippets'),
};
