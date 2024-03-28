
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const QRCodeMeta: IPublicTypeComponentMetadata = {
  "componentName": "QRCode",
  "title": "QRCode",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "QRCode",
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
            "en-US": "icon",
            "zh-CN": "icon"
          }
        },
        "name": "icon",
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
            "en-US": "iconSize",
            "zh-CN": "iconSize"
          }
        },
        "name": "iconSize",
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
            "en-US": "bordered",
            "zh-CN": "bordered"
          }
        },
        "name": "bordered",
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
            "en-US": "errorLevel",
            "zh-CN": "errorLevel"
          }
        },
        "name": "errorLevel",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "L",
                "value": "L"
              },
              {
                "label": "M",
                "value": "M"
              },
              {
                "label": "Q",
                "value": "Q"
              },
              {
                "label": "H",
                "value": "H"
              }
            ],
            "options": [
              {
                "label": "L",
                "value": "L"
              },
              {
                "label": "M",
                "value": "M"
              },
              {
                "label": "Q",
                "value": "Q"
              },
              {
                "label": "H",
                "value": "H"
              }
            ]
          },
          "initialValue": "L"
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
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "active",
                "value": "active"
              },
              {
                "label": "expired",
                "value": "expired"
              },
              {
                "label": "loading",
                "value": "loading"
              }
            ],
            "options": [
              {
                "label": "active",
                "value": "active"
              },
              {
                "label": "expired",
                "value": "expired"
              },
              {
                "label": "loading",
                "value": "loading"
              }
            ]
          },
          "initialValue": "active"
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
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
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
                "label": "canvas",
                "value": "canvas"
              },
              {
                "label": "svg",
                "value": "svg"
              }
            ],
            "options": [
              {
                "label": "canvas",
                "value": "canvas"
              },
              {
                "label": "svg",
                "value": "svg"
              }
            ]
          },
          "initialValue": "canvas"
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
          "isRequired": false,
          "initialValue": 0
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "includeMargin",
            "zh-CN": "includeMargin"
          }
        },
        "name": "includeMargin",
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
            "en-US": "imageSettings",
            "zh-CN": "imageSettings"
          }
        },
        "name": "imageSettings",
        "setter": {
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
                    "isRequired": true,
                    "initialValue": ""
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
                    "isRequired": true,
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
                    "isRequired": true,
                    "initialValue": 0
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "excavate",
                      "zh-CN": "excavate"
                    }
                  },
                  "name": "excavate",
                  "setter": {
                    "componentName": "BoolSetter",
                    "isRequired": true,
                    "initialValue": false
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "x",
                      "zh-CN": "x"
                    }
                  },
                  "name": "x",
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
                      "en-US": "y",
                      "zh-CN": "y"
                    }
                  },
                  "name": "y",
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
            "en-US": "bgColor",
            "zh-CN": "bgColor"
          }
        },
        "name": "bgColor",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "className": true,
      "events": [
        {
          "name": "onRefresh"
        }
      ],
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "QRCode",
    "screenshot": "",
    "schema": {
      "componentName": "QRCode",
      "props": {}
    }
  }
];

export default {
  ...QRCodeMeta,
  snippets
};
