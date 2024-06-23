import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const ScrollViewMeta: ExtendComponentMetadata = {
  componentName: 'ScrollView',
  title: '滚动视图',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'ScrollView',
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
            'en-US': 'scrollX',
            'zh-CN': '横向滚动',
          },
        },
        name: 'scrollX',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scrollY',
            'zh-CN': '竖向滚动',
          },
        },
        name: 'scrollY',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showScrollbar',
            'zh-CN': '滚动条',
          },
        },
        name: 'showScrollbar',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'native',
            'zh-CN': '原生模式',
          },
          tip: '开启原生模式后，将使用原生Taro/小程序组件渲染，目前用于解决点击元素自动滚动到初始位置的问题'
        },
        name: 'native',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "upperThreshold",
      //       "zh-CN": "upperThreshold"
      //     }
      //   },
      //   "name": "upperThreshold",
      //   "setter": {
      //     "componentName": "NumberSetter",
      //     "isRequired": false,
      //     "initialValue": 0
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "lowerThreshold",
      //       "zh-CN": "lowerThreshold"
      //     }
      //   },
      //   "name": "lowerThreshold",
      //   "setter": {
      //     "componentName": "NumberSetter",
      //     "isRequired": false,
      //     "initialValue": 0
      //   }
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scrollTop',
            'zh-CN': '顶部距离',
          },
        },
        name: 'scrollTop',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scrollLeft',
            'zh-CN': '左侧距离',
          },
        },
        name: 'scrollLeft',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'scrollWithAnimation',
            'zh-CN': '滚动动画',
          },
        },
        name: 'scrollWithAnimation',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'enableBackToTop',
            'zh-CN': '返回顶部',
          },
          tip: 'iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向',
        },
        name: 'enableBackToTop',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      className: false,
      style: true,
      events: [
        {
          name: 'onScrollToUpper',
          description: '滚动到顶部触发',
          // @ts-ignore
          template: 'onScrollToUpper(e) {\n\n}',
        },
        {
          name: 'onScrollToLower',
          description: '滚动到底部时触发',
          // @ts-ignore
          template: 'onScrollToLower() {\n\n}',
        },
        {
          name: 'onRefresherRefresh',
          description: '下拉刷新时触发',
          // @ts-ignore
          template: 'onRefresherRefresh(close) {\n // close();\n}',
        },
        // {
        //   name: 'onRefresherRestore',
        //   description: '下拉刷新被复位',
        //   // @ts-ignore
        //   template: 'onRefresherRestore() {\n\n}',
        // },
        // {
        //   name: 'onRefresherAbort',
        //   description: '下拉刷新被中止',
        //   // @ts-ignore
        //   template: 'onRefresherAbort(e) {\n\n}',
        // },
        {
          name: 'onScroll',
          description: '滚动时触发',
          // @ts-ignore
          template: 'onScroll(e) {\n\n}',
        },
      ],
    },
    // scrollTo
    component: { isContainer: true },
    publicMethods: [
      {
        name: 'scrollTo',
        desc: '滚动到指定位置',
        code: 'scrollTo({\n  // x: 0,\n  // y: 0\n})',
      },
      {
        name: 'scrollTop',
        desc: '当前距离顶部位置',
        code: 'scrollTop',
      },
      {
        name: 'scrollLeft',
        desc: '当前距离左侧位置',
        code: 'scrollLeft',
      },
      {
        name: 'completePullDown',
        desc: '完成下拉刷新',
        code: 'completePullDown()',
      },
    ],
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '滚动视图',
    screenshot: '',
    schema: {
      componentName: 'ScrollView',
      props: {},
    },
  },
];

export default {
  ...ScrollViewMeta,
  snippets,
};
