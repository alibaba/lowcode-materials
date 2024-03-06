import snippets from './snippets';

export default {
  snippets,
  componentName: 'DatePicker',
  title: '日期选择框',
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
          propType: 'date',
          setter: 'DateSetter',
        },
        {
          name: 'value',
          title: {
            label: '当前值',
            tip: 'value | 当前值',
          },
          propType: 'date',
          setter: 'DateSetter',
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
            tip: 'size | 输入框大小',
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
            label: '日期类型',
            tip: 'picker | 选择器日期类型',
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
          propType: {
            type: 'oneOf',
            value: ['date', 'week', 'month', 'quarter', 'year'],
          },
        },
        {
          name: 'format',
          title: {
            label: '日期格式',
            tip: 'format | 设置日期格式',
          },
          propType: 'string',
          defaultValue: 'YYYY-MM-DD',
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
          name: 'showToday',
          title: {
            label: '展示今天按钮',
            tip: 'showToday | 是否展示今天按钮',
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
        {
          name: 'inputReadOnly',
          title: {
            label: '是否只读',
            tip: 'inputReadOnly | 避免在移动设备上打开虚拟键盘',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'showTime',
          title: {
            label: '时间选择',
            tip: 'showTime | 是否能选择时间',
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
    //   name: 'dropdownClassName',
    //   title: {
    //     label: '额外的弹出日历 className',
    //     tip: '额外的弹出日历 className',
    //   },
    //   setter: 'ClassNameSetter',
    // },
    // {
    //   name: 'popupStyle',
    //   title: { label: '额外的弹出日历样式', tip: '额外的弹出日历样式' },
    //   setter: 'JsonSetter',
    // },
    // {
    //   name: 'suffixIcon',
    //   title: { label: '自定义的选择框后缀图标', tip: '自定义的选择框后缀图标' },
    //   setter: 'IconSetter',
    // },
    // {
    //   name: 'style',
    //   title: { label: '自定义输入框样式', tip: '自定义输入框样式' },
    //   setter: 'JsonSetter',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description:"时间发生变化的回调",
          template:
            "onChange(date,dateString,${extParams}){\n// 时间发生变化的回调\nconsole.log('onChange',date,dateString);}",
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
