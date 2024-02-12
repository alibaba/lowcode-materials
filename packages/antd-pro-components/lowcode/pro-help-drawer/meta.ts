
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProHelpDrawerMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProHelpDrawer",
  "title": "ProHelpDrawer",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProHelpDrawer",
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
            "en-US": "drawerProps",
            "zh-CN": "Ant Design"
          },
          "tip": "drawerProps | Ant Design Drawer 组件的 Props，可以传递一些选项，如位置、大小、关闭方式等等。"
        },
        "name": "drawerProps",
        "description": "Ant Design Drawer 组件的 Props，可以传递一些选项，如位置、大小、关闭方式等等。",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                          "label": "default",
                          "value": "default"
                        }
                      ],
                      "options": [
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
                    "initialValue": "large"
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
                      "en-US": "afterVisibleChange",
                      "zh-CN": "afterVisibleChange"
                    }
                  },
                  "name": "afterVisibleChange",
                  "setter": {
                    "componentName": "FunctionSetter"
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
                              "componentName": "StringSetter",
                              "isRequired": false,
                              "initialValue": ""
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
                              "componentName": "StringSetter",
                              "isRequired": false,
                              "initialValue": ""
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
                              "componentName": "StringSetter",
                              "isRequired": false,
                              "initialValue": ""
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
                      "en-US": "styles",
                      "zh-CN": "styles"
                    }
                  },
                  "name": "styles",
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
                                "en-US": "body",
                                "zh-CN": "body"
                              }
                            },
                            "name": "body",
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
                                "en-US": "footer",
                                "zh-CN": "footer"
                              }
                            },
                            "name": "footer",
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
                                "en-US": "content",
                                "zh-CN": "content"
                              }
                            },
                            "name": "content",
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
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": true
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
    "title": "ProHelpDrawer",
    "screenshot": "",
    "schema": {
      "componentName": "ProHelpDrawer",
      "props": {}
    }
  }
];

export default {
  ...ProHelpDrawerMeta,
  snippets
};
