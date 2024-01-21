
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DefaultHeaderMeta: IPublicTypeComponentMetadata = {
  "componentName": "DefaultHeader",
  "title": "DefaultHeader",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "DefaultHeader",
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
            "en-US": "collapsed",
            "zh-CN": "collapsed"
          }
        },
        "name": "collapsed",
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
            "zh-CN": "onCollapse"
          }
        },
        "name": "onCollapse",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "logo",
            "zh-CN": "logo"
          }
        },
        "name": "logo",
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
            "zh-CN": "onMenuHeaderClick"
          }
        },
        "name": "onMenuHeaderClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuHeaderRender",
            "zh-CN": "menuHeaderRender"
          }
        },
        "name": "menuHeaderRender",
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
            "zh-CN": "collapsedButtonRender"
          }
        },
        "name": "collapsedButtonRender",
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
            "zh-CN": "siderWidth"
          }
        },
        "name": "siderWidth",
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
            "en-US": "matchMenuKeys",
            "zh-CN": "matchMenuKeys"
          }
        },
        "name": "matchMenuKeys",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "StringSetter",
              "isRequired": false,
              "initialValue": ""
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
            "en-US": "originCollapsed",
            "zh-CN": "originCollapsed"
          }
        },
        "name": "originCollapsed",
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
            "en-US": "menuRenderType",
            "zh-CN": "menuRenderType"
          }
        },
        "name": "menuRenderType",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "header",
                "value": "header"
              },
              {
                "label": "sider",
                "value": "sider"
              }
            ],
            "options": [
              {
                "label": "header",
                "value": "header"
              },
              {
                "label": "sider",
                "value": "sider"
              }
            ]
          },
          "initialValue": "header"
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
          "componentName": "FunctionSetter",
          "isRequired": false
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
    "title": "DefaultHeader",
    "screenshot": "",
    "schema": {
      "componentName": "DefaultHeader",
      "props": {}
    }
  }
];

export default {
  ...DefaultHeaderMeta,
  snippets
};
