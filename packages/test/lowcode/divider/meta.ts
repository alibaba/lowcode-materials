
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DividerMeta: IPublicTypeComponentMetadata = {
  "componentName": "Divider",
  "title": "Divider",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "ProCard",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Divider"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "布局类型"
          },
          "tip": "type | 布局类型"
        },
        "name": "type",
        "description": "布局类型",
        "defaultValue": "vertical",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              }
            ],
            "options": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              }
            ]
          },
          "initialValue": "vertical"
        }
      }
    ],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Divider",
    "screenshot": "",
    "schema": {
      "componentName": "Divider",
      "props": {
        "type": "vertical"
      }
    }
  }
];

export default {
  ...DividerMeta,
  snippets
};
