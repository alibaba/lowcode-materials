
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AoMaoMeta: IPublicTypeComponentMetadata = {
  "componentName": "AoMao",
  "title": "AoMao编辑器",
  "docUrl": "",
  group: '精选组件',
  category: '编辑器',
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "AoMao",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        name: 'data',
        title:"语言",
        setter: 'JsonSetter',
        defaultValue: "",
        supportVariable: true,
      },
      {
        name: 'lang',
        title:"语言",
        setter: 'StringSetter',
        defaultValue: "zh-CN",
        supportVariable: true,

      },
      {
        name: 'readonly',
        title:"编辑只读",
        setter: 'BoolSetter',
        supportVariable: true,

      },
      {
        name: 'autoPrepend',
        title:"头部空行",
        setter: 'BoolSetter',
        supportVariable: true,

      },
      {
        name: 'autoAppend',
        title:"尾部空行",
        setter: 'BoolSetter',
        supportVariable: true,

      },
      {
        name: 'visible',
        title:"等待",
        setter: 'BoolSetter',
        defaultValue:false,
        supportVariable: true,

      },


      {
        name: 'data',
        type: 'group',
        display: 'accordion',
        
        title: {
          label: '图片配置',
        },
        items: [
          {
            name: 'Images.action',
            title:"请求地址",
            setter: 'StringSetter',
            supportVariable: true,

          },
          {
            name: 'Images.crossOrigin',
            title:"是否跨域",
            setter: 'BoolSetter',
            defaultValue:true,
            supportVariable: true,

          },

          {
            name: 'Images.withCredentials',
            title:"跨域withCredentials",
            setter: 'BoolSetter',
            defaultValue:true,
            supportVariable: true,

          },
          {
            name: 'Images.headers',
            title:"请求头",
            setter: 'JsonSetter',
            supportVariable: true,

          },
          {
            name: 'Images.contentType',
            title:"请求头",
            setter: 'StringSetter',
            defaultValue:"multipart/form-data",
            supportVariable: true,

          },
          {
            name: 'Images.accept',
            title:"文件类型",
            setter: 'StringSetter',
            defaultValue:"svg,png,bmp,jpg,jpeg,gif,tif,tiff,emf,webp",
            supportVariable: true,

          },
          {
            name: 'Images.limitSize',
            title:"文件大小",
            setter: 'StringSetter',
            defaultValue:"1024 * 1024 * 1",
            supportVariable: true,

          },
          {
            name: 'Images.data',
            title:"附带数据",
            setter: 'JsonSetter',
            supportVariable: true,

          },
          {
            name: 'Images.name',
            title:"文件上传名称",
            setter: 'StringSetter',
            defaultValue:"file",
            supportVariable: true,
          },
        ],
      },

    ],
    "supports": {
      "style": true,
      className: true,
      events:["saveField"]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AoMao编辑器",
    screenshot: 'https://cdn.itq168.com/img/wangeditor.png?imageView2/0/format/webp/q/50',
    "schema": {
      "componentName": "AoMao",
      "props": {}
    }
  }
];

export default {
  ...AoMaoMeta,
  snippets
};
