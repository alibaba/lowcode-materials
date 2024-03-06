import snippets from './snippets';

export default {
  snippets,
  componentName: 'Slider',
  title: '滑动输入条',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: {
        label: '默认值',
        tip: '设置初始取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]',
      },
      propType: {
        type: 'oneOfType',
        value: ['number', { type: 'arrayOf', value: 'number' }],
      },
    },
    {
      name: 'range',
      title: { label: '双滑块模式', tip: '双滑块模式' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      setValue(target, range) {
        let defaultValue = target.node.getPropValue('defaultValue');
        if (range) {
          defaultValue = Array.isArray(defaultValue) ? defaultValue : [0, defaultValue];
        } else {
          defaultValue = Array.isArray(defaultValue)
            ? defaultValue[1] || defaultValue[0]
            : defaultValue;
        }
        target.node.setPropValue('defaultValue', defaultValue);
      },
    },
    // {
    //   name: 'value',
    //   title: {
    //     label: '当前值',
    //     tip:
    //       '设置当前取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]',
    //   },
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['number', { type: 'arrayOf', value: 'number' }],
    //   },
    // },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      condition(target) {
        return target.getProps().getPropValue('range') === true;
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'disabled',
      title: {
        label: '是否禁用',
        tip: '是否为禁用状态',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'dots',
      title: { label: '对齐刻度', tip: '是否只能拖拽到刻度上' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    // {
    //   name: 'included',
    //   title: {
    //     label:
    //       '`marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列',
    //     tip:
    //       '`marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列',
    //   },
    //   propType: 'bool',
    //   defaultValue: true,
    // },
    {
      name: 'marks',
      title: {
        label:
          '刻度标记',
        tip:
          '刻度标记，key 的类型必须为 `number` 且取值在闭区间 \\[min, max] 内，每个标签可以单独设置样式',
      },
      // propType: {
      //   type: 'oneOfType',
      //   value: ['json', { type: 'arrayOf', value: 'number' }],
      // },
      setter: 'JsonSetter'

    },
    {
      name: 'max',
      title: { label: '最大值', tip: '最大值' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'min',
      title: { label: '最小值', tip: '最小值' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'reverse',
      title: { label: '反向坐标轴', tip: '反向坐标轴' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'step',
      title: {
        label: '步长',
        tip:
          '步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分',
      },
      propType: 'number',
      setter: 'NumberSetter'
    },
    // {
    //   name: 'tipFormatter',
    //   title: {
    //     label:
    //       'Slider 会把当前值传给 `tipFormatter`，并在 Tooltip 中显示 `tipFormatter` 的返回值，若为 null，则隐藏 Tooltip',
    //     tip:
    //       'Slider 会把当前值传给 `tipFormatter`，并在 Tooltip 中显示 `tipFormatter` 的返回值，若为 null，则隐藏 Tooltip',
    //   },
    //   propType: 'func',
    // },
    {
      name: 'vertical',
      title: {
        label: '垂直方向',
        tip: '值为 true 时，Slider 为垂直方向',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'onAfterChange',
      title: {
        label: '与 `onmouseup` 触发时机一致，把当前值作为参数传入',
        tip: '与 `onmouseup` 触发时机一致，把当前值作为参数传入',
      },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: {
        label: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入',
        tip: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入',
      },
      propType: 'func',
    },
    // {
    //   name: 'tooltipPlacement',
    //   title: {
    //     label: '设置 Tooltip 展示位置。参考 [Tooltip](/components/tooltip/)',
    //     tip: '设置 Tooltip 展示位置。参考 [Tooltip](/components/tooltip/)',
    //   },
    //   propType: 'string',
    // },
    // {
    //   name: 'tooltipVisible',
    //   title: {
    //     label:
    //       '值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时',
    //     tip:
    //       '值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时',
    //   },
    //   propType: 'bool',
    // },
    // {
    //   name: 'getTooltipPopupContainer',
    //   title: {
    //     label: 'Tooltip 渲染父节点，默认渲染到 body 上',
    //     tip: 'Tooltip 渲染父节点，默认渲染到 body 上',
    //   },
    //   propType: 'func',
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onAfterChange',
          description:"与 onmouseup 触发时机一致",

          template:
            "onAfterChange(value,${extParams}){\n// 与 onmouseup 触发时机一致\nconsole.log('onAfterChange',value);}",
        },
        {
          name: 'onChange',
          description:"当 Slider 的值发生改变时触发回调",

          template:
            "onChange(value,${extParams}){\n// 当 Slider 的值发生改变时触发回调\nconsole.log('onChange',value);}",
        },
      ],
    },
  },
};
