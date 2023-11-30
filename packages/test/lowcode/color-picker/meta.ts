
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ColorPickerMeta: IPublicTypeComponentMetadata = {
  "componentName": "ColorPicker",
  "title": "ColorPicker",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  // "npm": {
  //   "package": "test",
  //   "version": "0.1.0",
  //   "exportName": "ColorPicker",
  //   "main": "src/index.tsx",
  //   "destructuring": true,
  //   "subName": ""
  // },
  "configure": {
    "props": [
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
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "__constructor",
                      "zh-CN": "__constructor"
                    }
                  },
                  "name": "__constructor",
                  "setter": {
                    "componentName": "MixedSetter",
                    "isRequired": true,
                    "props": {}
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toHsbString",
                      "zh-CN": "toHsbString"
                    }
                  },
                  "name": "toHsbString",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toHsb",
                      "zh-CN": "toHsb"
                    }
                  },
                  "name": "toHsb",
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
            "en-US": "defaultValue",
            "zh-CN": "defaultValue"
          }
        },
        "name": "defaultValue",
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
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "open",
            "zh-CN": "open"
          }
        },
        "name": "open",
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
            "en-US": "trigger",
            "zh-CN": "trigger"
          }
        },
        "name": "trigger",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              }
            ],
            "options": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              }
            ]
          },
          "initialValue": "click"
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
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ],
            "options": [
              {
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ]
          },
          "initialValue": "hex"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultFormat",
            "zh-CN": "defaultFormat"
          }
        },
        "name": "defaultFormat",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ],
            "options": [
              {
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ]
          },
          "initialValue": "hex"
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
            "en-US": "presets",
            "zh-CN": "presets"
          }
        },
        "name": "presets",
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
                        "isRequired": true,
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
                          "en-US": "colors",
                          "zh-CN": "colors"
                        }
                      },
                      "name": "colors",
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
                        "isRequired": true,
                        "initialValue": []
                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "defaultOpen",
                          "zh-CN": "defaultOpen"
                        }
                      },
                      "name": "defaultOpen",
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "arrow",
            "zh-CN": "arrow"
          }
        },
        "name": "arrow",
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
                            "en-US": "pointAtCenter",
                            "zh-CN": "pointAtCenter"
                          }
                        },
                        "name": "pointAtCenter",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": true,
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
            "en-US": "panelRender",
            "zh-CN": "panelRender"
          }
        },
        "name": "panelRender",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showText",
            "zh-CN": "showText"
          }
        },
        "name": "showText",
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
                "label": "middle",
                "value": "middle"
              },
              {
                "label": "large",
                "value": "large"
              }
            ],
            "options": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              },
              {
                "label": "large",
                "value": "large"
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
                      "en-US": "popup",
                      "zh-CN": "popup"
                    }
                  },
                  "name": "popup",
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
                      "en-US": "popupOverlayInner",
                      "zh-CN": "popupOverlayInner"
                    }
                  },
                  "name": "popupOverlayInner",
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
            "en-US": "disabledAlpha",
            "zh-CN": "disabledAlpha"
          }
        },
        "name": "disabledAlpha",
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
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ColorPicker",
    "screenshot": "",
    "schema": {
      "componentName": "ColorPicker",
      "props": {}
    }
  }
];

export default {
  ...ColorPickerMeta,
  snippets
};
