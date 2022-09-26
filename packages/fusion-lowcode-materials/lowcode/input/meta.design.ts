import snippets from './snippets.design';

export default {
  group: '原子组件',
  componentName: 'Input',
  title: '输入框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: 'latest',
    exportName: 'Input',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'label',
      propType: 'string',
      title: '标签文案',
      description: 'label',
    },
    {
      name: 'id',
      propType: 'string',
      description: 'ID',
    },
    {
      name: 'name',
      propType: 'string',
    },
    {
      name: 'hasClear',
      propType: 'bool',
      description: '是否出现清除按钮',
    },
    {
      name: 'state',
      title: '状态',
      propType: {
        type: 'oneOf',
        value: ['error', 'loading', 'success', 'warning'],
      },
      description: '状态\n@enumdesc 错误, 校验中, 成功, 警告',
    },
    {
      name: 'size',
      title: '尺寸',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '尺寸\n@enumdesc 小, 中, 大',
      defaultValue: 'medium',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
    },
    {
      name: 'maxLength',
      propType: 'number',
      description: '最大长度',
    },
    {
      name: 'showLimitHint',
      propType: 'bool',
      description: '是否展现最大长度样式',
    },
    {
      name: 'cutString',
      propType: 'bool',
      description: '是否截断超出字符串',
    },
    {
      name: 'readOnly',
      propType: 'bool',
      description: '是否只读',
    },
    {
      name: 'trim',
      propType: 'bool',
      description: 'onChange返回会自动去除头尾空字符',
    },
    {
      name: 'placeholder',
      propType: 'string',
      description: '输入提示',
    },
    {
      name: 'hasBorder',
      propType: 'bool',
      description: '是否有边框',
    },
    {
      name: 'onPressEnter',
      propType: 'func',
      description: '按下回车的回调',
    },
    {
      name: 'onClear',
      propType: 'func',
    },
    {
      name: 'onChange',
      propType: 'func',
    },
    {
      name: 'onKeyDown',
      propType: 'func',
    },
    {
      name: 'onFocus',
      propType: 'func',
    },
    {
      name: 'onBlur',
      propType: 'func',
    },
    {
      name: 'hint',
      title: 'Icon 水印',
      propType: 'string',
      description: '水印 (Icon的type类型，和hasClear占用一个地方)',
    },
    {
      name: 'innerBefore',
      propType: 'string',
      description: '文字前附加内容',
    },
    {
      name: 'innerAfter',
      propType: 'string',
      description: '文字后附加内容',
    },
    {
      name: 'addonBefore',
      propType: 'string',
      description: '输入框前附加内容',
    },
    {
      name: 'addonAfter',
      propType: 'string',
      description: '输入框后附加内容',
    },
    {
      name: 'addonTextBefore',
      propType: 'string',
      description: '输入框前附加文字',
    },
    {
      name: 'addonTextAfter',
      propType: 'string',
      description: '输入框后附加文字',
    },
    {
      name: 'autoFocus',
      propType: 'bool',
      description: '自动聚焦',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: 'defaultValue',
        title: '内容',
        setter: {
          componentName: 'StringSetter',
          props: {
            placeholder: '请输入',
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
        name: 'state',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '状态',
            en_US: 'State',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: state | 说明: 状态\n@enumdesc 错误, 校验中, 成功, 警告',
            en_US: 'prop: state | description: input state',
          },
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                value: 'error',
                title: '错误',
              },
              {
                value: 'loading',
                title: '加载',
              },
              {
                value: 'success',
                title: '成功',
              },
              {
                value: 'warning',
                title: '警告',
              },
              {
                value: '',
                title: '默认',
              },
            ],
          },
        },
      },
      {
        name: '!widget',
        title: '部件',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '无',
                value: 'default',
              },
              {
                title: '数字',
                value: 'number',
              },
              {
                value: 'clear',
                title: '清除',
              },
            ],
          },
        },
        getValue: (target) => {
          const parentTarget = target.parent;
          const hasClear = parentTarget.getPropValue('hasClear');
          const showLimitHint = parentTarget.getPropValue('showLimitHint');
          if (hasClear) {
            return 'clear';
          } else if (showLimitHint) {
            return 'number';
          } else {
            return 'default';
          }
        },
        setValue: (target, value) => {
          const parentTarget = target.parent;
          parentTarget.setPropValue('hasClear', false);
          parentTarget.setPropValue('showLimitHint', false);
          switch (value) {
            case 'default':
              break;
            case 'clear':
              parentTarget.setPropValue('hasClear', true);
              break;
            case 'number':
              parentTarget.setPropValue('showLimitHint', true);
              break;
            default:
              break;
          }
        },
      },
      {
        name: 'maxLength',
        title: '限制字数',
        condition: (target) => target?.parent?.getPropValue('showLimitHint'),
        setter: 'NumberSetter',
        defaultValue: 20,
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'hasBorder',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '显示边框',
            en_US: 'ShowBorder',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: hasBorder | 说明: 是否有边框',
            en_US: 'prop: hasBorder | description: HasBorder',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '无',
                value: false,
              },
              {
                label: '有',
                value: true,
              },
            ],
          },
        },
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
        defaultValue: '请输入',
      },
    ],
    supports: {
      style: true,
      events: ['onPressEnter', 'onClear', 'onChange', 'onKeyDown', 'onFocus', 'onBlur'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
