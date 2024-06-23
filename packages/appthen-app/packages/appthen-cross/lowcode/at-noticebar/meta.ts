import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtNoticebarMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtNoticebar',
  title: '通知栏',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtNoticebar',
    main: '',
    destructuring: true,
    subName: '',
  },
  icon: 'rqepaomadeng',
  group: '原子组件',
  category: '展示',
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
              inputField: 'children',
            },
          },
        },
      },
      {
        title: {
          type: 'i18n',
          'en-US': 'text',
          'zh-CN': '通知文字'
        },
        name: 'children',
        setter: {
          componentName: 'StringSetter',
          initialValue: '这是一段很长很长的文字，有多长呢，非常的长，要多长有多长'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'close',
            'zh-CN': '关闭按钮',
          },
          tip: 'close | 是否需要关闭按钮',
        },
        name: 'close',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'single',
            'zh-CN': '是否单行',
          },
          tip: 'single | 内容是否单行',
        },
        name: 'single',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'marquee',
            'zh-CN': '是否滚动',
          },
          tip: 'marquee | 内容是否滚动（内容只能单行）',
        },
        name: 'marquee',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'speed',
            'zh-CN': '滚动速度',
          },
          tip: 'speed | 内容滚动速度 （默认速度100px/秒）',
        },
        name: 'speed',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'moreText',
            'zh-CN': '更多文本',
          },
          tip: 'moreText | “查看更多”链接文本',
        },
        name: 'moreText',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showMore',
            'zh-CN': '显示更多',
          },
          tip: 'showMore | “查看更多”是否显示（内容只能单行）',
        },
        name: 'showMore',
        setter:  {
          componentName: 'BoolSetter',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'icon',
      //       'zh-CN': '内容前的 Icon ',
      //     },
      //     tip: 'icon | 内容前的 Icon 图标',
      //   },
      //   name: 'icon',
      //   description: '内容前的 Icon 图标',
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
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClose',
            'zh-CN': '关闭时触发',
          },
          tip: 'onClose | 关闭时触发',
        },
        name: 'onClose',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onGotoMore',
            'zh-CN': '点击更多',
          },
          tip: 'onGotoMore | 点击”查看更多“时触发',
        },
        name: 'onGotoMore',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'customStyle',
            'zh-CN': '样式',
          },
        },
        name: 'customStyle',
        display: 'accordion',
        setter: {
          componentName: 'StyleSetter',
          props: {
            showModuleList: ['background', 'border', 'layout', 'position'],
          }
        },
      },
    ],
    supports: {
      style: false
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '通知栏',
    screenshot: '',
    schema: {
      componentName: 'AtNoticebar',
      props: {
        marquee: true,
        speed: 80,
        children: '这是一段很长很长的问题，有多长呢，非常的长，要多长有多长'
      },
    },
  },
];

export default {
  ...AtNoticebarMeta,
  snippets,
};
