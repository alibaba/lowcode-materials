
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TitleMeta: IPublicTypeComponentMetadata = {
  "componentName": "Title",
  "title": "Title",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Typography",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Title"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "level",
            "zh-CN": "level"
          }
        },
        "name": "level",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "2",
                "value": 2
              },
              {
                "label": "3",
                "value": 3
              },
              {
                "label": "5",
                "value": 5
              },
              {
                "label": "4",
                "value": 4
              },
              {
                "label": "1",
                "value": 1
              }
            ],
            "options": [
              {
                "label": "2",
                "value": 2
              },
              {
                "label": "3",
                "value": 3
              },
              {
                "label": "5",
                "value": 5
              },
              {
                "label": "4",
                "value": 4
              },
              {
                "label": "1",
                "value": 1
              }
            ]
          },
          "initialValue": 2
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
            "en-US": "type",
            "zh-CN": "type"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "danger",
                "value": "danger"
              }
            ],
            "options": [
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "danger",
                "value": "danger"
              }
            ]
          },
          "initialValue": "secondary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "italic",
            "zh-CN": "italic"
          }
        },
        "name": "italic",
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
            "en-US": "editable",
            "zh-CN": "editable"
          }
        },
        "name": "editable",
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
                            "en-US": "text",
                            "zh-CN": "text"
                          }
                        },
                        "name": "text",
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
                            "en-US": "editing",
                            "zh-CN": "editing"
                          }
                        },
                        "name": "editing",
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
                            "en-US": "onStart",
                            "zh-CN": "onStart"
                          }
                        },
                        "name": "onStart",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": false
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
                            "en-US": "onCancel",
                            "zh-CN": "onCancel"
                          }
                        },
                        "name": "onCancel",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onEnd",
                            "zh-CN": "onEnd"
                          }
                        },
                        "name": "onEnd",
                        "setter": {
                          "componentName": "FunctionSetter",
                          "isRequired": false
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "maxLength",
                            "zh-CN": "maxLength"
                          }
                        },
                        "name": "maxLength",
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
                            "en-US": "autoSize",
                            "zh-CN": "autoSize"
                          }
                        },
                        "name": "autoSize",
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
                                            "en-US": "minRows",
                                            "zh-CN": "minRows"
                                          }
                                        },
                                        "name": "minRows",
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
                                            "en-US": "maxRows",
                                            "zh-CN": "maxRows"
                                          }
                                        },
                                        "name": "maxRows",
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
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "triggerType",
                            "zh-CN": "triggerType"
                          }
                        },
                        "name": "triggerType",
                        "setter": {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "RadioGroupSetter",
                              "props": {
                                "dataSource": [
                                  {
                                    "label": "icon",
                                    "value": "icon"
                                  },
                                  {
                                    "label": "text",
                                    "value": "text"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "icon",
                                    "value": "icon"
                                  },
                                  {
                                    "label": "text",
                                    "value": "text"
                                  }
                                ]
                              },
                              "initialValue": "icon"
                            }
                          },
                          "initialValue": []
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "enterIcon",
                            "zh-CN": "enterIcon"
                          }
                        },
                        "name": "enterIcon",
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
            "en-US": "code",
            "zh-CN": "code"
          }
        },
        "name": "code",
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
            "en-US": "mark",
            "zh-CN": "mark"
          }
        },
        "name": "mark",
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
            "en-US": "keyboard",
            "zh-CN": "keyboard"
          }
        },
        "name": "keyboard",
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
            "en-US": "ellipsis",
            "zh-CN": "ellipsis"
          }
        },
        "name": "ellipsis",
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
                            "en-US": "rows",
                            "zh-CN": "rows"
                          }
                        },
                        "name": "rows",
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
                            "en-US": "expandable",
                            "zh-CN": "expandable"
                          }
                        },
                        "name": "expandable",
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
                            "en-US": "suffix",
                            "zh-CN": "suffix"
                          }
                        },
                        "name": "suffix",
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
                            "en-US": "symbol",
                            "zh-CN": "symbol"
                          }
                        },
                        "name": "symbol",
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
                            "en-US": "onEllipsis",
                            "zh-CN": "onEllipsis"
                          }
                        },
                        "name": "onEllipsis",
                        "setter": {
                          "componentName": "FunctionSetter"
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
            "en-US": "copyable",
            "zh-CN": "copyable"
          }
        },
        "name": "copyable",
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
                            "en-US": "text",
                            "zh-CN": "text"
                          }
                        },
                        "name": "text",
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
                            "en-US": "tooltips",
                            "zh-CN": "tooltips"
                          }
                        },
                        "name": "tooltips",
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
                            "en-US": "format",
                            "zh-CN": "format"
                          }
                        },
                        "name": "format",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "text/plain",
                                "value": "text/plain"
                              },
                              {
                                "label": "text/html",
                                "value": "text/html"
                              }
                            ],
                            "options": [
                              {
                                "label": "text/plain",
                                "value": "text/plain"
                              },
                              {
                                "label": "text/html",
                                "value": "text/html"
                              }
                            ]
                          },
                          "initialValue": "text/plain"
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
            "en-US": "underline",
            "zh-CN": "underline"
          }
        },
        "name": "underline",
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
            "en-US": "delete",
            "zh-CN": "delete"
          }
        },
        "name": "delete",
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
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
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
    "title": "Title",
    "screenshot": "",
    "schema": {
      "componentName": "Title",
      "props": {}
    }
  }
];

export default {
  ...TitleMeta,
  snippets
};
