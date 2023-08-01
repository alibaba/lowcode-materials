import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'DatePicker',
  title: '日期选择框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'DatePicker',
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
      title: {
        label: '标签',
        tip: 'label|输入框内置标签',
      },
      propType: 'string',
      description: 'label|输入框内置标签',
    },
    {
      name: 'state',
      title: {
        label: '状态',
        tip: 'state|输入框状态',
      },
      propType: {
        type: 'oneOf',
        value: ['success', 'loading', 'error'],
      },
      description: 'state|输入框状态',
    },
    {
      name: 'placeholder',
      title: {
        label: '占位提示',
        tip: 'placeholder|输入提示',
      },
      propType: 'string',
      description: '输入提示',
    },
    {
      name: 'value',
      title: {
        label: 'value',
        tip: 'value|日期值（受控）',
      },
      propType: {
        type: 'instanceOf',
        value: 'custom',
      },
      description: '日期值（受控）moment 对象',
    },
    {
      name: 'defaultValue',
      title: {
        label: '默认值',
        tip: 'defaultValue|初始日期值，moment 对象',
      },
      propType: 'date',
      description: 'defaultValue|初始日期值，moment 对象',
    },
    {
      name: 'format',
      title: {
        label: '格式',
        tip: 'format|日期值的格式（用于限定用户输入和展示）',
      },
      propType: 'string',
      description: 'format|日期值的格式（用于限定用户输入和展示）',
      defaultValue: 'YYYY-MM-DD',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '日期值改变时的回调\n@param {MomentObject|String} value 日期值',
    },
    {
      name: 'onOk',
      propType: 'func',
      description: '点击确认按钮时的回调\n@return {MomentObject|String} 日期值',
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: 'size|输入框尺寸',
      },
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: 'size|输入框尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'disabled',
      title: {
        label: '是否禁用',
        tip: 'disabled|是否禁用',
      },
      propType: 'bool',
      description: '是否禁用',
    },
    {
      name: 'hasClear',
      title: {
        label: '清除按钮',
        tip: 'hasClear|是否显示清空按钮',
      },
      propType: 'bool',
      description: 'hasClear|是否显示清空按钮',
      defaultValue: true,
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '跟随滚动',
    },
    {
      name: 'defaultVisible',
      title: {
        label: '弹层显示',
        tip: 'defaultVisible|弹层默认是否显示',
      },
      propType: 'bool',
      description: 'defaultVisible|弹层默认是否显示',
      defaultValue: false,
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
      name: 'form',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: 'showTime',
        title: '模式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '日期选择',
                value: false,
              },
              {
                label: '时间选择',
                value: true,
              },
            ],
          },
        },
      },
      {
        name: 'visible',
        title: {
          label: '状态',
          tip: '属性: visible',
        },
        defaultValue: false,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { value: false, label: '普通' },
              { value: true, label: '展开' },
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
        name: 'label',
        title: {
          label: '内联文案',
          tip: 'label|输入框内置标签',
        },
        setter: {
          componentName: 'StringSetter',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'placeholder',
        title: {
          label: '占位提示',
          tip: 'placeholder|输入提示',
        },
        setter: {
          componentName: 'StringSetter',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'disabled',
        title: {
          label: '是否禁用',
          tip: 'disabled|是否禁用',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
    ],
  },
  icon: '',
  category: '信息输入',
  snippets,
};
