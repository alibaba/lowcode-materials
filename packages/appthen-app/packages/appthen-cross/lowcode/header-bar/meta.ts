import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const HeaderBarMeta: IPublicTypeComponentMetadata = {
  componentName: 'HeaderBar',
  title: '导航栏',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'HeaderBar',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '导航',
  icon: 'rqenavbar',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': '明暗模式',
          },
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '明亮',
                value: 'light',
              },
              {
                label: '暗黑',
                value: 'dark',
              },
            ],
            options: [
              {
                label: '明亮',
                value: 'light',
              },
              {
                label: '暗黑',
                value: 'dark',
              },
            ],
          },
          initialValue: 'light',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'backgroundColor',
            'zh-CN': '背景颜色',
          },
        },
        name: 'backgroundColor',
        setter: {
          componentName: 'ColorSetter',
          isRequired: false,
          // initialValue: '',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'imageBackground',
      //       'zh-CN': 'imageBackground',
      //     },
      //   },
      //   name: 'imageBackground',
      //   setter: {
      //     componentName: 'BoolSetter',
      //     isRequired: false,
      //     initialValue: false,
      //   },
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '标题',
          },
        },
        name: 'title',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'SlotSetter', 'VariableSetter'],
          },
          isRequired: false,
          initialValue: '页面标题',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'titleAlign',
            'zh-CN': '标题对齐',
          },
        },
        name: 'titleAlign',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '靠左',
                value: 'left',
              },
              {
                label: '居中',
                value: 'center',
              },
            ],
            options: [
              {
                label: '靠左',
                value: 'left',
              },
              {
                label: '居中',
                value: 'center',
              },
            ],
          },
          initialValue: 'left',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showBack',
            'zh-CN': '显示返回按钮',
          },
        },
        name: 'showBack',
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
            'en-US': 'translucent',
            'zh-CN': '背景透明',
          },
        },
        name: 'translucent',
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
            'en-US': 'leftContent',
            'zh-CN': '左侧内容',
          },
        },
        name: 'leftContent',
        setter: {
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rightContent',
            'zh-CN': '右侧内容',
          },
        },
        name: 'rightContent',
        setter: {
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bottomContent',
            'zh-CN': '底部内容',
          },
        },
        name: 'bottomContent',
        setter: {
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bottomContentHeight',
            'zh-CN': '底部内容高度',
          },
          tip: 'bottomContentHeight | 如果 HeaderBar 使用 fixed 模式，则需要传入此项用于占用顶部空间',
        },
        name: 'bottomContentHeight',
        description: '如果 HeaderBar 使用 fixed 模式，则需要传入此项用于占用顶部空间',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          // initialValue: 0,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'capsulePadding',
            'zh-CN': '胶囊自动让位',
          },
          tip: 'capsulePadding | 胶囊自动让位',
        },
        name: 'capsulePadding',
        description: '胶囊自动让位',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '右侧让位',
                value: 'right',
              },
              {
                label: '顶部让位',
                value: 'top',
              },
            ],
            options: [
              {
                label: '右侧让位',
                value: 'right',
              },
              {
                label: '顶部让位',
                value: 'top',
              },
            ],
          },
          // initialValue: 'right',
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onBack',
        },
        // {
        //   name: 'onLayout',
        // },
      ],
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '导航栏',
    screenshot: '',
    schema: {
      componentName: 'HeaderBar',
      props: {
        backgroundColor: '#6749ff',
        mode: 'dark',
        showBack: true,
        title: '标题',
        titleAlign: 'center',
        translucent: false,
      },
    },
  },
];

export default {
  ...HeaderBarMeta,
  snippets,
};
