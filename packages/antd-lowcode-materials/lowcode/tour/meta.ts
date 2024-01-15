
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TourMeta: IPublicTypeComponentMetadata = {
  "componentName": "Tour",
  "title": "漫游引导",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",

  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "steps",
            "zh-CN": "steps"
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
                    {
                      "title": {
                        "label": {
                          "type": "i18n",
                          "en-US": "nextButtonProps",
                          "zh-CN": "nextButtonProps"
                        }
                      },
                      "name": "nextButtonProps",
                      "setter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "items": [
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
                                    "en-US": "onClick",
                                    "zh-CN": "onClick"
                                  }
                                },
                                "name": "onClick",
                                "setter": {
                                  "componentName": "FunctionSetter",
                                  "isRequired": false
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
                          "en-US": "prevButtonProps",
                          "zh-CN": "prevButtonProps"
                        }
                      },
                      "name": "prevButtonProps",
                      "setter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "items": [
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
                                    "en-US": "onClick",
                                    "zh-CN": "onClick"
                                  }
                                },
                                "name": "onClick",
                                "setter": {
                                  "componentName": "FunctionSetter",
                                  "isRequired": false
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
                          "en-US": "indicatorsRender",
                          "zh-CN": "indicatorsRender"
                        }
                      },
                      "name": "indicatorsRender",
                      "setter": {
                        "componentName": "FunctionSetter"
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
            "en-US": "current",
            "zh-CN": "current"
          }
        },
        "name": "current",
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
            "en-US": "indicatorsRender",
            "zh-CN": "indicatorsRender"
          }
        },
        "name": "indicatorsRender",
        "setter": {
          "componentName": "FunctionSetter"
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
                "label": "center",
                "value": "center"
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
                "label": "center",
                "value": "center"
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
            "en-US": "zIndex",
            "zh-CN": "zIndex"
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
            "en-US": "gap",
            "zh-CN": "gap"
          }
        },
        "name": "gap",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                          "componentName": "NumberSetter",
                          "isRequired": false,
                          "initialValue": 0
                        },
                        {
                          "componentName": "MixedSetter",
                          "props": {}
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "radius",
                      "zh-CN": "radius"
                    }
                  },
                  "name": "radius",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onClose",
            "zh-CN": "onClose"
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
            "en-US": "onPopupAlign",
            "zh-CN": "onPopupAlign"
          }
        },
        "name": "onPopupAlign",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "builtinPlacements",
            "zh-CN": "builtinPlacements"
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
            "zh-CN": "closeIcon"
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
            "en-US": "animated",
            "zh-CN": "animated"
          }
        },
        "name": "animated",
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
                            "en-US": "placeholder",
                            "zh-CN": "placeholder"
                          }
                        },
                        "name": "placeholder",
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
            "en-US": "mask",
            "zh-CN": "mask"
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
                            "en-US": "color",
                            "zh-CN": "color"
                          }
                        },
                        "name": "color",
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
            "en-US": "defaultCurrent",
            "zh-CN": "defaultCurrent"
          }
        },
        "name": "defaultCurrent",
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
            "en-US": "scrollIntoViewOptions",
            "zh-CN": "scrollIntoViewOptions"
          }
        },
        "name": "scrollIntoViewOptions",
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
                            "en-US": "block",
                            "zh-CN": "block"
                          }
                        },
                        "name": "block",
                        "setter": {
                          "componentName": "SelectSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "nearest",
                                "value": "nearest"
                              }
                            ],
                            "options": [
                              {
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "nearest",
                                "value": "nearest"
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
                            "en-US": "inline",
                            "zh-CN": "inline"
                          }
                        },
                        "name": "inline",
                        "setter": {
                          "componentName": "SelectSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "nearest",
                                "value": "nearest"
                              }
                            ],
                            "options": [
                              {
                                "label": "center",
                                "value": "center"
                              },
                              {
                                "label": "end",
                                "value": "end"
                              },
                              {
                                "label": "start",
                                "value": "start"
                              },
                              {
                                "label": "nearest",
                                "value": "nearest"
                              }
                            ]
                          },
                          "initialValue": "center"
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
    "supports": {
      "className": true,
      "events": [
        {
          "name": "onFinish"
        }
      ],
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "漫游引导",
    "screenshot": "",
    "schema": {
      "componentName": "Tour",
      "props": {}
    }
  }
];

export default {
  ...TourMeta,
  snippets
};
