
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const BadgeMeta: IPublicTypeComponentMetadata = {
  "componentName": "Badge",
  "title": "Badge",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Badge",
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
            "en-US": "count",
            "zh-CN": "Number to "
          },
          "tip": "count | Number to show in badge"
        },
        "name": "count",
        "description": "Number to show in badge",
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
            "en-US": "showZero",
            "zh-CN": "showZero"
          }
        },
        "name": "showZero",
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
            "en-US": "overflowCount",
            "zh-CN": "Max count "
          },
          "tip": "overflowCount | Max count to show"
        },
        "name": "overflowCount",
        "description": "Max count to show",
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
            "en-US": "dot",
            "zh-CN": "Whether to"
          },
          "tip": "dot | Whether to show red dot without number"
        },
        "name": "dot",
        "description": "Whether to show red dot without number",
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
            "en-US": "scrollNumberPrefixCls",
            "zh-CN": "scrollNumberPrefixCls"
          }
        },
        "name": "scrollNumberPrefixCls",
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
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "processing",
                "value": "processing"
              }
            ],
            "options": [
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              },
              {
                "label": "error",
                "value": "error"
              },
              {
                "label": "default",
                "value": "default"
              },
              {
                "label": "processing",
                "value": "processing"
              }
            ]
          },
          "initialValue": "success"
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
                      "label": "blue",
                      "value": "blue"
                    },
                    {
                      "label": "purple",
                      "value": "purple"
                    },
                    {
                      "label": "cyan",
                      "value": "cyan"
                    },
                    {
                      "label": "green",
                      "value": "green"
                    },
                    {
                      "label": "magenta",
                      "value": "magenta"
                    },
                    {
                      "label": "pink",
                      "value": "pink"
                    },
                    {
                      "label": "red",
                      "value": "red"
                    },
                    {
                      "label": "orange",
                      "value": "orange"
                    },
                    {
                      "label": "yellow",
                      "value": "yellow"
                    },
                    {
                      "label": "volcano",
                      "value": "volcano"
                    },
                    {
                      "label": "geekblue",
                      "value": "geekblue"
                    },
                    {
                      "label": "lime",
                      "value": "lime"
                    },
                    {
                      "label": "gold",
                      "value": "gold"
                    }
                  ],
                  "options": [
                    {
                      "label": "blue",
                      "value": "blue"
                    },
                    {
                      "label": "purple",
                      "value": "purple"
                    },
                    {
                      "label": "cyan",
                      "value": "cyan"
                    },
                    {
                      "label": "green",
                      "value": "green"
                    },
                    {
                      "label": "magenta",
                      "value": "magenta"
                    },
                    {
                      "label": "pink",
                      "value": "pink"
                    },
                    {
                      "label": "red",
                      "value": "red"
                    },
                    {
                      "label": "orange",
                      "value": "orange"
                    },
                    {
                      "label": "yellow",
                      "value": "yellow"
                    },
                    {
                      "label": "volcano",
                      "value": "volcano"
                    },
                    {
                      "label": "geekblue",
                      "value": "geekblue"
                    },
                    {
                      "label": "lime",
                      "value": "lime"
                    },
                    {
                      "label": "gold",
                      "value": "gold"
                    }
                  ]
                },
                "initialValue": "blue"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "text",
            "zh-CN": "text"
          }
        },
        "name": "text",
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
            "en-US": "size",
            "zh-CN": "size"
          }
        },
        "name": "size",
        "setter": {
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
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
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
            "en-US": "classNames",
            "zh-CN": "classNames"
          }
        },
        "name": "classNames",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "root",
                      "zh-CN": "root"
                    }
                  },
                  "name": "root",
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
                      "en-US": "indicator",
                      "zh-CN": "indicator"
                    }
                  },
                  "name": "indicator",
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
            "en-US": "styles",
            "zh-CN": "styles"
          }
        },
        "name": "styles",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "root",
                      "zh-CN": "root"
                    }
                  },
                  "name": "root",
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
                      "en-US": "indicator",
                      "zh-CN": "indicator"
                    }
                  },
                  "name": "indicator",
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
    "title": "Badge",
    "screenshot": "",
    "schema": {
      "componentName": "Badge",
      "props": {}
    }
  }
];

export default {
  ...BadgeMeta,
  snippets
};
