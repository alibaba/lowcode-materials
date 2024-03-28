
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DirectoryTreeMeta: IPublicTypeComponentMetadata = {
  "componentName": "DirectoryTree",
  "title": "DirectoryTree",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Tree",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "DirectoryTree"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "expandAction",
            "zh-CN": "expandAction"
          }
        },
        "name": "expandAction",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "false",
                "value": false
              },
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "doubleClick",
                "value": "doubleClick"
              }
            ],
            "options": [
              {
                "label": "false",
                "value": false
              },
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "doubleClick",
                "value": "doubleClick"
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
            "en-US": "showLine",
            "zh-CN": "showLine"
          }
        },
        "name": "showLine",
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
                            "en-US": "showLeafIcon",
                            "zh-CN": "showLeafIcon"
                          }
                        },
                        "name": "showLeafIcon",
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
                          },
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
            "en-US": "multiple",
            "zh-CN": "Whether to"
          },
          "tip": "multiple | Whether to support multiple selection"
        },
        "name": "multiple",
        "description": "Whether to support multiple selection",
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
            "en-US": "autoExpandParent",
            "zh-CN": "Whether to"
          },
          "tip": "autoExpandParent | Whether to automatically expand the parent node"
        },
        "name": "autoExpandParent",
        "description": "Whether to automatically expand the parent node",
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
            "en-US": "checkStrictly",
            "zh-CN": "Node selec"
          },
          "tip": "checkStrictly | Node selection in Checkable state is fully controlled (the selected state of parent and child nodes is no longer associated)"
        },
        "name": "checkStrictly",
        "description": "Node selection in Checkable state is fully controlled (the selected state of parent and child nodes is no longer associated)",
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
            "zh-CN": "Whether to"
          },
          "tip": "checkable | Whether to support selection"
        },
        "name": "checkable",
        "description": "Whether to support selection",
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
            "en-US": "disabled",
            "zh-CN": "whether to"
          },
          "tip": "disabled | whether to disable the tree"
        },
        "name": "disabled",
        "description": "whether to disable the tree",
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
            "en-US": "defaultExpandAll",
            "zh-CN": "Expand all"
          },
          "tip": "defaultExpandAll | Expand all tree nodes by default"
        },
        "name": "defaultExpandAll",
        "description": "Expand all tree nodes by default",
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
            "en-US": "defaultExpandParent",
            "zh-CN": "Expand the"
          },
          "tip": "defaultExpandParent | Expand the corresponding tree node by default"
        },
        "name": "defaultExpandParent",
        "description": "Expand the corresponding tree node by default",
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
            "en-US": "defaultExpandedKeys",
            "zh-CN": "Expand the"
          },
          "tip": "defaultExpandedKeys | Expand the specified tree node by default"
        },
        "name": "defaultExpandedKeys",
        "description": "Expand the specified tree node by default",
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
            "en-US": "expandedKeys",
            "zh-CN": "(Controlle"
          },
          "tip": "expandedKeys | (Controlled) Expand the specified tree node"
        },
        "name": "expandedKeys",
        "description": "(Controlled) Expand the specified tree node",
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
            "en-US": "checkedKeys",
            "zh-CN": "(Controlle"
          },
          "tip": "checkedKeys | (Controlled) Tree node with checked checkbox"
        },
        "name": "checkedKeys",
        "description": "(Controlled) Tree node with checked checkbox",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
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
                            "en-US": "checked",
                            "zh-CN": "checked"
                          }
                        },
                        "name": "checked",
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
                          "isRequired": true,
                          "initialValue": []
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "halfChecked",
                            "zh-CN": "halfChecked"
                          }
                        },
                        "name": "halfChecked",
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
                          "isRequired": true,
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
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultCheckedKeys",
            "zh-CN": "Tree node "
          },
          "tip": "defaultCheckedKeys | Tree node with checkbox checked by default"
        },
        "name": "defaultCheckedKeys",
        "description": "Tree node with checkbox checked by default",
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
            "en-US": "selectedKeys",
            "zh-CN": "(Controlle"
          },
          "tip": "selectedKeys | (Controlled) Set the selected tree node"
        },
        "name": "selectedKeys",
        "description": "(Controlled) Set the selected tree node",
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
            "en-US": "defaultSelectedKeys",
            "zh-CN": "Tree node "
          },
          "tip": "defaultSelectedKeys | Tree node selected by default"
        },
        "name": "defaultSelectedKeys",
        "description": "Tree node selected by default",
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
            "en-US": "filterAntTreeNode",
            "zh-CN": "Click on t"
          },
          "tip": "filterAntTreeNode | Click on the tree node to trigger"
        },
        "name": "filterAntTreeNode",
        "description": "Click on the tree node to trigger",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loadedKeys",
            "zh-CN": "loadedKeys"
          }
        },
        "name": "loadedKeys",
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
            "en-US": "draggable",
            "zh-CN": "Set the no"
          },
          "tip": "draggable | Set the node to be draggable (IE>8)"
        },
        "name": "draggable",
        "description": "Set the node to be draggable (IE>8)",
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
                            "en-US": "nodeDraggable",
                            "zh-CN": "nodeDraggable"
                          }
                        },
                        "name": "nodeDraggable",
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
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showIcon",
            "zh-CN": "showIcon"
          }
        },
        "name": "showIcon",
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
            "en-US": "switcherIcon",
            "zh-CN": "switcherIcon"
          }
        },
        "name": "switcherIcon",
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
            "en-US": "blockNode",
            "zh-CN": "blockNode"
          }
        },
        "name": "blockNode",
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
            "en-US": "motion",
            "zh-CN": "motion"
          }
        },
        "name": "motion",
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
            "en-US": "tabIndex",
            "zh-CN": "tabIndex"
          }
        },
        "name": "tabIndex",
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
            "en-US": "fieldNames",
            "zh-CN": "fieldNames"
          }
        },
        "name": "fieldNames",
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
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "_title",
                      "zh-CN": "_title"
                    }
                  },
                  "name": "_title",
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
                      "en-US": "children",
                      "zh-CN": "children"
                    }
                  },
                  "name": "children",
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
            "en-US": "loadData",
            "zh-CN": "loadData"
          }
        },
        "name": "loadData",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
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
            "en-US": "rootStyle",
            "zh-CN": "rootStyle"
          }
        },
        "name": "rootStyle",
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
            "en-US": "focusable",
            "zh-CN": "focusable"
          }
        },
        "name": "focusable",
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
            "en-US": "treeData",
            "zh-CN": "treeData"
          }
        },
        "name": "treeData",
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
            "en-US": "allowDrop",
            "zh-CN": "allowDrop"
          }
        },
        "name": "allowDrop",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "titleRender",
            "zh-CN": "titleRender"
          }
        },
        "name": "titleRender",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dropIndicatorRender",
            "zh-CN": "dropIndicatorRender"
          }
        },
        "name": "dropIndicatorRender",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onActiveChange",
            "zh-CN": "Used for `"
          },
          "tip": "onActiveChange | Used for `rc-tree-select` only."
        },
        "name": "onActiveChange",
        "description": "Used for `rc-tree-select` only.",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "filterTreeNode",
            "zh-CN": "filterTreeNode"
          }
        },
        "name": "filterTreeNode",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "itemHeight",
            "zh-CN": "itemHeight"
          }
        },
        "name": "itemHeight",
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
            "en-US": "itemScrollOffset",
            "zh-CN": "itemScrollOffset"
          }
        },
        "name": "itemScrollOffset",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true,
      "events": [
        {
          "name": "onMouseEnter"
        },
        {
          "name": "onMouseLeave"
        },
        {
          "name": "onClick"
        },
        {
          "name": "onSelect"
        },
        {
          "name": "onLoad"
        },
        {
          "name": "onDoubleClick"
        },
        {
          "name": "onDragEnd"
        },
        {
          "name": "onDragEnter"
        },
        {
          "name": "onDragLeave"
        },
        {
          "name": "onDragOver"
        },
        {
          "name": "onDragStart"
        },
        {
          "name": "onDrop"
        },
        {
          "name": "onExpand"
        },
        {
          "name": "onCheck"
        },
        {
          "name": "onRightClick"
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "DirectoryTree",
    "screenshot": "",
    "schema": {
      "componentName": "DirectoryTree",
      "props": {}
    }
  }
];

export default {
  ...DirectoryTreeMeta,
  snippets
};
