
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtGridMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtGrid",
  "title": "AtGrid",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtGrid",
    "main": "",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "data",
            "zh-CN": "宫格布局数据源"
          },
          "tip": "data | 宫格布局数据源"
        },
        "name": "data",
        "description": "宫格布局数据源",
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
                          "en-US": "image",
                          "zh-CN": "image"
                        }
                      },
                      "name": "image",
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
                              "componentName": "StringSetter",
                              "isRequired": false,
                              "initialValue": ""
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
                          "zh-CN": "value"
                        }
                      },
                      "name": "value",
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
                              "componentName": "StringSetter",
                              "isRequired": false,
                              "initialValue": ""
                            }
                          ]
                        }
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "iconInfo",
                          "zh-CN": "iconInfo"
                        }
                      },
                      "name": "iconInfo",
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
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "items": [
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
                                        "componentName": "StringSetter",
                                        "isRequired": true,
                                        "initialValue": ""
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "color",
                                          "zh-CN": "color"
                                        }
                                      },
                                      "name": "color",
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
                                              "componentName": "StringSetter",
                                              "isRequired": false,
                                              "initialValue": ""
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "prefixClass",
                                          "zh-CN": "prefixClass"
                                        }
                                      },
                                      "name": "prefixClass",
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
                                              "componentName": "StringSetter",
                                              "isRequired": false,
                                              "initialValue": ""
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
          "isRequired": true,
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columnNum",
            "zh-CN": "每一列有多少个"
          },
          "tip": "columnNum | 每一列有多少个"
        },
        "name": "columnNum",
        "description": "每一列有多少个",
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
            "en-US": "hasBorder",
            "zh-CN": "是否有边框"
          },
          "tip": "hasBorder | 是否有边框"
        },
        "name": "hasBorder",
        "description": "是否有边框",
        "defaultValue": "true",
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
                "componentName": "BoolSetter",
                "isRequired": false,
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
            "en-US": "mode",
            "zh-CN": "布局模式"
          },
          "tip": "mode | 布局模式"
        },
        "name": "mode",
        "description": "布局模式",
        "defaultValue": "square",
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
                      "label": "square",
                      "value": "square"
                    },
                    {
                      "label": "rect",
                      "value": "rect"
                    }
                  ],
                  "options": [
                    {
                      "label": "square",
                      "value": "square"
                    },
                    {
                      "label": "rect",
                      "value": "rect"
                    }
                  ]
                },
                "initialValue": "square"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClick",
            "zh-CN": "点击宫格触发的事件"
          },
          "tip": "onClick | 点击宫格触发的事件"
        },
        "name": "onClick",
        "description": "点击宫格触发的事件",
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
            "en-US": "className",
            "zh-CN": "className"
          }
        },
        "name": "className",
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
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "customStyle",
            "zh-CN": "customStyle"
          }
        },
        "name": "customStyle",
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
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
          }
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AtGrid",
    "screenshot": "",
    "schema": {
      "componentName": "AtGrid",
      "props": {
        "hasBorder": "true",
        "mode": "square"
      }
    }
  }
];

export default {
  ...AtGridMeta,
  snippets
};
