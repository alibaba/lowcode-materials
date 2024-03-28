import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormNumberPicker',
  isFormItemComponent: true,
  title: '数字表单项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormNumberPicker',
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
    props: wrapFormItemProps([
      {
        name: 'alwaysShowTrigger',
        title: '展示操作',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'value',
        title: '当前值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'defaultValue',
        title: '默认值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大',
            en_US: 'prop: size | description: size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['small', 'medium', 'large'],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'type',
        title: '类型',
        defaultValue: 'normal',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    { title: '普通', value: 'normal' },
                    { title: '内联', value: 'inline' },
                  ],
                },
              },
              'ExpressionSetter',
            ],
          },
        },
      },
      {
        name: 'innerAfter',
        title: '单位',
        setter: ['StringSetter', 'ExpressionSetter'],
      },
      {
        name: 'step',
        title: '步长',
        defaultValue: 1,
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'precision',
        title: '小数位数',
        defaultValue: 0,
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'max',
        title: '最大值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'min',
        title: '最小值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'editable',
        title: '可以输入',
        defaultValue: true,
        setter: ['BoolSetter', 'ExpressionSetter'],
      },
      {
        name: 'format',
        title: '格式化',
        display: 'block',
        setter: {
          componentName: 'FunctionSetter',
          // props: {
          //   defaultActionName="format",
          //   defaultCode=`function format(value) {
          //     return value;
          //   }`,
          // }
        },
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
      {
        name: 'style',
        setter: {
          componentName: 'StyleSetter',
        },
      },
    ]),
    supports: {
      events: ['onChange', 'onKeyDown', 'onFocus', 'onBlur', 'onCorrect'],
    },
  },
  icon: '',
  category: '内容',
};
