
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtSegmentedControlMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtSegmentedControl",
  "title": "AtSegmentedControl",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtSegmentedControl",
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
            "en-US": "current",
            "zh-CN": "当前选中的 tab "
          },
          "tip": "current | 当前选中的 tab 索引值，从 0 计数"
        },
        "name": "current",
        "description": "当前选中的 tab 索引值，从 0 计数",
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
            "en-US": "color",
            "zh-CN": "背景颜色与选中标签字"
          },
          "tip": "color | 背景颜色与选中标签字体的颜色"
        },
        "name": "color",
        "description": "背景颜色与选中标签字体的颜色",
        "defaultValue": "#fff",
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
            "en-US": "selectedColor",
            "zh-CN": "选中的标签背景色与边"
          },
          "tip": "selectedColor | 选中的标签背景色与边框颜色"
        },
        "name": "selectedColor",
        "description": "选中的标签背景色与边框颜色",
        "defaultValue": "#6190E8",
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
            "en-US": "fontSize",
            "zh-CN": "字体大小，单位 h5"
          },
          "tip": "fontSize | 字体大小，单位 h5 为 rem，小程序为 rem"
        },
        "name": "fontSize",
        "description": "字体大小，单位 h5 为 rem，小程序为 rem",
        "defaultValue": "28",
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
            "en-US": "disabled",
            "zh-CN": "是否禁止点击"
          },
          "tip": "disabled | 是否禁止点击"
        },
        "name": "disabled",
        "description": "是否禁止点击",
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
            "en-US": "values",
            "zh-CN": "选项数组，值是字符串"
          },
          "tip": "values | 选项数组，值是字符串，eg: ['标签页1', '标签页2']"
        },
        "name": "values",
        "description": "选项数组，值是字符串，eg: ['标签页1', '标签页2']",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "StringSetter",
              "isRequired": false,
              "initialValue": ""
            }
          },
          "isRequired": true,
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "点击触发事件，开发者"
          },
          "tip": "onClick | 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填"
        },
        "name": "onClick",
        "description": "点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填",
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
    "title": "AtSegmentedControl",
    "screenshot": "",
    "schema": {
      "componentName": "AtSegmentedControl",
      "props": {
        "current": "0",
        "color": "#fff",
        "selectedColor": "#6190E8",
        "fontSize": "28",
        "disabled": "false"
      }
    }
  }
];

export default {
  ...AtSegmentedControlMeta,
  snippets
};
