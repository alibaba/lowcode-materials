import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'TimePicker',
  title: '时间选择框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'TimePicker',
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
      name: 'name',
      title: {
        label: '名称',
        tip: 'name|表单相关',
      },
      propType: 'string',
      description: 'name|表单相关',
    },
    {
      name: 'label',
      propType: 'string',
      description: '按钮的文案',
    },
    {
      name: 'state',
      propType: {
        type: 'oneOf',
        value: ['error', 'success'],
      },
      description: '输入框状态',
    },
    {
      name: 'placeholder',
      propType: 'string',
      description: '输入框提示',
    },
    {
      name: 'value',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '时间值（moment 对象或时间字符串，受控状态使用）',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '时间初值（moment 对象或时间字符串，非受控状态使用）',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '时间选择框的尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'hasClear',
      propType: 'bool',
      description: '是否允许清空时间',
      defaultValue: true,
    },
    {
      name: 'format',
      propType: 'string',
      description: '时间的格式\nhttps://momentjs.com/docs/#/parsing/string-format/',
      defaultValue: 'HH:mm:ss',
    },
    {
      name: 'hourStep',
      propType: 'number',
      description: '小时选项步长',
    },
    {
      name: 'minuteStep',
      propType: 'number',
      description: '分钟选项步长',
    },
    {
      name: 'secondStep',
      propType: 'number',
      description: '秒钟选项步长',
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '弹层是否显示（受控）',
    },
    {
      name: 'defaultVisible',
      propType: 'bool',
      description: '弹层默认是否显示（非受控）',
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '时间值改变时的回调\n@param {Object|String} value 时间对象或时间字符串',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素',
    },
  ],
  configure: {
    props: [
      {
        name: 'defaultValue',
        title: '默认值',
        setter: ['TimePicker', 'ExpressionSetter'],
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
        name: 'format',
        title: '时间格式',
        defaultValue: 'HH:mm:ss',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    { title: 'HH:mm:ss', value: 'HH:mm:ss' },
                    { title: 'HH:mm', value: 'HH:mm' },
                    { title: 'mm:ss', value: 'mm:ss' },
                  ],
                },
              },
              'ExpressionSetter',
            ],
          },
        },
      },
      {
        name: 'hourStep',
        title: '小时步长',
        defaultValue: 1,
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'minuteStep',
        title: '分钟步长',
        defaultValue: 1,
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'secondStep',
        title: '秒钟步长',
        defaultValue: 1,
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'hasClear',
        title: '清除按钮',
        defaultValue: true,
        setter: ['BoolSetter', 'ExpressionSetter'],
      },
      {
        name: 'disabledHours',
        title: '禁用小时函数',
        display: 'block',
        setter: {
          componentName: 'FunctionSetter',
          // props: {
          //   defaultActionName="disabledHours",
          //   defaultCode=`function disabledHours(index) {
          //     return true;
          //   }`,
          // }
        },
      },
      {
        name: 'disabledMinutes',
        title: '禁用分钟函数',
        display: 'block',
        setter: {
          componentName: 'FunctionSetter',
          // props: {
          //   defaultActionName="disabledMinutes",
          //   defaultCode=`function disabledMinutes(index) {
          //     return true;
          //   }`,
          // }
        },
      },
      {
        name: 'disabledSeconds',
        title: '禁用秒钟函数',
        display: 'block',
        setter: {
          componentName: 'FunctionSetter',
          // props: {
          //   defaultActionName="disabledSeconds",
          //   defaultCode=`function disabledSeconds(index) {
          //     return true;
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
            supportVariable: true,
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
            supportVariable: true,
          },
        ],
      },
      {
        name: 'style',
        setter: {
          componentName: 'StyleSetter',
        },
      },
    ],
    supports: {
      events: ['onChange', 'onVisibleChange'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
