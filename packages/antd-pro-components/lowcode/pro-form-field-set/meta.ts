
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProFormFieldSetMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProFormFieldSet",
  "title": "ProFormFieldSet",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProFormFieldSet",
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
            "en-US": "noStyle",
            "zh-CN": "noStyle"
          }
        },
        "name": "noStyle",
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
            "en-US": "hasFeedback",
            "zh-CN": "hasFeedback"
          }
        },
        "name": "hasFeedback",
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
                            "en-US": "icons",
                            "zh-CN": "icons"
                          }
                        },
                        "name": "icons",
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
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "validateStatus",
            "zh-CN": "validateStatus"
          }
        },
        "name": "validateStatus",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ]
          },
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "required",
            "zh-CN": "required"
          }
        },
        "name": "required",
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
            "en-US": "hidden",
            "zh-CN": "hidden"
          }
        },
        "name": "hidden",
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
            "en-US": "initialValue",
            "zh-CN": "initialValue"
          }
        },
        "name": "initialValue",
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
            "en-US": "messageVariables",
            "zh-CN": "messageVariables"
          }
        },
        "name": "messageVariables",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
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
            "en-US": "fieldKey",
            "zh-CN": "@deprecate"
          },
          "tip": "fieldKey | @deprecated No need anymore"
        },
        "name": "fieldKey",
        "description": "@deprecated No need anymore",
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
            ]
          }
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
            "en-US": "colon",
            "zh-CN": "colon"
          }
        },
        "name": "colon",
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
            "en-US": "htmlFor",
            "zh-CN": "htmlFor"
          }
        },
        "name": "htmlFor",
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
            "en-US": "labelAlign",
            "zh-CN": "labelAlign"
          }
        },
        "name": "labelAlign",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "left",
                "value": "left"
              }
            ],
            "options": [
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "left",
                "value": "left"
              }
            ]
          },
          "initialValue": "right"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "labelCol",
            "zh-CN": "labelCol"
          }
        },
        "name": "labelCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "flex",
                      "zh-CN": "flex"
                    }
                  },
                  "name": "flex",
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
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ],
                            "options": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ]
                          },
                          "initialValue": "none"
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "span",
                      "zh-CN": "span"
                    }
                  },
                  "name": "span",
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
                      "en-US": "order",
                      "zh-CN": "order"
                    }
                  },
                  "name": "order",
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
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                      "en-US": "push",
                      "zh-CN": "push"
                    }
                  },
                  "name": "push",
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
                      "en-US": "pull",
                      "zh-CN": "pull"
                    }
                  },
                  "name": "pull",
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
                      "en-US": "xs",
                      "zh-CN": "xs"
                    }
                  },
                  "name": "xs",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "sm",
                      "zh-CN": "sm"
                    }
                  },
                  "name": "sm",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "md",
                      "zh-CN": "md"
                    }
                  },
                  "name": "md",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "lg",
                      "zh-CN": "lg"
                    }
                  },
                  "name": "lg",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xl",
                      "zh-CN": "xl"
                    }
                  },
                  "name": "xl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xxl",
                      "zh-CN": "xxl"
                    }
                  },
                  "name": "xxl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "wrapperCol",
            "zh-CN": "wrapperCol"
          }
        },
        "name": "wrapperCol",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "flex",
                      "zh-CN": "flex"
                    }
                  },
                  "name": "flex",
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
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ],
                            "options": [
                              {
                                "label": "none",
                                "value": "none"
                              },
                              {
                                "label": "auto",
                                "value": "auto"
                              }
                            ]
                          },
                          "initialValue": "none"
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "span",
                      "zh-CN": "span"
                    }
                  },
                  "name": "span",
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
                      "en-US": "order",
                      "zh-CN": "order"
                    }
                  },
                  "name": "order",
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
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
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
                      "en-US": "push",
                      "zh-CN": "push"
                    }
                  },
                  "name": "push",
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
                      "en-US": "pull",
                      "zh-CN": "pull"
                    }
                  },
                  "name": "pull",
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
                      "en-US": "xs",
                      "zh-CN": "xs"
                    }
                  },
                  "name": "xs",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "sm",
                      "zh-CN": "sm"
                    }
                  },
                  "name": "sm",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "md",
                      "zh-CN": "md"
                    }
                  },
                  "name": "md",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "lg",
                      "zh-CN": "lg"
                    }
                  },
                  "name": "lg",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xl",
                      "zh-CN": "xl"
                    }
                  },
                  "name": "xl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                      "en-US": "xxl",
                      "zh-CN": "xxl"
                    }
                  },
                  "name": "xxl",
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
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "flex",
                                      "zh-CN": "flex"
                                    }
                                  },
                                  "name": "flex",
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
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ],
                                            "options": [
                                              {
                                                "label": "none",
                                                "value": "none"
                                              },
                                              {
                                                "label": "auto",
                                                "value": "auto"
                                              }
                                            ]
                                          },
                                          "initialValue": "none"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "span",
                                      "zh-CN": "span"
                                    }
                                  },
                                  "name": "span",
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
                                      "en-US": "order",
                                      "zh-CN": "order"
                                    }
                                  },
                                  "name": "order",
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
                                      "en-US": "offset",
                                      "zh-CN": "offset"
                                    }
                                  },
                                  "name": "offset",
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
                                      "en-US": "push",
                                      "zh-CN": "push"
                                    }
                                  },
                                  "name": "push",
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
                                      "en-US": "pull",
                                      "zh-CN": "pull"
                                    }
                                  },
                                  "name": "pull",
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
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "validating",
                "value": "validating"
              }
            ]
          },
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "help",
            "zh-CN": "help"
          }
        },
        "name": "help",
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
            "en-US": "fieldId",
            "zh-CN": "fieldId"
          }
        },
        "name": "fieldId",
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
            "en-US": "trigger",
            "zh-CN": "trigger"
          }
        },
        "name": "trigger",
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
            "en-US": "dependencies",
            "zh-CN": "Set up `de"
          },
          "tip": "dependencies | Set up `dependencies` field."
        },
        "name": "dependencies",
        "description": "Set up `dependencies` field.",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "initialValue": []
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
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "getValueFromEvent",
            "zh-CN": "getValueFromEvent"
          }
        },
        "name": "getValueFromEvent",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "normalize",
            "zh-CN": "normalize"
          }
        },
        "name": "normalize",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rules",
            "zh-CN": "rules"
          }
        },
        "name": "rules",
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
                                    "label": "array",
                                    "value": "array"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "array",
                                    "value": "array"
                                  }
                                ]
                              },
                              "isRequired": true,
                              "initialValue": "array"
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "defaultField",
                                "zh-CN": "defaultField"
                              }
                            },
                            "name": "defaultField",
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
                    "componentName": "FunctionSetter"
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
            "en-US": "shouldUpdate",
            "zh-CN": "shouldUpdate"
          }
        },
        "name": "shouldUpdate",
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
            "en-US": "validateTrigger",
            "zh-CN": "validateTrigger"
          }
        },
        "name": "validateTrigger",
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
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                  }
                },
                "initialValue": []
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
            "en-US": "validateDebounce",
            "zh-CN": "Trigger wi"
          },
          "tip": "validateDebounce | Trigger will after configured milliseconds."
        },
        "name": "validateDebounce",
        "description": "Trigger will after configured milliseconds.",
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
            "en-US": "validateFirst",
            "zh-CN": "validateFirst"
          }
        },
        "name": "validateFirst",
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
                      "label": "parallel",
                      "value": "parallel"
                    }
                  ],
                  "options": [
                    {
                      "label": "parallel",
                      "value": "parallel"
                    }
                  ]
                },
                "initialValue": "parallel"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "valuePropName",
            "zh-CN": "valuePropName"
          }
        },
        "name": "valuePropName",
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
            "en-US": "getValueProps",
            "zh-CN": "getValueProps"
          }
        },
        "name": "getValueProps",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onMetaChange",
            "zh-CN": "onMetaChange"
          }
        },
        "name": "onMetaChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "preserve",
            "zh-CN": "preserve"
          }
        },
        "name": "preserve",
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
            "en-US": "isListField",
            "zh-CN": "@private P"
          },
          "tip": "isListField | @private Passed by Form.List props. Do not use since it will break by path check."
        },
        "name": "isListField",
        "description": "@private Passed by Form.List props. Do not use since it will break by path check.",
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
            "en-US": "isList",
            "zh-CN": "@private P"
          },
          "tip": "isList | @private Passed by Form.List props. Do not use since it will break by path check."
        },
        "name": "isList",
        "description": "@private Passed by Form.List props. Do not use since it will break by path check.",
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
            "en-US": "value",
            "zh-CN": "value"
          }
        },
        "name": "value",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "isRequired": false,
              "props": {}
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "space",
            "zh-CN": "space"
          }
        },
        "name": "space",
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
                          "componentName": "MixedSetter",
                          "props": {
                            "setters": [
                              {
                                "componentName": "NumberSetter",
                                "isRequired": false,
                                "initialValue": 0
                              },
                              {
                                "componentName": "MixedSetter",
                                "props": {}
                              },
                              {
                                "componentName": "RadioGroupSetter",
                                "props": {
                                  "dataSource": [
                                    {
                                      "label": "large",
                                      "value": "large"
                                    },
                                    {
                                      "label": "small",
                                      "value": "small"
                                    },
                                    {
                                      "label": "middle",
                                      "value": "middle"
                                    }
                                  ],
                                  "options": [
                                    {
                                      "label": "large",
                                      "value": "large"
                                    },
                                    {
                                      "label": "small",
                                      "value": "small"
                                    },
                                    {
                                      "label": "middle",
                                      "value": "middle"
                                    }
                                  ]
                                },
                                "initialValue": "large"
                              }
                            ]
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
                            "en-US": "align",
                            "zh-CN": "align"
                          }
                        },
                        "name": "align",
                        "setter": {
                          "componentName": "SelectSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "baseline",
                                "value": "baseline"
                              }
                            ],
                            "options": [
                              {
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "baseline",
                                "value": "baseline"
                              }
                            ]
                          },
                          "initialValue": "center"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "split",
                            "zh-CN": "split"
                          }
                        },
                        "name": "split",
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
                            "en-US": "wrap",
                            "zh-CN": "wrap"
                          }
                        },
                        "name": "wrap",
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
                                      "en-US": "item",
                                      "zh-CN": "item"
                                    }
                                  },
                                  "name": "item",
                                  "setter": {
                                    "componentName": "StringSetter",
                                    "isRequired": true,
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
                                      "en-US": "item",
                                      "zh-CN": "item"
                                    }
                                  },
                                  "name": "item",
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
                                    "isRequired": true,
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
                              },
                              {
                                "label": "small",
                                "value": "small"
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
                              },
                              {
                                "label": "small",
                                "value": "small"
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
                            "en-US": "compact",
                            "zh-CN": "compact"
                          }
                        },
                        "name": "compact",
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
                "label": "space",
                "value": "space"
              }
            ],
            "options": [
              {
                "label": "group",
                "value": "group"
              },
              {
                "label": "space",
                "value": "space"
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
            "en-US": "fieldProps",
            "zh-CN": "fieldProps"
          }
        },
        "name": "fieldProps",
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
            "en-US": "convertValue",
            "zh-CN": "convertValue"
          }
        },
        "name": "convertValue",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "transform",
            "zh-CN": "transform"
          }
        },
        "name": "transform",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lightProps",
            "zh-CN": "lightProps"
          }
        },
        "name": "lightProps",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                      "en-US": "placeholder",
                      "zh-CN": "placeholder"
                    }
                  },
                  "name": "placeholder",
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
                          "label": "large",
                          "value": "large"
                        },
                        {
                          "label": "small",
                          "value": "small"
                        },
                        {
                          "label": "middle",
                          "value": "middle"
                        }
                      ],
                      "options": [
                        {
                          "label": "large",
                          "value": "large"
                        },
                        {
                          "label": "small",
                          "value": "small"
                        },
                        {
                          "label": "middle",
                          "value": "middle"
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
                      "en-US": "value",
                      "zh-CN": "value"
                    }
                  },
                  "name": "value",
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
                      "en-US": "valuePropName",
                      "zh-CN": "valuePropName"
                    }
                  },
                  "name": "valuePropName",
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
                      "en-US": "customLightMode",
                      "zh-CN": "customLightMode"
                    }
                  },
                  "name": "customLightMode",
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
                      "en-US": "light",
                      "zh-CN": "light"
                    }
                  },
                  "name": "light",
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
                      "en-US": "labelFormatter",
                      "zh-CN": "labelFormatter"
                    }
                  },
                  "name": "labelFormatter",
                  "setter": {
                    "componentName": "FunctionSetter"
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
                      "en-US": "otherFieldProps",
                      "zh-CN": "otherFieldProps"
                    }
                  },
                  "name": "otherFieldProps",
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
                      "en-US": "valueType",
                      "zh-CN": "valueType"
                    }
                  },
                  "name": "valueType",
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
                      "en-US": "allowClear",
                      "zh-CN": "allowClear"
                    }
                  },
                  "name": "allowClear",
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
                      "en-US": "footerRender",
                      "zh-CN": "footerRender"
                    }
                  },
                  "name": "footerRender",
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
                          "label": "right",
                          "value": "right"
                        },
                        {
                          "label": "bottom",
                          "value": "bottom"
                        },
                        {
                          "label": "left",
                          "value": "left"
                        },
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
                          "label": "bottomLeft",
                          "value": "bottomLeft"
                        },
                        {
                          "label": "bottomRight",
                          "value": "bottomRight"
                        },
                        {
                          "label": "leftTop",
                          "value": "leftTop"
                        },
                        {
                          "label": "leftBottom",
                          "value": "leftBottom"
                        },
                        {
                          "label": "rightTop",
                          "value": "rightTop"
                        },
                        {
                          "label": "rightBottom",
                          "value": "rightBottom"
                        }
                      ],
                      "options": [
                        {
                          "label": "right",
                          "value": "right"
                        },
                        {
                          "label": "bottom",
                          "value": "bottom"
                        },
                        {
                          "label": "left",
                          "value": "left"
                        },
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
                          "label": "bottomLeft",
                          "value": "bottomLeft"
                        },
                        {
                          "label": "bottomRight",
                          "value": "bottomRight"
                        },
                        {
                          "label": "leftTop",
                          "value": "leftTop"
                        },
                        {
                          "label": "leftBottom",
                          "value": "leftBottom"
                        },
                        {
                          "label": "rightTop",
                          "value": "rightTop"
                        },
                        {
                          "label": "rightBottom",
                          "value": "rightBottom"
                        }
                      ]
                    },
                    "initialValue": "right"
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
      "className": true,
      "events": [
        {
          "name": "onReset"
        },
        {
          "name": "onChange"
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProFormFieldSet",
    "screenshot": "",
    "schema": {
      "componentName": "ProFormFieldSet",
      "props": {}
    }
  }
];

export default {
  ...ProFormFieldSetMeta,
  snippets
};
