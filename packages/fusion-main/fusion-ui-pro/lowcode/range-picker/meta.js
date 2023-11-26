import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormRangePicker',
  isFormItemComponent: true,
  title: '日期区段选择',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormRangePicker',
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
      name: 'type',
      propType: {
        type: 'oneOf',
        value: ['date', 'month', 'year'],
      },
      description: '日期范围类型',
      defaultValue: 'date',
    },
    {
      name: 'defaultVisibleMonth',
      propType: 'func',
      description: '默认展示的起始月份\n@return {MomentObject} 返回包含指定月份的 moment 对象实例',
    },
    {
      name: 'onVisibleMonthChange',
      propType: 'func',
    },
    {
      name: 'value',
      propType: 'array',
      description: '日期范围值数组 [moment, moment]',
    },
    {
      name: 'defaultValue',
      propType: 'array',
      description: '初始的日期范围值数组 [moment, moment]',
    },
    {
      name: 'format',
      propType: 'string',
      description: '日期格式',
      defaultValue: 'YYYY-MM-DD',
    },
    {
      name: 'showTime',
      propType: 'bool',
      description: '是否使用时间控件，支持传入 TimePicker 的属性',
      defaultValue: false,
    },
    {
      name: 'resetTime',
      propType: 'bool',
      description: '每次选择是否重置时间（仅在 showTime 开启时有效）',
      defaultValue: false,
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
      description:
        '日期范围值改变时的回调 [ MomentObject|String, MomentObject|String ]\n@param {Array<MomentObject|String>} value 日期值',
    },
    {
      name: 'onOk',
      propType: 'func',
      description:
        '点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`\n@return {Array} 日期范围',
    },
    {
      name: 'label',
      propType: 'string',
      description: '表单项内置标签',
    },
    {
      name: 'state',
      propType: {
        type: 'oneOf',
        value: ['error', 'loading', 'success'],
      },
      description: '表单项状态',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '表单项尺寸',
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
      defaultValue: false,
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '弹层展示状态变化时的回调\n@param {Boolean} visible 弹层是否显示\n@param {String} type 触发弹层显示和隐藏的来源 okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发',
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
      propType: 'node',
      description: '弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹层自定义样式类',
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'startDateInputAriaLabel',
      propType: 'string',
      description: '开始日期表单项的 aria-label 属性',
    },
    {
      name: 'startTimeInputAriaLabel',
      propType: 'string',
      description: '开始时间表单项的 aria-label 属性',
    },
    {
      name: 'endDateInputAriaLabel',
      propType: 'string',
      description: '结束日期表单项的 aria-label 属性',
    },
    {
      name: 'endTimeInputAriaLabel',
      propType: 'string',
      description: '结束时间表单项的 aria-label 属性',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
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
      propType: 'string',
    },
    {
      name: 'popupContent',
      propType: 'node',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: ['onVisibleMonthChange', 'onChange', 'onOk', 'onVisibleChange'],
    },
    props: wrapFormItemProps([
      {
        name: 'defaultValue',
        title: {
          label: '默认值',
          tip: '初始的日期范围值数组 [moment, moment]',
        },
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 0,
                  title: '开始时间',
                  setter: 'DateSetter',
                },
                {
                  name: 1,
                  title: '结束时间',
                  setter: 'DateSetter',
                },
              ],
            },
          },
        },
      },
      {
        name: 'type',
        title: '日期类型',
        setter: {
          setter: 'RadioGroupSetter',
          props: { options: ['date', 'month', 'year'] },
        },
        description: '日期范围类型',
        defaultValue: 'date',
      },
      {
        name: 'label',
        title: '内置标签',
        setter: 'StringSetter',
        description: '表单项内置标签',
      },
      {
        name: 'state',
        title: '输入状态',
        setter: {
          setter: 'RadioGroupSetter',
          props: { options: ['error', 'loading', 'success'] },
        },
        description: '表单项状态',
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          setter: 'RadioGroupSetter',
          props: { options: ['small', 'medium', 'large'] },
        },
        description: '表单项尺寸',
        defaultValue: 'medium',
      },
      {
        name: 'disabled',
        setter: 'BoolSetter',
        title: '是否禁用',
      },
      {
        name: 'hasClear',
        setter: 'BoolSetter',
        title: '清空按钮',
        defaultValue: true,
      },
      {
        name: 'defaultVisible',
        setter: 'BoolSetter',
        title: '显示弹层',
        defaultValue: false,
      },
      {
        type: 'group',
        title: '高级',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
          },
        ],
      },
    ]),
  },
  category: '内容',
  icon: '',
};
