
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const LoginFormPageMeta: IPublicTypeComponentMetadata = {
  "componentName": "LoginFormPage",
  "title": "LoginFormPage",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "LoginFormPage",
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
            "en-US": "message",
            "zh-CN": "@name form"
          },
          "tip": "message | @name form 顶部的一个提示配置，可以配置一些错误的提示信息"
        },
        "name": "message",
        "description": "@name form 顶部的一个提示配置，可以配置一些错误的提示信息",
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
            "en-US": "title",
            "zh-CN": "@name 标题，可"
          },
          "tip": "title | @name 标题，可以配置为空"
        },
        "name": "title",
        "description": "@name 标题，可以配置为空",
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
            "en-US": "subTitle",
            "zh-CN": "@name 二级标题"
          },
          "tip": "subTitle | @name 二级标题，可以配置为空"
        },
        "name": "subTitle",
        "description": "@name 二级标题，可以配置为空",
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
            "en-US": "actions",
            "zh-CN": "@name 自定义额"
          },
          "tip": "actions | @name 自定义额外的登录功能"
        },
        "name": "actions",
        "description": "@name 自定义额外的登录功能",
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
            "en-US": "logo",
            "zh-CN": "@name logo"
          },
          "tip": "logo | @name logo 的配置，支持node 和 string"
        },
        "name": "logo",
        "description": "@name logo 的配置，支持node 和 string",
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
            "en-US": "activityConfig",
            "zh-CN": "@name 活动信息"
          },
          "tip": "activityConfig | @name 活动信息的配置，一个页面应该只有一个。"
        },
        "name": "activityConfig",
        "description": "@name 活动信息的配置，一个页面应该只有一个。",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                      "en-US": "subTitle",
                      "zh-CN": "subTitle"
                    }
                  },
                  "name": "subTitle",
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
                      "en-US": "action",
                      "zh-CN": "action"
                    }
                  },
                  "name": "action",
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
            "en-US": "backgroundImageUrl",
            "zh-CN": "@name 登录页面"
          },
          "tip": "backgroundImageUrl | @name 登录页面的背景图片，可以用它来设置一个背景"
        },
        "name": "backgroundImageUrl",
        "description": "@name 登录页面的背景图片，可以用它来设置一个背景",
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
            "en-US": "backgroundVideoUrl",
            "zh-CN": "@name 登录页面"
          },
          "tip": "backgroundVideoUrl | @name 登录页面的背景视频，可以用它来设置一个背景，优先级高于 backgroundImageUrl"
        },
        "name": "backgroundVideoUrl",
        "description": "@name 登录页面的背景视频，可以用它来设置一个背景，优先级高于 backgroundImageUrl",
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
            "en-US": "containerStyle",
            "zh-CN": "containerStyle"
          }
        },
        "name": "containerStyle",
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
            "en-US": "mainStyle",
            "zh-CN": "mainStyle"
          }
        },
        "name": "mainStyle",
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
            "en-US": "otherStyle",
            "zh-CN": "otherStyle"
          }
        },
        "name": "otherStyle",
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
                "label": "large",
                "value": "large"
              },
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              }
            ],
            "options": [
              {
                "label": "large",
                "value": "large"
              },
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              }
            ]
          },
          "initialValue": "large"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "layout",
            "zh-CN": "layout"
          }
        },
        "name": "layout",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "inline",
                "value": "inline"
              }
            ],
            "options": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "inline",
                "value": "inline"
              }
            ]
          },
          "initialValue": "vertical"
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
            "en-US": "form",
            "zh-CN": "form"
          }
        },
        "name": "form",
        "setter": {
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
                      "en-US": "scrollToField",
                      "zh-CN": "scrollToField"
                    }
                  },
                  "name": "scrollToField",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "getFieldInstance",
                      "zh-CN": "getFieldInstance"
                    }
                  },
                  "name": "getFieldInstance",
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
            "en-US": "action",
            "zh-CN": "action"
          }
        },
        "name": "action",
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
            "en-US": "requiredMark",
            "zh-CN": "requiredMark"
          }
        },
        "name": "requiredMark",
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
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "optional",
                      "value": "optional"
                    }
                  ],
                  "options": [
                    {
                      "label": "optional",
                      "value": "optional"
                    }
                  ]
                },
                "initialValue": "optional"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "colon",
            "zh-CN": "colon"
          }
        },
        "name": "colon",
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
            "en-US": "labelAlign",
            "zh-CN": "labelAlign"
          }
        },
        "name": "labelAlign",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "left",
                "value": "left"
              }
            ],
            "options": [
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "left",
                "value": "left"
              }
            ]
          },
          "initialValue": "right"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "labelCol",
            "zh-CN": "labelCol"
          }
        },
        "name": "labelCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "flex",
                      "zh-CN": "flex"
                    }
                  },
                  "name": "flex",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
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
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ],
                            "options": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ]
                          },
                          "initialValue": "none"
                        }
                      ]
                    }
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
                      "en-US": "order",
                      "zh-CN": "order"
                    }
                  },
                  "name": "order",
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
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                      "en-US": "push",
                      "zh-CN": "push"
                    }
                  },
                  "name": "push",
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
                      "en-US": "pull",
                      "zh-CN": "pull"
                    }
                  },
                  "name": "pull",
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
                      "en-US": "xs",
                      "zh-CN": "xs"
                    }
                  },
                  "name": "xs",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "sm",
                      "zh-CN": "sm"
                    }
                  },
                  "name": "sm",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "md",
                      "zh-CN": "md"
                    }
                  },
                  "name": "md",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "lg",
                      "zh-CN": "lg"
                    }
                  },
                  "name": "lg",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xl",
                      "zh-CN": "xl"
                    }
                  },
                  "name": "xl",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xxl",
                      "zh-CN": "xxl"
                    }
                  },
                  "name": "xxl",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
            "en-US": "validateTrigger",
            "zh-CN": "validateTrigger"
          }
        },
        "name": "validateTrigger",
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
            "en-US": "preserve",
            "zh-CN": "preserve"
          }
        },
        "name": "preserve",
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
            "en-US": "wrapperCol",
            "zh-CN": "wrapperCol"
          }
        },
        "name": "wrapperCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "flex",
                      "zh-CN": "flex"
                    }
                  },
                  "name": "flex",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
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
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ],
                            "options": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ]
                          },
                          "initialValue": "none"
                        }
                      ]
                    }
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
                      "en-US": "order",
                      "zh-CN": "order"
                    }
                  },
                  "name": "order",
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
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                      "en-US": "push",
                      "zh-CN": "push"
                    }
                  },
                  "name": "push",
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
                      "en-US": "pull",
                      "zh-CN": "pull"
                    }
                  },
                  "name": "pull",
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
                      "en-US": "xs",
                      "zh-CN": "xs"
                    }
                  },
                  "name": "xs",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "sm",
                      "zh-CN": "sm"
                    }
                  },
                  "name": "sm",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "md",
                      "zh-CN": "md"
                    }
                  },
                  "name": "md",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "lg",
                      "zh-CN": "lg"
                    }
                  },
                  "name": "lg",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xl",
                      "zh-CN": "xl"
                    }
                  },
                  "name": "xl",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xxl",
                      "zh-CN": "xxl"
                    }
                  },
                  "name": "xxl",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
            "en-US": "target",
            "zh-CN": "target"
          }
        },
        "name": "target",
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
            "en-US": "acceptCharset",
            "zh-CN": "acceptCharset"
          }
        },
        "name": "acceptCharset",
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
            "en-US": "encType",
            "zh-CN": "encType"
          }
        },
        "name": "encType",
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
            "en-US": "method",
            "zh-CN": "method"
          }
        },
        "name": "method",
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
            "en-US": "noValidate",
            "zh-CN": "noValidate"
          }
        },
        "name": "noValidate",
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
            "en-US": "initialValues",
            "zh-CN": "initialValues"
          }
        },
        "name": "initialValues",
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
            "en-US": "component",
            "zh-CN": "component"
          }
        },
        "name": "component",
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
            "en-US": "fields",
            "zh-CN": "fields"
          }
        },
        "name": "fields",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "ObjectSetter",
              "props": {
                "config": {
                  "items": [
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
                        "componentName": "MixedSetter",
                        "isRequired": true,
                        "props": {}
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "validateMessages",
            "zh-CN": "validateMessages"
          }
        },
        "name": "validateMessages",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "default",
                      "zh-CN": "default"
                    }
                  },
                  "name": "default",
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
                      "en-US": "required",
                      "zh-CN": "required"
                    }
                  },
                  "name": "required",
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
                      "en-US": "enum",
                      "zh-CN": "enum"
                    }
                  },
                  "name": "enum",
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
                      "en-US": "whitespace",
                      "zh-CN": "whitespace"
                    }
                  },
                  "name": "whitespace",
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
                      "en-US": "date",
                      "zh-CN": "date"
                    }
                  },
                  "name": "date",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
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
                              "componentName": "MixedSetter",
                              "props": {
                                "setters": [
                                  {
                                    "componentName": "StringSetter",
                                    "isRequired": false,
                                    "initialValue": ""
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
                                "en-US": "parse",
                                "zh-CN": "parse"
                              }
                            },
                            "name": "parse",
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
                                "en-US": "invalid",
                                "zh-CN": "invalid"
                              }
                            },
                            "name": "invalid",
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
                                    "componentName": "FunctionSetter",
                                    "isRequired": false
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
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "types",
                      "zh-CN": "types"
                    }
                  },
                  "name": "types",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "string",
                                "zh-CN": "string"
                              }
                            },
                            "name": "string",
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
                                "en-US": "method",
                                "zh-CN": "method"
                              }
                            },
                            "name": "method",
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
                                "en-US": "array",
                                "zh-CN": "array"
                              }
                            },
                            "name": "array",
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
                                "en-US": "object",
                                "zh-CN": "object"
                              }
                            },
                            "name": "object",
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
                                "en-US": "number",
                                "zh-CN": "number"
                              }
                            },
                            "name": "number",
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
                                "en-US": "date",
                                "zh-CN": "date"
                              }
                            },
                            "name": "date",
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
                                "en-US": "boolean",
                                "zh-CN": "boolean"
                              }
                            },
                            "name": "boolean",
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
                                "en-US": "integer",
                                "zh-CN": "integer"
                              }
                            },
                            "name": "integer",
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
                                "en-US": "float",
                                "zh-CN": "float"
                              }
                            },
                            "name": "float",
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
                                "en-US": "regexp",
                                "zh-CN": "regexp"
                              }
                            },
                            "name": "regexp",
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
                                "en-US": "email",
                                "zh-CN": "email"
                              }
                            },
                            "name": "email",
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
                                "en-US": "url",
                                "zh-CN": "url"
                              }
                            },
                            "name": "url",
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
                                "en-US": "hex",
                                "zh-CN": "hex"
                              }
                            },
                            "name": "hex",
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
                                    "componentName": "FunctionSetter",
                                    "isRequired": false
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
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "string",
                      "zh-CN": "string"
                    }
                  },
                  "name": "string",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "len",
                                "zh-CN": "len"
                              }
                            },
                            "name": "len",
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
                                "en-US": "range",
                                "zh-CN": "range"
                              }
                            },
                            "name": "range",
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
                                    "componentName": "FunctionSetter",
                                    "isRequired": false
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
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "number",
                      "zh-CN": "number"
                    }
                  },
                  "name": "number",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "len",
                                "zh-CN": "len"
                              }
                            },
                            "name": "len",
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
                                "en-US": "range",
                                "zh-CN": "range"
                              }
                            },
                            "name": "range",
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
                                    "componentName": "FunctionSetter",
                                    "isRequired": false
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
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "array",
                      "zh-CN": "array"
                    }
                  },
                  "name": "array",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "len",
                                "zh-CN": "len"
                              }
                            },
                            "name": "len",
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
                                "en-US": "range",
                                "zh-CN": "range"
                              }
                            },
                            "name": "range",
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
                                    "componentName": "FunctionSetter",
                                    "isRequired": false
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
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "mismatch",
                                "zh-CN": "mismatch"
                              }
                            },
                            "name": "mismatch",
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
                                    "componentName": "FunctionSetter",
                                    "isRequired": false
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
            "en-US": "onFieldsChange",
            "zh-CN": "onFieldsChange"
          }
        },
        "name": "onFieldsChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "labelWrap",
            "zh-CN": "labelWrap"
          }
        },
        "name": "labelWrap",
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
            "en-US": "feedbackIcons",
            "zh-CN": "feedbackIcons"
          }
        },
        "name": "feedbackIcons",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "scrollToFirstError",
            "zh-CN": "scrollToFirstError"
          }
        },
        "name": "scrollToFirstError",
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
                            "en-US": "behavior",
                            "zh-CN": "behavior"
                          }
                        },
                        "name": "behavior",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "auto",
                                "value": "auto"
                              },
                              {
                                "label": "smooth",
                                "value": "smooth"
                              }
                            ],
                            "options": [
                              {
                                "label": "auto",
                                "value": "auto"
                              },
                              {
                                "label": "smooth",
                                "value": "smooth"
                              }
                            ]
                          },
                          "initialValue": "auto"
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
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "T",
                            "zh-CN": "T"
                          }
                        },
                        "name": "T",
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
                            "en-US": "behavior",
                            "zh-CN": "behavior"
                          }
                        },
                        "name": "behavior",
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
            "en-US": "hideRequiredMark",
            "zh-CN": "@deprecate"
          },
          "tip": "hideRequiredMark | @deprecated Will warning in future branch. Pls use `requiredMark` instead."
        },
        "name": "hideRequiredMark",
        "description": "@deprecated Will warning in future branch. Pls use `requiredMark` instead.",
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
            "en-US": "submitter",
            "zh-CN": "@name 自定义提"
          },
          "tip": "submitter | @name 自定义提交的配置"
        },
        "name": "submitter",
        "description": "@name 自定义提交的配置",
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
                            "en-US": "onSubmit",
                            "zh-CN": "onSubmit"
                          }
                        },
                        "name": "onSubmit",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onReset",
                            "zh-CN": "onReset"
                          }
                        },
                        "name": "onReset",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "searchConfig",
                            "zh-CN": "searchConfig"
                          }
                        },
                        "name": "searchConfig",
                        "setter": {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "resetText",
                                      "zh-CN": "resetText"
                                    }
                                  },
                                  "name": "resetText",
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
                                      "en-US": "submitText",
                                      "zh-CN": "submitText"
                                    }
                                  },
                                  "name": "submitText",
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
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "submitButtonProps",
                            "zh-CN": "submitButtonProps"
                          }
                        },
                        "name": "submitButtonProps",
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
                            "en-US": "resetButtonProps",
                            "zh-CN": "resetButtonProps"
                          }
                        },
                        "name": "resetButtonProps",
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
                            "en-US": "render",
                            "zh-CN": "render"
                          }
                        },
                        "name": "render",
                        "setter": {
                          "componentName": "MixedSetter",
                          "props": {
                            "setters": [
                              {
                                "componentName": "FunctionSetter"
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
            "en-US": "loading",
            "zh-CN": "@name 表单按钮"
          },
          "tip": "loading | @name 表单按钮的 loading 状态"
        },
        "name": "loading",
        "description": "@name 表单按钮的 loading 状态",
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
            "en-US": "onLoadingChange",
            "zh-CN": "@name 这是一个"
          },
          "tip": "onLoadingChange | @name 这是一个可选的属性(onLoadingChange)，它接受一个名为loading的参数，类型为boolean，表示加载状态是否改变。"
        },
        "name": "onLoadingChange",
        "description": "@name 这是一个可选的属性(onLoadingChange)，它接受一个名为loading的参数，类型为boolean，表示加载状态是否改变。",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formRef",
            "zh-CN": "@name 获取 P"
          },
          "tip": "formRef | @name 获取 ProFormInstance"
        },
        "name": "formRef",
        "description": "@name 获取 ProFormInstance",
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
            "en-US": "syncToUrl",
            "zh-CN": "@name 同步结果"
          },
          "tip": "syncToUrl | @name 同步结果到 url 中"
        },
        "name": "syncToUrl",
        "description": "@name 同步结果到 url 中",
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
            "en-US": "syncToUrlAsImportant",
            "zh-CN": "@name 当 sy"
          },
          "tip": "syncToUrlAsImportant | @name 当 syncToUrl 为 true，在页面回显示时，以url上的参数为主，默认为false"
        },
        "name": "syncToUrlAsImportant",
        "description": "@name 当 syncToUrl 为 true，在页面回显示时，以url上的参数为主，默认为false",
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
            "en-US": "extraUrlParams",
            "zh-CN": "@name 额外的 "
          },
          "tip": "extraUrlParams | @name 额外的 url 参数 中"
        },
        "name": "extraUrlParams",
        "description": "@name 额外的 url 参数 中",
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
            "en-US": "syncToInitialValues",
            "zh-CN": "同步结果到 init"
          },
          "tip": "syncToInitialValues | 同步结果到 initialValues,默认为true如果为false，reset的时将会忽略从url上获取的数据"
        },
        "name": "syncToInitialValues",
        "description": "同步结果到 initialValues,默认为true如果为false，reset的时将会忽略从url上获取的数据",
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
            "en-US": "omitNil",
            "zh-CN": "如果为 false,"
          },
          "tip": "omitNil | 如果为 false,会原样保存。"
        },
        "name": "omitNil",
        "description": "如果为 false,会原样保存。",
        "defaultValue": "true",
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
            "en-US": "dateFormatter",
            "zh-CN": "格式化 Date 的"
          },
          "tip": "dateFormatter | 格式化 Date 的方式，默认转化为 string"
        },
        "name": "dateFormatter",
        "description": "格式化 Date 的方式，默认转化为 string",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    },
                    {
                      "label": "string",
                      "value": "string"
                    },
                    {
                      "label": "number",
                      "value": "number"
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    },
                    {
                      "label": "string",
                      "value": "string"
                    },
                    {
                      "label": "number",
                      "value": "number"
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
            "en-US": "params",
            "zh-CN": "@name 发起网络"
          },
          "tip": "params | @name 发起网络请求的参数"
        },
        "name": "params",
        "description": "@name 发起网络请求的参数",
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
            "en-US": "request",
            "zh-CN": "@name 发起网络"
          },
          "tip": "request | @name 发起网络请求的参数,返回值会覆盖给 initialValues"
        },
        "name": "request",
        "description": "@name 发起网络请求的参数,返回值会覆盖给 initialValues",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isKeyPressSubmit",
            "zh-CN": "是否回车提交"
          },
          "tip": "isKeyPressSubmit | 是否回车提交"
        },
        "name": "isKeyPressSubmit",
        "description": "是否回车提交",
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
            "en-US": "formKey",
            "zh-CN": "用于控制form 是"
          },
          "tip": "formKey | 用于控制form 是否相同的key，高阶用法"
        },
        "name": "formKey",
        "description": "用于控制form 是否相同的key，高阶用法",
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
            "en-US": "autoFocusFirstInput",
            "zh-CN": "@name自动选中第"
          },
          "tip": "autoFocusFirstInput | @name自动选中第一项"
        },
        "name": "autoFocusFirstInput",
        "description": "@name自动选中第一项",
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
            "en-US": "readonly",
            "zh-CN": "@name 是否只读"
          },
          "tip": "readonly | @name 是否只读模式，对所有表单项生效"
        },
        "name": "readonly",
        "description": "@name 是否只读模式，对所有表单项生效",
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
            "en-US": "grid",
            "zh-CN": "open grid "
          },
          "tip": "grid | open grid layout"
        },
        "name": "grid",
        "description": "open grid layout",
        "defaultValue": "false",
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
            "en-US": "colProps",
            "zh-CN": "only works"
          },
          "tip": "colProps | only works when grid is enabled"
        },
        "name": "colProps",
        "description": "only works when grid is enabled",
        "defaultValue": "{ xs: 24 }",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "flex",
                      "zh-CN": "flex"
                    }
                  },
                  "name": "flex",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
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
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ],
                            "options": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ]
                          },
                          "initialValue": "none"
                        }
                      ]
                    }
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
                      "en-US": "order",
                      "zh-CN": "order"
                    }
                  },
                  "name": "order",
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
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                      "en-US": "push",
                      "zh-CN": "push"
                    }
                  },
                  "name": "push",
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
                      "en-US": "pull",
                      "zh-CN": "pull"
                    }
                  },
                  "name": "pull",
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
                      "en-US": "xs",
                      "zh-CN": "xs"
                    }
                  },
                  "name": "xs",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "sm",
                      "zh-CN": "sm"
                    }
                  },
                  "name": "sm",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "md",
                      "zh-CN": "md"
                    }
                  },
                  "name": "md",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "lg",
                      "zh-CN": "lg"
                    }
                  },
                  "name": "lg",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xl",
                      "zh-CN": "xl"
                    }
                  },
                  "name": "xl",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xxl",
                      "zh-CN": "xxl"
                    }
                  },
                  "name": "xxl",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
                                  "setter": {
                                    "componentName": "MixedSetter",
                                    "props": {
                                      "setters": [
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
                                          "componentName": "RadioGroupSetter",
                                          "props": {
                                            "dataSource": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
            "en-US": "rowProps",
            "zh-CN": "only works"
          },
          "tip": "rowProps | only works when grid is enabled"
        },
        "name": "rowProps",
        "description": "only works when grid is enabled",
        "defaultValue": "{ gutter: 8 }",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "gutter",
                      "zh-CN": "gutter"
                    }
                  },
                  "name": "gutter",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
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
                          "componentName": "MixedSetter",
                          "props": {}
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "align",
                      "zh-CN": "align"
                    }
                  },
                  "name": "align",
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
                                "label": "bottom",
                                "value": "bottom"
                              },
                              {
                                "label": "top",
                                "value": "top"
                              },
                              {
                                "label": "middle",
                                "value": "middle"
                              },
                              {
                                "label": "stretch",
                                "value": "stretch"
                              }
                            ],
                            "options": [
                              {
                                "label": "bottom",
                                "value": "bottom"
                              },
                              {
                                "label": "top",
                                "value": "top"
                              },
                              {
                                "label": "middle",
                                "value": "middle"
                              },
                              {
                                "label": "stretch",
                                "value": "stretch"
                              }
                            ]
                          },
                          "initialValue": "bottom"
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "justify",
                      "zh-CN": "justify"
                    }
                  },
                  "name": "justify",
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
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "space-around",
                                "value": "space-around"
                              },
                              {
                                "label": "space-between",
                                "value": "space-between"
                              },
                              {
                                "label": "space-evenly",
                                "value": "space-evenly"
                              }
                            ],
                            "options": [
                              {
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "space-around",
                                "value": "space-around"
                              },
                              {
                                "label": "space-between",
                                "value": "space-between"
                              },
                              {
                                "label": "space-evenly",
                                "value": "space-evenly"
                              }
                            ]
                          },
                          "initialValue": "center"
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
                      "en-US": "wrap",
                      "zh-CN": "wrap"
                    }
                  },
                  "name": "wrap",
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
      }
    ],
    "supports": {
      "style": true,
      "className": true,
      "events": [
        {
          "name": "onValuesChange"
        },
        {
          "name": "onFinishFailed"
        },
        {
          "name": "onFinish",
          "description": "@name 表单结束后调用"
        },
        {
          "name": "onInit",
          "description": "@name 表单初始化成功，比如布局，label等计算完成"
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "LoginFormPage",
    "screenshot": "",
    "schema": {
      "componentName": "LoginFormPage",
      "props": {
        "omitNil": "true",
        "grid": "false",
        "colProps": "{ xs: 24 }",
        "rowProps": "{ gutter: 8 }"
      }
    }
  }
];

export default {
  ...LoginFormPageMeta,
  snippets
};
