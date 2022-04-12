module.exports = {
  group: '原子组件',
  componentName: 'MonthPicker',
  title: 'MonthPicker',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'DatePicker',
    main: '',
    destructuring: true,
    subName: 'MonthPicker',
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
      name: 'label',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '输入框内置标签',
    },
    {
      name: 'state',
      propType: {
        type: 'oneOf',
        value: ['success', 'loading', 'error'],
      },
      description: '输入框状态',
    },
    {
      name: 'placeholder',
      propType: 'string',
      description: '输入提示',
    },
    {
      name: 'defaultVisibleYear',
      propType: 'func',
      description: '默认展现的年\n@return {MomentObject} 返回包含指定年份的 moment 对象实例',
    },
    {
      name: 'value',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '日期值（受控）moment 对象',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '初始日期值，moment 对象',
    },
    {
      name: 'format',
      propType: 'string',
      description: '日期值的格式（用于限定用户输入和展示）',
      defaultValue: 'YYYY-MM',
    },
    {
      name: 'disabledDate',
      propType: 'func',
      description:
        '禁用日期函数\n@param {MomentObject} 日期值\n@param {String} view 当前视图类型，year: 年， month: 月, date: 日\n@return {Boolean} 是否禁用',
    },
    {
      name: 'footerRender',
      propType: 'func',
      description: '自定义面板页脚\n@return {Node} 自定义的面板页脚组件',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '日期值改变时的回调\n@param {MomentObject|String} value 日期值',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '输入框尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
    },
    {
      name: 'hasClear',
      propType: 'bool',
      description: '是否显示清空按钮',
      defaultValue: true,
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '弹层显示状态',
    },
    {
      name: 'defaultVisible',
      propType: 'bool',
      description: '弹层默认是否显示',
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '弹层展示状态变化时的回调\n@param {Boolean} visible 弹层是否显示\n@param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发',
    },
    {
      name: 'popupTriggerType',
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '弹层触发方式',
      defaultValue: 'click',
    },
    {
      name: 'popupAlign',
      propType: 'string',
      description: '弹层对齐方式, 具体含义见 OverLay文档',
      defaultValue: 'tl tl',
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素',
    },
    {
      name: 'popupStyle',
      propType: 'object',
      description: '弹层自定义样式',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹层自定义样式类',
    },
    {
      name: 'popupProps',
      propType: 'object',
      description: '弹层其他属性',
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'inputProps',
      propType: 'object',
      description: '输入框其他属性',
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
      name: 'dateInputAriaLabel',
      propType: 'string',
      description: '日期输入框的 aria-label 属性',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容\n@param {MomentObject} value 月份',
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
      name: 'name',
      propType: 'string',
    },
    {
      name: 'popupComponent',
      propType: {
        type: 'instanceOf',
        value: 'elementType',
      },
    },
    {
      name: 'popupContent',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
