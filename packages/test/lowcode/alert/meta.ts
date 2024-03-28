
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AlertMeta: IPublicTypeComponentMetadata = {
  "componentName": "Alert",
  "title": "Alert",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Alert",
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
            "en-US": "type",
            "zh-CN": "Type of Al"
          },
          "tip": "type | Type of Alert styles, options:`success`, `info`, `warning`, `error`"
        },
        "name": "type",
        "description": "Type of Alert styles, options:`success`, `info`, `warning`, `error`",
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
            "en-US": "closable",
            "zh-CN": "Whether Al"
          },
          "tip": "closable | Whether Alert can be closed"
        },
        "name": "closable",
        "description": "Whether Alert can be closed",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "closeText",
            "zh-CN": "@deprecate"
          },
          "tip": "closeText | @deprecated please use `closeIcon` instead."
        },
        "name": "closeText",
        "description": "@deprecated please use `closeIcon` instead.",
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
            "en-US": "message",
            "zh-CN": "Content of"
          },
          "tip": "message | Content of Alert"
        },
        "name": "message",
        "description": "Content of Alert",
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
            "en-US": "description",
            "zh-CN": "Additional"
          },
          "tip": "description | Additional content of Alert"
        },
        "name": "description",
        "description": "Additional content of Alert",
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
            "en-US": "onClose",
            "zh-CN": "Callback w"
          },
          "tip": "onClose | Callback when close Alert"
        },
        "name": "onClose",
        "description": "Callback when close Alert",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showIcon",
            "zh-CN": "Whether to"
          },
          "tip": "showIcon | Whether to show icon"
        },
        "name": "showIcon",
        "description": "Whether to show icon",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "role",
            "zh-CN": "https://ww"
          },
          "tip": "role | https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#aria-role-attribute"
        },
        "name": "role",
        "description": "https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#aria-role-attribute",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "banner",
            "zh-CN": "banner"
          }
        },
        "name": "banner",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
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
            "en-US": "closeIcon",
            "zh-CN": "Custom clo"
          },
          "tip": "closeIcon | Custom closeIcon"
        },
        "name": "closeIcon",
        "description": "Custom closeIcon",
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
            "en-US": "action",
            "zh-CN": "action"
          }
        },
        "name": "action",
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
            "en-US": "onMouseEnter",
            "zh-CN": "onMouseEnter"
          }
        },
        "name": "onMouseEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseLeave",
            "zh-CN": "onMouseLeave"
          }
        },
        "name": "onMouseLeave",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "onClick"
          }
        },
        "name": "onClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      }
    ],
    "supports": {
      "events": [
        {
          "name": "afterClose",
          "description": "Trigger when animation ending of Alert"
        }
      ],
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Alert",
    "screenshot": "",
    "schema": {
      "componentName": "Alert",
      "props": {}
    }
  }
];

export default {
  ...AlertMeta,
  snippets
};
