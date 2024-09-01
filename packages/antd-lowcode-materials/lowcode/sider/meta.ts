
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SiderMeta: IPublicTypeComponentMetadata = {
  "componentName": "Layout.Sider",
  "title": "Sider",
  category: '通用',
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",

  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "collapsible",
            "zh-CN": "是否收起"
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
            "zh-CN": "收起状态"
          }
        },
        "name": "collapsed",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "collapsedWidth",
            "zh-CN": "收缩宽度"
          }
        },
        "name": "collapsedWidth",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          initialValue: 80
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultCollapsed",
            "zh-CN": "默认收起"
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
            "zh-CN": "箭头方向"
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
            "zh-CN": "展开收起回调"
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
            "en-US": "trigger",
            "zh-CN": "自定义"
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
            "zh-CN": "宽度"
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
                "initialValue": "200px"
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 200
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
            "zh-CN": "布局断点"
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
            "zh-CN": "主题颜色"
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
            "zh-CN": "响应式回调"
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
    "component": {isContainer:true}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "收缩组件",
    "screenshot": "https://cdn.appthen.com/editor/antd/img/Menu.svg",
    "schema": {
      "componentName": "Layout.Sider",
      "props": {}
    }
  }
];

export default {
  ...SiderMeta,
  snippets
};
