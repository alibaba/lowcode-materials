
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ConfigProviderMeta: IPublicTypeComponentMetadata = {
  "componentName": "ConfigProvider",
  "title": "ConfigProvider",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "ConfigProvider",
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
            "en-US": "getTargetContainer",
            "zh-CN": "getTargetContainer"
          }
        },
        "name": "getTargetContainer",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "getPopupContainer",
            "zh-CN": "getPopupContainer"
          }
        },
        "name": "getPopupContainer",
        "setter": {
          "componentName": "FunctionSetter"
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
            "en-US": "iconPrefixCls",
            "zh-CN": "iconPrefixCls"
          }
        },
        "name": "iconPrefixCls",
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
            "en-US": "renderEmpty",
            "zh-CN": "renderEmpty"
          }
        },
        "name": "renderEmpty",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "csp",
            "zh-CN": "csp"
          }
        },
        "name": "csp",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "nonce",
                      "zh-CN": "nonce"
                    }
                  },
                  "name": "nonce",
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
            "en-US": "autoInsertSpaceInButton",
            "zh-CN": "autoInsertSpaceInButton"
          }
        },
        "name": "autoInsertSpaceInButton",
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
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "input",
            "zh-CN": "input"
          }
        },
        "name": "input",
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
            "en-US": "select",
            "zh-CN": "select"
          }
        },
        "name": "select",
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
            "en-US": "pagination",
            "zh-CN": "pagination"
          }
        },
        "name": "pagination",
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
            "en-US": "locale",
            "zh-CN": "locale"
          }
        },
        "name": "locale",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "locale",
                      "zh-CN": "locale"
                    }
                  },
                  "name": "locale",
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
                      "en-US": "Pagination",
                      "zh-CN": "Pagination"
                    }
                  },
                  "name": "Pagination",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "items_per_page",
                                "zh-CN": "items_per_page"
                              }
                            },
                            "name": "items_per_page",
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
                                "en-US": "jump_to",
                                "zh-CN": "jump_to"
                              }
                            },
                            "name": "jump_to",
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
                                "en-US": "jump_to_confirm",
                                "zh-CN": "jump_to_confirm"
                              }
                            },
                            "name": "jump_to_confirm",
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
                                "en-US": "page",
                                "zh-CN": "page"
                              }
                            },
                            "name": "page",
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
                                "en-US": "prev_page",
                                "zh-CN": "prev_page"
                              }
                            },
                            "name": "prev_page",
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
                                "en-US": "next_page",
                                "zh-CN": "next_page"
                              }
                            },
                            "name": "next_page",
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
                                "en-US": "prev_5",
                                "zh-CN": "prev_5"
                              }
                            },
                            "name": "prev_5",
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
                                "en-US": "next_5",
                                "zh-CN": "next_5"
                              }
                            },
                            "name": "next_5",
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
                                "en-US": "prev_3",
                                "zh-CN": "prev_3"
                              }
                            },
                            "name": "prev_3",
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
                                "en-US": "next_3",
                                "zh-CN": "next_3"
                              }
                            },
                            "name": "next_3",
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
                      "en-US": "DatePicker",
                      "zh-CN": "DatePicker"
                    }
                  },
                  "name": "DatePicker",
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
                      "en-US": "TimePicker",
                      "zh-CN": "TimePicker"
                    }
                  },
                  "name": "TimePicker",
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
                      "en-US": "Calendar",
                      "zh-CN": "Calendar"
                    }
                  },
                  "name": "Calendar",
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
                      "en-US": "Table",
                      "zh-CN": "Table"
                    }
                  },
                  "name": "Table",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "filterTitle",
                                "zh-CN": "filterTitle"
                              }
                            },
                            "name": "filterTitle",
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
                                "en-US": "filterConfirm",
                                "zh-CN": "filterConfirm"
                              }
                            },
                            "name": "filterConfirm",
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
                                "en-US": "filterReset",
                                "zh-CN": "filterReset"
                              }
                            },
                            "name": "filterReset",
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
                                "en-US": "filterEmptyText",
                                "zh-CN": "filterEmptyText"
                              }
                            },
                            "name": "filterEmptyText",
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
                                "en-US": "filterCheckall",
                                "zh-CN": "filterCheckall"
                              }
                            },
                            "name": "filterCheckall",
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
                                "en-US": "filterSearchPlaceholder",
                                "zh-CN": "filterSearchPlaceholder"
                              }
                            },
                            "name": "filterSearchPlaceholder",
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
                                "en-US": "emptyText",
                                "zh-CN": "emptyText"
                              }
                            },
                            "name": "emptyText",
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
                                    "componentName": "BoolSetter",
                                    "isRequired": false,
                                    "initialValue": false
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
                                    "componentName": "FunctionSetter",
                                    "isRequired": false
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "selectAll",
                                "zh-CN": "selectAll"
                              }
                            },
                            "name": "selectAll",
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
                                "en-US": "selectNone",
                                "zh-CN": "selectNone"
                              }
                            },
                            "name": "selectNone",
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
                                "en-US": "selectInvert",
                                "zh-CN": "selectInvert"
                              }
                            },
                            "name": "selectInvert",
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
                                "en-US": "selectionAll",
                                "zh-CN": "selectionAll"
                              }
                            },
                            "name": "selectionAll",
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
                                "en-US": "sortTitle",
                                "zh-CN": "sortTitle"
                              }
                            },
                            "name": "sortTitle",
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
                                "en-US": "expand",
                                "zh-CN": "expand"
                              }
                            },
                            "name": "expand",
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
                                "en-US": "collapse",
                                "zh-CN": "collapse"
                              }
                            },
                            "name": "collapse",
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
                                "en-US": "triggerDesc",
                                "zh-CN": "triggerDesc"
                              }
                            },
                            "name": "triggerDesc",
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
                                "en-US": "triggerAsc",
                                "zh-CN": "triggerAsc"
                              }
                            },
                            "name": "triggerAsc",
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
                                "en-US": "cancelSort",
                                "zh-CN": "cancelSort"
                              }
                            },
                            "name": "cancelSort",
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
                      "en-US": "Modal",
                      "zh-CN": "Modal"
                    }
                  },
                  "name": "Modal",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "okText",
                                "zh-CN": "okText"
                              }
                            },
                            "name": "okText",
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
                                "en-US": "cancelText",
                                "zh-CN": "cancelText"
                              }
                            },
                            "name": "cancelText",
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
                                "en-US": "justOkText",
                                "zh-CN": "justOkText"
                              }
                            },
                            "name": "justOkText",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                      "en-US": "Tour",
                      "zh-CN": "Tour"
                    }
                  },
                  "name": "Tour",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "Next",
                                "zh-CN": "Next"
                              }
                            },
                            "name": "Next",
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
                                "en-US": "Previous",
                                "zh-CN": "Previous"
                              }
                            },
                            "name": "Previous",
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
                                "en-US": "Finish",
                                "zh-CN": "Finish"
                              }
                            },
                            "name": "Finish",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                      "en-US": "Popconfirm",
                      "zh-CN": "Popconfirm"
                    }
                  },
                  "name": "Popconfirm",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "okText",
                                "zh-CN": "okText"
                              }
                            },
                            "name": "okText",
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
                                "en-US": "cancelText",
                                "zh-CN": "cancelText"
                              }
                            },
                            "name": "cancelText",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                      "en-US": "Transfer",
                      "zh-CN": "Transfer"
                    }
                  },
                  "name": "Transfer",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "titles",
                                "zh-CN": "titles"
                              }
                            },
                            "name": "titles",
                            "setter": {
                              "componentName": "ArraySetter",
                              "props": {
                                "itemSetter": {
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
                              "initialValue": []
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "notFoundContent",
                                "zh-CN": "notFoundContent"
                              }
                            },
                            "name": "notFoundContent",
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
                                    "componentName": "BoolSetter",
                                    "isRequired": false,
                                    "initialValue": false
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
                                    "componentName": "ArraySetter",
                                    "props": {
                                      "itemSetter": {
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
                                "en-US": "searchPlaceholder",
                                "zh-CN": "searchPlaceholder"
                              }
                            },
                            "name": "searchPlaceholder",
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
                                "en-US": "itemUnit",
                                "zh-CN": "itemUnit"
                              }
                            },
                            "name": "itemUnit",
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
                                "en-US": "itemsUnit",
                                "zh-CN": "itemsUnit"
                              }
                            },
                            "name": "itemsUnit",
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
                                "en-US": "remove",
                                "zh-CN": "remove"
                              }
                            },
                            "name": "remove",
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
                                "en-US": "selectAll",
                                "zh-CN": "selectAll"
                              }
                            },
                            "name": "selectAll",
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
                                "en-US": "selectCurrent",
                                "zh-CN": "selectCurrent"
                              }
                            },
                            "name": "selectCurrent",
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
                                "en-US": "selectInvert",
                                "zh-CN": "selectInvert"
                              }
                            },
                            "name": "selectInvert",
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
                                "en-US": "removeAll",
                                "zh-CN": "removeAll"
                              }
                            },
                            "name": "removeAll",
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
                                "en-US": "removeCurrent",
                                "zh-CN": "removeCurrent"
                              }
                            },
                            "name": "removeCurrent",
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
                      "en-US": "Select",
                      "zh-CN": "Select"
                    }
                  },
                  "name": "Select",
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
                      "en-US": "Upload",
                      "zh-CN": "Upload"
                    }
                  },
                  "name": "Upload",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "uploading",
                                "zh-CN": "uploading"
                              }
                            },
                            "name": "uploading",
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
                                "en-US": "removeFile",
                                "zh-CN": "removeFile"
                              }
                            },
                            "name": "removeFile",
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
                                "en-US": "downloadFile",
                                "zh-CN": "downloadFile"
                              }
                            },
                            "name": "downloadFile",
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
                                "en-US": "uploadError",
                                "zh-CN": "uploadError"
                              }
                            },
                            "name": "uploadError",
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
                                "en-US": "previewFile",
                                "zh-CN": "previewFile"
                              }
                            },
                            "name": "previewFile",
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
                      "en-US": "Empty",
                      "zh-CN": "Empty"
                    }
                  },
                  "name": "Empty",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "description",
                                "zh-CN": "description"
                              }
                            },
                            "name": "description",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                      "en-US": "global",
                      "zh-CN": "global"
                    }
                  },
                  "name": "global",
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
                      "en-US": "PageHeader",
                      "zh-CN": "PageHeader"
                    }
                  },
                  "name": "PageHeader",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "back",
                                "zh-CN": "back"
                              }
                            },
                            "name": "back",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                      "en-US": "Icon",
                      "zh-CN": "Icon"
                    }
                  },
                  "name": "Icon",
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
                      "en-US": "Text",
                      "zh-CN": "Text"
                    }
                  },
                  "name": "Text",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "edit",
                                "zh-CN": "edit"
                              }
                            },
                            "name": "edit",
                            "setter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "copy",
                                "zh-CN": "copy"
                              }
                            },
                            "name": "copy",
                            "setter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "copied",
                                "zh-CN": "copied"
                              }
                            },
                            "name": "copied",
                            "setter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "expand",
                                "zh-CN": "expand"
                              }
                            },
                            "name": "expand",
                            "setter": {
                              "componentName": "MixedSetter",
                              "isRequired": false,
                              "props": {}
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
                      "en-US": "Form",
                      "zh-CN": "Form"
                    }
                  },
                  "name": "Form",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "optional",
                                "zh-CN": "optional"
                              }
                            },
                            "name": "optional",
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
                                "en-US": "defaultValidateMessages",
                                "zh-CN": "defaultValidateMessages"
                              }
                            },
                            "name": "defaultValidateMessages",
                            "setter": {
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "items": [
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "default",
                                          "zh-CN": "default"
                                        }
                                      },
                                      "name": "default",
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
                                              "componentName": "FunctionSetter",
                                              "isRequired": false
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "required",
                                          "zh-CN": "required"
                                        }
                                      },
                                      "name": "required",
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
                                              "componentName": "FunctionSetter",
                                              "isRequired": false
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "enum",
                                          "zh-CN": "enum"
                                        }
                                      },
                                      "name": "enum",
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
                                              "componentName": "FunctionSetter",
                                              "isRequired": false
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "whitespace",
                                          "zh-CN": "whitespace"
                                        }
                                      },
                                      "name": "whitespace",
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
                                              "componentName": "FunctionSetter",
                                              "isRequired": false
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "date",
                                          "zh-CN": "date"
                                        }
                                      },
                                      "name": "date",
                                      "setter": {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "items": [
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
                                                  "componentName": "MixedSetter",
                                                  "props": {
                                                    "setters": [
                                                      {
                                                        "componentName": "StringSetter",
                                                        "isRequired": false,
                                                        "initialValue": ""
                                                      },
                                                      {
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "parse",
                                                    "zh-CN": "parse"
                                                  }
                                                },
                                                "name": "parse",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "invalid",
                                                    "zh-CN": "invalid"
                                                  }
                                                },
                                                "name": "invalid",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
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
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "types",
                                          "zh-CN": "types"
                                        }
                                      },
                                      "name": "types",
                                      "setter": {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "items": [
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "string",
                                                    "zh-CN": "string"
                                                  }
                                                },
                                                "name": "string",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "method",
                                                    "zh-CN": "method"
                                                  }
                                                },
                                                "name": "method",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "array",
                                                    "zh-CN": "array"
                                                  }
                                                },
                                                "name": "array",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "object",
                                                    "zh-CN": "object"
                                                  }
                                                },
                                                "name": "object",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "number",
                                                    "zh-CN": "number"
                                                  }
                                                },
                                                "name": "number",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "date",
                                                    "zh-CN": "date"
                                                  }
                                                },
                                                "name": "date",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "boolean",
                                                    "zh-CN": "boolean"
                                                  }
                                                },
                                                "name": "boolean",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "integer",
                                                    "zh-CN": "integer"
                                                  }
                                                },
                                                "name": "integer",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "float",
                                                    "zh-CN": "float"
                                                  }
                                                },
                                                "name": "float",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "regexp",
                                                    "zh-CN": "regexp"
                                                  }
                                                },
                                                "name": "regexp",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "email",
                                                    "zh-CN": "email"
                                                  }
                                                },
                                                "name": "email",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
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
                                                  "componentName": "MixedSetter",
                                                  "props": {
                                                    "setters": [
                                                      {
                                                        "componentName": "StringSetter",
                                                        "isRequired": false,
                                                        "initialValue": ""
                                                      },
                                                      {
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "hex",
                                                    "zh-CN": "hex"
                                                  }
                                                },
                                                "name": "hex",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
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
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "string",
                                          "zh-CN": "string"
                                        }
                                      },
                                      "name": "string",
                                      "setter": {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "items": [
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "len",
                                                    "zh-CN": "len"
                                                  }
                                                },
                                                "name": "len",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "min",
                                                    "zh-CN": "min"
                                                  }
                                                },
                                                "name": "min",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "max",
                                                    "zh-CN": "max"
                                                  }
                                                },
                                                "name": "max",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "range",
                                                    "zh-CN": "range"
                                                  }
                                                },
                                                "name": "range",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
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
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "number",
                                          "zh-CN": "number"
                                        }
                                      },
                                      "name": "number",
                                      "setter": {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "items": [
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "len",
                                                    "zh-CN": "len"
                                                  }
                                                },
                                                "name": "len",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "min",
                                                    "zh-CN": "min"
                                                  }
                                                },
                                                "name": "min",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "max",
                                                    "zh-CN": "max"
                                                  }
                                                },
                                                "name": "max",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "range",
                                                    "zh-CN": "range"
                                                  }
                                                },
                                                "name": "range",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
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
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "array",
                                          "zh-CN": "array"
                                        }
                                      },
                                      "name": "array",
                                      "setter": {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "items": [
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "len",
                                                    "zh-CN": "len"
                                                  }
                                                },
                                                "name": "len",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "min",
                                                    "zh-CN": "min"
                                                  }
                                                },
                                                "name": "min",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "max",
                                                    "zh-CN": "max"
                                                  }
                                                },
                                                "name": "max",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
                                                      }
                                                    ]
                                                  }
                                                }
                                              },
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "range",
                                                    "zh-CN": "range"
                                                  }
                                                },
                                                "name": "range",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
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
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "pattern",
                                          "zh-CN": "pattern"
                                        }
                                      },
                                      "name": "pattern",
                                      "setter": {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "items": [
                                              {
                                                "title": {
                                                  "label": {
                                                    "type": "i18n",
                                                    "en-US": "mismatch",
                                                    "zh-CN": "mismatch"
                                                  }
                                                },
                                                "name": "mismatch",
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
                                                        "componentName": "FunctionSetter",
                                                        "isRequired": false
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
                                    }
                                  ],
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    "isRequired": false,
                                    "props": {}
                                  }
                                }
                              },
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
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "Image",
                      "zh-CN": "Image"
                    }
                  },
                  "name": "Image",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "preview",
                                "zh-CN": "preview"
                              }
                            },
                            "name": "preview",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                      "en-US": "QRCode",
                      "zh-CN": "QRCode"
                    }
                  },
                  "name": "QRCode",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "expired",
                                "zh-CN": "expired"
                              }
                            },
                            "name": "expired",
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
                                "en-US": "refresh",
                                "zh-CN": "refresh"
                              }
                            },
                            "name": "refresh",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                      "en-US": "ColorPicker",
                      "zh-CN": "ColorPicker"
                    }
                  },
                  "name": "ColorPicker",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "presetEmpty",
                                "zh-CN": "presetEmpty"
                              }
                            },
                            "name": "presetEmpty",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
            "en-US": "pageHeader",
            "zh-CN": "pageHeader"
          }
        },
        "name": "pageHeader",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "componentSize",
            "zh-CN": "componentSize"
          }
        },
        "name": "componentSize",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              },
              {
                "label": "large",
                "value": "large"
              }
            ],
            "options": [
              {
                "label": "small",
                "value": "small"
              },
              {
                "label": "middle",
                "value": "middle"
              },
              {
                "label": "large",
                "value": "large"
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
            "en-US": "componentDisabled",
            "zh-CN": "componentDisabled"
          }
        },
        "name": "componentDisabled",
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
            "en-US": "direction",
            "zh-CN": "direction"
          }
        },
        "name": "direction",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "ltr",
                "value": "ltr"
              },
              {
                "label": "rtl",
                "value": "rtl"
              }
            ],
            "options": [
              {
                "label": "ltr",
                "value": "ltr"
              },
              {
                "label": "rtl",
                "value": "rtl"
              }
            ]
          },
          "initialValue": "ltr"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "space",
            "zh-CN": "space"
          }
        },
        "name": "space",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "small",
                                "value": "small"
                              },
                              {
                                "label": "middle",
                                "value": "middle"
                              },
                              {
                                "label": "large",
                                "value": "large"
                              }
                            ],
                            "options": [
                              {
                                "label": "small",
                                "value": "small"
                              },
                              {
                                "label": "middle",
                                "value": "middle"
                              },
                              {
                                "label": "large",
                                "value": "large"
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
                                "en-US": "item",
                                "zh-CN": "item"
                              }
                            },
                            "name": "item",
                            "setter": {
                              "componentName": "StringSetter",
                              "isRequired": true,
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
                                "en-US": "item",
                                "zh-CN": "item"
                              }
                            },
                            "name": "item",
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
            "en-US": "virtual",
            "zh-CN": "virtual"
          }
        },
        "name": "virtual",
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
            "en-US": "dropdownMatchSelectWidth",
            "zh-CN": "@deprecate"
          },
          "tip": "dropdownMatchSelectWidth | @deprecated Please use `popupMatchSelectWidth` instead"
        },
        "name": "dropdownMatchSelectWidth",
        "description": "@deprecated Please use `popupMatchSelectWidth` instead",
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
            "en-US": "popupMatchSelectWidth",
            "zh-CN": "popupMatchSelectWidth"
          }
        },
        "name": "popupMatchSelectWidth",
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
            "en-US": "popupOverflow",
            "zh-CN": "popupOverflow"
          }
        },
        "name": "popupOverflow",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "scroll",
                "value": "scroll"
              },
              {
                "label": "viewport",
                "value": "viewport"
              }
            ],
            "options": [
              {
                "label": "scroll",
                "value": "scroll"
              },
              {
                "label": "viewport",
                "value": "viewport"
              }
            ]
          },
          "initialValue": "scroll"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "theme",
            "zh-CN": "theme"
          }
        },
        "name": "theme",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "token",
                      "zh-CN": "token"
                    }
                  },
                  "name": "token",
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
                      "en-US": "components",
                      "zh-CN": "components"
                    }
                  },
                  "name": "components",
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
                      "en-US": "algorithm",
                      "zh-CN": "algorithm"
                    }
                  },
                  "name": "algorithm",
                  "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                      "setters": [
                        {
                          "componentName": "FunctionSetter",
                          "isRequired": false
                        },
                        {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "FunctionSetter",
                              "isRequired": false
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
                      "en-US": "hashed",
                      "zh-CN": "hashed"
                    }
                  },
                  "name": "hashed",
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
            "en-US": "warning",
            "zh-CN": "warning"
          }
        },
        "name": "warning",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "strict",
                      "zh-CN": "strict"
                    }
                  },
                  "name": "strict",
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "alert",
            "zh-CN": "alert"
          }
        },
        "name": "alert",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "anchor",
            "zh-CN": "anchor"
          }
        },
        "name": "anchor",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "button",
            "zh-CN": "button"
          }
        },
        "name": "button",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                    "componentName": "MixedSetter",
                    "isRequired": false,
                    "props": {}
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
                    "componentName": "MixedSetter",
                    "isRequired": false,
                    "props": {}
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
            "en-US": "calendar",
            "zh-CN": "calendar"
          }
        },
        "name": "calendar",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "carousel",
            "zh-CN": "carousel"
          }
        },
        "name": "carousel",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "cascader",
            "zh-CN": "cascader"
          }
        },
        "name": "cascader",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "collapse",
            "zh-CN": "collapse"
          }
        },
        "name": "collapse",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "divider",
            "zh-CN": "divider"
          }
        },
        "name": "divider",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "drawer",
            "zh-CN": "drawer"
          }
        },
        "name": "drawer",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                                "en-US": "header",
                                "zh-CN": "header"
                              }
                            },
                            "name": "header",
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
                                "en-US": "body",
                                "zh-CN": "body"
                              }
                            },
                            "name": "body",
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
                                "en-US": "footer",
                                "zh-CN": "footer"
                              }
                            },
                            "name": "footer",
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
                                "en-US": "mask",
                                "zh-CN": "mask"
                              }
                            },
                            "name": "mask",
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
                                "en-US": "header",
                                "zh-CN": "header"
                              }
                            },
                            "name": "header",
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
                                "en-US": "body",
                                "zh-CN": "body"
                              }
                            },
                            "name": "body",
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
                                "en-US": "footer",
                                "zh-CN": "footer"
                              }
                            },
                            "name": "footer",
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
                                "en-US": "mask",
                                "zh-CN": "mask"
                              }
                            },
                            "name": "mask",
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
                                "en-US": "content",
                                "zh-CN": "content"
                              }
                            },
                            "name": "content",
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
            "en-US": "typography",
            "zh-CN": "typography"
          }
        },
        "name": "typography",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "skeleton",
            "zh-CN": "skeleton"
          }
        },
        "name": "skeleton",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "spin",
            "zh-CN": "spin"
          }
        },
        "name": "spin",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "segmented",
            "zh-CN": "segmented"
          }
        },
        "name": "segmented",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "statistic",
            "zh-CN": "statistic"
          }
        },
        "name": "statistic",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "steps",
            "zh-CN": "steps"
          }
        },
        "name": "steps",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "image",
            "zh-CN": "image"
          }
        },
        "name": "image",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "layout",
            "zh-CN": "layout"
          }
        },
        "name": "layout",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "list",
            "zh-CN": "list"
          }
        },
        "name": "list",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "mentions",
            "zh-CN": "mentions"
          }
        },
        "name": "mentions",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "modal",
            "zh-CN": "modal"
          }
        },
        "name": "modal",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
                      "en-US": "styles",
                      "zh-CN": "styles"
                    }
                  },
                  "name": "styles",
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
            "en-US": "progress",
            "zh-CN": "progress"
          }
        },
        "name": "progress",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "result",
            "zh-CN": "result"
          }
        },
        "name": "result",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "slider",
            "zh-CN": "slider"
          }
        },
        "name": "slider",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "breadcrumb",
            "zh-CN": "breadcrumb"
          }
        },
        "name": "breadcrumb",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "menu",
            "zh-CN": "menu"
          }
        },
        "name": "menu",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "checkbox",
            "zh-CN": "checkbox"
          }
        },
        "name": "checkbox",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "descriptions",
            "zh-CN": "descriptions"
          }
        },
        "name": "descriptions",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "empty",
            "zh-CN": "empty"
          }
        },
        "name": "empty",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "badge",
            "zh-CN": "badge"
          }
        },
        "name": "badge",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "radio",
            "zh-CN": "radio"
          }
        },
        "name": "radio",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "rate",
            "zh-CN": "rate"
          }
        },
        "name": "rate",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "switch",
            "zh-CN": "switch"
          }
        },
        "name": "switch",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "transfer",
            "zh-CN": "transfer"
          }
        },
        "name": "transfer",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "avatar",
            "zh-CN": "avatar"
          }
        },
        "name": "avatar",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "message",
            "zh-CN": "message"
          }
        },
        "name": "message",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "tag",
            "zh-CN": "tag"
          }
        },
        "name": "tag",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "table",
            "zh-CN": "table"
          }
        },
        "name": "table",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "card",
            "zh-CN": "card"
          }
        },
        "name": "card",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "tabs",
            "zh-CN": "tabs"
          }
        },
        "name": "tabs",
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
            "en-US": "timeline",
            "zh-CN": "timeline"
          }
        },
        "name": "timeline",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "timePicker",
            "zh-CN": "timePicker"
          }
        },
        "name": "timePicker",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "upload",
            "zh-CN": "upload"
          }
        },
        "name": "upload",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "notification",
            "zh-CN": "notification"
          }
        },
        "name": "notification",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "tree",
            "zh-CN": "tree"
          }
        },
        "name": "tree",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "colorPicker",
            "zh-CN": "colorPicker"
          }
        },
        "name": "colorPicker",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "datePicker",
            "zh-CN": "datePicker"
          }
        },
        "name": "datePicker",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "rangePicker",
            "zh-CN": "rangePicker"
          }
        },
        "name": "rangePicker",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "dropdown",
            "zh-CN": "dropdown"
          }
        },
        "name": "dropdown",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "flex",
            "zh-CN": "flex"
          }
        },
        "name": "flex",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
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
            "en-US": "wave",
            "zh-CN": "Wave is sp"
          },
          "tip": "wave | Wave is special component which only patch on the effect of component interaction."
        },
        "name": "wave",
        "description": "Wave is special component which only patch on the effect of component interaction.",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "disabled",
                      "zh-CN": "disabled"
                    }
                  },
                  "name": "disabled",
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
                      "en-US": "showEffect",
                      "zh-CN": "showEffect"
                    }
                  },
                  "name": "showEffect",
                  "setter": {
                    "componentName": "FunctionSetter"
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
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ConfigProvider",
    "screenshot": "",
    "schema": {
      "componentName": "ConfigProvider",
      "props": {}
    }
  }
];

export default {
  ...ConfigProviderMeta,
  snippets
};
