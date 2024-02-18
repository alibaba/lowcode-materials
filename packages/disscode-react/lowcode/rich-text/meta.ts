import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

// https://cdn.jsdelivr.net/npm/@alilc/lowcode-react-simulator-renderer@beta/dist/css/react-simulator-renderer.css
// https://unpkg.com/@alilc/lowcode-react-simulator-renderer@beta/dist/css/react-simulator-renderer.css

// https://cdn.jsdelivr.net/npm/@alilc/lowcode-react-simulator-renderer@beta/dist/css/react-simulator-renderer.css
// https://unpkg.com/@alilc/lowcode-code-generator@1.0.4/dist/standalone-worker.min.js

// https://cdn.jsdelivr.net/npm/@alilc/lowcode-react-simulator-renderer@beta/dist/js/react-simulator-renderer.js
// https://unpkg.com/@alilc/lowcode-react-simulator-renderer@beta/dist/js/react-simulator-renderer.js

const RichTextMeta: IPublicTypeComponentMetadata = {
  componentName: 'RichText',
  title: '富文本',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '',
    exportName: 'RichText',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '展示',
  icon: 'rqefuwenben',
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
              inputField: 'nodes', // 默认 value
            },
          },
        },
      },
      {
        name: 'nodes',
        setter: 'StringSetter',
        title: '文本',
      },
      {
        name: 'selectable',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectable',
            'zh-CN': '文本可选(?)',
          },
          tip: '文本是否可选，仅支持百度小程序、H5',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'userSelect',
            'zh-CN': '文本可选',
          },
          tip: '文本是否可选，该属性会使文本节点显示为 block，仅支持微信、H5',
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
          tip: '是否显示连续空格，react-native 不支持',
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
    title: '富文本',
    screenshot: '',
    schema: {
      componentName: 'RichText',
      props: {
        nodes: '<h1>标题</h1>',
        style: {
          fontSize: '14px'
        }
      },
    },
  },
];

export default {
  ...RichTextMeta,
  snippets,
};
