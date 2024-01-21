
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AvatarMeta: IPublicTypeComponentMetadata = {
  "componentName": "Avatar",
  "title": "Avatar",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Avatar",
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
            "en-US": "shape",
            "zh-CN": "Shape of a"
          },
          "tip": "shape | Shape of avatar, options: `circle`, `square`"
        },
        "name": "shape",
        "description": "Shape of avatar, options: `circle`, `square`",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "square",
                "value": "square"
              }
            ],
            "options": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "square",
                "value": "square"
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
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "large",
                      "value": "large"
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
                      "label": "large",
                      "value": "large"
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
            "en-US": "gap",
            "zh-CN": "gap"
          }
        },
        "name": "gap",
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
            "en-US": "src",
            "zh-CN": "Src of ima"
          },
          "tip": "src | Src of image avatar"
        },
        "name": "src",
        "description": "Src of image avatar",
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
            "en-US": "srcSet",
            "zh-CN": "Srcset of "
          },
          "tip": "srcSet | Srcset of image avatar"
        },
        "name": "srcSet",
        "description": "Srcset of image avatar",
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
            "en-US": "draggable",
            "zh-CN": "draggable"
          }
        },
        "name": "draggable",
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
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": "false"
                    },
                    {
                      "label": "true",
                      "value": "true"
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": "false"
                    },
                    {
                      "label": "true",
                      "value": "true"
                    }
                  ]
                },
                "initialValue": "false"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "icon",
            "zh-CN": "Icon to be"
          },
          "tip": "icon | Icon to be used in avatar"
        },
        "name": "icon",
        "description": "Icon to be used in avatar",
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
      "style": true,
      "className": true,
      "events": [
        {
          "name": "onError"
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Avatar",
    "screenshot": "",
    "schema": {
      "componentName": "Avatar",
      "props": {}
    }
  }
];

export default {
  ...AvatarMeta,
  snippets
};
