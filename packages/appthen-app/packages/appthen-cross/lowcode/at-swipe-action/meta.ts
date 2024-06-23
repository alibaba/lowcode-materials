import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtSwipeActionMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtSwipeAction',
  title: '滑动操作',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtSwipeAction',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '操作反馈',
  icon: 'rqeTouchgesturedrag',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'isOpened',
            'zh-CN': '是否开启',
          },
          tip: 'isOpened | 是否开启',
        },
        name: 'isOpened',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁止滑动',
          },
          tip: 'disabled | 是否禁止滑动',
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
            'en-US': 'autoClose',
            'zh-CN': '自动关闭',
          },
          tip: 'autoClose | 点击选项时，是否自动关闭',
        },
        name: 'autoClose',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': '选项',
          },
          tip: 'options | 展示的选项数组',
        },
        name: 'options',
        description: '展示的选项数组',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'text',
                          'zh-CN': '文本',
                        },
                      },
                      name: 'text',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'style',
                          'zh-CN': '样式',
                        },
                      },
                      name: 'style',
                      display: 'block',
                      setter: {
                        componentName: 'StyleSetter',
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxDistance',
            'zh-CN': '最大滑动距离',
          },
          tip: 'maxDistance | 滑块最大滑动距离，一般是按钮个数乘以按钮宽度',
        },
        name: 'maxDistance',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'areaWidth',
            'zh-CN': '组件宽度',
          },
          tip: 'areaWidth | SwipeAction 组件宽度',
        },
        name: 'areaWidth',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'moveRatio',
            'zh-CN': '判断阈值',
          },
          tip: 'moveRatio | 判断是否需要打开的比例阈值，即 滑块滑动距离 / 滑块最大滑动距离， 默认为 0.5',
        },
        name: 'moveRatio',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'customStyle',
      //       'zh-CN': '自定义样式',
      //     },
      //   },
      //   name: 'customStyle',
      //   setter: {
      //     componentName: 'StyleSetter',
      //   },
      // },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          description: '点击触发事件',
          // @ts-ignore
          template: "onClick(item, index, ${extParams}) {\n  console.log('onClick');\n}",
        },
        {
          name: 'onOpened',
          description: '完全打开时触发',
          // @ts-ignore
          template: "onOpened(e, ${extParams}) {\n  console.log('onOpened');\n}",
        },
        {
          name: 'onClosed',
          description: '完全关闭时触发',
          // @ts-ignore
          template: "onClosed(e, ${extParams}) {\n  console.log('onClosed');\n}",
        },
        {
          name: 'onClosed',
          description: '完全关闭时触发',
          // @ts-ignore
          template: "onClosed(e, ${extParams}) {\n  console.log('onClosed');\n}",
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '滑动操作',
    screenshot: '',
    schema: {
      componentName: 'AtSwipeAction',
      props: {
        maxDistance: 120,
        areaWidth: 375,
        autoClose: true,
        options: [
          {
            text: '取消',
            style: {
              backgroundColor: '#6190E8',
            },
          },
          {
            text: '确认',
            style: {
              backgroundColor: '#FF4949',
            },
          },
        ],
      },
      children: [
        {
          componentName: 'View',
          props: {
            style: {
              width: '100%',
              height: '60px',
              backgroundColor: '#ccc',
            },
          },
        },
      ],
    },
  },
];

export default {
  ...AtSwipeActionMeta,
  snippets,
};
