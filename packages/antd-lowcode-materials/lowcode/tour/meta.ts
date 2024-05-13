
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TourMeta: IPublicTypeComponentMetadata = {
  "componentName": "Tour",
  "title": "漫游引导",
  "docUrl": "",
  category: '通用',
  "screenshot": "",
  "devMode": "proCode",

  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "steps",
            "zh-CN": "步骤"
          }
        },
        "name": "steps",
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
                          "en-US": "arrow",
                          "zh-CN": "箭头显示"
                        }
                      },
                      "name": "arrow",
                      "setter": {
                        "componentName": "BoolSetter",

                      }
                    },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "cover",
                          "zh-CN": "cover"
                        }
                      },
                      "name": "cover",
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
                    // {
                    //   "title": {
                    //     "label": {
                    //       "type": "i18n",
                    //       "en-US": "type",
                    //       "zh-CN": "类型"
                    //     }
                    //   },
                    //   "name": "type",
                    //   "setter": {
                    //     "componentName": "RadioGroupSetter",
                    //     "props": {
                    //       "dataSource": [
                    //         {
                    //           "label": "primary",
                    //           "value": "primary"
                    //         },
                    //         {
                    //           "label": "default",
                    //           "value": "default"
                    //         }
                    //       ],
                    //       "options": [
                    //         {
                    //           "label": "primary",
                    //           "value": "primary"
                    //         },
                    //         {
                    //           "label": "default",
                    //           "value": "default"
                    //         }
                    //       ]
                    //     },
                    //     "initialValue": "primary"
                    //   }

                    // },
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "title",
                          "zh-CN": "标题"
                        }
                      },
                      "name": "title",
                      "setter": {
                        "componentName": "MixedSetter",
                        "props": {
                          "setters": [
                            {
                              "componentName": "StringSetter",
                            },
                            {
                              "componentName": "SlotSetter",
                              "initialValue": {
                                "type": "JSSlot",
                                "value": []
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
                          "en-US": "description",
                          "zh-CN": "描述"
                        }
                      },
                      "name": "description",

                      "setter": {
                        "componentName": "MixedSetter",
                        "props": {
                          "setters": [
                            {
                              "componentName": "StringSetter",
                            },
                            {
                              "componentName": "SlotSetter",
                              "initialValue": {
                                "type": "JSSlot",
                                "value": []
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
                          "en-US": "placement",
                          "zh-CN": "目标位置"
                        }
                      },
                      "name": "placement",
                      "setter": {
                        "componentName": "SelectSetter",
                        "props": {
              
                          "options": [
                            {
                              "label": "上",
                              "value": "top"
                            },
                            {
                              "label": "上左",
                              "value": "topLeft"
                            },
                            {
                              "label": "上右",
                              "value": "topRight"
                            },
                            {
                              "label": "下",
                              "value": "bottom"
                            },
                            {
                              "label": "下左",
                              "value": "bottomLeft"
                            },
                            {
                              "label": "右下",
                              "value": "Rightbottom"
                            },
                            {
                              "label": "中间",
                              "value": "center"
                            },
                            {
                              "label": "做",
                              "value": "left"
                            },
                            {
                              "label": "右",
                              "value": "right"
                            },
                            {
                              "label": "左上",
                              "value": "leftTop"
                            },
                            {
                              "label": "左下",
                              "value": "leftBottom"
                            },
                            {
                              "label": "右上",
                              "value": "rightTop"
                            },
                            {
                              "label": "右下",
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
                          "en-US": "target",
                          "zh-CN": "目标"
                        }
                      },
                      "name": "target",
                      "setter": {
                        "componentName": "FunctionSetter",

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
            "en-US": "current",
            "zh-CN": "当前点"
          }
        },
        "name": "current",
        "setter": {
          "componentName": "NumberSetter",
        }
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "indicatorsRender",
      //       "zh-CN": "自定义指示器"
      //     }
      //   },
      //   "name": "indicatorsRender",
      //   "setter": {
      //     "componentName": "SlotSetter",
      //     "initialValue": {
      //       "type": "JSSlot",
      //       "value": []
      //     }
      //   }
      // },
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
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "default",
                "value": "default"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "default",
                "value": "default"
              }
            ]
          },
          "initialValue": "primary"
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
            "en-US": "open",
            "zh-CN": "打开"
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
            "en-US": "zIndex",
            "zh-CN": "浮层"
          }
        },
        "name": "zIndex",
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
            "en-US": "onClose",
            "zh-CN": "关闭"
          }
        },
        "name": "onClose",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },

      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "builtinPlacements",
            "zh-CN": "自定义关闭"
          }
        },
        "name": "builtinPlacements",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [],
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
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
            "en-US": "closeIcon",
            "zh-CN": "自定义关闭"
          }
        },
        "name": "closeIcon",
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
            "en-US": "mask",
            "zh-CN": "蒙层"
          }
        },
        "name": "mask",
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
                        name: 'style',
                        title: '样式',
                        type: 'group',
                        extraProps: {
                          display: 'entry',
                        },
                        items: [
                          {
                            name: 'style',
                            title: {
                              label: '样式设置',
                              tip: '自定义 icon样式',
                            },
                            setter: 'StyleSetter',
                            extraProps: {
                              display: 'block',
                            },
                          },
                        ],
                      },
                      // {
                      //   "title": {
                      //     "label": {
                      //       "type": "i18n",
                      //       "en-US": "color",
                      //       "zh-CN": "颜色"
                      //     }
                      //   },
                      //   "name": "color",
                      //   "setter": {
                      //     "componentName": 'ColorSetter',
                      //     "isRequired": false,
                      //     "initialValue": ""
                      //   }
                      // }
                    ],
                    // "extraSetter": {
                    //   "componentName": "MixedSetter",
                    //   "isRequired": false,
                    //   "props": {}
                    // }
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
            "en-US": "scrollIntoViewOptions",
            "zh-CN": "滚动到视窗"
          }
        },
        "name": "scrollIntoViewOptions",
        "setter": {
          "componentName": "BoolSetter",
        }
      }
    ],
    "supports": {
      "className": true,
      "events": [
        {
          "name": "onFinish"
        }
      ],
      "style": true
    },
    "component": {isContainer:true}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "漫游引导",
    "screenshot": "https://cdn.appthen.com/editor/antd/img/Tour.svg",
    "schema": {
      "componentName": "Tour",
      "props": {
        mask:true,
        open:true,
        steps:[
          {
            title: 'Appthen说明',
            description: 'Appthen说明',
          },
        ]
      }
    }
  }
];

export default {
  ...TourMeta,
  snippets
};
