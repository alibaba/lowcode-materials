
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ErrorListMeta: IPublicTypeComponentMetadata = {
  "componentName": "ErrorList",
  "title": "ErrorList",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Form",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "ErrorList"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fieldId",
            "zh-CN": "fieldId"
          }
        },
        "name": "fieldId",
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
            "en-US": "help",
            "zh-CN": "help"
          }
        },
        "name": "help",
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
            "en-US": "helpStatus",
            "zh-CN": "helpStatus"
          }
        },
        "name": "helpStatus",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ]
          },
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "errors",
            "zh-CN": "errors"
          }
        },
        "name": "errors",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "warnings",
            "zh-CN": "warnings"
          }
        },
        "name": "warnings",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onVisibleChanged",
            "zh-CN": "onVisibleChanged"
          }
        },
        "name": "onVisibleChanged",
        "setter": {
          "componentName": "FunctionSetter"
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
    "title": "ErrorList",
    "screenshot": "",
    "schema": {
      "componentName": "ErrorList",
      "props": {}
    }
  }
];

export default {
  ...ErrorListMeta,
  snippets
};
