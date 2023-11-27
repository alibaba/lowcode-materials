
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AoMaoMeta: IPublicTypeComponentMetadata = {
  "componentName": "AoMao",
  "title": "AoMao编辑器",
  "docUrl": "",
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
        name: 'lang',
        title:"语言",
        setter: 'StringSetter',
        defaultValue: "zh-CN",
      },
      {
        name: 'readonly',
        title:"编辑只读",
        setter: 'BoolSetter',
      },
      {
        name: 'autoPrepend',
        title:"头部空行",
        setter: 'BoolSetter',
      },
      {
        name: 'autoAppend',
        title:"尾部空行",
        setter: 'BoolSetter',
      },
      {
        name: 'visible',
        title:"等待",
        setter: 'BoolSetter',
        defaultValue:false,
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
          },
          {
            name: 'Images.crossOrigin',
            title:"是否跨域",
            setter: 'BoolSetter',
            defaultValue:true,
          },

          {
            name: 'Images.withCredentials',
            title:"跨域withCredentials",
            setter: 'BoolSetter',
            defaultValue:true,
          },
          {
            name: 'Images.headers',
            title:"请求头",
            setter: 'JsonSetter',
          },
          {
            name: 'Images.contentType',
            title:"请求头",
            setter: 'StringSetter',
            defaultValue:"multipart/form-data",
          },
          {
            name: 'Images.accept',
            title:"文件类型",
            setter: 'StringSetter',
            defaultValue:"svg,png,bmp,jpg,jpeg,gif,tif,tiff,emf,webp",
          },
          {
            name: 'Images.limitSize',
            title:"文件大小",
            setter: 'StringSetter',
            defaultValue:"1024 * 1024 * 5",
          },
          {
            name: 'Images.data',
            title:"附带数据",
            setter: 'JsonSetter',
          },
          {
            name: 'Images.name',
            title:"文件上传名称",
            setter: 'StringSetter',
            defaultValue:"file",
          },
        ],
      },

    ],
    "supports": {
      "style": true,
      events:["saveField"]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AoMao",
    "screenshot": "",
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
