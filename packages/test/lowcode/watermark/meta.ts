
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const WatermarkMeta: IPublicTypeComponentMetadata = {
  "componentName": "Watermark",
  "title": "Watermark",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Watermark",
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
            "en-US": "rotate",
            "zh-CN": "rotate"
          }
        },
        "name": "rotate",
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
            "en-US": "width",
            "zh-CN": "width"
          }
        },
        "name": "width",
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
            "en-US": "height",
            "zh-CN": "height"
          }
        },
        "name": "height",
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
            "en-US": "image",
            "zh-CN": "image"
          }
        },
        "name": "image",
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
            "en-US": "content",
            "zh-CN": "content"
          }
        },
        "name": "content",
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
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
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
            "en-US": "font",
            "zh-CN": "font"
          }
        },
        "name": "font",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                          "componentName": "StringSetter",
                          "isRequired": false,
                          "initialValue": ""
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
                                      "en-US": "addColorStop",
                                      "zh-CN": "addColorStop"
                                    }
                                  },
                                  "name": "addColorStop",
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
                                      "en-US": "setTransform",
                                      "zh-CN": "setTransform"
                                    }
                                  },
                                  "name": "setTransform",
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
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "fontSize",
                      "zh-CN": "fontSize"
                    }
                  },
                  "name": "fontSize",
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
                      "en-US": "fontWeight",
                      "zh-CN": "fontWeight"
                    }
                  },
                  "name": "fontWeight",
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
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "normal",
                                "value": "normal"
                              },
                              {
                                "label": "light",
                                "value": "light"
                              },
                              {
                                "label": "weight",
                                "value": "weight"
                              }
                            ],
                            "options": [
                              {
                                "label": "normal",
                                "value": "normal"
                              },
                              {
                                "label": "light",
                                "value": "light"
                              },
                              {
                                "label": "weight",
                                "value": "weight"
                              }
                            ]
                          },
                          "initialValue": "normal"
                        }
                      ]
                    }
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "fontStyle",
                      "zh-CN": "fontStyle"
                    }
                  },
                  "name": "fontStyle",
                  "setter": {
                    "componentName": "SelectSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "normal",
                          "value": "normal"
                        },
                        {
                          "label": "none",
                          "value": "none"
                        },
                        {
                          "label": "italic",
                          "value": "italic"
                        },
                        {
                          "label": "oblique",
                          "value": "oblique"
                        }
                      ],
                      "options": [
                        {
                          "label": "normal",
                          "value": "normal"
                        },
                        {
                          "label": "none",
                          "value": "none"
                        },
                        {
                          "label": "italic",
                          "value": "italic"
                        },
                        {
                          "label": "oblique",
                          "value": "oblique"
                        }
                      ]
                    },
                    "initialValue": "normal"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "fontFamily",
                      "zh-CN": "fontFamily"
                    }
                  },
                  "name": "fontFamily",
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
                      "en-US": "textAlign",
                      "zh-CN": "textAlign"
                    }
                  },
                  "name": "textAlign",
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
                          "label": "left",
                          "value": "left"
                        },
                        {
                          "label": "right",
                          "value": "right"
                        },
                        {
                          "label": "start",
                          "value": "start"
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
                          "label": "left",
                          "value": "left"
                        },
                        {
                          "label": "right",
                          "value": "right"
                        },
                        {
                          "label": "start",
                          "value": "start"
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
            "en-US": "gap",
            "zh-CN": "gap"
          }
        },
        "name": "gap",
        "setter": {
          "componentName": "MixedSetter",
          "props": {}
        }
      },
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
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inherit",
            "zh-CN": "inherit"
          }
        },
        "name": "inherit",
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
    "title": "Watermark",
    "screenshot": "",
    "schema": {
      "componentName": "Watermark",
      "props": {}
    }
  }
];

export default {
  ...WatermarkMeta,
  snippets
};
