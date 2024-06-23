
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtInputMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtInput",
  "title": "AtInput",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtInput",
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
            "en-US": "name",
            "zh-CN": "输入框的唯一标识，有"
          },
          "tip": "name | 输入框的唯一标识，有传入点击 title 会聚焦输入框"
        },
        "name": "name",
        "description": "输入框的唯一标识，有传入点击 title 会聚焦输入框",
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
            "en-US": "title",
            "zh-CN": "输入框左侧标题，若传"
          },
          "tip": "title | 输入框左侧标题，若传入为空，则不显示标题"
        },
        "name": "title",
        "description": "输入框左侧标题，若传入为空，则不显示标题",
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
            "en-US": "type",
            "zh-CN": "输入框类型"
          },
          "tip": "type | 输入框类型"
        },
        "name": "type",
        "description": "输入框类型",
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
                      "label": "text",
                      "value": "text"
                    },
                    {
                      "label": "digit",
                      "value": "digit"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "phone",
                      "value": "phone"
                    },
                    {
                      "label": "idcard",
                      "value": "idcard"
                    }
                  ],
                  "options": [
                    {
                      "label": "number",
                      "value": "number"
                    },
                    {
                      "label": "text",
                      "value": "text"
                    },
                    {
                      "label": "digit",
                      "value": "digit"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "phone",
                      "value": "phone"
                    },
                    {
                      "label": "idcard",
                      "value": "idcard"
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
            "en-US": "error",
            "zh-CN": "是否出现错误"
          },
          "tip": "error | 是否出现错误"
        },
        "name": "error",
        "description": "是否出现错误",
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
            "en-US": "clear",
            "zh-CN": "是否显示清除按钮，需"
          },
          "tip": "clear | 是否显示清除按钮，需要传入 onChange 事件来改变 value"
        },
        "name": "clear",
        "description": "是否显示清除按钮，需要传入 onChange 事件来改变 value",
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
            "en-US": "border",
            "zh-CN": "是否显示下划线边框"
          },
          "tip": "border | 是否显示下划线边框"
        },
        "name": "border",
        "description": "是否显示下划线边框",
        "defaultValue": "true",
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
            "en-US": "disabled",
            "zh-CN": "是否禁止输入，禁止点"
          },
          "tip": "disabled | 是否禁止输入，禁止点击按钮"
        },
        "name": "disabled",
        "description": "是否禁止输入，禁止点击按钮",
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
            "en-US": "placeholder",
            "zh-CN": "占位符"
          },
          "tip": "placeholder | 占位符"
        },
        "name": "placeholder",
        "description": "占位符",
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
            "en-US": "placeholderStyle",
            "zh-CN": "指定 placeho"
          },
          "tip": "placeholderStyle | 指定 placeholder 的样式，只在小程序有效"
        },
        "name": "placeholderStyle",
        "description": "指定 placeholder 的样式，只在小程序有效",
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
            "en-US": "placeholderClass",
            "zh-CN": "指定 placeho"
          },
          "tip": "placeholderClass | 指定 placeholder 的样式类，只在小程序有效"
        },
        "name": "placeholderClass",
        "description": "指定 placeholder 的样式类，只在小程序有效",
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
            "en-US": "editable",
            "zh-CN": "是否可编辑"
          },
          "tip": "editable | 是否可编辑"
        },
        "name": "editable",
        "description": "是否可编辑",
        "defaultValue": "true",
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
            "en-US": "adjustPosition",
            "zh-CN": "键盘弹起时，是否自动"
          },
          "tip": "adjustPosition | 键盘弹起时，是否自动上推页面"
        },
        "name": "adjustPosition",
        "description": "键盘弹起时，是否自动上推页面",
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
            "en-US": "autoFocus",
            "zh-CN": "是否自动聚焦"
          },
          "tip": "autoFocus | 是否自动聚焦"
        },
        "name": "autoFocus",
        "description": "是否自动聚焦",
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
            "en-US": "focus",
            "zh-CN": "是否聚焦"
          },
          "tip": "focus | 是否聚焦"
        },
        "name": "focus",
        "description": "是否聚焦",
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
            "en-US": "required",
            "zh-CN": "是否必填"
          },
          "tip": "required | 是否必填"
        },
        "name": "required",
        "description": "是否必填",
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
            "en-US": "maxLength",
            "zh-CN": "最大输入长度"
          },
          "tip": "maxLength | 最大输入长度"
        },
        "name": "maxLength",
        "description": "最大输入长度",
        "defaultValue": "140",
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
            "en-US": "onBlur",
            "zh-CN": "输入框失去焦点时触发"
          },
          "tip": "onBlur | 输入框失去焦点时触发的事件，v2.0.3 版本可以获取 event 参数"
        },
        "name": "onBlur",
        "description": "输入框失去焦点时触发的事件，v2.0.3 版本可以获取 event 参数",
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
            "en-US": "onFocus",
            "zh-CN": "输入框被选中时触发的"
          },
          "tip": "onFocus | 输入框被选中时触发的事件，v2.0.3 版本可以获取 event 参数"
        },
        "name": "onFocus",
        "description": "输入框被选中时触发的事件，v2.0.3 版本可以获取 event 参数",
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
            "en-US": "onChange",
            "zh-CN": "输入框值改变时触发的"
          },
          "tip": "onChange | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。"
        },
        "name": "onChange",
        "description": "输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onConfirm",
            "zh-CN": "点击完成按钮时触发，"
          },
          "tip": "onConfirm | 点击完成按钮时触发，v2.0.3 版本可以获取 event 参数"
        },
        "name": "onConfirm",
        "description": "点击完成按钮时触发，v2.0.3 版本可以获取 event 参数",
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
            "en-US": "onClick",
            "zh-CN": "当 editable"
          },
          "tip": "onClick | 当 editable 为 false 时，点击组件触发的事件，v2.3.3 版本可以获取 event 参数"
        },
        "name": "onClick",
        "description": "当 editable 为 false 时，点击组件触发的事件，v2.3.3 版本可以获取 event 参数",
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
            "en-US": "onKeyboardHeightChange",
            "zh-CN": "键盘高度发生变化的时"
          },
          "tip": "onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件"
        },
        "name": "onKeyboardHeightChange",
        "description": "键盘高度发生变化的时候触发此事件",
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
            "en-US": "onErrorClick",
            "zh-CN": "点击错误按钮触发的事"
          },
          "tip": "onErrorClick | 点击错误按钮触发的事件，v2.3.3 版本可以获取 event 参数"
        },
        "name": "onErrorClick",
        "description": "点击错误按钮触发的事件，v2.3.3 版本可以获取 event 参数",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "输入框的初始内容"
          },
          "tip": "value | 输入框的初始内容"
        },
        "name": "value",
        "description": "输入框的初始内容",
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
            "en-US": "password",
            "zh-CN": "是否是密码类型"
          },
          "tip": "password | 是否是密码类型"
        },
        "name": "password",
        "description": "是否是密码类型",
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
            "en-US": "maxlength",
            "zh-CN": "最大输入长度，设置为"
          },
          "tip": "maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度"
        },
        "name": "maxlength",
        "description": "最大输入长度，设置为 -1 的时候不限制最大长度",
        "defaultValue": "140",
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
            "en-US": "cursorSpacing",
            "zh-CN": "指定光标与键盘的距离"
          },
          "tip": "cursorSpacing | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
        },
        "name": "cursorSpacing",
        "description": "指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离",
        "defaultValue": "0",
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
            "en-US": "confirmType",
            "zh-CN": "设置键盘右下角按钮的"
          },
          "tip": "confirmType | 设置键盘右下角按钮的文字"
        },
        "name": "confirmType",
        "description": "设置键盘右下角按钮的文字",
        "defaultValue": "done",
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
                      "label": "send",
                      "value": "send"
                    },
                    {
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "next",
                      "value": "next"
                    },
                    {
                      "label": "go",
                      "value": "go"
                    },
                    {
                      "label": "done",
                      "value": "done"
                    }
                  ],
                  "options": [
                    {
                      "label": "send",
                      "value": "send"
                    },
                    {
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "next",
                      "value": "next"
                    },
                    {
                      "label": "go",
                      "value": "go"
                    },
                    {
                      "label": "done",
                      "value": "done"
                    }
                  ]
                },
                "initialValue": "send"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "confirmHold",
            "zh-CN": "点击键盘右下角按钮时"
          },
          "tip": "confirmHold | 点击键盘右下角按钮时是否保持键盘不收起"
        },
        "name": "confirmHold",
        "description": "点击键盘右下角按钮时是否保持键盘不收起",
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
            "en-US": "cursor",
            "zh-CN": "指定focus时的光"
          },
          "tip": "cursor | 指定focus时的光标位置"
        },
        "name": "cursor",
        "description": "指定focus时的光标位置",
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
            "en-US": "selectionStart",
            "zh-CN": "光标起始位置，自动聚"
          },
          "tip": "selectionStart | 光标起始位置，自动聚集时有效，需与selection-end搭配使用"
        },
        "name": "selectionStart",
        "description": "光标起始位置，自动聚集时有效，需与selection-end搭配使用",
        "defaultValue": "-1",
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
            "en-US": "selectionEnd",
            "zh-CN": "光标结束位置，自动聚"
          },
          "tip": "selectionEnd | 光标结束位置，自动聚集时有效，需与selection-start搭配使用"
        },
        "name": "selectionEnd",
        "description": "光标结束位置，自动聚集时有效，需与selection-start搭配使用",
        "defaultValue": "-1",
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
            "en-US": "holdKeyboard",
            "zh-CN": "focus 时，点击"
          },
          "tip": "holdKeyboard | focus 时，点击页面的时候不收起键盘"
        },
        "name": "holdKeyboard",
        "description": "focus 时，点击页面的时候不收起键盘",
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
            "en-US": "alwaysEmbed",
            "zh-CN": "强制 input 处"
          },
          "tip": "alwaysEmbed | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)"
        },
        "name": "alwaysEmbed",
        "description": "强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)",
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
            "en-US": "randomNumber",
            "zh-CN": "当 type 为 n"
          },
          "tip": "randomNumber | 当 type 为 number, digit, idcard 数字键盘是否随机排列"
        },
        "name": "randomNumber",
        "description": "当 type 为 number, digit, idcard 数字键盘是否随机排列",
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
            "en-US": "controlled",
            "zh-CN": "是否为受控组件"
          },
          "tip": "controlled | 是否为受控组件"
        },
        "name": "controlled",
        "description": "是否为受控组件",
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
            "en-US": "onInput",
            "zh-CN": "当键盘输入时，触发i"
          },
          "tip": "onInput | 当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
        },
        "name": "onInput",
        "description": "当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。",
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
            "en-US": "id",
            "zh-CN": "组件的唯一标示, 保"
          },
          "tip": "id | 组件的唯一标示, 保持整个页面唯一"
        },
        "name": "id",
        "description": "组件的唯一标示, 保持整个页面唯一",
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
            "en-US": "key",
            "zh-CN": "如果列表中项目的位置"
          },
          "tip": "key | 如果列表中项目的位置会动态改变或者有新的项目添加到列表中，"
        },
        "name": "key",
        "description": "如果列表中项目的位置会动态改变或者有新的项目添加到列表中，",
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
            "en-US": "hidden",
            "zh-CN": "组件是否显示, 所有"
          },
          "tip": "hidden | 组件是否显示, 所有组件默认显示"
        },
        "name": "hidden",
        "description": "组件是否显示, 所有组件默认显示",
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
            "en-US": "animation",
            "zh-CN": "动画属性"
          },
          "tip": "animation | 动画属性"
        },
        "name": "animation",
        "description": "动画属性",
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
                            "en-US": "actions",
                            "zh-CN": "actions"
                          }
                        },
                        "name": "actions",
                        "setter": {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
                            }
                          },
                          "isRequired": true,
                          "initialValue": []
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
            "en-US": "ref",
            "zh-CN": "引用"
          },
          "tip": "ref | 引用"
        },
        "name": "ref",
        "description": "引用",
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
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
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
            "en-US": "dangerouslySetInnerHTML",
            "zh-CN": "渲染 HTML"
          },
          "tip": "dangerouslySetInnerHTML | 渲染 HTML"
        },
        "name": "dangerouslySetInnerHTML",
        "description": "渲染 HTML",
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
                            "en-US": "__html",
                            "zh-CN": "__html"
                          }
                        },
                        "name": "__html",
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
            "en-US": "onTouchStart",
            "zh-CN": "手指触摸动作开始"
          },
          "tip": "onTouchStart | 手指触摸动作开始"
        },
        "name": "onTouchStart",
        "description": "手指触摸动作开始",
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
            "en-US": "onTouchMove",
            "zh-CN": "手指触摸后移动"
          },
          "tip": "onTouchMove | 手指触摸后移动"
        },
        "name": "onTouchMove",
        "description": "手指触摸后移动",
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
            "en-US": "onTouchCancel",
            "zh-CN": "手指触摸动作被打断，"
          },
          "tip": "onTouchCancel | 手指触摸动作被打断，如来电提醒，弹窗"
        },
        "name": "onTouchCancel",
        "description": "手指触摸动作被打断，如来电提醒，弹窗",
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
            "en-US": "onTouchEnd",
            "zh-CN": "手指触摸动作结束"
          },
          "tip": "onTouchEnd | 手指触摸动作结束"
        },
        "name": "onTouchEnd",
        "description": "手指触摸动作结束",
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
            "en-US": "onLongPress",
            "zh-CN": "手指触摸后，超过35"
          },
          "tip": "onLongPress | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发"
        },
        "name": "onLongPress",
        "description": "手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发",
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
            "en-US": "onLongClick",
            "zh-CN": "手指触摸后，超过35"
          },
          "tip": "onLongClick | 手指触摸后，超过350ms再离开（推荐使用 longpress 事件代替）"
        },
        "name": "onLongClick",
        "description": "手指触摸后，超过350ms再离开（推荐使用 longpress 事件代替）",
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
            "en-US": "onTransitionEnd",
            "zh-CN": "会在 WXSS tr"
          },
          "tip": "onTransitionEnd | 会在 WXSS transition 或 Taro.createAnimation 动画结束后触发"
        },
        "name": "onTransitionEnd",
        "description": "会在 WXSS transition 或 Taro.createAnimation 动画结束后触发",
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
            "en-US": "onAnimationStart",
            "zh-CN": "会在一个 WXSS "
          },
          "tip": "onAnimationStart | 会在一个 WXSS animation 动画开始时触发"
        },
        "name": "onAnimationStart",
        "description": "会在一个 WXSS animation 动画开始时触发",
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
            "en-US": "onAnimationIteration",
            "zh-CN": "会在一个 WXSS "
          },
          "tip": "onAnimationIteration | 会在一个 WXSS animation 一次迭代结束时触发"
        },
        "name": "onAnimationIteration",
        "description": "会在一个 WXSS animation 一次迭代结束时触发",
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
            "en-US": "onAnimationEnd",
            "zh-CN": "会在一个 WXSS "
          },
          "tip": "onAnimationEnd | 会在一个 WXSS animation 动画完成时触发"
        },
        "name": "onAnimationEnd",
        "description": "会在一个 WXSS animation 动画完成时触发",
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
            "en-US": "onTouchForceChange",
            "zh-CN": "在支持 3D Tou"
          },
          "tip": "onTouchForceChange | 在支持 3D Touch 的 iPhone 设备，重按时会触发"
        },
        "name": "onTouchForceChange",
        "description": "在支持 3D Touch 的 iPhone 设备，重按时会触发",
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
                "componentName": "FunctionSetter"
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
    "title": "AtInput",
    "screenshot": "",
    "schema": {
      "componentName": "AtInput",
      "props": {
        "error": "false",
        "clear": "false",
        "border": "true",
        "disabled": "false",
        "editable": "true",
        "adjustPosition": "false",
        "autoFocus": "false",
        "focus": "false",
        "required": "false",
        "maxLength": "140",
        "maxlength": "140",
        "cursorSpacing": "0",
        "confirmType": "done",
        "confirmHold": "false",
        "selectionStart": "-1",
        "selectionEnd": "-1",
        "holdKeyboard": "false",
        "alwaysEmbed": "false",
        "randomNumber": "false",
        "controlled": "false"
      }
    }
  }
];

export default {
  ...AtInputMeta,
  snippets
};
