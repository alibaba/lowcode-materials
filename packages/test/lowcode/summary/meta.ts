
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SummaryMeta: IPublicTypeComponentMetadata = {
  "componentName": "Summary",
  "title": "Summary",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Table",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Summary"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fixed",
            "zh-CN": "fixed"
          }
        },
        "name": "fixed",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    }
                  ],
                  "options": [
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    }
                  ]
                },
                "initialValue": "top"
              }
            ]
          }
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
    "title": "Summary",
    "screenshot": "",
    "schema": {
      "componentName": "Summary",
      "props": {}
    }
  }
];

export default {
  ...SummaryMeta,
  snippets
};
