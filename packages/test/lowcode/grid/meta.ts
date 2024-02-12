
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GridMeta: IPublicTypeComponentMetadata = {
  "componentName": "Grid",
  "title": "Grid",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Card",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Grid"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefixCls",
            "zh-CN": "prefixCls"
          }
        },
        "name": "prefixCls",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "hoverable",
            "zh-CN": "hoverable"
          }
        },
        "name": "hoverable",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Grid",
    "screenshot": "",
    "schema": {
      "componentName": "Grid",
      "props": {}
    }
  }
];

export default {
  ...GridMeta,
  snippets
};
