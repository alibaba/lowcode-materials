
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FieldRenderMeta: IPublicTypeComponentMetadata = {
  "componentName": "FieldRender",
  "title": "FieldRender",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "FieldRender",
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
            "en-US": "key",
            "zh-CN": "@name 确定这个"
          },
          "tip": "key | @name 确定这个列的唯一值,一般用于 dataIndex 重复的情况"
        },
        "name": "key",
        "description": "@name 确定这个列的唯一值,一般用于 dataIndex 重复的情况",
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
            "en-US": "dataIndex",
            "zh-CN": "支持一个数字，[a,"
          },
          "tip": "dataIndex | 支持一个数字，[a,b] 会转化为 obj.a.b"
        },
        "name": "dataIndex",
        "description": "支持一个数字，[a,b] 会转化为 obj.a.b",
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
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
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
                "initialValue": []
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "支持 ReactNo"
          },
          "tip": "title | 支持 ReactNode 和 方法"
        },
        "name": "title",
        "description": "支持 ReactNode 和 方法",
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
              },
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
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
                "componentName": "FunctionSetter",
                "isRequired": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tooltip",
            "zh-CN": "@name 展示一个"
          },
          "tip": "tooltip | @name 展示一个 icon，hover 是展示一些提示信息"
        },
        "name": "tooltip",
        "description": "@name 展示一个 icon，hover 是展示一些提示信息",
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
              },
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
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
                "componentName": "FunctionSetter"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tip",
            "zh-CN": "@deprecate"
          },
          "tip": "tip | @deprecated 你可以使用 tooltip，这个更改是为了与 antd 统一"
        },
        "name": "tip",
        "description": "@deprecated 你可以使用 tooltip，这个更改是为了与 antd 统一",
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
            "en-US": "valueEnum",
            "zh-CN": "支持 object "
          },
          "tip": "valueEnum | 支持 object 和Map，Map 是支持其他基础类型作为 key"
        },
        "name": "valueEnum",
        "description": "支持 object 和Map，Map 是支持其他基础类型作为 key",
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
              },
              {
                "componentName": "FunctionSetter",
                "isRequired": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formItemProps",
            "zh-CN": "@name 自定义的"
          },
          "tip": "formItemProps | @name 自定义的 formItemProps"
        },
        "name": "formItemProps",
        "description": "@name 自定义的 formItemProps",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "Values",
                            "zh-CN": "Values"
                          }
                        },
                        "name": "Values",
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
                            "en-US": "prefixCls",
                            "zh-CN": "prefixCls"
                          }
                        },
                        "name": "prefixCls",
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
                            "en-US": "noStyle",
                            "zh-CN": "noStyle"
                          }
                        },
                        "name": "noStyle",
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
                            "en-US": "style",
                            "zh-CN": "style"
                          }
                        },
                        "name": "style",
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
                            "en-US": "className",
                            "zh-CN": "className"
                          }
                        },
                        "name": "className",
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
                            "en-US": "rootClassName",
                            "zh-CN": "rootClassName"
                          }
                        },
                        "name": "rootClassName",
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
                            "en-US": "children",
                            "zh-CN": "children"
                          }
                        },
                        "name": "children",
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
                              },
                              {
                                "componentName": "BoolSetter",
                                "isRequired": false,
                                "initialValue": false
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
                                "componentName": "FunctionSetter",
                                "isRequired": false
                              }
                            ]
                          }
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
                            "en-US": "hasFeedback",
                            "zh-CN": "hasFeedback"
                          }
                        },
                        "name": "hasFeedback",
                        "setter": {
                          "componentName": "MixedSetter",
                          "props": {
                            "setters": [
                              {
                                "componentName": "BoolSetter",
                                "isRequired": false,
                                "initialValue": false
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
                                            "en-US": "icons",
                                            "zh-CN": "icons"
                                          }
                                        },
                                        "name": "icons",
                                        "setter": {
                                          "componentName": "FunctionSetter",
                                          "isRequired": true
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
                            "en-US": "validateStatus",
                            "zh-CN": "validateStatus"
                          }
                        },
                        "name": "validateStatus",
                        "setter": {
                          "componentName": "SelectSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "",
                                "value": ""
                              },
                              {
                                "label": "success",
                                "value": "success"
                              },
                              {
                                "label": "error",
                                "value": "error"
                              },
                              {
                                "label": "warning",
                                "value": "warning"
                              },
                              {
                                "label": "validating",
                                "value": "validating"
                              }
                            ],
                            "options": [
                              {
                                "label": "",
                                "value": ""
                              },
                              {
                                "label": "success",
                                "value": "success"
                              },
                              {
                                "label": "error",
                                "value": "error"
                              },
                              {
                                "label": "warning",
                                "value": "warning"
                              },
                              {
                                "label": "validating",
                                "value": "validating"
                              }
                            ]
                          },
                          "initialValue": ""
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "required",
                            "zh-CN": "required"
                          }
                        },
                        "name": "required",
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
                            "en-US": "hidden",
                            "zh-CN": "hidden"
                          }
                        },
                        "name": "hidden",
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
                            "en-US": "initialValue",
                            "zh-CN": "initialValue"
                          }
                        },
                        "name": "initialValue",
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
                            "en-US": "messageVariables",
                            "zh-CN": "messageVariables"
                          }
                        },
                        "name": "messageVariables",
                        "setter": {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "extraSetter": {
                                "componentName": "StringSetter",
                                "isRequired": false,
                                "initialValue": ""
                              }
                            }
                          },
                          "initialValue": {}
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "tooltip",
                            "zh-CN": "tooltip"
                          }
                        },
                        "name": "tooltip",
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
                              },
                              {
                                "componentName": "BoolSetter",
                                "isRequired": false,
                                "initialValue": false
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
                                "componentName": "FunctionSetter"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "fieldKey",
                            "zh-CN": "fieldKey"
                          }
                        },
                        "name": "fieldKey",
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
                              },
                              {
                                "componentName": "ArraySetter",
                                "props": {
                                  "itemSetter": {
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
                                "initialValue": []
                              }
                            ]
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
              },
              {
                "componentName": "FunctionSetter",
                "isRequired": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "renderText",
            "zh-CN": "修改的数据是会被 v"
          },
          "tip": "renderText | 修改的数据是会被 valueType 消费"
        },
        "name": "renderText",
        "description": "修改的数据是会被 valueType 消费",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "render",
            "zh-CN": "Render 方法只"
          },
          "tip": "render | Render 方法只管理的只读模式，编辑模式需要使用 renderFormItem"
        },
        "name": "render",
        "description": "Render 方法只管理的只读模式，编辑模式需要使用 renderFormItem",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "renderFormItem",
            "zh-CN": "返回一个 React"
          },
          "tip": "renderFormItem | 返回一个 ReactNode，会自动包裹 value 和 onChange"
        },
        "name": "renderFormItem",
        "description": "返回一个 ReactNode，会自动包裹 value 和 onChange",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "editable",
            "zh-CN": "@name 可编辑表"
          },
          "tip": "editable | @name 可编辑表格是否可编辑"
        },
        "name": "editable",
        "description": "@name 可编辑表格是否可编辑",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "request",
            "zh-CN": "@name 从服务器"
          },
          "tip": "request | @name 从服务器请求枚举"
        },
        "name": "request",
        "description": "@name 从服务器请求枚举",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "debounceTime",
            "zh-CN": "@name requ"
          },
          "tip": "debounceTime | @name request防抖动时间 默认10 单位ms"
        },
        "name": "debounceTime",
        "description": "@name request防抖动时间 默认10 单位ms",
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
            "en-US": "params",
            "zh-CN": "@name 从服务器"
          },
          "tip": "params | @name 从服务器请求的参数，改变了会触发 reload"
        },
        "name": "params",
        "description": "@name 从服务器请求的参数，改变了会触发 reload",
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
                "componentName": "FunctionSetter",
                "isRequired": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dependencies",
            "zh-CN": "@name 依赖字段"
          },
          "tip": "dependencies | @name 依赖字段的name，暂时只在拥有 request 的项目中生效，会自动注入到 params 中"
        },
        "name": "dependencies",
        "description": "@name 依赖字段的name，暂时只在拥有 request 的项目中生效，会自动注入到 params 中",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ignoreFormItem",
            "zh-CN": "@name 忽略 F"
          },
          "tip": "ignoreFormItem | @name 忽略 FormItem，必须要和 renderFormItem 组件一起使用"
        },
        "name": "ignoreFormItem",
        "description": "@name 忽略 FormItem，必须要和 renderFormItem 组件一起使用",
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
            "en-US": "hideInDescriptions",
            "zh-CN": "@name 在 de"
          },
          "tip": "hideInDescriptions | @name 在 descriptions 隐藏"
        },
        "name": "hideInDescriptions",
        "description": "@name 在 descriptions 隐藏",
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
            "en-US": "hideInForm",
            "zh-CN": "@name 在 Fo"
          },
          "tip": "hideInForm | @name 在 Form 中隐藏"
        },
        "name": "hideInForm",
        "description": "@name 在 Form 中隐藏",
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
            "en-US": "hideInTable",
            "zh-CN": "@name 在 ta"
          },
          "tip": "hideInTable | @name 在 table 中隐藏"
        },
        "name": "hideInTable",
        "description": "@name 在 table 中隐藏",
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
            "en-US": "hideInSearch",
            "zh-CN": "@name 在 ta"
          },
          "tip": "hideInSearch | @name 在 table的查询表单 中隐藏"
        },
        "name": "hideInSearch",
        "description": "@name 在 table的查询表单 中隐藏",
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
            "en-US": "proFieldProps",
            "zh-CN": "设置到 ProFie"
          },
          "tip": "proFieldProps | 设置到 ProField 上面的 Props，内部属性"
        },
        "name": "proFieldProps",
        "description": "设置到 ProField 上面的 Props，内部属性",
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
            "en-US": "prefixCls",
            "zh-CN": "prefixCls"
          }
        },
        "name": "prefixCls",
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
            "en-US": "labelStyle",
            "zh-CN": "labelStyle"
          }
        },
        "name": "labelStyle",
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
            "en-US": "contentStyle",
            "zh-CN": "contentStyle"
          }
        },
        "name": "contentStyle",
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
            "en-US": "span",
            "zh-CN": "span"
          }
        },
        "name": "span",
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
            "en-US": "hide",
            "zh-CN": "hide"
          }
        },
        "name": "hide",
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
            "en-US": "plain",
            "zh-CN": "plain"
          }
        },
        "name": "plain",
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
            "en-US": "copyable",
            "zh-CN": "copyable"
          }
        },
        "name": "copyable",
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
            "en-US": "ellipsis",
            "zh-CN": "ellipsis"
          }
        },
        "name": "ellipsis",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                "isRequired": false,
                "initialValue": false
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
                            "en-US": "showTitle",
                            "zh-CN": "showTitle"
                          }
                        },
                        "name": "showTitle",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": false,
                          "initialValue": false
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
            "en-US": "mode",
            "zh-CN": "mode"
          }
        },
        "name": "mode",
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
          "initialValue": "read"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "order",
            "zh-CN": "子项的排序"
          },
          "tip": "order | 子项的排序"
        },
        "name": "order",
        "description": "子项的排序",
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
            "en-US": "index",
            "zh-CN": "子项的索引"
          },
          "tip": "index | 子项的索引"
        },
        "name": "index",
        "description": "子项的索引",
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
            "en-US": "valueType",
            "zh-CN": "valueType"
          }
        },
        "name": "valueType",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "color",
                      "value": "color"
                    },
                    {
                      "label": "image",
                      "value": "image"
                    },
                    {
                      "label": "text",
                      "value": "text"
                    },
                    {
                      "label": "avatar",
                      "value": "avatar"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "money",
                      "value": "money"
                    },
                    {
                      "label": "index",
                      "value": "index"
                    },
                    {
                      "label": "indexBorder",
                      "value": "indexBorder"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "textarea",
                      "value": "textarea"
                    },
                    {
                      "label": "date",
                      "value": "date"
                    },
                    {
                      "label": "dateWeek",
                      "value": "dateWeek"
                    },
                    {
                      "label": "dateMonth",
                      "value": "dateMonth"
                    },
                    {
                      "label": "dateQuarter",
                      "value": "dateQuarter"
                    },
                    {
                      "label": "dateYear",
                      "value": "dateYear"
                    },
                    {
                      "label": "dateTime",
                      "value": "dateTime"
                    },
                    {
                      "label": "fromNow",
                      "value": "fromNow"
                    },
                    {
                      "label": "dateRange",
                      "value": "dateRange"
                    },
                    {
                      "label": "dateTimeRange",
                      "value": "dateTimeRange"
                    },
                    {
                      "label": "dateWeekRange",
                      "value": "dateWeekRange"
                    },
                    {
                      "label": "dateMonthRange",
                      "value": "dateMonthRange"
                    },
                    {
                      "label": "dateQuarterRange",
                      "value": "dateQuarterRange"
                    },
                    {
                      "label": "dateYearRange",
                      "value": "dateYearRange"
                    },
                    {
                      "label": "time",
                      "value": "time"
                    },
                    {
                      "label": "timeRange",
                      "value": "timeRange"
                    },
                    {
                      "label": "select",
                      "value": "select"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "rate",
                      "value": "rate"
                    },
                    {
                      "label": "slider",
                      "value": "slider"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "radioButton",
                      "value": "radioButton"
                    },
                    {
                      "label": "progress",
                      "value": "progress"
                    },
                    {
                      "label": "percent",
                      "value": "percent"
                    },
                    {
                      "label": "digit",
                      "value": "digit"
                    },
                    {
                      "label": "digitRange",
                      "value": "digitRange"
                    },
                    {
                      "label": "second",
                      "value": "second"
                    },
                    {
                      "label": "code",
                      "value": "code"
                    },
                    {
                      "label": "jsonCode",
                      "value": "jsonCode"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "cascader",
                      "value": "cascader"
                    },
                    {
                      "label": "treeSelect",
                      "value": "treeSelect"
                    },
                    {
                      "label": "segmented",
                      "value": "segmented"
                    },
                    {
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "formList",
                      "value": "formList"
                    },
                    {
                      "label": "formSet",
                      "value": "formSet"
                    },
                    {
                      "label": "divider",
                      "value": "divider"
                    },
                    {
                      "label": "dependency",
                      "value": "dependency"
                    }
                  ],
                  "options": [
                    {
                      "label": "color",
                      "value": "color"
                    },
                    {
                      "label": "image",
                      "value": "image"
                    },
                    {
                      "label": "text",
                      "value": "text"
                    },
                    {
                      "label": "avatar",
                      "value": "avatar"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "money",
                      "value": "money"
                    },
                    {
                      "label": "index",
                      "value": "index"
                    },
                    {
                      "label": "indexBorder",
                      "value": "indexBorder"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "textarea",
                      "value": "textarea"
                    },
                    {
                      "label": "date",
                      "value": "date"
                    },
                    {
                      "label": "dateWeek",
                      "value": "dateWeek"
                    },
                    {
                      "label": "dateMonth",
                      "value": "dateMonth"
                    },
                    {
                      "label": "dateQuarter",
                      "value": "dateQuarter"
                    },
                    {
                      "label": "dateYear",
                      "value": "dateYear"
                    },
                    {
                      "label": "dateTime",
                      "value": "dateTime"
                    },
                    {
                      "label": "fromNow",
                      "value": "fromNow"
                    },
                    {
                      "label": "dateRange",
                      "value": "dateRange"
                    },
                    {
                      "label": "dateTimeRange",
                      "value": "dateTimeRange"
                    },
                    {
                      "label": "dateWeekRange",
                      "value": "dateWeekRange"
                    },
                    {
                      "label": "dateMonthRange",
                      "value": "dateMonthRange"
                    },
                    {
                      "label": "dateQuarterRange",
                      "value": "dateQuarterRange"
                    },
                    {
                      "label": "dateYearRange",
                      "value": "dateYearRange"
                    },
                    {
                      "label": "time",
                      "value": "time"
                    },
                    {
                      "label": "timeRange",
                      "value": "timeRange"
                    },
                    {
                      "label": "select",
                      "value": "select"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "rate",
                      "value": "rate"
                    },
                    {
                      "label": "slider",
                      "value": "slider"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "radioButton",
                      "value": "radioButton"
                    },
                    {
                      "label": "progress",
                      "value": "progress"
                    },
                    {
                      "label": "percent",
                      "value": "percent"
                    },
                    {
                      "label": "digit",
                      "value": "digit"
                    },
                    {
                      "label": "digitRange",
                      "value": "digitRange"
                    },
                    {
                      "label": "second",
                      "value": "second"
                    },
                    {
                      "label": "code",
                      "value": "code"
                    },
                    {
                      "label": "jsonCode",
                      "value": "jsonCode"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "cascader",
                      "value": "cascader"
                    },
                    {
                      "label": "treeSelect",
                      "value": "treeSelect"
                    },
                    {
                      "label": "segmented",
                      "value": "segmented"
                    },
                    {
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "formList",
                      "value": "formList"
                    },
                    {
                      "label": "formSet",
                      "value": "formSet"
                    },
                    {
                      "label": "divider",
                      "value": "divider"
                    },
                    {
                      "label": "dependency",
                      "value": "dependency"
                    }
                  ]
                },
                "initialValue": "color"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fieldProps",
            "zh-CN": "fieldProps"
          }
        },
        "name": "fieldProps",
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
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "rootClassName",
                            "zh-CN": "rootClassName"
                          }
                        },
                        "name": "rootClassName",
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
                            "en-US": "size",
                            "zh-CN": "size"
                          }
                        },
                        "name": "size",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "small",
                                "value": "small"
                              },
                              {
                                "label": "middle",
                                "value": "middle"
                              },
                              {
                                "label": "large",
                                "value": "large"
                              }
                            ],
                            "options": [
                              {
                                "label": "small",
                                "value": "small"
                              },
                              {
                                "label": "middle",
                                "value": "middle"
                              },
                              {
                                "label": "large",
                                "value": "large"
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
                            "en-US": "disabled",
                            "zh-CN": "disabled"
                          }
                        },
                        "name": "disabled",
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
                            "en-US": "status",
                            "zh-CN": "status"
                          }
                        },
                        "name": "status",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "",
                                "value": ""
                              },
                              {
                                "label": "error",
                                "value": "error"
                              },
                              {
                                "label": "warning",
                                "value": "warning"
                              }
                            ],
                            "options": [
                              {
                                "label": "",
                                "value": ""
                              },
                              {
                                "label": "error",
                                "value": "error"
                              },
                              {
                                "label": "warning",
                                "value": "warning"
                              }
                            ]
                          },
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
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
              },
              {
                "componentName": "FunctionSetter",
                "isRequired": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "text",
            "zh-CN": "text"
          }
        },
        "name": "text",
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
            "en-US": "entity",
            "zh-CN": "entity"
          }
        },
        "name": "entity",
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
            "en-US": "action",
            "zh-CN": "action"
          }
        },
        "name": "action",
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
            "en-US": "editableUtils",
            "zh-CN": "editableUtils"
          }
        },
        "name": "editableUtils",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "editableKeys",
                      "zh-CN": "editableKeys"
                    }
                  },
                  "name": "editableKeys",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
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
                    "isRequired": true,
                    "initialValue": []
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "setEditableRowKeys",
                      "zh-CN": "setEditableRowKeys"
                    }
                  },
                  "name": "setEditableRowKeys",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isEditable",
                      "zh-CN": "isEditable"
                    }
                  },
                  "name": "isEditable",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "actionRender",
                      "zh-CN": "actionRender"
                    }
                  },
                  "name": "actionRender",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "startEditable",
                      "zh-CN": "startEditable"
                    }
                  },
                  "name": "startEditable",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "cancelEditable",
                      "zh-CN": "cancelEditable"
                    }
                  },
                  "name": "cancelEditable",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
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
            "en-US": "emptyText",
            "zh-CN": "emptyText"
          }
        },
        "name": "emptyText",
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
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "FieldRender",
    "screenshot": "",
    "schema": {
      "componentName": "FieldRender",
      "props": {}
    }
  }
];

export default {
  ...FieldRenderMeta,
  snippets
};
