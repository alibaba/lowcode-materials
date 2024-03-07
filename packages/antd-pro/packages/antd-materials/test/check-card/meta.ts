
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const CheckCardMeta: ComponentMetadata = {
  "componentName": "CheckCard",
  "title": "CheckCard",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/antd-pro",
    "version": "1.0.0-rc.30",
    "exportName": "CheckCard",
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
            "en-US": "prefixCls",
            "zh-CN": "自定义前缀"
          },
          "tip": "prefixCls | 自定义前缀"
        },
        "name": "prefixCls",
        "description": "自定义前缀",
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
            "en-US": "onChange",
            "zh-CN": "Change 回调"
          },
          "tip": "onChange | Change 回调"
        },
        "name": "onChange",
        "description": "Change 回调",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "Click 回调"
          },
          "tip": "onClick | Click 回调"
        },
        "name": "onClick",
        "description": "Click 回调",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseEnter",
            "zh-CN": "鼠标进入时的回调"
          },
          "tip": "onMouseEnter | 鼠标进入时的回调"
        },
        "name": "onMouseEnter",
        "description": "鼠标进入时的回调",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseLeave",
            "zh-CN": "鼠标出来时的回调"
          },
          "tip": "onMouseLeave | 鼠标出来时的回调"
        },
        "name": "onMouseLeave",
        "description": "鼠标出来时的回调",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultChecked",
            "zh-CN": "默认是否勾选"
          },
          "tip": "defaultChecked | 默认是否勾选"
        },
        "name": "defaultChecked",
        "description": "默认是否勾选",
        "defaultValue": "false",
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
            "en-US": "checked",
            "zh-CN": "强制勾选"
          },
          "tip": "checked | 强制勾选"
        },
        "name": "checked",
        "description": "强制勾选",
        "defaultValue": "false",
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
            "en-US": "disabled",
            "zh-CN": "不可用"
          },
          "tip": "disabled | 不可用"
        },
        "name": "disabled",
        "description": "不可用",
        "defaultValue": "false",
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
            "en-US": "avatar",
            "zh-CN": "左侧头像展示，可以是"
          },
          "tip": "avatar | 左侧头像展示，可以是一个链接也可以是是一个 ReactNode"
        },
        "name": "avatar",
        "description": "左侧头像展示，可以是一个链接也可以是是一个 ReactNode",
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
            "en-US": "title",
            "zh-CN": "标题展示"
          },
          "tip": "title | 标题展示"
        },
        "name": "title",
        "description": "标题展示",
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
            "zh-CN": "二级标题展示"
          },
          "tip": "subTitle | 二级标题展示"
        },
        "name": "subTitle",
        "description": "二级标题展示",
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
            "zh-CN": "描述展示"
          },
          "tip": "description | 描述展示"
        },
        "name": "description",
        "description": "描述展示",
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
            "en-US": "value",
            "zh-CN": "选项值"
          },
          "tip": "value | 选项值"
        },
        "name": "value",
        "description": "选项值",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "内容是否在加载中"
          },
          "tip": "loading | 内容是否在加载中"
        },
        "name": "loading",
        "description": "内容是否在加载中",
        "defaultValue": "false",
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
            "en-US": "cover",
            "zh-CN": "图片封面默认，该模式"
          },
          "tip": "cover | 图片封面默认，该模式下其他展示值被忽略"
        },
        "name": "cover",
        "description": "图片封面默认，该模式下其他展示值被忽略",
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
            "en-US": "size",
            "zh-CN": "组件尺寸，支持大，中"
          },
          "tip": "size | 组件尺寸，支持大，中，小三种默认尺寸，用户可以自定义宽高"
        },
        "name": "size",
        "description": "组件尺寸，支持大，中，小三种默认尺寸，用户可以自定义宽高",
        "defaultValue": "default",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "large",
                "value": "large"
              },
              {
                "label": "default",
                "value": "default"
              }
            ],
            "options": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "large",
                "value": "large"
              },
              {
                "label": "default",
                "value": "default"
              }
            ]
          },
          "initialValue": "small"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bordered",
            "zh-CN": "是否显示边框"
          },
          "tip": "bordered | 是否显示边框"
        },
        "name": "bordered",
        "description": "是否显示边框",
        "defaultValue": "true",
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
            "en-US": "extra",
            "zh-CN": "卡片右上角的操作区域"
          },
          "tip": "extra | 卡片右上角的操作区域"
        },
        "name": "extra",
        "description": "卡片右上角的操作区域",
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
            "en-US": "bodyStyle",
            "zh-CN": "内容区域的样式设计"
          },
          "tip": "bodyStyle | 内容区域的样式设计"
        },
        "name": "bodyStyle",
        "description": "内容区域的样式设计",
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
            "en-US": "actions",
            "zh-CN": "右下角的操作区"
          },
          "tip": "actions | 右下角的操作区"
        },
        "name": "actions",
        "description": "右下角的操作区",
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
            "en-US": "ghost",
            "zh-CN": "ghost"
          }
        },
        "name": "ghost",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
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
const snippets: Snippet[] = [
  {
    "title": "CheckCard",
    "screenshot": "",
    "schema": {
      "componentName": "CheckCard",
      "props": {
        "defaultChecked": "false",
        "checked": "false",
        "disabled": "false",
        "loading": "false",
        "size": "default",
        "bordered": "true"
      }
    }
  }
];

export default {
  ...CheckCardMeta,
  snippets
};
