
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DragSortTableMeta: IPublicTypeComponentMetadata = {
  "componentName": "DragSortTable",
  "title": "DragSortTable",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/antd-pro",
    "version": "1.0.0-rc.32",
    "exportName": "DragSortTable",
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
            "en-US": "dragSortKey",
            "zh-CN": "@name 拖动排序"
          },
          "tip": "dragSortKey | @name 拖动排序列key值 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序"
        },
        "name": "dragSortKey",
        "description": "@name 拖动排序列key值 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序",
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
            "en-US": "dragSortHandlerRender",
            "zh-CN": "@name 渲染自定"
          },
          "tip": "dragSortHandlerRender | @name 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标"
        },
        "name": "dragSortHandlerRender",
        "description": "@name 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columns",
            "zh-CN": "@name 列配置能"
          },
          "tip": "columns | @name 列配置能力，支持一个数组"
        },
        "name": "columns",
        "description": "@name 列配置能力，支持一个数组",
        "setter": {
          "componentName": "MixedSetter",
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "toolbar",
            "zh-CN": "@name List"
          },
          "tip": "toolbar | @name ListToolBar 的属性"
        },
        "name": "toolbar",
        "description": "@name ListToolBar 的属性",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                      "en-US": "tooltip",
                      "zh-CN": "tooltip"
                    }
                  },
                  "name": "tooltip",
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
                                "isRequired": false,
                                "props": {}
                              }
                            }
                          }
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
                      "en-US": "search",
                      "zh-CN": "search"
                    }
                  },
                  "name": "search",
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
                                "isRequired": false,
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
                      "en-US": "onSearch",
                      "zh-CN": "onSearch"
                    }
                  },
                  "name": "onSearch",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
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
                      "en-US": "settings",
                      "zh-CN": "settings"
                    }
                  },
                  "name": "settings",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
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
                                          "en-US": "tooltip",
                                          "zh-CN": "tooltip"
                                        }
                                      },
                                      "name": "tooltip",
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
                                                    "isRequired": false,
                                                    "props": {}
                                                  }
                                                }
                                              }
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
                                          "en-US": "onClick",
                                          "zh-CN": "onClick"
                                        }
                                      },
                                      "name": "onClick",
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
                      "en-US": "multipleLine",
                      "zh-CN": "multipleLine"
                    }
                  },
                  "name": "multipleLine",
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
                      "en-US": "filter",
                      "zh-CN": "filter"
                    }
                  },
                  "name": "filter",
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
                      "en-US": "tabs",
                      "zh-CN": "tabs"
                    }
                  },
                  "name": "tabs",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
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
                      "en-US": "menu",
                      "zh-CN": "menu"
                    }
                  },
                  "name": "menu",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
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
                                    "label": "inline",
                                    "value": "inline"
                                  },
                                  {
                                    "label": "dropdown",
                                    "value": "dropdown"
                                  },
                                  {
                                    "label": "tab",
                                    "value": "tab"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "inline",
                                    "value": "inline"
                                  },
                                  {
                                    "label": "dropdown",
                                    "value": "dropdown"
                                  },
                                  {
                                    "label": "tab",
                                    "value": "tab"
                                  }
                                ]
                              },
                              "initialValue": "inline"
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
                                "en-US": "defaultActiveKey",
                                "zh-CN": "defaultActiveKey"
                              }
                            },
                            "name": "defaultActiveKey",
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
                                            },
                                            "isRequired": true
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
            "en-US": "ghost",
            "zh-CN": "@name 幽灵模式"
          },
          "tip": "ghost | @name 幽灵模式，即是否取消卡片内容区域的 padding 和 卡片的背景颜色。"
        },
        "name": "ghost",
        "description": "@name 幽灵模式，即是否取消卡片内容区域的 padding 和 卡片的背景颜色。",
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
            "en-US": "params",
            "zh-CN": "request 的参"
          },
          "tip": "params | request 的参数，修改之后会触发更新"
        },
        "name": "params",
        "description": "request 的参数，修改之后会触发更新",
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
            "en-US": "columnsStateMap",
            "zh-CN": "列状态配置，可以配置"
          },
          "tip": "columnsStateMap | 列状态配置，可以配置是否浮动和是否展示"
        },
        "name": "columnsStateMap",
        "description": "列状态配置，可以配置是否浮动和是否展示",
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
            "en-US": "onColumnsStateChange",
            "zh-CN": "列状态配置修改触发事"
          },
          "tip": "onColumnsStateChange | 列状态配置修改触发事件"
        },
        "name": "onColumnsStateChange",
        "description": "列状态配置修改触发事件",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columnsState",
            "zh-CN": "@name 列状态的"
          },
          "tip": "columnsState | @name 列状态的配置，可以用来操作列功能"
        },
        "name": "columnsState",
        "description": "@name 列状态的配置，可以用来操作列功能",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "persistenceType",
                      "zh-CN": "persistenceType"
                    }
                  },
                  "name": "persistenceType",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "localStorage",
                          "value": "localStorage"
                        },
                        {
                          "label": "sessionStorage",
                          "value": "sessionStorage"
                        }
                      ],
                      "options": [
                        {
                          "label": "localStorage",
                          "value": "localStorage"
                        },
                        {
                          "label": "sessionStorage",
                          "value": "sessionStorage"
                        }
                      ]
                    },
                    "initialValue": "localStorage"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "persistenceKey",
                      "zh-CN": "persistenceKey"
                    }
                  },
                  "name": "persistenceKey",
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
                      "en-US": "defaultValue",
                      "zh-CN": "defaultValue"
                    }
                  },
                  "name": "defaultValue",
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
                      "en-US": "value",
                      "zh-CN": "value"
                    }
                  },
                  "name": "value",
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
                      "en-US": "onChange",
                      "zh-CN": "onChange"
                    }
                  },
                  "name": "onChange",
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
            "en-US": "onSizeChange",
            "zh-CN": "onSizeChange"
          }
        },
        "name": "onSizeChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cardProps",
            "zh-CN": "@name tabl"
          },
          "tip": "cardProps | @name table 外面卡片的设置"
        },
        "name": "cardProps",
        "description": "@name table 外面卡片的设置",
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
            "en-US": "tableRender",
            "zh-CN": "@name 渲染 t"
          },
          "tip": "tableRender | @name 渲染 table"
        },
        "name": "tableRender",
        "description": "@name 渲染 table",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tableViewRender",
            "zh-CN": "@name 渲染 t"
          },
          "tip": "tableViewRender | @name 渲染 table 视图，用于定制 ProList，不推荐直接使用"
        },
        "name": "tableViewRender",
        "description": "@name 渲染 table 视图，用于定制 ProList，不推荐直接使用",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tableExtraRender",
            "zh-CN": "@name tabl"
          },
          "tip": "tableExtraRender | @name table 和搜索表单之间的 dom 渲染"
        },
        "name": "tableExtraRender",
        "description": "@name table 和搜索表单之间的 dom 渲染",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "searchFormRender",
            "zh-CN": "@name 渲染搜索"
          },
          "tip": "searchFormRender | @name 渲染搜索表单"
        },
        "name": "searchFormRender",
        "description": "@name 渲染搜索表单",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "request",
            "zh-CN": "@name 一个获得"
          },
          "tip": "request | @name 一个获得 dataSource 的方法"
        },
        "name": "request",
        "description": "@name 一个获得 dataSource 的方法",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "postData",
            "zh-CN": "@name 对数据进"
          },
          "tip": "postData | @name 对数据进行一些处理"
        },
        "name": "postData",
        "description": "@name 对数据进行一些处理",
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
            "en-US": "defaultData",
            "zh-CN": "@name 默认的数"
          },
          "tip": "defaultData | @name 默认的数据"
        },
        "name": "defaultData",
        "description": "@name 默认的数据",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "formRef",
            "zh-CN": "@name 操作自带"
          },
          "tip": "formRef | @name 操作自带的 form"
        },
        "name": "formRef",
        "description": "@name 操作自带的 form",
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
            "en-US": "toolBarRender",
            "zh-CN": "@name 渲染操作"
          },
          "tip": "toolBarRender | @name 渲染操作栏"
        },
        "name": "toolBarRender",
        "description": "@name 渲染操作栏",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
            "en-US": "optionsRender",
            "zh-CN": "optionsRender"
          }
        },
        "name": "optionsRender",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLoadingChange",
            "zh-CN": "@name load"
          },
          "tip": "onLoadingChange | @name loading 被修改时触发，一般是网络请求导致的"
        },
        "name": "onLoadingChange",
        "description": "@name loading 被修改时触发，一般是网络请求导致的",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onRequestError",
            "zh-CN": "@name 数据加载"
          },
          "tip": "onRequestError | @name 数据加载失败时触发"
        },
        "name": "onRequestError",
        "description": "@name 数据加载失败时触发",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "polling",
            "zh-CN": "是否轮询 ProTa"
          },
          "tip": "polling | 是否轮询 ProTable 它不会自动提交表单，如果你想自动提交表单的功能，需要在 onValueChange 中调用 formRef.current?.submit()"
        },
        "name": "polling",
        "description": "是否轮询 ProTable 它不会自动提交表单，如果你想自动提交表单的功能，需要在 onValueChange 中调用 formRef.current?.submit()",
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
            "en-US": "tableClassName",
            "zh-CN": "@name 给封装的"
          },
          "tip": "tableClassName | @name 给封装的 table 的 className"
        },
        "name": "tableClassName",
        "description": "@name 给封装的 table 的 className",
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
            "en-US": "tableStyle",
            "zh-CN": "@name 给封装的"
          },
          "tip": "tableStyle | @name 给封装的 table 的 style"
        },
        "name": "tableStyle",
        "description": "@name 给封装的 table 的 style",
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
            "en-US": "headerTitle",
            "zh-CN": "@name 左上角的"
          },
          "tip": "headerTitle | @name 左上角的 title"
        },
        "name": "headerTitle",
        "description": "@name 左上角的 title",
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
            "en-US": "tooltip",
            "zh-CN": "@name 标题旁边"
          },
          "tip": "tooltip | @name 标题旁边的 tooltip"
        },
        "name": "tooltip",
        "description": "@name 标题旁边的 tooltip",
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
                      "isRequired": false,
                      "props": {}
                    }
                  }
                }
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
            "en-US": "options",
            "zh-CN": "@name 操作栏配"
          },
          "tip": "options | @name 操作栏配置"
        },
        "name": "options",
        "description": "@name 操作栏配置",
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
                            "en-US": "density",
                            "zh-CN": "density"
                          }
                        },
                        "name": "density",
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
                            "en-US": "fullScreen",
                            "zh-CN": "fullScreen"
                          }
                        },
                        "name": "fullScreen",
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
                            "en-US": "reload",
                            "zh-CN": "reload"
                          }
                        },
                        "name": "reload",
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
                            "en-US": "setting",
                            "zh-CN": "setting"
                          }
                        },
                        "name": "setting",
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
                                            "en-US": "draggable",
                                            "zh-CN": "draggable"
                                          }
                                        },
                                        "name": "draggable",
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
                                            "en-US": "checkable",
                                            "zh-CN": "checkable"
                                          }
                                        },
                                        "name": "checkable",
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
                                            "en-US": "showListItemOption",
                                            "zh-CN": "showListItemOption"
                                          }
                                        },
                                        "name": "showListItemOption",
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
                                            "en-US": "checkedReset",
                                            "zh-CN": "checkedReset"
                                          }
                                        },
                                        "name": "checkedReset",
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
                                            "en-US": "listsHeight",
                                            "zh-CN": "listsHeight"
                                          }
                                        },
                                        "name": "listsHeight",
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
                                            "en-US": "extra",
                                            "zh-CN": "extra"
                                          }
                                        },
                                        "name": "extra",
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
                                            "en-US": "settingIcon",
                                            "zh-CN": "settingIcon"
                                          }
                                        },
                                        "name": "settingIcon",
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
                            "en-US": "search",
                            "zh-CN": "search"
                          }
                        },
                        "name": "search",
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
                            "en-US": "reloadIcon",
                            "zh-CN": "reloadIcon"
                          }
                        },
                        "name": "reloadIcon",
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
                            "en-US": "densityIcon",
                            "zh-CN": "densityIcon"
                          }
                        },
                        "name": "densityIcon",
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
            "en-US": "search",
            "zh-CN": "@name 是否显示"
          },
          "tip": "search | @name 是否显示搜索表单"
        },
        "name": "search",
        "description": "@name 是否显示搜索表单",
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
            "en-US": "form",
            "zh-CN": "基本配置与 antd"
          },
          "tip": "form | 基本配置与 antd Form 相同, 但是劫持了 form onFinish 的配置"
        },
        "name": "form",
        "description": "基本配置与 antd Form 相同, 但是劫持了 form onFinish 的配置",
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
            "en-US": "dateFormatter",
            "zh-CN": "暂时只支持 dayj"
          },
          "tip": "dateFormatter | 暂时只支持 dayjs - string 会格式化为 YYYY-DD-MM - number 代表时间戳"
        },
        "name": "dateFormatter",
        "description": "暂时只支持 dayjs - string 会格式化为 YYYY-DD-MM - number 代表时间戳",
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
            "en-US": "tableAlertRender",
            "zh-CN": "设置或者返回fals"
          },
          "tip": "tableAlertRender | 设置或者返回false 即可关闭"
        },
        "name": "tableAlertRender",
        "description": "设置或者返回false 即可关闭",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
            "en-US": "tableAlertOptionRender",
            "zh-CN": "设置或者返回fals"
          },
          "tip": "tableAlertOptionRender | 设置或者返回false 即可关闭"
        },
        "name": "tableAlertOptionRender",
        "description": "设置或者返回false 即可关闭",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
            "en-US": "rowSelection",
            "zh-CN": "@name 选择项配"
          },
          "tip": "rowSelection | @name 选择项配置"
        },
        "name": "rowSelection",
        "description": "@name 选择项配置",
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
            "en-US": "type",
            "zh-CN": "支持 ProTabl"
          },
          "tip": "type | 支持 ProTable 的类型"
        },
        "name": "type",
        "description": "支持 ProTable 的类型",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "form",
                "value": "form"
              },
              {
                "label": "table",
                "value": "table"
              },
              {
                "label": "list",
                "value": "list"
              },
              {
                "label": "descriptions",
                "value": "descriptions"
              },
              {
                "label": "cardList",
                "value": "cardList"
              }
            ],
            "options": [
              {
                "label": "form",
                "value": "form"
              },
              {
                "label": "table",
                "value": "table"
              },
              {
                "label": "list",
                "value": "list"
              },
              {
                "label": "descriptions",
                "value": "descriptions"
              },
              {
                "label": "cardList",
                "value": "cardList"
              }
            ]
          },
          "initialValue": "form"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columnEmptyText",
            "zh-CN": "@name 空值时显"
          },
          "tip": "columnEmptyText | @name 空值时显示"
        },
        "name": "columnEmptyText",
        "description": "@name 空值时显示",
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
            "en-US": "manualRequest",
            "zh-CN": "@name 是否手动"
          },
          "tip": "manualRequest | @name 是否手动触发请求"
        },
        "name": "manualRequest",
        "description": "@name 是否手动触发请求",
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
            "en-US": "editable",
            "zh-CN": "@name 编辑行相"
          },
          "tip": "editable | @name 编辑行相关的配置"
        },
        "name": "editable",
        "description": "@name 编辑行相关的配置",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "formProps",
                      "zh-CN": "formProps"
                    }
                  },
                  "name": "formProps",
                  "setter": {
                    "componentName": "FunctionSetter"
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
                          "label": "multiple",
                          "value": "multiple"
                        },
                        {
                          "label": "single",
                          "value": "single"
                        }
                      ],
                      "options": [
                        {
                          "label": "multiple",
                          "value": "multiple"
                        },
                        {
                          "label": "single",
                          "value": "single"
                        }
                      ]
                    },
                    "initialValue": "multiple"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "editableKeys",
                      "zh-CN": "editableKeys"
                    }
                  },
                  "name": "editableKeys",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
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
                    "initialValue": []
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
                      "en-US": "onValuesChange",
                      "zh-CN": "onValuesChange"
                    }
                  },
                  "name": "onValuesChange",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "actionRender",
                      "zh-CN": "actionRender"
                    }
                  },
                  "name": "actionRender",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onSave",
                      "zh-CN": "onSave"
                    }
                  },
                  "name": "onSave",
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
                      "en-US": "onDelete",
                      "zh-CN": "onDelete"
                    }
                  },
                  "name": "onDelete",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "deletePopconfirmMessage",
                      "zh-CN": "deletePopconfirmMessage"
                    }
                  },
                  "name": "deletePopconfirmMessage",
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
                      "en-US": "onlyOneLineEditorAlertMessage",
                      "zh-CN": "onlyOneLineEditorAlertMessage"
                    }
                  },
                  "name": "onlyOneLineEditorAlertMessage",
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
                      "en-US": "onlyAddOneLineAlertMessage",
                      "zh-CN": "onlyAddOneLineAlertMessage"
                    }
                  },
                  "name": "onlyAddOneLineAlertMessage",
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
                      "en-US": "tableName",
                      "zh-CN": "tableName"
                    }
                  },
                  "name": "tableName",
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
                      "en-US": "saveText",
                      "zh-CN": "saveText"
                    }
                  },
                  "name": "saveText",
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
                      "en-US": "deleteText",
                      "zh-CN": "deleteText"
                    }
                  },
                  "name": "deleteText",
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
                      "en-US": "getRealIndex",
                      "zh-CN": "getRealIndex"
                    }
                  },
                  "name": "getRealIndex",
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
            "en-US": "cardBordered",
            "zh-CN": "@name 查询表单"
          },
          "tip": "cardBordered | @name 查询表单和 Table 的卡片 border 配置"
        },
        "name": "cardBordered",
        "description": "@name 查询表单和 Table 的卡片 border 配置",
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
                            "en-US": "search",
                            "zh-CN": "search"
                          }
                        },
                        "name": "search",
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
                            "en-US": "table",
                            "zh-CN": "table"
                          }
                        },
                        "name": "table",
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
            "en-US": "debounceTime",
            "zh-CN": "@name 去抖时间"
          },
          "tip": "debounceTime | @name 去抖时间"
        },
        "name": "debounceTime",
        "description": "@name 去抖时间",
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
            "en-US": "revalidateOnFocus",
            "zh-CN": "只在request "
          },
          "tip": "revalidateOnFocus | 只在request 存在的时候生效，可编辑表格也不会生效"
        },
        "name": "revalidateOnFocus",
        "description": "只在request 存在的时候生效，可编辑表格也不会生效",
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
            "en-US": "defaultSize",
            "zh-CN": "默认的表格大小"
          },
          "tip": "defaultSize | 默认的表格大小"
        },
        "name": "defaultSize",
        "description": "默认的表格大小",
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
            "en-US": "name",
            "zh-CN": "@name , 可编"
          },
          "tip": "name | @name , 可编辑表格的name,通过这个name 可以直接与 form通信，无需嵌套"
        },
        "name": "name",
        "description": "@name , 可编辑表格的name,通过这个name 可以直接与 form通信，无需嵌套",
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
            "en-US": "ErrorBoundary",
            "zh-CN": "错误边界自定义"
          },
          "tip": "ErrorBoundary | 错误边界自定义"
        },
        "name": "ErrorBoundary",
        "description": "错误边界自定义",
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
            "en-US": "caption",
            "zh-CN": "caption"
          }
        },
        "name": "caption",
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
            "en-US": "footer",
            "zh-CN": "footer"
          }
        },
        "name": "footer",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "summary",
            "zh-CN": "summary"
          }
        },
        "name": "summary",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
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
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "scroll",
            "zh-CN": "scroll"
          }
        },
        "name": "scroll",
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
            "en-US": "expandedRowKeys",
            "zh-CN": "@deprecate"
          },
          "tip": "expandedRowKeys | @deprecated Use `expandable.expandedRowKeys` instead"
        },
        "name": "expandedRowKeys",
        "description": "@deprecated Use `expandable.expandedRowKeys` instead",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultExpandedRowKeys",
            "zh-CN": "@deprecate"
          },
          "tip": "defaultExpandedRowKeys | @deprecated Use `expandable.defaultExpandedRowKeys` instead"
        },
        "name": "defaultExpandedRowKeys",
        "description": "@deprecated Use `expandable.defaultExpandedRowKeys` instead",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "expandedRowRender",
            "zh-CN": "@deprecate"
          },
          "tip": "expandedRowRender | @deprecated Use `expandable.expandedRowRender` instead"
        },
        "name": "expandedRowRender",
        "description": "@deprecated Use `expandable.expandedRowRender` instead",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "expandRowByClick",
            "zh-CN": "@deprecate"
          },
          "tip": "expandRowByClick | @deprecated Use `expandable.expandRowByClick` instead"
        },
        "name": "expandRowByClick",
        "description": "@deprecated Use `expandable.expandRowByClick` instead",
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
            "en-US": "expandIcon",
            "zh-CN": "@deprecate"
          },
          "tip": "expandIcon | @deprecated Use `expandable.expandIcon` instead"
        },
        "name": "expandIcon",
        "description": "@deprecated Use `expandable.expandIcon` instead",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onExpandedRowsChange",
            "zh-CN": "@deprecate"
          },
          "tip": "onExpandedRowsChange | @deprecated Use `expandable.onExpandedRowsChange` instead"
        },
        "name": "onExpandedRowsChange",
        "description": "@deprecated Use `expandable.onExpandedRowsChange` instead",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultExpandAllRows",
            "zh-CN": "@deprecate"
          },
          "tip": "defaultExpandAllRows | @deprecated Use `expandable.defaultExpandAllRows` instead"
        },
        "name": "defaultExpandAllRows",
        "description": "@deprecated Use `expandable.defaultExpandAllRows` instead",
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
            "en-US": "indentSize",
            "zh-CN": "indentSize"
          }
        },
        "name": "indentSize",
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
            "en-US": "expandIconColumnIndex",
            "zh-CN": "@deprecate"
          },
          "tip": "expandIconColumnIndex | @deprecated Use `expandable.expandIconColumnIndex` instead"
        },
        "name": "expandIconColumnIndex",
        "description": "@deprecated Use `expandable.expandIconColumnIndex` instead",
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
            "en-US": "expandedRowClassName",
            "zh-CN": "@deprecate"
          },
          "tip": "expandedRowClassName | @deprecated Use `expandable.expandedRowClassName` instead"
        },
        "name": "expandedRowClassName",
        "description": "@deprecated Use `expandable.expandedRowClassName` instead",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "childrenColumnName",
            "zh-CN": "@deprecate"
          },
          "tip": "childrenColumnName | @deprecated Use `expandable.childrenColumnName` instead"
        },
        "name": "childrenColumnName",
        "description": "@deprecated Use `expandable.childrenColumnName` instead",
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
            "en-US": "rowKey",
            "zh-CN": "rowKey"
          }
        },
        "name": "rowKey",
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
            "en-US": "tableLayout",
            "zh-CN": "tableLayout"
          }
        },
        "name": "tableLayout",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "fixed",
                "value": "fixed"
              },
              {
                "label": "auto",
                "value": "auto"
              }
            ],
            "options": [
              {
                "label": "fixed",
                "value": "fixed"
              },
              {
                "label": "auto",
                "value": "auto"
              }
            ]
          },
          "initialValue": "fixed"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "expandable",
            "zh-CN": "Config exp"
          },
          "tip": "expandable | Config expand rows"
        },
        "name": "expandable",
        "description": "Config expand rows",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "RecordType",
                      "zh-CN": "RecordType"
                    }
                  },
                  "name": "RecordType",
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
                      "en-US": "expandedRowKeys",
                      "zh-CN": "expandedRowKeys"
                    }
                  },
                  "name": "expandedRowKeys",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
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
                    "initialValue": []
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "defaultExpandedRowKeys",
                      "zh-CN": "defaultExpandedRowKeys"
                    }
                  },
                  "name": "defaultExpandedRowKeys",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
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
                    "initialValue": []
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "expandedRowRender",
                      "zh-CN": "expandedRowRender"
                    }
                  },
                  "name": "expandedRowRender",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "columnTitle",
                      "zh-CN": "columnTitle"
                    }
                  },
                  "name": "columnTitle",
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
                      "en-US": "expandRowByClick",
                      "zh-CN": "expandRowByClick"
                    }
                  },
                  "name": "expandRowByClick",
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
                      "en-US": "expandIcon",
                      "zh-CN": "expandIcon"
                    }
                  },
                  "name": "expandIcon",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onExpand",
                      "zh-CN": "onExpand"
                    }
                  },
                  "name": "onExpand",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "onExpandedRowsChange",
                      "zh-CN": "onExpandedRowsChange"
                    }
                  },
                  "name": "onExpandedRowsChange",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "defaultExpandAllRows",
                      "zh-CN": "defaultExpandAllRows"
                    }
                  },
                  "name": "defaultExpandAllRows",
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
                      "en-US": "indentSize",
                      "zh-CN": "indentSize"
                    }
                  },
                  "name": "indentSize",
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
                      "en-US": "expandIconColumnIndex",
                      "zh-CN": "expandIconColumnIndex"
                    }
                  },
                  "name": "expandIconColumnIndex",
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
                      "en-US": "showExpandColumn",
                      "zh-CN": "showExpandColumn"
                    }
                  },
                  "name": "showExpandColumn",
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
                      "en-US": "expandedRowClassName",
                      "zh-CN": "expandedRowClassName"
                    }
                  },
                  "name": "expandedRowClassName",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "childrenColumnName",
                      "zh-CN": "childrenColumnName"
                    }
                  },
                  "name": "childrenColumnName",
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
                      "en-US": "rowExpandable",
                      "zh-CN": "rowExpandable"
                    }
                  },
                  "name": "rowExpandable",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "columnWidth",
                      "zh-CN": "columnWidth"
                    }
                  },
                  "name": "columnWidth",
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
                      "en-US": "fixed",
                      "zh-CN": "fixed"
                    }
                  },
                  "name": "fixed",
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
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
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
                                "label": "left",
                                "value": "left"
                              },
                              {
                                "label": "right",
                                "value": "right"
                              }
                            ]
                          },
                          "initialValue": "left"
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
            "en-US": "rowClassName",
            "zh-CN": "rowClassName"
          }
        },
        "name": "rowClassName",
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
            "en-US": "showHeader",
            "zh-CN": "showHeader"
          }
        },
        "name": "showHeader",
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
            "en-US": "components",
            "zh-CN": "components"
          }
        },
        "name": "components",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "RecordType",
                      "zh-CN": "RecordType"
                    }
                  },
                  "name": "RecordType",
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
                      "en-US": "table",
                      "zh-CN": "table"
                    }
                  },
                  "name": "table",
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
                                "label": "object",
                                "value": "object"
                              },
                              {
                                "label": "a",
                                "value": "a"
                              },
                              {
                                "label": "abbr",
                                "value": "abbr"
                              },
                              {
                                "label": "address",
                                "value": "address"
                              },
                              {
                                "label": "area",
                                "value": "area"
                              },
                              {
                                "label": "article",
                                "value": "article"
                              },
                              {
                                "label": "aside",
                                "value": "aside"
                              },
                              {
                                "label": "audio",
                                "value": "audio"
                              },
                              {
                                "label": "b",
                                "value": "b"
                              },
                              {
                                "label": "base",
                                "value": "base"
                              },
                              {
                                "label": "bdi",
                                "value": "bdi"
                              },
                              {
                                "label": "bdo",
                                "value": "bdo"
                              },
                              {
                                "label": "big",
                                "value": "big"
                              },
                              {
                                "label": "blockquote",
                                "value": "blockquote"
                              },
                              {
                                "label": "body",
                                "value": "body"
                              },
                              {
                                "label": "br",
                                "value": "br"
                              },
                              {
                                "label": "button",
                                "value": "button"
                              },
                              {
                                "label": "canvas",
                                "value": "canvas"
                              },
                              {
                                "label": "caption",
                                "value": "caption"
                              },
                              {
                                "label": "cite",
                                "value": "cite"
                              },
                              {
                                "label": "code",
                                "value": "code"
                              },
                              {
                                "label": "col",
                                "value": "col"
                              },
                              {
                                "label": "colgroup",
                                "value": "colgroup"
                              },
                              {
                                "label": "data",
                                "value": "data"
                              },
                              {
                                "label": "datalist",
                                "value": "datalist"
                              },
                              {
                                "label": "dd",
                                "value": "dd"
                              },
                              {
                                "label": "del",
                                "value": "del"
                              },
                              {
                                "label": "details",
                                "value": "details"
                              },
                              {
                                "label": "dfn",
                                "value": "dfn"
                              },
                              {
                                "label": "dialog",
                                "value": "dialog"
                              },
                              {
                                "label": "div",
                                "value": "div"
                              },
                              {
                                "label": "dl",
                                "value": "dl"
                              },
                              {
                                "label": "dt",
                                "value": "dt"
                              },
                              {
                                "label": "em",
                                "value": "em"
                              },
                              {
                                "label": "embed",
                                "value": "embed"
                              },
                              {
                                "label": "fieldset",
                                "value": "fieldset"
                              },
                              {
                                "label": "figcaption",
                                "value": "figcaption"
                              },
                              {
                                "label": "figure",
                                "value": "figure"
                              },
                              {
                                "label": "footer",
                                "value": "footer"
                              },
                              {
                                "label": "form",
                                "value": "form"
                              },
                              {
                                "label": "h1",
                                "value": "h1"
                              },
                              {
                                "label": "h2",
                                "value": "h2"
                              },
                              {
                                "label": "h3",
                                "value": "h3"
                              },
                              {
                                "label": "h4",
                                "value": "h4"
                              },
                              {
                                "label": "h5",
                                "value": "h5"
                              },
                              {
                                "label": "h6",
                                "value": "h6"
                              },
                              {
                                "label": "head",
                                "value": "head"
                              },
                              {
                                "label": "header",
                                "value": "header"
                              },
                              {
                                "label": "hgroup",
                                "value": "hgroup"
                              },
                              {
                                "label": "hr",
                                "value": "hr"
                              },
                              {
                                "label": "html",
                                "value": "html"
                              },
                              {
                                "label": "i",
                                "value": "i"
                              },
                              {
                                "label": "iframe",
                                "value": "iframe"
                              },
                              {
                                "label": "img",
                                "value": "img"
                              },
                              {
                                "label": "input",
                                "value": "input"
                              },
                              {
                                "label": "ins",
                                "value": "ins"
                              },
                              {
                                "label": "kbd",
                                "value": "kbd"
                              },
                              {
                                "label": "keygen",
                                "value": "keygen"
                              },
                              {
                                "label": "label",
                                "value": "label"
                              },
                              {
                                "label": "legend",
                                "value": "legend"
                              },
                              {
                                "label": "li",
                                "value": "li"
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
                                "label": "map",
                                "value": "map"
                              },
                              {
                                "label": "mark",
                                "value": "mark"
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
                                "label": "meta",
                                "value": "meta"
                              },
                              {
                                "label": "meter",
                                "value": "meter"
                              },
                              {
                                "label": "nav",
                                "value": "nav"
                              },
                              {
                                "label": "noscript",
                                "value": "noscript"
                              },
                              {
                                "label": "ol",
                                "value": "ol"
                              },
                              {
                                "label": "optgroup",
                                "value": "optgroup"
                              },
                              {
                                "label": "option",
                                "value": "option"
                              },
                              {
                                "label": "output",
                                "value": "output"
                              },
                              {
                                "label": "p",
                                "value": "p"
                              },
                              {
                                "label": "param",
                                "value": "param"
                              },
                              {
                                "label": "picture",
                                "value": "picture"
                              },
                              {
                                "label": "pre",
                                "value": "pre"
                              },
                              {
                                "label": "progress",
                                "value": "progress"
                              },
                              {
                                "label": "q",
                                "value": "q"
                              },
                              {
                                "label": "rp",
                                "value": "rp"
                              },
                              {
                                "label": "rt",
                                "value": "rt"
                              },
                              {
                                "label": "ruby",
                                "value": "ruby"
                              },
                              {
                                "label": "s",
                                "value": "s"
                              },
                              {
                                "label": "samp",
                                "value": "samp"
                              },
                              {
                                "label": "slot",
                                "value": "slot"
                              },
                              {
                                "label": "script",
                                "value": "script"
                              },
                              {
                                "label": "section",
                                "value": "section"
                              },
                              {
                                "label": "select",
                                "value": "select"
                              },
                              {
                                "label": "small",
                                "value": "small"
                              },
                              {
                                "label": "source",
                                "value": "source"
                              },
                              {
                                "label": "span",
                                "value": "span"
                              },
                              {
                                "label": "strong",
                                "value": "strong"
                              },
                              {
                                "label": "style",
                                "value": "style"
                              },
                              {
                                "label": "sub",
                                "value": "sub"
                              },
                              {
                                "label": "summary",
                                "value": "summary"
                              },
                              {
                                "label": "sup",
                                "value": "sup"
                              },
                              {
                                "label": "table",
                                "value": "table"
                              },
                              {
                                "label": "template",
                                "value": "template"
                              },
                              {
                                "label": "tbody",
                                "value": "tbody"
                              },
                              {
                                "label": "td",
                                "value": "td"
                              },
                              {
                                "label": "textarea",
                                "value": "textarea"
                              },
                              {
                                "label": "tfoot",
                                "value": "tfoot"
                              },
                              {
                                "label": "th",
                                "value": "th"
                              },
                              {
                                "label": "thead",
                                "value": "thead"
                              },
                              {
                                "label": "time",
                                "value": "time"
                              },
                              {
                                "label": "title",
                                "value": "title"
                              },
                              {
                                "label": "tr",
                                "value": "tr"
                              },
                              {
                                "label": "track",
                                "value": "track"
                              },
                              {
                                "label": "u",
                                "value": "u"
                              },
                              {
                                "label": "ul",
                                "value": "ul"
                              },
                              {
                                "label": "var",
                                "value": "var"
                              },
                              {
                                "label": "video",
                                "value": "video"
                              },
                              {
                                "label": "wbr",
                                "value": "wbr"
                              },
                              {
                                "label": "webview",
                                "value": "webview"
                              }
                            ],
                            "options": [
                              {
                                "label": "object",
                                "value": "object"
                              },
                              {
                                "label": "a",
                                "value": "a"
                              },
                              {
                                "label": "abbr",
                                "value": "abbr"
                              },
                              {
                                "label": "address",
                                "value": "address"
                              },
                              {
                                "label": "area",
                                "value": "area"
                              },
                              {
                                "label": "article",
                                "value": "article"
                              },
                              {
                                "label": "aside",
                                "value": "aside"
                              },
                              {
                                "label": "audio",
                                "value": "audio"
                              },
                              {
                                "label": "b",
                                "value": "b"
                              },
                              {
                                "label": "base",
                                "value": "base"
                              },
                              {
                                "label": "bdi",
                                "value": "bdi"
                              },
                              {
                                "label": "bdo",
                                "value": "bdo"
                              },
                              {
                                "label": "big",
                                "value": "big"
                              },
                              {
                                "label": "blockquote",
                                "value": "blockquote"
                              },
                              {
                                "label": "body",
                                "value": "body"
                              },
                              {
                                "label": "br",
                                "value": "br"
                              },
                              {
                                "label": "button",
                                "value": "button"
                              },
                              {
                                "label": "canvas",
                                "value": "canvas"
                              },
                              {
                                "label": "caption",
                                "value": "caption"
                              },
                              {
                                "label": "cite",
                                "value": "cite"
                              },
                              {
                                "label": "code",
                                "value": "code"
                              },
                              {
                                "label": "col",
                                "value": "col"
                              },
                              {
                                "label": "colgroup",
                                "value": "colgroup"
                              },
                              {
                                "label": "data",
                                "value": "data"
                              },
                              {
                                "label": "datalist",
                                "value": "datalist"
                              },
                              {
                                "label": "dd",
                                "value": "dd"
                              },
                              {
                                "label": "del",
                                "value": "del"
                              },
                              {
                                "label": "details",
                                "value": "details"
                              },
                              {
                                "label": "dfn",
                                "value": "dfn"
                              },
                              {
                                "label": "dialog",
                                "value": "dialog"
                              },
                              {
                                "label": "div",
                                "value": "div"
                              },
                              {
                                "label": "dl",
                                "value": "dl"
                              },
                              {
                                "label": "dt",
                                "value": "dt"
                              },
                              {
                                "label": "em",
                                "value": "em"
                              },
                              {
                                "label": "embed",
                                "value": "embed"
                              },
                              {
                                "label": "fieldset",
                                "value": "fieldset"
                              },
                              {
                                "label": "figcaption",
                                "value": "figcaption"
                              },
                              {
                                "label": "figure",
                                "value": "figure"
                              },
                              {
                                "label": "footer",
                                "value": "footer"
                              },
                              {
                                "label": "form",
                                "value": "form"
                              },
                              {
                                "label": "h1",
                                "value": "h1"
                              },
                              {
                                "label": "h2",
                                "value": "h2"
                              },
                              {
                                "label": "h3",
                                "value": "h3"
                              },
                              {
                                "label": "h4",
                                "value": "h4"
                              },
                              {
                                "label": "h5",
                                "value": "h5"
                              },
                              {
                                "label": "h6",
                                "value": "h6"
                              },
                              {
                                "label": "head",
                                "value": "head"
                              },
                              {
                                "label": "header",
                                "value": "header"
                              },
                              {
                                "label": "hgroup",
                                "value": "hgroup"
                              },
                              {
                                "label": "hr",
                                "value": "hr"
                              },
                              {
                                "label": "html",
                                "value": "html"
                              },
                              {
                                "label": "i",
                                "value": "i"
                              },
                              {
                                "label": "iframe",
                                "value": "iframe"
                              },
                              {
                                "label": "img",
                                "value": "img"
                              },
                              {
                                "label": "input",
                                "value": "input"
                              },
                              {
                                "label": "ins",
                                "value": "ins"
                              },
                              {
                                "label": "kbd",
                                "value": "kbd"
                              },
                              {
                                "label": "keygen",
                                "value": "keygen"
                              },
                              {
                                "label": "label",
                                "value": "label"
                              },
                              {
                                "label": "legend",
                                "value": "legend"
                              },
                              {
                                "label": "li",
                                "value": "li"
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
                                "label": "map",
                                "value": "map"
                              },
                              {
                                "label": "mark",
                                "value": "mark"
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
                                "label": "meta",
                                "value": "meta"
                              },
                              {
                                "label": "meter",
                                "value": "meter"
                              },
                              {
                                "label": "nav",
                                "value": "nav"
                              },
                              {
                                "label": "noscript",
                                "value": "noscript"
                              },
                              {
                                "label": "ol",
                                "value": "ol"
                              },
                              {
                                "label": "optgroup",
                                "value": "optgroup"
                              },
                              {
                                "label": "option",
                                "value": "option"
                              },
                              {
                                "label": "output",
                                "value": "output"
                              },
                              {
                                "label": "p",
                                "value": "p"
                              },
                              {
                                "label": "param",
                                "value": "param"
                              },
                              {
                                "label": "picture",
                                "value": "picture"
                              },
                              {
                                "label": "pre",
                                "value": "pre"
                              },
                              {
                                "label": "progress",
                                "value": "progress"
                              },
                              {
                                "label": "q",
                                "value": "q"
                              },
                              {
                                "label": "rp",
                                "value": "rp"
                              },
                              {
                                "label": "rt",
                                "value": "rt"
                              },
                              {
                                "label": "ruby",
                                "value": "ruby"
                              },
                              {
                                "label": "s",
                                "value": "s"
                              },
                              {
                                "label": "samp",
                                "value": "samp"
                              },
                              {
                                "label": "slot",
                                "value": "slot"
                              },
                              {
                                "label": "script",
                                "value": "script"
                              },
                              {
                                "label": "section",
                                "value": "section"
                              },
                              {
                                "label": "select",
                                "value": "select"
                              },
                              {
                                "label": "small",
                                "value": "small"
                              },
                              {
                                "label": "source",
                                "value": "source"
                              },
                              {
                                "label": "span",
                                "value": "span"
                              },
                              {
                                "label": "strong",
                                "value": "strong"
                              },
                              {
                                "label": "style",
                                "value": "style"
                              },
                              {
                                "label": "sub",
                                "value": "sub"
                              },
                              {
                                "label": "summary",
                                "value": "summary"
                              },
                              {
                                "label": "sup",
                                "value": "sup"
                              },
                              {
                                "label": "table",
                                "value": "table"
                              },
                              {
                                "label": "template",
                                "value": "template"
                              },
                              {
                                "label": "tbody",
                                "value": "tbody"
                              },
                              {
                                "label": "td",
                                "value": "td"
                              },
                              {
                                "label": "textarea",
                                "value": "textarea"
                              },
                              {
                                "label": "tfoot",
                                "value": "tfoot"
                              },
                              {
                                "label": "th",
                                "value": "th"
                              },
                              {
                                "label": "thead",
                                "value": "thead"
                              },
                              {
                                "label": "time",
                                "value": "time"
                              },
                              {
                                "label": "title",
                                "value": "title"
                              },
                              {
                                "label": "tr",
                                "value": "tr"
                              },
                              {
                                "label": "track",
                                "value": "track"
                              },
                              {
                                "label": "u",
                                "value": "u"
                              },
                              {
                                "label": "ul",
                                "value": "ul"
                              },
                              {
                                "label": "var",
                                "value": "var"
                              },
                              {
                                "label": "video",
                                "value": "video"
                              },
                              {
                                "label": "wbr",
                                "value": "wbr"
                              },
                              {
                                "label": "webview",
                                "value": "webview"
                              }
                            ]
                          },
                          "initialValue": "object"
                        }
                      ]
                    }
                  }
                },
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
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "wrapper",
                                "zh-CN": "wrapper"
                              }
                            },
                            "name": "wrapper",
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
                                          "label": "object",
                                          "value": "object"
                                        },
                                        {
                                          "label": "a",
                                          "value": "a"
                                        },
                                        {
                                          "label": "abbr",
                                          "value": "abbr"
                                        },
                                        {
                                          "label": "address",
                                          "value": "address"
                                        },
                                        {
                                          "label": "area",
                                          "value": "area"
                                        },
                                        {
                                          "label": "article",
                                          "value": "article"
                                        },
                                        {
                                          "label": "aside",
                                          "value": "aside"
                                        },
                                        {
                                          "label": "audio",
                                          "value": "audio"
                                        },
                                        {
                                          "label": "b",
                                          "value": "b"
                                        },
                                        {
                                          "label": "base",
                                          "value": "base"
                                        },
                                        {
                                          "label": "bdi",
                                          "value": "bdi"
                                        },
                                        {
                                          "label": "bdo",
                                          "value": "bdo"
                                        },
                                        {
                                          "label": "big",
                                          "value": "big"
                                        },
                                        {
                                          "label": "blockquote",
                                          "value": "blockquote"
                                        },
                                        {
                                          "label": "body",
                                          "value": "body"
                                        },
                                        {
                                          "label": "br",
                                          "value": "br"
                                        },
                                        {
                                          "label": "button",
                                          "value": "button"
                                        },
                                        {
                                          "label": "canvas",
                                          "value": "canvas"
                                        },
                                        {
                                          "label": "caption",
                                          "value": "caption"
                                        },
                                        {
                                          "label": "cite",
                                          "value": "cite"
                                        },
                                        {
                                          "label": "code",
                                          "value": "code"
                                        },
                                        {
                                          "label": "col",
                                          "value": "col"
                                        },
                                        {
                                          "label": "colgroup",
                                          "value": "colgroup"
                                        },
                                        {
                                          "label": "data",
                                          "value": "data"
                                        },
                                        {
                                          "label": "datalist",
                                          "value": "datalist"
                                        },
                                        {
                                          "label": "dd",
                                          "value": "dd"
                                        },
                                        {
                                          "label": "del",
                                          "value": "del"
                                        },
                                        {
                                          "label": "details",
                                          "value": "details"
                                        },
                                        {
                                          "label": "dfn",
                                          "value": "dfn"
                                        },
                                        {
                                          "label": "dialog",
                                          "value": "dialog"
                                        },
                                        {
                                          "label": "div",
                                          "value": "div"
                                        },
                                        {
                                          "label": "dl",
                                          "value": "dl"
                                        },
                                        {
                                          "label": "dt",
                                          "value": "dt"
                                        },
                                        {
                                          "label": "em",
                                          "value": "em"
                                        },
                                        {
                                          "label": "embed",
                                          "value": "embed"
                                        },
                                        {
                                          "label": "fieldset",
                                          "value": "fieldset"
                                        },
                                        {
                                          "label": "figcaption",
                                          "value": "figcaption"
                                        },
                                        {
                                          "label": "figure",
                                          "value": "figure"
                                        },
                                        {
                                          "label": "footer",
                                          "value": "footer"
                                        },
                                        {
                                          "label": "form",
                                          "value": "form"
                                        },
                                        {
                                          "label": "h1",
                                          "value": "h1"
                                        },
                                        {
                                          "label": "h2",
                                          "value": "h2"
                                        },
                                        {
                                          "label": "h3",
                                          "value": "h3"
                                        },
                                        {
                                          "label": "h4",
                                          "value": "h4"
                                        },
                                        {
                                          "label": "h5",
                                          "value": "h5"
                                        },
                                        {
                                          "label": "h6",
                                          "value": "h6"
                                        },
                                        {
                                          "label": "head",
                                          "value": "head"
                                        },
                                        {
                                          "label": "header",
                                          "value": "header"
                                        },
                                        {
                                          "label": "hgroup",
                                          "value": "hgroup"
                                        },
                                        {
                                          "label": "hr",
                                          "value": "hr"
                                        },
                                        {
                                          "label": "html",
                                          "value": "html"
                                        },
                                        {
                                          "label": "i",
                                          "value": "i"
                                        },
                                        {
                                          "label": "iframe",
                                          "value": "iframe"
                                        },
                                        {
                                          "label": "img",
                                          "value": "img"
                                        },
                                        {
                                          "label": "input",
                                          "value": "input"
                                        },
                                        {
                                          "label": "ins",
                                          "value": "ins"
                                        },
                                        {
                                          "label": "kbd",
                                          "value": "kbd"
                                        },
                                        {
                                          "label": "keygen",
                                          "value": "keygen"
                                        },
                                        {
                                          "label": "label",
                                          "value": "label"
                                        },
                                        {
                                          "label": "legend",
                                          "value": "legend"
                                        },
                                        {
                                          "label": "li",
                                          "value": "li"
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
                                          "label": "map",
                                          "value": "map"
                                        },
                                        {
                                          "label": "mark",
                                          "value": "mark"
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
                                          "label": "meta",
                                          "value": "meta"
                                        },
                                        {
                                          "label": "meter",
                                          "value": "meter"
                                        },
                                        {
                                          "label": "nav",
                                          "value": "nav"
                                        },
                                        {
                                          "label": "noscript",
                                          "value": "noscript"
                                        },
                                        {
                                          "label": "ol",
                                          "value": "ol"
                                        },
                                        {
                                          "label": "optgroup",
                                          "value": "optgroup"
                                        },
                                        {
                                          "label": "option",
                                          "value": "option"
                                        },
                                        {
                                          "label": "output",
                                          "value": "output"
                                        },
                                        {
                                          "label": "p",
                                          "value": "p"
                                        },
                                        {
                                          "label": "param",
                                          "value": "param"
                                        },
                                        {
                                          "label": "picture",
                                          "value": "picture"
                                        },
                                        {
                                          "label": "pre",
                                          "value": "pre"
                                        },
                                        {
                                          "label": "progress",
                                          "value": "progress"
                                        },
                                        {
                                          "label": "q",
                                          "value": "q"
                                        },
                                        {
                                          "label": "rp",
                                          "value": "rp"
                                        },
                                        {
                                          "label": "rt",
                                          "value": "rt"
                                        },
                                        {
                                          "label": "ruby",
                                          "value": "ruby"
                                        },
                                        {
                                          "label": "s",
                                          "value": "s"
                                        },
                                        {
                                          "label": "samp",
                                          "value": "samp"
                                        },
                                        {
                                          "label": "slot",
                                          "value": "slot"
                                        },
                                        {
                                          "label": "script",
                                          "value": "script"
                                        },
                                        {
                                          "label": "section",
                                          "value": "section"
                                        },
                                        {
                                          "label": "select",
                                          "value": "select"
                                        },
                                        {
                                          "label": "small",
                                          "value": "small"
                                        },
                                        {
                                          "label": "source",
                                          "value": "source"
                                        },
                                        {
                                          "label": "span",
                                          "value": "span"
                                        },
                                        {
                                          "label": "strong",
                                          "value": "strong"
                                        },
                                        {
                                          "label": "style",
                                          "value": "style"
                                        },
                                        {
                                          "label": "sub",
                                          "value": "sub"
                                        },
                                        {
                                          "label": "summary",
                                          "value": "summary"
                                        },
                                        {
                                          "label": "sup",
                                          "value": "sup"
                                        },
                                        {
                                          "label": "table",
                                          "value": "table"
                                        },
                                        {
                                          "label": "template",
                                          "value": "template"
                                        },
                                        {
                                          "label": "tbody",
                                          "value": "tbody"
                                        },
                                        {
                                          "label": "td",
                                          "value": "td"
                                        },
                                        {
                                          "label": "textarea",
                                          "value": "textarea"
                                        },
                                        {
                                          "label": "tfoot",
                                          "value": "tfoot"
                                        },
                                        {
                                          "label": "th",
                                          "value": "th"
                                        },
                                        {
                                          "label": "thead",
                                          "value": "thead"
                                        },
                                        {
                                          "label": "time",
                                          "value": "time"
                                        },
                                        {
                                          "label": "title",
                                          "value": "title"
                                        },
                                        {
                                          "label": "tr",
                                          "value": "tr"
                                        },
                                        {
                                          "label": "track",
                                          "value": "track"
                                        },
                                        {
                                          "label": "u",
                                          "value": "u"
                                        },
                                        {
                                          "label": "ul",
                                          "value": "ul"
                                        },
                                        {
                                          "label": "var",
                                          "value": "var"
                                        },
                                        {
                                          "label": "video",
                                          "value": "video"
                                        },
                                        {
                                          "label": "wbr",
                                          "value": "wbr"
                                        },
                                        {
                                          "label": "webview",
                                          "value": "webview"
                                        }
                                      ],
                                      "options": [
                                        {
                                          "label": "object",
                                          "value": "object"
                                        },
                                        {
                                          "label": "a",
                                          "value": "a"
                                        },
                                        {
                                          "label": "abbr",
                                          "value": "abbr"
                                        },
                                        {
                                          "label": "address",
                                          "value": "address"
                                        },
                                        {
                                          "label": "area",
                                          "value": "area"
                                        },
                                        {
                                          "label": "article",
                                          "value": "article"
                                        },
                                        {
                                          "label": "aside",
                                          "value": "aside"
                                        },
                                        {
                                          "label": "audio",
                                          "value": "audio"
                                        },
                                        {
                                          "label": "b",
                                          "value": "b"
                                        },
                                        {
                                          "label": "base",
                                          "value": "base"
                                        },
                                        {
                                          "label": "bdi",
                                          "value": "bdi"
                                        },
                                        {
                                          "label": "bdo",
                                          "value": "bdo"
                                        },
                                        {
                                          "label": "big",
                                          "value": "big"
                                        },
                                        {
                                          "label": "blockquote",
                                          "value": "blockquote"
                                        },
                                        {
                                          "label": "body",
                                          "value": "body"
                                        },
                                        {
                                          "label": "br",
                                          "value": "br"
                                        },
                                        {
                                          "label": "button",
                                          "value": "button"
                                        },
                                        {
                                          "label": "canvas",
                                          "value": "canvas"
                                        },
                                        {
                                          "label": "caption",
                                          "value": "caption"
                                        },
                                        {
                                          "label": "cite",
                                          "value": "cite"
                                        },
                                        {
                                          "label": "code",
                                          "value": "code"
                                        },
                                        {
                                          "label": "col",
                                          "value": "col"
                                        },
                                        {
                                          "label": "colgroup",
                                          "value": "colgroup"
                                        },
                                        {
                                          "label": "data",
                                          "value": "data"
                                        },
                                        {
                                          "label": "datalist",
                                          "value": "datalist"
                                        },
                                        {
                                          "label": "dd",
                                          "value": "dd"
                                        },
                                        {
                                          "label": "del",
                                          "value": "del"
                                        },
                                        {
                                          "label": "details",
                                          "value": "details"
                                        },
                                        {
                                          "label": "dfn",
                                          "value": "dfn"
                                        },
                                        {
                                          "label": "dialog",
                                          "value": "dialog"
                                        },
                                        {
                                          "label": "div",
                                          "value": "div"
                                        },
                                        {
                                          "label": "dl",
                                          "value": "dl"
                                        },
                                        {
                                          "label": "dt",
                                          "value": "dt"
                                        },
                                        {
                                          "label": "em",
                                          "value": "em"
                                        },
                                        {
                                          "label": "embed",
                                          "value": "embed"
                                        },
                                        {
                                          "label": "fieldset",
                                          "value": "fieldset"
                                        },
                                        {
                                          "label": "figcaption",
                                          "value": "figcaption"
                                        },
                                        {
                                          "label": "figure",
                                          "value": "figure"
                                        },
                                        {
                                          "label": "footer",
                                          "value": "footer"
                                        },
                                        {
                                          "label": "form",
                                          "value": "form"
                                        },
                                        {
                                          "label": "h1",
                                          "value": "h1"
                                        },
                                        {
                                          "label": "h2",
                                          "value": "h2"
                                        },
                                        {
                                          "label": "h3",
                                          "value": "h3"
                                        },
                                        {
                                          "label": "h4",
                                          "value": "h4"
                                        },
                                        {
                                          "label": "h5",
                                          "value": "h5"
                                        },
                                        {
                                          "label": "h6",
                                          "value": "h6"
                                        },
                                        {
                                          "label": "head",
                                          "value": "head"
                                        },
                                        {
                                          "label": "header",
                                          "value": "header"
                                        },
                                        {
                                          "label": "hgroup",
                                          "value": "hgroup"
                                        },
                                        {
                                          "label": "hr",
                                          "value": "hr"
                                        },
                                        {
                                          "label": "html",
                                          "value": "html"
                                        },
                                        {
                                          "label": "i",
                                          "value": "i"
                                        },
                                        {
                                          "label": "iframe",
                                          "value": "iframe"
                                        },
                                        {
                                          "label": "img",
                                          "value": "img"
                                        },
                                        {
                                          "label": "input",
                                          "value": "input"
                                        },
                                        {
                                          "label": "ins",
                                          "value": "ins"
                                        },
                                        {
                                          "label": "kbd",
                                          "value": "kbd"
                                        },
                                        {
                                          "label": "keygen",
                                          "value": "keygen"
                                        },
                                        {
                                          "label": "label",
                                          "value": "label"
                                        },
                                        {
                                          "label": "legend",
                                          "value": "legend"
                                        },
                                        {
                                          "label": "li",
                                          "value": "li"
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
                                          "label": "map",
                                          "value": "map"
                                        },
                                        {
                                          "label": "mark",
                                          "value": "mark"
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
                                          "label": "meta",
                                          "value": "meta"
                                        },
                                        {
                                          "label": "meter",
                                          "value": "meter"
                                        },
                                        {
                                          "label": "nav",
                                          "value": "nav"
                                        },
                                        {
                                          "label": "noscript",
                                          "value": "noscript"
                                        },
                                        {
                                          "label": "ol",
                                          "value": "ol"
                                        },
                                        {
                                          "label": "optgroup",
                                          "value": "optgroup"
                                        },
                                        {
                                          "label": "option",
                                          "value": "option"
                                        },
                                        {
                                          "label": "output",
                                          "value": "output"
                                        },
                                        {
                                          "label": "p",
                                          "value": "p"
                                        },
                                        {
                                          "label": "param",
                                          "value": "param"
                                        },
                                        {
                                          "label": "picture",
                                          "value": "picture"
                                        },
                                        {
                                          "label": "pre",
                                          "value": "pre"
                                        },
                                        {
                                          "label": "progress",
                                          "value": "progress"
                                        },
                                        {
                                          "label": "q",
                                          "value": "q"
                                        },
                                        {
                                          "label": "rp",
                                          "value": "rp"
                                        },
                                        {
                                          "label": "rt",
                                          "value": "rt"
                                        },
                                        {
                                          "label": "ruby",
                                          "value": "ruby"
                                        },
                                        {
                                          "label": "s",
                                          "value": "s"
                                        },
                                        {
                                          "label": "samp",
                                          "value": "samp"
                                        },
                                        {
                                          "label": "slot",
                                          "value": "slot"
                                        },
                                        {
                                          "label": "script",
                                          "value": "script"
                                        },
                                        {
                                          "label": "section",
                                          "value": "section"
                                        },
                                        {
                                          "label": "select",
                                          "value": "select"
                                        },
                                        {
                                          "label": "small",
                                          "value": "small"
                                        },
                                        {
                                          "label": "source",
                                          "value": "source"
                                        },
                                        {
                                          "label": "span",
                                          "value": "span"
                                        },
                                        {
                                          "label": "strong",
                                          "value": "strong"
                                        },
                                        {
                                          "label": "style",
                                          "value": "style"
                                        },
                                        {
                                          "label": "sub",
                                          "value": "sub"
                                        },
                                        {
                                          "label": "summary",
                                          "value": "summary"
                                        },
                                        {
                                          "label": "sup",
                                          "value": "sup"
                                        },
                                        {
                                          "label": "table",
                                          "value": "table"
                                        },
                                        {
                                          "label": "template",
                                          "value": "template"
                                        },
                                        {
                                          "label": "tbody",
                                          "value": "tbody"
                                        },
                                        {
                                          "label": "td",
                                          "value": "td"
                                        },
                                        {
                                          "label": "textarea",
                                          "value": "textarea"
                                        },
                                        {
                                          "label": "tfoot",
                                          "value": "tfoot"
                                        },
                                        {
                                          "label": "th",
                                          "value": "th"
                                        },
                                        {
                                          "label": "thead",
                                          "value": "thead"
                                        },
                                        {
                                          "label": "time",
                                          "value": "time"
                                        },
                                        {
                                          "label": "title",
                                          "value": "title"
                                        },
                                        {
                                          "label": "tr",
                                          "value": "tr"
                                        },
                                        {
                                          "label": "track",
                                          "value": "track"
                                        },
                                        {
                                          "label": "u",
                                          "value": "u"
                                        },
                                        {
                                          "label": "ul",
                                          "value": "ul"
                                        },
                                        {
                                          "label": "var",
                                          "value": "var"
                                        },
                                        {
                                          "label": "video",
                                          "value": "video"
                                        },
                                        {
                                          "label": "wbr",
                                          "value": "wbr"
                                        },
                                        {
                                          "label": "webview",
                                          "value": "webview"
                                        }
                                      ]
                                    },
                                    "initialValue": "object"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "row",
                                "zh-CN": "row"
                              }
                            },
                            "name": "row",
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
                                          "label": "object",
                                          "value": "object"
                                        },
                                        {
                                          "label": "a",
                                          "value": "a"
                                        },
                                        {
                                          "label": "abbr",
                                          "value": "abbr"
                                        },
                                        {
                                          "label": "address",
                                          "value": "address"
                                        },
                                        {
                                          "label": "area",
                                          "value": "area"
                                        },
                                        {
                                          "label": "article",
                                          "value": "article"
                                        },
                                        {
                                          "label": "aside",
                                          "value": "aside"
                                        },
                                        {
                                          "label": "audio",
                                          "value": "audio"
                                        },
                                        {
                                          "label": "b",
                                          "value": "b"
                                        },
                                        {
                                          "label": "base",
                                          "value": "base"
                                        },
                                        {
                                          "label": "bdi",
                                          "value": "bdi"
                                        },
                                        {
                                          "label": "bdo",
                                          "value": "bdo"
                                        },
                                        {
                                          "label": "big",
                                          "value": "big"
                                        },
                                        {
                                          "label": "blockquote",
                                          "value": "blockquote"
                                        },
                                        {
                                          "label": "body",
                                          "value": "body"
                                        },
                                        {
                                          "label": "br",
                                          "value": "br"
                                        },
                                        {
                                          "label": "button",
                                          "value": "button"
                                        },
                                        {
                                          "label": "canvas",
                                          "value": "canvas"
                                        },
                                        {
                                          "label": "caption",
                                          "value": "caption"
                                        },
                                        {
                                          "label": "cite",
                                          "value": "cite"
                                        },
                                        {
                                          "label": "code",
                                          "value": "code"
                                        },
                                        {
                                          "label": "col",
                                          "value": "col"
                                        },
                                        {
                                          "label": "colgroup",
                                          "value": "colgroup"
                                        },
                                        {
                                          "label": "data",
                                          "value": "data"
                                        },
                                        {
                                          "label": "datalist",
                                          "value": "datalist"
                                        },
                                        {
                                          "label": "dd",
                                          "value": "dd"
                                        },
                                        {
                                          "label": "del",
                                          "value": "del"
                                        },
                                        {
                                          "label": "details",
                                          "value": "details"
                                        },
                                        {
                                          "label": "dfn",
                                          "value": "dfn"
                                        },
                                        {
                                          "label": "dialog",
                                          "value": "dialog"
                                        },
                                        {
                                          "label": "div",
                                          "value": "div"
                                        },
                                        {
                                          "label": "dl",
                                          "value": "dl"
                                        },
                                        {
                                          "label": "dt",
                                          "value": "dt"
                                        },
                                        {
                                          "label": "em",
                                          "value": "em"
                                        },
                                        {
                                          "label": "embed",
                                          "value": "embed"
                                        },
                                        {
                                          "label": "fieldset",
                                          "value": "fieldset"
                                        },
                                        {
                                          "label": "figcaption",
                                          "value": "figcaption"
                                        },
                                        {
                                          "label": "figure",
                                          "value": "figure"
                                        },
                                        {
                                          "label": "footer",
                                          "value": "footer"
                                        },
                                        {
                                          "label": "form",
                                          "value": "form"
                                        },
                                        {
                                          "label": "h1",
                                          "value": "h1"
                                        },
                                        {
                                          "label": "h2",
                                          "value": "h2"
                                        },
                                        {
                                          "label": "h3",
                                          "value": "h3"
                                        },
                                        {
                                          "label": "h4",
                                          "value": "h4"
                                        },
                                        {
                                          "label": "h5",
                                          "value": "h5"
                                        },
                                        {
                                          "label": "h6",
                                          "value": "h6"
                                        },
                                        {
                                          "label": "head",
                                          "value": "head"
                                        },
                                        {
                                          "label": "header",
                                          "value": "header"
                                        },
                                        {
                                          "label": "hgroup",
                                          "value": "hgroup"
                                        },
                                        {
                                          "label": "hr",
                                          "value": "hr"
                                        },
                                        {
                                          "label": "html",
                                          "value": "html"
                                        },
                                        {
                                          "label": "i",
                                          "value": "i"
                                        },
                                        {
                                          "label": "iframe",
                                          "value": "iframe"
                                        },
                                        {
                                          "label": "img",
                                          "value": "img"
                                        },
                                        {
                                          "label": "input",
                                          "value": "input"
                                        },
                                        {
                                          "label": "ins",
                                          "value": "ins"
                                        },
                                        {
                                          "label": "kbd",
                                          "value": "kbd"
                                        },
                                        {
                                          "label": "keygen",
                                          "value": "keygen"
                                        },
                                        {
                                          "label": "label",
                                          "value": "label"
                                        },
                                        {
                                          "label": "legend",
                                          "value": "legend"
                                        },
                                        {
                                          "label": "li",
                                          "value": "li"
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
                                          "label": "map",
                                          "value": "map"
                                        },
                                        {
                                          "label": "mark",
                                          "value": "mark"
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
                                          "label": "meta",
                                          "value": "meta"
                                        },
                                        {
                                          "label": "meter",
                                          "value": "meter"
                                        },
                                        {
                                          "label": "nav",
                                          "value": "nav"
                                        },
                                        {
                                          "label": "noscript",
                                          "value": "noscript"
                                        },
                                        {
                                          "label": "ol",
                                          "value": "ol"
                                        },
                                        {
                                          "label": "optgroup",
                                          "value": "optgroup"
                                        },
                                        {
                                          "label": "option",
                                          "value": "option"
                                        },
                                        {
                                          "label": "output",
                                          "value": "output"
                                        },
                                        {
                                          "label": "p",
                                          "value": "p"
                                        },
                                        {
                                          "label": "param",
                                          "value": "param"
                                        },
                                        {
                                          "label": "picture",
                                          "value": "picture"
                                        },
                                        {
                                          "label": "pre",
                                          "value": "pre"
                                        },
                                        {
                                          "label": "progress",
                                          "value": "progress"
                                        },
                                        {
                                          "label": "q",
                                          "value": "q"
                                        },
                                        {
                                          "label": "rp",
                                          "value": "rp"
                                        },
                                        {
                                          "label": "rt",
                                          "value": "rt"
                                        },
                                        {
                                          "label": "ruby",
                                          "value": "ruby"
                                        },
                                        {
                                          "label": "s",
                                          "value": "s"
                                        },
                                        {
                                          "label": "samp",
                                          "value": "samp"
                                        },
                                        {
                                          "label": "slot",
                                          "value": "slot"
                                        },
                                        {
                                          "label": "script",
                                          "value": "script"
                                        },
                                        {
                                          "label": "section",
                                          "value": "section"
                                        },
                                        {
                                          "label": "select",
                                          "value": "select"
                                        },
                                        {
                                          "label": "small",
                                          "value": "small"
                                        },
                                        {
                                          "label": "source",
                                          "value": "source"
                                        },
                                        {
                                          "label": "span",
                                          "value": "span"
                                        },
                                        {
                                          "label": "strong",
                                          "value": "strong"
                                        },
                                        {
                                          "label": "style",
                                          "value": "style"
                                        },
                                        {
                                          "label": "sub",
                                          "value": "sub"
                                        },
                                        {
                                          "label": "summary",
                                          "value": "summary"
                                        },
                                        {
                                          "label": "sup",
                                          "value": "sup"
                                        },
                                        {
                                          "label": "table",
                                          "value": "table"
                                        },
                                        {
                                          "label": "template",
                                          "value": "template"
                                        },
                                        {
                                          "label": "tbody",
                                          "value": "tbody"
                                        },
                                        {
                                          "label": "td",
                                          "value": "td"
                                        },
                                        {
                                          "label": "textarea",
                                          "value": "textarea"
                                        },
                                        {
                                          "label": "tfoot",
                                          "value": "tfoot"
                                        },
                                        {
                                          "label": "th",
                                          "value": "th"
                                        },
                                        {
                                          "label": "thead",
                                          "value": "thead"
                                        },
                                        {
                                          "label": "time",
                                          "value": "time"
                                        },
                                        {
                                          "label": "title",
                                          "value": "title"
                                        },
                                        {
                                          "label": "tr",
                                          "value": "tr"
                                        },
                                        {
                                          "label": "track",
                                          "value": "track"
                                        },
                                        {
                                          "label": "u",
                                          "value": "u"
                                        },
                                        {
                                          "label": "ul",
                                          "value": "ul"
                                        },
                                        {
                                          "label": "var",
                                          "value": "var"
                                        },
                                        {
                                          "label": "video",
                                          "value": "video"
                                        },
                                        {
                                          "label": "wbr",
                                          "value": "wbr"
                                        },
                                        {
                                          "label": "webview",
                                          "value": "webview"
                                        }
                                      ],
                                      "options": [
                                        {
                                          "label": "object",
                                          "value": "object"
                                        },
                                        {
                                          "label": "a",
                                          "value": "a"
                                        },
                                        {
                                          "label": "abbr",
                                          "value": "abbr"
                                        },
                                        {
                                          "label": "address",
                                          "value": "address"
                                        },
                                        {
                                          "label": "area",
                                          "value": "area"
                                        },
                                        {
                                          "label": "article",
                                          "value": "article"
                                        },
                                        {
                                          "label": "aside",
                                          "value": "aside"
                                        },
                                        {
                                          "label": "audio",
                                          "value": "audio"
                                        },
                                        {
                                          "label": "b",
                                          "value": "b"
                                        },
                                        {
                                          "label": "base",
                                          "value": "base"
                                        },
                                        {
                                          "label": "bdi",
                                          "value": "bdi"
                                        },
                                        {
                                          "label": "bdo",
                                          "value": "bdo"
                                        },
                                        {
                                          "label": "big",
                                          "value": "big"
                                        },
                                        {
                                          "label": "blockquote",
                                          "value": "blockquote"
                                        },
                                        {
                                          "label": "body",
                                          "value": "body"
                                        },
                                        {
                                          "label": "br",
                                          "value": "br"
                                        },
                                        {
                                          "label": "button",
                                          "value": "button"
                                        },
                                        {
                                          "label": "canvas",
                                          "value": "canvas"
                                        },
                                        {
                                          "label": "caption",
                                          "value": "caption"
                                        },
                                        {
                                          "label": "cite",
                                          "value": "cite"
                                        },
                                        {
                                          "label": "code",
                                          "value": "code"
                                        },
                                        {
                                          "label": "col",
                                          "value": "col"
                                        },
                                        {
                                          "label": "colgroup",
                                          "value": "colgroup"
                                        },
                                        {
                                          "label": "data",
                                          "value": "data"
                                        },
                                        {
                                          "label": "datalist",
                                          "value": "datalist"
                                        },
                                        {
                                          "label": "dd",
                                          "value": "dd"
                                        },
                                        {
                                          "label": "del",
                                          "value": "del"
                                        },
                                        {
                                          "label": "details",
                                          "value": "details"
                                        },
                                        {
                                          "label": "dfn",
                                          "value": "dfn"
                                        },
                                        {
                                          "label": "dialog",
                                          "value": "dialog"
                                        },
                                        {
                                          "label": "div",
                                          "value": "div"
                                        },
                                        {
                                          "label": "dl",
                                          "value": "dl"
                                        },
                                        {
                                          "label": "dt",
                                          "value": "dt"
                                        },
                                        {
                                          "label": "em",
                                          "value": "em"
                                        },
                                        {
                                          "label": "embed",
                                          "value": "embed"
                                        },
                                        {
                                          "label": "fieldset",
                                          "value": "fieldset"
                                        },
                                        {
                                          "label": "figcaption",
                                          "value": "figcaption"
                                        },
                                        {
                                          "label": "figure",
                                          "value": "figure"
                                        },
                                        {
                                          "label": "footer",
                                          "value": "footer"
                                        },
                                        {
                                          "label": "form",
                                          "value": "form"
                                        },
                                        {
                                          "label": "h1",
                                          "value": "h1"
                                        },
                                        {
                                          "label": "h2",
                                          "value": "h2"
                                        },
                                        {
                                          "label": "h3",
                                          "value": "h3"
                                        },
                                        {
                                          "label": "h4",
                                          "value": "h4"
                                        },
                                        {
                                          "label": "h5",
                                          "value": "h5"
                                        },
                                        {
                                          "label": "h6",
                                          "value": "h6"
                                        },
                                        {
                                          "label": "head",
                                          "value": "head"
                                        },
                                        {
                                          "label": "header",
                                          "value": "header"
                                        },
                                        {
                                          "label": "hgroup",
                                          "value": "hgroup"
                                        },
                                        {
                                          "label": "hr",
                                          "value": "hr"
                                        },
                                        {
                                          "label": "html",
                                          "value": "html"
                                        },
                                        {
                                          "label": "i",
                                          "value": "i"
                                        },
                                        {
                                          "label": "iframe",
                                          "value": "iframe"
                                        },
                                        {
                                          "label": "img",
                                          "value": "img"
                                        },
                                        {
                                          "label": "input",
                                          "value": "input"
                                        },
                                        {
                                          "label": "ins",
                                          "value": "ins"
                                        },
                                        {
                                          "label": "kbd",
                                          "value": "kbd"
                                        },
                                        {
                                          "label": "keygen",
                                          "value": "keygen"
                                        },
                                        {
                                          "label": "label",
                                          "value": "label"
                                        },
                                        {
                                          "label": "legend",
                                          "value": "legend"
                                        },
                                        {
                                          "label": "li",
                                          "value": "li"
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
                                          "label": "map",
                                          "value": "map"
                                        },
                                        {
                                          "label": "mark",
                                          "value": "mark"
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
                                          "label": "meta",
                                          "value": "meta"
                                        },
                                        {
                                          "label": "meter",
                                          "value": "meter"
                                        },
                                        {
                                          "label": "nav",
                                          "value": "nav"
                                        },
                                        {
                                          "label": "noscript",
                                          "value": "noscript"
                                        },
                                        {
                                          "label": "ol",
                                          "value": "ol"
                                        },
                                        {
                                          "label": "optgroup",
                                          "value": "optgroup"
                                        },
                                        {
                                          "label": "option",
                                          "value": "option"
                                        },
                                        {
                                          "label": "output",
                                          "value": "output"
                                        },
                                        {
                                          "label": "p",
                                          "value": "p"
                                        },
                                        {
                                          "label": "param",
                                          "value": "param"
                                        },
                                        {
                                          "label": "picture",
                                          "value": "picture"
                                        },
                                        {
                                          "label": "pre",
                                          "value": "pre"
                                        },
                                        {
                                          "label": "progress",
                                          "value": "progress"
                                        },
                                        {
                                          "label": "q",
                                          "value": "q"
                                        },
                                        {
                                          "label": "rp",
                                          "value": "rp"
                                        },
                                        {
                                          "label": "rt",
                                          "value": "rt"
                                        },
                                        {
                                          "label": "ruby",
                                          "value": "ruby"
                                        },
                                        {
                                          "label": "s",
                                          "value": "s"
                                        },
                                        {
                                          "label": "samp",
                                          "value": "samp"
                                        },
                                        {
                                          "label": "slot",
                                          "value": "slot"
                                        },
                                        {
                                          "label": "script",
                                          "value": "script"
                                        },
                                        {
                                          "label": "section",
                                          "value": "section"
                                        },
                                        {
                                          "label": "select",
                                          "value": "select"
                                        },
                                        {
                                          "label": "small",
                                          "value": "small"
                                        },
                                        {
                                          "label": "source",
                                          "value": "source"
                                        },
                                        {
                                          "label": "span",
                                          "value": "span"
                                        },
                                        {
                                          "label": "strong",
                                          "value": "strong"
                                        },
                                        {
                                          "label": "style",
                                          "value": "style"
                                        },
                                        {
                                          "label": "sub",
                                          "value": "sub"
                                        },
                                        {
                                          "label": "summary",
                                          "value": "summary"
                                        },
                                        {
                                          "label": "sup",
                                          "value": "sup"
                                        },
                                        {
                                          "label": "table",
                                          "value": "table"
                                        },
                                        {
                                          "label": "template",
                                          "value": "template"
                                        },
                                        {
                                          "label": "tbody",
                                          "value": "tbody"
                                        },
                                        {
                                          "label": "td",
                                          "value": "td"
                                        },
                                        {
                                          "label": "textarea",
                                          "value": "textarea"
                                        },
                                        {
                                          "label": "tfoot",
                                          "value": "tfoot"
                                        },
                                        {
                                          "label": "th",
                                          "value": "th"
                                        },
                                        {
                                          "label": "thead",
                                          "value": "thead"
                                        },
                                        {
                                          "label": "time",
                                          "value": "time"
                                        },
                                        {
                                          "label": "title",
                                          "value": "title"
                                        },
                                        {
                                          "label": "tr",
                                          "value": "tr"
                                        },
                                        {
                                          "label": "track",
                                          "value": "track"
                                        },
                                        {
                                          "label": "u",
                                          "value": "u"
                                        },
                                        {
                                          "label": "ul",
                                          "value": "ul"
                                        },
                                        {
                                          "label": "var",
                                          "value": "var"
                                        },
                                        {
                                          "label": "video",
                                          "value": "video"
                                        },
                                        {
                                          "label": "wbr",
                                          "value": "wbr"
                                        },
                                        {
                                          "label": "webview",
                                          "value": "webview"
                                        }
                                      ]
                                    },
                                    "initialValue": "object"
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "cell",
                                "zh-CN": "cell"
                              }
                            },
                            "name": "cell",
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
                                          "label": "object",
                                          "value": "object"
                                        },
                                        {
                                          "label": "a",
                                          "value": "a"
                                        },
                                        {
                                          "label": "abbr",
                                          "value": "abbr"
                                        },
                                        {
                                          "label": "address",
                                          "value": "address"
                                        },
                                        {
                                          "label": "area",
                                          "value": "area"
                                        },
                                        {
                                          "label": "article",
                                          "value": "article"
                                        },
                                        {
                                          "label": "aside",
                                          "value": "aside"
                                        },
                                        {
                                          "label": "audio",
                                          "value": "audio"
                                        },
                                        {
                                          "label": "b",
                                          "value": "b"
                                        },
                                        {
                                          "label": "base",
                                          "value": "base"
                                        },
                                        {
                                          "label": "bdi",
                                          "value": "bdi"
                                        },
                                        {
                                          "label": "bdo",
                                          "value": "bdo"
                                        },
                                        {
                                          "label": "big",
                                          "value": "big"
                                        },
                                        {
                                          "label": "blockquote",
                                          "value": "blockquote"
                                        },
                                        {
                                          "label": "body",
                                          "value": "body"
                                        },
                                        {
                                          "label": "br",
                                          "value": "br"
                                        },
                                        {
                                          "label": "button",
                                          "value": "button"
                                        },
                                        {
                                          "label": "canvas",
                                          "value": "canvas"
                                        },
                                        {
                                          "label": "caption",
                                          "value": "caption"
                                        },
                                        {
                                          "label": "cite",
                                          "value": "cite"
                                        },
                                        {
                                          "label": "code",
                                          "value": "code"
                                        },
                                        {
                                          "label": "col",
                                          "value": "col"
                                        },
                                        {
                                          "label": "colgroup",
                                          "value": "colgroup"
                                        },
                                        {
                                          "label": "data",
                                          "value": "data"
                                        },
                                        {
                                          "label": "datalist",
                                          "value": "datalist"
                                        },
                                        {
                                          "label": "dd",
                                          "value": "dd"
                                        },
                                        {
                                          "label": "del",
                                          "value": "del"
                                        },
                                        {
                                          "label": "details",
                                          "value": "details"
                                        },
                                        {
                                          "label": "dfn",
                                          "value": "dfn"
                                        },
                                        {
                                          "label": "dialog",
                                          "value": "dialog"
                                        },
                                        {
                                          "label": "div",
                                          "value": "div"
                                        },
                                        {
                                          "label": "dl",
                                          "value": "dl"
                                        },
                                        {
                                          "label": "dt",
                                          "value": "dt"
                                        },
                                        {
                                          "label": "em",
                                          "value": "em"
                                        },
                                        {
                                          "label": "embed",
                                          "value": "embed"
                                        },
                                        {
                                          "label": "fieldset",
                                          "value": "fieldset"
                                        },
                                        {
                                          "label": "figcaption",
                                          "value": "figcaption"
                                        },
                                        {
                                          "label": "figure",
                                          "value": "figure"
                                        },
                                        {
                                          "label": "footer",
                                          "value": "footer"
                                        },
                                        {
                                          "label": "form",
                                          "value": "form"
                                        },
                                        {
                                          "label": "h1",
                                          "value": "h1"
                                        },
                                        {
                                          "label": "h2",
                                          "value": "h2"
                                        },
                                        {
                                          "label": "h3",
                                          "value": "h3"
                                        },
                                        {
                                          "label": "h4",
                                          "value": "h4"
                                        },
                                        {
                                          "label": "h5",
                                          "value": "h5"
                                        },
                                        {
                                          "label": "h6",
                                          "value": "h6"
                                        },
                                        {
                                          "label": "head",
                                          "value": "head"
                                        },
                                        {
                                          "label": "header",
                                          "value": "header"
                                        },
                                        {
                                          "label": "hgroup",
                                          "value": "hgroup"
                                        },
                                        {
                                          "label": "hr",
                                          "value": "hr"
                                        },
                                        {
                                          "label": "html",
                                          "value": "html"
                                        },
                                        {
                                          "label": "i",
                                          "value": "i"
                                        },
                                        {
                                          "label": "iframe",
                                          "value": "iframe"
                                        },
                                        {
                                          "label": "img",
                                          "value": "img"
                                        },
                                        {
                                          "label": "input",
                                          "value": "input"
                                        },
                                        {
                                          "label": "ins",
                                          "value": "ins"
                                        },
                                        {
                                          "label": "kbd",
                                          "value": "kbd"
                                        },
                                        {
                                          "label": "keygen",
                                          "value": "keygen"
                                        },
                                        {
                                          "label": "label",
                                          "value": "label"
                                        },
                                        {
                                          "label": "legend",
                                          "value": "legend"
                                        },
                                        {
                                          "label": "li",
                                          "value": "li"
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
                                          "label": "map",
                                          "value": "map"
                                        },
                                        {
                                          "label": "mark",
                                          "value": "mark"
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
                                          "label": "meta",
                                          "value": "meta"
                                        },
                                        {
                                          "label": "meter",
                                          "value": "meter"
                                        },
                                        {
                                          "label": "nav",
                                          "value": "nav"
                                        },
                                        {
                                          "label": "noscript",
                                          "value": "noscript"
                                        },
                                        {
                                          "label": "ol",
                                          "value": "ol"
                                        },
                                        {
                                          "label": "optgroup",
                                          "value": "optgroup"
                                        },
                                        {
                                          "label": "option",
                                          "value": "option"
                                        },
                                        {
                                          "label": "output",
                                          "value": "output"
                                        },
                                        {
                                          "label": "p",
                                          "value": "p"
                                        },
                                        {
                                          "label": "param",
                                          "value": "param"
                                        },
                                        {
                                          "label": "picture",
                                          "value": "picture"
                                        },
                                        {
                                          "label": "pre",
                                          "value": "pre"
                                        },
                                        {
                                          "label": "progress",
                                          "value": "progress"
                                        },
                                        {
                                          "label": "q",
                                          "value": "q"
                                        },
                                        {
                                          "label": "rp",
                                          "value": "rp"
                                        },
                                        {
                                          "label": "rt",
                                          "value": "rt"
                                        },
                                        {
                                          "label": "ruby",
                                          "value": "ruby"
                                        },
                                        {
                                          "label": "s",
                                          "value": "s"
                                        },
                                        {
                                          "label": "samp",
                                          "value": "samp"
                                        },
                                        {
                                          "label": "slot",
                                          "value": "slot"
                                        },
                                        {
                                          "label": "script",
                                          "value": "script"
                                        },
                                        {
                                          "label": "section",
                                          "value": "section"
                                        },
                                        {
                                          "label": "select",
                                          "value": "select"
                                        },
                                        {
                                          "label": "small",
                                          "value": "small"
                                        },
                                        {
                                          "label": "source",
                                          "value": "source"
                                        },
                                        {
                                          "label": "span",
                                          "value": "span"
                                        },
                                        {
                                          "label": "strong",
                                          "value": "strong"
                                        },
                                        {
                                          "label": "style",
                                          "value": "style"
                                        },
                                        {
                                          "label": "sub",
                                          "value": "sub"
                                        },
                                        {
                                          "label": "summary",
                                          "value": "summary"
                                        },
                                        {
                                          "label": "sup",
                                          "value": "sup"
                                        },
                                        {
                                          "label": "table",
                                          "value": "table"
                                        },
                                        {
                                          "label": "template",
                                          "value": "template"
                                        },
                                        {
                                          "label": "tbody",
                                          "value": "tbody"
                                        },
                                        {
                                          "label": "td",
                                          "value": "td"
                                        },
                                        {
                                          "label": "textarea",
                                          "value": "textarea"
                                        },
                                        {
                                          "label": "tfoot",
                                          "value": "tfoot"
                                        },
                                        {
                                          "label": "th",
                                          "value": "th"
                                        },
                                        {
                                          "label": "thead",
                                          "value": "thead"
                                        },
                                        {
                                          "label": "time",
                                          "value": "time"
                                        },
                                        {
                                          "label": "title",
                                          "value": "title"
                                        },
                                        {
                                          "label": "tr",
                                          "value": "tr"
                                        },
                                        {
                                          "label": "track",
                                          "value": "track"
                                        },
                                        {
                                          "label": "u",
                                          "value": "u"
                                        },
                                        {
                                          "label": "ul",
                                          "value": "ul"
                                        },
                                        {
                                          "label": "var",
                                          "value": "var"
                                        },
                                        {
                                          "label": "video",
                                          "value": "video"
                                        },
                                        {
                                          "label": "wbr",
                                          "value": "wbr"
                                        },
                                        {
                                          "label": "webview",
                                          "value": "webview"
                                        }
                                      ],
                                      "options": [
                                        {
                                          "label": "object",
                                          "value": "object"
                                        },
                                        {
                                          "label": "a",
                                          "value": "a"
                                        },
                                        {
                                          "label": "abbr",
                                          "value": "abbr"
                                        },
                                        {
                                          "label": "address",
                                          "value": "address"
                                        },
                                        {
                                          "label": "area",
                                          "value": "area"
                                        },
                                        {
                                          "label": "article",
                                          "value": "article"
                                        },
                                        {
                                          "label": "aside",
                                          "value": "aside"
                                        },
                                        {
                                          "label": "audio",
                                          "value": "audio"
                                        },
                                        {
                                          "label": "b",
                                          "value": "b"
                                        },
                                        {
                                          "label": "base",
                                          "value": "base"
                                        },
                                        {
                                          "label": "bdi",
                                          "value": "bdi"
                                        },
                                        {
                                          "label": "bdo",
                                          "value": "bdo"
                                        },
                                        {
                                          "label": "big",
                                          "value": "big"
                                        },
                                        {
                                          "label": "blockquote",
                                          "value": "blockquote"
                                        },
                                        {
                                          "label": "body",
                                          "value": "body"
                                        },
                                        {
                                          "label": "br",
                                          "value": "br"
                                        },
                                        {
                                          "label": "button",
                                          "value": "button"
                                        },
                                        {
                                          "label": "canvas",
                                          "value": "canvas"
                                        },
                                        {
                                          "label": "caption",
                                          "value": "caption"
                                        },
                                        {
                                          "label": "cite",
                                          "value": "cite"
                                        },
                                        {
                                          "label": "code",
                                          "value": "code"
                                        },
                                        {
                                          "label": "col",
                                          "value": "col"
                                        },
                                        {
                                          "label": "colgroup",
                                          "value": "colgroup"
                                        },
                                        {
                                          "label": "data",
                                          "value": "data"
                                        },
                                        {
                                          "label": "datalist",
                                          "value": "datalist"
                                        },
                                        {
                                          "label": "dd",
                                          "value": "dd"
                                        },
                                        {
                                          "label": "del",
                                          "value": "del"
                                        },
                                        {
                                          "label": "details",
                                          "value": "details"
                                        },
                                        {
                                          "label": "dfn",
                                          "value": "dfn"
                                        },
                                        {
                                          "label": "dialog",
                                          "value": "dialog"
                                        },
                                        {
                                          "label": "div",
                                          "value": "div"
                                        },
                                        {
                                          "label": "dl",
                                          "value": "dl"
                                        },
                                        {
                                          "label": "dt",
                                          "value": "dt"
                                        },
                                        {
                                          "label": "em",
                                          "value": "em"
                                        },
                                        {
                                          "label": "embed",
                                          "value": "embed"
                                        },
                                        {
                                          "label": "fieldset",
                                          "value": "fieldset"
                                        },
                                        {
                                          "label": "figcaption",
                                          "value": "figcaption"
                                        },
                                        {
                                          "label": "figure",
                                          "value": "figure"
                                        },
                                        {
                                          "label": "footer",
                                          "value": "footer"
                                        },
                                        {
                                          "label": "form",
                                          "value": "form"
                                        },
                                        {
                                          "label": "h1",
                                          "value": "h1"
                                        },
                                        {
                                          "label": "h2",
                                          "value": "h2"
                                        },
                                        {
                                          "label": "h3",
                                          "value": "h3"
                                        },
                                        {
                                          "label": "h4",
                                          "value": "h4"
                                        },
                                        {
                                          "label": "h5",
                                          "value": "h5"
                                        },
                                        {
                                          "label": "h6",
                                          "value": "h6"
                                        },
                                        {
                                          "label": "head",
                                          "value": "head"
                                        },
                                        {
                                          "label": "header",
                                          "value": "header"
                                        },
                                        {
                                          "label": "hgroup",
                                          "value": "hgroup"
                                        },
                                        {
                                          "label": "hr",
                                          "value": "hr"
                                        },
                                        {
                                          "label": "html",
                                          "value": "html"
                                        },
                                        {
                                          "label": "i",
                                          "value": "i"
                                        },
                                        {
                                          "label": "iframe",
                                          "value": "iframe"
                                        },
                                        {
                                          "label": "img",
                                          "value": "img"
                                        },
                                        {
                                          "label": "input",
                                          "value": "input"
                                        },
                                        {
                                          "label": "ins",
                                          "value": "ins"
                                        },
                                        {
                                          "label": "kbd",
                                          "value": "kbd"
                                        },
                                        {
                                          "label": "keygen",
                                          "value": "keygen"
                                        },
                                        {
                                          "label": "label",
                                          "value": "label"
                                        },
                                        {
                                          "label": "legend",
                                          "value": "legend"
                                        },
                                        {
                                          "label": "li",
                                          "value": "li"
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
                                          "label": "map",
                                          "value": "map"
                                        },
                                        {
                                          "label": "mark",
                                          "value": "mark"
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
                                          "label": "meta",
                                          "value": "meta"
                                        },
                                        {
                                          "label": "meter",
                                          "value": "meter"
                                        },
                                        {
                                          "label": "nav",
                                          "value": "nav"
                                        },
                                        {
                                          "label": "noscript",
                                          "value": "noscript"
                                        },
                                        {
                                          "label": "ol",
                                          "value": "ol"
                                        },
                                        {
                                          "label": "optgroup",
                                          "value": "optgroup"
                                        },
                                        {
                                          "label": "option",
                                          "value": "option"
                                        },
                                        {
                                          "label": "output",
                                          "value": "output"
                                        },
                                        {
                                          "label": "p",
                                          "value": "p"
                                        },
                                        {
                                          "label": "param",
                                          "value": "param"
                                        },
                                        {
                                          "label": "picture",
                                          "value": "picture"
                                        },
                                        {
                                          "label": "pre",
                                          "value": "pre"
                                        },
                                        {
                                          "label": "progress",
                                          "value": "progress"
                                        },
                                        {
                                          "label": "q",
                                          "value": "q"
                                        },
                                        {
                                          "label": "rp",
                                          "value": "rp"
                                        },
                                        {
                                          "label": "rt",
                                          "value": "rt"
                                        },
                                        {
                                          "label": "ruby",
                                          "value": "ruby"
                                        },
                                        {
                                          "label": "s",
                                          "value": "s"
                                        },
                                        {
                                          "label": "samp",
                                          "value": "samp"
                                        },
                                        {
                                          "label": "slot",
                                          "value": "slot"
                                        },
                                        {
                                          "label": "script",
                                          "value": "script"
                                        },
                                        {
                                          "label": "section",
                                          "value": "section"
                                        },
                                        {
                                          "label": "select",
                                          "value": "select"
                                        },
                                        {
                                          "label": "small",
                                          "value": "small"
                                        },
                                        {
                                          "label": "source",
                                          "value": "source"
                                        },
                                        {
                                          "label": "span",
                                          "value": "span"
                                        },
                                        {
                                          "label": "strong",
                                          "value": "strong"
                                        },
                                        {
                                          "label": "style",
                                          "value": "style"
                                        },
                                        {
                                          "label": "sub",
                                          "value": "sub"
                                        },
                                        {
                                          "label": "summary",
                                          "value": "summary"
                                        },
                                        {
                                          "label": "sup",
                                          "value": "sup"
                                        },
                                        {
                                          "label": "table",
                                          "value": "table"
                                        },
                                        {
                                          "label": "template",
                                          "value": "template"
                                        },
                                        {
                                          "label": "tbody",
                                          "value": "tbody"
                                        },
                                        {
                                          "label": "td",
                                          "value": "td"
                                        },
                                        {
                                          "label": "textarea",
                                          "value": "textarea"
                                        },
                                        {
                                          "label": "tfoot",
                                          "value": "tfoot"
                                        },
                                        {
                                          "label": "th",
                                          "value": "th"
                                        },
                                        {
                                          "label": "thead",
                                          "value": "thead"
                                        },
                                        {
                                          "label": "time",
                                          "value": "time"
                                        },
                                        {
                                          "label": "title",
                                          "value": "title"
                                        },
                                        {
                                          "label": "tr",
                                          "value": "tr"
                                        },
                                        {
                                          "label": "track",
                                          "value": "track"
                                        },
                                        {
                                          "label": "u",
                                          "value": "u"
                                        },
                                        {
                                          "label": "ul",
                                          "value": "ul"
                                        },
                                        {
                                          "label": "var",
                                          "value": "var"
                                        },
                                        {
                                          "label": "video",
                                          "value": "video"
                                        },
                                        {
                                          "label": "wbr",
                                          "value": "wbr"
                                        },
                                        {
                                          "label": "webview",
                                          "value": "webview"
                                        }
                                      ]
                                    },
                                    "initialValue": "object"
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
                      "en-US": "body",
                      "zh-CN": "body"
                    }
                  },
                  "name": "body",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "FunctionSetter",
                          "isRequired": false
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
                                      "en-US": "wrapper",
                                      "zh-CN": "wrapper"
                                    }
                                  },
                                  "name": "wrapper",
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
                                                "label": "object",
                                                "value": "object"
                                              },
                                              {
                                                "label": "a",
                                                "value": "a"
                                              },
                                              {
                                                "label": "abbr",
                                                "value": "abbr"
                                              },
                                              {
                                                "label": "address",
                                                "value": "address"
                                              },
                                              {
                                                "label": "area",
                                                "value": "area"
                                              },
                                              {
                                                "label": "article",
                                                "value": "article"
                                              },
                                              {
                                                "label": "aside",
                                                "value": "aside"
                                              },
                                              {
                                                "label": "audio",
                                                "value": "audio"
                                              },
                                              {
                                                "label": "b",
                                                "value": "b"
                                              },
                                              {
                                                "label": "base",
                                                "value": "base"
                                              },
                                              {
                                                "label": "bdi",
                                                "value": "bdi"
                                              },
                                              {
                                                "label": "bdo",
                                                "value": "bdo"
                                              },
                                              {
                                                "label": "big",
                                                "value": "big"
                                              },
                                              {
                                                "label": "blockquote",
                                                "value": "blockquote"
                                              },
                                              {
                                                "label": "body",
                                                "value": "body"
                                              },
                                              {
                                                "label": "br",
                                                "value": "br"
                                              },
                                              {
                                                "label": "button",
                                                "value": "button"
                                              },
                                              {
                                                "label": "canvas",
                                                "value": "canvas"
                                              },
                                              {
                                                "label": "caption",
                                                "value": "caption"
                                              },
                                              {
                                                "label": "cite",
                                                "value": "cite"
                                              },
                                              {
                                                "label": "code",
                                                "value": "code"
                                              },
                                              {
                                                "label": "col",
                                                "value": "col"
                                              },
                                              {
                                                "label": "colgroup",
                                                "value": "colgroup"
                                              },
                                              {
                                                "label": "data",
                                                "value": "data"
                                              },
                                              {
                                                "label": "datalist",
                                                "value": "datalist"
                                              },
                                              {
                                                "label": "dd",
                                                "value": "dd"
                                              },
                                              {
                                                "label": "del",
                                                "value": "del"
                                              },
                                              {
                                                "label": "details",
                                                "value": "details"
                                              },
                                              {
                                                "label": "dfn",
                                                "value": "dfn"
                                              },
                                              {
                                                "label": "dialog",
                                                "value": "dialog"
                                              },
                                              {
                                                "label": "div",
                                                "value": "div"
                                              },
                                              {
                                                "label": "dl",
                                                "value": "dl"
                                              },
                                              {
                                                "label": "dt",
                                                "value": "dt"
                                              },
                                              {
                                                "label": "em",
                                                "value": "em"
                                              },
                                              {
                                                "label": "embed",
                                                "value": "embed"
                                              },
                                              {
                                                "label": "fieldset",
                                                "value": "fieldset"
                                              },
                                              {
                                                "label": "figcaption",
                                                "value": "figcaption"
                                              },
                                              {
                                                "label": "figure",
                                                "value": "figure"
                                              },
                                              {
                                                "label": "footer",
                                                "value": "footer"
                                              },
                                              {
                                                "label": "form",
                                                "value": "form"
                                              },
                                              {
                                                "label": "h1",
                                                "value": "h1"
                                              },
                                              {
                                                "label": "h2",
                                                "value": "h2"
                                              },
                                              {
                                                "label": "h3",
                                                "value": "h3"
                                              },
                                              {
                                                "label": "h4",
                                                "value": "h4"
                                              },
                                              {
                                                "label": "h5",
                                                "value": "h5"
                                              },
                                              {
                                                "label": "h6",
                                                "value": "h6"
                                              },
                                              {
                                                "label": "head",
                                                "value": "head"
                                              },
                                              {
                                                "label": "header",
                                                "value": "header"
                                              },
                                              {
                                                "label": "hgroup",
                                                "value": "hgroup"
                                              },
                                              {
                                                "label": "hr",
                                                "value": "hr"
                                              },
                                              {
                                                "label": "html",
                                                "value": "html"
                                              },
                                              {
                                                "label": "i",
                                                "value": "i"
                                              },
                                              {
                                                "label": "iframe",
                                                "value": "iframe"
                                              },
                                              {
                                                "label": "img",
                                                "value": "img"
                                              },
                                              {
                                                "label": "input",
                                                "value": "input"
                                              },
                                              {
                                                "label": "ins",
                                                "value": "ins"
                                              },
                                              {
                                                "label": "kbd",
                                                "value": "kbd"
                                              },
                                              {
                                                "label": "keygen",
                                                "value": "keygen"
                                              },
                                              {
                                                "label": "label",
                                                "value": "label"
                                              },
                                              {
                                                "label": "legend",
                                                "value": "legend"
                                              },
                                              {
                                                "label": "li",
                                                "value": "li"
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
                                                "label": "map",
                                                "value": "map"
                                              },
                                              {
                                                "label": "mark",
                                                "value": "mark"
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
                                                "label": "meta",
                                                "value": "meta"
                                              },
                                              {
                                                "label": "meter",
                                                "value": "meter"
                                              },
                                              {
                                                "label": "nav",
                                                "value": "nav"
                                              },
                                              {
                                                "label": "noscript",
                                                "value": "noscript"
                                              },
                                              {
                                                "label": "ol",
                                                "value": "ol"
                                              },
                                              {
                                                "label": "optgroup",
                                                "value": "optgroup"
                                              },
                                              {
                                                "label": "option",
                                                "value": "option"
                                              },
                                              {
                                                "label": "output",
                                                "value": "output"
                                              },
                                              {
                                                "label": "p",
                                                "value": "p"
                                              },
                                              {
                                                "label": "param",
                                                "value": "param"
                                              },
                                              {
                                                "label": "picture",
                                                "value": "picture"
                                              },
                                              {
                                                "label": "pre",
                                                "value": "pre"
                                              },
                                              {
                                                "label": "progress",
                                                "value": "progress"
                                              },
                                              {
                                                "label": "q",
                                                "value": "q"
                                              },
                                              {
                                                "label": "rp",
                                                "value": "rp"
                                              },
                                              {
                                                "label": "rt",
                                                "value": "rt"
                                              },
                                              {
                                                "label": "ruby",
                                                "value": "ruby"
                                              },
                                              {
                                                "label": "s",
                                                "value": "s"
                                              },
                                              {
                                                "label": "samp",
                                                "value": "samp"
                                              },
                                              {
                                                "label": "slot",
                                                "value": "slot"
                                              },
                                              {
                                                "label": "script",
                                                "value": "script"
                                              },
                                              {
                                                "label": "section",
                                                "value": "section"
                                              },
                                              {
                                                "label": "select",
                                                "value": "select"
                                              },
                                              {
                                                "label": "small",
                                                "value": "small"
                                              },
                                              {
                                                "label": "source",
                                                "value": "source"
                                              },
                                              {
                                                "label": "span",
                                                "value": "span"
                                              },
                                              {
                                                "label": "strong",
                                                "value": "strong"
                                              },
                                              {
                                                "label": "style",
                                                "value": "style"
                                              },
                                              {
                                                "label": "sub",
                                                "value": "sub"
                                              },
                                              {
                                                "label": "summary",
                                                "value": "summary"
                                              },
                                              {
                                                "label": "sup",
                                                "value": "sup"
                                              },
                                              {
                                                "label": "table",
                                                "value": "table"
                                              },
                                              {
                                                "label": "template",
                                                "value": "template"
                                              },
                                              {
                                                "label": "tbody",
                                                "value": "tbody"
                                              },
                                              {
                                                "label": "td",
                                                "value": "td"
                                              },
                                              {
                                                "label": "textarea",
                                                "value": "textarea"
                                              },
                                              {
                                                "label": "tfoot",
                                                "value": "tfoot"
                                              },
                                              {
                                                "label": "th",
                                                "value": "th"
                                              },
                                              {
                                                "label": "thead",
                                                "value": "thead"
                                              },
                                              {
                                                "label": "time",
                                                "value": "time"
                                              },
                                              {
                                                "label": "title",
                                                "value": "title"
                                              },
                                              {
                                                "label": "tr",
                                                "value": "tr"
                                              },
                                              {
                                                "label": "track",
                                                "value": "track"
                                              },
                                              {
                                                "label": "u",
                                                "value": "u"
                                              },
                                              {
                                                "label": "ul",
                                                "value": "ul"
                                              },
                                              {
                                                "label": "var",
                                                "value": "var"
                                              },
                                              {
                                                "label": "video",
                                                "value": "video"
                                              },
                                              {
                                                "label": "wbr",
                                                "value": "wbr"
                                              },
                                              {
                                                "label": "webview",
                                                "value": "webview"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "object",
                                                "value": "object"
                                              },
                                              {
                                                "label": "a",
                                                "value": "a"
                                              },
                                              {
                                                "label": "abbr",
                                                "value": "abbr"
                                              },
                                              {
                                                "label": "address",
                                                "value": "address"
                                              },
                                              {
                                                "label": "area",
                                                "value": "area"
                                              },
                                              {
                                                "label": "article",
                                                "value": "article"
                                              },
                                              {
                                                "label": "aside",
                                                "value": "aside"
                                              },
                                              {
                                                "label": "audio",
                                                "value": "audio"
                                              },
                                              {
                                                "label": "b",
                                                "value": "b"
                                              },
                                              {
                                                "label": "base",
                                                "value": "base"
                                              },
                                              {
                                                "label": "bdi",
                                                "value": "bdi"
                                              },
                                              {
                                                "label": "bdo",
                                                "value": "bdo"
                                              },
                                              {
                                                "label": "big",
                                                "value": "big"
                                              },
                                              {
                                                "label": "blockquote",
                                                "value": "blockquote"
                                              },
                                              {
                                                "label": "body",
                                                "value": "body"
                                              },
                                              {
                                                "label": "br",
                                                "value": "br"
                                              },
                                              {
                                                "label": "button",
                                                "value": "button"
                                              },
                                              {
                                                "label": "canvas",
                                                "value": "canvas"
                                              },
                                              {
                                                "label": "caption",
                                                "value": "caption"
                                              },
                                              {
                                                "label": "cite",
                                                "value": "cite"
                                              },
                                              {
                                                "label": "code",
                                                "value": "code"
                                              },
                                              {
                                                "label": "col",
                                                "value": "col"
                                              },
                                              {
                                                "label": "colgroup",
                                                "value": "colgroup"
                                              },
                                              {
                                                "label": "data",
                                                "value": "data"
                                              },
                                              {
                                                "label": "datalist",
                                                "value": "datalist"
                                              },
                                              {
                                                "label": "dd",
                                                "value": "dd"
                                              },
                                              {
                                                "label": "del",
                                                "value": "del"
                                              },
                                              {
                                                "label": "details",
                                                "value": "details"
                                              },
                                              {
                                                "label": "dfn",
                                                "value": "dfn"
                                              },
                                              {
                                                "label": "dialog",
                                                "value": "dialog"
                                              },
                                              {
                                                "label": "div",
                                                "value": "div"
                                              },
                                              {
                                                "label": "dl",
                                                "value": "dl"
                                              },
                                              {
                                                "label": "dt",
                                                "value": "dt"
                                              },
                                              {
                                                "label": "em",
                                                "value": "em"
                                              },
                                              {
                                                "label": "embed",
                                                "value": "embed"
                                              },
                                              {
                                                "label": "fieldset",
                                                "value": "fieldset"
                                              },
                                              {
                                                "label": "figcaption",
                                                "value": "figcaption"
                                              },
                                              {
                                                "label": "figure",
                                                "value": "figure"
                                              },
                                              {
                                                "label": "footer",
                                                "value": "footer"
                                              },
                                              {
                                                "label": "form",
                                                "value": "form"
                                              },
                                              {
                                                "label": "h1",
                                                "value": "h1"
                                              },
                                              {
                                                "label": "h2",
                                                "value": "h2"
                                              },
                                              {
                                                "label": "h3",
                                                "value": "h3"
                                              },
                                              {
                                                "label": "h4",
                                                "value": "h4"
                                              },
                                              {
                                                "label": "h5",
                                                "value": "h5"
                                              },
                                              {
                                                "label": "h6",
                                                "value": "h6"
                                              },
                                              {
                                                "label": "head",
                                                "value": "head"
                                              },
                                              {
                                                "label": "header",
                                                "value": "header"
                                              },
                                              {
                                                "label": "hgroup",
                                                "value": "hgroup"
                                              },
                                              {
                                                "label": "hr",
                                                "value": "hr"
                                              },
                                              {
                                                "label": "html",
                                                "value": "html"
                                              },
                                              {
                                                "label": "i",
                                                "value": "i"
                                              },
                                              {
                                                "label": "iframe",
                                                "value": "iframe"
                                              },
                                              {
                                                "label": "img",
                                                "value": "img"
                                              },
                                              {
                                                "label": "input",
                                                "value": "input"
                                              },
                                              {
                                                "label": "ins",
                                                "value": "ins"
                                              },
                                              {
                                                "label": "kbd",
                                                "value": "kbd"
                                              },
                                              {
                                                "label": "keygen",
                                                "value": "keygen"
                                              },
                                              {
                                                "label": "label",
                                                "value": "label"
                                              },
                                              {
                                                "label": "legend",
                                                "value": "legend"
                                              },
                                              {
                                                "label": "li",
                                                "value": "li"
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
                                                "label": "map",
                                                "value": "map"
                                              },
                                              {
                                                "label": "mark",
                                                "value": "mark"
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
                                                "label": "meta",
                                                "value": "meta"
                                              },
                                              {
                                                "label": "meter",
                                                "value": "meter"
                                              },
                                              {
                                                "label": "nav",
                                                "value": "nav"
                                              },
                                              {
                                                "label": "noscript",
                                                "value": "noscript"
                                              },
                                              {
                                                "label": "ol",
                                                "value": "ol"
                                              },
                                              {
                                                "label": "optgroup",
                                                "value": "optgroup"
                                              },
                                              {
                                                "label": "option",
                                                "value": "option"
                                              },
                                              {
                                                "label": "output",
                                                "value": "output"
                                              },
                                              {
                                                "label": "p",
                                                "value": "p"
                                              },
                                              {
                                                "label": "param",
                                                "value": "param"
                                              },
                                              {
                                                "label": "picture",
                                                "value": "picture"
                                              },
                                              {
                                                "label": "pre",
                                                "value": "pre"
                                              },
                                              {
                                                "label": "progress",
                                                "value": "progress"
                                              },
                                              {
                                                "label": "q",
                                                "value": "q"
                                              },
                                              {
                                                "label": "rp",
                                                "value": "rp"
                                              },
                                              {
                                                "label": "rt",
                                                "value": "rt"
                                              },
                                              {
                                                "label": "ruby",
                                                "value": "ruby"
                                              },
                                              {
                                                "label": "s",
                                                "value": "s"
                                              },
                                              {
                                                "label": "samp",
                                                "value": "samp"
                                              },
                                              {
                                                "label": "slot",
                                                "value": "slot"
                                              },
                                              {
                                                "label": "script",
                                                "value": "script"
                                              },
                                              {
                                                "label": "section",
                                                "value": "section"
                                              },
                                              {
                                                "label": "select",
                                                "value": "select"
                                              },
                                              {
                                                "label": "small",
                                                "value": "small"
                                              },
                                              {
                                                "label": "source",
                                                "value": "source"
                                              },
                                              {
                                                "label": "span",
                                                "value": "span"
                                              },
                                              {
                                                "label": "strong",
                                                "value": "strong"
                                              },
                                              {
                                                "label": "style",
                                                "value": "style"
                                              },
                                              {
                                                "label": "sub",
                                                "value": "sub"
                                              },
                                              {
                                                "label": "summary",
                                                "value": "summary"
                                              },
                                              {
                                                "label": "sup",
                                                "value": "sup"
                                              },
                                              {
                                                "label": "table",
                                                "value": "table"
                                              },
                                              {
                                                "label": "template",
                                                "value": "template"
                                              },
                                              {
                                                "label": "tbody",
                                                "value": "tbody"
                                              },
                                              {
                                                "label": "td",
                                                "value": "td"
                                              },
                                              {
                                                "label": "textarea",
                                                "value": "textarea"
                                              },
                                              {
                                                "label": "tfoot",
                                                "value": "tfoot"
                                              },
                                              {
                                                "label": "th",
                                                "value": "th"
                                              },
                                              {
                                                "label": "thead",
                                                "value": "thead"
                                              },
                                              {
                                                "label": "time",
                                                "value": "time"
                                              },
                                              {
                                                "label": "title",
                                                "value": "title"
                                              },
                                              {
                                                "label": "tr",
                                                "value": "tr"
                                              },
                                              {
                                                "label": "track",
                                                "value": "track"
                                              },
                                              {
                                                "label": "u",
                                                "value": "u"
                                              },
                                              {
                                                "label": "ul",
                                                "value": "ul"
                                              },
                                              {
                                                "label": "var",
                                                "value": "var"
                                              },
                                              {
                                                "label": "video",
                                                "value": "video"
                                              },
                                              {
                                                "label": "wbr",
                                                "value": "wbr"
                                              },
                                              {
                                                "label": "webview",
                                                "value": "webview"
                                              }
                                            ]
                                          },
                                          "initialValue": "object"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "row",
                                      "zh-CN": "row"
                                    }
                                  },
                                  "name": "row",
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
                                                "label": "object",
                                                "value": "object"
                                              },
                                              {
                                                "label": "a",
                                                "value": "a"
                                              },
                                              {
                                                "label": "abbr",
                                                "value": "abbr"
                                              },
                                              {
                                                "label": "address",
                                                "value": "address"
                                              },
                                              {
                                                "label": "area",
                                                "value": "area"
                                              },
                                              {
                                                "label": "article",
                                                "value": "article"
                                              },
                                              {
                                                "label": "aside",
                                                "value": "aside"
                                              },
                                              {
                                                "label": "audio",
                                                "value": "audio"
                                              },
                                              {
                                                "label": "b",
                                                "value": "b"
                                              },
                                              {
                                                "label": "base",
                                                "value": "base"
                                              },
                                              {
                                                "label": "bdi",
                                                "value": "bdi"
                                              },
                                              {
                                                "label": "bdo",
                                                "value": "bdo"
                                              },
                                              {
                                                "label": "big",
                                                "value": "big"
                                              },
                                              {
                                                "label": "blockquote",
                                                "value": "blockquote"
                                              },
                                              {
                                                "label": "body",
                                                "value": "body"
                                              },
                                              {
                                                "label": "br",
                                                "value": "br"
                                              },
                                              {
                                                "label": "button",
                                                "value": "button"
                                              },
                                              {
                                                "label": "canvas",
                                                "value": "canvas"
                                              },
                                              {
                                                "label": "caption",
                                                "value": "caption"
                                              },
                                              {
                                                "label": "cite",
                                                "value": "cite"
                                              },
                                              {
                                                "label": "code",
                                                "value": "code"
                                              },
                                              {
                                                "label": "col",
                                                "value": "col"
                                              },
                                              {
                                                "label": "colgroup",
                                                "value": "colgroup"
                                              },
                                              {
                                                "label": "data",
                                                "value": "data"
                                              },
                                              {
                                                "label": "datalist",
                                                "value": "datalist"
                                              },
                                              {
                                                "label": "dd",
                                                "value": "dd"
                                              },
                                              {
                                                "label": "del",
                                                "value": "del"
                                              },
                                              {
                                                "label": "details",
                                                "value": "details"
                                              },
                                              {
                                                "label": "dfn",
                                                "value": "dfn"
                                              },
                                              {
                                                "label": "dialog",
                                                "value": "dialog"
                                              },
                                              {
                                                "label": "div",
                                                "value": "div"
                                              },
                                              {
                                                "label": "dl",
                                                "value": "dl"
                                              },
                                              {
                                                "label": "dt",
                                                "value": "dt"
                                              },
                                              {
                                                "label": "em",
                                                "value": "em"
                                              },
                                              {
                                                "label": "embed",
                                                "value": "embed"
                                              },
                                              {
                                                "label": "fieldset",
                                                "value": "fieldset"
                                              },
                                              {
                                                "label": "figcaption",
                                                "value": "figcaption"
                                              },
                                              {
                                                "label": "figure",
                                                "value": "figure"
                                              },
                                              {
                                                "label": "footer",
                                                "value": "footer"
                                              },
                                              {
                                                "label": "form",
                                                "value": "form"
                                              },
                                              {
                                                "label": "h1",
                                                "value": "h1"
                                              },
                                              {
                                                "label": "h2",
                                                "value": "h2"
                                              },
                                              {
                                                "label": "h3",
                                                "value": "h3"
                                              },
                                              {
                                                "label": "h4",
                                                "value": "h4"
                                              },
                                              {
                                                "label": "h5",
                                                "value": "h5"
                                              },
                                              {
                                                "label": "h6",
                                                "value": "h6"
                                              },
                                              {
                                                "label": "head",
                                                "value": "head"
                                              },
                                              {
                                                "label": "header",
                                                "value": "header"
                                              },
                                              {
                                                "label": "hgroup",
                                                "value": "hgroup"
                                              },
                                              {
                                                "label": "hr",
                                                "value": "hr"
                                              },
                                              {
                                                "label": "html",
                                                "value": "html"
                                              },
                                              {
                                                "label": "i",
                                                "value": "i"
                                              },
                                              {
                                                "label": "iframe",
                                                "value": "iframe"
                                              },
                                              {
                                                "label": "img",
                                                "value": "img"
                                              },
                                              {
                                                "label": "input",
                                                "value": "input"
                                              },
                                              {
                                                "label": "ins",
                                                "value": "ins"
                                              },
                                              {
                                                "label": "kbd",
                                                "value": "kbd"
                                              },
                                              {
                                                "label": "keygen",
                                                "value": "keygen"
                                              },
                                              {
                                                "label": "label",
                                                "value": "label"
                                              },
                                              {
                                                "label": "legend",
                                                "value": "legend"
                                              },
                                              {
                                                "label": "li",
                                                "value": "li"
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
                                                "label": "map",
                                                "value": "map"
                                              },
                                              {
                                                "label": "mark",
                                                "value": "mark"
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
                                                "label": "meta",
                                                "value": "meta"
                                              },
                                              {
                                                "label": "meter",
                                                "value": "meter"
                                              },
                                              {
                                                "label": "nav",
                                                "value": "nav"
                                              },
                                              {
                                                "label": "noscript",
                                                "value": "noscript"
                                              },
                                              {
                                                "label": "ol",
                                                "value": "ol"
                                              },
                                              {
                                                "label": "optgroup",
                                                "value": "optgroup"
                                              },
                                              {
                                                "label": "option",
                                                "value": "option"
                                              },
                                              {
                                                "label": "output",
                                                "value": "output"
                                              },
                                              {
                                                "label": "p",
                                                "value": "p"
                                              },
                                              {
                                                "label": "param",
                                                "value": "param"
                                              },
                                              {
                                                "label": "picture",
                                                "value": "picture"
                                              },
                                              {
                                                "label": "pre",
                                                "value": "pre"
                                              },
                                              {
                                                "label": "progress",
                                                "value": "progress"
                                              },
                                              {
                                                "label": "q",
                                                "value": "q"
                                              },
                                              {
                                                "label": "rp",
                                                "value": "rp"
                                              },
                                              {
                                                "label": "rt",
                                                "value": "rt"
                                              },
                                              {
                                                "label": "ruby",
                                                "value": "ruby"
                                              },
                                              {
                                                "label": "s",
                                                "value": "s"
                                              },
                                              {
                                                "label": "samp",
                                                "value": "samp"
                                              },
                                              {
                                                "label": "slot",
                                                "value": "slot"
                                              },
                                              {
                                                "label": "script",
                                                "value": "script"
                                              },
                                              {
                                                "label": "section",
                                                "value": "section"
                                              },
                                              {
                                                "label": "select",
                                                "value": "select"
                                              },
                                              {
                                                "label": "small",
                                                "value": "small"
                                              },
                                              {
                                                "label": "source",
                                                "value": "source"
                                              },
                                              {
                                                "label": "span",
                                                "value": "span"
                                              },
                                              {
                                                "label": "strong",
                                                "value": "strong"
                                              },
                                              {
                                                "label": "style",
                                                "value": "style"
                                              },
                                              {
                                                "label": "sub",
                                                "value": "sub"
                                              },
                                              {
                                                "label": "summary",
                                                "value": "summary"
                                              },
                                              {
                                                "label": "sup",
                                                "value": "sup"
                                              },
                                              {
                                                "label": "table",
                                                "value": "table"
                                              },
                                              {
                                                "label": "template",
                                                "value": "template"
                                              },
                                              {
                                                "label": "tbody",
                                                "value": "tbody"
                                              },
                                              {
                                                "label": "td",
                                                "value": "td"
                                              },
                                              {
                                                "label": "textarea",
                                                "value": "textarea"
                                              },
                                              {
                                                "label": "tfoot",
                                                "value": "tfoot"
                                              },
                                              {
                                                "label": "th",
                                                "value": "th"
                                              },
                                              {
                                                "label": "thead",
                                                "value": "thead"
                                              },
                                              {
                                                "label": "time",
                                                "value": "time"
                                              },
                                              {
                                                "label": "title",
                                                "value": "title"
                                              },
                                              {
                                                "label": "tr",
                                                "value": "tr"
                                              },
                                              {
                                                "label": "track",
                                                "value": "track"
                                              },
                                              {
                                                "label": "u",
                                                "value": "u"
                                              },
                                              {
                                                "label": "ul",
                                                "value": "ul"
                                              },
                                              {
                                                "label": "var",
                                                "value": "var"
                                              },
                                              {
                                                "label": "video",
                                                "value": "video"
                                              },
                                              {
                                                "label": "wbr",
                                                "value": "wbr"
                                              },
                                              {
                                                "label": "webview",
                                                "value": "webview"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "object",
                                                "value": "object"
                                              },
                                              {
                                                "label": "a",
                                                "value": "a"
                                              },
                                              {
                                                "label": "abbr",
                                                "value": "abbr"
                                              },
                                              {
                                                "label": "address",
                                                "value": "address"
                                              },
                                              {
                                                "label": "area",
                                                "value": "area"
                                              },
                                              {
                                                "label": "article",
                                                "value": "article"
                                              },
                                              {
                                                "label": "aside",
                                                "value": "aside"
                                              },
                                              {
                                                "label": "audio",
                                                "value": "audio"
                                              },
                                              {
                                                "label": "b",
                                                "value": "b"
                                              },
                                              {
                                                "label": "base",
                                                "value": "base"
                                              },
                                              {
                                                "label": "bdi",
                                                "value": "bdi"
                                              },
                                              {
                                                "label": "bdo",
                                                "value": "bdo"
                                              },
                                              {
                                                "label": "big",
                                                "value": "big"
                                              },
                                              {
                                                "label": "blockquote",
                                                "value": "blockquote"
                                              },
                                              {
                                                "label": "body",
                                                "value": "body"
                                              },
                                              {
                                                "label": "br",
                                                "value": "br"
                                              },
                                              {
                                                "label": "button",
                                                "value": "button"
                                              },
                                              {
                                                "label": "canvas",
                                                "value": "canvas"
                                              },
                                              {
                                                "label": "caption",
                                                "value": "caption"
                                              },
                                              {
                                                "label": "cite",
                                                "value": "cite"
                                              },
                                              {
                                                "label": "code",
                                                "value": "code"
                                              },
                                              {
                                                "label": "col",
                                                "value": "col"
                                              },
                                              {
                                                "label": "colgroup",
                                                "value": "colgroup"
                                              },
                                              {
                                                "label": "data",
                                                "value": "data"
                                              },
                                              {
                                                "label": "datalist",
                                                "value": "datalist"
                                              },
                                              {
                                                "label": "dd",
                                                "value": "dd"
                                              },
                                              {
                                                "label": "del",
                                                "value": "del"
                                              },
                                              {
                                                "label": "details",
                                                "value": "details"
                                              },
                                              {
                                                "label": "dfn",
                                                "value": "dfn"
                                              },
                                              {
                                                "label": "dialog",
                                                "value": "dialog"
                                              },
                                              {
                                                "label": "div",
                                                "value": "div"
                                              },
                                              {
                                                "label": "dl",
                                                "value": "dl"
                                              },
                                              {
                                                "label": "dt",
                                                "value": "dt"
                                              },
                                              {
                                                "label": "em",
                                                "value": "em"
                                              },
                                              {
                                                "label": "embed",
                                                "value": "embed"
                                              },
                                              {
                                                "label": "fieldset",
                                                "value": "fieldset"
                                              },
                                              {
                                                "label": "figcaption",
                                                "value": "figcaption"
                                              },
                                              {
                                                "label": "figure",
                                                "value": "figure"
                                              },
                                              {
                                                "label": "footer",
                                                "value": "footer"
                                              },
                                              {
                                                "label": "form",
                                                "value": "form"
                                              },
                                              {
                                                "label": "h1",
                                                "value": "h1"
                                              },
                                              {
                                                "label": "h2",
                                                "value": "h2"
                                              },
                                              {
                                                "label": "h3",
                                                "value": "h3"
                                              },
                                              {
                                                "label": "h4",
                                                "value": "h4"
                                              },
                                              {
                                                "label": "h5",
                                                "value": "h5"
                                              },
                                              {
                                                "label": "h6",
                                                "value": "h6"
                                              },
                                              {
                                                "label": "head",
                                                "value": "head"
                                              },
                                              {
                                                "label": "header",
                                                "value": "header"
                                              },
                                              {
                                                "label": "hgroup",
                                                "value": "hgroup"
                                              },
                                              {
                                                "label": "hr",
                                                "value": "hr"
                                              },
                                              {
                                                "label": "html",
                                                "value": "html"
                                              },
                                              {
                                                "label": "i",
                                                "value": "i"
                                              },
                                              {
                                                "label": "iframe",
                                                "value": "iframe"
                                              },
                                              {
                                                "label": "img",
                                                "value": "img"
                                              },
                                              {
                                                "label": "input",
                                                "value": "input"
                                              },
                                              {
                                                "label": "ins",
                                                "value": "ins"
                                              },
                                              {
                                                "label": "kbd",
                                                "value": "kbd"
                                              },
                                              {
                                                "label": "keygen",
                                                "value": "keygen"
                                              },
                                              {
                                                "label": "label",
                                                "value": "label"
                                              },
                                              {
                                                "label": "legend",
                                                "value": "legend"
                                              },
                                              {
                                                "label": "li",
                                                "value": "li"
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
                                                "label": "map",
                                                "value": "map"
                                              },
                                              {
                                                "label": "mark",
                                                "value": "mark"
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
                                                "label": "meta",
                                                "value": "meta"
                                              },
                                              {
                                                "label": "meter",
                                                "value": "meter"
                                              },
                                              {
                                                "label": "nav",
                                                "value": "nav"
                                              },
                                              {
                                                "label": "noscript",
                                                "value": "noscript"
                                              },
                                              {
                                                "label": "ol",
                                                "value": "ol"
                                              },
                                              {
                                                "label": "optgroup",
                                                "value": "optgroup"
                                              },
                                              {
                                                "label": "option",
                                                "value": "option"
                                              },
                                              {
                                                "label": "output",
                                                "value": "output"
                                              },
                                              {
                                                "label": "p",
                                                "value": "p"
                                              },
                                              {
                                                "label": "param",
                                                "value": "param"
                                              },
                                              {
                                                "label": "picture",
                                                "value": "picture"
                                              },
                                              {
                                                "label": "pre",
                                                "value": "pre"
                                              },
                                              {
                                                "label": "progress",
                                                "value": "progress"
                                              },
                                              {
                                                "label": "q",
                                                "value": "q"
                                              },
                                              {
                                                "label": "rp",
                                                "value": "rp"
                                              },
                                              {
                                                "label": "rt",
                                                "value": "rt"
                                              },
                                              {
                                                "label": "ruby",
                                                "value": "ruby"
                                              },
                                              {
                                                "label": "s",
                                                "value": "s"
                                              },
                                              {
                                                "label": "samp",
                                                "value": "samp"
                                              },
                                              {
                                                "label": "slot",
                                                "value": "slot"
                                              },
                                              {
                                                "label": "script",
                                                "value": "script"
                                              },
                                              {
                                                "label": "section",
                                                "value": "section"
                                              },
                                              {
                                                "label": "select",
                                                "value": "select"
                                              },
                                              {
                                                "label": "small",
                                                "value": "small"
                                              },
                                              {
                                                "label": "source",
                                                "value": "source"
                                              },
                                              {
                                                "label": "span",
                                                "value": "span"
                                              },
                                              {
                                                "label": "strong",
                                                "value": "strong"
                                              },
                                              {
                                                "label": "style",
                                                "value": "style"
                                              },
                                              {
                                                "label": "sub",
                                                "value": "sub"
                                              },
                                              {
                                                "label": "summary",
                                                "value": "summary"
                                              },
                                              {
                                                "label": "sup",
                                                "value": "sup"
                                              },
                                              {
                                                "label": "table",
                                                "value": "table"
                                              },
                                              {
                                                "label": "template",
                                                "value": "template"
                                              },
                                              {
                                                "label": "tbody",
                                                "value": "tbody"
                                              },
                                              {
                                                "label": "td",
                                                "value": "td"
                                              },
                                              {
                                                "label": "textarea",
                                                "value": "textarea"
                                              },
                                              {
                                                "label": "tfoot",
                                                "value": "tfoot"
                                              },
                                              {
                                                "label": "th",
                                                "value": "th"
                                              },
                                              {
                                                "label": "thead",
                                                "value": "thead"
                                              },
                                              {
                                                "label": "time",
                                                "value": "time"
                                              },
                                              {
                                                "label": "title",
                                                "value": "title"
                                              },
                                              {
                                                "label": "tr",
                                                "value": "tr"
                                              },
                                              {
                                                "label": "track",
                                                "value": "track"
                                              },
                                              {
                                                "label": "u",
                                                "value": "u"
                                              },
                                              {
                                                "label": "ul",
                                                "value": "ul"
                                              },
                                              {
                                                "label": "var",
                                                "value": "var"
                                              },
                                              {
                                                "label": "video",
                                                "value": "video"
                                              },
                                              {
                                                "label": "wbr",
                                                "value": "wbr"
                                              },
                                              {
                                                "label": "webview",
                                                "value": "webview"
                                              }
                                            ]
                                          },
                                          "initialValue": "object"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "cell",
                                      "zh-CN": "cell"
                                    }
                                  },
                                  "name": "cell",
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
                                                "label": "object",
                                                "value": "object"
                                              },
                                              {
                                                "label": "a",
                                                "value": "a"
                                              },
                                              {
                                                "label": "abbr",
                                                "value": "abbr"
                                              },
                                              {
                                                "label": "address",
                                                "value": "address"
                                              },
                                              {
                                                "label": "area",
                                                "value": "area"
                                              },
                                              {
                                                "label": "article",
                                                "value": "article"
                                              },
                                              {
                                                "label": "aside",
                                                "value": "aside"
                                              },
                                              {
                                                "label": "audio",
                                                "value": "audio"
                                              },
                                              {
                                                "label": "b",
                                                "value": "b"
                                              },
                                              {
                                                "label": "base",
                                                "value": "base"
                                              },
                                              {
                                                "label": "bdi",
                                                "value": "bdi"
                                              },
                                              {
                                                "label": "bdo",
                                                "value": "bdo"
                                              },
                                              {
                                                "label": "big",
                                                "value": "big"
                                              },
                                              {
                                                "label": "blockquote",
                                                "value": "blockquote"
                                              },
                                              {
                                                "label": "body",
                                                "value": "body"
                                              },
                                              {
                                                "label": "br",
                                                "value": "br"
                                              },
                                              {
                                                "label": "button",
                                                "value": "button"
                                              },
                                              {
                                                "label": "canvas",
                                                "value": "canvas"
                                              },
                                              {
                                                "label": "caption",
                                                "value": "caption"
                                              },
                                              {
                                                "label": "cite",
                                                "value": "cite"
                                              },
                                              {
                                                "label": "code",
                                                "value": "code"
                                              },
                                              {
                                                "label": "col",
                                                "value": "col"
                                              },
                                              {
                                                "label": "colgroup",
                                                "value": "colgroup"
                                              },
                                              {
                                                "label": "data",
                                                "value": "data"
                                              },
                                              {
                                                "label": "datalist",
                                                "value": "datalist"
                                              },
                                              {
                                                "label": "dd",
                                                "value": "dd"
                                              },
                                              {
                                                "label": "del",
                                                "value": "del"
                                              },
                                              {
                                                "label": "details",
                                                "value": "details"
                                              },
                                              {
                                                "label": "dfn",
                                                "value": "dfn"
                                              },
                                              {
                                                "label": "dialog",
                                                "value": "dialog"
                                              },
                                              {
                                                "label": "div",
                                                "value": "div"
                                              },
                                              {
                                                "label": "dl",
                                                "value": "dl"
                                              },
                                              {
                                                "label": "dt",
                                                "value": "dt"
                                              },
                                              {
                                                "label": "em",
                                                "value": "em"
                                              },
                                              {
                                                "label": "embed",
                                                "value": "embed"
                                              },
                                              {
                                                "label": "fieldset",
                                                "value": "fieldset"
                                              },
                                              {
                                                "label": "figcaption",
                                                "value": "figcaption"
                                              },
                                              {
                                                "label": "figure",
                                                "value": "figure"
                                              },
                                              {
                                                "label": "footer",
                                                "value": "footer"
                                              },
                                              {
                                                "label": "form",
                                                "value": "form"
                                              },
                                              {
                                                "label": "h1",
                                                "value": "h1"
                                              },
                                              {
                                                "label": "h2",
                                                "value": "h2"
                                              },
                                              {
                                                "label": "h3",
                                                "value": "h3"
                                              },
                                              {
                                                "label": "h4",
                                                "value": "h4"
                                              },
                                              {
                                                "label": "h5",
                                                "value": "h5"
                                              },
                                              {
                                                "label": "h6",
                                                "value": "h6"
                                              },
                                              {
                                                "label": "head",
                                                "value": "head"
                                              },
                                              {
                                                "label": "header",
                                                "value": "header"
                                              },
                                              {
                                                "label": "hgroup",
                                                "value": "hgroup"
                                              },
                                              {
                                                "label": "hr",
                                                "value": "hr"
                                              },
                                              {
                                                "label": "html",
                                                "value": "html"
                                              },
                                              {
                                                "label": "i",
                                                "value": "i"
                                              },
                                              {
                                                "label": "iframe",
                                                "value": "iframe"
                                              },
                                              {
                                                "label": "img",
                                                "value": "img"
                                              },
                                              {
                                                "label": "input",
                                                "value": "input"
                                              },
                                              {
                                                "label": "ins",
                                                "value": "ins"
                                              },
                                              {
                                                "label": "kbd",
                                                "value": "kbd"
                                              },
                                              {
                                                "label": "keygen",
                                                "value": "keygen"
                                              },
                                              {
                                                "label": "label",
                                                "value": "label"
                                              },
                                              {
                                                "label": "legend",
                                                "value": "legend"
                                              },
                                              {
                                                "label": "li",
                                                "value": "li"
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
                                                "label": "map",
                                                "value": "map"
                                              },
                                              {
                                                "label": "mark",
                                                "value": "mark"
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
                                                "label": "meta",
                                                "value": "meta"
                                              },
                                              {
                                                "label": "meter",
                                                "value": "meter"
                                              },
                                              {
                                                "label": "nav",
                                                "value": "nav"
                                              },
                                              {
                                                "label": "noscript",
                                                "value": "noscript"
                                              },
                                              {
                                                "label": "ol",
                                                "value": "ol"
                                              },
                                              {
                                                "label": "optgroup",
                                                "value": "optgroup"
                                              },
                                              {
                                                "label": "option",
                                                "value": "option"
                                              },
                                              {
                                                "label": "output",
                                                "value": "output"
                                              },
                                              {
                                                "label": "p",
                                                "value": "p"
                                              },
                                              {
                                                "label": "param",
                                                "value": "param"
                                              },
                                              {
                                                "label": "picture",
                                                "value": "picture"
                                              },
                                              {
                                                "label": "pre",
                                                "value": "pre"
                                              },
                                              {
                                                "label": "progress",
                                                "value": "progress"
                                              },
                                              {
                                                "label": "q",
                                                "value": "q"
                                              },
                                              {
                                                "label": "rp",
                                                "value": "rp"
                                              },
                                              {
                                                "label": "rt",
                                                "value": "rt"
                                              },
                                              {
                                                "label": "ruby",
                                                "value": "ruby"
                                              },
                                              {
                                                "label": "s",
                                                "value": "s"
                                              },
                                              {
                                                "label": "samp",
                                                "value": "samp"
                                              },
                                              {
                                                "label": "slot",
                                                "value": "slot"
                                              },
                                              {
                                                "label": "script",
                                                "value": "script"
                                              },
                                              {
                                                "label": "section",
                                                "value": "section"
                                              },
                                              {
                                                "label": "select",
                                                "value": "select"
                                              },
                                              {
                                                "label": "small",
                                                "value": "small"
                                              },
                                              {
                                                "label": "source",
                                                "value": "source"
                                              },
                                              {
                                                "label": "span",
                                                "value": "span"
                                              },
                                              {
                                                "label": "strong",
                                                "value": "strong"
                                              },
                                              {
                                                "label": "style",
                                                "value": "style"
                                              },
                                              {
                                                "label": "sub",
                                                "value": "sub"
                                              },
                                              {
                                                "label": "summary",
                                                "value": "summary"
                                              },
                                              {
                                                "label": "sup",
                                                "value": "sup"
                                              },
                                              {
                                                "label": "table",
                                                "value": "table"
                                              },
                                              {
                                                "label": "template",
                                                "value": "template"
                                              },
                                              {
                                                "label": "tbody",
                                                "value": "tbody"
                                              },
                                              {
                                                "label": "td",
                                                "value": "td"
                                              },
                                              {
                                                "label": "textarea",
                                                "value": "textarea"
                                              },
                                              {
                                                "label": "tfoot",
                                                "value": "tfoot"
                                              },
                                              {
                                                "label": "th",
                                                "value": "th"
                                              },
                                              {
                                                "label": "thead",
                                                "value": "thead"
                                              },
                                              {
                                                "label": "time",
                                                "value": "time"
                                              },
                                              {
                                                "label": "title",
                                                "value": "title"
                                              },
                                              {
                                                "label": "tr",
                                                "value": "tr"
                                              },
                                              {
                                                "label": "track",
                                                "value": "track"
                                              },
                                              {
                                                "label": "u",
                                                "value": "u"
                                              },
                                              {
                                                "label": "ul",
                                                "value": "ul"
                                              },
                                              {
                                                "label": "var",
                                                "value": "var"
                                              },
                                              {
                                                "label": "video",
                                                "value": "video"
                                              },
                                              {
                                                "label": "wbr",
                                                "value": "wbr"
                                              },
                                              {
                                                "label": "webview",
                                                "value": "webview"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "object",
                                                "value": "object"
                                              },
                                              {
                                                "label": "a",
                                                "value": "a"
                                              },
                                              {
                                                "label": "abbr",
                                                "value": "abbr"
                                              },
                                              {
                                                "label": "address",
                                                "value": "address"
                                              },
                                              {
                                                "label": "area",
                                                "value": "area"
                                              },
                                              {
                                                "label": "article",
                                                "value": "article"
                                              },
                                              {
                                                "label": "aside",
                                                "value": "aside"
                                              },
                                              {
                                                "label": "audio",
                                                "value": "audio"
                                              },
                                              {
                                                "label": "b",
                                                "value": "b"
                                              },
                                              {
                                                "label": "base",
                                                "value": "base"
                                              },
                                              {
                                                "label": "bdi",
                                                "value": "bdi"
                                              },
                                              {
                                                "label": "bdo",
                                                "value": "bdo"
                                              },
                                              {
                                                "label": "big",
                                                "value": "big"
                                              },
                                              {
                                                "label": "blockquote",
                                                "value": "blockquote"
                                              },
                                              {
                                                "label": "body",
                                                "value": "body"
                                              },
                                              {
                                                "label": "br",
                                                "value": "br"
                                              },
                                              {
                                                "label": "button",
                                                "value": "button"
                                              },
                                              {
                                                "label": "canvas",
                                                "value": "canvas"
                                              },
                                              {
                                                "label": "caption",
                                                "value": "caption"
                                              },
                                              {
                                                "label": "cite",
                                                "value": "cite"
                                              },
                                              {
                                                "label": "code",
                                                "value": "code"
                                              },
                                              {
                                                "label": "col",
                                                "value": "col"
                                              },
                                              {
                                                "label": "colgroup",
                                                "value": "colgroup"
                                              },
                                              {
                                                "label": "data",
                                                "value": "data"
                                              },
                                              {
                                                "label": "datalist",
                                                "value": "datalist"
                                              },
                                              {
                                                "label": "dd",
                                                "value": "dd"
                                              },
                                              {
                                                "label": "del",
                                                "value": "del"
                                              },
                                              {
                                                "label": "details",
                                                "value": "details"
                                              },
                                              {
                                                "label": "dfn",
                                                "value": "dfn"
                                              },
                                              {
                                                "label": "dialog",
                                                "value": "dialog"
                                              },
                                              {
                                                "label": "div",
                                                "value": "div"
                                              },
                                              {
                                                "label": "dl",
                                                "value": "dl"
                                              },
                                              {
                                                "label": "dt",
                                                "value": "dt"
                                              },
                                              {
                                                "label": "em",
                                                "value": "em"
                                              },
                                              {
                                                "label": "embed",
                                                "value": "embed"
                                              },
                                              {
                                                "label": "fieldset",
                                                "value": "fieldset"
                                              },
                                              {
                                                "label": "figcaption",
                                                "value": "figcaption"
                                              },
                                              {
                                                "label": "figure",
                                                "value": "figure"
                                              },
                                              {
                                                "label": "footer",
                                                "value": "footer"
                                              },
                                              {
                                                "label": "form",
                                                "value": "form"
                                              },
                                              {
                                                "label": "h1",
                                                "value": "h1"
                                              },
                                              {
                                                "label": "h2",
                                                "value": "h2"
                                              },
                                              {
                                                "label": "h3",
                                                "value": "h3"
                                              },
                                              {
                                                "label": "h4",
                                                "value": "h4"
                                              },
                                              {
                                                "label": "h5",
                                                "value": "h5"
                                              },
                                              {
                                                "label": "h6",
                                                "value": "h6"
                                              },
                                              {
                                                "label": "head",
                                                "value": "head"
                                              },
                                              {
                                                "label": "header",
                                                "value": "header"
                                              },
                                              {
                                                "label": "hgroup",
                                                "value": "hgroup"
                                              },
                                              {
                                                "label": "hr",
                                                "value": "hr"
                                              },
                                              {
                                                "label": "html",
                                                "value": "html"
                                              },
                                              {
                                                "label": "i",
                                                "value": "i"
                                              },
                                              {
                                                "label": "iframe",
                                                "value": "iframe"
                                              },
                                              {
                                                "label": "img",
                                                "value": "img"
                                              },
                                              {
                                                "label": "input",
                                                "value": "input"
                                              },
                                              {
                                                "label": "ins",
                                                "value": "ins"
                                              },
                                              {
                                                "label": "kbd",
                                                "value": "kbd"
                                              },
                                              {
                                                "label": "keygen",
                                                "value": "keygen"
                                              },
                                              {
                                                "label": "label",
                                                "value": "label"
                                              },
                                              {
                                                "label": "legend",
                                                "value": "legend"
                                              },
                                              {
                                                "label": "li",
                                                "value": "li"
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
                                                "label": "map",
                                                "value": "map"
                                              },
                                              {
                                                "label": "mark",
                                                "value": "mark"
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
                                                "label": "meta",
                                                "value": "meta"
                                              },
                                              {
                                                "label": "meter",
                                                "value": "meter"
                                              },
                                              {
                                                "label": "nav",
                                                "value": "nav"
                                              },
                                              {
                                                "label": "noscript",
                                                "value": "noscript"
                                              },
                                              {
                                                "label": "ol",
                                                "value": "ol"
                                              },
                                              {
                                                "label": "optgroup",
                                                "value": "optgroup"
                                              },
                                              {
                                                "label": "option",
                                                "value": "option"
                                              },
                                              {
                                                "label": "output",
                                                "value": "output"
                                              },
                                              {
                                                "label": "p",
                                                "value": "p"
                                              },
                                              {
                                                "label": "param",
                                                "value": "param"
                                              },
                                              {
                                                "label": "picture",
                                                "value": "picture"
                                              },
                                              {
                                                "label": "pre",
                                                "value": "pre"
                                              },
                                              {
                                                "label": "progress",
                                                "value": "progress"
                                              },
                                              {
                                                "label": "q",
                                                "value": "q"
                                              },
                                              {
                                                "label": "rp",
                                                "value": "rp"
                                              },
                                              {
                                                "label": "rt",
                                                "value": "rt"
                                              },
                                              {
                                                "label": "ruby",
                                                "value": "ruby"
                                              },
                                              {
                                                "label": "s",
                                                "value": "s"
                                              },
                                              {
                                                "label": "samp",
                                                "value": "samp"
                                              },
                                              {
                                                "label": "slot",
                                                "value": "slot"
                                              },
                                              {
                                                "label": "script",
                                                "value": "script"
                                              },
                                              {
                                                "label": "section",
                                                "value": "section"
                                              },
                                              {
                                                "label": "select",
                                                "value": "select"
                                              },
                                              {
                                                "label": "small",
                                                "value": "small"
                                              },
                                              {
                                                "label": "source",
                                                "value": "source"
                                              },
                                              {
                                                "label": "span",
                                                "value": "span"
                                              },
                                              {
                                                "label": "strong",
                                                "value": "strong"
                                              },
                                              {
                                                "label": "style",
                                                "value": "style"
                                              },
                                              {
                                                "label": "sub",
                                                "value": "sub"
                                              },
                                              {
                                                "label": "summary",
                                                "value": "summary"
                                              },
                                              {
                                                "label": "sup",
                                                "value": "sup"
                                              },
                                              {
                                                "label": "table",
                                                "value": "table"
                                              },
                                              {
                                                "label": "template",
                                                "value": "template"
                                              },
                                              {
                                                "label": "tbody",
                                                "value": "tbody"
                                              },
                                              {
                                                "label": "td",
                                                "value": "td"
                                              },
                                              {
                                                "label": "textarea",
                                                "value": "textarea"
                                              },
                                              {
                                                "label": "tfoot",
                                                "value": "tfoot"
                                              },
                                              {
                                                "label": "th",
                                                "value": "th"
                                              },
                                              {
                                                "label": "thead",
                                                "value": "thead"
                                              },
                                              {
                                                "label": "time",
                                                "value": "time"
                                              },
                                              {
                                                "label": "title",
                                                "value": "title"
                                              },
                                              {
                                                "label": "tr",
                                                "value": "tr"
                                              },
                                              {
                                                "label": "track",
                                                "value": "track"
                                              },
                                              {
                                                "label": "u",
                                                "value": "u"
                                              },
                                              {
                                                "label": "ul",
                                                "value": "ul"
                                              },
                                              {
                                                "label": "var",
                                                "value": "var"
                                              },
                                              {
                                                "label": "video",
                                                "value": "video"
                                              },
                                              {
                                                "label": "wbr",
                                                "value": "wbr"
                                              },
                                              {
                                                "label": "webview",
                                                "value": "webview"
                                              }
                                            ]
                                          },
                                          "initialValue": "object"
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
            "en-US": "tailor",
            "zh-CN": "@private I"
          },
          "tip": "tailor | @private Internal usage, may remove by refactor."
        },
        "name": "tailor",
        "description": "@private Internal usage, may remove by refactor.",
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
            "en-US": "sticky",
            "zh-CN": "sticky"
          }
        },
        "name": "sticky",
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
                            "en-US": "offsetHeader",
                            "zh-CN": "offsetHeader"
                          }
                        },
                        "name": "offsetHeader",
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
                            "en-US": "offsetSummary",
                            "zh-CN": "offsetSummary"
                          }
                        },
                        "name": "offsetSummary",
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
                            "en-US": "offsetScroll",
                            "zh-CN": "offsetScroll"
                          }
                        },
                        "name": "offsetScroll",
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
                            "en-US": "getContainer",
                            "zh-CN": "getContainer"
                          }
                        },
                        "name": "getContainer",
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
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dropdownPrefixCls",
            "zh-CN": "dropdownPrefixCls"
          }
        },
        "name": "dropdownPrefixCls",
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
            "en-US": "dataSource",
            "zh-CN": "dataSource"
          }
        },
        "name": "dataSource",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pagination",
            "zh-CN": "pagination"
          }
        },
        "name": "pagination",
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
                            "en-US": "position",
                            "zh-CN": "position"
                          }
                        },
                        "name": "position",
                        "setter": {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "SelectSetter",
                              "props": {
                                "dataSource": [
                                  {
                                    "label": "bottomLeft",
                                    "value": "bottomLeft"
                                  },
                                  {
                                    "label": "bottomRight",
                                    "value": "bottomRight"
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
                                    "label": "topCenter",
                                    "value": "topCenter"
                                  },
                                  {
                                    "label": "bottomCenter",
                                    "value": "bottomCenter"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "bottomLeft",
                                    "value": "bottomLeft"
                                  },
                                  {
                                    "label": "bottomRight",
                                    "value": "bottomRight"
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
                                    "label": "topCenter",
                                    "value": "topCenter"
                                  },
                                  {
                                    "label": "bottomCenter",
                                    "value": "bottomCenter"
                                  }
                                ]
                              },
                              "initialValue": "bottomLeft"
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
            "zh-CN": "loading"
          }
        },
        "name": "loading",
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
                            "en-US": "spinning",
                            "zh-CN": "spinning"
                          }
                        },
                        "name": "spinning",
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
                                "label": "large",
                                "value": "large"
                              },
                              {
                                "label": "default",
                                "value": "default"
                              }
                            ],
                            "options": [
                              {
                                "label": "small",
                                "value": "small"
                              },
                              {
                                "label": "large",
                                "value": "large"
                              },
                              {
                                "label": "default",
                                "value": "default"
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
                            "en-US": "tip",
                            "zh-CN": "tip"
                          }
                        },
                        "name": "tip",
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
                            "en-US": "delay",
                            "zh-CN": "delay"
                          }
                        },
                        "name": "delay",
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
                            "en-US": "wrapperClassName",
                            "zh-CN": "wrapperClassName"
                          }
                        },
                        "name": "wrapperClassName",
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
                            "en-US": "indicator",
                            "zh-CN": "indicator"
                          }
                        },
                        "name": "indicator",
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
            ]
          }
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
                      "en-US": "filterTitle",
                      "zh-CN": "filterTitle"
                    }
                  },
                  "name": "filterTitle",
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
                      "en-US": "filterConfirm",
                      "zh-CN": "filterConfirm"
                    }
                  },
                  "name": "filterConfirm",
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
                      "en-US": "filterReset",
                      "zh-CN": "filterReset"
                    }
                  },
                  "name": "filterReset",
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
                      "en-US": "filterEmptyText",
                      "zh-CN": "filterEmptyText"
                    }
                  },
                  "name": "filterEmptyText",
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
                      "en-US": "filterCheckall",
                      "zh-CN": "filterCheckall"
                    }
                  },
                  "name": "filterCheckall",
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
                      "en-US": "filterSearchPlaceholder",
                      "zh-CN": "filterSearchPlaceholder"
                    }
                  },
                  "name": "filterSearchPlaceholder",
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
                      "en-US": "emptyText",
                      "zh-CN": "emptyText"
                    }
                  },
                  "name": "emptyText",
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
                                "isRequired": false,
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
                      "en-US": "selectAll",
                      "zh-CN": "selectAll"
                    }
                  },
                  "name": "selectAll",
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
                      "en-US": "selectNone",
                      "zh-CN": "selectNone"
                    }
                  },
                  "name": "selectNone",
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
                      "en-US": "selectInvert",
                      "zh-CN": "selectInvert"
                    }
                  },
                  "name": "selectInvert",
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
                      "en-US": "selectionAll",
                      "zh-CN": "selectionAll"
                    }
                  },
                  "name": "selectionAll",
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
                      "en-US": "sortTitle",
                      "zh-CN": "sortTitle"
                    }
                  },
                  "name": "sortTitle",
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
                      "en-US": "expand",
                      "zh-CN": "expand"
                    }
                  },
                  "name": "expand",
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
                      "en-US": "collapse",
                      "zh-CN": "collapse"
                    }
                  },
                  "name": "collapse",
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
                      "en-US": "triggerDesc",
                      "zh-CN": "triggerDesc"
                    }
                  },
                  "name": "triggerDesc",
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
                      "en-US": "triggerAsc",
                      "zh-CN": "triggerAsc"
                    }
                  },
                  "name": "triggerAsc",
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
                      "en-US": "cancelSort",
                      "zh-CN": "cancelSort"
                    }
                  },
                  "name": "cancelSort",
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
            "en-US": "sortDirections",
            "zh-CN": "sortDirections"
          }
        },
        "name": "sortDirections",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "dataSource": [
                  {
                    "label": "descend",
                    "value": "descend"
                  },
                  {
                    "label": "ascend",
                    "value": "ascend"
                  }
                ],
                "options": [
                  {
                    "label": "descend",
                    "value": "descend"
                  },
                  {
                    "label": "ascend",
                    "value": "ascend"
                  }
                ]
              },
              "initialValue": "descend"
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showSorterTooltip",
            "zh-CN": "showSorterTooltip"
          }
        },
        "name": "showSorterTooltip",
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
                                      "isRequired": false,
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
                          },
                          "isRequired": true
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
                                      "isRequired": false,
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
                                      "isRequired": false,
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
                                      "isRequired": false,
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
            "en-US": "virtual",
            "zh-CN": "virtual"
          }
        },
        "name": "virtual",
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
            "en-US": "intl",
            "zh-CN": "intl"
          }
        },
        "name": "intl",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "events": [
        {
          "name": "onDragSortEnd",
          "description": "@name 拖动排序完成回调"
        },
        {
          "name": "onLoad",
          "description": "@name 数据加载完成后触发"
        },
        {
          "name": "beforeSearchSubmit",
          "description": "@name 格式化搜索表单提交数据"
        },
        {
          "name": "onSubmit",
          "description": "@name 提交表单时触发"
        },
        {
          "name": "onReset",
          "description": "@name 重置表单时触发"
        },
        {
          "name": "onDataSourceChange",
          "description": "@name 可编辑表格修改数据的改变"
        },
        {
          "name": "onExpand",
          "description": "@deprecated Use `expandable.onExpand` instead"
        },
        {
          "name": "onRow"
        },
        {
          "name": "onHeaderRow"
        },
        {
          "name": "onChange"
        },
        {
          "name": "onValuesChange"
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
    "title": "DragSortTable",
    "screenshot": "",
    "schema": {
      "componentName": "DragSortTable",
      "props": {
        "revalidateOnFocus": "true"
      }
    }
  }
];

export default {
  ...DragSortTableMeta,
  snippets
};
