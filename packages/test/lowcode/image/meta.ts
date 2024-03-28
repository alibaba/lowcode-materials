
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImageMeta: IPublicTypeComponentMetadata = {
  "componentName": "Image",
  "title": "Image",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Image",
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
            "en-US": "src",
            "zh-CN": "src"
          }
        },
        "name": "src",
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
            "en-US": "wrapperClassName",
            "zh-CN": "wrapperClassName"
          }
        },
        "name": "wrapperClassName",
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
            "en-US": "wrapperStyle",
            "zh-CN": "wrapperStyle"
          }
        },
        "name": "wrapperStyle",
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
            "en-US": "previewPrefixCls",
            "zh-CN": "previewPrefixCls"
          }
        },
        "name": "previewPrefixCls",
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
            "en-US": "fallback",
            "zh-CN": "fallback"
          }
        },
        "name": "fallback",
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
            "en-US": "preview",
            "zh-CN": "preview"
          }
        },
        "name": "preview",
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
                            "en-US": "src",
                            "zh-CN": "src"
                          }
                        },
                        "name": "src",
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
                            "en-US": "visible",
                            "zh-CN": "visible"
                          }
                        },
                        "name": "visible",
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
                            "en-US": "minScale",
                            "zh-CN": "minScale"
                          }
                        },
                        "name": "minScale",
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
                            "en-US": "maxScale",
                            "zh-CN": "maxScale"
                          }
                        },
                        "name": "maxScale",
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
                            "en-US": "onVisibleChange",
                            "zh-CN": "onVisibleChange"
                          }
                        },
                        "name": "onVisibleChange",
                        "setter": {
                          "componentName": "FunctionSetter"
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
                                "componentName": "FunctionSetter",
                                "isRequired": false
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
                            "en-US": "mask",
                            "zh-CN": "mask"
                          }
                        },
                        "name": "mask",
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
                            "en-US": "maskClassName",
                            "zh-CN": "maskClassName"
                          }
                        },
                        "name": "maskClassName",
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
                            "en-US": "icons",
                            "zh-CN": "icons"
                          }
                        },
                        "name": "icons",
                        "setter": {
                          "componentName": "ObjectSetter",
                          "props": {
                            "config": {
                              "items": [
                                {
                                  "title": {
                                    "label": {
                                      "type": "i18n",
                                      "en-US": "rotateLeft",
                                      "zh-CN": "rotateLeft"
                                    }
                                  },
                                  "name": "rotateLeft",
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
                                      "en-US": "rotateRight",
                                      "zh-CN": "rotateRight"
                                    }
                                  },
                                  "name": "rotateRight",
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
                                      "en-US": "zoomIn",
                                      "zh-CN": "zoomIn"
                                    }
                                  },
                                  "name": "zoomIn",
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
                                      "en-US": "zoomOut",
                                      "zh-CN": "zoomOut"
                                    }
                                  },
                                  "name": "zoomOut",
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
                                      "en-US": "close",
                                      "zh-CN": "close"
                                    }
                                  },
                                  "name": "close",
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
                                      "en-US": "left",
                                      "zh-CN": "left"
                                    }
                                  },
                                  "name": "left",
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
                                      "en-US": "right",
                                      "zh-CN": "right"
                                    }
                                  },
                                  "name": "right",
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
                                      "en-US": "flipX",
                                      "zh-CN": "flipX"
                                    }
                                  },
                                  "name": "flipX",
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
                                      "en-US": "flipY",
                                      "zh-CN": "flipY"
                                    }
                                  },
                                  "name": "flipY",
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
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "scaleStep",
                            "zh-CN": "scaleStep"
                          }
                        },
                        "name": "scaleStep",
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
                            "en-US": "movable",
                            "zh-CN": "movable"
                          }
                        },
                        "name": "movable",
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
                            "en-US": "imageRender",
                            "zh-CN": "imageRender"
                          }
                        },
                        "name": "imageRender",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "onTransform",
                            "zh-CN": "onTransform"
                          }
                        },
                        "name": "onTransform",
                        "setter": {
                          "componentName": "FunctionSetter"
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "toolbarRender",
                            "zh-CN": "toolbarRender"
                          }
                        },
                        "name": "toolbarRender",
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
            "en-US": "onPreviewClose",
            "zh-CN": "@deprecate"
          },
          "tip": "onPreviewClose | @deprecated since version 3.2.1"
        },
        "name": "onPreviewClose",
        "description": "@deprecated since version 3.2.1",
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
            "en-US": "onError",
            "zh-CN": "onError"
          }
        },
        "name": "onError",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "loading"
          }
        },
        "name": "loading",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "eager",
                "value": "eager"
              },
              {
                "label": "lazy",
                "value": "lazy"
              }
            ],
            "options": [
              {
                "label": "eager",
                "value": "eager"
              },
              {
                "label": "lazy",
                "value": "lazy"
              }
            ]
          },
          "initialValue": "eager"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "width",
            "zh-CN": "width"
          }
        },
        "name": "width",
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
            "en-US": "height",
            "zh-CN": "height"
          }
        },
        "name": "height",
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
            "en-US": "referrerPolicy",
            "zh-CN": "referrerPolicy"
          }
        },
        "name": "referrerPolicy",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "no-referrer",
                "value": "no-referrer"
              },
              {
                "label": "no-referrer-when-downgrade",
                "value": "no-referrer-when-downgrade"
              },
              {
                "label": "origin",
                "value": "origin"
              },
              {
                "label": "origin-when-cross-origin",
                "value": "origin-when-cross-origin"
              },
              {
                "label": "same-origin",
                "value": "same-origin"
              },
              {
                "label": "strict-origin",
                "value": "strict-origin"
              },
              {
                "label": "strict-origin-when-cross-origin",
                "value": "strict-origin-when-cross-origin"
              },
              {
                "label": "unsafe-url",
                "value": "unsafe-url"
              }
            ],
            "options": [
              {
                "label": "",
                "value": ""
              },
              {
                "label": "no-referrer",
                "value": "no-referrer"
              },
              {
                "label": "no-referrer-when-downgrade",
                "value": "no-referrer-when-downgrade"
              },
              {
                "label": "origin",
                "value": "origin"
              },
              {
                "label": "origin-when-cross-origin",
                "value": "origin-when-cross-origin"
              },
              {
                "label": "same-origin",
                "value": "same-origin"
              },
              {
                "label": "strict-origin",
                "value": "strict-origin"
              },
              {
                "label": "strict-origin-when-cross-origin",
                "value": "strict-origin-when-cross-origin"
              },
              {
                "label": "unsafe-url",
                "value": "unsafe-url"
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
            "en-US": "decoding",
            "zh-CN": "decoding"
          }
        },
        "name": "decoding",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "auto",
                "value": "auto"
              },
              {
                "label": "async",
                "value": "async"
              },
              {
                "label": "sync",
                "value": "sync"
              }
            ],
            "options": [
              {
                "label": "auto",
                "value": "auto"
              },
              {
                "label": "async",
                "value": "async"
              },
              {
                "label": "sync",
                "value": "sync"
              }
            ]
          },
          "initialValue": "auto"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "sizes",
            "zh-CN": "sizes"
          }
        },
        "name": "sizes",
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
            "en-US": "useMap",
            "zh-CN": "useMap"
          }
        },
        "name": "useMap",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
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
    "title": "Image",
    "screenshot": "",
    "schema": {
      "componentName": "Image",
      "props": {}
    }
  }
];

export default {
  ...ImageMeta,
  snippets
};
