import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

// https://cdn.jsdelivr.net/npm/@alilc/lowcode-react-simulator-renderer@beta/dist/css/react-simulator-renderer.css
// https://unpkg.com/@alilc/lowcode-react-simulator-renderer@beta/dist/css/react-simulator-renderer.css

// https://cdn.jsdelivr.net/npm/@alilc/lowcode-react-simulator-renderer@beta/dist/css/react-simulator-renderer.css
// https://unpkg.com/@alilc/lowcode-code-generator@1.0.4/dist/standalone-worker.min.js

// https://cdn.jsdelivr.net/npm/@alilc/lowcode-react-simulator-renderer@beta/dist/js/react-simulator-renderer.js
// https://unpkg.com/@alilc/lowcode-react-simulator-renderer@beta/dist/js/react-simulator-renderer.js

const TextMeta: ExtendComponentMetadata = {
  componentName: 'Text',
  title: '文字',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Text',
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
              inputField: 'children', // 默认 value
            },
          },
        },
      },
      {
        name: 'children',
        setter: 'StringSetter',
        title: '文本',
      },
      {
        name: 'numberOfLines',
        setter: 'NumberSetter',
        title: '多行省略',
      },
      {
        name: 'selectable',
        setter: 'BoolSetter',
        title: '文本可选',
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'userSelect',
            'zh-CN': '文本可选(?)',
          },
          tip: '文本是否可选，该属性会使文本节点显示为 inline-block'
        },
        name: 'userSelect',
        setter: 'BoolSetter',
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'space',
            'zh-CN': '连续空格',
          },
          tip: '是否显示连续空格，react-native 不支持'
        },
        name: 'space',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '中文字符空格一半大小',
                value: 'ensp',
              },
              {
                label: '中文字符空格大小',
                value: 'emsp',
              },
              {
                label: '根据字体设置的空格大小',
                value: 'nbsp',
              },
            ],
            options: [
              {
                label: '中文字符空格一半大小',
                value: 'ensp',
              },
              {
                label: '中文字符空格大小',
                value: 'emsp',
              },
              {
                label: '根据字体设置的空格大小',
                value: 'nbsp',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'decode',
            'zh-CN': '是否解码',
          },
          tip: 'H5默认解码，不支持设置；react-native不支持'
        },
        name: 'decode',
        setter: 'BoolSetter',
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
            showModuleList: ['font', 'layout', 'position'],
          }
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
        description: '动态样式',
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
      style: false,
    },
    component: {
      // isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '文本',
    screenshot: '',
    schema: {
      componentName: 'Text',
      props: {
        children: '文本',
      },
    },
  },
];

export default {
  ...TextMeta,
  snippets,
};
