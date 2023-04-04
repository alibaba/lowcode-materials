
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SphereMeta: ComponentMetadata = {
  "componentName": "Sphere",
  "title": "Sphere",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@alilc/3d-materials",
    "version": "0.1.0",
    "exportName": "Sphere",
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
    "title": "Sphere",
    "screenshot": "",
    "schema": {
      "componentName": "Sphere",
      "props": {}
    }
  }
];

export default {
  ...SphereMeta,
  snippets
};
