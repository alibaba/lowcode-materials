import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const InputMeta: IPublicTypeComponentMetadata = {
  componentName: 'Input',
  title: '文本输入',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Input',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqebiaodanzujian-shurukuang',
  configure: {
    props: [
      {
        name: 'componentSetterHeader',
        title: ' ',
        virtual: () => true,
        display: 'plain',
        setter: {
          componentName: 'ComponentHeaderSetter',
          props: {
            fastBind: {
              inputField: 'value',
              outField: 'onChange',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': '输入类型',
          },
          tip: 'type | 输入类型',
        },
        name: 'type',
        description: '输入类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '数字',
                value: 'number',
              },
              {
                label: '文本',
                value: 'text',
              },
              {
                label: '身份证',
                value: 'idcard',
              },
              {
                label: '数字含小数点',
                value: 'digit',
              },
              {
                label: '安全密码',
                value: 'safe-password',
              },
              {
                label: '昵称(仅微信小程序)',
                value: 'nickname',
              },
            ],
            options: [
              {
                label: '数字',
                value: 'number',
              },
              {
                label: '文本',
                value: 'text',
              },
              {
                label: '身份证',
                value: 'idcard',
              },
              {
                label: '数字含小数点',
                value: 'digit',
              },
              {
                label: '安全密码',
                value: 'safe-password',
              },
              {
                label: '昵称(仅微信小程序)',
                value: 'nickname',
              },
            ],
          },
          initialValue: 'text',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checkType',
            'zh-CN': '增强限制',
          },
          tip: 'checkType | 增强限制',
        },
        name: 'checkType',
        description: '增强限制',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '无限制',
                value: undefined,
              },
              {
                label: '整型数字',
                value: 'int',
              },
              {
                label: '金额',
                value: 'price',
              },
            ],
            options: [
              {
                label: '无限制',
                value: undefined,
              },
              {
                label: '整型数字',
                value: 'int',
              },
              {
                label: '金额',
                value: 'price',
              },
            ],
          },
          // initialValue: 'text',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'confirmType',
            'zh-CN': '确认按钮',
          },
          tip: '设置键盘右下角按钮的文字',
        },
        name: 'confirmType',
        description: '确认按钮',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '发送',
                value: 'send',
              },
              {
                label: '搜索',
                value: 'search',
              },
              {
                label: '下一步',
                value: 'next',
              },
              {
                label: '前往',
                value: 'go',
              },
              {
                label: '完成',
                value: 'done',
              },
            ],
            options: [
              {
                label: '发送',
                value: 'send',
              },
              {
                label: '搜索',
                value: 'search',
              },
              {
                label: '下一步',
                value: 'next',
              },
              {
                label: '前往',
                value: 'go',
              },
              {
                label: '完成',
                value: 'done',
              },
            ],
          },
          initialValue: 'done',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '输入值',
          },
        },
        name: 'value',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxlength',
            'zh-CN': '最大长度',
          },
        },
        name: 'maxlength',
        description: '最大长度',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'cursor',
            'zh-CN': '光标位置',
          },
          tip: '指定focus时的光标位置',
        },
        name: 'cursor',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectionStart',
            'zh-CN': '光标起始位置',
          },
          tip: '光标起始位置，自动聚集时有效，需与selection-end搭配使用',
        },
        name: 'selectionStart',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectionEnd',
            'zh-CN': '光标结束位置',
          },
          tip: '光标结束位置，自动聚集时有效，需与selection-start搭配使用',
        },
        name: 'selectionEnd',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': '提示文字',
          },
          tip: 'placeholder | 提示文字',
        },
        name: 'placeholder',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '请输入',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholderStyle',
            'zh-CN': '提示文字样式',
          },
          tip: '示例: color:#000;font-size:14px;',
        },
        name: 'placeholderStyle',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'password',
            'zh-CN': '密码输入',
          },
          tip: 'password | 密码输入',
        },
        name: 'password',
        description: '密码输入',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '是否禁用',
          },
        },
        name: 'disabled',
        description: '是否禁用',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'confirmHold',
            'zh-CN': '保持键盘',
          },
          tip: '点击键盘右下角按钮时是否保持键盘不收起,APP不支持',
        },
        name: 'confirmHold',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'focus',
            'zh-CN': '获取焦点',
          },
          tip: 'focus | 获取焦点',
        },
        name: 'focus',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': '自动聚焦',
          },
          tip: 'autoFocus | 自动聚焦',
        },
        name: 'autoFocus',
        description: '自动聚焦',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onChange',
          description: '文本输入时触发',
          // @ts-ignore
          template:
            "onChange(value, ${extParams}) {\n  console.log('onChange', value);\n}",
        },
        {
          name: 'onFocus',
          description: '获得焦点触发',
          // @ts-ignore
          template: "onFocus(e, ${extParams}) {\n  console.log('onFocus', e);\n}",
        },
        {
          name: 'onBlur',
          description: '失去焦点触发',
          // @ts-ignore
          template: "onBlur(e, ${extParams}) {\n  console.log('onBlur', e);\n}",
        },
        {
          name: 'onConfirm',
          // @ts-ignore
          template: "onConfirm(e, ${extParams}) {\n  console.log('onConfirm', e);\n}",
          description: '点击完成按钮时触发',
        },
        {
          name: 'onKeyDown',
          description: '键盘按下时触发',
          // @ts-ignore
          template: "onKeyDown(e) {\n  console.log('onKeyDown', e);\n}",
        },
      ],
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '输入框',
    screenshot: '',
    schema: {
      componentName: 'Input',
      props: {},
    },
  },
];

export default {
  ...InputMeta,
  snippets,
};
