import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
const ColMeta: IPublicTypeComponentMetadata = {
  componentName: 'Col',
  title: '列',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Col',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '布局',
  icon: 'rqebiaodanzujian-shurukuang',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'span',
            'zh-CN': '栅格占据的列数',
          },
          tip: {
            type: 'i18n',
            'en-US': 'The number of columns the grid spans.',
            'zh-CN': '栅格占据的列数。',
          },
        },
        name: 'span',
        description: '栅格占据的列数',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'offset',
            'zh-CN': '栅格左侧的间隔格数',
          },
          tip: {
            type: 'i18n',
            'en-US': 'The number of spacing columns to the left of the grid.',
            'zh-CN': '栅格左侧的间隔格数。',
          },
        },
        name: 'offset',
        description: '栅格左侧的间隔格数',
        setter: {
          componentName: 'NumberSetter',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '列',
    screenshot: '',
    schema: {
      componentName: 'Col',
      props: {},
    },
  },
];
export default {
  ...ColMeta,
  snippets,
};
