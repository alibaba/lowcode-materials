import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { getStyleSetterConfig } from '../base';

const AtRateMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtRate',
  title: '评分',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtRate',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqerate-half',
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
              // setStateValueField: 'e',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '当前评分',
          },
          tip: 'value | 当前评分,开发者需要通过 onChange 事件来更新 value 值，必填',
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
            'en-US': 'size',
            'zh-CN': '星星大小',
          },
          tip: 'size | 评分星星大小',
        },
        name: 'size',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': '最大评分',
          },
          tip: 'max | 最大评分',
        },
        name: 'max',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'margin',
            'zh-CN': '星星间隔',
          },
          tip: 'margin | 星星间隔,单位根据环境自动转为 rpx 或 rem',
        },
        name: 'margin',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': '点击触发',
          },
          tip: 'onChange | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读',
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
      //       'en-US': 'style',
      //       'zh-CN': 'style',
      //     },
      //   },
      //   name: 'style',
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
      //       ],
      //     },
      //   },
      // },
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
    title: '评分',
    screenshot: '',
    schema: {
      componentName: 'AtRate',
      props: {},
    },
  },
];

export default {
  ...AtRateMeta,
  snippets,
};
