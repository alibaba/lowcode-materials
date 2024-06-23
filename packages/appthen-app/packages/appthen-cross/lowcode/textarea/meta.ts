import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TextareaMeta: IPublicTypeComponentMetadata = {
  componentName: 'Textarea',
  title: '多行输入',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Textarea',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqetextarea',
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
              inputField: 'value', // 默认 value
              outField: 'onInput', // 默认 onChange
              outValueField: 'detail.value' // 默认 value | detail.value
            },
          },
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
        description: '请绑定输入值',
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
            'en-US': 'placeholder',
            'zh-CN': '提示文字',
          },
          tip: 'placeholder | 提示文字',
        },
        name: 'placeholder',
        description: '提示文字',
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
            'en-US': 'placeholder-style',
            'zh-CN': '提示文字样式',
          },
          tip: 'H5与APP不支持'
        },
        name: 'placeholderStyle',
        description: '提示文字样式',
        display: 'accordion',
        setter: {
          componentName: 'StyleSetter',
          props: {
            showModuleList: ['font'],
          },
          isRequired: false,
          // initialValue: {},
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
          isRequired: false,
          // initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁用',
          },
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          // initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoHeight',
            'zh-CN': '自动增高',
          },
          tip: '设置 auto-height 时，style.height不生效',
        },
        name: 'autoHeight',
        description: '设置 auto-height 时，style.height不生效',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          // initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxlength',
            'zh-CN': '最大长度',
          },
          tip: '最大输入长度，设置为 -1 的时候不限制最大长度',
        },
        name: 'maxlength',
        description: '最大输入长度',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          // initialValue: ,
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onInput',
          description: '文本输入时触发',
          // @ts-ignore
          template: "onInput(value, extParams) {\n  console.log('onChange', value, extParams);\n}",
        },
        {
          name: 'onFocus',
          description: '输入框聚焦时触发',
          // @ts-ignore
          template: "onFocus(value, extParams) {\n  console.log('onChange', value, extParams);\n}",
        },
        {
          name: 'onBlur',
          description: '输入框失去焦点时触发',
          // @ts-ignore
          template: "onBlur(value, extParams) {\n  console.log('onChange', value, extParams);\n}",
        },
        {
          name: 'onConfirm',
          description: '点击完成按钮时触发',
          // @ts-ignore
          template: "onConfirm(value, extParams) {\n  console.log('onChange', value, extParams);\n}",
        },
      ],
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '多行输入',
    screenshot: '',
    schema: {
      componentName: 'Textarea',
      props: {
        style: {
          fontSize: '14px',
          minHeight: '60px'
        }
      },
    },
  },
];

export default {
  ...TextareaMeta,
  snippets,
};
