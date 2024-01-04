
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ThemeEditorMeta: IPublicTypeComponentMetadata = {
  "componentName": "ThemeEditor",
  "title": "ThemeEditor",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "editor-libs",
    "version": "0.1.0",
    "exportName": "ThemeEditor",
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
                      "en-US": "name",
                      "zh-CN": "name"
                    }
                  },
                  "name": "name",
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
                      "en-US": "config",
                      "zh-CN": "config"
                    }
                  },
                  "name": "config",
                  "setter": {
                    "componentName": "MixedSetter",
                    "isRequired": true,
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
            "en-US": "onThemeChange",
            "zh-CN": "onThemeChange"
          }
        },
        "name": "onThemeChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "darkAlgorithm",
            "zh-CN": "darkAlgorithm"
          }
        },
        "name": "darkAlgorithm",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
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
                      "en-US": "_lang",
                      "zh-CN": "_lang"
                    }
                  },
                  "name": "_lang",
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
                      "en-US": "followPrimary",
                      "zh-CN": "followPrimary"
                    }
                  },
                  "name": "followPrimary",
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
                      "en-US": "reset",
                      "zh-CN": "reset"
                    }
                  },
                  "name": "reset",
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
                      "en-US": "next",
                      "zh-CN": "next"
                    }
                  },
                  "name": "next",
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
                      "en-US": "groupView",
                      "zh-CN": "groupView"
                    }
                  },
                  "name": "groupView",
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
                      "en-US": "fill",
                      "zh-CN": "fill"
                    }
                  },
                  "name": "fill",
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
                      "en-US": "background",
                      "zh-CN": "background"
                    }
                  },
                  "name": "background",
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
                      "en-US": "border",
                      "zh-CN": "border"
                    }
                  },
                  "name": "border",
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
                      "en-US": "text",
                      "zh-CN": "text"
                    }
                  },
                  "name": "text",
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
                      "en-US": "globalToken",
                      "zh-CN": "globalToken"
                    }
                  },
                  "name": "globalToken",
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
                      "en-US": "componentToken",
                      "zh-CN": "componentToken"
                    }
                  },
                  "name": "componentToken",
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
                      "en-US": "advancedMode",
                      "zh-CN": "advancedMode"
                    }
                  },
                  "name": "advancedMode",
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
                      "en-US": "basicMode",
                      "zh-CN": "basicMode"
                    }
                  },
                  "name": "basicMode",
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
                      "en-US": "export",
                      "zh-CN": "export"
                    }
                  },
                  "name": "export",
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
                      "en-US": "import",
                      "zh-CN": "import"
                    }
                  },
                  "name": "import",
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
                      "en-US": "color",
                      "zh-CN": "color"
                    }
                  },
                  "name": "color",
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
                    "componentName": "StringSetter",
                    "isRequired": true,
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
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
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
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "themeConfig",
                      "zh-CN": "themeConfig"
                    }
                  },
                  "name": "themeConfig",
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
                      "en-US": "algorithmTip",
                      "zh-CN": "algorithmTip"
                    }
                  },
                  "name": "algorithmTip",
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
                      "en-US": "total",
                      "zh-CN": "total"
                    }
                  },
                  "name": "total",
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
                      "en-US": "changes",
                      "zh-CN": "changes"
                    }
                  },
                  "name": "changes",
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
                      "en-US": "tokenInfo",
                      "zh-CN": "tokenInfo"
                    }
                  },
                  "name": "tokenInfo",
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
                      "en-US": "enableComponentAlgorithm",
                      "zh-CN": "enableComponentAlgorithm"
                    }
                  },
                  "name": "enableComponentAlgorithm",
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
                      "en-US": "componentAlgorithm",
                      "zh-CN": "componentAlgorithm"
                    }
                  },
                  "name": "componentAlgorithm",
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
                      "en-US": "presetColors",
                      "zh-CN": "presetColors"
                    }
                  },
                  "name": "presetColors",
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
                      "en-US": "demo",
                      "zh-CN": "demo"
                    }
                  },
                  "name": "demo",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "overview",
                                "zh-CN": "overview"
                              }
                            },
                            "name": "overview",
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
                                "en-US": "components",
                                "zh-CN": "components"
                              }
                            },
                            "name": "components",
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
                                "en-US": "relatedTokens",
                                "zh-CN": "relatedTokens"
                              }
                            },
                            "name": "relatedTokens",
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
                                "en-US": "page",
                                "zh-CN": "page"
                              }
                            },
                            "name": "page",
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
                                "en-US": "fitView",
                                "zh-CN": "fitView"
                              }
                            },
                            "name": "fitView",
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
                                "en-US": "zoomTo",
                                "zh-CN": "zoomTo"
                              }
                            },
                            "name": "zoomTo",
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
                                "en-US": "relatedTokensDescription",
                                "zh-CN": "relatedTokensDescription"
                              }
                            },
                            "name": "relatedTokensDescription",
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
                                "en-US": "tokenCount",
                                "zh-CN": "tokenCount"
                              }
                            },
                            "name": "tokenCount",
                            "setter": {
                              "componentName": "FunctionSetter",
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
                    },
                    "isRequired": true
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
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "General",
                                "zh-CN": "General"
                              }
                            },
                            "name": "General",
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
                                "en-US": "Layout",
                                "zh-CN": "Layout"
                              }
                            },
                            "name": "Layout",
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
                                "en-US": "Navigation",
                                "zh-CN": "Navigation"
                              }
                            },
                            "name": "Navigation",
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
                                "en-US": "Data Entry",
                                "zh-CN": "Data Entry"
                              }
                            },
                            "name": "Data Entry",
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
                                "en-US": "Data Display",
                                "zh-CN": "Data Display"
                              }
                            },
                            "name": "Data Display",
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
                                "en-US": "Feedback",
                                "zh-CN": "Feedback"
                              }
                            },
                            "name": "Feedback",
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
                                "en-US": "Button",
                                "zh-CN": "Button"
                              }
                            },
                            "name": "Button",
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
                                "en-US": "Icon",
                                "zh-CN": "Icon"
                              }
                            },
                            "name": "Icon",
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
                                "en-US": "Typography",
                                "zh-CN": "Typography"
                              }
                            },
                            "name": "Typography",
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
                                "en-US": "Divider",
                                "zh-CN": "Divider"
                              }
                            },
                            "name": "Divider",
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
                                "en-US": "Grid",
                                "zh-CN": "Grid"
                              }
                            },
                            "name": "Grid",
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
                                "en-US": "Space",
                                "zh-CN": "Space"
                              }
                            },
                            "name": "Space",
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
                                "en-US": "Anchor",
                                "zh-CN": "Anchor"
                              }
                            },
                            "name": "Anchor",
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
                                "en-US": "Breadcrumb",
                                "zh-CN": "Breadcrumb"
                              }
                            },
                            "name": "Breadcrumb",
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
                                "en-US": "Dropdown",
                                "zh-CN": "Dropdown"
                              }
                            },
                            "name": "Dropdown",
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
                                "en-US": "Menu",
                                "zh-CN": "Menu"
                              }
                            },
                            "name": "Menu",
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
                              "componentName": "StringSetter",
                              "isRequired": true,
                              "initialValue": ""
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "Steps",
                                "zh-CN": "Steps"
                              }
                            },
                            "name": "Steps",
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
                                "en-US": "AutoComplete",
                                "zh-CN": "AutoComplete"
                              }
                            },
                            "name": "AutoComplete",
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
                                "en-US": "Cascader",
                                "zh-CN": "Cascader"
                              }
                            },
                            "name": "Cascader",
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
                                "en-US": "Checkbox",
                                "zh-CN": "Checkbox"
                              }
                            },
                            "name": "Checkbox",
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
                                "en-US": "DatePicker",
                                "zh-CN": "DatePicker"
                              }
                            },
                            "name": "DatePicker",
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
                                "en-US": "Form",
                                "zh-CN": "Form"
                              }
                            },
                            "name": "Form",
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
                                "en-US": "Input",
                                "zh-CN": "Input"
                              }
                            },
                            "name": "Input",
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
                                "en-US": "InputNumber",
                                "zh-CN": "InputNumber"
                              }
                            },
                            "name": "InputNumber",
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
                                "en-US": "Mentions",
                                "zh-CN": "Mentions"
                              }
                            },
                            "name": "Mentions",
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
                                "en-US": "Radio",
                                "zh-CN": "Radio"
                              }
                            },
                            "name": "Radio",
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
                                "en-US": "Rate",
                                "zh-CN": "Rate"
                              }
                            },
                            "name": "Rate",
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
                                "en-US": "Select",
                                "zh-CN": "Select"
                              }
                            },
                            "name": "Select",
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
                                "en-US": "Slider",
                                "zh-CN": "Slider"
                              }
                            },
                            "name": "Slider",
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
                                "en-US": "Switch",
                                "zh-CN": "Switch"
                              }
                            },
                            "name": "Switch",
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
                                "en-US": "TimePicker",
                                "zh-CN": "TimePicker"
                              }
                            },
                            "name": "TimePicker",
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
                                "en-US": "Transfer",
                                "zh-CN": "Transfer"
                              }
                            },
                            "name": "Transfer",
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
                                "en-US": "TreeSelect",
                                "zh-CN": "TreeSelect"
                              }
                            },
                            "name": "TreeSelect",
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
                                "en-US": "Upload",
                                "zh-CN": "Upload"
                              }
                            },
                            "name": "Upload",
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
                                "en-US": "Avatar",
                                "zh-CN": "Avatar"
                              }
                            },
                            "name": "Avatar",
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
                                "en-US": "Badge",
                                "zh-CN": "Badge"
                              }
                            },
                            "name": "Badge",
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
                                "en-US": "Calendar",
                                "zh-CN": "Calendar"
                              }
                            },
                            "name": "Calendar",
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
                                "en-US": "Card",
                                "zh-CN": "Card"
                              }
                            },
                            "name": "Card",
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
                                "en-US": "Carousel",
                                "zh-CN": "Carousel"
                              }
                            },
                            "name": "Carousel",
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
                                "en-US": "Collapse",
                                "zh-CN": "Collapse"
                              }
                            },
                            "name": "Collapse",
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
                                "en-US": "Descriptions",
                                "zh-CN": "Descriptions"
                              }
                            },
                            "name": "Descriptions",
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
                                "en-US": "Empty",
                                "zh-CN": "Empty"
                              }
                            },
                            "name": "Empty",
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
                                "en-US": "Image",
                                "zh-CN": "Image"
                              }
                            },
                            "name": "Image",
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
                                "en-US": "List",
                                "zh-CN": "List"
                              }
                            },
                            "name": "List",
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
                                "en-US": "Popover",
                                "zh-CN": "Popover"
                              }
                            },
                            "name": "Popover",
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
                                "en-US": "Segmented",
                                "zh-CN": "Segmented"
                              }
                            },
                            "name": "Segmented",
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
                                "en-US": "Statistic",
                                "zh-CN": "Statistic"
                              }
                            },
                            "name": "Statistic",
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
                                "en-US": "Table",
                                "zh-CN": "Table"
                              }
                            },
                            "name": "Table",
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
                                "en-US": "Tabs",
                                "zh-CN": "Tabs"
                              }
                            },
                            "name": "Tabs",
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
                                "en-US": "Tag",
                                "zh-CN": "Tag"
                              }
                            },
                            "name": "Tag",
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
                                "en-US": "Timeline",
                                "zh-CN": "Timeline"
                              }
                            },
                            "name": "Timeline",
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
                                "en-US": "Tooltip",
                                "zh-CN": "Tooltip"
                              }
                            },
                            "name": "Tooltip",
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
                                "en-US": "Tree",
                                "zh-CN": "Tree"
                              }
                            },
                            "name": "Tree",
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
                                "en-US": "Alert",
                                "zh-CN": "Alert"
                              }
                            },
                            "name": "Alert",
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
                                "en-US": "Drawer",
                                "zh-CN": "Drawer"
                              }
                            },
                            "name": "Drawer",
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
                                "en-US": "Message",
                                "zh-CN": "Message"
                              }
                            },
                            "name": "Message",
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
                                "en-US": "Modal",
                                "zh-CN": "Modal"
                              }
                            },
                            "name": "Modal",
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
                                "en-US": "Notification",
                                "zh-CN": "Notification"
                              }
                            },
                            "name": "Notification",
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
                                "en-US": "Popconfirm",
                                "zh-CN": "Popconfirm"
                              }
                            },
                            "name": "Popconfirm",
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
                                "en-US": "Progress",
                                "zh-CN": "Progress"
                              }
                            },
                            "name": "Progress",
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
                                "en-US": "Result",
                                "zh-CN": "Result"
                              }
                            },
                            "name": "Result",
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
                                "en-US": "Skeleton",
                                "zh-CN": "Skeleton"
                              }
                            },
                            "name": "Skeleton",
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
                                "en-US": "Spin",
                                "zh-CN": "Spin"
                              }
                            },
                            "name": "Spin",
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
            "en-US": "actions",
            "zh-CN": "actions"
          }
        },
        "name": "actions",
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
                "label": "global",
                "value": "global"
              },
              {
                "label": "component",
                "value": "component"
              }
            ],
            "options": [
              {
                "label": "global",
                "value": "global"
              },
              {
                "label": "component",
                "value": "component"
              }
            ]
          },
          "initialValue": "global"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onModeChange",
            "zh-CN": "onModeChange"
          }
        },
        "name": "onModeChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "advanced",
            "zh-CN": "advanced"
          }
        },
        "name": "advanced",
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
            "en-US": "hideAdvancedSwitcher",
            "zh-CN": "hideAdvancedSwitcher"
          }
        },
        "name": "hideAdvancedSwitcher",
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
            "en-US": "onAdvancedChange",
            "zh-CN": "onAdvancedChange"
          }
        },
        "name": "onAdvancedChange",
        "setter": {
          "componentName": "FunctionSetter"
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
    "title": "ThemeEditor",
    "screenshot": "",
    "schema": {
      "componentName": "ThemeEditor",
      "props": {}
    }
  }
];

export default {
  ...ThemeEditorMeta,
  snippets
};
