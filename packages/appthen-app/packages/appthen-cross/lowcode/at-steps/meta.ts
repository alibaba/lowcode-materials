
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtStepsMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtSteps",
  "title": "AtSteps",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtSteps",
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
            "en-US": "current",
            "zh-CN": "当前步骤索引值。"
          },
          "tip": "current | 当前步骤索引值。"
        },
        "name": "current",
        "description": "当前步骤索引值。",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": true,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "items",
            "zh-CN": "步骤条数据列表"
          },
          "tip": "items | 步骤条数据列表"
        },
        "name": "items",
        "description": "步骤条数据列表",
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
                                "en-US": "desc",
                                "zh-CN": "desc"
                              }
                            },
                            "name": "desc",
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
                                                "en-US": "activeColor",
                                                "zh-CN": "activeColor"
                                              }
                                            },
                                            "name": "activeColor",
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
                                                "en-US": "inactiveColor",
                                                "zh-CN": "inactiveColor"
                                              }
                                            },
                                            "name": "inactiveColor",
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
                                          "label": "error",
                                          "value": "error"
                                        },
                                        {
                                          "label": "success",
                                          "value": "success"
                                        }
                                      ],
                                      "options": [
                                        {
                                          "label": "error",
                                          "value": "error"
                                        },
                                        {
                                          "label": "success",
                                          "value": "success"
                                        }
                                      ]
                                    },
                                    "initialValue": "error"
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
            "en-US": "onChange",
            "zh-CN": "点击触发事件。"
          },
          "tip": "onChange | 点击触发事件。"
        },
        "name": "onChange",
        "description": "点击触发事件。",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": true
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
    "title": "AtSteps",
    "screenshot": "",
    "schema": {
      "componentName": "AtSteps",
      "props": {}
    }
  }
];

export default {
  ...AtStepsMeta,
  snippets
};
