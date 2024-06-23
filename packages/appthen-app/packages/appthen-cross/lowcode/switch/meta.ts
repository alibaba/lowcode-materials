import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { getStyleSetterConfig } from '../base';

const SwitchMeta: IPublicTypeComponentMetadata = {
  componentName: 'Switch',
  title: '开关',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'Switch',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqeswitch',
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
              inputField: 'checked', // 默认 value
              outField: 'onChange', // 默认 onChange
              outValueField: 'detail.value' // 默认 value | detail.value
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checked',
            'zh-CN': '显示开启',
          },
          tip: 'checked | 是否显示开启',
        },
        name: 'checked',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': '背景颜色',
          },
          tip: 'color | 背景颜色',
        },
        name: 'color',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁止点击',
          },
          tip: 'disabled | 是否禁止点击',
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
            'en-US': 'onChange',
            'zh-CN': '开关触发',
          },
          tip: 'onChange | 输入框值改变时触发的事件',
        },
        name: 'onChange',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template: "onChange(e, ${extParams}) {\n  console.log('onChange', e);\n}",
          }
        },
      },
      getStyleSetterConfig('style', '样式', 'view'),
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'customStyle',
      //       'zh-CN': 'customStyle',
      //     },
      //   },
      //   name: 'customStyle',
      //   setter: {
      //     componentName: 'MixedSetter',
      //     props: {
      //       setters: [
      //         {
      //           componentName: 'ObjectSetter',
      //           props: {
      //             config: {
      //               extraSetter: {
      //                 componentName: 'MixedSetter',
      //                 isRequired: false,
      //                 props: {},
      //               },
      //             },
      //           },
      //           isRequired: false,
      //           initialValue: {},
      //         },
      //         {
      //           componentName: 'StringSetter',
      //           isRequired: false,
      //           initialValue: '',
      //         },
      //       ],
      //     },
      //   },
      // },
    ],
    supports: {},
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '开关',
    screenshot: '',
    schema: {
      componentName: 'Switch',
      props: {
        color: '#6190e8',
        checked: true,
      },
    },
  },
];

export default {
  ...SwitchMeta,
  snippets,
};
