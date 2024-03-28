
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ItemGroupMeta: IPublicTypeComponentMetadata = {
  "componentName": "ItemGroup",
  "title": "ItemGroup",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Menu",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "ItemGroup"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "eventKey",
            "zh-CN": "@private I"
          },
          "tip": "eventKey | @private Internal filled key. Do not set it directly"
        },
        "name": "eventKey",
        "description": "@private Internal filled key. Do not set it directly",
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
            "en-US": "warnKey",
            "zh-CN": "@private D"
          },
          "tip": "warnKey | @private Do not use. Private warning empty usage"
        },
        "name": "warnKey",
        "description": "@private Do not use. Private warning empty usage",
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
    "title": "ItemGroup",
    "screenshot": "",
    "schema": {
      "componentName": "ItemGroup",
      "props": {}
    }
  }
];

export default {
  ...ItemGroupMeta,
  snippets
};
