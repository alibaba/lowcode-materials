
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ListSkeletonItemMeta: IPublicTypeComponentMetadata = {
  "componentName": "ListSkeletonItem",
  "title": "ListSkeletonItem",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ListSkeletonItem",
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
            "en-US": "active",
            "zh-CN": "active"
          }
        },
        "name": "active",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": true,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ListSkeletonItem",
    "screenshot": "",
    "schema": {
      "componentName": "ListSkeletonItem",
      "props": {}
    }
  }
];

export default {
  ...ListSkeletonItemMeta,
  snippets
};
