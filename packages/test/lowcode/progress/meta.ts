
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProgressMeta: IPublicTypeComponentMetadata = {
  "componentName": "Progress",
  "title": "Progress",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Progress",
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
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "line",
                "value": "line"
              },
              {
                "label": "dashboard",
                "value": "dashboard"
              }
            ],
            "options": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "line",
                "value": "line"
              },
              {
                "label": "dashboard",
                "value": "dashboard"
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
            "en-US": "percent",
            "zh-CN": "percent"
          }
        },
        "name": "percent",
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
            "en-US": "format",
            "zh-CN": "format"
          }
        },
        "name": "format",
        "setter": {
          "componentName": "FunctionSetter"
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
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "active",
                "value": "active"
              },
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "exception",
                "value": "exception"
              }
            ],
            "options": [
              {
                "label": "active",
                "value": "active"
              },
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "exception",
                "value": "exception"
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
            "en-US": "showInfo",
            "zh-CN": "showInfo"
          }
        },
        "name": "showInfo",
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
            "en-US": "strokeWidth",
            "zh-CN": "strokeWidth"
          }
        },
        "name": "strokeWidth",
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
            "en-US": "strokeLinecap",
            "zh-CN": "strokeLinecap"
          }
        },
        "name": "strokeLinecap",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "square",
                "value": "square"
              },
              {
                "label": "round",
                "value": "round"
              },
              {
                "label": "butt",
                "value": "butt"
              }
            ],
            "options": [
              {
                "label": "square",
                "value": "square"
              },
              {
                "label": "round",
                "value": "round"
              },
              {
                "label": "butt",
                "value": "butt"
              }
            ]
          },
          "initialValue": "square"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "strokeColor",
            "zh-CN": "strokeColor"
          }
        },
        "name": "strokeColor",
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
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "StringSetter",
                      "isRequired": false,
                      "initialValue": ""
                    }
                  }
                },
                "initialValue": {}
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
            "en-US": "trailColor",
            "zh-CN": "trailColor"
          }
        },
        "name": "trailColor",
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
            "en-US": "width",
            "zh-CN": "@deprecate"
          },
          "tip": "width | @deprecated Use `size` instead"
        },
        "name": "width",
        "description": "@deprecated Use `size` instead",
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
            "en-US": "success",
            "zh-CN": "success"
          }
        },
        "name": "success",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "percent",
                      "zh-CN": "percent"
                    }
                  },
                  "name": "percent",
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
                      "en-US": "progress",
                      "zh-CN": "progress"
                    }
                  },
                  "name": "progress",
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
                      "en-US": "strokeColor",
                      "zh-CN": "strokeColor"
                    }
                  },
                  "name": "strokeColor",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "gapDegree",
            "zh-CN": "gapDegree"
          }
        },
        "name": "gapDegree",
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
            "en-US": "gapPosition",
            "zh-CN": "gapPosition"
          }
        },
        "name": "gapPosition",
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
                "componentName": "MixedSetter",
                "props": {}
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "default",
                      "value": "default"
                    }
                  ],
                  "options": [
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "default",
                      "value": "default"
                    }
                  ]
                },
                "initialValue": "small"
              }
            ]
          }
        }
      },
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
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "successPercent",
            "zh-CN": "@deprecate"
          },
          "tip": "successPercent | @deprecated Use `success` instead"
        },
        "name": "successPercent",
        "description": "@deprecated Use `success` instead",
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
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
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
    "title": "Progress",
    "screenshot": "",
    "schema": {
      "componentName": "Progress",
      "props": {}
    }
  }
];

export default {
  ...ProgressMeta,
  snippets
};
