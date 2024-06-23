import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImageBackgroundMeta: IPublicTypeComponentMetadata = {
  componentName: 'ImageBackground',
  title: '图片背景容器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'ImageBackground',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '基础',
  icon: 'rqebeijingtupian',
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
          props: {
            showModuleList: ['background', 'border', 'layout', 'position']
          },
          isRequired: false,
          initialValue: {},
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'style',
            'zh-CN': '动态样式',
          },
        },
        name: 'inlineStyle',
        description: '样式',
        display: 'block',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'enable',
                      title: '可用',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'name',
                      title: '样式名',
                      setter: 'StringSetter',
                      isRequired: true,
                    },
                    {
                      name: 'style',
                      title: '样式',
                      setter: 'StyleSetter',
                      display: 'block',
                      isRequired: false,
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  enable: true,
                  name: '动态样式1',
                  style: {},
                };
              },
            },
          },
        },
      },
    ],
    supports: {
      // className: true,
      style: false,
    },
    component: { isContainer: true },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '图片背景容器',
    screenshot: '',
    schema: {
      componentName: 'ImageBackground',
      props: {
        style: {

        }
      },
    },
  },
];

export default {
  ...ImageBackgroundMeta,
  snippets,
};
