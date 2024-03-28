
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ListToolBarMeta: IPublicTypeComponentMetadata = {
  "componentName": "ListToolBar",
  "title": "ListToolBar",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "ListToolBar",
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
            "zh-CN": "标题"
          },
          "tip": "title | 标题"
        },
        "name": "title",
        "description": "标题",
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
            "zh-CN": "副标题"
          },
          "tip": "subTitle | 副标题"
        },
        "name": "subTitle",
        "description": "副标题",
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
            "zh-CN": "标题提示"
          },
          "tip": "tooltip | 标题提示"
        },
        "name": "tooltip",
        "description": "标题提示",
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
            "zh-CN": "搜索输入栏相关配置"
          },
          "tip": "search | 搜索输入栏相关配置"
        },
        "name": "search",
        "description": "搜索输入栏相关配置",
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
            "en-US": "onSearch",
            "zh-CN": "搜索回调"
          },
          "tip": "onSearch | 搜索回调"
        },
        "name": "onSearch",
        "description": "搜索回调",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "actions",
            "zh-CN": "工具栏右侧操作区"
          },
          "tip": "actions | 工具栏右侧操作区"
        },
        "name": "actions",
        "description": "工具栏右侧操作区",
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
            "zh-CN": "工作栏右侧设置区"
          },
          "tip": "settings | 工作栏右侧设置区"
        },
        "name": "settings",
        "description": "工作栏右侧设置区",
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
            "zh-CN": "是否多行展示"
          },
          "tip": "multipleLine | 是否多行展示"
        },
        "name": "multipleLine",
        "description": "是否多行展示",
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
            "zh-CN": "过滤区，通常配合 L"
          },
          "tip": "filter | 过滤区，通常配合 LightFilter 使用"
        },
        "name": "filter",
        "description": "过滤区，通常配合 LightFilter 使用",
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
            "zh-CN": "标签页配置，仅当 `"
          },
          "tip": "tabs | 标签页配置，仅当 `multipleLine` 为 true 时有效"
        },
        "name": "tabs",
        "description": "标签页配置，仅当 `multipleLine` 为 true 时有效",
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
            "zh-CN": "菜单配置"
          },
          "tip": "menu | 菜单配置"
        },
        "name": "menu",
        "description": "菜单配置",
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
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ListToolBar",
    "screenshot": "",
    "schema": {
      "componentName": "ListToolBar",
      "props": {}
    }
  }
];

export default {
  ...ListToolBarMeta,
  snippets
};
