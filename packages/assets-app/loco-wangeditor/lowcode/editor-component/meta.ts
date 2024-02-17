
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const editorComponentMeta: IPublicTypeComponentMetadata = {
  "componentName": "editorComponent",
  title: '富文本编辑器',
  docUrl: '',
  screenshot: '',
  group: '高级组件',
  category: '编辑器',
  "devMode": "proCode",
  "npm": {
    "package": "loco-wangeditor",
    "version": "0.1.4",
    "exportName": "editorComponent",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  configure: {
    props: [
      {
        title: '默认值',
        name: 'value',
        supportVariable: true,

        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: '模式',
        name: 'mode',
        supportVariable: true,

        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '默认',
                value: 'default',
              },
              {
                label: '简约',
                value: 'simple',
              }
            ],
          },
        },
      },
      {
        type: 'group',
        title: '图片上传',
        display: 'block',
        items: [
          {
            title: '上传默认文件',
            name: 'picture.fieldName',
            supportVariable: true,

            setter: {
              componentName: 'StringSetter',
            },
          },
          {
            title: '上传地址',
            name: 'picture.server',
            supportVariable: true,

            setter: {
              componentName: 'StringSetter',
            },
          },
          {
            title: '上传大小',
            name: 'picture.maxFileSize',
            supportVariable: true,

            setter: {
              componentName: 'NumberSetter',
            },
          },
          {
            title: '上传数量',
            name: 'picture.maxNumberOfFiles',
            supportVariable: true,

            setter: {
              componentName: 'NumberSetter',
            },
          },
          {
            title: '传递参数',
            name: 'picture.meta',
            supportVariable: true,

            setter: {
              componentName: 'JsonSetter',
            },
          },
          {
            title: '拼接url',
            name: 'picture.metaWithUrl',
            supportVariable: true,

            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            title: '拼接url',
            name: 'picture.headers',
            supportVariable: true,

            setter: {
              componentName: 'JsonSetter',
            },
          },
          {
            title: '传递cookie',
            name: 'picture.withCredentials',
            supportVariable: true,

            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            title: '超时时间',
            name: 'picture.timeout',
            supportVariable: true,

            setter: {
              componentName: 'NumberSetter',
            },
          },
          {
            title: '转base大小',
            name: 'picture.base64LimitSize',
            supportVariable: true,

            setter: {
              componentName: 'NumberSetter',
            },
          },
          {
            title: '上传前',
            name: 'picture.onBeforeUpload',
            supportVariable: true,

            setter: {
              componentName: 'FunctionSetter',
            },
          },
          {
            title: '进度回调',
            name: 'picture.onProgress',
            supportVariable: true,

            setter: {
              componentName: 'FunctionSetter',
            },
          },
          {
            title: '上传成功',
            name: 'picture.onSuccess',
            supportVariable: true,

            setter: {
              componentName: 'FunctionSetter',
            },
          },
          {
            title: '单个失败',
            name: 'picture.onFailed',
            supportVariable: true,

            setter: {
              componentName: 'FunctionSetter',
            },
          },
          {
            title: '上传错误',
            name: 'picture.onError',
            supportVariable: true,

            setter: {
              componentName: 'FunctionSetter',
            },
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: [
        'saveField',
        'onChange',
        'onDestroyed',
        'onFocus',
        'onBlur',
        'customPaste',
        'customAlert',
        'onBeforeUpload',
      ],
      className: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '富文本编辑器',
    screenshot: 'https://cdn.itq168.com/img/%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8.svg',
    schema: {
      componentName: 'editorComponent',
      props: {
        mode:"default",
        value: '<><p>disscode低代码</p></>',
        'picture.fieldName': 'file',
        'picture.server': '/api/upload2-image',
        'picture.maxFileSize': 1 * 1024 * 1024, // 1M
        // allowedFileTypes: ['image/*'],
        // 最多可上传几个文件，默认为 100
        'picture.maxNumberOfFiles': 10,
        'picture.meta': {},
        'picture.metaWithUrl': false,
        // 自定义增加 http  header
        'picture.headers': {},
        // 跨域是否传递 cookie ，默认为 false
        'picture.withCredentials': true,
        // 超时时间，默认为 10 秒
        'picture.timeout': 5 * 1000, // 5 秒
        'picture.base64LimitSize': 10 * 1024, // 5kb,
        style:{
          height:'800px',
        }
      },
    },
  },
];

export default {
  ...editorComponentMeta,
  snippets
};
