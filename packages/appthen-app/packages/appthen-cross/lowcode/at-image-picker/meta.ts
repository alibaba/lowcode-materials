
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtImagePickerMeta: IPublicTypeComponentMetadata = {
  "componentName": "AtImagePicker",
  "title": "AtImagePicker",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "0.0.4",
    "exportName": "AtImagePicker",
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
            "en-US": "files",
            "zh-CN": "图片文件数组, 元素"
          },
          "tip": "files | 图片文件数组, 元素为对象, 包含属性 url（必选)"
        },
        "name": "files",
        "description": "图片文件数组, 元素为对象, 包含属性 url（必选)",
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
                          "en-US": "url",
                          "zh-CN": "url"
                        }
                      },
                      "name": "url",
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
                          "en-US": "file",
                          "zh-CN": "file"
                        }
                      },
                      "name": "file",
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
                                          "en-US": "path",
                                          "zh-CN": "path"
                                        }
                                      },
                                      "name": "path",
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
                                          "en-US": "size",
                                          "zh-CN": "size"
                                        }
                                      },
                                      "name": "size",
                                      "setter": {
                                        "componentName": "NumberSetter",
                                        "isRequired": true,
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
            "en-US": "mode",
            "zh-CN": "图片预览模式，详见["
          },
          "tip": "mode | 图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)"
        },
        "name": "mode",
        "description": "图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)",
        "defaultValue": "'aspectFill'",
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
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "center",
                      "value": "center"
                    },
                    {
                      "label": "right",
                      "value": "right"
                    },
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    },
                    {
                      "label": "scaleToFill",
                      "value": "scaleToFill"
                    },
                    {
                      "label": "aspectFit",
                      "value": "aspectFit"
                    },
                    {
                      "label": "aspectFill",
                      "value": "aspectFill"
                    },
                    {
                      "label": "widthFix",
                      "value": "widthFix"
                    },
                    {
                      "label": "left",
                      "value": "left"
                    },
                    {
                      "label": "top left",
                      "value": "top left"
                    },
                    {
                      "label": "top right",
                      "value": "top right"
                    },
                    {
                      "label": "bottom left",
                      "value": "bottom left"
                    },
                    {
                      "label": "bottom right",
                      "value": "bottom right"
                    }
                  ],
                  "options": [
                    {
                      "label": "center",
                      "value": "center"
                    },
                    {
                      "label": "right",
                      "value": "right"
                    },
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    },
                    {
                      "label": "scaleToFill",
                      "value": "scaleToFill"
                    },
                    {
                      "label": "aspectFit",
                      "value": "aspectFit"
                    },
                    {
                      "label": "aspectFill",
                      "value": "aspectFill"
                    },
                    {
                      "label": "widthFix",
                      "value": "widthFix"
                    },
                    {
                      "label": "left",
                      "value": "left"
                    },
                    {
                      "label": "top left",
                      "value": "top left"
                    },
                    {
                      "label": "top right",
                      "value": "top right"
                    },
                    {
                      "label": "bottom left",
                      "value": "bottom left"
                    },
                    {
                      "label": "bottom right",
                      "value": "bottom right"
                    }
                  ]
                },
                "initialValue": "center"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showAddBtn",
            "zh-CN": "是否显示添加图片按钮"
          },
          "tip": "showAddBtn | 是否显示添加图片按钮"
        },
        "name": "showAddBtn",
        "description": "是否显示添加图片按钮",
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
            "en-US": "multiple",
            "zh-CN": "是否支持多选"
          },
          "tip": "multiple | 是否支持多选"
        },
        "name": "multiple",
        "description": "是否支持多选",
        "defaultValue": "false",
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
            "en-US": "length",
            "zh-CN": "单行的图片数量，不能"
          },
          "tip": "length | 单行的图片数量，不能为 0 或负数"
        },
        "name": "length",
        "description": "单行的图片数量，不能为 0 或负数",
        "defaultValue": "4",
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
            "en-US": "count",
            "zh-CN": "最多可以选择的图片张"
          },
          "tip": "count | 最多可以选择的图片张数"
        },
        "name": "count",
        "description": "最多可以选择的图片张数",
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
            "en-US": "sizeType",
            "zh-CN": "所选的图片的尺寸"
          },
          "tip": "sizeType | 所选的图片的尺寸"
        },
        "name": "sizeType",
        "description": "所选的图片的尺寸",
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
            "en-US": "sourceType",
            "zh-CN": "选择图片的来源"
          },
          "tip": "sourceType | 选择图片的来源"
        },
        "name": "sourceType",
        "description": "选择图片的来源",
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
            "en-US": "onChange",
            "zh-CN": "files 值发生变"
          },
          "tip": "onChange | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引"
        },
        "name": "onChange",
        "description": "files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onImageClick",
            "zh-CN": "点击图片触发的回调"
          },
          "tip": "onImageClick | 点击图片触发的回调"
        },
        "name": "onImageClick",
        "description": "点击图片触发的回调",
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
            "en-US": "onFail",
            "zh-CN": "选择失败触发的回调"
          },
          "tip": "onFail | 选择失败触发的回调"
        },
        "name": "onFail",
        "description": "选择失败触发的回调",
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
    "title": "AtImagePicker",
    "screenshot": "",
    "schema": {
      "componentName": "AtImagePicker",
      "props": {
        "mode": "'aspectFill'",
        "showAddBtn": "true",
        "multiple": "false",
        "length": "4"
      }
    }
  }
];

export default {
  ...AtImagePickerMeta,
  snippets
};
