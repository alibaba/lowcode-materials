
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const GroupMeta: ComponentMetadata = {
  "componentName": "Group",
  "title": "Group",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/antd-pro",
    "version": "1.0.0-rc.30",
    "exportName": "CheckCard",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Group"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "multiple",
            "zh-CN": "是否多选"
          },
          "tip": "multiple | 是否多选"
        },
        "name": "multiple",
        "description": "是否多选",
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
            "en-US": "defaultValue",
            "zh-CN": "默认选中的选项"
          },
          "tip": "defaultValue | 默认选中的选项"
        },
        "name": "defaultValue",
        "description": "默认选中的选项",
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
                        }
                      ]
                    }
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
            "en-US": "value",
            "zh-CN": "指定选中的选项"
          },
          "tip": "value | 指定选中的选项"
        },
        "name": "value",
        "description": "指定选中的选项",
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
                        }
                      ]
                    }
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
            "en-US": "loading",
            "zh-CN": "当卡片组内容还在加载"
          },
          "tip": "loading | 当卡片组内容还在加载中时，可以用 loading 展示一个占位"
        },
        "name": "loading",
        "description": "当卡片组内容还在加载中时，可以用 loading 展示一个占位",
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
            "en-US": "onChange",
            "zh-CN": "变化时回调函数"
          },
          "tip": "onChange | 变化时回调函数"
        },
        "name": "onChange",
        "description": "变化时回调函数",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefixCls",
            "zh-CN": "@ignore"
          },
          "tip": "prefixCls | @ignore"
        },
        "name": "prefixCls",
        "description": "@ignore",
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
            "en-US": "options",
            "zh-CN": "指定可选项"
          },
          "tip": "options | 指定可选项"
        },
        "name": "options",
        "description": "指定可选项",
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
                                "en-US": "value",
                                "zh-CN": "value"
                              }
                            },
                            "name": "value",
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
                                "en-US": "description",
                                "zh-CN": "description"
                              }
                            },
                            "name": "description",
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
                                "en-US": "avatar",
                                "zh-CN": "avatar"
                              }
                            },
                            "name": "avatar",
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
                                "en-US": "cover",
                                "zh-CN": "cover"
                              }
                            },
                            "name": "cover",
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
            "en-US": "disabled",
            "zh-CN": "整组失效"
          },
          "tip": "disabled | 整组失效"
        },
        "name": "disabled",
        "description": "整组失效",
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
            "zh-CN": "组件尺寸，支持大，中"
          },
          "tip": "size | 组件尺寸，支持大，中，小三种默认尺寸，用户可以自定义宽高"
        },
        "name": "size",
        "description": "组件尺寸，支持大，中，小三种默认尺寸，用户可以自定义宽高",
        "defaultValue": "default",
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
            "en-US": "children",
            "zh-CN": "@acception"
          },
          "tip": "children | @acceptions CheckCard"
        },
        "name": "children",
        "description": "@acceptions CheckCard",
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
    "supports": {
      "className": true,
      "style": true
    },
    "component": {
      "isContainer": true
    }
  }
};
const snippets: Snippet[] = [
  {
    "title": "Group",
    "screenshot": "",
    "schema": {
      "componentName": "Group",
      "props": {
        "size": "default"
      }
    }
  }
];

export default {
  ...GroupMeta,
  snippets
};
