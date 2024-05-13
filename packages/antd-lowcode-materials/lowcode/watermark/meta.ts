
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const WatermarkMeta: IPublicTypeComponentMetadata = {
  "componentName": "Watermark",
  "title": "水印",
  category: '反馈',

  "docUrl": "",
  "screenshot": "",
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "width",
            "zh-CN": "宽度"
          }
        },
        "name": "width",
        "setter": {
          "componentName": "NumberSetter",
          "initialValue": 120
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "height",
            "zh-CN": "高度"
          }
        },
        "name": "height",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 64
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "inherit",
            "zh-CN": "全局使用"
          }
        },
        "name": "inherit",
        "setter": {
          "componentName": "BoolSetter",
          "initialValue": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "zIndex",
            "zh-CN": "水印元素"
          }
        },
        "name": "zIndex",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 9
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rotate",
            "zh-CN": "旋转角度"
          }
        },
        "name": "rotate",
        "setter": {
          "componentName": "NumberSetter",
          "initialValue": -22
        }
      },


      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "image",
            "zh-CN": "图片源"
          }
        },
        "name": "image",
        "setter": {
          "componentName": "StringSetter",
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
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "initialValue": "Appthen"
              },
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "StringSetter",
                  }
                },
                "initialValue": [ "Appthen"]
              }
            ]
          }
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
            "en-US": "gap",
            "zh-CN": "gap"
          }
        },
        "name": "gap",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "NumberSetter",
                  }
                },
                "initialValue": [100,100]
              }
            ]
          }
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
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ArraySetter",
                "props": {
                  "itemSetter": {
                    "componentName": "NumberSetter",
                  }
                },
                "initialValue": [50,50]
              }
            ]
          }        }
      },

    ],
    "supports": {
      "style": true,
      "className": true
    },
    component: { isContainer: true } 
    }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "水印",
    "screenshot": "https://cdn.appthen.com/editor/antd/img/Watermark.svg",
    "schema": {
      "componentName": "Watermark",
      "props": {
        "content":'Appthen前端低代码'
      }
    }
  }
];

export default {
  ...WatermarkMeta,
  snippets
};
