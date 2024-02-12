
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SearchMeta: IPublicTypeComponentMetadata = {
  "componentName": "Search",
  "title": "Search",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Search",
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
            "en-US": "pagination",
            "zh-CN": "pagination"
          }
        },
        "name": "pagination",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "items": [
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "position",
                            "zh-CN": "position"
                          }
                        },
                        "name": "position",
                        "setter": {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "SelectSetter",
                              "props": {
                                "dataSource": [
                                  {
                                    "label": "topLeft",
                                    "value": "topLeft"
                                  },
                                  {
                                    "label": "topRight",
                                    "value": "topRight"
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
                                    "label": "none",
                                    "value": "none"
                                  },
                                  {
                                    "label": "topCenter",
                                    "value": "topCenter"
                                  },
                                  {
                                    "label": "bottomCenter",
                                    "value": "bottomCenter"
                                  }
                                ],
                                "options": [
                                  {
                                    "label": "topLeft",
                                    "value": "topLeft"
                                  },
                                  {
                                    "label": "topRight",
                                    "value": "topRight"
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
                                    "label": "none",
                                    "value": "none"
                                  },
                                  {
                                    "label": "topCenter",
                                    "value": "topCenter"
                                  },
                                  {
                                    "label": "bottomCenter",
                                    "value": "bottomCenter"
                                  }
                                ]
                              },
                              "initialValue": "topLeft"
                            }
                          },
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
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ]
                },
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
            "en-US": "action",
            "zh-CN": "action"
          }
        },
        "name": "action",
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
          "isRequired": true,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "loading",
            "zh-CN": "loading"
          }
        },
        "name": "loading",
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
            "en-US": "onFormSearchSubmit",
            "zh-CN": "onFormSearchSubmit"
          }
        },
        "name": "onFormSearchSubmit",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columns",
            "zh-CN": "columns"
          }
        },
        "name": "columns",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
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
          "isRequired": true,
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dateFormatter",
            "zh-CN": "dateFormatter"
          }
        },
        "name": "dateFormatter",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    },
                    {
                      "label": "string",
                      "value": "string"
                    },
                    {
                      "label": "number",
                      "value": "number"
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    },
                    {
                      "label": "string",
                      "value": "string"
                    },
                    {
                      "label": "number",
                      "value": "number"
                    }
                  ]
                },
                "initialValue": false
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
            "en-US": "formRef",
            "zh-CN": "formRef"
          }
        },
        "name": "formRef",
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
          "isRequired": true,
          "initialValue": {}
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
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "form",
                "value": "form"
              },
              {
                "label": "list",
                "value": "list"
              },
              {
                "label": "descriptions",
                "value": "descriptions"
              },
              {
                "label": "table",
                "value": "table"
              },
              {
                "label": "cardList",
                "value": "cardList"
              }
            ],
            "options": [
              {
                "label": "form",
                "value": "form"
              },
              {
                "label": "list",
                "value": "list"
              },
              {
                "label": "descriptions",
                "value": "descriptions"
              },
              {
                "label": "table",
                "value": "table"
              },
              {
                "label": "cardList",
                "value": "cardList"
              }
            ]
          },
          "isRequired": true,
          "initialValue": "form"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cardBordered",
            "zh-CN": "cardBordered"
          }
        },
        "name": "cardBordered",
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
                            "en-US": "search",
                            "zh-CN": "search"
                          }
                        },
                        "name": "search",
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
                            "en-US": "table",
                            "zh-CN": "table"
                          }
                        },
                        "name": "table",
                        "setter": {
                          "componentName": "BoolSetter",
                          "isRequired": false,
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
          },
          "isRequired": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "form",
            "zh-CN": "form"
          }
        },
        "name": "form",
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
          "isRequired": true,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "search",
            "zh-CN": "search"
          }
        },
        "name": "search",
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
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ]
                },
                "initialValue": false
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
            "en-US": "manualRequest",
            "zh-CN": "manualRequest"
          }
        },
        "name": "manualRequest",
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
            "en-US": "ghost",
            "zh-CN": "ghost"
          }
        },
        "name": "ghost",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "events": [
        {
          "name": "beforeSearchSubmit"
        },
        {
          "name": "onSubmit"
        },
        {
          "name": "onReset"
        }
      ],
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Search",
    "screenshot": "",
    "schema": {
      "componentName": "Search",
      "props": {}
    }
  }
];

export default {
  ...SearchMeta,
  snippets
};
