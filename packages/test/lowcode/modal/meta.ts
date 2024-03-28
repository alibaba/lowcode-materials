
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ModalMeta: IPublicTypeComponentMetadata = {
  "componentName": "Modal",
  "title": "Modal",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Modal",
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
            "en-US": "open",
            "zh-CN": "Whether th"
          },
          "tip": "open | Whether the modal dialog is visible or not"
        },
        "name": "open",
        "description": "Whether the modal dialog is visible or not",
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
            "zh-CN": "Whether to"
          },
          "tip": "confirmLoading | Whether to apply loading visual effect for OK button or not"
        },
        "name": "confirmLoading",
        "description": "Whether to apply loading visual effect for OK button or not",
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
            "zh-CN": "The modal "
          },
          "tip": "title | The modal dialog's title"
        },
        "name": "title",
        "description": "The modal dialog's title",
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
            "zh-CN": "Whether a "
          },
          "tip": "closable | Whether a close (x) button is visible on top right of the modal dialog or not. Recommend to use closeIcon instead."
        },
        "name": "closable",
        "description": "Whether a close (x) button is visible on top right of the modal dialog or not. Recommend to use closeIcon instead.",
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
            "zh-CN": "Specify a "
          },
          "tip": "onOk | Specify a function that will be called when a user clicks the OK button"
        },
        "name": "onOk",
        "description": "Specify a function that will be called when a user clicks the OK button",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCancel",
            "zh-CN": "Specify a "
          },
          "tip": "onCancel | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button"
        },
        "name": "onCancel",
        "description": "Specify a function that will be called when a user clicks mask, close button on top right or Cancel button",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "afterOpenChange",
            "zh-CN": "Callback w"
          },
          "tip": "afterOpenChange | Callback when the animation ends when Modal is turned on and off"
        },
        "name": "afterOpenChange",
        "description": "Callback when the animation ends when Modal is turned on and off",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "centered",
            "zh-CN": "Centered M"
          },
          "tip": "centered | Centered Modal"
        },
        "name": "centered",
        "description": "Centered Modal",
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
            "zh-CN": "Width of t"
          },
          "tip": "width | Width of the modal dialog"
        },
        "name": "width",
        "description": "Width of the modal dialog",
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
            "zh-CN": "Footer con"
          },
          "tip": "footer | Footer content"
        },
        "name": "footer",
        "description": "Footer content",
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
            "zh-CN": "Text of th"
          },
          "tip": "okText | Text of the OK button"
        },
        "name": "okText",
        "description": "Text of the OK button",
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
            "zh-CN": "Button `ty"
          },
          "tip": "okType | Button `type` of the OK button"
        },
        "name": "okType",
        "description": "Button `type` of the OK button",
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
                "label": "link",
                "value": "link"
              },
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "danger",
                "value": "danger"
              },
              {
                "label": "dashed",
                "value": "dashed"
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
                "label": "link",
                "value": "link"
              },
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "danger",
                "value": "danger"
              },
              {
                "label": "dashed",
                "value": "dashed"
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
            "zh-CN": "Text of th"
          },
          "tip": "cancelText | Text of the Cancel button"
        },
        "name": "cancelText",
        "description": "Text of the Cancel button",
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
            "zh-CN": "Whether to"
          },
          "tip": "maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked"
        },
        "name": "maskClosable",
        "description": "Whether to close the modal dialog when the mask (area outside the modal) is clicked",
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
            "zh-CN": "Force rend"
          },
          "tip": "forceRender | Force render Modal"
        },
        "name": "forceRender",
        "description": "Force render Modal",
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
            "zh-CN": "@deprecate"
          },
          "tip": "bodyStyle | @deprecated Please use `styles.body` instead"
        },
        "name": "bodyStyle",
        "description": "@deprecated Please use `styles.body` instead",
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
            "zh-CN": "@deprecate"
          },
          "tip": "maskStyle | @deprecated Please use `styles.mask` instead"
        },
        "name": "maskStyle",
        "description": "@deprecated Please use `styles.mask` instead",
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
            "zh-CN": "@deprecate"
          },
          "tip": "visible | @deprecated Please use `open` instead."
        },
        "name": "visible",
        "description": "@deprecated Please use `open` instead.",
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
      }
    ],
    "supports": {
      "events": [
        {
          "name": "afterClose"
        }
      ],
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Modal",
    "screenshot": "",
    "schema": {
      "componentName": "Modal",
      "props": {}
    }
  }
];

export default {
  ...ModalMeta,
  snippets
};
