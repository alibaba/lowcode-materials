
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GridContentMeta: IPublicTypeComponentMetadata = {
  "componentName": "GridContent",
  "title": "GridContent",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "GridContent",
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
            "en-US": "contentWidth",
            "zh-CN": "contentWidth"
          }
        },
        "name": "contentWidth",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "Fluid",
                "value": "Fluid"
              },
              {
                "label": "Fixed",
                "value": "Fixed"
              }
            ],
            "options": [
              {
                "label": "Fluid",
                "value": "Fluid"
              },
              {
                "label": "Fixed",
                "value": "Fixed"
              }
            ]
          },
          "initialValue": "Fluid"
        }
      },
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
    "title": "GridContent",
    "screenshot": "",
    "schema": {
      "componentName": "GridContent",
      "props": {}
    }
  }
];

export default {
  ...GridContentMeta,
  snippets
};
