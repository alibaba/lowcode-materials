
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProHelpModalMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProHelpModal",
  "title": "ProHelpModal",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "ProHelpModal",
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
            "en-US": "modalProps",
            "zh-CN": "Ant Design"
          },
          "tip": "modalProps | Ant Design Modal 组件的 props，可以传递一些选项，如位置、大小、关闭方式等等。"
        },
        "name": "modalProps",
        "description": "Ant Design Modal 组件的 props，可以传递一些选项，如位置、大小、关闭方式等等。",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                      "en-US": "confirmLoading",
                      "zh-CN": "confirmLoading"
                    }
                  },
                  "name": "confirmLoading",
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
                      "en-US": "title",
                      "zh-CN": "title"
                    }
                  },
                  "name": "title",
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
                      "en-US": "closable",
                      "zh-CN": "closable"
                    }
                  },
                  "name": "closable",
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
                      "en-US": "onOk",
                      "zh-CN": "onOk"
                    }
                  },
                  "name": "onOk",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onCancel",
                      "zh-CN": "onCancel"
                    }
                  },
                  "name": "onCancel",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "afterClose",
                      "zh-CN": "afterClose"
                    }
                  },
                  "name": "afterClose",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "afterOpenChange",
                      "zh-CN": "afterOpenChange"
                    }
                  },
                  "name": "afterOpenChange",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "centered",
                      "zh-CN": "centered"
                    }
                  },
                  "name": "centered",
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
                      "en-US": "footer",
                      "zh-CN": "footer"
                    }
                  },
                  "name": "footer",
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
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "okText",
                      "zh-CN": "okText"
                    }
                  },
                  "name": "okText",
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
                      "en-US": "okType",
                      "zh-CN": "okType"
                    }
                  },
                  "name": "okType",
                  "setter": {
                    "componentName": "SelectSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "primary",
                          "value": "primary"
                        },
                        {
                          "label": "text",
                          "value": "text"
                        },
                        {
                          "label": "default",
                          "value": "default"
                        },
                        {
                          "label": "link",
                          "value": "link"
                        },
                        {
                          "label": "dashed",
                          "value": "dashed"
                        },
                        {
                          "label": "danger",
                          "value": "danger"
                        }
                      ],
                      "options": [
                        {
                          "label": "primary",
                          "value": "primary"
                        },
                        {
                          "label": "text",
                          "value": "text"
                        },
                        {
                          "label": "default",
                          "value": "default"
                        },
                        {
                          "label": "link",
                          "value": "link"
                        },
                        {
                          "label": "dashed",
                          "value": "dashed"
                        },
                        {
                          "label": "danger",
                          "value": "danger"
                        }
                      ]
                    },
                    "initialValue": "primary"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "cancelText",
                      "zh-CN": "cancelText"
                    }
                  },
                  "name": "cancelText",
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
                      "en-US": "maskClosable",
                      "zh-CN": "maskClosable"
                    }
                  },
                  "name": "maskClosable",
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
                      "en-US": "forceRender",
                      "zh-CN": "forceRender"
                    }
                  },
                  "name": "forceRender",
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
                      "en-US": "okButtonProps",
                      "zh-CN": "okButtonProps"
                    }
                  },
                  "name": "okButtonProps",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "href",
                                "zh-CN": "href"
                              }
                            },
                            "name": "href",
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
                                "en-US": "htmlType",
                                "zh-CN": "htmlType"
                              }
                            },
                            "name": "htmlType",
                            "setter": {
                              "componentName": "RadioGroupSetter",
                              "props": {
                                "dataSource": [
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
                                  }
                                ],
                                "options": [
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
                                  }
                                ]
                              },
                              "initialValue": "submit"
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
                      "en-US": "cancelButtonProps",
                      "zh-CN": "cancelButtonProps"
                    }
                  },
                  "name": "cancelButtonProps",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "href",
                                "zh-CN": "href"
                              }
                            },
                            "name": "href",
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
                                "en-US": "htmlType",
                                "zh-CN": "htmlType"
                              }
                            },
                            "name": "htmlType",
                            "setter": {
                              "componentName": "RadioGroupSetter",
                              "props": {
                                "dataSource": [
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
                                  }
                                ],
                                "options": [
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
                                  }
                                ]
                              },
                              "initialValue": "submit"
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
                      "en-US": "destroyOnClose",
                      "zh-CN": "destroyOnClose"
                    }
                  },
                  "name": "destroyOnClose",
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
                      "en-US": "wrapClassName",
                      "zh-CN": "wrapClassName"
                    }
                  },
                  "name": "wrapClassName",
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
                      "en-US": "maskTransitionName",
                      "zh-CN": "maskTransitionName"
                    }
                  },
                  "name": "maskTransitionName",
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
                      "en-US": "transitionName",
                      "zh-CN": "transitionName"
                    }
                  },
                  "name": "transitionName",
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
                      "en-US": "getContainer",
                      "zh-CN": "getContainer"
                    }
                  },
                  "name": "getContainer",
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
                      "en-US": "zIndex",
                      "zh-CN": "zIndex"
                    }
                  },
                  "name": "zIndex",
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
                      "en-US": "bodyStyle",
                      "zh-CN": "bodyStyle"
                    }
                  },
                  "name": "bodyStyle",
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
                      "en-US": "maskStyle",
                      "zh-CN": "maskStyle"
                    }
                  },
                  "name": "maskStyle",
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
                      "en-US": "mask",
                      "zh-CN": "mask"
                    }
                  },
                  "name": "mask",
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
                      "en-US": "keyboard",
                      "zh-CN": "keyboard"
                    }
                  },
                  "name": "keyboard",
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
                      "en-US": "wrapProps",
                      "zh-CN": "wrapProps"
                    }
                  },
                  "name": "wrapProps",
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
                      "en-US": "closeIcon",
                      "zh-CN": "closeIcon"
                    }
                  },
                  "name": "closeIcon",
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
                      "en-US": "modalRender",
                      "zh-CN": "modalRender"
                    }
                  },
                  "name": "modalRender",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "focusTriggerAfterClose",
                      "zh-CN": "focusTriggerAfterClose"
                    }
                  },
                  "name": "focusTriggerAfterClose",
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
                      "en-US": "children",
                      "zh-CN": "children"
                    }
                  },
                  "name": "children",
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
                      "en-US": "mousePosition",
                      "zh-CN": "mousePosition"
                    }
                  },
                  "name": "mousePosition",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "x",
                                "zh-CN": "x"
                              }
                            },
                            "name": "x",
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
                                "en-US": "y",
                                "zh-CN": "y"
                              }
                            },
                            "name": "y",
                            "setter": {
                              "componentName": "NumberSetter",
                              "isRequired": true,
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
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "visible",
                      "zh-CN": "visible"
                    }
                  },
                  "name": "visible",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bordered",
            "zh-CN": "是否显示边框"
          },
          "tip": "bordered | 是否显示边框"
        },
        "name": "bordered",
        "description": "是否显示边框",
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
            "en-US": "height",
            "zh-CN": "帮助面板的高度，可以"
          },
          "tip": "height | 帮助面板的高度，可以是数字或字符串类型。"
        },
        "name": "height",
        "description": "帮助面板的高度，可以是数字或字符串类型。",
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
            "en-US": "title",
            "zh-CN": "帮助面板的标题"
          },
          "tip": "title | 帮助面板的标题"
        },
        "name": "title",
        "description": "帮助面板的标题",
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
            "en-US": "defaultSelectedKey",
            "zh-CN": "帮助面板首次打开时的"
          },
          "tip": "defaultSelectedKey | 帮助面板首次打开时的默认选中文档的键名"
        },
        "name": "defaultSelectedKey",
        "description": "帮助面板首次打开时的默认选中文档的键名",
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
            "en-US": "selectedKey",
            "zh-CN": "当前选中的帮助文档的"
          },
          "tip": "selectedKey | 当前选中的帮助文档的键名。如果提供了这个 prop，那么该组件将是一个受控组件，其状态将由父组件管理。如果未提供，那么该组件将是一个非受控组件，其状态将在组件内部管理。"
        },
        "name": "selectedKey",
        "description": "当前选中的帮助文档的键名。如果提供了这个 prop，那么该组件将是一个受控组件，其状态将由父组件管理。如果未提供，那么该组件将是一个非受控组件，其状态将在组件内部管理。",
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
            "en-US": "onSelectedKeyChange",
            "zh-CN": "当选中的文档键名发生"
          },
          "tip": "onSelectedKeyChange | 当选中的文档键名发生变化时调用的回调函数。新的键名将作为参数传递给该函数。"
        },
        "name": "onSelectedKeyChange",
        "description": "当选中的文档键名发生变化时调用的回调函数。新的键名将作为参数传递给该函数。",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showLeftPanel",
            "zh-CN": "控制左侧面板是否能够"
          },
          "tip": "showLeftPanel | 控制左侧面板是否能够打开"
        },
        "name": "showLeftPanel",
        "description": "控制左侧面板是否能够打开",
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
            "en-US": "onShowLeftPanelChange",
            "zh-CN": "当左侧面板打开状态发"
          },
          "tip": "onShowLeftPanelChange | 当左侧面板打开状态发生变化时调用的回调函数。新的打开状态将作为参数传递给该函数。"
        },
        "name": "onShowLeftPanelChange",
        "description": "当左侧面板打开状态发生变化时调用的回调函数。新的打开状态将作为参数传递给该函数。",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "footer",
            "zh-CN": "帮助面板的页脚"
          },
          "tip": "footer | 帮助面板的页脚"
        },
        "name": "footer",
        "description": "帮助面板的页脚",
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
            "en-US": "infiniteScrollFull",
            "zh-CN": "在一页内加载所有的 "
          },
          "tip": "infiniteScrollFull | 在一页内加载所有的 children 内容"
        },
        "name": "infiniteScrollFull",
        "description": "在一页内加载所有的 children 内容",
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
            "en-US": "extraRender",
            "zh-CN": "自定义渲染 extr"
          },
          "tip": "extraRender | 自定义渲染 extra 部分的内容"
        },
        "name": "extraRender",
        "description": "自定义渲染 extra 部分的内容",
        "setter": {
          "componentName": "FunctionSetter"
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
    "title": "ProHelpModal",
    "screenshot": "",
    "schema": {
      "componentName": "ProHelpModal",
      "props": {}
    }
  }
];

export default {
  ...ProHelpModalMeta,
  snippets
};
