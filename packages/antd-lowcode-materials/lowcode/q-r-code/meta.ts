
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const QRCodeMeta: IPublicTypeComponentMetadata = {
  "componentName": "QRCode",
  "title": "二维码",
  category: '反馈',
  "docUrl": "",
  "screenshot": "",
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "值"
          }
        },
        "name": "value",
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
            "en-US": "bordered",
            "zh-CN": "边框"
          }
        },
        "name": "bordered",
        "setter": {
          "componentName": "BoolSetter",
          "initialValue": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "errorLevel",
            "zh-CN": "纠错等级"
          }
        },
        "name": "errorLevel",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "L",
                "value": "L"
              },
              {
                "label": "M",
                "value": "M"
              },
              {
                "label": "Q",
                "value": "Q"
              },
              {
                "label": "H",
                "value": "H"
              }
            ],
            "options": [
              {
                "label": "L",
                "value": "L"
              },
              {
                "label": "M",
                "value": "M"
              },
              {
                "label": "Q",
                "value": "Q"
              },
              {
                "label": "H",
                "value": "H"
              }
            ]
          },
          "initialValue": "L"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "status",
            "zh-CN": "状态"
          }
        },
        "name": "status",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "active",
                "value": "active"
              },
              {
                "label": "expired",
                "value": "expired"
              },
              {
                "label": "loading",
                "value": "loading"
              }
            ],
            "options": [
              {
                "label": "active",
                "value": "active"
              },
              {
                "label": "expired",
                "value": "expired"
              },
              {
                "label": "loading",
                "value": "loading"
              }
            ]
          },
          "initialValue": "active"
        }
      },

      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "渲染类型"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "canvas",
                "value": "canvas"
              },
              {
                "label": "svg",
                "value": "svg"
              }
            ],
            "options": [
              {
                "label": "canvas",
                "value": "canvas"
              },
              {
                "label": "svg",
                "value": "svg"
              }
            ]
          },
          "initialValue": "svg"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "二维码大小"
          }
        },
        "name": "size",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 160
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "颜色"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "ColorSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "bgColor",
            "zh-CN": "背景颜色"
          }
        },
        "name": "bgColor",
        "setter": {
          "componentName": "ColorSetter",
          "isRequired": false,
        }
      },
      {
        title: '内部图片',
        display: 'block',
        type: 'group',
        items: [
          {
            "title": {
              "label": {
                "type": "i18n",
                "en-US": "icon",
                "zh-CN": "图片地址"
              }
            },
            "name": "icon",
            "setter": {
              "componentName": "StringSetter",
              "isRequired": false,
            }
          },
          {
            "title": {
              "label": {
                "type": "i18n",
                "en-US": "iconSize",
                "zh-CN": "图片大小"
              }
            },
            "name": "iconSize",
            "setter": {
              "componentName": "NumberSetter",
              "isRequired": false,
              "initialValue": 40
            }
          },
        ]},
    ],
    "supports": {
      "className": true,
      "events": [
        {
          "name": "onRefresh"
        }
      ],
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "二维码",
    "screenshot": "https://cdn.appthen.com/assets/Appthen-q.svg",
    "schema": {
      "componentName": "QRCode",
      "props": {
        value:'www.Appthen.com',
        color:'#000000'

      }
    }
  }
];

export default {
  ...QRCodeMeta,
  snippets
};
