import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const ScrollViewMeta: ExtendComponentMetadata = {
  componentName: 'ScrollView',
  title: '滚动视图',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
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
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "scrollTop",
      //       "zh-CN": "scrollTop"
      //     }
      //   },
      //   "name": "scrollTop",
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
      //       "en-US": "scrollLeft",
      //       "zh-CN": "scrollLeft"
      //     }
      //   },
      //   "name": "scrollLeft",
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
      //       "en-US": "scrollWithAnimation",
      //       "zh-CN": "scrollWithAnimation"
      //     }
      //   },
      //   "name": "scrollWithAnimation",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "enableBackToTop",
      //       "zh-CN": "enableBackToTop"
      //     }
      //   },
      //   "name": "enableBackToTop",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onRefresherRefresh',
            'zh-CN': '下拉刷新',
          },
        },
        name: 'onRefresherRefresh',
        setter: {
          componentName: 'FunctionSetter',
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
          template: "onScrollToUpper(e) {\n\n}",
        },
        {
          name: 'onScrollToLower',
          description: '滚动到底部时触发',
          // @ts-ignore
          template: "onScrollToLower(e) {\n\n}",
        },
        {
          name: 'onRefresherRefresh',
          description: '下拉刷新时触发',
          // @ts-ignore
          template: "onRefresherRefresh(e) {\n\n}",
        },
        {
          name: 'onScroll',
          description: '滚动时触发',
          // @ts-ignore
          template: "onScroll(e) {\n\n}",
        },
      ],
    },
    component: { isContainer: true },
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
