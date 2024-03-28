
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProConfigProviderMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProConfigProvider",
  "title": "高级全局配置",
  group: '高级组件',
  category: '布局类',
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/antd-pro",
    "version": "1.0.0-rc.37",
    "exportName": "ProConfigProvider",
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
            "en-US": "autoClearCache",
            "zh-CN": "自动清除缓存"
          }
        },
        "name": "autoClearCache",
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
            "en-US": "token",
            "zh-CN": "token"
          }
        },
        "name": "token",
        "setter": {
          "componentName": "JsonSetter",

            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
        
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "needDeps",
            "zh-CN": "依赖项"
          }
        },
        "name": "needDeps",
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
            "en-US": "valueTypeMap",
            "zh-CN": "值映射"
          }
        },
        "name": "valueTypeMap",
        "setter": {
          "componentName": "JsonSetter",
  
            "config": {
              "extraSetter": {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false
              }
            }
          },
        
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dark",
            "zh-CN": "黑暗模式"
          }
        },
        "name": "dark",
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
            "en-US": "hashed",
            "zh-CN": "哈希值"
          }
        },
        "name": "hashed",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
    ],
    "supports": {
      "style": true,
    
    },
  
    component: { isContainer: true },  }
};
const snippets: IPublicTypeSnippet[] = [
  {

    "title": "高级全局配置",
    "screenshot": "https://alifd.alicdn.com/fusion-cool/icons/icon-antd/config-provider-1.jpg",
    "schema": {
      "componentName": "ProConfigProvider",
      "props": {}
    }
  }
];

export default {
  ...ProConfigProviderMeta,
  snippets
};
