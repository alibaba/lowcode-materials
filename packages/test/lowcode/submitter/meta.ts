
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SubmitterMeta: IPublicTypeComponentMetadata = {
  "componentName": "Submitter",
  "title": "Submitter",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Submitter",
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
            "en-US": "searchConfig",
            "zh-CN": "@name 搜索的配"
          },
          "tip": "searchConfig | @name 搜索的配置，一般用来配置文本"
        },
        "name": "searchConfig",
        "description": "@name 搜索的配置，一般用来配置文本",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "resetText",
                      "zh-CN": "resetText"
                    }
                  },
                  "name": "resetText",
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
                      "en-US": "submitText",
                      "zh-CN": "submitText"
                    }
                  },
                  "name": "submitText",
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
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "submitButtonProps",
            "zh-CN": "@name 提交按钮"
          },
          "tip": "submitButtonProps | @name 提交按钮的 props"
        },
        "name": "submitButtonProps",
        "description": "@name 提交按钮的 props",
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
                      "label": "false",
                      "value": false
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
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
            "en-US": "resetButtonProps",
            "zh-CN": "@name 重置按钮"
          },
          "tip": "resetButtonProps | @name 重置按钮的 props"
        },
        "name": "resetButtonProps",
        "description": "@name 重置按钮的 props",
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
                      "label": "false",
                      "value": false
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
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
            "en-US": "render",
            "zh-CN": "@name 自定义操"
          },
          "tip": "render | @name 自定义操作的渲染"
        },
        "name": "render",
        "description": "@name 自定义操作的渲染",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter",
                "isRequired": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ]
                },
                "initialValue": false
              }
            ]
          }
        }
      }
    ],
    "supports": {
      "events": [
        {
          "name": "onSubmit",
          "description": "@name 提交方法"
        },
        {
          "name": "onReset",
          "description": "@name 重置方法"
        }
      ],
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Submitter",
    "screenshot": "",
    "schema": {
      "componentName": "Submitter",
      "props": {}
    }
  }
];

export default {
  ...SubmitterMeta,
  snippets
};
