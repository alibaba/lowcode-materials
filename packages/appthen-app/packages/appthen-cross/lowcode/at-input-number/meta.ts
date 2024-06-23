import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtInputNumberMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtInputNumber',
  title: '数字输入',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtInputNumber',
    main: '',
    destructuring: true,
    subName: '',
  },
  icon: 'rqeshuzishuru',
  group: '原子组件',
  category: '数据输入',
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
              setStateValueField: 'value',
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
                label: '数字含小数点',
                value: 'digit',
              },
            ],
            options: [
              {
                label: '数字',
                value: 'number',
              },
              {
                label: '数字含小数点',
                value: 'digit',
              },
            ],
          },
          initialValue: 'number',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '当前值',
          },
          tip: 'value | 输入框当前值',
        },
        name: 'value',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'customStyle',
            'zh-CN': '自定样式',
          },
        },
        name: 'customStyle',
        description: '自定样式',
        display: 'block',
        setter: {
          componentName: 'StyleSetter',
          props: {
            showModuleList: ['background', 'border', 'layout', 'position'],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': '最小值',
          },
          tip: 'min | 最小值',
        },
        name: 'min',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': '最大值',
          },
          tip: 'max | 最大值',
        },
        name: 'max',
        description: '最大值',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': '步进数值',
          },
          tip: 'step | 每次点击改变的间隔大小',
        },
        name: 'step',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '大小',
          },
          tip: 'size | 组件的大小',
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '正常',
                value: 'normal',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
            options: [
              {
                label: '正常',
                value: 'normal',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': '输入框宽度',
          },
          tip: 'width | 输入框宽度',
        },
        name: 'width',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '是否禁用',
          },
          tip: 'disabled | 是否禁止输入，禁止点击按钮',
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabledInput',
            'zh-CN': '禁止输入',
          },
          tip: 'disabledInput | 是否禁止输入，但不禁止点击按钮',
        },
        name: 'disabledInput',
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
          template: "onChange(value, ${extParams}) {\n  console.log('onChange', value);\n}",
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
          // @ts-ignore
          template: "onKeyDown(e) {\n  console.log('onKeyDown', e);\n}",
        },
      ],
      style: false,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '数字输入',
    screenshot: '',
    schema: {
      componentName: 'AtInputNumber',
      props: {
        type: 'number',
        value: 0
      },
    },
  },
];

export default {
  ...AtInputNumberMeta,
  snippets,
};
