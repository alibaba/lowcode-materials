
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LayoutMeta: IPublicTypeComponentMetadata = {
  "componentName": "Layout",
  "title": "Layout",
  "docUrl": "",
  "screenshot": "",
  category: '通用',
  "devMode": "proCode",
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "hasSider",
            "zh-CN": "hasSider"
          }
        },
        "name": "hasSider",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
    ],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {isContainer:true}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Layout布局",
    "screenshot": "https://cdn.appthen.com/editor/antd/img/Layout.svg",
    "schema": {
      "componentName": "Layout",
      "props": {}
    }
  }
];

export default {
  ...LayoutMeta,
  snippets
};
