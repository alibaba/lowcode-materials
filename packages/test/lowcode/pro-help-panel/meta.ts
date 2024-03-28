
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProHelpPanelMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProHelpPanel",
  "title": "ProHelpPanel",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "ProHelpPanel",
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
            "en-US": "title",
            "zh-CN": "帮助面板的标题"
          },
          "tip": "title | 帮助面板的标题"
        },
        "name": "title",
        "description": "帮助面板的标题",
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
            "en-US": "defaultSelectedKey",
            "zh-CN": "帮助面板首次打开时的"
          },
          "tip": "defaultSelectedKey | 帮助面板首次打开时的默认选中文档的键名"
        },
        "name": "defaultSelectedKey",
        "description": "帮助面板首次打开时的默认选中文档的键名",
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
            "en-US": "selectedKey",
            "zh-CN": "当前选中的帮助文档的"
          },
          "tip": "selectedKey | 当前选中的帮助文档的键名。如果提供了这个 prop，那么该组件将是一个受控组件，其状态将由父组件管理。如果未提供，那么该组件将是一个非受控组件，其状态将在组件内部管理。"
        },
        "name": "selectedKey",
        "description": "当前选中的帮助文档的键名。如果提供了这个 prop，那么该组件将是一个受控组件，其状态将由父组件管理。如果未提供，那么该组件将是一个非受控组件，其状态将在组件内部管理。",
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
            "en-US": "onSelectedKeyChange",
            "zh-CN": "当选中的文档键名发生"
          },
          "tip": "onSelectedKeyChange | 当选中的文档键名发生变化时调用的回调函数。新的键名将作为参数传递给该函数。"
        },
        "name": "onSelectedKeyChange",
        "description": "当选中的文档键名发生变化时调用的回调函数。新的键名将作为参数传递给该函数。",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showLeftPanel",
            "zh-CN": "控制左侧面板是否能够"
          },
          "tip": "showLeftPanel | 控制左侧面板是否能够打开"
        },
        "name": "showLeftPanel",
        "description": "控制左侧面板是否能够打开",
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
            "en-US": "onShowLeftPanelChange",
            "zh-CN": "当左侧面板打开状态发"
          },
          "tip": "onShowLeftPanelChange | 当左侧面板打开状态发生变化时调用的回调函数。新的打开状态将作为参数传递给该函数。"
        },
        "name": "onShowLeftPanelChange",
        "description": "当左侧面板打开状态发生变化时调用的回调函数。新的打开状态将作为参数传递给该函数。",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "height",
            "zh-CN": "帮助面板的高度，可以"
          },
          "tip": "height | 帮助面板的高度，可以是数字或字符串类型。"
        },
        "name": "height",
        "description": "帮助面板的高度，可以是数字或字符串类型。",
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
            "en-US": "footer",
            "zh-CN": "帮助面板的页脚"
          },
          "tip": "footer | 帮助面板的页脚"
        },
        "name": "footer",
        "description": "帮助面板的页脚",
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
            "en-US": "infiniteScrollFull",
            "zh-CN": "在一页内加载所有的 "
          },
          "tip": "infiniteScrollFull | 在一页内加载所有的 children 内容"
        },
        "name": "infiniteScrollFull",
        "description": "在一页内加载所有的 children 内容",
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
            "en-US": "extraRender",
            "zh-CN": "自定义渲染 extr"
          },
          "tip": "extraRender | 自定义渲染 extra 部分的内容"
        },
        "name": "extraRender",
        "description": "自定义渲染 extra 部分的内容",
        "setter": {
          "componentName": "FunctionSetter"
        }
      }
    ],
    "supports": {
      "events": [
        {
          "name": "onClose",
          "description": "当帮助面板关闭时调用的回调函数。"
        }
      ],
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProHelpPanel",
    "screenshot": "",
    "schema": {
      "componentName": "ProHelpPanel",
      "props": {}
    }
  }
];

export default {
  ...ProHelpPanelMeta,
  snippets
};
