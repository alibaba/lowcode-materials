import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ComponentMeta: IPublicTypeComponentMetadata = {
  componentName: 'Component',
  title: '组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Component',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fill',
            'zh-CN': '全屏调试',
          },
        },
        name: 'fill',
        setter: {
          componentName: 'BoolSetter',
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
    title: '组件',
    screenshot: '',
    schema: {
      componentName: 'Component',
      props: {},
    },
  },
];

export default {
  ...ComponentMeta,
  snippets,
};
