
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProLayoutMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProLayout",
  "title": "ProLayout",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProLayout",
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
            "en-US": "onClick",
            "zh-CN": "onClick"
          }
        },
        "name": "onClick",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "title",
            "zh-CN": "设置为 false，"
          },
          "tip": "title | 设置为 false，在 layout 中只展示 pageName，而不是 pageName - title"
        },
        "name": "title",
        "description": "设置为 false，在 layout 中只展示 pageName，而不是 pageName - title",
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
            "en-US": "children",
            "zh-CN": "@deprecate"
          },
          "tip": "children | @deprecated Please use `items` instead"
        },
        "name": "children",
        "description": "@deprecated Please use `items` instead",
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
            "en-US": "layout",
            "zh-CN": "@name layo"
          },
          "tip": "layout | @name layout 的布局方式"
        },
        "name": "layout",
        "description": "@name layout 的布局方式",
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
            "en-US": "direction",
            "zh-CN": "direction "
          },
          "tip": "direction | direction of menu"
        },
        "name": "direction",
        "description": "direction of menu",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "ltr",
                "value": "ltr"
              },
              {
                "label": "rtl",
                "value": "rtl"
              }
            ],
            "options": [
              {
                "label": "ltr",
                "value": "ltr"
              },
              {
                "label": "rtl",
                "value": "rtl"
              }
            ]
          },
          "initialValue": "ltr"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultCollapsed",
            "zh-CN": "默认的是否展开，会受"
          },
          "tip": "defaultCollapsed | 默认的是否展开，会受到 breakpoint 的影响"
        },
        "name": "defaultCollapsed",
        "description": "默认的是否展开，会受到 breakpoint 的影响",
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
            "en-US": "onCollapse",
            "zh-CN": "@name 收起和展"
          },
          "tip": "onCollapse | @name 收起和展开的时候触发事件"
        },
        "name": "onCollapse",
        "description": "@name 收起和展开的时候触发事件",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "items",
            "zh-CN": "items"
          }
        },
        "name": "items",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
                                "en-US": "dashed",
                                "zh-CN": "dashed"
                              }
                            },
                            "name": "dashed",
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
                                "en-US": "danger",
                                "zh-CN": "danger"
                              }
                            },
                            "name": "danger",
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
                                "en-US": "icon",
                                "zh-CN": "icon"
                              }
                            },
                            "name": "icon",
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
                                "zh-CN": "title"
                              }
                            },
                            "name": "title",
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
                                "en-US": "icon",
                                "zh-CN": "icon"
                              }
                            },
                            "name": "icon",
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
                                "en-US": "theme",
                                "zh-CN": "theme"
                              }
                            },
                            "name": "theme",
                            "setter": {
                              "componentName": "RadioGroupSetter",
                              "props": {
                                "dataSource": [
                                  {
                                    "label": "light",
                                    "value": "light"
                                  },
                                  {
                                    "label": "dark",
                                    "value": "dark"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "light",
                                    "value": "light"
                                  },
                                  {
                                    "label": "dark",
                                    "value": "dark"
                                  }
                                ]
                              },
                              "initialValue": "light"
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
                              "isRequired": true,
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
                                "en-US": "children",
                                "zh-CN": "children"
                              }
                            },
                            "name": "children",
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "activeKey",
            "zh-CN": "activeKey"
          }
        },
        "name": "activeKey",
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
            "en-US": "getPopupContainer",
            "zh-CN": "getPopupContainer"
          }
        },
        "name": "getPopupContainer",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "builtinPlacements",
            "zh-CN": "builtinPlacements"
          }
        },
        "name": "builtinPlacements",
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
            "en-US": "motion",
            "zh-CN": "Menu motio"
          },
          "tip": "motion | Menu motion define. Use `defaultMotions` if you need config motion of each mode"
        },
        "name": "motion",
        "description": "Menu motion define. Use `defaultMotions` if you need config motion of each mode",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "motionName",
                      "zh-CN": "motionName"
                    }
                  },
                  "name": "motionName",
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
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "appear",
                                      "zh-CN": "appear"
                                    }
                                  },
                                  "name": "appear",
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
                                      "en-US": "enter",
                                      "zh-CN": "enter"
                                    }
                                  },
                                  "name": "enter",
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
                                      "en-US": "leave",
                                      "zh-CN": "leave"
                                    }
                                  },
                                  "name": "leave",
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
                                      "en-US": "appearActive",
                                      "zh-CN": "appearActive"
                                    }
                                  },
                                  "name": "appearActive",
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
                                      "en-US": "enterActive",
                                      "zh-CN": "enterActive"
                                    }
                                  },
                                  "name": "enterActive",
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
                                      "en-US": "leaveActive",
                                      "zh-CN": "leaveActive"
                                    }
                                  },
                                  "name": "leaveActive",
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
                      ]
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "motionAppear",
                      "zh-CN": "motionAppear"
                    }
                  },
                  "name": "motionAppear",
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
                      "en-US": "motionEnter",
                      "zh-CN": "motionEnter"
                    }
                  },
                  "name": "motionEnter",
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
                      "en-US": "motionLeave",
                      "zh-CN": "motionLeave"
                    }
                  },
                  "name": "motionLeave",
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
                      "en-US": "motionLeaveImmediately",
                      "zh-CN": "motionLeaveImmediately"
                    }
                  },
                  "name": "motionLeaveImmediately",
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
                      "en-US": "motionDeadline",
                      "zh-CN": "motionDeadline"
                    }
                  },
                  "name": "motionDeadline",
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
                      "en-US": "removeOnLeave",
                      "zh-CN": "removeOnLeave"
                    }
                  },
                  "name": "removeOnLeave",
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
                      "en-US": "leavedClassName",
                      "zh-CN": "leavedClassName"
                    }
                  },
                  "name": "leavedClassName",
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
                      "en-US": "eventProps",
                      "zh-CN": "eventProps"
                    }
                  },
                  "name": "eventProps",
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
                      "en-US": "onAppearPrepare",
                      "zh-CN": "onAppearPrepare"
                    }
                  },
                  "name": "onAppearPrepare",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onEnterPrepare",
                      "zh-CN": "onEnterPrepare"
                    }
                  },
                  "name": "onEnterPrepare",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onLeavePrepare",
                      "zh-CN": "onLeavePrepare"
                    }
                  },
                  "name": "onLeavePrepare",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onAppearStart",
                      "zh-CN": "onAppearStart"
                    }
                  },
                  "name": "onAppearStart",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onEnterStart",
                      "zh-CN": "onEnterStart"
                    }
                  },
                  "name": "onEnterStart",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onLeaveStart",
                      "zh-CN": "onLeaveStart"
                    }
                  },
                  "name": "onLeaveStart",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onAppearActive",
                      "zh-CN": "onAppearActive"
                    }
                  },
                  "name": "onAppearActive",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onEnterActive",
                      "zh-CN": "onEnterActive"
                    }
                  },
                  "name": "onEnterActive",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onLeaveActive",
                      "zh-CN": "onLeaveActive"
                    }
                  },
                  "name": "onLeaveActive",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onAppearEnd",
                      "zh-CN": "onAppearEnd"
                    }
                  },
                  "name": "onAppearEnd",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onEnterEnd",
                      "zh-CN": "onEnterEnd"
                    }
                  },
                  "name": "onEnterEnd",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onLeaveEnd",
                      "zh-CN": "onLeaveEnd"
                    }
                  },
                  "name": "onLeaveEnd",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onVisibleChanged",
                      "zh-CN": "onVisibleChanged"
                    }
                  },
                  "name": "onVisibleChanged",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "internalRef",
                      "zh-CN": "internalRef"
                    }
                  },
                  "name": "internalRef",
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
                      "en-US": "children",
                      "zh-CN": "children"
                    }
                  },
                  "name": "children",
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
            "en-US": "onSelect",
            "zh-CN": "onSelect"
          }
        },
        "name": "onSelect",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDeselect",
            "zh-CN": "onDeselect"
          }
        },
        "name": "onDeselect",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "expandIcon",
            "zh-CN": "expandIcon"
          }
        },
        "name": "expandIcon",
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
            "en-US": "getContainer",
            "zh-CN": "getContainer"
          }
        },
        "name": "getContainer",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "logo",
            "zh-CN": "品牌logo的标识"
          },
          "tip": "logo | 品牌logo的标识"
        },
        "name": "logo",
        "description": "品牌logo的标识",
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
                "componentName": "SlotSetter",
                "props": {
                  "mode": "element"
                },
                "isRequired": false,
                "initialValue": {
                  "type": "JSSlot",
                  "value": []
                }
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter"
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
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "FunctionSetter",
                "isRequired": false
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
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "MixedSetter",
                "props": {}
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
            "en-US": "links",
            "zh-CN": "@name 侧边菜单"
          },
          "tip": "links | @name 侧边菜单底部的一些快捷链接"
        },
        "name": "links",
        "description": "@name 侧边菜单底部的一些快捷链接",
        "setter": {
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
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "navTheme",
            "zh-CN": "@name them"
          },
          "tip": "navTheme | @name theme for nav menu"
        },
        "name": "navTheme",
        "description": "@name theme for nav menu",
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
            "en-US": "contentWidth",
            "zh-CN": "@name layo"
          },
          "tip": "contentWidth | @name layout of content: `Fluid` or `Fixed`, only works when layout is top"
        },
        "name": "contentWidth",
        "description": "@name layout of content: `Fluid` or `Fixed`, only works when layout is top",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "Fluid",
                "value": "Fluid"
              },
              {
                "label": "Fixed",
                "value": "Fixed"
              }
            ],
            "options": [
              {
                "label": "Fluid",
                "value": "Fluid"
              },
              {
                "label": "Fixed",
                "value": "Fixed"
              }
            ]
          },
          "initialValue": "Fluid"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fixedHeader",
            "zh-CN": "@name stic"
          },
          "tip": "fixedHeader | @name sticky header"
        },
        "name": "fixedHeader",
        "description": "@name sticky header",
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
            "en-US": "fixSiderbar",
            "zh-CN": "@name stic"
          },
          "tip": "fixSiderbar | @name sticky siderbar"
        },
        "name": "fixSiderbar",
        "description": "@name sticky siderbar",
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
            "en-US": "menu",
            "zh-CN": "@name menu"
          },
          "tip": "menu | @name menu 相关的一些配置，可以配置菜单的行为"
        },
        "name": "menu",
        "description": "@name menu 相关的一些配置，可以配置菜单的行为",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                    "componentName": "BoolSetter",
                    "isRequired": false,
                    "initialValue": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "hideMenuWhenCollapsed",
                      "zh-CN": "hideMenuWhenCollapsed"
                    }
                  },
                  "name": "hideMenuWhenCollapsed",
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
                      "en-US": "collapsedShowTitle",
                      "zh-CN": "collapsedShowTitle"
                    }
                  },
                  "name": "collapsedShowTitle",
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
                      "en-US": "collapsedShowGroupTitle",
                      "zh-CN": "collapsedShowGroupTitle"
                    }
                  },
                  "name": "collapsedShowGroupTitle",
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
                      "en-US": "defaultOpenAll",
                      "zh-CN": "defaultOpenAll"
                    }
                  },
                  "name": "defaultOpenAll",
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
                      "en-US": "ignoreFlatMenu",
                      "zh-CN": "ignoreFlatMenu"
                    }
                  },
                  "name": "ignoreFlatMenu",
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
                      "en-US": "loading",
                      "zh-CN": "loading"
                    }
                  },
                  "name": "loading",
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
                      "zh-CN": "onLoadingChange"
                    }
                  },
                  "name": "onLoadingChange",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "params",
                      "zh-CN": "params"
                    }
                  },
                  "name": "params",
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
                      "zh-CN": "request"
                    }
                  },
                  "name": "request",
                  "setter": {
                    "componentName": "FunctionSetter"
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
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "group",
                          "value": "group"
                        },
                        {
                          "label": "sub",
                          "value": "sub"
                        }
                      ],
                      "options": [
                        {
                          "label": "group",
                          "value": "group"
                        },
                        {
                          "label": "sub",
                          "value": "sub"
                        }
                      ]
                    },
                    "initialValue": "group"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "autoClose",
                      "zh-CN": "autoClose"
                    }
                  },
                  "name": "autoClose",
                  "setter": {
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
            "en-US": "iconfontUrl",
            "zh-CN": "Your custo"
          },
          "tip": "iconfontUrl | Your custom iconfont Symbol script Url eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js"
        },
        "name": "iconfontUrl",
        "description": "Your custom iconfont Symbol script Url eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js",
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
            "en-US": "colorPrimary",
            "zh-CN": "@name 主色，需"
          },
          "tip": "colorPrimary | @name 主色，需要配合 umi 使用"
        },
        "name": "colorPrimary",
        "description": "@name 主色，需要配合 umi 使用",
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
            "en-US": "colorWeak",
            "zh-CN": "@name 全局增加"
          },
          "tip": "colorWeak | @name 全局增加滤镜"
        },
        "name": "colorWeak",
        "description": "@name 全局增加滤镜",
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
            "en-US": "splitMenus",
            "zh-CN": "只在 mix 模式下"
          },
          "tip": "splitMenus | 只在 mix 模式下生效"
        },
        "name": "splitMenus",
        "description": "只在 mix 模式下生效",
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
            "en-US": "suppressSiderWhenMenuEmpty",
            "zh-CN": "@name 在菜单为"
          },
          "tip": "suppressSiderWhenMenuEmpty | @name 在菜单为空时隐藏Sider"
        },
        "name": "suppressSiderWhenMenuEmpty",
        "description": "@name 在菜单为空时隐藏Sider",
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
            "en-US": "siderMenuType",
            "zh-CN": "侧边菜单模式"
          },
          "tip": "siderMenuType | 侧边菜单模式"
        },
        "name": "siderMenuType",
        "description": "侧边菜单模式",
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
            "en-US": "isMobile",
            "zh-CN": "isMobile"
          }
        },
        "name": "isMobile",
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
            "en-US": "menuRender",
            "zh-CN": "@name 虽然叫m"
          },
          "tip": "menuRender | @name 虽然叫menuRender，但是其实是整个 SiderMenu 面板的渲染函数"
        },
        "name": "menuRender",
        "description": "@name 虽然叫menuRender，但是其实是整个 SiderMenu 面板的渲染函数",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rightContentRender",
            "zh-CN": "@deprecate"
          },
          "tip": "rightContentRender | @deprecated 使用 actionsRender 和 avatarProps 代替"
        },
        "name": "rightContentRender",
        "description": "@deprecated 使用 actionsRender 和 avatarProps 代替",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "appList",
            "zh-CN": "相关品牌的列表"
          },
          "tip": "appList | 相关品牌的列表"
        },
        "name": "appList",
        "description": "相关品牌的列表",
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
                        "isRequired": true,
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
                          "en-US": "desc",
                          "zh-CN": "desc"
                        }
                      },
                      "name": "desc",
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
                          "en-US": "icon",
                          "zh-CN": "icon"
                        }
                      },
                      "name": "icon",
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
                          "en-US": "url",
                          "zh-CN": "url"
                        }
                      },
                      "name": "url",
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
                          "en-US": "children",
                          "zh-CN": "children"
                        }
                      },
                      "name": "children",
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemClick",
            "zh-CN": "相关品牌的列表项 点"
          },
          "tip": "itemClick | 相关品牌的列表项 点击事件，当事件存在时，appList 内配置的 url 不在自动跳转"
        },
        "name": "itemClick",
        "description": "相关品牌的列表项 点击事件，当事件存在时，appList 内配置的 url 不在自动跳转",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuData",
            "zh-CN": "menuData"
          }
        },
        "name": "menuData",
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
                          "en-US": "children",
                          "zh-CN": "children"
                        }
                      },
                      "name": "children",
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
                          "en-US": "routes",
                          "zh-CN": "routes"
                        }
                      },
                      "name": "routes",
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
                          "en-US": "hideChildrenInMenu",
                          "zh-CN": "hideChildrenInMenu"
                        }
                      },
                      "name": "hideChildrenInMenu",
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
                          "en-US": "hideInMenu",
                          "zh-CN": "hideInMenu"
                        }
                      },
                      "name": "hideInMenu",
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
                          "en-US": "icon",
                          "zh-CN": "icon"
                        }
                      },
                      "name": "icon",
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
                          "en-US": "locale",
                          "zh-CN": "locale"
                        }
                      },
                      "name": "locale",
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
                          "en-US": "key",
                          "zh-CN": "key"
                        }
                      },
                      "name": "key",
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
                          "en-US": "disabledTooltip",
                          "zh-CN": "disabledTooltip"
                        }
                      },
                      "name": "disabledTooltip",
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
                          "en-US": "path",
                          "zh-CN": "path"
                        }
                      },
                      "name": "path",
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
                          "en-US": "parentKeys",
                          "zh-CN": "parentKeys"
                        }
                      },
                      "name": "parentKeys",
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
                          "en-US": "flatMenu",
                          "zh-CN": "flatMenu"
                        }
                      },
                      "name": "flatMenu",
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
                          "en-US": "tooltip",
                          "zh-CN": "tooltip"
                        }
                      },
                      "name": "tooltip",
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMenuHeaderClick",
            "zh-CN": "@name 菜单顶部"
          },
          "tip": "onMenuHeaderClick | @name 菜单顶部logo 和 title 区域的点击事件"
        },
        "name": "onMenuHeaderClick",
        "description": "@name 菜单顶部logo 和 title 区域的点击事件",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuHeaderRender",
            "zh-CN": "@name 菜单 l"
          },
          "tip": "menuHeaderRender | @name 菜单 logo 和 title 区域的渲染"
        },
        "name": "menuHeaderRender",
        "description": "@name 菜单 logo 和 title 区域的渲染",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headerContentRender",
            "zh-CN": "@name 顶部区域"
          },
          "tip": "headerContentRender | @name 顶部区域的渲染，包含内部的 menu"
        },
        "name": "headerContentRender",
        "description": "@name 顶部区域的渲染，包含内部的 menu",
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
            "en-US": "collapsedButtonRender",
            "zh-CN": "@name 自定义展"
          },
          "tip": "collapsedButtonRender | @name 自定义展开收起按钮的渲染"
        },
        "name": "collapsedButtonRender",
        "description": "@name 自定义展开收起按钮的渲染",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "actionsRender",
            "zh-CN": "Layout的操作功"
          },
          "tip": "actionsRender | Layout的操作功能列表，不同的 layout 会放到不同的位置"
        },
        "name": "actionsRender",
        "description": "Layout的操作功能列表，不同的 layout 会放到不同的位置",
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
            "en-US": "avatarProps",
            "zh-CN": "头像的设置"
          },
          "tip": "avatarProps | 头像的设置"
        },
        "name": "avatarProps",
        "description": "头像的设置",
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
            "en-US": "headerRender",
            "zh-CN": "headerRender"
          }
        },
        "name": "headerRender",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headerTitleRender",
            "zh-CN": "headerTitleRender"
          }
        },
        "name": "headerTitleRender",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "siderWidth",
            "zh-CN": "菜单的宽度"
          },
          "tip": "siderWidth | 菜单的宽度"
        },
        "name": "siderWidth",
        "description": "菜单的宽度",
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
            "en-US": "hasSiderMenu",
            "zh-CN": "hasSiderMenu"
          }
        },
        "name": "hasSiderMenu",
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
            "en-US": "openKeys",
            "zh-CN": "openKeys"
          }
        },
        "name": "openKeys",
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
            "en-US": "disabledOverflow",
            "zh-CN": "@private D"
          },
          "tip": "disabledOverflow | @private Disable auto overflow. Pls note the prop name may refactor since we do not final decided."
        },
        "name": "disabledOverflow",
        "description": "@private Disable auto overflow. Pls note the prop name may refactor since we do not final decided.",
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
            "en-US": "inlineCollapsed",
            "zh-CN": "inlineCollapsed"
          }
        },
        "name": "inlineCollapsed",
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
            "en-US": "defaultOpenKeys",
            "zh-CN": "defaultOpenKeys"
          }
        },
        "name": "defaultOpenKeys",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultActiveFirst",
            "zh-CN": "defaultActiveFirst"
          }
        },
        "name": "defaultActiveFirst",
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
            "en-US": "selectable",
            "zh-CN": "selectable"
          }
        },
        "name": "selectable",
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
            "en-US": "defaultSelectedKeys",
            "zh-CN": "defaultSelectedKeys"
          }
        },
        "name": "defaultSelectedKeys",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "selectedKeys",
            "zh-CN": "selectedKeys"
          }
        },
        "name": "selectedKeys",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inlineIndent",
            "zh-CN": "inlineIndent"
          }
        },
        "name": "inlineIndent",
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
            "en-US": "defaultMotions",
            "zh-CN": "Default me"
          },
          "tip": "defaultMotions | Default menu motion of each mode"
        },
        "name": "defaultMotions",
        "description": "Default menu motion of each mode",
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
            "en-US": "subMenuOpenDelay",
            "zh-CN": "subMenuOpenDelay"
          }
        },
        "name": "subMenuOpenDelay",
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
            "en-US": "subMenuCloseDelay",
            "zh-CN": "subMenuCloseDelay"
          }
        },
        "name": "subMenuCloseDelay",
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
            "en-US": "forceSubMenuRender",
            "zh-CN": "forceSubMenuRender"
          }
        },
        "name": "forceSubMenuRender",
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
            "en-US": "triggerSubMenuAction",
            "zh-CN": "triggerSubMenuAction"
          }
        },
        "name": "triggerSubMenuAction",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              }
            ],
            "options": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              }
            ]
          },
          "initialValue": "click"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemIcon",
            "zh-CN": "itemIcon"
          }
        },
        "name": "itemIcon",
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
            "en-US": "overflowedIndicator",
            "zh-CN": "overflowedIndicator"
          }
        },
        "name": "overflowedIndicator",
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
            "en-US": "overflowedIndicatorPopupClassName",
            "zh-CN": "@private I"
          },
          "tip": "overflowedIndicatorPopupClassName | @private Internal usage. Do not use in your production."
        },
        "name": "overflowedIndicatorPopupClassName",
        "description": "@private Internal usage. Do not use in your production.",
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
            "en-US": "_internalRenderMenuItem",
            "zh-CN": "*"
          },
          "tip": "_internalRenderMenuItem | *"
        },
        "name": "_internalRenderMenuItem",
        "description": "*",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "_internalRenderSubMenuItem",
            "zh-CN": "*"
          },
          "tip": "_internalRenderSubMenuItem | *"
        },
        "name": "_internalRenderSubMenuItem",
        "description": "*",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "theme",
            "zh-CN": "theme"
          }
        },
        "name": "theme",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "light",
                "value": "light"
              },
              {
                "label": "dark",
                "value": "dark"
              }
            ],
            "options": [
              {
                "label": "light",
                "value": "light"
              },
              {
                "label": "dark",
                "value": "dark"
              }
            ]
          },
          "initialValue": "light"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "_internalDisableMenuItemTitleTooltip",
            "zh-CN": "@private I"
          },
          "tip": "_internalDisableMenuItemTitleTooltip | @private Internal Usage. Not promise crash if used in production. Connect with chenshuai2144"
        },
        "name": "_internalDisableMenuItemTitleTooltip",
        "description": "@private Internal Usage. Not promise crash if used in production. Connect with chenshuai2144",
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
            "en-US": "computedMatch",
            "zh-CN": "computedMatch"
          }
        },
        "name": "computedMatch",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "Params",
                      "zh-CN": "Params"
                    }
                  },
                  "name": "Params",
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
                      "en-US": "params",
                      "zh-CN": "params"
                    }
                  },
                  "name": "params",
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
                    "isRequired": true,
                    "initialValue": {}
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isExact",
                      "zh-CN": "isExact"
                    }
                  },
                  "name": "isExact",
                  "setter": {
                    "componentName": "BoolSetter",
                    "isRequired": true,
                    "initialValue": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "path",
                      "zh-CN": "path"
                    }
                  },
                  "name": "path",
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
                      "en-US": "url",
                      "zh-CN": "url"
                    }
                  },
                  "name": "url",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "route",
            "zh-CN": "route"
          }
        },
        "name": "route",
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
            "en-US": "location",
            "zh-CN": "location"
          }
        },
        "name": "location",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "pathname",
                      "zh-CN": "pathname"
                    }
                  },
                  "name": "pathname",
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
            "en-US": "handleOpenChange",
            "zh-CN": "handleOpenChange"
          }
        },
        "name": "handleOpenChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "iconPrefixes",
            "zh-CN": "iconPrefixes"
          }
        },
        "name": "iconPrefixes",
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
            "en-US": "menuProps",
            "zh-CN": "要给菜单的props"
          },
          "tip": "menuProps | 要给菜单的props, 参考antd-menu的属性。https://ant.design/components/menu-cn/"
        },
        "name": "menuProps",
        "description": "要给菜单的props, 参考antd-menu的属性。https://ant.design/components/menu-cn/",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "theme",
                      "zh-CN": "theme"
                    }
                  },
                  "name": "theme",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "light",
                          "value": "light"
                        },
                        {
                          "label": "dark",
                          "value": "dark"
                        }
                      ],
                      "options": [
                        {
                          "label": "light",
                          "value": "light"
                        },
                        {
                          "label": "dark",
                          "value": "dark"
                        }
                      ]
                    },
                    "initialValue": "light"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "inlineIndent",
                      "zh-CN": "inlineIndent"
                    }
                  },
                  "name": "inlineIndent",
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
                      "en-US": "_internalDisableMenuItemTitleTooltip",
                      "zh-CN": "_internalDisableMenuItemTitleTooltip"
                    }
                  },
                  "name": "_internalDisableMenuItemTitleTooltip",
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
                      "en-US": "items",
                      "zh-CN": "items"
                    }
                  },
                  "name": "items",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
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
                                          "en-US": "dashed",
                                          "zh-CN": "dashed"
                                        }
                                      },
                                      "name": "dashed",
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
                                          "en-US": "danger",
                                          "zh-CN": "danger"
                                        }
                                      },
                                      "name": "danger",
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
                                          "en-US": "icon",
                                          "zh-CN": "icon"
                                        }
                                      },
                                      "name": "icon",
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
                                          "zh-CN": "title"
                                        }
                                      },
                                      "name": "title",
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
                                          "en-US": "icon",
                                          "zh-CN": "icon"
                                        }
                                      },
                                      "name": "icon",
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
                                          "en-US": "theme",
                                          "zh-CN": "theme"
                                        }
                                      },
                                      "name": "theme",
                                      "setter": {
                                        "componentName": "RadioGroupSetter",
                                        "props": {
                                          "dataSource": [
                                            {
                                              "label": "light",
                                              "value": "light"
                                            },
                                            {
                                              "label": "dark",
                                              "value": "dark"
                                            }
                                          ],
                                          "options": [
                                            {
                                              "label": "light",
                                              "value": "light"
                                            },
                                            {
                                              "label": "dark",
                                              "value": "dark"
                                            }
                                          ]
                                        },
                                        "initialValue": "light"
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
                                        "isRequired": true,
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
                                          "en-US": "children",
                                          "zh-CN": "children"
                                        }
                                      },
                                      "name": "children",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formatMessage",
            "zh-CN": "formatMessage"
          }
        },
        "name": "formatMessage",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "subMenuItemRender",
            "zh-CN": "@name 处理父级"
          },
          "tip": "subMenuItemRender | @name 处理父级菜单的 props，可以复写菜单的点击功能，一般用于埋点"
        },
        "name": "subMenuItemRender",
        "description": "@name 处理父级菜单的 props，可以复写菜单的点击功能，一般用于埋点",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuItemRender",
            "zh-CN": "@name 处理菜单"
          },
          "tip": "menuItemRender | @name 处理菜单的 props，可以复写菜单的点击功能，一般结合 Router 框架使用"
        },
        "name": "menuItemRender",
        "description": "@name 处理菜单的 props，可以复写菜单的点击功能，一般结合 Router 框架使用",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "postMenuData",
            "zh-CN": "@name 处理 m"
          },
          "tip": "postMenuData | @name 处理 menuData 的方法，与 menuDataRender 不同，postMenuData处理完成后会直接渲染，不再进行国际化和拼接处理"
        },
        "name": "postMenuData",
        "description": "@name 处理 menuData 的方法，与 menuDataRender 不同，postMenuData处理完成后会直接渲染，不再进行国际化和拼接处理",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "token",
            "zh-CN": "token"
          }
        },
        "name": "token",
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
            "en-US": "appListRender",
            "zh-CN": "appListRender"
          }
        },
        "name": "appListRender",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuFooterRender",
            "zh-CN": "@name 侧边菜单"
          },
          "tip": "menuFooterRender | @name 侧边菜单底部的配置，可以增加一些底部操作"
        },
        "name": "menuFooterRender",
        "description": "@name 侧边菜单底部的配置，可以增加一些底部操作",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuContentRender",
            "zh-CN": "@name 侧边菜单"
          },
          "tip": "menuContentRender | @name 侧边菜单，菜单区域的处理,可以单独处理菜单的dom"
        },
        "name": "menuContentRender",
        "description": "@name 侧边菜单，菜单区域的处理,可以单独处理菜单的dom",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuExtraRender",
            "zh-CN": "@name 侧边菜单"
          },
          "tip": "menuExtraRender | @name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框"
        },
        "name": "menuExtraRender",
        "description": "@name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "breakpoint",
            "zh-CN": "@name 菜单是否"
          },
          "tip": "breakpoint | @name 菜单是否收起的断点，设置成false 可以禁用"
        },
        "name": "breakpoint",
        "description": "@name 菜单是否收起的断点，设置成false 可以禁用",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "false",
                "value": false
              },
              {
                "label": "xxl",
                "value": "xxl"
              },
              {
                "label": "xl",
                "value": "xl"
              },
              {
                "label": "lg",
                "value": "lg"
              },
              {
                "label": "md",
                "value": "md"
              },
              {
                "label": "sm",
                "value": "sm"
              },
              {
                "label": "xs",
                "value": "xs"
              }
            ],
            "options": [
              {
                "label": "false",
                "value": false
              },
              {
                "label": "xxl",
                "value": "xxl"
              },
              {
                "label": "xl",
                "value": "xl"
              },
              {
                "label": "lg",
                "value": "lg"
              },
              {
                "label": "md",
                "value": "md"
              },
              {
                "label": "sm",
                "value": "sm"
              },
              {
                "label": "xs",
                "value": "xs"
              }
            ]
          },
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "logoStyle",
            "zh-CN": "@name 侧边菜单"
          },
          "tip": "logoStyle | @name 侧边菜单的logo的样式，可以调整下大小"
        },
        "name": "logoStyle",
        "description": "@name 侧边菜单的logo的样式，可以调整下大小",
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
            "en-US": "stylish",
            "zh-CN": "stylish"
          }
        },
        "name": "stylish",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "header",
                      "zh-CN": "header"
                    }
                  },
                  "name": "header",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "sider",
                      "zh-CN": "sider"
                    }
                  },
                  "name": "sider",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
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
            "en-US": "bgLayoutImgList",
            "zh-CN": "Layout 的品牌"
          },
          "tip": "bgLayoutImgList | Layout 的品牌配置，表现为一张背景图片"
        },
        "name": "bgLayoutImgList",
        "description": "Layout 的品牌配置，表现为一张背景图片",
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
                          "en-US": "width",
                          "zh-CN": "width"
                        }
                      },
                      "name": "width",
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
                          "en-US": "height",
                          "zh-CN": "height"
                        }
                      },
                      "name": "height",
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
                          "en-US": "left",
                          "zh-CN": "left"
                        }
                      },
                      "name": "left",
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
                          "en-US": "top",
                          "zh-CN": "top"
                        }
                      },
                      "name": "top",
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
                          "en-US": "bottom",
                          "zh-CN": "bottom"
                        }
                      },
                      "name": "bottom",
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
                          "en-US": "right",
                          "zh-CN": "right"
                        }
                      },
                      "name": "right",
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
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pure",
            "zh-CN": "@name 简约模式"
          },
          "tip": "pure | @name 简约模式，设置了之后不渲染的任何 layout 的东西，但是会有 context，可以获取到当前菜单。"
        },
        "name": "pure",
        "description": "@name 简约模式，设置了之后不渲染的任何 layout 的东西，但是会有 context，可以获取到当前菜单。",
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
            "en-US": "onPageChange",
            "zh-CN": "@name 页面切换"
          },
          "tip": "onPageChange | @name 页面切换的时候触发"
        },
        "name": "onPageChange",
        "description": "@name 页面切换的时候触发",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "@name layo"
          },
          "tip": "loading | @name layout 的 loading 效果，设置完成之后只展示一个 loading"
        },
        "name": "loading",
        "description": "@name layout 的 loading 效果，设置完成之后只展示一个 loading",
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
            "en-US": "locale",
            "zh-CN": "@name layo"
          },
          "tip": "locale | @name layout"
        },
        "name": "locale",
        "description": "@name layout",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "zh-CN",
                "value": "zh-CN"
              },
              {
                "label": "zh-TW",
                "value": "zh-TW"
              },
              {
                "label": "en-US",
                "value": "en-US"
              },
              {
                "label": "it-IT",
                "value": "it-IT"
              },
              {
                "label": "ko-KR",
                "value": "ko-KR"
              }
            ],
            "options": [
              {
                "label": "zh-CN",
                "value": "zh-CN"
              },
              {
                "label": "zh-TW",
                "value": "zh-TW"
              },
              {
                "label": "en-US",
                "value": "en-US"
              },
              {
                "label": "it-IT",
                "value": "it-IT"
              },
              {
                "label": "ko-KR",
                "value": "ko-KR"
              }
            ]
          },
          "initialValue": "zh-CN"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "collapsed",
            "zh-CN": "@name 是否收起"
          },
          "tip": "collapsed | @name 是否收起 layout 是严格受控的，可以 设置为 true，一直收起"
        },
        "name": "collapsed",
        "description": "@name 是否收起 layout 是严格受控的，可以 设置为 true，一直收起",
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
            "en-US": "footerRender",
            "zh-CN": "@name 页脚的配"
          },
          "tip": "footerRender | @name 页脚的配置"
        },
        "name": "footerRender",
        "description": "@name 页脚的配置",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "breadcrumbRender",
            "zh-CN": "@name 设置 P"
          },
          "tip": "breadcrumbRender | @name 设置 PageHeader 的面包屑，只能处理数据"
        },
        "name": "breadcrumbRender",
        "description": "@name 设置 PageHeader 的面包屑，只能处理数据",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pageTitleRender",
            "zh-CN": "@name 设置页面"
          },
          "tip": "pageTitleRender | @name 设置页面的标题"
        },
        "name": "pageTitleRender",
        "description": "@name 设置页面的标题",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuDataRender",
            "zh-CN": "@name 处理 m"
          },
          "tip": "menuDataRender | @name 处理 menuData 的数据，可以动态的控制数据"
        },
        "name": "menuDataRender",
        "description": "@name 处理 menuData 的数据，可以动态的控制数据",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemRender",
            "zh-CN": "@name 处理每个"
          },
          "tip": "itemRender | @name 处理每个面包屑的配置，需要直接返回 dom"
        },
        "name": "itemRender",
        "description": "@name 处理每个面包屑的配置，需要直接返回 dom",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disableMobile",
            "zh-CN": "@name 是否禁用"
          },
          "tip": "disableMobile | @name 是否禁用移动端模式"
        },
        "name": "disableMobile",
        "description": "@name 是否禁用移动端模式",
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
            "en-US": "contentStyle",
            "zh-CN": "content 的样"
          },
          "tip": "contentStyle | content 的样式"
        },
        "name": "contentStyle",
        "description": "content 的样式",
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
            "en-US": "breadcrumbProps",
            "zh-CN": "PageHeader"
          },
          "tip": "breadcrumbProps | PageHeader 的 BreadcrumbProps 配置，会透传下去"
        },
        "name": "breadcrumbProps",
        "description": "PageHeader 的 BreadcrumbProps 配置，会透传下去",
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
            "en-US": "waterMarkProps",
            "zh-CN": "@name 水印的相"
          },
          "tip": "waterMarkProps | @name 水印的相关配置"
        },
        "name": "waterMarkProps",
        "description": "@name 水印的相关配置",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                      "en-US": "markStyle",
                      "zh-CN": "markStyle"
                    }
                  },
                  "name": "markStyle",
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
                      "en-US": "markClassName",
                      "zh-CN": "markClassName"
                    }
                  },
                  "name": "markClassName",
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
                      "en-US": "gapX",
                      "zh-CN": "gapX"
                    }
                  },
                  "name": "gapX",
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
                      "en-US": "gapY",
                      "zh-CN": "gapY"
                    }
                  },
                  "name": "gapY",
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
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "offsetTop",
                      "zh-CN": "offsetTop"
                    }
                  },
                  "name": "offsetTop",
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
                      "en-US": "offsetLeft",
                      "zh-CN": "offsetLeft"
                    }
                  },
                  "name": "offsetLeft",
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
                      "en-US": "rotate",
                      "zh-CN": "rotate"
                    }
                  },
                  "name": "rotate",
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
                      "en-US": "image",
                      "zh-CN": "image"
                    }
                  },
                  "name": "image",
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
                      "en-US": "content",
                      "zh-CN": "content"
                    }
                  },
                  "name": "content",
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
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "fontColor",
                      "zh-CN": "fontColor"
                    }
                  },
                  "name": "fontColor",
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
                      "en-US": "fontStyle",
                      "zh-CN": "fontStyle"
                    }
                  },
                  "name": "fontStyle",
                  "setter": {
                    "componentName": "SelectSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "normal",
                          "value": "normal"
                        },
                        {
                          "label": "none",
                          "value": "none"
                        },
                        {
                          "label": "italic",
                          "value": "italic"
                        },
                        {
                          "label": "oblique",
                          "value": "oblique"
                        }
                      ],
                      "options": [
                        {
                          "label": "normal",
                          "value": "normal"
                        },
                        {
                          "label": "none",
                          "value": "none"
                        },
                        {
                          "label": "italic",
                          "value": "italic"
                        },
                        {
                          "label": "oblique",
                          "value": "oblique"
                        }
                      ]
                    },
                    "initialValue": "normal"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "fontFamily",
                      "zh-CN": "fontFamily"
                    }
                  },
                  "name": "fontFamily",
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
                      "en-US": "fontWeight",
                      "zh-CN": "fontWeight"
                    }
                  },
                  "name": "fontWeight",
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
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "normal",
                                "value": "normal"
                              },
                              {
                                "label": "light",
                                "value": "light"
                              },
                              {
                                "label": "weight",
                                "value": "weight"
                              }
                            ],
                            "options": [
                              {
                                "label": "normal",
                                "value": "normal"
                              },
                              {
                                "label": "light",
                                "value": "light"
                              },
                              {
                                "label": "weight",
                                "value": "weight"
                              }
                            ]
                          },
                          "initialValue": "normal"
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
                      "zh-CN": "fontSize"
                    }
                  },
                  "name": "fontSize",
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
            "en-US": "actionRef",
            "zh-CN": "@name 操作菜单"
          },
          "tip": "actionRef | @name 操作菜单重新刷新"
        },
        "name": "actionRef",
        "description": "@name 操作菜单重新刷新",
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
            "en-US": "ErrorBoundary",
            "zh-CN": "@name 错误处理"
          },
          "tip": "ErrorBoundary | @name 错误处理组件"
        },
        "name": "ErrorBoundary",
        "description": "@name 错误处理组件",
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
            "en-US": "isChildrenLayout",
            "zh-CN": "isChildrenLayout"
          }
        },
        "name": "isChildrenLayout",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {
      "isContainer": true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProLayout",
    "screenshot": "",
    "schema": {
      "componentName": "ProLayout",
      "props": {}
    }
  }
];

export default {
  ...ProLayoutMeta,
  snippets
};
