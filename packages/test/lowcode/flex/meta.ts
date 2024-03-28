
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FlexMeta: IPublicTypeComponentMetadata = {
  "componentName": "Flex",
  "title": "Flex",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Flex",
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
            "en-US": "wrap",
            "zh-CN": "wrap"
          }
        },
        "name": "wrap",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "inherit",
                "value": "inherit"
              },
              {
                "label": "wrap",
                "value": "wrap"
              },
              {
                "label": "-moz-initial",
                "value": "-moz-initial"
              },
              {
                "label": "initial",
                "value": "initial"
              },
              {
                "label": "revert",
                "value": "revert"
              },
              {
                "label": "revert-layer",
                "value": "revert-layer"
              },
              {
                "label": "unset",
                "value": "unset"
              },
              {
                "label": "nowrap",
                "value": "nowrap"
              },
              {
                "label": "wrap-reverse",
                "value": "wrap-reverse"
              }
            ],
            "options": [
              {
                "label": "inherit",
                "value": "inherit"
              },
              {
                "label": "wrap",
                "value": "wrap"
              },
              {
                "label": "-moz-initial",
                "value": "-moz-initial"
              },
              {
                "label": "initial",
                "value": "initial"
              },
              {
                "label": "revert",
                "value": "revert"
              },
              {
                "label": "revert-layer",
                "value": "revert-layer"
              },
              {
                "label": "unset",
                "value": "unset"
              },
              {
                "label": "nowrap",
                "value": "nowrap"
              },
              {
                "label": "wrap-reverse",
                "value": "wrap-reverse"
              }
            ]
          },
          "initialValue": "inherit"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "justify",
            "zh-CN": "justify"
          }
        },
        "name": "justify",
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
                      "label": "inherit",
                      "value": "inherit"
                    },
                    {
                      "label": "normal",
                      "value": "normal"
                    },
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
                    },
                    {
                      "label": "-moz-initial",
                      "value": "-moz-initial"
                    },
                    {
                      "label": "initial",
                      "value": "initial"
                    },
                    {
                      "label": "revert",
                      "value": "revert"
                    },
                    {
                      "label": "revert-layer",
                      "value": "revert-layer"
                    },
                    {
                      "label": "unset",
                      "value": "unset"
                    },
                    {
                      "label": "space-around",
                      "value": "space-around"
                    },
                    {
                      "label": "space-between",
                      "value": "space-between"
                    },
                    {
                      "label": "space-evenly",
                      "value": "space-evenly"
                    },
                    {
                      "label": "stretch",
                      "value": "stretch"
                    },
                    {
                      "label": "flex-end",
                      "value": "flex-end"
                    },
                    {
                      "label": "flex-start",
                      "value": "flex-start"
                    }
                  ],
                  "options": [
                    {
                      "label": "inherit",
                      "value": "inherit"
                    },
                    {
                      "label": "normal",
                      "value": "normal"
                    },
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
                    },
                    {
                      "label": "-moz-initial",
                      "value": "-moz-initial"
                    },
                    {
                      "label": "initial",
                      "value": "initial"
                    },
                    {
                      "label": "revert",
                      "value": "revert"
                    },
                    {
                      "label": "revert-layer",
                      "value": "revert-layer"
                    },
                    {
                      "label": "unset",
                      "value": "unset"
                    },
                    {
                      "label": "space-around",
                      "value": "space-around"
                    },
                    {
                      "label": "space-between",
                      "value": "space-between"
                    },
                    {
                      "label": "space-evenly",
                      "value": "space-evenly"
                    },
                    {
                      "label": "stretch",
                      "value": "stretch"
                    },
                    {
                      "label": "flex-end",
                      "value": "flex-end"
                    },
                    {
                      "label": "flex-start",
                      "value": "flex-start"
                    }
                  ]
                },
                "initialValue": "inherit"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "align",
            "zh-CN": "align"
          }
        },
        "name": "align",
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
                      "label": "inherit",
                      "value": "inherit"
                    },
                    {
                      "label": "normal",
                      "value": "normal"
                    },
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
                      "label": "-moz-initial",
                      "value": "-moz-initial"
                    },
                    {
                      "label": "initial",
                      "value": "initial"
                    },
                    {
                      "label": "revert",
                      "value": "revert"
                    },
                    {
                      "label": "revert-layer",
                      "value": "revert-layer"
                    },
                    {
                      "label": "unset",
                      "value": "unset"
                    },
                    {
                      "label": "stretch",
                      "value": "stretch"
                    },
                    {
                      "label": "flex-end",
                      "value": "flex-end"
                    },
                    {
                      "label": "flex-start",
                      "value": "flex-start"
                    },
                    {
                      "label": "self-end",
                      "value": "self-end"
                    },
                    {
                      "label": "self-start",
                      "value": "self-start"
                    },
                    {
                      "label": "baseline",
                      "value": "baseline"
                    }
                  ],
                  "options": [
                    {
                      "label": "inherit",
                      "value": "inherit"
                    },
                    {
                      "label": "normal",
                      "value": "normal"
                    },
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
                      "label": "-moz-initial",
                      "value": "-moz-initial"
                    },
                    {
                      "label": "initial",
                      "value": "initial"
                    },
                    {
                      "label": "revert",
                      "value": "revert"
                    },
                    {
                      "label": "revert-layer",
                      "value": "revert-layer"
                    },
                    {
                      "label": "unset",
                      "value": "unset"
                    },
                    {
                      "label": "stretch",
                      "value": "stretch"
                    },
                    {
                      "label": "flex-end",
                      "value": "flex-end"
                    },
                    {
                      "label": "flex-start",
                      "value": "flex-start"
                    },
                    {
                      "label": "self-end",
                      "value": "self-end"
                    },
                    {
                      "label": "self-start",
                      "value": "self-start"
                    },
                    {
                      "label": "baseline",
                      "value": "baseline"
                    }
                  ]
                },
                "initialValue": "inherit"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "flex",
            "zh-CN": "flex"
          }
        },
        "name": "flex",
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
            "en-US": "gap",
            "zh-CN": "gap"
          }
        },
        "name": "gap",
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
            "en-US": "component",
            "zh-CN": "component"
          }
        },
        "name": "component",
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
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Flex",
    "screenshot": "",
    "schema": {
      "componentName": "Flex",
      "props": {}
    }
  }
];

export default {
  ...FlexMeta,
  snippets
};
