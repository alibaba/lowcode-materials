
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const colorfulMeta: ComponentMetadata = {
  "componentName": "colorful",
  group: '自定义组件',
  category: '系统功能',
  "title": "颜色选择器",
  "docUrl": "",
  "screenshot": "https://cdn.itq168.com/img/20221024212935.png?imageslim",
  "devMode": "proCode",
  "npm": {
    "package": "eagle-custom-material-ui",
    "version": "1.1.1",
    "exportName": "colorful",
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
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "colors",
        "setter": {
          "componentName": "ColorSetter",
        }
      }
    ],
    "supports": {
      "style": true,
      events: ['onChange'],

    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "颜色选择器",
    "screenshot": "https://cdn.itq168.com/img/20221024212935.png?imageslim",
    "schema": {
      "componentName": "colorful",
      "props": {}
    }
  }
];

export default {
  ...colorfulMeta,
  snippets
};
