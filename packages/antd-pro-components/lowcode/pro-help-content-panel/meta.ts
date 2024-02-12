
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProHelpContentPanelMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProHelpContentPanel",
  "title": "ProHelpContentPanel",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProHelpContentPanel",
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
            "en-US": "selectedKey",
            "zh-CN": "控制当前选中的帮助文"
          },
          "tip": "selectedKey | 控制当前选中的帮助文档"
        },
        "name": "selectedKey",
        "description": "控制当前选中的帮助文档",
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
          },
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "parentItem",
            "zh-CN": "parentItem"
          }
        },
        "name": "parentItem",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
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
                    "isRequired": true,
                    "initialValue": ""
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "infiniteScrollFull",
                      "zh-CN": "infiniteScrollFull"
                    }
                  },
                  "name": "infiniteScrollFull",
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
                      "en-US": "children",
                      "zh-CN": "children"
                    }
                  },
                  "name": "children",
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
                                    "en-US": "key",
                                    "zh-CN": "key"
                                  }
                                },
                                "name": "key",
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
                                    "en-US": "title",
                                    "zh-CN": "title"
                                  }
                                },
                                "name": "title",
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
                                    "en-US": "asyncLoad",
                                    "zh-CN": "asyncLoad"
                                  }
                                },
                                "name": "asyncLoad",
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
                                    "en-US": "children",
                                    "zh-CN": "children"
                                  }
                                },
                                "name": "children",
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
                    "isRequired": true,
                    "initialValue": []
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
            "en-US": "onScroll",
            "zh-CN": "onScroll"
          }
        },
        "name": "onScroll",
        "setter": {
          "componentName": "FunctionSetter"
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
    "title": "ProHelpContentPanel",
    "screenshot": "",
    "schema": {
      "componentName": "ProHelpContentPanel",
      "props": {}
    }
  }
];

export default {
  ...ProHelpContentPanelMeta,
  snippets
};
