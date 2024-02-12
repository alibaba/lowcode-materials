
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AnchorMeta: IPublicTypeComponentMetadata = {
  "componentName": "Anchor",
  "title": "Anchor",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Anchor",
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
            "en-US": "children",
            "zh-CN": "@deprecate"
          },
          "tip": "children | @deprecated Please use `items` instead."
        },
        "name": "children",
        "description": "@deprecated Please use `items` instead.",
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
            "en-US": "offsetTop",
            "zh-CN": "offsetTop"
          }
        },
        "name": "offsetTop",
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
            "en-US": "bounds",
            "zh-CN": "bounds"
          }
        },
        "name": "bounds",
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
            "en-US": "affix",
            "zh-CN": "affix"
          }
        },
        "name": "affix",
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
            "en-US": "showInkInFixed",
            "zh-CN": "showInkInFixed"
          }
        },
        "name": "showInkInFixed",
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
            "en-US": "getContainer",
            "zh-CN": "getContainer"
          }
        },
        "name": "getContainer",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "getCurrentAnchor",
            "zh-CN": "Return cus"
          },
          "tip": "getCurrentAnchor | Return customize highlight anchor"
        },
        "name": "getCurrentAnchor",
        "description": "Return customize highlight anchor",
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
            "en-US": "targetOffset",
            "zh-CN": "Scroll to "
          },
          "tip": "targetOffset | Scroll to target offset value, if none, it's offsetTop prop value or 0."
        },
        "name": "targetOffset",
        "description": "Scroll to target offset value, if none, it's offsetTop prop value or 0.",
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
            "zh-CN": "Listening "
          },
          "tip": "onChange | Listening event when scrolling change active link"
        },
        "name": "onChange",
        "description": "Listening event when scrolling change active link",
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
            "en-US": "replace",
            "zh-CN": "replace"
          }
        },
        "name": "replace",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
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
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Anchor",
    "screenshot": "",
    "schema": {
      "componentName": "Anchor",
      "props": {}
    }
  }
];

export default {
  ...AnchorMeta,
  snippets
};
