
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CellMeta: IPublicTypeComponentMetadata = {
  "componentName": "Cell",
  "title": "Cell",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Summary",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Cell"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "index",
            "zh-CN": "index"
          }
        },
        "name": "index",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "colSpan",
            "zh-CN": "colSpan"
          }
        },
        "name": "colSpan",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rowSpan",
            "zh-CN": "rowSpan"
          }
        },
        "name": "rowSpan",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "align",
            "zh-CN": "align"
          }
        },
        "name": "align",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "center",
                "value": "center"
              },
              {
                "label": "end",
                "value": "end"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "start",
                "value": "start"
              },
              {
                "label": "justify",
                "value": "justify"
              },
              {
                "label": "match-parent",
                "value": "match-parent"
              }
            ],
            "options": [
              {
                "label": "center",
                "value": "center"
              },
              {
                "label": "end",
                "value": "end"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "start",
                "value": "start"
              },
              {
                "label": "justify",
                "value": "justify"
              },
              {
                "label": "match-parent",
                "value": "match-parent"
              }
            ]
          },
          "initialValue": "center"
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
    "title": "Cell",
    "screenshot": "",
    "schema": {
      "componentName": "Cell",
      "props": {}
    }
  }
];

export default {
  ...CellMeta,
  snippets
};
