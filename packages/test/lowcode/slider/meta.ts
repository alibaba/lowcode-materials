
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SliderMeta: IPublicTypeComponentMetadata = {
  "componentName": "Slider",
  "title": "Slider",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Slider",
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
            "en-US": "range",
            "zh-CN": "range"
          }
        },
        "name": "range",
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
                            "en-US": "draggableTrack",
                            "zh-CN": "draggableTrack"
                          }
                        },
                        "name": "draggableTrack",
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
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
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
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "NumberSetter",
                    "isRequired": false,
                    "initialValue": 0
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
            "zh-CN": "onChange"
          }
        },
        "name": "onChange",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
            "en-US": "onAfterChange",
            "zh-CN": "onAfterChange"
          }
        },
        "name": "onAfterChange",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
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
            "en-US": "handleStyle",
            "zh-CN": "@deprecate"
          },
          "tip": "handleStyle | @deprecated Please use `styles.handle` instead"
        },
        "name": "handleStyle",
        "description": "@deprecated Please use `styles.handle` instead",
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
            "en-US": "trackStyle",
            "zh-CN": "@deprecate"
          },
          "tip": "trackStyle | @deprecated Please use `styles.track` instead"
        },
        "name": "trackStyle",
        "description": "@deprecated Please use `styles.track` instead",
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
            "en-US": "railStyle",
            "zh-CN": "@deprecate"
          },
          "tip": "railStyle | @deprecated Please use `styles.rail` instead"
        },
        "name": "railStyle",
        "description": "@deprecated Please use `styles.rail` instead",
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
            "en-US": "reverse",
            "zh-CN": "reverse"
          }
        },
        "name": "reverse",
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
            "en-US": "min",
            "zh-CN": "min"
          }
        },
        "name": "min",
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
            "en-US": "max",
            "zh-CN": "max"
          }
        },
        "name": "max",
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
            "en-US": "step",
            "zh-CN": "step"
          }
        },
        "name": "step",
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
            "en-US": "marks",
            "zh-CN": "marks"
          }
        },
        "name": "marks",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "props": {
                  "setters": []
                },
                "isRequired": false
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
            "en-US": "dots",
            "zh-CN": "dots"
          }
        },
        "name": "dots",
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
            "en-US": "included",
            "zh-CN": "included"
          }
        },
        "name": "included",
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
            "en-US": "vertical",
            "zh-CN": "vertical"
          }
        },
        "name": "vertical",
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
            "en-US": "tooltip",
            "zh-CN": "tooltip"
          }
        },
        "name": "tooltip",
        "setter": {
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
                        },
                        {
                          "label": "left",
                          "value": "left"
                        },
                        {
                          "label": "right",
                          "value": "right"
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
                        },
                        {
                          "label": "left",
                          "value": "left"
                        },
                        {
                          "label": "right",
                          "value": "right"
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
                    "initialValue": "top"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "getPopupContainer",
                      "zh-CN": "getPopupContainer"
                    }
                  },
                  "name": "getPopupContainer",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "formatter",
                      "zh-CN": "formatter"
                    }
                  },
                  "name": "formatter",
                  "setter": {
                    "componentName": "FunctionSetter"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "autoAdjustOverflow",
                      "zh-CN": "autoAdjustOverflow"
                    }
                  },
                  "name": "autoAdjustOverflow",
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
            "en-US": "autoFocus",
            "zh-CN": "autoFocus"
          }
        },
        "name": "autoFocus",
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
            "en-US": "styles",
            "zh-CN": "styles"
          }
        },
        "name": "styles",
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
            "en-US": "classNames",
            "zh-CN": "classNames"
          }
        },
        "name": "classNames",
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
            "en-US": "tooltipPrefixCls",
            "zh-CN": "@deprecate"
          },
          "tip": "tooltipPrefixCls | @deprecated `tooltipPrefixCls` is deprecated. Please use `tooltip.prefixCls` instead."
        },
        "name": "tooltipPrefixCls",
        "description": "@deprecated `tooltipPrefixCls` is deprecated. Please use `tooltip.prefixCls` instead.",
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
            "en-US": "tipFormatter",
            "zh-CN": "@deprecate"
          },
          "tip": "tipFormatter | @deprecated `tipFormatter` is deprecated. Please use `tooltip.formatter` instead."
        },
        "name": "tipFormatter",
        "description": "@deprecated `tipFormatter` is deprecated. Please use `tooltip.formatter` instead.",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tooltipVisible",
            "zh-CN": "@deprecate"
          },
          "tip": "tooltipVisible | @deprecated `tooltipVisible` is deprecated. Please use `tooltip.open` instead."
        },
        "name": "tooltipVisible",
        "description": "@deprecated `tooltipVisible` is deprecated. Please use `tooltip.open` instead.",
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
            "en-US": "getTooltipPopupContainer",
            "zh-CN": "@deprecate"
          },
          "tip": "getTooltipPopupContainer | @deprecated `getTooltipPopupContainer` is deprecated. Please use `tooltip.getPopupContainer`"
        },
        "name": "getTooltipPopupContainer",
        "description": "@deprecated `getTooltipPopupContainer` is deprecated. Please use `tooltip.getPopupContainer`",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tooltipPlacement",
            "zh-CN": "@deprecate"
          },
          "tip": "tooltipPlacement | @deprecated `tooltipPlacement` is deprecated. Please use `tooltip.placement` instead."
        },
        "name": "tooltipPlacement",
        "description": "@deprecated `tooltipPlacement` is deprecated. Please use `tooltip.placement` instead.",
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
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
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
              },
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
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
          "initialValue": "top"
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
    "title": "Slider",
    "screenshot": "",
    "schema": {
      "componentName": "Slider",
      "props": {}
    }
  }
];

export default {
  ...SliderMeta,
  snippets
};
