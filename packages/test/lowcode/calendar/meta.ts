
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CalendarMeta: IPublicTypeComponentMetadata = {
  "componentName": "Calendar",
  "title": "Calendar",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Calendar",
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
            "en-US": "locale",
            "zh-CN": "locale"
          }
        },
        "name": "locale",
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
            "en-US": "validRange",
            "zh-CN": "validRange"
          }
        },
        "name": "validRange",
        "setter": {
          "componentName": "MixedSetter",
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabledDate",
            "zh-CN": "disabledDate"
          }
        },
        "name": "disabledDate",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dateFullCellRender",
            "zh-CN": "@deprecate"
          },
          "tip": "dateFullCellRender | @deprecated Please use fullCellRender instead."
        },
        "name": "dateFullCellRender",
        "description": "@deprecated Please use fullCellRender instead.",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dateCellRender",
            "zh-CN": "@deprecate"
          },
          "tip": "dateCellRender | @deprecated Please use cellRender instead."
        },
        "name": "dateCellRender",
        "description": "@deprecated Please use cellRender instead.",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "monthFullCellRender",
            "zh-CN": "@deprecate"
          },
          "tip": "monthFullCellRender | @deprecated Please use fullCellRender instead."
        },
        "name": "monthFullCellRender",
        "description": "@deprecated Please use fullCellRender instead.",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "monthCellRender",
            "zh-CN": "@deprecate"
          },
          "tip": "monthCellRender | @deprecated Please use cellRender instead."
        },
        "name": "monthCellRender",
        "description": "@deprecated Please use cellRender instead.",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cellRender",
            "zh-CN": "cellRender"
          }
        },
        "name": "cellRender",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fullCellRender",
            "zh-CN": "fullCellRender"
          }
        },
        "name": "fullCellRender",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headerRender",
            "zh-CN": "headerRender"
          }
        },
        "name": "headerRender",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
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
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "__constructor",
                      "zh-CN": "__constructor"
                    }
                  },
                  "name": "__constructor",
                  "setter": {
                    "componentName": "MixedSetter",
                    "isRequired": true,
                    "props": {}
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "clone",
                      "zh-CN": "clone"
                    }
                  },
                  "name": "clone",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isValid",
                      "zh-CN": "isValid"
                    }
                  },
                  "name": "isValid",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "year",
                      "zh-CN": "year"
                    }
                  },
                  "name": "year",
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
                      "en-US": "month",
                      "zh-CN": "month"
                    }
                  },
                  "name": "month",
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
                      "en-US": "date",
                      "zh-CN": "date"
                    }
                  },
                  "name": "date",
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
                      "en-US": "day",
                      "zh-CN": "day"
                    }
                  },
                  "name": "day",
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
                      "en-US": "hour",
                      "zh-CN": "hour"
                    }
                  },
                  "name": "hour",
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
                      "en-US": "minute",
                      "zh-CN": "minute"
                    }
                  },
                  "name": "minute",
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
                      "en-US": "second",
                      "zh-CN": "second"
                    }
                  },
                  "name": "second",
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
                      "en-US": "millisecond",
                      "zh-CN": "millisecond"
                    }
                  },
                  "name": "millisecond",
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
                      "en-US": "set",
                      "zh-CN": "set"
                    }
                  },
                  "name": "set",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "get",
                      "zh-CN": "get"
                    }
                  },
                  "name": "get",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "add",
                      "zh-CN": "add"
                    }
                  },
                  "name": "add",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "subtract",
                      "zh-CN": "subtract"
                    }
                  },
                  "name": "subtract",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "startOf",
                      "zh-CN": "startOf"
                    }
                  },
                  "name": "startOf",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "endOf",
                      "zh-CN": "endOf"
                    }
                  },
                  "name": "endOf",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
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
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "diff",
                      "zh-CN": "diff"
                    }
                  },
                  "name": "diff",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "valueOf",
                      "zh-CN": "valueOf"
                    }
                  },
                  "name": "valueOf",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "unix",
                      "zh-CN": "unix"
                    }
                  },
                  "name": "unix",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "daysInMonth",
                      "zh-CN": "daysInMonth"
                    }
                  },
                  "name": "daysInMonth",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toDate",
                      "zh-CN": "toDate"
                    }
                  },
                  "name": "toDate",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toJSON",
                      "zh-CN": "toJSON"
                    }
                  },
                  "name": "toJSON",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toISOString",
                      "zh-CN": "toISOString"
                    }
                  },
                  "name": "toISOString",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toString",
                      "zh-CN": "toString"
                    }
                  },
                  "name": "toString",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "utcOffset",
                      "zh-CN": "utcOffset"
                    }
                  },
                  "name": "utcOffset",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isBefore",
                      "zh-CN": "isBefore"
                    }
                  },
                  "name": "isBefore",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isSame",
                      "zh-CN": "isSame"
                    }
                  },
                  "name": "isSame",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isAfter",
                      "zh-CN": "isAfter"
                    }
                  },
                  "name": "isAfter",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultValue",
            "zh-CN": "defaultValue"
          }
        },
        "name": "defaultValue",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "__constructor",
                      "zh-CN": "__constructor"
                    }
                  },
                  "name": "__constructor",
                  "setter": {
                    "componentName": "MixedSetter",
                    "isRequired": true,
                    "props": {}
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "clone",
                      "zh-CN": "clone"
                    }
                  },
                  "name": "clone",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isValid",
                      "zh-CN": "isValid"
                    }
                  },
                  "name": "isValid",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "year",
                      "zh-CN": "year"
                    }
                  },
                  "name": "year",
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
                      "en-US": "month",
                      "zh-CN": "month"
                    }
                  },
                  "name": "month",
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
                      "en-US": "date",
                      "zh-CN": "date"
                    }
                  },
                  "name": "date",
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
                      "en-US": "day",
                      "zh-CN": "day"
                    }
                  },
                  "name": "day",
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
                      "en-US": "hour",
                      "zh-CN": "hour"
                    }
                  },
                  "name": "hour",
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
                      "en-US": "minute",
                      "zh-CN": "minute"
                    }
                  },
                  "name": "minute",
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
                      "en-US": "second",
                      "zh-CN": "second"
                    }
                  },
                  "name": "second",
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
                      "en-US": "millisecond",
                      "zh-CN": "millisecond"
                    }
                  },
                  "name": "millisecond",
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
                      "en-US": "set",
                      "zh-CN": "set"
                    }
                  },
                  "name": "set",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "get",
                      "zh-CN": "get"
                    }
                  },
                  "name": "get",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "add",
                      "zh-CN": "add"
                    }
                  },
                  "name": "add",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "subtract",
                      "zh-CN": "subtract"
                    }
                  },
                  "name": "subtract",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "startOf",
                      "zh-CN": "startOf"
                    }
                  },
                  "name": "startOf",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "endOf",
                      "zh-CN": "endOf"
                    }
                  },
                  "name": "endOf",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
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
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "diff",
                      "zh-CN": "diff"
                    }
                  },
                  "name": "diff",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "valueOf",
                      "zh-CN": "valueOf"
                    }
                  },
                  "name": "valueOf",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "unix",
                      "zh-CN": "unix"
                    }
                  },
                  "name": "unix",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "daysInMonth",
                      "zh-CN": "daysInMonth"
                    }
                  },
                  "name": "daysInMonth",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toDate",
                      "zh-CN": "toDate"
                    }
                  },
                  "name": "toDate",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toJSON",
                      "zh-CN": "toJSON"
                    }
                  },
                  "name": "toJSON",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toISOString",
                      "zh-CN": "toISOString"
                    }
                  },
                  "name": "toISOString",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "toString",
                      "zh-CN": "toString"
                    }
                  },
                  "name": "toString",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "utcOffset",
                      "zh-CN": "utcOffset"
                    }
                  },
                  "name": "utcOffset",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isBefore",
                      "zh-CN": "isBefore"
                    }
                  },
                  "name": "isBefore",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isSame",
                      "zh-CN": "isSame"
                    }
                  },
                  "name": "isSame",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "isAfter",
                      "zh-CN": "isAfter"
                    }
                  },
                  "name": "isAfter",
                  "setter": {
                    "componentName": "FunctionSetter",
                    "isRequired": true
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "mode",
            "zh-CN": "mode"
          }
        },
        "name": "mode",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "month",
                "value": "month"
              },
              {
                "label": "year",
                "value": "year"
              }
            ],
            "options": [
              {
                "label": "month",
                "value": "month"
              },
              {
                "label": "year",
                "value": "year"
              }
            ]
          },
          "initialValue": "month"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fullscreen",
            "zh-CN": "fullscreen"
          }
        },
        "name": "fullscreen",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true,
      "events": [
        {
          "name": "onChange"
        },
        {
          "name": "onPanelChange"
        },
        {
          "name": "onSelect"
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Calendar",
    "screenshot": "",
    "schema": {
      "componentName": "Calendar",
      "props": {}
    }
  }
];

export default {
  ...CalendarMeta,
  snippets
};
