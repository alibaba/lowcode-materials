
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const FerrariMeta: ComponentMetadata = {
  "componentName": "Ferrari",
  "title": "Ferrari",
  "docUrl": "",
  "screenshot": "/public/ferrari.jpg",
  "devMode": "proCode",
  "npm": {
    "package": "@alilc/3d-materials",
    "version": "0.1.0",
    "exportName": "Ferrari",
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
        "name": "color",
        "setter": "ColorSetter"
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "Ferrari",
    "screenshot": "/public/ferrari.jpg",
    "schema": {
      "componentName": "Ferrari",
      "props": {}
    }
  }
];

export default {
  ...FerrariMeta,
  snippets
};
