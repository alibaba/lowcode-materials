
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TabsMeta: IPublicTypeComponentMetadata = {
  "componentName": "Tabs",
  "title": "Tabs",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Tabs",
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
                "label": "line",
                "value": "line"
              },
              {
                "label": "card",
                "value": "card"
              },
              {
                "label": "editable-card",
                "value": "editable-card"
              }
            ],
            "options": [
              {
                "label": "line",
                "value": "line"
              },
              {
                "label": "card",
                "value": "card"
              },
              {
                "label": "editable-card",
                "value": "editable-card"
              }
            ]
          },
          "initialValue": "line"
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
            "en-US": "hideAdd",
            "zh-CN": "hideAdd"
          }
        },
        "name": "hideAdd",
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
            "en-US": "addIcon",
            "zh-CN": "addIcon"
          }
        },
        "name": "addIcon",
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
            "en-US": "onEdit",
            "zh-CN": "onEdit"
          }
        },
        "name": "onEdit",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "items",
            "zh-CN": "items"
          }
        },
        "name": "items",
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
                          "en-US": "key",
                          "zh-CN": "key"
                        }
                      },
                      "name": "key",
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
                        "isRequired": true,
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "direction",
            "zh-CN": "direction"
          }
        },
        "name": "direction",
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
            "en-US": "tabBarExtraContent",
            "zh-CN": "tabBarExtraContent"
          }
        },
        "name": "tabBarExtraContent",
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
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "animated",
            "zh-CN": "animated"
          }
        },
        "name": "animated",
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
                            "en-US": "inkBar",
                            "zh-CN": "inkBar"
                          }
                        },
                        "name": "inkBar",
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
                            "en-US": "tabPane",
                            "zh-CN": "tabPane"
                          }
                        },
                        "name": "tabPane",
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
                            "en-US": "tabPaneMotion",
                            "zh-CN": "tabPaneMotion"
                          }
                        },
                        "name": "tabPaneMotion",
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
            "en-US": "destroyInactiveTabPane",
            "zh-CN": "destroyInactiveTabPane"
          }
        },
        "name": "destroyInactiveTabPane",
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
            "en-US": "defaultActiveKey",
            "zh-CN": "defaultActiveKey"
          }
        },
        "name": "defaultActiveKey",
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
            "en-US": "renderTabBar",
            "zh-CN": "renderTabBar"
          }
        },
        "name": "renderTabBar",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tabBarGutter",
            "zh-CN": "tabBarGutter"
          }
        },
        "name": "tabBarGutter",
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
            "en-US": "tabBarStyle",
            "zh-CN": "tabBarStyle"
          }
        },
        "name": "tabBarStyle",
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
            "en-US": "tabPosition",
            "zh-CN": "tabPosition"
          }
        },
        "name": "tabPosition",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "bottom",
                "value": "bottom"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ],
            "options": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "bottom",
                "value": "bottom"
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              }
            ]
          },
          "initialValue": "top"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTabClick",
            "zh-CN": "onTabClick"
          }
        },
        "name": "onTabClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTabScroll",
            "zh-CN": "onTabScroll"
          }
        },
        "name": "onTabScroll",
        "setter": {
          "componentName": "FunctionSetter"
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
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "dropdownAriaLabel",
                      "zh-CN": "dropdownAriaLabel"
                    }
                  },
                  "name": "dropdownAriaLabel",
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
                      "en-US": "removeAriaLabel",
                      "zh-CN": "removeAriaLabel"
                    }
                  },
                  "name": "removeAriaLabel",
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
                      "en-US": "addAriaLabel",
                      "zh-CN": "addAriaLabel"
                    }
                  },
                  "name": "addAriaLabel",
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
            "en-US": "moreIcon",
            "zh-CN": "moreIcon"
          }
        },
        "name": "moreIcon",
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
            "en-US": "moreTransitionName",
            "zh-CN": "@private I"
          },
          "tip": "moreTransitionName | @private Internal usage. Not promise will rename in future"
        },
        "name": "moreTransitionName",
        "description": "@private Internal usage. Not promise will rename in future",
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
            "en-US": "popupClassName",
            "zh-CN": "popupClassName"
          }
        },
        "name": "popupClassName",
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
            "en-US": "indicatorSize",
            "zh-CN": "indicatorSize"
          }
        },
        "name": "indicatorSize",
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
                "componentName": "FunctionSetter"
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
    "title": "Tabs",
    "screenshot": "",
    "schema": {
      "componentName": "Tabs",
      "props": {}
    }
  }
];

export default {
  ...TabsMeta,
  snippets
};
