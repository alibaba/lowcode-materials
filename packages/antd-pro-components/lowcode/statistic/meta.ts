
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const StatisticMeta: IPublicTypeComponentMetadata = {
  "componentName": "Statistic",
  "title": "Statistic",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "Statistic",
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
            "en-US": "description",
            "zh-CN": "描述性标签"
          },
          "tip": "description | 描述性标签"
        },
        "name": "description",
        "description": "描述性标签",
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
            "en-US": "tip",
            "zh-CN": "标题提示"
          },
          "tip": "tip | 标题提示"
        },
        "name": "tip",
        "description": "标题提示",
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
            "zh-CN": "当前项显示的状态"
          },
          "tip": "status | 当前项显示的状态"
        },
        "name": "status",
        "description": "当前项显示的状态",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "processing",
                "value": "processing"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ],
            "options": [
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "processing",
                "value": "processing"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ]
          },
          "initialValue": "default"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "icon",
            "zh-CN": "Icon 图标"
          },
          "tip": "icon | Icon 图标"
        },
        "name": "icon",
        "description": "Icon 图标",
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
            "en-US": "layout",
            "zh-CN": "Layout 布局"
          },
          "tip": "layout | Layout 布局"
        },
        "name": "layout",
        "description": "Layout 布局",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "inline",
                "value": "inline"
              }
            ],
            "options": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "inline",
                "value": "inline"
              }
            ]
          },
          "initialValue": "vertical"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "trend",
            "zh-CN": "趋势"
          },
          "tip": "trend | 趋势"
        },
        "name": "trend",
        "description": "趋势",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "up",
                "value": "up"
              },
              {
                "label": "down",
                "value": "down"
              }
            ],
            "options": [
              {
                "label": "up",
                "value": "up"
              },
              {
                "label": "down",
                "value": "down"
              }
            ]
          },
          "initialValue": "up"
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
            "en-US": "value",
            "zh-CN": "value"
          }
        },
        "name": "value",
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
            "en-US": "valueStyle",
            "zh-CN": "valueStyle"
          }
        },
        "name": "valueStyle",
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
            "en-US": "valueRender",
            "zh-CN": "valueRender"
          }
        },
        "name": "valueRender",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "prefix",
            "zh-CN": "prefix"
          }
        },
        "name": "prefix",
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
            "en-US": "suffix",
            "zh-CN": "suffix"
          }
        },
        "name": "suffix",
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
            "en-US": "loading",
            "zh-CN": "loading"
          }
        },
        "name": "loading",
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
            "en-US": "formatter",
            "zh-CN": "formatter"
          }
        },
        "name": "formatter",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    },
                    {
                      "label": "number",
                      "value": "number"
                    },
                    {
                      "label": "countdown",
                      "value": "countdown"
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    },
                    {
                      "label": "number",
                      "value": "number"
                    },
                    {
                      "label": "countdown",
                      "value": "countdown"
                    }
                  ]
                },
                "initialValue": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "decimalSeparator",
            "zh-CN": "decimalSeparator"
          }
        },
        "name": "decimalSeparator",
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
            "en-US": "groupSeparator",
            "zh-CN": "groupSeparator"
          }
        },
        "name": "groupSeparator",
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
            "en-US": "precision",
            "zh-CN": "precision"
          }
        },
        "name": "precision",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
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
    "title": "Statistic",
    "screenshot": "",
    "schema": {
      "componentName": "Statistic",
      "props": {}
    }
  }
];

export default {
  ...StatisticMeta,
  snippets
};
