
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FieldRangePickerMeta: IPublicTypeComponentMetadata = {
  "componentName": "FieldRangePicker",
  "title": "FieldRangePicker",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "FieldRangePicker",
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
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "MixedSetter",
                "props": {}
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
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "K",
                            "zh-CN": "K"
                          }
                        },
                        "name": "K",
                        "setter": {
                          "componentName": "MixedSetter",
                          "isRequired": true,
                          "props": {}
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "V",
                            "zh-CN": "V"
                          }
                        },
                        "name": "V",
                        "setter": {
                          "componentName": "MixedSetter",
                          "isRequired": true,
                          "props": {}
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "clear",
                            "zh-CN": "clear"
                          }
                        },
                        "name": "clear",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "delete",
                            "zh-CN": "delete"
                          }
                        },
                        "name": "delete",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "forEach",
                            "zh-CN": "forEach"
                          }
                        },
                        "name": "forEach",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "get",
                            "zh-CN": "get"
                          }
                        },
                        "name": "get",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "has",
                            "zh-CN": "has"
                          }
                        },
                        "name": "has",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "set",
                            "zh-CN": "set"
                          }
                        },
                        "name": "set",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "size",
                            "zh-CN": "size"
                          }
                        },
                        "name": "size",
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
                            "en-US": "__@iterator",
                            "zh-CN": "__@iterator"
                          }
                        },
                        "name": "__@iterator",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "entries",
                            "zh-CN": "entries"
                          }
                        },
                        "name": "entries",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "keys",
                            "zh-CN": "keys"
                          }
                        },
                        "name": "keys",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "values",
                            "zh-CN": "values"
                          }
                        },
                        "name": "values",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "__@toStringTag",
                            "zh-CN": "__@toStringTag"
                          }
                        },
                        "name": "__@toStringTag",
                        "setter": {
                          "componentName": "StringSetter",
                          "isRequired": true,
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
            "en-US": "format",
            "zh-CN": "format"
          }
        },
        "name": "format",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
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
            "en-US": "showTime",
            "zh-CN": "showTime"
          }
        },
        "name": "showTime",
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
            "en-US": "picker",
            "zh-CN": "picker"
          }
        },
        "name": "picker",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "date",
                "value": "date"
              },
              {
                "label": "time",
                "value": "time"
              },
              {
                "label": "month",
                "value": "month"
              },
              {
                "label": "week",
                "value": "week"
              },
              {
                "label": "quarter",
                "value": "quarter"
              },
              {
                "label": "year",
                "value": "year"
              }
            ],
            "options": [
              {
                "label": "date",
                "value": "date"
              },
              {
                "label": "time",
                "value": "time"
              },
              {
                "label": "month",
                "value": "month"
              },
              {
                "label": "week",
                "value": "week"
              },
              {
                "label": "quarter",
                "value": "quarter"
              },
              {
                "label": "year",
                "value": "year"
              }
            ]
          },
          "initialValue": "date"
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
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "FieldRangePicker",
    "screenshot": "",
    "schema": {
      "componentName": "FieldRangePicker",
      "props": {}
    }
  }
];

export default {
  ...FieldRangePickerMeta,
  snippets
};
