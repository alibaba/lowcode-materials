
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DraggerMeta: IPublicTypeComponentMetadata = {
  "componentName": "Dragger",
  "title": "Dragger",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Upload",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Dragger"
  },
  "configure": {
    "props": [
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
                "label": "select",
                "value": "select"
              },
              {
                "label": "drag",
                "value": "drag"
              }
            ],
            "options": [
              {
                "label": "select",
                "value": "select"
              },
              {
                "label": "drag",
                "value": "drag"
              }
            ]
          },
          "initialValue": "select"
        }
      },
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
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultFileList",
            "zh-CN": "defaultFileList"
          }
        },
        "name": "defaultFileList",
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
                          "en-US": "uid",
                          "zh-CN": "uid"
                        }
                      },
                      "name": "uid",
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
                        "componentName": "NumberSetter",
                        "isRequired": false,
                        "initialValue": 0
                      }
                    },
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
                          "en-US": "fileName",
                          "zh-CN": "fileName"
                        }
                      },
                      "name": "fileName",
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
                          "en-US": "lastModified",
                          "zh-CN": "lastModified"
                        }
                      },
                      "name": "lastModified",
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
                          "en-US": "lastModifiedDate",
                          "zh-CN": "lastModifiedDate"
                        }
                      },
                      "name": "lastModifiedDate",
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
                          "en-US": "url",
                          "zh-CN": "url"
                        }
                      },
                      "name": "url",
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
                              "label": "error",
                              "value": "error"
                            },
                            {
                              "label": "done",
                              "value": "done"
                            },
                            {
                              "label": "uploading",
                              "value": "uploading"
                            },
                            {
                              "label": "removed",
                              "value": "removed"
                            }
                          ],
                          "options": [
                            {
                              "label": "error",
                              "value": "error"
                            },
                            {
                              "label": "done",
                              "value": "done"
                            },
                            {
                              "label": "uploading",
                              "value": "uploading"
                            },
                            {
                              "label": "removed",
                              "value": "removed"
                            }
                          ]
                        },
                        "initialValue": "error"
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
                          "en-US": "thumbUrl",
                          "zh-CN": "thumbUrl"
                        }
                      },
                      "name": "thumbUrl",
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
                          "en-US": "originFileObj",
                          "zh-CN": "originFileObj"
                        }
                      },
                      "name": "originFileObj",
                      "setter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "items": [
                              {
                                "title": {
                                  "label": {
                                    "type": "i18n",
                                    "en-US": "lastModifiedDate",
                                    "zh-CN": "lastModifiedDate"
                                  }
                                },
                                "name": "lastModifiedDate",
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
                          "en-US": "response",
                          "zh-CN": "response"
                        }
                      },
                      "name": "response",
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
                          "en-US": "error",
                          "zh-CN": "error"
                        }
                      },
                      "name": "error",
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
                          "en-US": "linkProps",
                          "zh-CN": "linkProps"
                        }
                      },
                      "name": "linkProps",
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
                          "en-US": "type",
                          "zh-CN": "type"
                        }
                      },
                      "name": "type",
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
                          "en-US": "xhr",
                          "zh-CN": "xhr"
                        }
                      },
                      "name": "xhr",
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
                          "en-US": "preview",
                          "zh-CN": "preview"
                        }
                      },
                      "name": "preview",
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
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fileList",
            "zh-CN": "fileList"
          }
        },
        "name": "fileList",
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
                          "en-US": "uid",
                          "zh-CN": "uid"
                        }
                      },
                      "name": "uid",
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
                        "componentName": "NumberSetter",
                        "isRequired": false,
                        "initialValue": 0
                      }
                    },
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
                          "en-US": "fileName",
                          "zh-CN": "fileName"
                        }
                      },
                      "name": "fileName",
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
                          "en-US": "lastModified",
                          "zh-CN": "lastModified"
                        }
                      },
                      "name": "lastModified",
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
                          "en-US": "lastModifiedDate",
                          "zh-CN": "lastModifiedDate"
                        }
                      },
                      "name": "lastModifiedDate",
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
                          "en-US": "url",
                          "zh-CN": "url"
                        }
                      },
                      "name": "url",
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
                              "label": "error",
                              "value": "error"
                            },
                            {
                              "label": "done",
                              "value": "done"
                            },
                            {
                              "label": "uploading",
                              "value": "uploading"
                            },
                            {
                              "label": "removed",
                              "value": "removed"
                            }
                          ],
                          "options": [
                            {
                              "label": "error",
                              "value": "error"
                            },
                            {
                              "label": "done",
                              "value": "done"
                            },
                            {
                              "label": "uploading",
                              "value": "uploading"
                            },
                            {
                              "label": "removed",
                              "value": "removed"
                            }
                          ]
                        },
                        "initialValue": "error"
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
                          "en-US": "thumbUrl",
                          "zh-CN": "thumbUrl"
                        }
                      },
                      "name": "thumbUrl",
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
                          "en-US": "originFileObj",
                          "zh-CN": "originFileObj"
                        }
                      },
                      "name": "originFileObj",
                      "setter": {
                        "componentName": "ObjectSetter",
                        "props": {
                          "config": {
                            "items": [
                              {
                                "title": {
                                  "label": {
                                    "type": "i18n",
                                    "en-US": "lastModifiedDate",
                                    "zh-CN": "lastModifiedDate"
                                  }
                                },
                                "name": "lastModifiedDate",
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
                          "en-US": "response",
                          "zh-CN": "response"
                        }
                      },
                      "name": "response",
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
                          "en-US": "error",
                          "zh-CN": "error"
                        }
                      },
                      "name": "error",
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
                          "en-US": "linkProps",
                          "zh-CN": "linkProps"
                        }
                      },
                      "name": "linkProps",
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
                          "en-US": "type",
                          "zh-CN": "type"
                        }
                      },
                      "name": "type",
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
                          "en-US": "xhr",
                          "zh-CN": "xhr"
                        }
                      },
                      "name": "xhr",
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
                          "en-US": "preview",
                          "zh-CN": "preview"
                        }
                      },
                      "name": "preview",
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
          "initialValue": []
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
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "FunctionSetter"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "directory",
            "zh-CN": "directory"
          }
        },
        "name": "directory",
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
            "en-US": "data",
            "zh-CN": "data"
          }
        },
        "name": "data",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
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
                },
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
            "en-US": "method",
            "zh-CN": "method"
          }
        },
        "name": "method",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "POST",
                "value": "POST"
              },
              {
                "label": "PUT",
                "value": "PUT"
              },
              {
                "label": "PATCH",
                "value": "PATCH"
              },
              {
                "label": "post",
                "value": "post"
              },
              {
                "label": "put",
                "value": "put"
              },
              {
                "label": "patch",
                "value": "patch"
              }
            ],
            "options": [
              {
                "label": "POST",
                "value": "POST"
              },
              {
                "label": "PUT",
                "value": "PUT"
              },
              {
                "label": "PATCH",
                "value": "PATCH"
              },
              {
                "label": "post",
                "value": "post"
              },
              {
                "label": "put",
                "value": "put"
              },
              {
                "label": "patch",
                "value": "patch"
              }
            ]
          },
          "initialValue": "POST"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "headers",
            "zh-CN": "headers"
          }
        },
        "name": "headers",
        "setter": {
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
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showUploadList",
            "zh-CN": "showUploadList"
          }
        },
        "name": "showUploadList",
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
                            "en-US": "showRemoveIcon",
                            "zh-CN": "showRemoveIcon"
                          }
                        },
                        "name": "showRemoveIcon",
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
                            "en-US": "showPreviewIcon",
                            "zh-CN": "showPreviewIcon"
                          }
                        },
                        "name": "showPreviewIcon",
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
                            "en-US": "showDownloadIcon",
                            "zh-CN": "showDownloadIcon"
                          }
                        },
                        "name": "showDownloadIcon",
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
                            "en-US": "removeIcon",
                            "zh-CN": "removeIcon"
                          }
                        },
                        "name": "removeIcon",
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
                                "componentName": "FunctionSetter"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "downloadIcon",
                            "zh-CN": "downloadIcon"
                          }
                        },
                        "name": "downloadIcon",
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
                                "componentName": "FunctionSetter"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "title": {
                          "label": {
                            "type": "i18n",
                            "en-US": "previewIcon",
                            "zh-CN": "previewIcon"
                          }
                        },
                        "name": "previewIcon",
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
                                "componentName": "FunctionSetter"
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
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "multiple",
            "zh-CN": "multiple"
          }
        },
        "name": "multiple",
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
            "en-US": "accept",
            "zh-CN": "accept"
          }
        },
        "name": "accept",
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
            "en-US": "beforeUpload",
            "zh-CN": "beforeUpload"
          }
        },
        "name": "beforeUpload",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onDrop",
            "zh-CN": "onDrop"
          }
        },
        "name": "onDrop",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "listType",
            "zh-CN": "listType"
          }
        },
        "name": "listType",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "text",
                "value": "text"
              },
              {
                "label": "picture",
                "value": "picture"
              },
              {
                "label": "picture-card",
                "value": "picture-card"
              },
              {
                "label": "picture-circle",
                "value": "picture-circle"
              }
            ],
            "options": [
              {
                "label": "text",
                "value": "text"
              },
              {
                "label": "picture",
                "value": "picture"
              },
              {
                "label": "picture-card",
                "value": "picture-card"
              },
              {
                "label": "picture-circle",
                "value": "picture-circle"
              }
            ]
          },
          "initialValue": "text"
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
            "en-US": "supportServerRender",
            "zh-CN": "supportServerRender"
          }
        },
        "name": "supportServerRender",
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
            "en-US": "customRequest",
            "zh-CN": "customRequest"
          }
        },
        "name": "customRequest",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "withCredentials",
            "zh-CN": "withCredentials"
          }
        },
        "name": "withCredentials",
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
            "en-US": "openFileDialogOnClick",
            "zh-CN": "openFileDialogOnClick"
          }
        },
        "name": "openFileDialogOnClick",
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
            "en-US": "id",
            "zh-CN": "id"
          }
        },
        "name": "id",
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
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "transformFile",
            "zh-CN": "@deprecate"
          },
          "tip": "transformFile | @deprecated Please use `beforeUpload` directly"
        },
        "name": "transformFile",
        "description": "@deprecated Please use `beforeUpload` directly",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "iconRender",
            "zh-CN": "iconRender"
          }
        },
        "name": "iconRender",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "isImageUrl",
            "zh-CN": "isImageUrl"
          }
        },
        "name": "isImageUrl",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
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
            "en-US": "itemRender",
            "zh-CN": "itemRender"
          }
        },
        "name": "itemRender",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "maxCount",
            "zh-CN": "Config max"
          },
          "tip": "maxCount | Config max count of `fileList`. Will replace current one when `maxCount` is 1"
        },
        "name": "maxCount",
        "description": "Config max count of `fileList`. Will replace current one when `maxCount` is 1",
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
            "en-US": "capture",
            "zh-CN": "capture"
          }
        },
        "name": "capture",
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
            "en-US": "height",
            "zh-CN": "height"
          }
        },
        "name": "height",
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
      "events": [
        {
          "name": "onChange"
        },
        {
          "name": "onPreview"
        },
        {
          "name": "onDownload"
        },
        {
          "name": "onRemove"
        }
      ],
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Dragger",
    "screenshot": "",
    "schema": {
      "componentName": "Dragger",
      "props": {}
    }
  }
];

export default {
  ...DraggerMeta,
  snippets
};
