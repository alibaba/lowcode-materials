
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DropdownMeta: IPublicTypeComponentMetadata = {
  "componentName": "Dropdown",
  "title": "Dropdown",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Dropdown",
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
                      "en-US": "theme",
                      "zh-CN": "theme"
                    }
                  },
                  "name": "theme",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "light",
                          "value": "light"
                        },
                        {
                          "label": "dark",
                          "value": "dark"
                        }
                      ],
                      "options": [
                        {
                          "label": "light",
                          "value": "light"
                        },
                        {
                          "label": "dark",
                          "value": "dark"
                        }
                      ]
                    },
                    "initialValue": "light"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "inlineIndent",
                      "zh-CN": "inlineIndent"
                    }
                  },
                  "name": "inlineIndent",
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
                      "en-US": "_internalDisableMenuItemTitleTooltip",
                      "zh-CN": "_internalDisableMenuItemTitleTooltip"
                    }
                  },
                  "name": "_internalDisableMenuItemTitleTooltip",
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
                      "en-US": "items",
                      "zh-CN": "items"
                    }
                  },
                  "name": "items",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
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
                                          "en-US": "dashed",
                                          "zh-CN": "dashed"
                                        }
                                      },
                                      "name": "dashed",
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
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    "isRequired": false,
                                    "props": {}
                                  }
                                }
                              }
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
                                          "en-US": "danger",
                                          "zh-CN": "danger"
                                        }
                                      },
                                      "name": "danger",
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
                                          "en-US": "icon",
                                          "zh-CN": "icon"
                                        }
                                      },
                                      "name": "icon",
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
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "items": [
                                    {
                                      "title": {
                                        "label": {
                                          "type": "i18n",
                                          "en-US": "T",
                                          "zh-CN": "T"
                                        }
                                      },
                                      "name": "T",
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
                                          "en-US": "icon",
                                          "zh-CN": "icon"
                                        }
                                      },
                                      "name": "icon",
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
                                          "en-US": "theme",
                                          "zh-CN": "theme"
                                        }
                                      },
                                      "name": "theme",
                                      "setter": {
                                        "componentName": "RadioGroupSetter",
                                        "props": {
                                          "dataSource": [
                                            {
                                              "label": "light",
                                              "value": "light"
                                            },
                                            {
                                              "label": "dark",
                                              "value": "dark"
                                            }
                                          ],
                                          "options": [
                                            {
                                              "label": "light",
                                              "value": "light"
                                            },
                                            {
                                              "label": "dark",
                                              "value": "dark"
                                            }
                                          ]
                                        },
                                        "initialValue": "light"
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
                                                  "componentName": "ObjectSetter",
                                                  "props": {
                                                    "config": {
                                                      "items": [
                                                        {
                                                          "title": {
                                                            "label": {
                                                              "type": "i18n",
                                                              "en-US": "dashed",
                                                              "zh-CN": "dashed"
                                                            }
                                                          },
                                                          "name": "dashed",
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
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        "isRequired": false,
                                                        "props": {}
                                                      }
                                                    }
                                                  }
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
                                                              "en-US": "T",
                                                              "zh-CN": "T"
                                                            }
                                                          },
                                                          "name": "T",
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
                                                              "en-US": "children",
                                                              "zh-CN": "children"
                                                            }
                                                          },
                                                          "name": "children",
                                                          "setter": {
                                                            "componentName": "ArraySetter",
                                                            "props": {
                                                              "itemSetter": {
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
                                                                      "componentName": "ObjectSetter",
                                                                      "props": {
                                                                        "config": {
                                                                          "items": [
                                                                            {
                                                                              "title": {
                                                                                "label": {
                                                                                  "type": "i18n",
                                                                                  "en-US": "dashed",
                                                                                  "zh-CN": "dashed"
                                                                                }
                                                                              },
                                                                              "name": "dashed",
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
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            "isRequired": false,
                                                                            "props": {}
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  ]
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
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        "isRequired": false,
                                                        "props": {}
                                                      }
                                                    }
                                                  }
                                                }
                                              ]
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
                                          "en-US": "T",
                                          "zh-CN": "T"
                                        }
                                      },
                                      "name": "T",
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
                                          "en-US": "children",
                                          "zh-CN": "children"
                                        }
                                      },
                                      "name": "children",
                                      "setter": {
                                        "componentName": "ArraySetter",
                                        "props": {
                                          "itemSetter": {
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
                                                  "componentName": "ObjectSetter",
                                                  "props": {
                                                    "config": {
                                                      "items": [
                                                        {
                                                          "title": {
                                                            "label": {
                                                              "type": "i18n",
                                                              "en-US": "dashed",
                                                              "zh-CN": "dashed"
                                                            }
                                                          },
                                                          "name": "dashed",
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
                                                      "extraSetter": {
                                                        "componentName": "MixedSetter",
                                                        "isRequired": false,
                                                        "props": {}
                                                      }
                                                    }
                                                  }
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
                                                              "en-US": "T",
                                                              "zh-CN": "T"
                                                            }
                                                          },
                                                          "name": "T",
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
                                                              "en-US": "icon",
                                                              "zh-CN": "icon"
                                                            }
                                                          },
                                                          "name": "icon",
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
                                                              "en-US": "theme",
                                                              "zh-CN": "theme"
                                                            }
                                                          },
                                                          "name": "theme",
                                                          "setter": {
                                                            "componentName": "RadioGroupSetter",
                                                            "props": {
                                                              "dataSource": [
                                                                {
                                                                  "label": "light",
                                                                  "value": "light"
                                                                },
                                                                {
                                                                  "label": "dark",
                                                                  "value": "dark"
                                                                }
                                                              ],
                                                              "options": [
                                                                {
                                                                  "label": "light",
                                                                  "value": "light"
                                                                },
                                                                {
                                                                  "label": "dark",
                                                                  "value": "dark"
                                                                }
                                                              ]
                                                            },
                                                            "initialValue": "light"
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
                                                                      "componentName": "ObjectSetter",
                                                                      "props": {
                                                                        "config": {
                                                                          "items": [
                                                                            {
                                                                              "title": {
                                                                                "label": {
                                                                                  "type": "i18n",
                                                                                  "en-US": "dashed",
                                                                                  "zh-CN": "dashed"
                                                                                }
                                                                              },
                                                                              "name": "dashed",
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
                                                                          "extraSetter": {
                                                                            "componentName": "MixedSetter",
                                                                            "isRequired": false,
                                                                            "props": {}
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  ]
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
                                              ]
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
                                  "extraSetter": {
                                    "componentName": "MixedSetter",
                                    "isRequired": false,
                                    "props": {}
                                  }
                                }
                              }
                            }
                          ]
                        }
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
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "autoFocus",
            "zh-CN": "autoFocus"
          }
        },
        "name": "autoFocus",
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
            "en-US": "arrow",
            "zh-CN": "arrow"
          }
        },
        "name": "arrow",
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
                            "en-US": "pointAtCenter",
                            "zh-CN": "pointAtCenter"
                          }
                        },
                        "name": "pointAtCenter",
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
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "trigger",
            "zh-CN": "trigger"
          }
        },
        "name": "trigger",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "RadioGroupSetter",
              "props": {
                "dataSource": [
                  {
                    "label": "click",
                    "value": "click"
                  },
                  {
                    "label": "hover",
                    "value": "hover"
                  },
                  {
                    "label": "contextMenu",
                    "value": "contextMenu"
                  }
                ],
                "options": [
                  {
                    "label": "click",
                    "value": "click"
                  },
                  {
                    "label": "hover",
                    "value": "hover"
                  },
                  {
                    "label": "contextMenu",
                    "value": "contextMenu"
                  }
                ]
              },
              "initialValue": "click"
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "dropdownRender",
            "zh-CN": "dropdownRender"
          }
        },
        "name": "dropdownRender",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onOpenChange",
            "zh-CN": "onOpenChange"
          }
        },
        "name": "onOpenChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "open",
            "zh-CN": "open"
          }
        },
        "name": "open",
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
            "en-US": "destroyPopupOnHide",
            "zh-CN": "destroyPopupOnHide"
          }
        },
        "name": "destroyPopupOnHide",
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
            "en-US": "align",
            "zh-CN": "align"
          }
        },
        "name": "align",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "points",
                      "zh-CN": "points"
                    }
                  },
                  "name": "points",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
                        "componentName": "MixedSetter",
                        "isRequired": false,
                        "props": {}
                      }
                    },
                    "initialValue": []
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "_experimental",
                      "zh-CN": "_experimental"
                    }
                  },
                  "name": "_experimental",
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
                      "en-US": "offset",
                      "zh-CN": "offset"
                    }
                  },
                  "name": "offset",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
                        "componentName": "MixedSetter",
                        "isRequired": false,
                        "props": {}
                      }
                    },
                    "initialValue": []
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "targetOffset",
                      "zh-CN": "targetOffset"
                    }
                  },
                  "name": "targetOffset",
                  "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                      "itemSetter": {
                        "componentName": "MixedSetter",
                        "isRequired": false,
                        "props": {}
                      }
                    },
                    "initialValue": []
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "overflow",
                      "zh-CN": "overflow"
                    }
                  },
                  "name": "overflow",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "adjustX",
                                "zh-CN": "adjustX"
                              }
                            },
                            "name": "adjustX",
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
                                    "componentName": "BoolSetter",
                                    "isRequired": false,
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
                                "en-US": "adjustY",
                                "zh-CN": "adjustY"
                              }
                            },
                            "name": "adjustY",
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
                                    "componentName": "BoolSetter",
                                    "isRequired": false,
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
                                "en-US": "shiftX",
                                "zh-CN": "shiftX"
                              }
                            },
                            "name": "shiftX",
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
                                    "componentName": "BoolSetter",
                                    "isRequired": false,
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
                                "en-US": "shiftY",
                                "zh-CN": "shiftY"
                              }
                            },
                            "name": "shiftY",
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
                                    "componentName": "BoolSetter",
                                    "isRequired": false,
                                    "initialValue": false
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
                      "en-US": "autoArrow",
                      "zh-CN": "autoArrow"
                    }
                  },
                  "name": "autoArrow",
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
                      "en-US": "htmlRegion",
                      "zh-CN": "htmlRegion"
                    }
                  },
                  "name": "htmlRegion",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "visible",
                          "value": "visible"
                        },
                        {
                          "label": "scroll",
                          "value": "scroll"
                        },
                        {
                          "label": "visibleFirst",
                          "value": "visibleFirst"
                        }
                      ],
                      "options": [
                        {
                          "label": "visible",
                          "value": "visible"
                        },
                        {
                          "label": "scroll",
                          "value": "scroll"
                        },
                        {
                          "label": "visibleFirst",
                          "value": "visibleFirst"
                        }
                      ]
                    },
                    "initialValue": "visible"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "dynamicInset",
                      "zh-CN": "dynamicInset"
                    }
                  },
                  "name": "dynamicInset",
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
                      "en-US": "useCssRight",
                      "zh-CN": "useCssRight"
                    }
                  },
                  "name": "useCssRight",
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
                      "en-US": "useCssBottom",
                      "zh-CN": "useCssBottom"
                    }
                  },
                  "name": "useCssBottom",
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
                      "en-US": "useCssTransform",
                      "zh-CN": "useCssTransform"
                    }
                  },
                  "name": "useCssTransform",
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
                      "en-US": "ignoreShake",
                      "zh-CN": "ignoreShake"
                    }
                  },
                  "name": "ignoreShake",
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
            "en-US": "transitionName",
            "zh-CN": "transitionName"
          }
        },
        "name": "transitionName",
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
            "en-US": "placement",
            "zh-CN": "placement"
          }
        },
        "name": "placement",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "topLeft",
                "value": "topLeft"
              },
              {
                "label": "topRight",
                "value": "topRight"
              },
              {
                "label": "bottom",
                "value": "bottom"
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
                "label": "top",
                "value": "top"
              },
              {
                "label": "topLeft",
                "value": "topLeft"
              },
              {
                "label": "topRight",
                "value": "topRight"
              },
              {
                "label": "bottom",
                "value": "bottom"
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
                "label": "topCenter",
                "value": "topCenter"
              },
              {
                "label": "bottomCenter",
                "value": "bottomCenter"
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
            "en-US": "overlayClassName",
            "zh-CN": "overlayClassName"
          }
        },
        "name": "overlayClassName",
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
            "en-US": "overlayStyle",
            "zh-CN": "overlayStyle"
          }
        },
        "name": "overlayStyle",
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
            "en-US": "forceRender",
            "zh-CN": "forceRender"
          }
        },
        "name": "forceRender",
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
            "en-US": "mouseEnterDelay",
            "zh-CN": "mouseEnterDelay"
          }
        },
        "name": "mouseEnterDelay",
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
            "en-US": "mouseLeaveDelay",
            "zh-CN": "mouseLeaveDelay"
          }
        },
        "name": "mouseLeaveDelay",
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
            "en-US": "openClassName",
            "zh-CN": "openClassName"
          }
        },
        "name": "openClassName",
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
            "en-US": "autoAdjustOverflow",
            "zh-CN": "autoAdjustOverflow"
          }
        },
        "name": "autoAdjustOverflow",
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
                            "en-US": "adjustX",
                            "zh-CN": "adjustX"
                          }
                        },
                        "name": "adjustX",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ],
                            "options": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ]
                          },
                          "initialValue": 0
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "adjustY",
                            "zh-CN": "adjustY"
                          }
                        },
                        "name": "adjustY",
                        "setter": {
                          "componentName": "RadioGroupSetter",
                          "props": {
                            "dataSource": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ],
                            "options": [
                              {
                                "label": "0",
                                "value": 0
                              },
                              {
                                "label": "1",
                                "value": 1
                              }
                            ]
                          },
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
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "overlay",
            "zh-CN": "@deprecate"
          },
          "tip": "overlay | @deprecated Please use `menu` instead"
        },
        "name": "overlay",
        "description": "@deprecated Please use `menu` instead",
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
            "en-US": "visible",
            "zh-CN": "@deprecate"
          },
          "tip": "visible | @deprecated Please use `open` instead"
        },
        "name": "visible",
        "description": "@deprecated Please use `open` instead",
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
            "en-US": "onVisibleChange",
            "zh-CN": "@deprecate"
          },
          "tip": "onVisibleChange | @deprecated Please use `onOpenChange` instead"
        },
        "name": "onVisibleChange",
        "description": "@deprecated Please use `onOpenChange` instead",
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
    "title": "Dropdown",
    "screenshot": "",
    "schema": {
      "componentName": "Dropdown",
      "props": {}
    }
  }
];

export default {
  ...DropdownMeta,
  snippets
};
