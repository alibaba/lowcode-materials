
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ResultMeta: IPublicTypeComponentMetadata = {
  "componentName": "Result",
  "title": "Result",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Result",
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
            "en-US": "icon",
            "zh-CN": "icon"
          }
        },
        "name": "icon",
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
            "en-US": "status",
            "zh-CN": "status"
          }
        },
        "name": "status",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "info",
                "value": "info"
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
                "label": "403",
                "value": 403
              },
              {
                "label": "404",
                "value": 404
              },
              {
                "label": "500",
                "value": 500
              },
              {
                "label": "403",
                "value": "403"
              },
              {
                "label": "404",
                "value": "404"
              },
              {
                "label": "500",
                "value": "500"
              }
            ],
            "options": [
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "info",
                "value": "info"
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
                "label": "403",
                "value": 403
              },
              {
                "label": "404",
                "value": 404
              },
              {
                "label": "500",
                "value": 500
              },
              {
                "label": "403",
                "value": "403"
              },
              {
                "label": "404",
                "value": "404"
              },
              {
                "label": "500",
                "value": "500"
              }
            ]
          },
          "initialValue": "success"
        }
      },
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
            "en-US": "subTitle",
            "zh-CN": "subTitle"
          }
        },
        "name": "subTitle",
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
            "en-US": "extra",
            "zh-CN": "extra"
          }
        },
        "name": "extra",
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
            "en-US": "rootClassName",
            "zh-CN": "rootClassName"
          }
        },
        "name": "rootClassName",
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
    "title": "Result",
    "screenshot": "",
    "schema": {
      "componentName": "Result",
      "props": {}
    }
  }
];

export default {
  ...ResultMeta,
  snippets
};
