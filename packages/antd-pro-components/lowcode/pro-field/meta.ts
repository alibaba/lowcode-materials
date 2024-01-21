
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProFieldMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProField",
  "title": "ProField",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProField",
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
            "zh-CN": "text"
          }
        },
        "name": "text",
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
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
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
                "initialValue": []
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
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
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "type",
                            "zh-CN": "type"
                          }
                        },
                        "name": "type",
                        "setter": {
                          "componentName": "SelectSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "money",
                                "value": "money"
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
                                "label": "image",
                                "value": "image"
                              }
                            ],
                            "options": [
                              {
                                "label": "money",
                                "value": "money"
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
                                "label": "image",
                                "value": "image"
                              }
                            ]
                          },
                          "isRequired": true,
                          "initialValue": "money"
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
                          "componentName": "SelectSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "success",
                                "value": "success"
                              },
                              {
                                "label": "normal",
                                "value": "normal"
                              },
                              {
                                "label": "active",
                                "value": "active"
                              },
                              {
                                "label": "exception",
                                "value": "exception"
                              }
                            ],
                            "options": [
                              {
                                "label": "success",
                                "value": "success"
                              },
                              {
                                "label": "normal",
                                "value": "normal"
                              },
                              {
                                "label": "active",
                                "value": "active"
                              },
                              {
                                "label": "exception",
                                "value": "exception"
                              }
                            ]
                          },
                          "initialValue": "success"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "locale",
                            "zh-CN": "locale"
                          }
                        },
                        "name": "locale",
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
                            "en-US": "showSymbol",
                            "zh-CN": "showSymbol"
                          }
                        },
                        "name": "showSymbol",
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
                            "en-US": "showColor",
                            "zh-CN": "showColor"
                          }
                        },
                        "name": "showColor",
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
                            "en-US": "precision",
                            "zh-CN": "precision"
                          }
                        },
                        "name": "precision",
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
                            "en-US": "moneySymbol",
                            "zh-CN": "moneySymbol"
                          }
                        },
                        "name": "moneySymbol",
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
                            "en-US": "request",
                            "zh-CN": "request"
                          }
                        },
                        "name": "request",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "width",
                            "zh-CN": "width"
                          }
                        },
                        "name": "width",
                        "setter": {
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
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
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "avatar",
                      "value": "avatar"
                    },
                    {
                      "label": "text",
                      "value": "text"
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
                      "label": "image",
                      "value": "image"
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
                      "label": "color",
                      "value": "color"
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
                      "label": "avatar",
                      "value": "avatar"
                    },
                    {
                      "label": "text",
                      "value": "text"
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
                      "label": "image",
                      "value": "image"
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
                      "label": "color",
                      "value": "color"
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
                "initialValue": "avatar"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChange",
            "zh-CN": "onChange"
          }
        },
        "name": "onChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
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
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
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
          "initialValue": "read"
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
            "en-US": "readonly",
            "zh-CN": "readonly"
          }
        },
        "name": "readonly",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "open",
            "zh-CN": "open"
          }
        },
        "name": "open",
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
            "en-US": "onOpenChange",
            "zh-CN": "onOpenChange"
          }
        },
        "name": "onOpenChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onVisible",
            "zh-CN": "@deprecate"
          },
          "tip": "onVisible | @deprecated use onOpenChange replace"
        },
        "name": "onVisible",
        "description": "@deprecated use onOpenChange replace",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "visible",
            "zh-CN": "@deprecate"
          },
          "tip": "visible | @deprecated use open replace"
        },
        "name": "visible",
        "description": "@deprecated use open replace",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
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
    "title": "ProField",
    "screenshot": "",
    "schema": {
      "componentName": "ProField",
      "props": {}
    }
  }
];

export default {
  ...ProFieldMeta,
  snippets
};
