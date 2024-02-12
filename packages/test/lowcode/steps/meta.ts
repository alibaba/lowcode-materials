
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const StepsMeta: IPublicTypeComponentMetadata = {
  "componentName": "Steps",
  "title": "Steps",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Steps",
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
                "label": "default",
                "value": "default"
              },
              {
                "label": "navigation",
                "value": "navigation"
              }
            ],
            "options": [
              {
                "label": "inline",
                "value": "inline"
              },
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "navigation",
                "value": "navigation"
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
            "en-US": "current",
            "zh-CN": "current"
          }
        },
        "name": "current",
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
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
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
            "en-US": "iconPrefix",
            "zh-CN": "iconPrefix"
          }
        },
        "name": "iconPrefix",
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
            "en-US": "initial",
            "zh-CN": "initial"
          }
        },
        "name": "initial",
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
            "en-US": "labelPlacement",
            "zh-CN": "labelPlacement"
          }
        },
        "name": "labelPlacement",
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
            "en-US": "progressDot",
            "zh-CN": "progressDot"
          }
        },
        "name": "progressDot",
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
            "en-US": "responsive",
            "zh-CN": "responsive"
          }
        },
        "name": "responsive",
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
            "en-US": "status",
            "zh-CN": "status"
          }
        },
        "name": "status",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "wait",
                "value": "wait"
              },
              {
                "label": "process",
                "value": "process"
              },
              {
                "label": "finish",
                "value": "finish"
              }
            ],
            "options": [
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "wait",
                "value": "wait"
              },
              {
                "label": "process",
                "value": "process"
              },
              {
                "label": "finish",
                "value": "finish"
              }
            ]
          },
          "initialValue": "error"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "percent",
            "zh-CN": "percent"
          }
        },
        "name": "percent",
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
                          "en-US": "status",
                          "zh-CN": "status"
                        }
                      },
                      "name": "status",
                      "setter": {
                        "componentName": "SelectSetter",
                        "props": {
                          "dataSource": [
                            {
                              "label": "error",
                              "value": "error"
                            },
                            {
                              "label": "wait",
                              "value": "wait"
                            },
                            {
                              "label": "process",
                              "value": "process"
                            },
                            {
                              "label": "finish",
                              "value": "finish"
                            }
                          ],
                          "options": [
                            {
                              "label": "error",
                              "value": "error"
                            },
                            {
                              "label": "wait",
                              "value": "wait"
                            },
                            {
                              "label": "process",
                              "value": "process"
                            },
                            {
                              "label": "finish",
                              "value": "finish"
                            }
                          ]
                        },
                        "initialValue": "error"
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
    "title": "Steps",
    "screenshot": "",
    "schema": {
      "componentName": "Steps",
      "props": {}
    }
  }
];

export default {
  ...StepsMeta,
  snippets
};
