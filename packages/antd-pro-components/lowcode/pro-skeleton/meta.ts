
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProSkeletonMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProSkeleton",
  "title": "ProSkeleton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "ProSkeleton",
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
            "en-US": "active",
            "zh-CN": "active"
          }
        },
        "name": "active",
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
            "en-US": "pageHeader",
            "zh-CN": "pageHeader"
          }
        },
        "name": "pageHeader",
        "setter": {
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
            "en-US": "actionButton",
            "zh-CN": "actionButton"
          }
        },
        "name": "actionButton",
        "setter": {
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "toolbar",
            "zh-CN": "toolbar"
          }
        },
        "name": "toolbar",
        "setter": {
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
                "label": "list",
                "value": "list"
              },
              {
                "label": "descriptions",
                "value": "descriptions"
              },
              {
                "label": "result",
                "value": "result"
              }
            ],
            "options": [
              {
                "label": "list",
                "value": "list"
              },
              {
                "label": "descriptions",
                "value": "descriptions"
              },
              {
                "label": "result",
                "value": "result"
              }
            ]
          },
          "initialValue": "list"
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
    "title": "ProSkeleton",
    "screenshot": "",
    "schema": {
      "componentName": "ProSkeleton",
      "props": {}
    }
  }
];

export default {
  ...ProSkeletonMeta,
  snippets
};
