
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ProLayoutMeta: ComponentMetadata = {
  "componentName": "ProLayout",
  "title": "中台布局",
  "docUrl": "",
  "screenshot": "",
  group: '高级组件',
  category: '布局类',
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/antd-pro",
    "version": "1.0.0-rc.30",
    "exportName": "ProLayout",
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
            "en-US": "menu",
            "zh-CN": "菜单配置"
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
                      "zh-CN": "国际化"
                    }
                  },
                  "name": "locale",
                  "setter": {
                    "componentName": "BoolSetter",
                    
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
                    
                    "initialValue": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "defaultOpenAll",
                      "zh-CN": "菜单项打开"
                    }
                  },
                  "name": "defaultOpenAll",
                  "setter": {
                    "componentName": "BoolSetter",
                    
                    "initialValue": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "ignoreFlatMenu",
                      "zh-CN": "忽略折叠菜单"
                    }
                  },
                  "name": "ignoreFlatMenu",
                  "setter": {
                    "componentName": "BoolSetter",
                    
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
                          
                          "props": {}
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
                          "label": "sub",
                          "value": "sub"
                        },
                        {
                          "label": "group",
                          "value": "group"
                        }
                      ],
                      "options": [
                        {
                          "label": "sub",
                          "value": "sub"
                        },
                        {
                          "label": "group",
                          "value": "group"
                        }
                      ]
                    },
                    "initialValue": "sub"
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
            "en-US": "slot",
            "zh-CN": "slot"
          }
        },
        "name": "slot",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
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
                
                "initialValue": ""
              },

            ]
          }
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
                
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
                
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      
                      "props": {}
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
                            "en-US": "__@iterator",
                            "zh-CN": "__@iterator"
                          }
                        },
                        "name": "__@iterator",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      
                      "props": {}
                    }
                  }
                }
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
            "en-US": "prefixCls",
            "zh-CN": "prefixCls"
          }
        },
        "name": "prefixCls",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
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
            "en-US": "id",
            "zh-CN": "id"
          }
        },
        "name": "id",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
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
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
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
                
                "props": {}
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
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "inline",
                "value": "inline"
              },
              {
                "label": "vertical",
                "value": "vertical"
              }
            ],
            "options": [
              {
                "label": "horizontal",
                "value": "horizontal"
              },
              {
                "label": "inline",
                "value": "inline"
              },
              {
                "label": "vertical",
                "value": "vertical"
              }
            ]
          },
          "initialValue": "horizontal"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tabIndex",
            "zh-CN": "tabIndex"
          }
        },
        "name": "tabIndex",
        "setter": {
          "componentName": "NumberSetter",
          
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultValue",
            "zh-CN": "defaultValue"
          }
        },
        "name": "defaultValue",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    
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
            "en-US": "onMouseDown",
            "zh-CN": "onMouseDown"
          }
        },
        "name": "onMouseDown",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "onFocus",
            "zh-CN": "onFocus"
          }
        },
        "name": "onFocus",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBlur",
            "zh-CN": "onBlur"
          }
        },
        "name": "onBlur",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseUp",
            "zh-CN": "onMouseUp"
          }
        },
        "name": "onMouseUp",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseEnter",
            "zh-CN": "onMouseEnter"
          }
        },
        "name": "onMouseEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseLeave",
            "zh-CN": "onMouseLeave"
          }
        },
        "name": "onMouseLeave",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "onContextMenu",
            "zh-CN": "onContextMenu"
          }
        },
        "name": "onContextMenu",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyDown",
            "zh-CN": "onKeyDown"
          }
        },
        "name": "onKeyDown",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "role",
            "zh-CN": "role"
          }
        },
        "name": "role",
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
                      
                      "props": {}
                    }
                  }
                },
                
                "initialValue": {}
              },
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "article",
                      "value": "article"
                    },
                    {
                      "label": "button",
                      "value": "button"
                    },
                    {
                      "label": "dialog",
                      "value": "dialog"
                    },
                    {
                      "label": "figure",
                      "value": "figure"
                    },
                    {
                      "label": "form",
                      "value": "form"
                    },
                    {
                      "label": "img",
                      "value": "img"
                    },
                    {
                      "label": "link",
                      "value": "link"
                    },
                    {
                      "label": "main",
                      "value": "main"
                    },
                    {
                      "label": "menu",
                      "value": "menu"
                    },
                    {
                      "label": "menuitem",
                      "value": "menuitem"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "table",
                      "value": "table"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "list",
                      "value": "list"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
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
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "separator",
                      "value": "separator"
                    },
                    {
                      "label": "tree",
                      "value": "tree"
                    },
                    {
                      "label": "none",
                      "value": "none"
                    },
                    {
                      "label": "tooltip",
                      "value": "tooltip"
                    },
                    {
                      "label": "status",
                      "value": "status"
                    },
                    {
                      "label": "grid",
                      "value": "grid"
                    },
                    {
                      "label": "alert",
                      "value": "alert"
                    },
                    {
                      "label": "alertdialog",
                      "value": "alertdialog"
                    },
                    {
                      "label": "application",
                      "value": "application"
                    },
                    {
                      "label": "banner",
                      "value": "banner"
                    },
                    {
                      "label": "cell",
                      "value": "cell"
                    },
                    {
                      "label": "columnheader",
                      "value": "columnheader"
                    },
                    {
                      "label": "combobox",
                      "value": "combobox"
                    },
                    {
                      "label": "complementary",
                      "value": "complementary"
                    },
                    {
                      "label": "contentinfo",
                      "value": "contentinfo"
                    },
                    {
                      "label": "definition",
                      "value": "definition"
                    },
                    {
                      "label": "directory",
                      "value": "directory"
                    },
                    {
                      "label": "document",
                      "value": "document"
                    },
                    {
                      "label": "feed",
                      "value": "feed"
                    },
                    {
                      "label": "gridcell",
                      "value": "gridcell"
                    },
                    {
                      "label": "heading",
                      "value": "heading"
                    },
                    {
                      "label": "listbox",
                      "value": "listbox"
                    },
                    {
                      "label": "listitem",
                      "value": "listitem"
                    },
                    {
                      "label": "log",
                      "value": "log"
                    },
                    {
                      "label": "marquee",
                      "value": "marquee"
                    },
                    {
                      "label": "math",
                      "value": "math"
                    },
                    {
                      "label": "menubar",
                      "value": "menubar"
                    },
                    {
                      "label": "menuitemcheckbox",
                      "value": "menuitemcheckbox"
                    },
                    {
                      "label": "menuitemradio",
                      "value": "menuitemradio"
                    },
                    {
                      "label": "navigation",
                      "value": "navigation"
                    },
                    {
                      "label": "note",
                      "value": "note"
                    },
                    {
                      "label": "presentation",
                      "value": "presentation"
                    },
                    {
                      "label": "progressbar",
                      "value": "progressbar"
                    },
                    {
                      "label": "radiogroup",
                      "value": "radiogroup"
                    },
                    {
                      "label": "region",
                      "value": "region"
                    },
                    {
                      "label": "row",
                      "value": "row"
                    },
                    {
                      "label": "rowgroup",
                      "value": "rowgroup"
                    },
                    {
                      "label": "rowheader",
                      "value": "rowheader"
                    },
                    {
                      "label": "scrollbar",
                      "value": "scrollbar"
                    },
                    {
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "searchbox",
                      "value": "searchbox"
                    },
                    {
                      "label": "spinbutton",
                      "value": "spinbutton"
                    },
                    {
                      "label": "tab",
                      "value": "tab"
                    },
                    {
                      "label": "tablist",
                      "value": "tablist"
                    },
                    {
                      "label": "tabpanel",
                      "value": "tabpanel"
                    },
                    {
                      "label": "term",
                      "value": "term"
                    },
                    {
                      "label": "textbox",
                      "value": "textbox"
                    },
                    {
                      "label": "timer",
                      "value": "timer"
                    },
                    {
                      "label": "toolbar",
                      "value": "toolbar"
                    },
                    {
                      "label": "treegrid",
                      "value": "treegrid"
                    },
                    {
                      "label": "treeitem",
                      "value": "treeitem"
                    }
                  ],
                  "options": [
                    {
                      "label": "article",
                      "value": "article"
                    },
                    {
                      "label": "button",
                      "value": "button"
                    },
                    {
                      "label": "dialog",
                      "value": "dialog"
                    },
                    {
                      "label": "figure",
                      "value": "figure"
                    },
                    {
                      "label": "form",
                      "value": "form"
                    },
                    {
                      "label": "img",
                      "value": "img"
                    },
                    {
                      "label": "link",
                      "value": "link"
                    },
                    {
                      "label": "main",
                      "value": "main"
                    },
                    {
                      "label": "menu",
                      "value": "menu"
                    },
                    {
                      "label": "menuitem",
                      "value": "menuitem"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "table",
                      "value": "table"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "list",
                      "value": "list"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
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
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "separator",
                      "value": "separator"
                    },
                    {
                      "label": "tree",
                      "value": "tree"
                    },
                    {
                      "label": "none",
                      "value": "none"
                    },
                    {
                      "label": "tooltip",
                      "value": "tooltip"
                    },
                    {
                      "label": "status",
                      "value": "status"
                    },
                    {
                      "label": "grid",
                      "value": "grid"
                    },
                    {
                      "label": "alert",
                      "value": "alert"
                    },
                    {
                      "label": "alertdialog",
                      "value": "alertdialog"
                    },
                    {
                      "label": "application",
                      "value": "application"
                    },
                    {
                      "label": "banner",
                      "value": "banner"
                    },
                    {
                      "label": "cell",
                      "value": "cell"
                    },
                    {
                      "label": "columnheader",
                      "value": "columnheader"
                    },
                    {
                      "label": "combobox",
                      "value": "combobox"
                    },
                    {
                      "label": "complementary",
                      "value": "complementary"
                    },
                    {
                      "label": "contentinfo",
                      "value": "contentinfo"
                    },
                    {
                      "label": "definition",
                      "value": "definition"
                    },
                    {
                      "label": "directory",
                      "value": "directory"
                    },
                    {
                      "label": "document",
                      "value": "document"
                    },
                    {
                      "label": "feed",
                      "value": "feed"
                    },
                    {
                      "label": "gridcell",
                      "value": "gridcell"
                    },
                    {
                      "label": "heading",
                      "value": "heading"
                    },
                    {
                      "label": "listbox",
                      "value": "listbox"
                    },
                    {
                      "label": "listitem",
                      "value": "listitem"
                    },
                    {
                      "label": "log",
                      "value": "log"
                    },
                    {
                      "label": "marquee",
                      "value": "marquee"
                    },
                    {
                      "label": "math",
                      "value": "math"
                    },
                    {
                      "label": "menubar",
                      "value": "menubar"
                    },
                    {
                      "label": "menuitemcheckbox",
                      "value": "menuitemcheckbox"
                    },
                    {
                      "label": "menuitemradio",
                      "value": "menuitemradio"
                    },
                    {
                      "label": "navigation",
                      "value": "navigation"
                    },
                    {
                      "label": "note",
                      "value": "note"
                    },
                    {
                      "label": "presentation",
                      "value": "presentation"
                    },
                    {
                      "label": "progressbar",
                      "value": "progressbar"
                    },
                    {
                      "label": "radiogroup",
                      "value": "radiogroup"
                    },
                    {
                      "label": "region",
                      "value": "region"
                    },
                    {
                      "label": "row",
                      "value": "row"
                    },
                    {
                      "label": "rowgroup",
                      "value": "rowgroup"
                    },
                    {
                      "label": "rowheader",
                      "value": "rowheader"
                    },
                    {
                      "label": "scrollbar",
                      "value": "scrollbar"
                    },
                    {
                      "label": "search",
                      "value": "search"
                    },
                    {
                      "label": "searchbox",
                      "value": "searchbox"
                    },
                    {
                      "label": "spinbutton",
                      "value": "spinbutton"
                    },
                    {
                      "label": "tab",
                      "value": "tab"
                    },
                    {
                      "label": "tablist",
                      "value": "tablist"
                    },
                    {
                      "label": "tabpanel",
                      "value": "tabpanel"
                    },
                    {
                      "label": "term",
                      "value": "term"
                    },
                    {
                      "label": "textbox",
                      "value": "textbox"
                    },
                    {
                      "label": "timer",
                      "value": "timer"
                    },
                    {
                      "label": "toolbar",
                      "value": "toolbar"
                    },
                    {
                      "label": "treegrid",
                      "value": "treegrid"
                    },
                    {
                      "label": "treeitem",
                      "value": "treeitem"
                    }
                  ]
                },
                "initialValue": "article"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyUp",
            "zh-CN": "onKeyUp"
          }
        },
        "name": "onKeyUp",
        "setter": {
          "componentName": "FunctionSetter"
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
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultChecked",
            "zh-CN": "defaultChecked"
          }
        },
        "name": "defaultChecked",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyPress",
            "zh-CN": "@deprecate"
          },
          "tip": "onKeyPress | @deprecated"
        },
        "name": "onKeyPress",
        "description": "@deprecated",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "hidden",
            "zh-CN": "hidden"
          }
        },
        "name": "hidden",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
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
            "en-US": "suppressContentEditableWarning",
            "zh-CN": "suppressContentEditableWarning"
          }
        },
        "name": "suppressContentEditableWarning",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "suppressHydrationWarning",
            "zh-CN": "suppressHydrationWarning"
          }
        },
        "name": "suppressHydrationWarning",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "accessKey",
            "zh-CN": "accessKey"
          }
        },
        "name": "accessKey",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "contentEditable",
            "zh-CN": "contentEditable"
          }
        },
        "name": "contentEditable",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    }
                  ],
                  "options": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    },
                    {
                      "label": "inherit",
                      "value": "inherit"
                    }
                  ]
                },
                "initialValue": "true"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "contextMenu",
            "zh-CN": "contextMenu"
          }
        },
        "name": "contextMenu",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "draggable",
            "zh-CN": "draggable"
          }
        },
        "name": "draggable",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ],
                  "options": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ]
                },
                "initialValue": "true"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lang",
            "zh-CN": "lang"
          }
        },
        "name": "lang",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "spellCheck",
            "zh-CN": "spellCheck"
          }
        },
        "name": "spellCheck",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "BoolSetter",
                
                "initialValue": false
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ],
                  "options": [
                    {
                      "label": "true",
                      "value": "true"
                    },
                    {
                      "label": "false",
                      "value": "false"
                    }
                  ]
                },
                "initialValue": "true"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "translate",
            "zh-CN": "translate"
          }
        },
        "name": "translate",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "yes",
                "value": "yes"
              },
              {
                "label": "no",
                "value": "no"
              }
            ],
            "options": [
              {
                "label": "yes",
                "value": "yes"
              },
              {
                "label": "no",
                "value": "no"
              }
            ]
          },
          "initialValue": "yes"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "radioGroup",
            "zh-CN": "radioGroup"
          }
        },
        "name": "radioGroup",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "about",
            "zh-CN": "about"
          }
        },
        "name": "about",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "datatype",
            "zh-CN": "datatype"
          }
        },
        "name": "datatype",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inlist",
            "zh-CN": "inlist"
          }
        },
        "name": "inlist",
        "setter": {
          "componentName": "MixedSetter",
          
          "props": {}
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
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "property",
            "zh-CN": "property"
          }
        },
        "name": "property",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "resource",
            "zh-CN": "resource"
          }
        },
        "name": "resource",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "typeof",
            "zh-CN": "typeof"
          }
        },
        "name": "typeof",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "vocab",
            "zh-CN": "vocab"
          }
        },
        "name": "vocab",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoCapitalize",
            "zh-CN": "autoCapitalize"
          }
        },
        "name": "autoCapitalize",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoCorrect",
            "zh-CN": "autoCorrect"
          }
        },
        "name": "autoCorrect",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoSave",
            "zh-CN": "autoSave"
          }
        },
        "name": "autoSave",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemProp",
            "zh-CN": "itemProp"
          }
        },
        "name": "itemProp",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemScope",
            "zh-CN": "itemScope"
          }
        },
        "name": "itemScope",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemType",
            "zh-CN": "itemType"
          }
        },
        "name": "itemType",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemID",
            "zh-CN": "itemID"
          }
        },
        "name": "itemID",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemRef",
            "zh-CN": "itemRef"
          }
        },
        "name": "itemRef",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "results",
            "zh-CN": "results"
          }
        },
        "name": "results",
        "setter": {
          "componentName": "NumberSetter",
          
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "security",
            "zh-CN": "security"
          }
        },
        "name": "security",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "unselectable",
            "zh-CN": "unselectable"
          }
        },
        "name": "unselectable",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "off",
                "value": "off"
              },
              {
                "label": "on",
                "value": "on"
              }
            ],
            "options": [
              {
                "label": "off",
                "value": "off"
              },
              {
                "label": "on",
                "value": "on"
              }
            ]
          },
          "initialValue": "off"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inputMode",
            "zh-CN": "Hints at t"
          },
          "tip": "inputMode | Hints at the type of data that might be entered by the user while editing the element or its contents"
        },
        "name": "inputMode",
        "description": "Hints at the type of data that might be entered by the user while editing the element or its contents",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "text",
                "value": "text"
              },
              {
                "label": "none",
                "value": "none"
              },
              {
                "label": "search",
                "value": "search"
              },
              {
                "label": "tel",
                "value": "tel"
              },
              {
                "label": "url",
                "value": "url"
              },
              {
                "label": "email",
                "value": "email"
              },
              {
                "label": "numeric",
                "value": "numeric"
              },
              {
                "label": "decimal",
                "value": "decimal"
              }
            ],
            "options": [
              {
                "label": "text",
                "value": "text"
              },
              {
                "label": "none",
                "value": "none"
              },
              {
                "label": "search",
                "value": "search"
              },
              {
                "label": "tel",
                "value": "tel"
              },
              {
                "label": "url",
                "value": "url"
              },
              {
                "label": "email",
                "value": "email"
              },
              {
                "label": "numeric",
                "value": "numeric"
              },
              {
                "label": "decimal",
                "value": "decimal"
              }
            ]
          },
          "initialValue": "text"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "is",
            "zh-CN": "Specify th"
          },
          "tip": "is | Specify that a standard HTML element should behave like a defined custom built-in element"
        },
        "name": "is",
        "description": "Specify that a standard HTML element should behave like a defined custom built-in element",
        "setter": {
          "componentName": "StringSetter",
          
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCopy",
            "zh-CN": "onCopy"
          }
        },
        "name": "onCopy",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCopyCapture",
            "zh-CN": "onCopyCapture"
          }
        },
        "name": "onCopyCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCut",
            "zh-CN": "onCut"
          }
        },
        "name": "onCut",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCutCapture",
            "zh-CN": "onCutCapture"
          }
        },
        "name": "onCutCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPaste",
            "zh-CN": "onPaste"
          }
        },
        "name": "onPaste",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPasteCapture",
            "zh-CN": "onPasteCapture"
          }
        },
        "name": "onPasteCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionEnd",
            "zh-CN": "onCompositionEnd"
          }
        },
        "name": "onCompositionEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionEndCapture",
            "zh-CN": "onCompositionEndCapture"
          }
        },
        "name": "onCompositionEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionStart",
            "zh-CN": "onCompositionStart"
          }
        },
        "name": "onCompositionStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionStartCapture",
            "zh-CN": "onCompositionStartCapture"
          }
        },
        "name": "onCompositionStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionUpdate",
            "zh-CN": "onCompositionUpdate"
          }
        },
        "name": "onCompositionUpdate",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCompositionUpdateCapture",
            "zh-CN": "onCompositionUpdateCapture"
          }
        },
        "name": "onCompositionUpdateCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onFocusCapture",
            "zh-CN": "onFocusCapture"
          }
        },
        "name": "onFocusCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBlurCapture",
            "zh-CN": "onBlurCapture"
          }
        },
        "name": "onBlurCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onChangeCapture",
            "zh-CN": "onChangeCapture"
          }
        },
        "name": "onChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBeforeInput",
            "zh-CN": "onBeforeInput"
          }
        },
        "name": "onBeforeInput",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onBeforeInputCapture",
            "zh-CN": "onBeforeInputCapture"
          }
        },
        "name": "onBeforeInputCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInput",
            "zh-CN": "onInput"
          }
        },
        "name": "onInput",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInputCapture",
            "zh-CN": "onInputCapture"
          }
        },
        "name": "onInputCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onResetCapture",
            "zh-CN": "onResetCapture"
          }
        },
        "name": "onResetCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSubmitCapture",
            "zh-CN": "onSubmitCapture"
          }
        },
        "name": "onSubmitCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInvalid",
            "zh-CN": "onInvalid"
          }
        },
        "name": "onInvalid",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInvalidCapture",
            "zh-CN": "onInvalidCapture"
          }
        },
        "name": "onInvalidCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoad",
            "zh-CN": "onLoad"
          }
        },
        "name": "onLoad",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadCapture",
            "zh-CN": "onLoadCapture"
          }
        },
        "name": "onLoadCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onError",
            "zh-CN": "onError"
          }
        },
        "name": "onError",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onErrorCapture",
            "zh-CN": "onErrorCapture"
          }
        },
        "name": "onErrorCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyDownCapture",
            "zh-CN": "onKeyDownCapture"
          }
        },
        "name": "onKeyDownCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyPressCapture",
            "zh-CN": "@deprecate"
          },
          "tip": "onKeyPressCapture | @deprecated"
        },
        "name": "onKeyPressCapture",
        "description": "@deprecated",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onKeyUpCapture",
            "zh-CN": "onKeyUpCapture"
          }
        },
        "name": "onKeyUpCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAbort",
            "zh-CN": "onAbort"
          }
        },
        "name": "onAbort",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAbortCapture",
            "zh-CN": "onAbortCapture"
          }
        },
        "name": "onAbortCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlay",
            "zh-CN": "onCanPlay"
          }
        },
        "name": "onCanPlay",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlayCapture",
            "zh-CN": "onCanPlayCapture"
          }
        },
        "name": "onCanPlayCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlayThrough",
            "zh-CN": "onCanPlayThrough"
          }
        },
        "name": "onCanPlayThrough",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onCanPlayThroughCapture",
            "zh-CN": "onCanPlayThroughCapture"
          }
        },
        "name": "onCanPlayThroughCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDurationChange",
            "zh-CN": "onDurationChange"
          }
        },
        "name": "onDurationChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDurationChangeCapture",
            "zh-CN": "onDurationChangeCapture"
          }
        },
        "name": "onDurationChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEmptied",
            "zh-CN": "onEmptied"
          }
        },
        "name": "onEmptied",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEmptiedCapture",
            "zh-CN": "onEmptiedCapture"
          }
        },
        "name": "onEmptiedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEncrypted",
            "zh-CN": "onEncrypted"
          }
        },
        "name": "onEncrypted",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEncryptedCapture",
            "zh-CN": "onEncryptedCapture"
          }
        },
        "name": "onEncryptedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEnded",
            "zh-CN": "onEnded"
          }
        },
        "name": "onEnded",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onEndedCapture",
            "zh-CN": "onEndedCapture"
          }
        },
        "name": "onEndedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedData",
            "zh-CN": "onLoadedData"
          }
        },
        "name": "onLoadedData",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedDataCapture",
            "zh-CN": "onLoadedDataCapture"
          }
        },
        "name": "onLoadedDataCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedMetadata",
            "zh-CN": "onLoadedMetadata"
          }
        },
        "name": "onLoadedMetadata",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadedMetadataCapture",
            "zh-CN": "onLoadedMetadataCapture"
          }
        },
        "name": "onLoadedMetadataCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadStart",
            "zh-CN": "onLoadStart"
          }
        },
        "name": "onLoadStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadStartCapture",
            "zh-CN": "onLoadStartCapture"
          }
        },
        "name": "onLoadStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPause",
            "zh-CN": "onPause"
          }
        },
        "name": "onPause",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPauseCapture",
            "zh-CN": "onPauseCapture"
          }
        },
        "name": "onPauseCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlay",
            "zh-CN": "onPlay"
          }
        },
        "name": "onPlay",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlayCapture",
            "zh-CN": "onPlayCapture"
          }
        },
        "name": "onPlayCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlaying",
            "zh-CN": "onPlaying"
          }
        },
        "name": "onPlaying",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPlayingCapture",
            "zh-CN": "onPlayingCapture"
          }
        },
        "name": "onPlayingCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onProgress",
            "zh-CN": "onProgress"
          }
        },
        "name": "onProgress",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onProgressCapture",
            "zh-CN": "onProgressCapture"
          }
        },
        "name": "onProgressCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onRateChange",
            "zh-CN": "onRateChange"
          }
        },
        "name": "onRateChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onRateChangeCapture",
            "zh-CN": "onRateChangeCapture"
          }
        },
        "name": "onRateChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeeked",
            "zh-CN": "onSeeked"
          }
        },
        "name": "onSeeked",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeekedCapture",
            "zh-CN": "onSeekedCapture"
          }
        },
        "name": "onSeekedCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeeking",
            "zh-CN": "onSeeking"
          }
        },
        "name": "onSeeking",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSeekingCapture",
            "zh-CN": "onSeekingCapture"
          }
        },
        "name": "onSeekingCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onStalled",
            "zh-CN": "onStalled"
          }
        },
        "name": "onStalled",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onStalledCapture",
            "zh-CN": "onStalledCapture"
          }
        },
        "name": "onStalledCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSuspend",
            "zh-CN": "onSuspend"
          }
        },
        "name": "onSuspend",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSuspendCapture",
            "zh-CN": "onSuspendCapture"
          }
        },
        "name": "onSuspendCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTimeUpdate",
            "zh-CN": "onTimeUpdate"
          }
        },
        "name": "onTimeUpdate",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTimeUpdateCapture",
            "zh-CN": "onTimeUpdateCapture"
          }
        },
        "name": "onTimeUpdateCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onVolumeChange",
            "zh-CN": "onVolumeChange"
          }
        },
        "name": "onVolumeChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onVolumeChangeCapture",
            "zh-CN": "onVolumeChangeCapture"
          }
        },
        "name": "onVolumeChangeCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWaiting",
            "zh-CN": "onWaiting"
          }
        },
        "name": "onWaiting",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWaitingCapture",
            "zh-CN": "onWaitingCapture"
          }
        },
        "name": "onWaitingCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAuxClick",
            "zh-CN": "onAuxClick"
          }
        },
        "name": "onAuxClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAuxClickCapture",
            "zh-CN": "onAuxClickCapture"
          }
        },
        "name": "onAuxClickCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClickCapture",
            "zh-CN": "onClickCapture"
          }
        },
        "name": "onClickCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onContextMenuCapture",
            "zh-CN": "onContextMenuCapture"
          }
        },
        "name": "onContextMenuCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDoubleClick",
            "zh-CN": "onDoubleClick"
          }
        },
        "name": "onDoubleClick",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDoubleClickCapture",
            "zh-CN": "onDoubleClickCapture"
          }
        },
        "name": "onDoubleClickCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDrag",
            "zh-CN": "onDrag"
          }
        },
        "name": "onDrag",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragCapture",
            "zh-CN": "onDragCapture"
          }
        },
        "name": "onDragCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEnd",
            "zh-CN": "onDragEnd"
          }
        },
        "name": "onDragEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEndCapture",
            "zh-CN": "onDragEndCapture"
          }
        },
        "name": "onDragEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEnter",
            "zh-CN": "onDragEnter"
          }
        },
        "name": "onDragEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragEnterCapture",
            "zh-CN": "onDragEnterCapture"
          }
        },
        "name": "onDragEnterCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragExit",
            "zh-CN": "onDragExit"
          }
        },
        "name": "onDragExit",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragExitCapture",
            "zh-CN": "onDragExitCapture"
          }
        },
        "name": "onDragExitCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragLeave",
            "zh-CN": "onDragLeave"
          }
        },
        "name": "onDragLeave",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragLeaveCapture",
            "zh-CN": "onDragLeaveCapture"
          }
        },
        "name": "onDragLeaveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragOver",
            "zh-CN": "onDragOver"
          }
        },
        "name": "onDragOver",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragOverCapture",
            "zh-CN": "onDragOverCapture"
          }
        },
        "name": "onDragOverCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragStart",
            "zh-CN": "onDragStart"
          }
        },
        "name": "onDragStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDragStartCapture",
            "zh-CN": "onDragStartCapture"
          }
        },
        "name": "onDragStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDrop",
            "zh-CN": "onDrop"
          }
        },
        "name": "onDrop",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDropCapture",
            "zh-CN": "onDropCapture"
          }
        },
        "name": "onDropCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseDownCapture",
            "zh-CN": "onMouseDownCapture"
          }
        },
        "name": "onMouseDownCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseMove",
            "zh-CN": "onMouseMove"
          }
        },
        "name": "onMouseMove",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseMoveCapture",
            "zh-CN": "onMouseMoveCapture"
          }
        },
        "name": "onMouseMoveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOut",
            "zh-CN": "onMouseOut"
          }
        },
        "name": "onMouseOut",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOutCapture",
            "zh-CN": "onMouseOutCapture"
          }
        },
        "name": "onMouseOutCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOver",
            "zh-CN": "onMouseOver"
          }
        },
        "name": "onMouseOver",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseOverCapture",
            "zh-CN": "onMouseOverCapture"
          }
        },
        "name": "onMouseOverCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMouseUpCapture",
            "zh-CN": "onMouseUpCapture"
          }
        },
        "name": "onMouseUpCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSelectCapture",
            "zh-CN": "onSelectCapture"
          }
        },
        "name": "onSelectCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchCancel",
            "zh-CN": "onTouchCancel"
          }
        },
        "name": "onTouchCancel",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchCancelCapture",
            "zh-CN": "onTouchCancelCapture"
          }
        },
        "name": "onTouchCancelCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchEnd",
            "zh-CN": "onTouchEnd"
          }
        },
        "name": "onTouchEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchEndCapture",
            "zh-CN": "onTouchEndCapture"
          }
        },
        "name": "onTouchEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchMove",
            "zh-CN": "onTouchMove"
          }
        },
        "name": "onTouchMove",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchMoveCapture",
            "zh-CN": "onTouchMoveCapture"
          }
        },
        "name": "onTouchMoveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchStart",
            "zh-CN": "onTouchStart"
          }
        },
        "name": "onTouchStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTouchStartCapture",
            "zh-CN": "onTouchStartCapture"
          }
        },
        "name": "onTouchStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerDown",
            "zh-CN": "onPointerDown"
          }
        },
        "name": "onPointerDown",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerDownCapture",
            "zh-CN": "onPointerDownCapture"
          }
        },
        "name": "onPointerDownCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerMove",
            "zh-CN": "onPointerMove"
          }
        },
        "name": "onPointerMove",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerMoveCapture",
            "zh-CN": "onPointerMoveCapture"
          }
        },
        "name": "onPointerMoveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerUp",
            "zh-CN": "onPointerUp"
          }
        },
        "name": "onPointerUp",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerUpCapture",
            "zh-CN": "onPointerUpCapture"
          }
        },
        "name": "onPointerUpCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerCancel",
            "zh-CN": "onPointerCancel"
          }
        },
        "name": "onPointerCancel",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerCancelCapture",
            "zh-CN": "onPointerCancelCapture"
          }
        },
        "name": "onPointerCancelCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerEnter",
            "zh-CN": "onPointerEnter"
          }
        },
        "name": "onPointerEnter",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerEnterCapture",
            "zh-CN": "onPointerEnterCapture"
          }
        },
        "name": "onPointerEnterCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerLeave",
            "zh-CN": "onPointerLeave"
          }
        },
        "name": "onPointerLeave",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerLeaveCapture",
            "zh-CN": "onPointerLeaveCapture"
          }
        },
        "name": "onPointerLeaveCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOver",
            "zh-CN": "onPointerOver"
          }
        },
        "name": "onPointerOver",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOverCapture",
            "zh-CN": "onPointerOverCapture"
          }
        },
        "name": "onPointerOverCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOut",
            "zh-CN": "onPointerOut"
          }
        },
        "name": "onPointerOut",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPointerOutCapture",
            "zh-CN": "onPointerOutCapture"
          }
        },
        "name": "onPointerOutCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onGotPointerCapture",
            "zh-CN": "onGotPointerCapture"
          }
        },
        "name": "onGotPointerCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onGotPointerCaptureCapture",
            "zh-CN": "onGotPointerCaptureCapture"
          }
        },
        "name": "onGotPointerCaptureCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLostPointerCapture",
            "zh-CN": "onLostPointerCapture"
          }
        },
        "name": "onLostPointerCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLostPointerCaptureCapture",
            "zh-CN": "onLostPointerCaptureCapture"
          }
        },
        "name": "onLostPointerCaptureCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onScroll",
            "zh-CN": "onScroll"
          }
        },
        "name": "onScroll",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onScrollCapture",
            "zh-CN": "onScrollCapture"
          }
        },
        "name": "onScrollCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWheel",
            "zh-CN": "onWheel"
          }
        },
        "name": "onWheel",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onWheelCapture",
            "zh-CN": "onWheelCapture"
          }
        },
        "name": "onWheelCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationStart",
            "zh-CN": "onAnimationStart"
          }
        },
        "name": "onAnimationStart",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationStartCapture",
            "zh-CN": "onAnimationStartCapture"
          }
        },
        "name": "onAnimationStartCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationEnd",
            "zh-CN": "onAnimationEnd"
          }
        },
        "name": "onAnimationEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationEndCapture",
            "zh-CN": "onAnimationEndCapture"
          }
        },
        "name": "onAnimationEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationIteration",
            "zh-CN": "onAnimationIteration"
          }
        },
        "name": "onAnimationIteration",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onAnimationIterationCapture",
            "zh-CN": "onAnimationIterationCapture"
          }
        },
        "name": "onAnimationIterationCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTransitionEnd",
            "zh-CN": "onTransitionEnd"
          }
        },
        "name": "onTransitionEnd",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onTransitionEndCapture",
            "zh-CN": "onTransitionEndCapture"
          }
        },
        "name": "onTransitionEndCapture",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "layout",
            "zh-CN": "菜单模式"
          },
          "tip": "layout 的菜单模式,side：右侧导航，top：顶部导航"
        },
        "name": "layout",
        "description": "@name layout 的布局方式",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "options": [
              {
                "label": "side",
                "value": "side"
              },
              {
                "label": "右侧导航",
                "value": "top"
              },
              {
                "label": "顶部导航",
                "value": "mix"
              },
            ]
          }

          
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
            "en-US": "defaultCollapsed",
            "zh-CN": "默认的是否展开，会受"
          },
          "tip": "defaultCollapsed | 默认的是否展开，会受到 breakpoint 的影响"
        },
        "name": "defaultCollapsed",
        "description": "默认的是否展开，会受到 breakpoint 的影响",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
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
                      "zh-CN": "路径名称"
                    }
                  },
                  "name": "pathname",
                  "setter": {
                    "componentName": "StringSetter",
                    
                    "initialValue": ""
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                
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
            "en-US": "contentWidth",
            "zh-CN": "内容模式"
          },
          "tip": "layout 的内容模式,Fluid：自适应，Fixed：定宽 1200px"
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
                
                "props": {}
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
            "en-US": "fixedHeader",
            "zh-CN": "固定header顶部"
          },
          "tip": "是否固定 header 到顶部	"
        },
        "name": "fixedHeader",
        "description": "@name sticky header",
        "setter": {
          "componentName": "BoolSetter",
          
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
          
          "initialValue": ""
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
                                "en-US": "danger",
                                "zh-CN": "danger"
                              }
                            },
                            "name": "danger",
                            "setter": {
                              "componentName": "BoolSetter",
                              
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
                              
                              "initialValue": ""
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          
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
                                                    "en-US": "danger",
                                                    "zh-CN": "danger"
                                                  }
                                                },
                                                "name": "danger",
                                                "setter": {
                                                  "componentName": "BoolSetter",
                                                  
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
                                                  
                                                  "initialValue": ""
                                                }
                                              }
                                            ],
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
                                              "props": {}
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
                                              "props": {}
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
                                                    "en-US": "children",
                                                    "zh-CN": "children"
                                                  }
                                                },
                                                "name": "children",
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
                                                                        "en-US": "danger",
                                                                        "zh-CN": "danger"
                                                                      }
                                                                    },
                                                                    "name": "danger",
                                                                    "setter": {
                                                                      "componentName": "BoolSetter",
                                                                      
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
                                                                      
                                                                      "initialValue": ""
                                                                    }
                                                                  }
                                                                ],
                                                                "extraSetter": {
                                                                  "componentName": "MixedSetter",
                                                                  
                                                                  "props": {}
                                                                }
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "componentName": "ObjectSetter",
                                                            "props": {
                                                              "config": {
                                                                "extraSetter": {
                                                                  "componentName": "MixedSetter",
                                                                  
                                                                  "props": {}
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
                                                                        "en-US": "dashed",
                                                                        "zh-CN": "dashed"
                                                                      }
                                                                    },
                                                                    "name": "dashed",
                                                                    "setter": {
                                                                      "componentName": "BoolSetter",
                                                                      
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
                                                                            
                                                                            "initialValue": ""
                                                                          },
                                                                          {
                                                                            "componentName": "NumberSetter",
                                                                            
                                                                            "initialValue": 0
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                ],
                                                                "extraSetter": {
                                                                  "componentName": "MixedSetter",
                                                                  
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
                                                        
                                                        "initialValue": ""
                                                      },
                                                      {
                                                        "componentName": "NumberSetter",
                                                        
                                                        "initialValue": 0
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            ],
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
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
                                                    "en-US": "dashed",
                                                    "zh-CN": "dashed"
                                                  }
                                                },
                                                "name": "dashed",
                                                "setter": {
                                                  "componentName": "BoolSetter",
                                                  
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
                                                        
                                                        "initialValue": ""
                                                      },
                                                      {
                                                        "componentName": "NumberSetter",
                                                        
                                                        "initialValue": 0
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            ],
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
                                              "props": {}
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              "isRequired": true,
                              "initialValue": []
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          
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
                                "en-US": "children",
                                "zh-CN": "children"
                              }
                            },
                            "name": "children",
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
                                                    "en-US": "danger",
                                                    "zh-CN": "danger"
                                                  }
                                                },
                                                "name": "danger",
                                                "setter": {
                                                  "componentName": "BoolSetter",
                                                  
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
                                                  
                                                  "initialValue": ""
                                                }
                                              }
                                            ],
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
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
                                                                        "en-US": "danger",
                                                                        "zh-CN": "danger"
                                                                      }
                                                                    },
                                                                    "name": "danger",
                                                                    "setter": {
                                                                      "componentName": "BoolSetter",
                                                                      
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
                                                                      
                                                                      "initialValue": ""
                                                                    }
                                                                  }
                                                                ],
                                                                "extraSetter": {
                                                                  "componentName": "MixedSetter",
                                                                  
                                                                  "props": {}
                                                                }
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "componentName": "ObjectSetter",
                                                            "props": {
                                                              "config": {
                                                                "extraSetter": {
                                                                  "componentName": "MixedSetter",
                                                                  
                                                                  "props": {}
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
                                                                        "en-US": "dashed",
                                                                        "zh-CN": "dashed"
                                                                      }
                                                                    },
                                                                    "name": "dashed",
                                                                    "setter": {
                                                                      "componentName": "BoolSetter",
                                                                      
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
                                                                            
                                                                            "initialValue": ""
                                                                          },
                                                                          {
                                                                            "componentName": "NumberSetter",
                                                                            
                                                                            "initialValue": 0
                                                                          }
                                                                        ]
                                                                      }
                                                                    }
                                                                  }
                                                                ],
                                                                "extraSetter": {
                                                                  "componentName": "MixedSetter",
                                                                  
                                                                  "props": {}
                                                                }
                                                              }
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  },
                                                  "isRequired": true,
                                                  "initialValue": []
                                                }
                                              }
                                            ],
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
                                              "props": {}
                                            }
                                          }
                                        }
                                      },
                                      {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
                                              "props": {}
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
                                                    "en-US": "dashed",
                                                    "zh-CN": "dashed"
                                                  }
                                                },
                                                "name": "dashed",
                                                "setter": {
                                                  "componentName": "BoolSetter",
                                                  
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
                                                        
                                                        "initialValue": ""
                                                      },
                                                      {
                                                        "componentName": "NumberSetter",
                                                        
                                                        "initialValue": 0
                                                      }
                                                    ]
                                                  }
                                                }
                                              }
                                            ],
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              
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
                                    
                                    "initialValue": ""
                                  },
                                  {
                                    "componentName": "NumberSetter",
                                    
                                    "initialValue": 0
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          
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
                                "en-US": "dashed",
                                "zh-CN": "dashed"
                              }
                            },
                            "name": "dashed",
                            "setter": {
                              "componentName": "BoolSetter",
                              
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
                                    
                                    "initialValue": ""
                                  },
                                  {
                                    "componentName": "NumberSetter",
                                    
                                    "initialValue": 0
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          
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
                
                "props": {}
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
            "en-US": "fixSiderbar",
            "zh-CN": "固定导航"
          },
          "tip": "是否固定导航	"
        },
        "name": "fixSiderbar",
        "description": "@name sticky siderbar",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "iconfontUrl",
            "zh-CN": "Your custo"
          },
          "tip": "使用 IconFont 的图标配置	"
        },
        "name": "iconfontUrl",
        "description": "Your custom iconfont Symbol script Url eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js",
        "setter": {
          "componentName": "StringSetter",
          
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
                
                "props": {}
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
                    
                    "initialValue": ""
                  }
                },
                "initialValue": []
              },

            ]
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
          
          "initialValue": ""
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
            "en-US": "inlineIndent",
            "zh-CN": "inlineIndent"
          }
        },
        "name": "inlineIndent",
        "setter": {
          "componentName": "NumberSetter",
          
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
                
                "props": {}
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
            "en-US": "subMenuOpenDelay",
            "zh-CN": "subMenuOpenDelay"
          }
        },
        "name": "subMenuOpenDelay",
        "setter": {
          "componentName": "NumberSetter",
          
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
                
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
                
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      
                      "props": {}
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
                            "en-US": "__@iterator",
                            "zh-CN": "__@iterator"
                          }
                        },
                        "name": "__@iterator",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      
                      "props": {}
                    }
                  }
                }
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
            "zh-CN": "路由信息"
          }
        },
        "name": "route",
        "setter": {
          "componentName": "JsonSetter",
          
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
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuData",
            "zh-CN": "菜单数据"
          }
        },
        "name": "menuData",
        "setter": {
          "componentName": "JsonSetter",

          "initialValue": []
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
                                          "en-US": "danger",
                                          "zh-CN": "danger"
                                        }
                                      },
                                      "name": "danger",
                                      "setter": {
                                        "componentName": "BoolSetter",
                                        
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
                                        
                                        "initialValue": ""
                                      }
                                    }
                                  ],
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    
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
                                                              "en-US": "danger",
                                                              "zh-CN": "danger"
                                                            }
                                                          },
                                                          "name": "danger",
                                                          "setter": {
                                                            "componentName": "BoolSetter",
                                                            
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
                                                            
                                                            "initialValue": ""
                                                          }
                                                        }
                                                      ],
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
                                                        "props": {}
                                                      }
                                                    }
                                                  }
                                                },
                                                {
                                                  "componentName": "ObjectSetter",
                                                  "props": {
                                                    "config": {
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
                                                        "props": {}
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
                                                              "en-US": "children",
                                                              "zh-CN": "children"
                                                            }
                                                          },
                                                          "name": "children",
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
                                                                                  "en-US": "danger",
                                                                                  "zh-CN": "danger"
                                                                                }
                                                                              },
                                                                              "name": "danger",
                                                                              "setter": {
                                                                                "componentName": "BoolSetter",
                                                                                
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
                                                                                
                                                                                "initialValue": ""
                                                                              }
                                                                            }
                                                                          ],
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            
                                                                            "props": {}
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    {
                                                                      "componentName": "ObjectSetter",
                                                                      "props": {
                                                                        "config": {
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            
                                                                            "props": {}
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
                                                                                  "en-US": "dashed",
                                                                                  "zh-CN": "dashed"
                                                                                }
                                                                              },
                                                                              "name": "dashed",
                                                                              "setter": {
                                                                                "componentName": "BoolSetter",
                                                                                
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
                                                                                      
                                                                                      "initialValue": ""
                                                                                    },
                                                                                    {
                                                                                      "componentName": "NumberSetter",
                                                                                      
                                                                                      "initialValue": 0
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              }
                                                                            }
                                                                          ],
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            
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
                                                                  
                                                                  "initialValue": ""
                                                                },
                                                                {
                                                                  "componentName": "NumberSetter",
                                                                  
                                                                  "initialValue": 0
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
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
                                                              "en-US": "dashed",
                                                              "zh-CN": "dashed"
                                                            }
                                                          },
                                                          "name": "dashed",
                                                          "setter": {
                                                            "componentName": "BoolSetter",
                                                            
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
                                                                  
                                                                  "initialValue": ""
                                                                },
                                                                {
                                                                  "componentName": "NumberSetter",
                                                                  
                                                                  "initialValue": 0
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
                                                        "props": {}
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
                                            }
                                          }
                                        },
                                        "isRequired": true,
                                        "initialValue": []
                                      }
                                    }
                                  ],
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    
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
                                          "en-US": "children",
                                          "zh-CN": "children"
                                        }
                                      },
                                      "name": "children",
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
                                                              "en-US": "danger",
                                                              "zh-CN": "danger"
                                                            }
                                                          },
                                                          "name": "danger",
                                                          "setter": {
                                                            "componentName": "BoolSetter",
                                                            
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
                                                            
                                                            "initialValue": ""
                                                          }
                                                        }
                                                      ],
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
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
                                                                                  "en-US": "danger",
                                                                                  "zh-CN": "danger"
                                                                                }
                                                                              },
                                                                              "name": "danger",
                                                                              "setter": {
                                                                                "componentName": "BoolSetter",
                                                                                
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
                                                                                
                                                                                "initialValue": ""
                                                                              }
                                                                            }
                                                                          ],
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            
                                                                            "props": {}
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    {
                                                                      "componentName": "ObjectSetter",
                                                                      "props": {
                                                                        "config": {
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            
                                                                            "props": {}
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
                                                                                  "en-US": "dashed",
                                                                                  "zh-CN": "dashed"
                                                                                }
                                                                              },
                                                                              "name": "dashed",
                                                                              "setter": {
                                                                                "componentName": "BoolSetter",
                                                                                
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
                                                                                      
                                                                                      "initialValue": ""
                                                                                    },
                                                                                    {
                                                                                      "componentName": "NumberSetter",
                                                                                      
                                                                                      "initialValue": 0
                                                                                    }
                                                                                  ]
                                                                                }
                                                                              }
                                                                            }
                                                                          ],
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            
                                                                            "props": {}
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  ]
                                                                }
                                                              }
                                                            },
                                                            "isRequired": true,
                                                            "initialValue": []
                                                          }
                                                        }
                                                      ],
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
                                                        "props": {}
                                                      }
                                                    }
                                                  }
                                                },
                                                {
                                                  "componentName": "ObjectSetter",
                                                  "props": {
                                                    "config": {
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
                                                        "props": {}
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
                                                              "en-US": "dashed",
                                                              "zh-CN": "dashed"
                                                            }
                                                          },
                                                          "name": "dashed",
                                                          "setter": {
                                                            "componentName": "BoolSetter",
                                                            
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
                                                                  
                                                                  "initialValue": ""
                                                                },
                                                                {
                                                                  "componentName": "NumberSetter",
                                                                  
                                                                  "initialValue": 0
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        
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
                                              
                                              "initialValue": ""
                                            },
                                            {
                                              "componentName": "NumberSetter",
                                              
                                              "initialValue": 0
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    
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
                                          "en-US": "dashed",
                                          "zh-CN": "dashed"
                                        }
                                      },
                                      "name": "dashed",
                                      "setter": {
                                        "componentName": "BoolSetter",
                                        
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
                                              
                                              "initialValue": ""
                                            },
                                            {
                                              "componentName": "NumberSetter",
                                              
                                              "initialValue": 0
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  ],
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    
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
            "en-US": "menuHeaderRender",
            "zh-CN": "header菜单"
          },
          "tip": "渲染 logo 和 title, 优先级比 headerTitleRender 更高	"
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

            ]
          }
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
                
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                
                "initialValue": 0
              },
              {
                "componentName": "BoolSetter",
                
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      
                      "props": {}
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
                            "en-US": "__@iterator",
                            "zh-CN": "__@iterator"
                          }
                        },
                        "name": "__@iterator",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": true
                        }
                      }
                    ],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      
                      "props": {}
                    }
                  }
                }
              },
              {
                "componentName": "SlotSetter",
                "props": {
                  "mode": "element"
                },
                
                "initialValue": {
                  "type": "JSSlot",
                  "value": []
                }
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
                "componentName": "FunctionSetter"
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
            "en-US": "appList",
            "zh-CN": "左上列表"
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
                          "zh-CN": "标题"
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
                      "name": "说明",
                      "setter": {
                        "componentName": "SlotSetter",
                        "props": {
                          "mode": "node"
                        },
                        
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
                      "name": "图标",
                      "setter": {
                        "componentName": "MixedSetter",
                        "props": {
                          "setters": [
                            {
                              "componentName": "StringSetter",
                              
                              "initialValue": ""
                            },
                            {
                              "componentName": "NumberSetter",
                              
                              "initialValue": 0
                            },
                            {
                              "componentName": "BoolSetter",
                              
                              "initialValue": false
                            },
                            {
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    
                                    "props": {}
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
                                          "en-US": "__@iterator",
                                          "zh-CN": "__@iterator"
                                        }
                                      },
                                      "name": "__@iterator",
                                      "setter": {
                                        "componentName": "FunctionSetter",
                                        "isRequired": true
                                      }
                                    }
                                  ],
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    
                                    "props": {}
                                  }
                                }
                              }
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
                          "zh-CN": "地址"
                        }
                      },
                      "name": "url",
                      "setter": {
                        "componentName": "StringSetter",
                        
                        "initialValue": ""
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "target",
                          "zh-CN": "目标"
                        }
                      },
                      "name": "target",
                      "setter": {
                        "componentName": "StringSetter",
                        
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
                        "componentName": "ArraySetter",
                        "props": {
                          "itemSetter": {
                            "componentName": "ObjectSetter",
                            "props": {
                              "config": {
                                "extraSetter": {
                                  "componentName": "MixedSetter",
                                  
                                  "props": {}
                                }
                              }
                            },
                            
                            "initialValue": {}
                          }
                        },
                        "initialValue": []
                      }
                    }
                  ],
                  "extraSetter": {
                    "componentName": "MixedSetter",
                    
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
            "en-US": "siderWidth",
            "zh-CN": "菜单的宽度"
          },
          "tip": "siderWidth | 菜单的宽度"
        },
        "name": "siderWidth",
        "description": "菜单的宽度",
        "setter": {
          "componentName": "NumberSetter",
          
          "initialValue": 208
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "avatarProps",
            "zh-CN": "头像设置"
          },
          "tip": "avatarProps | 头像的设置"
        },
        "name": "avatarProps",
        "description": "头像的设置",
        "setter": {
          "componentName": "SlotSetter",
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

            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuFooterRender",
            "zh-CN": "底部菜单"
          },
          "tip": "在 layout 底部渲染一个块"
        },
        "name": "menuFooterRender",
        "description": "@name 侧边菜单底部的配置，可以增加一些底部操作",
        "setter": {
          "componentName": "SlotSetter",
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

            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuExtraRender",
            "zh-CN": "header中间渲染"
          },
          "tip": "menuExtraRender | @name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框"
        },
        "name": "menuExtraRender",
        "description": "@name 侧边菜单 title 和 logo 下面区域的渲染，一般会增加个搜索框",
        "setter": {
          "componentName": "SlotSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "breakpoint",
            "zh-CN": "@name 菜单是否"
          },
          "tip": "触发响应式布局的断点	"
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
            "en-US": "onMenuHeaderClick",
            "zh-CN": "菜单顶部"
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
            "en-US": "getContainer",
            "zh-CN": "getContainer"
          }
        },
        "name": "getContainer",
        "setter": {
          "componentName": "RadioGroupSetter",
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "logoStyle",
            "zh-CN": "侧边菜单"
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
                
                "props": {}
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
            "en-US": "hide",
            "zh-CN": "hide"
          }
        },
        "name": "hide",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menuRender",
            "zh-CN": "菜单渲染"
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

            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headerContentRender",
            "zh-CN": "顶部区域"
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

            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headerRender",
            "zh-CN": "自定义头部"
          }
        },
        "name": "headerRender",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "SlotSetter"
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
                "componentName": "SlotSetter"
              },

            ]
          }
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
          
          "initialValue": false
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
                        
                        "initialValue": 0
                      }
                    }
                  ],
                  "extraSetter": {
                    "componentName": "MixedSetter",
                    
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
            "zh-CN": "简约模式"
          },
          "tip": "pure | @name 简约模式，设置了之后不渲染的任何 layout 的东西，但是会有 context，可以获取到当前菜单。"
        },
        "name": "pure",
        "description": "@name 简约模式，设置了之后不渲染的任何 layout 的东西，但是会有 context，可以获取到当前菜单。",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onPageChange",
            "zh-CN": "页面切换"
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
            "zh-CN": "等待"
          },
          "tip": "loading | @name layout 的 loading 效果，设置完成之后只展示一个 loading"
        },
        "name": "loading",
        "description": "@name layout 的 loading 效果，设置完成之后只展示一个 loading",
        "setter": {
          "componentName": "BoolSetter",
          
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "locale",
            "zh-CN": "国际化"
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
            "zh-CN": "菜单收起"
          },
          "tip": "控制菜单的收起和展开	"
        },
        "name": "collapsed",
        "description": "@name 是否收起 layout 是严格受控的，可以 设置为 true，一直收起",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "footerRender",
            "zh-CN": "页脚渲染"
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
          "componentName": "FunctionSetter"
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
                
                "props": {}
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
                
                "props": {}
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
                
                "props": {}
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
                
                "initialValue": false
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      
                      "props": {}
                    }
                  }
                },
                
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
const snippets: Snippet[] = [
  {
    "title": "中台布局",
    "screenshot": "",
    "schema": {
      "componentName": "ProLayout",
      "props": {
        route:{
          path: '/',
          routes: [
            {
              path: '/welcome',
              name: '欢迎',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: '管理页',
              access: 'canAdmin',
              component: './Admin',
              routes: [
                {
                  path: '/admin/sub-page1',
                  name: '一级页面',
                  icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page2',
                  name: '二级页面',
                  component: './Welcome',
                },
                {
                  path: '/admin/sub-page3',
                  name: '三级页面',
                  component: './Welcome',
                },
              ],
            },
            {
              name: '列表页',
              path: '/list',
              component: './ListTableList',
              routes: [
                {
                  path: '/list/sub-page',
                  name: '列表页面',
                  routes: [
                    {
                      path: 'sub-sub-page1',
                      name: '一一级列表页面',
                      component: './Welcome',
                    },
                    {
                      path: 'sub-sub-page2',
                      name: '一二级列表页面',
                      component: './Welcome',
                    },
                    {
                      path: 'sub-sub-page3',
                      name: '一三级列表页面',
                      component: './Welcome',
                    },
                  ],
                },
                {
                  path: '/list/sub-page2',
                  name: '二级列表页面',
                  component: './Welcome',
                },
                {
                  path: '/list/sub-page3',
                  name: '三级列表页面',
                  component: './Welcome',
                },
              ],
            },
            {
              path: 'https://ant.design',
              name: 'Ant Design 官网外链',
            },
          ],
        },
        location: {
          pathname: '/',
        },
        appList: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            title: 'Ant Design',
            desc: '杭州市较知名的 UI 设计语言',
            url: 'https://ant.design',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
            title: 'AntV',
            desc: '蚂蚁集团全新一代数据可视化解决方案',
            url: 'https://antv.vision/',
            target: '_blank',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            title: 'Pro Components',
            desc: '专业级 UI 组件库',
            url: 'https://procomponents.ant.design/',
          },
          {
            icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
            title: 'umi',
            desc: '插件化的企业级前端应用框架。',
            url: 'https://umijs.org/zh-CN/docs',
          },
      
          {
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
            title: 'qiankun',
            desc: '可能是你见过最完善的微前端解决方案🧐',
            url: 'https://qiankun.umijs.org/',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '语雀',
            desc: '知识创作与分享工具',
            url: 'https://www.yuque.com/',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
            title: 'Kitchen ',
            desc: 'Sketch 工具集',
            url: 'https://kitchen.alipay.com/',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
            title: 'dumi',
            desc: '为组件开发场景而生的文档工具',
            url: 'https://d.umijs.org/zh-CN',
          },
        ],
      }
      }
    }
  
];

export default {
  ...ProLayoutMeta,
  snippets
};
