import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtButtonMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtButton',
  title: '按钮',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtButton',
    main: '',
    destructuring: true,
    subName: '',
  },
  icon: 'rqeanniu',
  group: '原子组件',
  category: '基础',
  configure: {
    props: [
      {
        title: {
          type: 'i18n',
          'en-US': 'text',
          'zh-CN': '按钮文字'
        },
        name: 'children',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: '按钮文字'
              },
              {
                componentName: 'SlotSetter',
                props: {
                  mode: 'node',
                },
                isRequired: false,
                initialValue: {
                  type: 'JSSlot',
                  value: [],
                },
              },
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '按钮大小',
          },
        },
        name: 'size',
        description: '按钮的大小',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '常规',
                value: 'normal',
              },
              {
                label: '小',
                value: 'small',
              },
            ],
            options: [
              {
                label: '常规',
                value: 'normal',
              },
              {
                label: '小',
                value: 'small',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': '类型',
          },
        },
        name: 'type',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '次要',
                value: 'secondary',
              },
            ],
            options: [
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '次要',
                value: 'secondary',
              },
            ],
          },
          initialValue: 'primary',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'circle',
            'zh-CN': '圆角按钮',
          },
        },
        name: 'circle',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'full',
            'zh-CN': '通栏样式',
          },
          tip: '是否通栏样式（即按钮宽度为屏幕宽度时的样式）',
        },
        name: 'full',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': '载入状态',
          },
        },
        name: 'loading',
        description: '设置按钮的载入状态',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁用态',
          },
          tip: '设置按钮为禁用态（不可点击）',
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    

      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'style',
      //       'zh-CN': '样式',
      //     },
      //   },
      //   name: 'style',
      //   description: '样式',
      //   display: 'block',
      //   setter: {
      //     componentName: 'StyleSetter',
      //     props: {
      //       showModuleList: ['background', 'border', 'layout', 'position'],
      //     },
      //     isRequired: true,
      //     initialValue: {},
      //   },
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'formType',
            'zh-CN': '表单类型',
          },
          tip: 'formType | 用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件',
        },
        name: 'formType',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '提交',
                value: 'submit',
              },
              {
                label: '重置',
                value: 'reset',
              },
            ],
            options: [
              {
                label: '提交',
                value: 'submit',
              },
              {
                label: '重置',
                value: 'reset',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'openType',
            'zh-CN': '微信开放能力',
          },
        },
        name: 'openType',
        description: '微信开放能力',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'contact',
                value: 'contact',
              },
              {
                label: 'share',
                value: 'share',
              },
              {
                label: 'chooseAvatar',
                value: 'chooseAvatar',
              },
              {
                label: 'getPhoneNumber',
                value: 'getPhoneNumber',
              },
              {
                label: 'getRealtimePhoneNumber',
                value: 'getRealtimePhoneNumber',
              },
              {
                label: 'getUserInfo',
                value: 'getUserInfo',
              },
              {
                label: 'getRealnameAuthInfo',
                value: 'getRealnameAuthInfo',
              },
              {
                label: 'launchApp',
                value: 'launchApp',
              },
              {
                label: 'openSetting',
                value: 'openSetting',
              },
              {
                label: 'feedback',
                value: 'feedback',
              },
              {
                label: 'getAuthorize',
                value: 'getAuthorize',
              },
              {
                label: 'contactShare',
                value: 'contactShare',
              },
              {
                label: 'lifestyle',
                value: 'lifestyle',
              },
              {
                label: 'openGroupProfile',
                value: 'openGroupProfile',
              },
              {
                label: 'addFriend',
                value: 'addFriend',
              },
              {
                label: 'addColorSign',
                value: 'addColorSign',
              },
              {
                label: 'openPublicProfile',
                value: 'openPublicProfile',
              },
              {
                label: 'addGroupApp',
                value: 'addGroupApp',
              },
              {
                label: 'shareMessageToFriend',
                value: 'shareMessageToFriend',
              },
            ],
            options: [
              {
                label: 'contact',
                value: 'contact',
              },
              {
                label: 'share',
                value: 'share',
              },
              {
                label: 'chooseAvatar',
                value: 'chooseAvatar',
              },
              {
                label: 'getPhoneNumber',
                value: 'getPhoneNumber',
              },
              {
                label: 'getRealtimePhoneNumber',
                value: 'getRealtimePhoneNumber',
              },
              {
                label: 'getUserInfo',
                value: 'getUserInfo',
              },
              {
                label: 'getRealnameAuthInfo',
                value: 'getRealnameAuthInfo',
              },
              {
                label: 'launchApp',
                value: 'launchApp',
              },
              {
                label: 'openSetting',
                value: 'openSetting',
              },
              {
                label: 'feedback',
                value: 'feedback',
              },
              {
                label: 'getAuthorize',
                value: 'getAuthorize',
              },
              {
                label: 'contactShare',
                value: 'contactShare',
              },
              {
                label: 'lifestyle',
                value: 'lifestyle',
              },
              {
                label: 'openGroupProfile',
                value: 'openGroupProfile',
              },
              {
                label: 'addFriend',
                value: 'addFriend',
              },
              {
                label: 'addColorSign',
                value: 'addColorSign',
              },
              {
                label: 'openPublicProfile',
                value: 'openPublicProfile',
              },
              {
                label: 'addGroupApp',
                value: 'addGroupApp',
              },
              {
                label: 'shareMessageToFriend',
                value: 'shareMessageToFriend',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'lang',
            'zh-CN': '信息语言',
          },
          tip: '指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。',
        },
        name: 'lang',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '英文',
                value: 'en',
              },
              {
                label: '中文简体',
                value: 'zh_CN',
              },
              {
                label: '中文繁体',
                value: 'zh_TW',
              },
            ],
            options: [
              {
                label: '英文',
                value: 'en',
              },
              {
                label: '中文简体',
                value: 'zh_CN',
              },
              {
                label: '中文繁体',
                value: 'zh_TW',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sessionFrom',
            'zh-CN': '会话来源',
          },
        },
        name: 'sessionFrom',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sendMessageTitle',
            'zh-CN': '会话标题',
          },
          tip: 'sendMessageTitle | 会话内消息卡片标题',
        },
        name: 'sendMessageTitle',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sendMessagePath',
            'zh-CN': '跳转小程序路径',
          },
          tip: 'sendMessagePath | 会话内消息卡片点击跳转小程序路径',
        },
        name: 'sendMessagePath',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sendMessageImg',
            'zh-CN': '消息卡片图片',
          },
          tip: 'sendMessageImg | 会话内消息卡片图片',
        },
        name: 'sendMessageImg',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showMessageCard',
            'zh-CN': '显示消息卡片',
          },
          tip: 'showMessageCard | 显示会话内消息卡片',
        },
        name: 'showMessageCard',
        description: '显示会话内消息卡片',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'appParameter',
            'zh-CN': '打开APP参数',
          },
          tip: 'appParameter | 打开APP时，向APP传递的参数',
        },
        name: 'appParameter',
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          description: '点击按钮时触发',
          // @ts-ignore
          template: "onClick(e, ${extParams}) {\n  console.log('onClick');\n}",
        },
        {
          name: 'onContact',
          description: '客服消息回调',
          // @ts-ignore
          template: "onContact(e, ${extParams}) {\n  console.log('onContact');\n}",
        },
        {
          name: 'onChooseAvatar',
          description: '选择头像回调',
          // @ts-ignore
          template: "onChooseAvatar(e, ${extParams}) {\n  console.log('onChooseAvatar');\n}",
        },
        {
          name: 'onGetUserInfo',
          description: '用户信息回调',
          // @ts-ignore
          template: "onGetUserInfo(e, ${extParams}) {\n  console.log('onGetUserInfo');\n}",
        },
        {
          name: 'onGetPhoneNumber',
          description: '手机号回调',
          // @ts-ignore
          template: "onGetPhoneNumber(e, ${extParams}) {\n  console.log('onGetPhoneNumber');\n}",
        },
        {
          name: 'onOpenSetting',
          description: '打开授权设置页回调',
          // @ts-ignore
          template: "onOpenSetting(e, ${extParams}) {\n  console.log('onOpenSetting');\n}",
        },
        {
          name: 'onError',
          description: '错误回调(开放能力)',
          // @ts-ignore
          template: "onError(e, ${extParams}) {\n  console.log('onError');\n}",
        },
      ]
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '按钮',
    screenshot: '',
    schema: {
      componentName: 'AtButton',
      props: {
        children: '按钮文字'
      }
    },
  },
];

export default {
  ...AtButtonMeta,
  snippets,
};
