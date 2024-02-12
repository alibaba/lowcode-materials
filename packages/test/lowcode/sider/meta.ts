
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SiderMeta: IPublicTypeComponentMetadata = {
  "componentName": "Sider",
  "title": "Sider",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Layout",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Sider"
  },
  "configure": {
    "props": [
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
            "en-US": "collapsible",
            "zh-CN": "collapsible"
          }
        },
        "name": "collapsible",
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
            "en-US": "collapsed",
            "zh-CN": "collapsed"
          }
        },
        "name": "collapsed",
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
            "en-US": "defaultCollapsed",
            "zh-CN": "defaultCollapsed"
          }
        },
        "name": "defaultCollapsed",
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
            "en-US": "reverseArrow",
            "zh-CN": "reverseArrow"
          }
        },
        "name": "reverseArrow",
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
            "en-US": "onCollapse",
            "zh-CN": "onCollapse"
          }
        },
        "name": "onCollapse",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "zeroWidthTriggerStyle",
            "zh-CN": "zeroWidthTriggerStyle"
          }
        },
        "name": "zeroWidthTriggerStyle",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "trigger",
            "zh-CN": "trigger"
          }
        },
        "name": "trigger",
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
            "en-US": "width",
            "zh-CN": "width"
          }
        },
        "name": "width",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "collapsedWidth",
            "zh-CN": "collapsedWidth"
          }
        },
        "name": "collapsedWidth",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "breakpoint",
            "zh-CN": "breakpoint"
          }
        },
        "name": "breakpoint",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "xxl",
                "value": "xxl"
              },
              {
                "label": "xl",
                "value": "xl"
              },
              {
                "label": "lg",
                "value": "lg"
              },
              {
                "label": "md",
                "value": "md"
              },
              {
                "label": "sm",
                "value": "sm"
              },
              {
                "label": "xs",
                "value": "xs"
              }
            ],
            "options": [
              {
                "label": "xxl",
                "value": "xxl"
              },
              {
                "label": "xl",
                "value": "xl"
              },
              {
                "label": "lg",
                "value": "lg"
              },
              {
                "label": "md",
                "value": "md"
              },
              {
                "label": "sm",
                "value": "sm"
              },
              {
                "label": "xs",
                "value": "xs"
              }
            ]
          },
          "initialValue": "xxl"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "theme",
            "zh-CN": "theme"
          }
        },
        "name": "theme",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "light",
                "value": "light"
              },
              {
                "label": "dark",
                "value": "dark"
              }
            ],
            "options": [
              {
                "label": "light",
                "value": "light"
              },
              {
                "label": "dark",
                "value": "dark"
              }
            ]
          },
          "initialValue": "light"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBreakpoint",
            "zh-CN": "onBreakpoint"
          }
        },
        "name": "onBreakpoint",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "key",
            "zh-CN": "key"
          }
        },
        "name": "key",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
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
    "title": "Sider",
    "screenshot": "",
    "schema": {
      "componentName": "Sider",
      "props": {}
    }
  }
];

export default {
  ...SiderMeta,
  snippets
};
