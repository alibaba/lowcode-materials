import snippets from './snippets';

export default {
  snippets,
  componentName: 'DatePicker.RangePicker',
  title: '日期区间选择',
  category: '表单',
  props: [
    {
      title: '值设置',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultValue',
          title: {
            label: '默认值',
            tip: 'defaultValue | 默认值',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'value',
          title: {
            label: '当前值',
            tip: 'value | 当前值',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'defaultPickerValue',
          title: {
            label: '默认面板日期',
            tip: 'defaultPickerValue | 默认面板日期',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
      ],
    },
    {
      title: '功能选项',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'size',
          title: {
            label: '尺寸',
            tip: 'size | 输入框大小，large 高度为 40px，small 为 24px，默认是 32px',
          },
          propType: {
            type: 'oneOf',
            value: ['large', 'middle', 'small'],
          },
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
          name: 'picker',
          title: {
            label: '选择器类型',
            tip: 'picker | 设置选择器类型',
          },
          propType: {
            type: 'oneOf',
            value: ['date', 'week', 'month', 'quarter', 'year'],
          },
          defaultValue: 'date',
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '日期',
                  value: 'date',
                },
                {
                  title: '周',
                  value: 'week',
                },
                {
                  title: '月份',
                  value: 'month',
                },
                {
                  title: '季度',
                  value: 'quarter',
                },
                {
                  title: '年份',
                  value: 'year',
                },
              ],
            },
          },
        },
        {
          name: 'mode',
          title: {
            label: '面板模式',
            tip: 'mode | 日期面板的状态',
          },
          propType: {
            type: 'oneOf',
            value: ['time', 'date', 'month', 'year', 'decade'],
          },
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '日期',
                  value: 'date',
                },
                {
                  title: '周',
                  value: 'week',
                },
                {
                  title: '月份',
                  value: 'month',
                },
                {
                  title: '年份',
                  value: 'year',
                },
                {
                  title: '十年间隔',
                  value: 'decade',
                },
              ],
            },
          },
        },
        {
          name: 'format',
          title: {
            label: '日期格式',
            tip: 'format | 展示的日期格式，配置参考 moment.js',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'placeholder',
          title: {
            label: '提示文字',
            tip: 'placeholder | 输入框提示文字',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'allowClear',
          title: {
            label: '支持清除',
            tip: 'allowClear | 是否允许清除',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'bordered',
          title: {
            label: '显示边框',
            tip: 'bordered | 是否有边框',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'autoFocus',
          title: {
            label: '自动聚焦',
            tip: 'autoFocus | 自动获取焦点',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'disabled',
          title: {
            label: '是否禁用',
            tip: 'disabled | 是否为禁用状态',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        // {
        //   name: 'open',
        //   title: {
        //     label: '弹层是否展开',
        //     tip: 'open | 控制弹层是否展开',
        //   },
        //   propType: 'bool',
        //   setter: 'BoolSetter',
        // },
        {
          name: 'showTime',
          title: {
            label: '时间选择',
            tip: 'showTime | 时间选择',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'inputReadOnly',
          title: {
            label: '输入框只读',
            tip: 'inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘）',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: '高级',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'ranges',
          title: {
            label: '预设范围',
            tip: 'ranges | 预设时间范围快捷选择',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'disabledDate',
          title: {
            label: '不可选日期',
            tip: 'disabledDate | 不可选择的日期',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'disabledDate(currentDate,${extParams}){\n// 设置不可选择的日期\nreturn true\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    // {
    //   name: 'renderExtraFooter',
    //   title: { label: '在面板中添加额外的页脚', tip: '在面板中添加额外的页脚' },
    //   propType: 'func',
    // },
    // {
    //   name: 'className',
    //   title: { label: '选择器 className', tip: '选择器 className' },
    //   propType: 'string',
    // },
    // {
    //   name: 'dropdownClassName',
    //   title: {
    //     label: '额外的弹出日历 className',
    //     tip: '额外的弹出日历 className',
    //   },
    //   propType: 'string',
    // },
    // {
    //   name: 'getPopupContainer',
    //   title: {
    //     label: '定义浮层的容器，默认为 body 上新建 div',
    //     tip: '定义浮层的容器，默认为 body 上新建 div',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'locale',
    //   title: { label: '国际化配置', tip: '国际化配置' },
    //   propType: 'object',
    // },
    // {
    //   name: 'popupStyle',
    //   title: { label: '额外的弹出日历样式', tip: '额外的弹出日历样式' },
    //   propType: 'CSSProperties',
    //   defaultValue: '{}',
    // },
    // {
    //   name: 'style',
    //   title: { label: '自定义输入框样式', tip: '自定义输入框样式' },
    //   propType: 'CSSProperties',
    //   defaultValue: '{}',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"日期范围发生变化的回调",
          template:
            "onChange(dates,dateStrings,${extParams}){\n// 日期范围发生变化的回调\nconsole.log('onChange',dates,dateStrings);}",
        },
        {
          name: 'onOpenChange',
          description:"弹出日历和关闭日历的回调",

          template:
            "onOpenChange(open,${extParams}){\n// 弹出日历和关闭日历的回调\nconsole.log('onOpenChange',open);}",
        },
        {
          name: 'onPanelChange',
          description:"日历面板切换的回调",

          template:
            "onPanelChange(value,mode,${extParams}){\n// 日历面板切换的回调\nconsole.log('onPanelChange',value,mode);}",
        },
      ],
    },
  },
};
