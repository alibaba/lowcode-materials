
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AppMeta: IPublicTypeComponentMetadata = {
  "componentName": "App",
  "title": "App",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "App",
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
            "en-US": "component",
            "zh-CN": "component"
          }
        },
        "name": "component",
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
            "en-US": "message",
            "zh-CN": "message"
          }
        },
        "name": "message",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                    "isRequired": false,
                    "initialValue": 0
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "duration",
                      "zh-CN": "duration"
                    }
                  },
                  "name": "duration",
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
                      "en-US": "transitionName",
                      "zh-CN": "transitionName"
                    }
                  },
                  "name": "transitionName",
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
                      "en-US": "maxCount",
                      "zh-CN": "maxCount"
                    }
                  },
                  "name": "maxCount",
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
                      "en-US": "rtl",
                      "zh-CN": "rtl"
                    }
                  },
                  "name": "rtl",
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
            "en-US": "notification",
            "zh-CN": "notification"
          }
        },
        "name": "notification",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                    "isRequired": false,
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
                    "isRequired": false,
                    "initialValue": 0
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
                          "label": "bottom",
                          "value": "bottom"
                        },
                        {
                          "label": "bottomLeft",
                          "value": "bottomLeft"
                        },
                        {
                          "label": "bottomRight",
                          "value": "bottomRight"
                        }
                      ],
                      "options": [
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
                          "label": "bottom",
                          "value": "bottom"
                        },
                        {
                          "label": "bottomLeft",
                          "value": "bottomLeft"
                        },
                        {
                          "label": "bottomRight",
                          "value": "bottomRight"
                        }
                      ]
                    },
                    "initialValue": "top"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "maxCount",
                      "zh-CN": "maxCount"
                    }
                  },
                  "name": "maxCount",
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
                      "en-US": "rtl",
                      "zh-CN": "rtl"
                    }
                  },
                  "name": "rtl",
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
                      "en-US": "stack",
                      "zh-CN": "stack"
                    }
                  },
                  "name": "stack",
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
                                      "en-US": "threshold",
                                      "zh-CN": "threshold"
                                    }
                                  },
                                  "name": "threshold",
                                  "setter": {
                                    "componentName": "NumberSetter",
                                    "isRequired": false,
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
    "title": "App",
    "screenshot": "",
    "schema": {
      "componentName": "App",
      "props": {}
    }
  }
];

export default {
  ...AppMeta,
  snippets
};
