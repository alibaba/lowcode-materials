
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const htmlapiMeta: ComponentMetadata = {
  "componentName": "htmlapi",
  "title": "html",
    group: '自定义组件',
    category: '其他',
  "docUrl": "",
  "screenshot": "http://cdn.itq168.com/img/html.png?imageslim",
  "devMode": "proCode",
  "npm": {
    "package": "eagle-custom-material-ui",
    "version": "1.1.3",
    "exportName": "htmlapi",
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
            "en-US": "html",
            "zh-CN": "html"
          },
          "tip": "html | 类型"
        },
        "name": "html",
        "description": "html",
        supportVariable: true,

        "setter": ['TextAreaSetter']
      }
    ],
    "supports": {
      "style": true,"className":true,
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "html",
    "screenshot": "http://cdn.itq168.com/img/html.png?imageslim",
    "schema": {
      "componentName": "htmlapi",
      "props": {
        html:'<div>这里可以写html</div>'
      }
    }
  }
];

export default {
  ...htmlapiMeta,
  snippets
};
