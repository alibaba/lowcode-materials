import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImageMeta: IPublicTypeComponentMetadata = {
  componentName: 'Image',
  title: '图片',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Image',
    main: '',
    destructuring: true,
    subName: '',
  },
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        name: 'componentSetterHeader',
        title: ' ',
        virtual: () => true,
        display: 'plain',
        setter: {
          componentName: 'ComponentHeaderSetter',
          props: {
            fastBind: {
              inputField: 'src',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '图片地址',
          },
        },
        name: 'src',
        setter: {
          componentName: 'ImageSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      // {
      //   name: 'className',
      //   setter: 'ClassNameSetter',
      //   title: '样式集',
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'remote picture',
            'zh-CN': '远程图片',
          },
        },
        name: 'remote',
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
            'en-US': 'fit',
            'zh-CN': '自适应',
          },
        },
        name: 'fit',
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
            'en-US': 'style',
            'zh-CN': '样式',
          },
        },
        name: 'style',
        description: '样式',
        display: 'block',
        setter: {
          componentName: 'StyleSetter',
          props: {},
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
    title: '图片',
    screenshot: '',
    schema: {
      componentName: 'Image',
      props: {
        style: {
          width: '50px',
          height: '50px',
        },
      },
    },
  },
];

export default {
  ...ImageMeta,
  snippets,
};
