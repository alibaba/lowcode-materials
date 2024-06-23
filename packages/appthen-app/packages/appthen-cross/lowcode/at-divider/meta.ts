import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtDividerMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtDivider',
  title: '分割线',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtDivider',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '基础',
  icon: 'rqefengexian',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '文字',
          },
          tip: 'content | 分隔符文字',
        },
        name: 'content',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': '高度',
          },
          tip: 'height | 分隔符高度，会自动转 rem,rpx',
        },
        name: 'height',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fontColor',
            'zh-CN': '文字颜色',
          },
          tip: 'fontColor | 文字颜色',
        },
        name: 'fontColor',
        description: '文字颜色',
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#6190E8',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fontSize',
            'zh-CN': '文字大小',
          },
          tip: 'fontSize | 文字大小，会自动转 rem,rpx',
        },
        name: 'fontSize',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'lineColor',
            'zh-CN': '线条颜色',
          },
          tip: 'lineColor | 分割线颜色',
        },
        name: 'lineColor',
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#ccc',
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
      style: false,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '分割线',
    screenshot: '',
    schema: {
      componentName: 'AtDivider',
      props: {
        height: 60,
        fontColor: '#3e5bec',
        fontSize: 28,
        lineColor: '#ccc',
        customStyle: {
          backgroundColor: '#fff'
        }
      },
    },
  },
];

export default {
  ...AtDividerMeta,
  snippets,
};
