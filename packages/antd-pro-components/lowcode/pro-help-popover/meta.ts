
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProHelpPopoverMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProHelpPopover",
  "title": "ProHelpPopover",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProHelpPopover",
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
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
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
            "en-US": "defaultVisible",
            "zh-CN": "@deprecate"
          },
          "tip": "defaultVisible | @deprecated Please use `defaultOpen` instead."
        },
        "name": "defaultVisible",
        "description": "@deprecated Please use `defaultOpen` instead.",
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
            "en-US": "onVisibleChange",
            "zh-CN": "@deprecate"
          },
          "tip": "onVisibleChange | @deprecated Please use `onOpenChange` instead."
        },
        "name": "onVisibleChange",
        "description": "@deprecated Please use `onOpenChange` instead.",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "afterVisibleChange",
            "zh-CN": "@deprecate"
          },
          "tip": "afterVisibleChange | @deprecated Please use `afterOpenChange` instead."
        },
        "name": "afterVisibleChange",
        "description": "@deprecated Please use `afterOpenChange` instead.",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "destroyTooltipOnHide",
            "zh-CN": "destroyTooltipOnHide"
          }
        },
        "name": "destroyTooltipOnHide",
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
                            "en-US": "keepParent",
                            "zh-CN": "keepParent"
                          }
                        },
                        "name": "keepParent",
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
            "en-US": "onPopupAlign",
            "zh-CN": "onPopupAlign"
          }
        },
        "name": "onPopupAlign",
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
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false
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
            "en-US": "fresh",
            "zh-CN": "Trigger wi"
          },
          "tip": "fresh | Trigger will memo content when close."
        },
        "name": "fresh",
        "description": "Trigger will memo content when close.",
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
            "en-US": "mouseLeaveDelay",
            "zh-CN": "mouseLeaveDelay"
          }
        },
        "name": "mouseLeaveDelay",
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
            "en-US": "mouseEnterDelay",
            "zh-CN": "mouseEnterDelay"
          }
        },
        "name": "mouseEnterDelay",
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
            "en-US": "trigger",
            "zh-CN": "trigger"
          }
        },
        "name": "trigger",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "SelectSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "click",
                          "value": "click"
                        },
                        {
                          "label": "hover",
                          "value": "hover"
                        },
                        {
                          "label": "focus",
                          "value": "focus"
                        },
                        {
                          "label": "contextMenu",
                          "value": "contextMenu"
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
                        },
                        {
                          "label": "focus",
                          "value": "focus"
                        },
                        {
                          "label": "contextMenu",
                          "value": "contextMenu"
                        }
                      ]
                    },
                    "initialValue": "click"
                  }
                },
                "initialValue": []
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "click",
                      "value": "click"
                    },
                    {
                      "label": "hover",
                      "value": "hover"
                    },
                    {
                      "label": "focus",
                      "value": "focus"
                    },
                    {
                      "label": "contextMenu",
                      "value": "contextMenu"
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
                    },
                    {
                      "label": "focus",
                      "value": "focus"
                    },
                    {
                      "label": "contextMenu",
                      "value": "contextMenu"
                    }
                  ]
                },
                "initialValue": "click"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "placement",
            "zh-CN": "placement"
          }
        },
        "name": "placement",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "right",
                "value": "right"
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
                "label": "top",
                "value": "top"
              },
              {
                "label": "topLeft",
                "value": "topLeft"
              },
              {
                "label": "topRight",
                "value": "topRight"
              },
              {
                "label": "bottomLeft",
                "value": "bottomLeft"
              },
              {
                "label": "bottomRight",
                "value": "bottomRight"
              },
              {
                "label": "leftTop",
                "value": "leftTop"
              },
              {
                "label": "leftBottom",
                "value": "leftBottom"
              },
              {
                "label": "rightTop",
                "value": "rightTop"
              },
              {
                "label": "rightBottom",
                "value": "rightBottom"
              }
            ],
            "options": [
              {
                "label": "right",
                "value": "right"
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
                "label": "top",
                "value": "top"
              },
              {
                "label": "topLeft",
                "value": "topLeft"
              },
              {
                "label": "topRight",
                "value": "topRight"
              },
              {
                "label": "bottomLeft",
                "value": "bottomLeft"
              },
              {
                "label": "bottomRight",
                "value": "bottomRight"
              },
              {
                "label": "leftTop",
                "value": "leftTop"
              },
              {
                "label": "leftBottom",
                "value": "leftBottom"
              },
              {
                "label": "rightTop",
                "value": "rightTop"
              },
              {
                "label": "rightBottom",
                "value": "rightBottom"
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
            "en-US": "transitionName",
            "zh-CN": "@deprecate"
          },
          "tip": "transitionName | @deprecated Use `motion` instead"
        },
        "name": "transitionName",
        "description": "@deprecated Use `motion` instead",
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
            "en-US": "animation",
            "zh-CN": "@deprecate"
          },
          "tip": "animation | @deprecated Use `motion` instead"
        },
        "name": "animation",
        "description": "@deprecated Use `motion` instead",
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
            "en-US": "motion",
            "zh-CN": "Config pop"
          },
          "tip": "motion | Config popup motion"
        },
        "name": "motion",
        "description": "Config popup motion",
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
            "en-US": "overlay",
            "zh-CN": "overlay"
          }
        },
        "name": "overlay",
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
            "en-US": "overlayStyle",
            "zh-CN": "overlayStyle"
          }
        },
        "name": "overlayStyle",
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
            "en-US": "overlayClassName",
            "zh-CN": "overlayClassName"
          }
        },
        "name": "overlayClassName",
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
            "en-US": "getTooltipContainer",
            "zh-CN": "getTooltipContainer"
          }
        },
        "name": "getTooltipContainer",
        "setter": {
          "componentName": "FunctionSetter"
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
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "points",
                      "zh-CN": "points"
                    }
                  },
                  "name": "points",
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
                      "en-US": "_experimental",
                      "zh-CN": "_experimental"
                    }
                  },
                  "name": "_experimental",
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
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                      "en-US": "targetOffset",
                      "zh-CN": "targetOffset"
                    }
                  },
                  "name": "targetOffset",
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
                      "en-US": "overflow",
                      "zh-CN": "overflow"
                    }
                  },
                  "name": "overflow",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "adjustX",
                                "zh-CN": "adjustX"
                              }
                            },
                            "name": "adjustX",
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
                                "en-US": "adjustY",
                                "zh-CN": "adjustY"
                              }
                            },
                            "name": "adjustY",
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
                                "en-US": "shiftX",
                                "zh-CN": "shiftX"
                              }
                            },
                            "name": "shiftX",
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
                                "en-US": "shiftY",
                                "zh-CN": "shiftY"
                              }
                            },
                            "name": "shiftY",
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
                                    "componentName": "BoolSetter",
                                    "isRequired": false,
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
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "autoArrow",
                      "zh-CN": "autoArrow"
                    }
                  },
                  "name": "autoArrow",
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
                      "en-US": "htmlRegion",
                      "zh-CN": "htmlRegion"
                    }
                  },
                  "name": "htmlRegion",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "visible",
                          "value": "visible"
                        },
                        {
                          "label": "scroll",
                          "value": "scroll"
                        },
                        {
                          "label": "visibleFirst",
                          "value": "visibleFirst"
                        }
                      ],
                      "options": [
                        {
                          "label": "visible",
                          "value": "visible"
                        },
                        {
                          "label": "scroll",
                          "value": "scroll"
                        },
                        {
                          "label": "visibleFirst",
                          "value": "visibleFirst"
                        }
                      ]
                    },
                    "initialValue": "visible"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "dynamicInset",
                      "zh-CN": "dynamicInset"
                    }
                  },
                  "name": "dynamicInset",
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
                      "en-US": "useCssRight",
                      "zh-CN": "useCssRight"
                    }
                  },
                  "name": "useCssRight",
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
                      "en-US": "useCssBottom",
                      "zh-CN": "useCssBottom"
                    }
                  },
                  "name": "useCssBottom",
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
                      "en-US": "useCssTransform",
                      "zh-CN": "useCssTransform"
                    }
                  },
                  "name": "useCssTransform",
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
                      "en-US": "ignoreShake",
                      "zh-CN": "ignoreShake"
                    }
                  },
                  "name": "ignoreShake",
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
            "en-US": "showArrow",
            "zh-CN": "showArrow"
          }
        },
        "name": "showArrow",
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
                            "en-US": "content",
                            "zh-CN": "content"
                          }
                        },
                        "name": "content",
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
            "en-US": "arrowContent",
            "zh-CN": "arrowContent"
          }
        },
        "name": "arrowContent",
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
            "en-US": "overlayInnerStyle",
            "zh-CN": "overlayInnerStyle"
          }
        },
        "name": "overlayInnerStyle",
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
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
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
            "en-US": "defaultOpen",
            "zh-CN": "defaultOpen"
          }
        },
        "name": "defaultOpen",
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
            "en-US": "openClassName",
            "zh-CN": "openClassName"
          }
        },
        "name": "openClassName",
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
            "en-US": "arrowPointAtCenter",
            "zh-CN": "@deprecate"
          },
          "tip": "arrowPointAtCenter | @deprecated Please use `arrow={{ pointAtCenter: true }}` instead."
        },
        "name": "arrowPointAtCenter",
        "description": "@deprecated Please use `arrow={{ pointAtCenter: true }}` instead.",
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
            "en-US": "arrow",
            "zh-CN": "arrow"
          }
        },
        "name": "arrow",
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
                            "en-US": "arrowPointAtCenter",
                            "zh-CN": "arrowPointAtCenter"
                          }
                        },
                        "name": "arrowPointAtCenter",
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
                            "en-US": "pointAtCenter",
                            "zh-CN": "pointAtCenter"
                          }
                        },
                        "name": "pointAtCenter",
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
            "en-US": "autoAdjustOverflow",
            "zh-CN": "autoAdjustOverflow"
          }
        },
        "name": "autoAdjustOverflow",
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
                            "en-US": "adjustX",
                            "zh-CN": "adjustX"
                          }
                        },
                        "name": "adjustX",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ],
                            "options": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ]
                          },
                          "initialValue": 0
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "adjustY",
                            "zh-CN": "adjustY"
                          }
                        },
                        "name": "adjustY",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ],
                            "options": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ]
                          },
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
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "textClassName",
            "zh-CN": "悬浮提示文字的 CS"
          },
          "tip": "textClassName | 悬浮提示文字的 CSS 类名"
        },
        "name": "textClassName",
        "description": "悬浮提示文字的 CSS 类名",
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
            "en-US": "popoverContextClassName",
            "zh-CN": "Popover 内容"
          },
          "tip": "popoverContextClassName | Popover 内容的 content 的 CSS 类名"
        },
        "name": "popoverContextClassName",
        "description": "Popover 内容的 content 的 CSS 类名",
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
            "en-US": "textStyle",
            "zh-CN": "悬浮提示文字的 CS"
          },
          "tip": "textStyle | 悬浮提示文字的 CSS 样式对象"
        },
        "name": "textStyle",
        "description": "悬浮提示文字的 CSS 样式对象",
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
            "en-US": "selectedKey",
            "zh-CN": "当前选中的帮助文档的"
          },
          "tip": "selectedKey | 当前选中的帮助文档的 key 值"
        },
        "name": "selectedKey",
        "description": "当前选中的帮助文档的 key 值",
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
            "en-US": "popoverProps",
            "zh-CN": "可选的悬浮提示 Po"
          },
          "tip": "popoverProps | 可选的悬浮提示 Popover 组件的 Props，用于自定义悬浮提示的样式和行为。"
        },
        "name": "popoverProps",
        "description": "可选的悬浮提示 Popover 组件的 Props，用于自定义悬浮提示的样式和行为。",
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
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProHelpPopover",
    "screenshot": "",
    "schema": {
      "componentName": "ProHelpPopover",
      "props": {}
    }
  }
];

export default {
  ...ProHelpPopoverMeta,
  snippets
};
