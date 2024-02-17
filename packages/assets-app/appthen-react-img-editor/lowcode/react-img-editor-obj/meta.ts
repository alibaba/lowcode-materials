
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ReactImgEditorObjMeta: IPublicTypeComponentMetadata = {
  "componentName": "ReactImgEditorObj",
  title: '简易图片编辑器',
  group: '高级组件',
  category: '编辑器',
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/react-img-editor",
    "version": "0.1.0",
    "exportName": "ReactImgEditorObj",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "路径地址",
            "zh-CN": "src"
          }
        },
        "name": "src",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
        }
      },
      {
        "title": '跨域',
        "name": "crossOrigin",
        "setter": {
          "componentName": "StringSetter",
        }
      },
      {
        name: 'style',
        title: '画板样式',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'style',
            title: {
              label: '画板样式',
              tip: '画板样式',
            },
            setter: 'StyleSetter',
            extraProps: {
              display: 'block',
            },
          },
        ],
      },
    ],
    "supports": {
      "style": true,
      events:['getStage']
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '简易图片编辑器',

    "screenshot": "https://cdn.itq168.com/img/20240209130728.png?imageView2/0/format/webp/q/50",
    "schema": {
      "componentName": "ReactImgEditorObj",
      "props": {
        src:"https://cdn.itq168.com/img/20240209130728.png?imageView2/0/format/webp/q/50",
        plugins:[],
        crossOrigin:'anonymous',
        style:{
          Width:"600px",
          Height:"400px",
        }
      }
    }
  }
];

export default {
  ...ReactImgEditorObjMeta,
  snippets
};
