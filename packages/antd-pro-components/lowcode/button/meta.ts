
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ButtonMeta: IPublicTypeComponentMetadata = {
  "componentName": "Button",
  "title": "Button",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "TableDropdown",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Button"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "menus",
            "zh-CN": "menus"
          }
        },
        "name": "menus",
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
                          "en-US": "name",
                          "zh-CN": "name"
                        }
                      },
                      "name": "name",
                      "setter": {
                        "componentName": "SlotSetter",
                        "props": {
                          "mode": "node"
                        },
                        "isRequired": true,
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
            "en-US": "onSelect",
            "zh-CN": "onSelect"
          }
        },
        "name": "onSelect",
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
    "title": "Button",
    "screenshot": "",
    "schema": {
      "componentName": "Button",
      "props": {}
    }
  }
];

export default {
  ...ButtonMeta,
  snippets
};
