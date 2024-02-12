
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const WaterMarkMeta: IPublicTypeComponentMetadata = {
  "componentName": "WaterMark",
  "title": "WaterMark",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "WaterMark",
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
            "en-US": "markStyle",
            "zh-CN": "水印样式"
          },
          "tip": "markStyle | 水印样式"
        },
        "name": "markStyle",
        "description": "水印样式",
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
            "en-US": "markClassName",
            "zh-CN": "水印类名"
          },
          "tip": "markClassName | 水印类名"
        },
        "name": "markClassName",
        "description": "水印类名",
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
            "en-US": "gapX",
            "zh-CN": "水印之间的水平间距"
          },
          "tip": "gapX | 水印之间的水平间距"
        },
        "name": "gapX",
        "description": "水印之间的水平间距",
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
            "en-US": "gapY",
            "zh-CN": "水印之间的垂直间距"
          },
          "tip": "gapY | 水印之间的垂直间距"
        },
        "name": "gapY",
        "description": "水印之间的垂直间距",
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
            "en-US": "zIndex",
            "zh-CN": "追加的水印元素的z-"
          },
          "tip": "zIndex | 追加的水印元素的z-index"
        },
        "name": "zIndex",
        "description": "追加的水印元素的z-index",
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
            "en-US": "width",
            "zh-CN": "水印的宽度"
          },
          "tip": "width | 水印的宽度"
        },
        "name": "width",
        "description": "水印的宽度",
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
            "en-US": "height",
            "zh-CN": "水印的高度"
          },
          "tip": "height | 水印的高度"
        },
        "name": "height",
        "description": "水印的高度",
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
            "en-US": "offsetTop",
            "zh-CN": "水印在canvas "
          },
          "tip": "offsetTop | 水印在canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置, 即 offsetTop = gapY / 2"
        },
        "name": "offsetTop",
        "description": "水印在canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置, 即 offsetTop = gapY / 2",
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
            "en-US": "offsetLeft",
            "zh-CN": "水印在canvas "
          },
          "tip": "offsetLeft | 水印在canvas 画布上绘制的水平偏移量, 正常情况下，水印绘制在中间位置, 即 offsetTop = gapX / 2"
        },
        "name": "offsetLeft",
        "description": "水印在canvas 画布上绘制的水平偏移量, 正常情况下，水印绘制在中间位置, 即 offsetTop = gapX / 2",
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
            "en-US": "rotate",
            "zh-CN": "水印绘制时，旋转的角"
          },
          "tip": "rotate | 水印绘制时，旋转的角度，单位 °"
        },
        "name": "rotate",
        "description": "水印绘制时，旋转的角度，单位 °",
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
            "en-US": "prefixCls",
            "zh-CN": "ClassName "
          },
          "tip": "prefixCls | ClassName 前缀"
        },
        "name": "prefixCls",
        "description": "ClassName 前缀",
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
            "en-US": "image",
            "zh-CN": "高清印图片源, 为了"
          },
          "tip": "image | 高清印图片源, 为了高清屏幕显示，建议使用 2倍或3倍图，优先使用图片渲染水印。"
        },
        "name": "image",
        "description": "高清印图片源, 为了高清屏幕显示，建议使用 2倍或3倍图，优先使用图片渲染水印。",
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
            "zh-CN": "水印文字内容"
          },
          "tip": "content | 水印文字内容"
        },
        "name": "content",
        "description": "水印文字内容",
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
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
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
            "en-US": "fontColor",
            "zh-CN": "文字颜色"
          },
          "tip": "fontColor | 文字颜色"
        },
        "name": "fontColor",
        "description": "文字颜色",
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
            "en-US": "fontStyle",
            "zh-CN": "文字样式"
          },
          "tip": "fontStyle | 文字样式"
        },
        "name": "fontStyle",
        "description": "文字样式",
        "setter": {
          "componentName": "SelectSetter",
          "props": {
            "dataSource": [
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "none",
                "value": "none"
              },
              {
                "label": "italic",
                "value": "italic"
              },
              {
                "label": "oblique",
                "value": "oblique"
              }
            ],
            "options": [
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "none",
                "value": "none"
              },
              {
                "label": "italic",
                "value": "italic"
              },
              {
                "label": "oblique",
                "value": "oblique"
              }
            ]
          },
          "initialValue": "normal"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fontFamily",
            "zh-CN": "文字族"
          },
          "tip": "fontFamily | 文字族"
        },
        "name": "fontFamily",
        "description": "文字族",
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
            "en-US": "fontWeight",
            "zh-CN": "文字粗细"
          },
          "tip": "fontWeight | 文字粗细"
        },
        "name": "fontWeight",
        "description": "文字粗细",
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
                      "label": "normal",
                      "value": "normal"
                    },
                    {
                      "label": "light",
                      "value": "light"
                    },
                    {
                      "label": "weight",
                      "value": "weight"
                    }
                  ],
                  "options": [
                    {
                      "label": "normal",
                      "value": "normal"
                    },
                    {
                      "label": "light",
                      "value": "light"
                    },
                    {
                      "label": "weight",
                      "value": "weight"
                    }
                  ]
                },
                "initialValue": "normal"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fontSize",
            "zh-CN": "文字大小"
          },
          "tip": "fontSize | 文字大小"
        },
        "name": "fontSize",
        "description": "文字大小",
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
    "title": "WaterMark",
    "screenshot": "",
    "schema": {
      "componentName": "WaterMark",
      "props": {}
    }
  }
];

export default {
  ...WaterMarkMeta,
  snippets
};
