import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { getStyleSetterConfig } from '../base';

const AtIconMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtIcon',
  title: '图标',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.4',
    exportName: 'AtIcon',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '展示',
  icon: 'rqetubiao',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '图标名称',
          },
        },
        name: 'value',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'SVG图标',
          },
        },
        name: 'svg',
        setter: {
          componentName: 'SvgSetter',
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
        setter: {
          componentName: 'ColorSetter',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'prefixClass',
      //       'zh-CN': 'prefixClass',
      //     },
      //   },
      //   name: 'prefixClass',
      //   setter: {
      //     componentName: 'StringSetter',
      //   },
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '大小',
          },
        },
        name: 'size',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'className',
      //       'zh-CN': '样式集',
      //     },
      //   },
      //   name: 'className',
      //   setter: {
      //     componentName: 'StringSetter',
      //   },
      // },
      getStyleSetterConfig('style', '样式', 'text'),
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'onClick',
      //       'zh-CN': '点击',
      //     },
      //   },
      //   name: 'onClick',
      //   setter: {
      //     componentName: 'FunctionSetter',
      //   },
      // },
    ],
    supports: {},
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '图标',
    screenshot: '',
    schema: {
      componentName: 'AtIcon',
      props: {
        value: 'clock',
        size: 30,
        color: '#666'
      },
    },
  },
];

export default {
  ...AtIconMeta,
  snippets,
};
