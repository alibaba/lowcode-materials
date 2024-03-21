
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProSkeletonMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProSkeleton",
  "title": "骨架屏",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  group: '高级组件',
  category: '布局类',
  "npm": {
    "package": "@appthen/antd-pro",
    "version": "1.0.0-rc.32",
    "exportName": "ProSkeleton",
    "main": "",
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
            "zh-CN": "类型"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            options: [
              {
                "label": "列表",
                "value": "list"
              },
              {
                "label": "详细",
                "value": "descriptions"
              },
              {
                "label": "结果",
                "value": "result"
              }
            ]
            
          },
          "initialValue": "list"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "active",
            "zh-CN": "激活"
          }
        },
        "name": "active",
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
            "en-US": "pageHeader",
            "zh-CN": "页面头显示"
          }
        },
        "name": "pageHeader",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "statistic",
            "zh-CN": "骨架屏数量"
          }
        },
        "name": "statistic",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
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
            "en-US": "actionButton",
            "zh-CN": "actionButton"
          }
        },
        "name": "actionButton",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            
          },
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "toolbar",
            "zh-CN": "toolbar"
          }
        },
        "name": "toolbar",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            
          },
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "list",
            "zh-CN": "列表骨架屏"
          }
        },
        "name": "list",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
              }
            ]
          }
        }
      },

    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "骨架屏",
    "screenshot": "https://alifd.alicdn.com/fusion-cool/icons/icon-antd/skeleton-1.png",
    "schema": {
      "componentName": "ProSkeleton",
      "props": {}
    }
  }
];

export default {
  ...ProSkeletonMeta,
  snippets
};
