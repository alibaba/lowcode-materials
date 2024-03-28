
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CarouselMeta: IPublicTypeComponentMetadata = {
  "componentName": "Carousel",
  "title": "Carousel",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Carousel",
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
            "en-US": "effect",
            "zh-CN": "effect"
          }
        },
        "name": "effect",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "fade",
                "value": "fade"
              },
              {
                "label": "scrollx",
                "value": "scrollx"
              }
            ],
            "options": [
              {
                "label": "fade",
                "value": "fade"
              },
              {
                "label": "scrollx",
                "value": "scrollx"
              }
            ]
          },
          "initialValue": "fade"
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
            "en-US": "slickGoTo",
            "zh-CN": "slickGoTo"
          }
        },
        "name": "slickGoTo",
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
            "en-US": "dotPosition",
            "zh-CN": "dotPosition"
          }
        },
        "name": "dotPosition",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "top",
                "value": "top"
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
                "label": "right",
                "value": "right"
              }
            ],
            "options": [
              {
                "label": "top",
                "value": "top"
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
                "label": "right",
                "value": "right"
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
            "en-US": "dots",
            "zh-CN": "dots"
          }
        },
        "name": "dots",
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
            "en-US": "waitForAnimate",
            "zh-CN": "waitForAnimate"
          }
        },
        "name": "waitForAnimate",
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
            "en-US": "responsive",
            "zh-CN": "responsive"
          }
        },
        "name": "responsive",
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
                          "en-US": "breakpoint",
                          "zh-CN": "breakpoint"
                        }
                      },
                      "name": "breakpoint",
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
                          "en-US": "settings",
                          "zh-CN": "settings"
                        }
                      },
                      "name": "settings",
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
                                          "en-US": "accessibility",
                                          "zh-CN": "accessibility"
                                        }
                                      },
                                      "name": "accessibility",
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
                                          "en-US": "adaptiveHeight",
                                          "zh-CN": "adaptiveHeight"
                                        }
                                      },
                                      "name": "adaptiveHeight",
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
                                          "en-US": "afterChange",
                                          "zh-CN": "afterChange"
                                        }
                                      },
                                      "name": "afterChange",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "appendDots",
                                          "zh-CN": "appendDots"
                                        }
                                      },
                                      "name": "appendDots",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "arrows",
                                          "zh-CN": "arrows"
                                        }
                                      },
                                      "name": "arrows",
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
                                          "en-US": "asNavFor",
                                          "zh-CN": "asNavFor"
                                        }
                                      },
                                      "name": "asNavFor",
                                      "setter": {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "items": [
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "slickNext",
                                                    "zh-CN": "slickNext"
                                                  }
                                                },
                                                "name": "slickNext",
                                                "setter": {
                                                  "componentName": "FunctionSetter",
                                                  "isRequired": true
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "slickPause",
                                                    "zh-CN": "slickPause"
                                                  }
                                                },
                                                "name": "slickPause",
                                                "setter": {
                                                  "componentName": "FunctionSetter",
                                                  "isRequired": true
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "slickPlay",
                                                    "zh-CN": "slickPlay"
                                                  }
                                                },
                                                "name": "slickPlay",
                                                "setter": {
                                                  "componentName": "FunctionSetter",
                                                  "isRequired": true
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "slickPrev",
                                                    "zh-CN": "slickPrev"
                                                  }
                                                },
                                                "name": "slickPrev",
                                                "setter": {
                                                  "componentName": "FunctionSetter",
                                                  "isRequired": true
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "slickGoTo",
                                                    "zh-CN": "slickGoTo"
                                                  }
                                                },
                                                "name": "slickGoTo",
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
                                          "en-US": "autoplaySpeed",
                                          "zh-CN": "autoplaySpeed"
                                        }
                                      },
                                      "name": "autoplaySpeed",
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
                                          "en-US": "autoplay",
                                          "zh-CN": "autoplay"
                                        }
                                      },
                                      "name": "autoplay",
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
                                          "en-US": "beforeChange",
                                          "zh-CN": "beforeChange"
                                        }
                                      },
                                      "name": "beforeChange",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "centerMode",
                                          "zh-CN": "centerMode"
                                        }
                                      },
                                      "name": "centerMode",
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
                                          "en-US": "centerPadding",
                                          "zh-CN": "centerPadding"
                                        }
                                      },
                                      "name": "centerPadding",
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
                                          "en-US": "cssEase",
                                          "zh-CN": "cssEase"
                                        }
                                      },
                                      "name": "cssEase",
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
                                          "en-US": "customPaging",
                                          "zh-CN": "customPaging"
                                        }
                                      },
                                      "name": "customPaging",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "dotsClass",
                                          "zh-CN": "dotsClass"
                                        }
                                      },
                                      "name": "dotsClass",
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
                                          "en-US": "draggable",
                                          "zh-CN": "draggable"
                                        }
                                      },
                                      "name": "draggable",
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
                                          "en-US": "easing",
                                          "zh-CN": "easing"
                                        }
                                      },
                                      "name": "easing",
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
                                          "en-US": "edgeFriction",
                                          "zh-CN": "edgeFriction"
                                        }
                                      },
                                      "name": "edgeFriction",
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
                                          "en-US": "fade",
                                          "zh-CN": "fade"
                                        }
                                      },
                                      "name": "fade",
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
                                          "en-US": "focusOnSelect",
                                          "zh-CN": "focusOnSelect"
                                        }
                                      },
                                      "name": "focusOnSelect",
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
                                          "en-US": "infinite",
                                          "zh-CN": "infinite"
                                        }
                                      },
                                      "name": "infinite",
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
                                          "en-US": "initialSlide",
                                          "zh-CN": "initialSlide"
                                        }
                                      },
                                      "name": "initialSlide",
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
                                          "en-US": "lazyLoad",
                                          "zh-CN": "lazyLoad"
                                        }
                                      },
                                      "name": "lazyLoad",
                                      "setter": {
                                        "componentName": "RadioGroupSetter",
                                        "props": {
                                          "dataSource": [
                                            {
                                              "label": "ondemand",
                                              "value": "ondemand"
                                            },
                                            {
                                              "label": "progressive",
                                              "value": "progressive"
                                            }
                                          ],
                                          "options": [
                                            {
                                              "label": "ondemand",
                                              "value": "ondemand"
                                            },
                                            {
                                              "label": "progressive",
                                              "value": "progressive"
                                            }
                                          ]
                                        },
                                        "initialValue": "ondemand"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "nextArrow",
                                          "zh-CN": "nextArrow"
                                        }
                                      },
                                      "name": "nextArrow",
                                      "setter": {
                                        "componentName": "SlotSetter",
                                        "props": {
                                          "mode": "element"
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
                                          "en-US": "onEdge",
                                          "zh-CN": "onEdge"
                                        }
                                      },
                                      "name": "onEdge",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "onInit",
                                          "zh-CN": "onInit"
                                        }
                                      },
                                      "name": "onInit",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "onLazyLoad",
                                          "zh-CN": "onLazyLoad"
                                        }
                                      },
                                      "name": "onLazyLoad",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "onReInit",
                                          "zh-CN": "onReInit"
                                        }
                                      },
                                      "name": "onReInit",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "onSwipe",
                                          "zh-CN": "onSwipe"
                                        }
                                      },
                                      "name": "onSwipe",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "pauseOnDotsHover",
                                          "zh-CN": "pauseOnDotsHover"
                                        }
                                      },
                                      "name": "pauseOnDotsHover",
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
                                          "en-US": "pauseOnFocus",
                                          "zh-CN": "pauseOnFocus"
                                        }
                                      },
                                      "name": "pauseOnFocus",
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
                                          "en-US": "pauseOnHover",
                                          "zh-CN": "pauseOnHover"
                                        }
                                      },
                                      "name": "pauseOnHover",
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
                                          "en-US": "prevArrow",
                                          "zh-CN": "prevArrow"
                                        }
                                      },
                                      "name": "prevArrow",
                                      "setter": {
                                        "componentName": "SlotSetter",
                                        "props": {
                                          "mode": "element"
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
                                          "en-US": "responsive",
                                          "zh-CN": "responsive"
                                        }
                                      },
                                      "name": "responsive",
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
                                    },
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
                                          "en-US": "slide",
                                          "zh-CN": "slide"
                                        }
                                      },
                                      "name": "slide",
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
                                          "en-US": "slidesPerRow",
                                          "zh-CN": "slidesPerRow"
                                        }
                                      },
                                      "name": "slidesPerRow",
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
                                          "en-US": "slidesToScroll",
                                          "zh-CN": "slidesToScroll"
                                        }
                                      },
                                      "name": "slidesToScroll",
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
                                          "en-US": "slidesToShow",
                                          "zh-CN": "slidesToShow"
                                        }
                                      },
                                      "name": "slidesToShow",
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
                                          "en-US": "speed",
                                          "zh-CN": "speed"
                                        }
                                      },
                                      "name": "speed",
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
                                          "en-US": "swipeToSlide",
                                          "zh-CN": "swipeToSlide"
                                        }
                                      },
                                      "name": "swipeToSlide",
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
                                          "en-US": "swipe",
                                          "zh-CN": "swipe"
                                        }
                                      },
                                      "name": "swipe",
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
                                          "en-US": "swipeEvent",
                                          "zh-CN": "swipeEvent"
                                        }
                                      },
                                      "name": "swipeEvent",
                                      "setter": {
                                        "componentName": "FunctionSetter"
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "touchMove",
                                          "zh-CN": "touchMove"
                                        }
                                      },
                                      "name": "touchMove",
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
                                          "en-US": "touchThreshold",
                                          "zh-CN": "touchThreshold"
                                        }
                                      },
                                      "name": "touchThreshold",
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
                                          "en-US": "useCSS",
                                          "zh-CN": "useCSS"
                                        }
                                      },
                                      "name": "useCSS",
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
                                          "en-US": "useTransform",
                                          "zh-CN": "useTransform"
                                        }
                                      },
                                      "name": "useTransform",
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
                                          "en-US": "variableWidth",
                                          "zh-CN": "variableWidth"
                                        }
                                      },
                                      "name": "variableWidth",
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
                                          "en-US": "verticalSwiping",
                                          "zh-CN": "verticalSwiping"
                                        }
                                      },
                                      "name": "verticalSwiping",
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
                                          "en-US": "waitForAnimate",
                                          "zh-CN": "waitForAnimate"
                                        }
                                      },
                                      "name": "waitForAnimate",
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
                            },
                            {
                              "componentName": "RadioGroupSetter",
                              "props": {
                                "dataSource": [
                                  {
                                    "label": "unslick",
                                    "value": "unslick"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "unslick",
                                    "value": "unslick"
                                  }
                                ]
                              },
                              "initialValue": "unslick"
                            }
                          ]
                        },
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
          "initialValue": []
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
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "accessibility",
            "zh-CN": "accessibility"
          }
        },
        "name": "accessibility",
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
            "en-US": "adaptiveHeight",
            "zh-CN": "adaptiveHeight"
          }
        },
        "name": "adaptiveHeight",
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
            "en-US": "afterChange",
            "zh-CN": "afterChange"
          }
        },
        "name": "afterChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "appendDots",
            "zh-CN": "appendDots"
          }
        },
        "name": "appendDots",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "arrows",
            "zh-CN": "arrows"
          }
        },
        "name": "arrows",
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
            "en-US": "asNavFor",
            "zh-CN": "asNavFor"
          }
        },
        "name": "asNavFor",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "slickNext",
                      "zh-CN": "slickNext"
                    }
                  },
                  "name": "slickNext",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "slickPause",
                      "zh-CN": "slickPause"
                    }
                  },
                  "name": "slickPause",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "slickPlay",
                      "zh-CN": "slickPlay"
                    }
                  },
                  "name": "slickPlay",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "slickPrev",
                      "zh-CN": "slickPrev"
                    }
                  },
                  "name": "slickPrev",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "slickGoTo",
                      "zh-CN": "slickGoTo"
                    }
                  },
                  "name": "slickGoTo",
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
            "en-US": "autoplaySpeed",
            "zh-CN": "autoplaySpeed"
          }
        },
        "name": "autoplaySpeed",
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
            "en-US": "autoplay",
            "zh-CN": "autoplay"
          }
        },
        "name": "autoplay",
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
            "en-US": "beforeChange",
            "zh-CN": "beforeChange"
          }
        },
        "name": "beforeChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "centerMode",
            "zh-CN": "centerMode"
          }
        },
        "name": "centerMode",
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
            "en-US": "centerPadding",
            "zh-CN": "centerPadding"
          }
        },
        "name": "centerPadding",
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
            "en-US": "cssEase",
            "zh-CN": "cssEase"
          }
        },
        "name": "cssEase",
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
            "en-US": "customPaging",
            "zh-CN": "customPaging"
          }
        },
        "name": "customPaging",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "easing",
            "zh-CN": "easing"
          }
        },
        "name": "easing",
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
            "en-US": "edgeFriction",
            "zh-CN": "edgeFriction"
          }
        },
        "name": "edgeFriction",
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
            "en-US": "fade",
            "zh-CN": "fade"
          }
        },
        "name": "fade",
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
            "en-US": "focusOnSelect",
            "zh-CN": "focusOnSelect"
          }
        },
        "name": "focusOnSelect",
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
            "en-US": "infinite",
            "zh-CN": "infinite"
          }
        },
        "name": "infinite",
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
            "en-US": "initialSlide",
            "zh-CN": "initialSlide"
          }
        },
        "name": "initialSlide",
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
            "en-US": "lazyLoad",
            "zh-CN": "lazyLoad"
          }
        },
        "name": "lazyLoad",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "ondemand",
                "value": "ondemand"
              },
              {
                "label": "progressive",
                "value": "progressive"
              }
            ],
            "options": [
              {
                "label": "ondemand",
                "value": "ondemand"
              },
              {
                "label": "progressive",
                "value": "progressive"
              }
            ]
          },
          "initialValue": "ondemand"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "nextArrow",
            "zh-CN": "nextArrow"
          }
        },
        "name": "nextArrow",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "element"
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
            "en-US": "onEdge",
            "zh-CN": "onEdge"
          }
        },
        "name": "onEdge",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onInit",
            "zh-CN": "onInit"
          }
        },
        "name": "onInit",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onLazyLoad",
            "zh-CN": "onLazyLoad"
          }
        },
        "name": "onLazyLoad",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onReInit",
            "zh-CN": "onReInit"
          }
        },
        "name": "onReInit",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onSwipe",
            "zh-CN": "onSwipe"
          }
        },
        "name": "onSwipe",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "pauseOnDotsHover",
            "zh-CN": "pauseOnDotsHover"
          }
        },
        "name": "pauseOnDotsHover",
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
            "en-US": "pauseOnFocus",
            "zh-CN": "pauseOnFocus"
          }
        },
        "name": "pauseOnFocus",
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
            "en-US": "pauseOnHover",
            "zh-CN": "pauseOnHover"
          }
        },
        "name": "pauseOnHover",
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
            "en-US": "prevArrow",
            "zh-CN": "prevArrow"
          }
        },
        "name": "prevArrow",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "element"
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
            "en-US": "slide",
            "zh-CN": "slide"
          }
        },
        "name": "slide",
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
            "en-US": "slidesPerRow",
            "zh-CN": "slidesPerRow"
          }
        },
        "name": "slidesPerRow",
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
            "en-US": "slidesToScroll",
            "zh-CN": "slidesToScroll"
          }
        },
        "name": "slidesToScroll",
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
            "en-US": "slidesToShow",
            "zh-CN": "slidesToShow"
          }
        },
        "name": "slidesToShow",
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
            "en-US": "speed",
            "zh-CN": "speed"
          }
        },
        "name": "speed",
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
            "en-US": "swipeToSlide",
            "zh-CN": "swipeToSlide"
          }
        },
        "name": "swipeToSlide",
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
            "en-US": "swipe",
            "zh-CN": "swipe"
          }
        },
        "name": "swipe",
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
            "en-US": "swipeEvent",
            "zh-CN": "swipeEvent"
          }
        },
        "name": "swipeEvent",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "touchMove",
            "zh-CN": "touchMove"
          }
        },
        "name": "touchMove",
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
            "en-US": "touchThreshold",
            "zh-CN": "touchThreshold"
          }
        },
        "name": "touchThreshold",
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
            "en-US": "useCSS",
            "zh-CN": "useCSS"
          }
        },
        "name": "useCSS",
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
            "en-US": "useTransform",
            "zh-CN": "useTransform"
          }
        },
        "name": "useTransform",
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
            "en-US": "variableWidth",
            "zh-CN": "variableWidth"
          }
        },
        "name": "variableWidth",
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
            "en-US": "verticalSwiping",
            "zh-CN": "verticalSwiping"
          }
        },
        "name": "verticalSwiping",
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
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Carousel",
    "screenshot": "",
    "schema": {
      "componentName": "Carousel",
      "props": {}
    }
  }
];

export default {
  ...CarouselMeta,
  snippets
};
