import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtActivityIndicatorMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtActivityIndicator',
  title: '活动指示器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtActivityIndicator',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '展示',
  icon: 'rqeactivity_indicator',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '大小',
          },
        },
        name: 'size',
        defaultValue: 28,
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': '类型',
          },
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '中心',
                value: 'center',
              },
              {
                label: '常规',
                value: 'normal',
              },
            ],
            options: [
              {
                label: '中心',
                value: 'center',
              },
              {
                label: '常规',
                value: 'normal',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': '颜色',
          },
        },
        name: 'color',
        defaultValue: '#6190E8',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '文本内容',
          },
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
            'en-US': 'isOpened',
            'zh-CN': '是否显示',
          },
        },
        name: 'isOpened',
        defaultValue: true,
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      style: true
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '活动指示器',
    screenshot: '',
    schema: {
      componentName: 'AtActivityIndicator',
      props: {
        size: 28,
        color: '#6190E8',
        isOpened: true,
      },
    },
  },
];

export default {
  ...AtActivityIndicatorMeta,
  snippets,
};
