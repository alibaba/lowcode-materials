
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtTabsPaneMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtTabsPane",
  "title": "AtTabsPane",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtTabsPane",
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
            "en-US": "tabDirection",
            "zh-CN": "Tab 方向，请跟 "
          },
          "tip": "tabDirection | Tab 方向，请跟 AtTabs 保持一致"
        },
        "name": "tabDirection",
        "description": "Tab 方向，请跟 AtTabs 保持一致",
        "defaultValue": "'horizontal'",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "horizontal",
                      "value": "horizontal"
                    },
                    {
                      "label": "vertical",
                      "value": "vertical"
                    }
                  ],
                  "options": [
                    {
                      "label": "horizontal",
                      "value": "horizontal"
                    },
                    {
                      "label": "vertical",
                      "value": "vertical"
                    }
                  ]
                },
                "initialValue": "horizontal"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "current",
            "zh-CN": "当前选中的标签索引值"
          },
          "tip": "current | 当前选中的标签索引值，从 0 计数，请跟 AtTabs 保持一致"
        },
        "name": "current",
        "description": "当前选中的标签索引值，从 0 计数，请跟 AtTabs 保持一致",
        "defaultValue": "0",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "index",
            "zh-CN": "tabPane 排序"
          },
          "tip": "index | tabPane 排序，从 0 计数"
        },
        "name": "index",
        "description": "tabPane 排序，从 0 计数",
        "defaultValue": "0",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "className",
            "zh-CN": "className"
          }
        },
        "name": "className",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "style"
          }
        },
        "name": "style",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
            "en-US": "customStyle",
            "zh-CN": "customStyle"
          }
        },
        "name": "customStyle",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
          }
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AtTabsPane",
    "screenshot": "",
    "schema": {
      "componentName": "AtTabsPane",
      "props": {
        "tabDirection": "'horizontal'",
        "current": "0",
        "index": "0"
      }
    }
  }
];

export default {
  ...AtTabsPaneMeta,
  snippets
};
