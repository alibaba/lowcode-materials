import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const PageMeta: ExtendComponentMetadata = {
  componentName: 'Page',
  title: '页面',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Page',
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
            'en-US': 'src',
            'zh-CN': '背景图片',
          },
        },
        name: 'backgroundImage',
        setter: {
          componentName: 'ImageSetter',
        },
      },
    ],
    supports: {
      className: true,
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '页面',
    screenshot: '',
    schema: {
      componentName: 'Page',
      props: {},
    },
  },
];

export default {
  ...PageMeta,
  snippets,
};
