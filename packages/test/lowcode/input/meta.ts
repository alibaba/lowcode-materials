
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const InputMeta: IPublicTypeComponentMetadata = {
  "componentName": "Input",
  "title": "Input",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Input",
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
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
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
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
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
            "en-US": "allowClear",
            "zh-CN": "allowClear"
          }
        },
        "name": "allowClear",
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
                            "en-US": "clearIcon",
                            "zh-CN": "clearIcon"
                          }
                        },
                        "name": "clearIcon",
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
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "styles",
            "zh-CN": "styles"
          }
        },
        "name": "styles",
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
            "en-US": "type",
            "zh-CN": "type"
          }
        },
        "name": "type",
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
                      "label": "number",
                      "value": "number"
                    },
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
                      "label": "date",
                      "value": "date"
                    },
                    {
                      "label": "time",
                      "value": "time"
                    },
                    {
                      "label": "submit",
                      "value": "submit"
                    },
                    {
                      "label": "reset",
                      "value": "reset"
                    },
                    {
                      "label": "button",
                      "value": "button"
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
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "hidden",
                      "value": "hidden"
                    },
                    {
                      "label": "datetime-local",
                      "value": "datetime-local"
                    },
                    {
                      "label": "email",
                      "value": "email"
                    },
                    {
                      "label": "file",
                      "value": "file"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "range",
                      "value": "range"
                    },
                    {
                      "label": "tel",
                      "value": "tel"
                    },
                    {
                      "label": "url",
                      "value": "url"
                    }
                  ],
                  "options": [
                    {
                      "label": "number",
                      "value": "number"
                    },
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
                      "label": "date",
                      "value": "date"
                    },
                    {
                      "label": "time",
                      "value": "time"
                    },
                    {
                      "label": "submit",
                      "value": "submit"
                    },
                    {
                      "label": "reset",
                      "value": "reset"
                    },
                    {
                      "label": "button",
                      "value": "button"
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
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "hidden",
                      "value": "hidden"
                    },
                    {
                      "label": "datetime-local",
                      "value": "datetime-local"
                    },
                    {
                      "label": "email",
                      "value": "email"
                    },
                    {
                      "label": "file",
                      "value": "file"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "range",
                      "value": "range"
                    },
                    {
                      "label": "tel",
                      "value": "tel"
                    },
                    {
                      "label": "url",
                      "value": "url"
                    }
                  ]
                },
                "initialValue": "number"
              }
            ]
          }
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
            "en-US": "height",
            "zh-CN": "height"
          }
        },
        "name": "height",
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
            "en-US": "form",
            "zh-CN": "form"
          }
        },
        "name": "form",
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
            "en-US": "list",
            "zh-CN": "list"
          }
        },
        "name": "list",
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
            "en-US": "placeholder",
            "zh-CN": "placeholder"
          }
        },
        "name": "placeholder",
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
            "en-US": "maxLength",
            "zh-CN": "maxLength"
          }
        },
        "name": "maxLength",
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
            "en-US": "step",
            "zh-CN": "step"
          }
        },
        "name": "step",
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
            "en-US": "src",
            "zh-CN": "src"
          }
        },
        "name": "src",
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
            "en-US": "alt",
            "zh-CN": "alt"
          }
        },
        "name": "alt",
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
            "en-US": "count",
            "zh-CN": "count"
          }
        },
        "name": "count",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "max",
                      "zh-CN": "max"
                    }
                  },
                  "name": "max",
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
                      "en-US": "strategy",
                      "zh-CN": "strategy"
                    }
                  },
                  "name": "strategy",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "show",
                      "zh-CN": "show"
                    }
                  },
                  "name": "show",
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
                      "en-US": "exceedFormatter",
                      "zh-CN": "exceedFormatter"
                    }
                  },
                  "name": "exceedFormatter",
                  "setter": {
                    "componentName": "FunctionSetter"
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
            "en-US": "classNames",
            "zh-CN": "classNames"
          }
        },
        "name": "classNames",
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
            "en-US": "formAction",
            "zh-CN": "formAction"
          }
        },
        "name": "formAction",
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
            "en-US": "formEncType",
            "zh-CN": "formEncType"
          }
        },
        "name": "formEncType",
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
            "en-US": "formMethod",
            "zh-CN": "formMethod"
          }
        },
        "name": "formMethod",
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
            "en-US": "formNoValidate",
            "zh-CN": "formNoValidate"
          }
        },
        "name": "formNoValidate",
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
            "en-US": "formTarget",
            "zh-CN": "formTarget"
          }
        },
        "name": "formTarget",
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
            "en-US": "name",
            "zh-CN": "name"
          }
        },
        "name": "name",
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
            "en-US": "checked",
            "zh-CN": "checked"
          }
        },
        "name": "checked",
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
            "en-US": "pattern",
            "zh-CN": "pattern"
          }
        },
        "name": "pattern",
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
            "en-US": "prefix",
            "zh-CN": "prefix"
          }
        },
        "name": "prefix",
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
            "en-US": "accept",
            "zh-CN": "accept"
          }
        },
        "name": "accept",
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
            "en-US": "autoComplete",
            "zh-CN": "autoComplete"
          }
        },
        "name": "autoComplete",
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
            "en-US": "capture",
            "zh-CN": "capture"
          }
        },
        "name": "capture",
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
            "en-US": "max",
            "zh-CN": "max"
          }
        },
        "name": "max",
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
            "en-US": "min",
            "zh-CN": "min"
          }
        },
        "name": "min",
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
            "en-US": "minLength",
            "zh-CN": "minLength"
          }
        },
        "name": "minLength",
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
            "en-US": "multiple",
            "zh-CN": "multiple"
          }
        },
        "name": "multiple",
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
            "en-US": "readOnly",
            "zh-CN": "readOnly"
          }
        },
        "name": "readOnly",
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
            "en-US": "onPressEnter",
            "zh-CN": "onPressEnter"
          }
        },
        "name": "onPressEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showCount",
            "zh-CN": "It's bette"
          },
          "tip": "showCount | It's better to use `count.show` instead"
        },
        "name": "showCount",
        "description": "It's better to use `count.show` instead",
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
                            "en-US": "formatter",
                            "zh-CN": "formatter"
                          }
                        },
                        "name": "formatter",
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
            "en-US": "htmlSize",
            "zh-CN": "htmlSize"
          }
        },
        "name": "htmlSize",
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
            "en-US": "suffix",
            "zh-CN": "suffix"
          }
        },
        "name": "suffix",
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
            "en-US": "addonBefore",
            "zh-CN": "addonBefore"
          }
        },
        "name": "addonBefore",
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
            "en-US": "addonAfter",
            "zh-CN": "addonAfter"
          }
        },
        "name": "addonAfter",
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
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Input",
    "screenshot": "",
    "schema": {
      "componentName": "Input",
      "props": {}
    }
  }
];

export default {
  ...InputMeta,
  snippets
};
