
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FieldSelectMeta: IPublicTypeComponentMetadata = {
  "componentName": "FieldSelect",
  "title": "FieldSelect",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "FieldSelect",
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
            "en-US": "text",
            "zh-CN": "值的类型"
          },
          "tip": "text | 值的类型"
        },
        "name": "text",
        "description": "值的类型",
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
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              }
            ]
          },
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fieldProps",
            "zh-CN": "放置到组件上 pro"
          },
          "tip": "fieldProps | 放置到组件上 props"
        },
        "name": "fieldProps",
        "description": "放置到组件上 props",
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
            "en-US": "mode",
            "zh-CN": "组件的渲染模式类型"
          },
          "tip": "mode | 组件的渲染模式类型"
        },
        "name": "mode",
        "description": "组件的渲染模式类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "read",
                "value": "read"
              },
              {
                "label": "edit",
                "value": "edit"
              },
              {
                "label": "update",
                "value": "update"
              }
            ],
            "options": [
              {
                "label": "read",
                "value": "read"
              },
              {
                "label": "edit",
                "value": "edit"
              },
              {
                "label": "update",
                "value": "update"
              }
            ]
          },
          "isRequired": true,
          "initialValue": "read"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "plain",
            "zh-CN": "简约模式"
          },
          "tip": "plain | 简约模式"
        },
        "name": "plain",
        "description": "简约模式",
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
            "en-US": "light",
            "zh-CN": "轻量模式"
          },
          "tip": "light | 轻量模式"
        },
        "name": "light",
        "description": "轻量模式",
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
            "en-US": "label",
            "zh-CN": "Label"
          },
          "tip": "label | Label"
        },
        "name": "label",
        "description": "Label",
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
            "en-US": "valueEnum",
            "zh-CN": "映射值的类型"
          },
          "tip": "valueEnum | 映射值的类型"
        },
        "name": "valueEnum",
        "description": "映射值的类型",
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
                      "props": {
                        "setters": []
                      },
                      "isRequired": false
                    }
                  }
                },
                "initialValue": {}
              },
              {
                "componentName": "FunctionSetter"
              },
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
            "en-US": "proFieldKey",
            "zh-CN": "唯一的key，用于网"
          },
          "tip": "proFieldKey | 唯一的key，用于网络请求"
        },
        "name": "proFieldKey",
        "description": "唯一的key，用于网络请求",
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
            "en-US": "render",
            "zh-CN": "自定义只读模式的渲染"
          },
          "tip": "render | 自定义只读模式的渲染器"
        },
        "name": "render",
        "description": "自定义只读模式的渲染器",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "renderFormItem",
            "zh-CN": "一个自定义的编辑渲染"
          },
          "tip": "renderFormItem | 一个自定义的编辑渲染器。"
        },
        "name": "renderFormItem",
        "description": "一个自定义的编辑渲染器。",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "debounceTime",
            "zh-CN": "防抖动时间 默认10"
          },
          "tip": "debounceTime | 防抖动时间 默认10 单位ms"
        },
        "name": "debounceTime",
        "description": "防抖动时间 默认10 单位ms",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "request",
            "zh-CN": "从服务器读取选项"
          },
          "tip": "request | 从服务器读取选项"
        },
        "name": "request",
        "description": "从服务器读取选项",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "params",
            "zh-CN": "重新触发的时机"
          },
          "tip": "params | 重新触发的时机"
        },
        "name": "params",
        "description": "重新触发的时机",
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
            "en-US": "bordered",
            "zh-CN": "bordered"
          }
        },
        "name": "bordered",
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
            "en-US": "id",
            "zh-CN": "id"
          }
        },
        "name": "id",
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
            "en-US": "defaultKeyWords",
            "zh-CN": "默认搜素条件"
          },
          "tip": "defaultKeyWords | 默认搜素条件"
        },
        "name": "defaultKeyWords",
        "description": "默认搜素条件",
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
            "en-US": "lightLabel",
            "zh-CN": "lightLabel"
          }
        },
        "name": "lightLabel",
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
            "en-US": "labelTrigger",
            "zh-CN": "labelTrigger"
          }
        },
        "name": "labelTrigger",
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
            "en-US": "fieldNames",
            "zh-CN": "fieldNames"
          }
        },
        "name": "fieldNames",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "label",
                      "zh-CN": "label"
                    }
                  },
                  "name": "label",
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
                      "en-US": "groupLabel",
                      "zh-CN": "groupLabel"
                    }
                  },
                  "name": "groupLabel",
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
                      "en-US": "options",
                      "zh-CN": "options"
                    }
                  },
                  "name": "options",
                  "setter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
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
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "FieldSelect",
    "screenshot": "",
    "schema": {
      "componentName": "FieldSelect",
      "props": {}
    }
  }
];

export default {
  ...FieldSelectMeta,
  snippets
};
