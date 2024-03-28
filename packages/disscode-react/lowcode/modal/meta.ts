import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const ModalMeta: ExtendComponentMetadata = {
  componentName: 'Modal',
  title: '弹窗',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Modal',
    main: '',
    destructuring: true,
    subName: '',
  },
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'visible',
            'zh-CN': '是否显示',
          },
        },
        name: 'visible',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maskClosable',
            'zh-CN': '蒙层关闭',
          },
          tip: '点击蒙层是否允许关闭',
        },
        name: 'maskClosable',
        description: '点击蒙层是否允许关闭',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: true,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'animate',
            'zh-CN': '动画',
          },
        },
        name: 'animate',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '淡入',
                value: 'fade',
              },
              {
                label: '中心弹出',
                value: 'pop',
              },
              {
                label: '底部弹入',
                value: 'slide-bottom',
              },
              {
                label: '顶部弹入',
                value: 'slide-top',
              },
              {
                label: '左侧弹入',
                value: 'slide-left',
              },
              {
                label: '右侧弹入',
                value: 'slide-right',
              },
            ],
            options: [
              {
                label: '淡入',
                value: 'fade',
              },
              {
                label: '中心弹出',
                value: 'pop',
              },
              {
                label: '底部弹入',
                value: 'slide-bottom',
              },
              {
                label: '顶部弹入',
                value: 'slide-top',
              },
              {
                label: '左侧弹入',
                value: 'slide-left',
              },
              {
                label: '右侧弹入',
                value: 'slide-right',
              },
            ],
          },
          initialValue: 'slide-bottom',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderView',
            'zh-CN': '弹窗内容',
          },
        },
        name: 'renderView',
        setter: {
          componentName: 'SlotSetter',
          title: '弹窗内容',
          initialValue: {
            type: 'JSSlot',
            params: ['props'],
            value: [
              {
                componentName: 'View',
                props: {
                  style: {
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    backgroundColor: '#fff'
                  }
                },
                children: [],
              },
            ],
          },
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'width',
      //       'zh-CN': 'PC 中使用',
      //     },
      //     tip: 'width | PC 中使用',
      //   },
      //   name: 'width',
      //   description: 'PC 中使用',
      //   setter: {
      //     componentName: 'MixedSetter',
      //     props: {
      //       setters: [
      //         {
      //           componentName: 'StringSetter',
      //           isRequired: false,
      //           // initialValue: '',
      //         },
      //         {
      //           componentName: 'NumberSetter',
      //           isRequired: false,
      //           // initialValue: 0,
      //         },
      //       ],
      //     },
      //   },
      // },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'height',
      //       'zh-CN': '高度',
      //     },
      //   },
      //   name: 'height',
      //   setter: {
      //     componentName: 'MixedSetter',
      //     props: {
      //       setters: [
      //         {
      //           componentName: 'StringSetter',
      //           isRequired: false,
      //           initialValue: undefined,
      //         },
      //         {
      //           componentName: 'NumberSetter',
      //           isRequired: false,
      //           initialValue: 0,
      //         },
      //       ],
      //     },
      //   },
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'zIndex',
            'zh-CN': '层级',
          },
        },
        name: 'zIndex',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          // initialValue: 0,
        },
      },
    ],
    component: {
      isContainer: true,
      isModal: true,
      // rootSelector: '.ant-modal-content',
      nestingRule: {
        parentWhitelist: ['Page', 'Component'],
      },
    },
    supports: {
      events: [
        {
          name: 'onClose',
        },
      ],
      style: true,
    },
    publicMethods: [
      {
        name: 'open',
        desc: '打开弹窗',
        code: 'open()',
      },
      {
        name: 'close',
        desc: '关闭弹窗',
        code: 'close()',
      },
    ]
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '弹窗',
    screenshot: '',
    schema: {
      componentName: 'Modal',
      props: {
        style: {
          height: '60%'
        }
      },
    },
  },
];

export default {
  ...ModalMeta,
  snippets,
};
