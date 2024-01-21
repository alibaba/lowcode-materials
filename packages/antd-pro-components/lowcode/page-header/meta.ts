
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PageHeaderMeta: IPublicTypeComponentMetadata = {
  "componentName": "PageHeader",
  "title": "PageHeader",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "PageHeader",
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
            "en-US": "backIcon",
            "zh-CN": "backIcon"
          }
        },
        "name": "backIcon",
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
            "en-US": "childrenContentStyle",
            "zh-CN": "childrenContentStyle"
          }
        },
        "name": "childrenContentStyle",
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
            "en-US": "breadcrumb",
            "zh-CN": "breadcrumb"
          }
        },
        "name": "breadcrumb",
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
            "en-US": "breadcrumbRender",
            "zh-CN": "breadcrumbRender"
          }
        },
        "name": "breadcrumbRender",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tags",
            "zh-CN": "tags"
          }
        },
        "name": "tags",
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
            ]
          }
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
            "en-US": "avatar",
            "zh-CN": "avatar"
          }
        },
        "name": "avatar",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "shape",
                      "zh-CN": "shape"
                    }
                  },
                  "name": "shape",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "circle",
                          "value": "circle"
                        },
                        {
                          "label": "square",
                          "value": "square"
                        }
                      ],
                      "options": [
                        {
                          "label": "circle",
                          "value": "circle"
                        },
                        {
                          "label": "square",
                          "value": "square"
                        }
                      ]
                    },
                    "initialValue": "circle"
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
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "gap",
                      "zh-CN": "gap"
                    }
                  },
                  "name": "gap",
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
                      "en-US": "src",
                      "zh-CN": "src"
                    }
                  },
                  "name": "src",
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
                      "en-US": "srcSet",
                      "zh-CN": "srcSet"
                    }
                  },
                  "name": "srcSet",
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
                      "en-US": "draggable",
                      "zh-CN": "draggable"
                    }
                  },
                  "name": "draggable",
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
                                "label": "true",
                                "value": "true"
                              },
                              {
                                "label": "false",
                                "value": "false"
                              }
                            ],
                            "options": [
                              {
                                "label": "true",
                                "value": "true"
                              },
                              {
                                "label": "false",
                                "value": "false"
                              }
                            ]
                          },
                          "initialValue": "true"
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
                      "en-US": "alt",
                      "zh-CN": "alt"
                    }
                  },
                  "name": "alt",
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
                      "en-US": "crossOrigin",
                      "zh-CN": "crossOrigin"
                    }
                  },
                  "name": "crossOrigin",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "",
                          "value": ""
                        },
                        {
                          "label": "anonymous",
                          "value": "anonymous"
                        },
                        {
                          "label": "use-credentials",
                          "value": "use-credentials"
                        }
                      ],
                      "options": [
                        {
                          "label": "",
                          "value": ""
                        },
                        {
                          "label": "anonymous",
                          "value": "anonymous"
                        },
                        {
                          "label": "use-credentials",
                          "value": "use-credentials"
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
                      "en-US": "onError",
                      "zh-CN": "onError"
                    }
                  },
                  "name": "onError",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": false
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
            "en-US": "onBack",
            "zh-CN": "onBack"
          }
        },
        "name": "onBack",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "contentWidth",
            "zh-CN": "contentWidth"
          }
        },
        "name": "contentWidth",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "Fluid",
                "value": "Fluid"
              },
              {
                "label": "Fixed",
                "value": "Fixed"
              }
            ],
            "options": [
              {
                "label": "Fluid",
                "value": "Fluid"
              },
              {
                "label": "Fixed",
                "value": "Fixed"
              }
            ]
          },
          "initialValue": "Fluid"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "layout",
            "zh-CN": "layout"
          }
        },
        "name": "layout",
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
            "en-US": "ghost",
            "zh-CN": "ghost"
          }
        },
        "name": "ghost",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
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
    "title": "PageHeader",
    "screenshot": "",
    "schema": {
      "componentName": "PageHeader",
      "props": {}
    }
  }
];

export default {
  ...PageHeaderMeta,
  snippets
};
