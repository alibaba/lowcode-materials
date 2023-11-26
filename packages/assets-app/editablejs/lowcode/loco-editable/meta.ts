
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const LocoEditableMeta: ComponentMetadata = {
  "componentName": "LocoEditable",
  "title": "LocoEditable",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "editablejs",
    "version": "0.1.0",
    "exportName": "LocoEditable",
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
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "string",
                "value": "string"
              }
            ],
            "options": [
              {
                "label": "string",
                "value": "string"
              }
            ]
          },
          "initialValue": "string"
        }
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
    "title": "LocoEditable",
    "screenshot": "",
    "schema": {
      "componentName": "LocoEditable",
      "props": {}
    }
  }
];

export default {
  ...LocoEditableMeta,
  snippets
};
