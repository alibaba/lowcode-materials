
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtCurtainMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtCurtain",
  "title": "AtCurtain",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtCurtain",
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
            "en-US": "isOpened",
            "zh-CN": "是否开启"
          },
          "tip": "isOpened | 是否开启"
        },
        "name": "isOpened",
        "description": "是否开启",
        "defaultValue": "false",
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
                "componentName": "BoolSetter",
                "isRequired": false,
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
            "en-US": "closeBtnPosition",
            "zh-CN": "关闭图标位置"
          },
          "tip": "closeBtnPosition | 关闭图标位置"
        },
        "name": "closeBtnPosition",
        "description": "关闭图标位置",
        "defaultValue": "'bottom'",
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
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "top-left",
                      "value": "top-left"
                    },
                    {
                      "label": "top-right",
                      "value": "top-right"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    },
                    {
                      "label": "bottom-left",
                      "value": "bottom-left"
                    },
                    {
                      "label": "bottom-right",
                      "value": "bottom-right"
                    }
                  ],
                  "options": [
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "top-left",
                      "value": "top-left"
                    },
                    {
                      "label": "top-right",
                      "value": "top-right"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    },
                    {
                      "label": "bottom-left",
                      "value": "bottom-left"
                    },
                    {
                      "label": "bottom-right",
                      "value": "bottom-right"
                    }
                  ]
                },
                "initialValue": "top"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClose",
            "zh-CN": "点击关闭按钮触发事件"
          },
          "tip": "onClose | 点击关闭按钮触发事件"
        },
        "name": "onClose",
        "description": "点击关闭按钮触发事件",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": true
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
    "title": "AtCurtain",
    "screenshot": "",
    "schema": {
      "componentName": "AtCurtain",
      "props": {
        "isOpened": "false",
        "closeBtnPosition": "'bottom'"
      }
    }
  }
];

export default {
  ...AtCurtainMeta,
  snippets
};
