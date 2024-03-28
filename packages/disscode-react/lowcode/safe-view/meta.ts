
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SafeViewMeta: IPublicTypeComponentMetadata = {
  "componentName": "SafeView",
  "title": "SafeView",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/react",
    "version": "0.0.4",
    "exportName": "SafeView",
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
            "en-US": "forceInset",
            "zh-CN": "forceInset"
          }
        },
        "name": "forceInset",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "top",
                      "zh-CN": "top"
                    }
                  },
                  "name": "top",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "always",
                          "value": "always"
                        },
                        {
                          "label": "never",
                          "value": "never"
                        }
                      ],
                      "options": [
                        {
                          "label": "always",
                          "value": "always"
                        },
                        {
                          "label": "never",
                          "value": "never"
                        }
                      ]
                    },
                    "isRequired": true,
                    "initialValue": "always"
                  }
                },
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "bottom",
                      "zh-CN": "bottom"
                    }
                  },
                  "name": "bottom",
                  "setter": {
                    "componentName": "RadioGroupSetter",
                    "props": {
                      "dataSource": [
                        {
                          "label": "always",
                          "value": "always"
                        },
                        {
                          "label": "never",
                          "value": "never"
                        }
                      ],
                      "options": [
                        {
                          "label": "always",
                          "value": "always"
                        },
                        {
                          "label": "never",
                          "value": "never"
                        }
                      ]
                    },
                    "isRequired": true,
                    "initialValue": "always"
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
            "en-US": "className",
            "zh-CN": "className"
          }
        },
        "name": "className",
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
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
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
              }
            ]
          }
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "SafeView",
    "screenshot": "",
    "schema": {
      "componentName": "SafeView",
      "props": {}
    }
  }
];

export default {
  ...SafeViewMeta,
  snippets
};
