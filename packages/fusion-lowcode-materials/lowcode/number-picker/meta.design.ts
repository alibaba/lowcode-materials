import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'NumberPicker',
  title: '数字输入框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: 'latest',
    exportName: 'NumberPicker',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['large', 'medium'],
      },
      description: '大小',
      defaultValue: 'medium',
    },
    {
      name: 'type',
      propType: {
        type: 'oneOf',
        value: ['normal', 'inline'],
      },
      description: '设置类型',
      defaultValue: 'normal',
    },
    {
      name: 'value',
      propType: 'number',
      description: '当前值',
    },
    {
      name: 'defaultValue',
      propType: 'number',
      description: '默认值',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
    },
    {
      name: 'step',
      propType: 'number',
      description: '步长',
      defaultValue: 1,
    },
    {
      name: 'precision',
      propType: 'number',
      description: '保留小数点后位数',
      defaultValue: 0,
    },
    {
      name: 'editable',
      propType: 'bool',
      description: '用户是否可以输入',
      defaultValue: true,
    },
    {
      name: 'autoFocus',
      propType: 'bool',
      description: '自动焦点',
    },
    {
      name: 'max',
      propType: 'number',
      description: '最大值',
      defaultValue: null,
    },
    {
      name: 'min',
      propType: 'number',
      description: '最小值',
      defaultValue: null,
    },
    {
      name: 'format',
      propType: 'func',
      description: '格式化当前值',
    },
    {
      name: 'upBtnProps',
      propType: 'object',
      description: '增加按钮的props',
    },
    {
      name: 'downBtnProps',
      propType: 'object',
      description: '减少按钮的props',
    },
    {
      name: 'label',
      propType: 'string',
      description: '内联 label',
    },
    {
      name: 'innerAfter',
      propType: {
        type: 'oneOfType',
        value: ['string', 'icon'],
      },
      description: 'inner after',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容\n@param {number} value 评分值',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '数值被改变的事件\n@param {Number} value 数据\n@param {Event} e DOM事件对象',
    },
    {
      name: 'onKeyDown',
      propType: 'func',
      description: '键盘按下',
    },
    {
      name: 'onFocus',
      propType: 'func',
      description: '焦点获得',
    },
    {
      name: 'onBlur',
      propType: 'func',
      description: '焦点失去',
    },
    {
      name: 'onCorrect',
      propType: 'func',
      description: '数值订正后的回调\n@param {Object} obj {currentValue,oldValue:String}',
    },
    {
      name: 'onDisabled',
      propType: 'func',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义class',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
  ],
  configure: {
    props: [
      {
        name: 'type',
        title: '类型',
        defaultValue: 'normal',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '普通', value: 'normal' },
              { title: '内联', value: 'inline' },
            ],
          },
        },
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 按钮尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '小',
                value: 'small',
              },
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'defaultValue',
        title: '当前值',
        setter: (target) => {
          const precision = target?.parent?.getPropValue?.('precision') || 0;
          console.log('precision: ', precision);
          return {
            componentName: 'NumberSetter',
            props: {
              step: target?.parent?.getPropValue?.('step') || 0,
              precision,
            },
          };
        },
      },
      {
        name: 'innerAfter',
        title: '单位',
        setter: 'StringSetter',
      },
      {
        name: 'step',
        title: '步长',
        defaultValue: 1,
        setter: 'NumberSetter',
      },
      {
        name: 'precision',
        title: '小数位数',
        defaultValue: 0,
        setter: 'NumberSetter',
      },
      {
        name: 'editable',
        title: '可以输入',
        defaultValue: true,
        setter: 'BoolSetter',
      },
      {
        name: 'disabled',
        setter: 'BoolSetter',
        description: '是否禁用',
      },
    ],
    supports: {
      events: ['onChange', 'onKeyDown', 'onFocus', 'onBlur', 'onCorrect'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
