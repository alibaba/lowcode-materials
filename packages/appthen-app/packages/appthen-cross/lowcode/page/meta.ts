import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const PageMeta: ExtendComponentMetadata = {
  componentName: 'Page',
  title: '页面',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
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
            'en-US': 'statusBarMode',
            'zh-CN': '状态栏',
          },
        },
        name: 'statusBarMode',
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
