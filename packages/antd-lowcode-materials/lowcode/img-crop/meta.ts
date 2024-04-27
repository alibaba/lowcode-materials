
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ImgCropMeta: ComponentMetadata = {
  "componentName": "ImgCrop",
  "title": "裁剪上传",
  "docUrl": "",
  "screenshot": "",
  category: '表单',
  "devMode": "proCode",
  // "npm": {
  //   "package": "@seada/antd-materials",
  //   "version": "1.0.0-rc.30",
  //   "exportName": "ImgCrop",
  //   "main": "src/index.tsx",
  //   "destructuring": true,
  //   "subName": ""
  // },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "quality",
            "zh-CN": "图片质量"
          },
          tip: '裁切图片质量，0 到 1 之间'
        },
        "name": "quality",
        "setter": {
          "componentName": "StringSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "fillColor",
            "zh-CN": "填充色"
          },
          tip: '裁切图像填充色'

        },
        "name": "fillColor",
        "setter": {
          "componentName": "ColorSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "zoomSlider",
            "zh-CN": "图片缩放"
          }
          ,       tip: '图片缩放控制          '

        },
        "name": "zoomSlider",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rotationSlider",
            "zh-CN": "图片旋转"
          }         ,       tip: '图片旋转控制'

        },
        "name": "rotationSlider",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "aspectSlider",
            "zh-CN": "比例控制"
          }
        },
        "name": "aspectSlider",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showReset",
            "zh-CN": "显示重置"
          }
        },
        "name": "showReset",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "resetText",
            "zh-CN": "重置文字"
          }
        },
        "name": "resetText",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "aspect",
            "zh-CN": "宽高比"
          }
        },
        "name": "aspect",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "minZoom",
            "zh-CN": "缩小倍数"
          }
        },
        "name": "minZoom",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "maxZoom",
            "zh-CN": "放大倍数"
          }
        },
        "name": "maxZoom",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cropShape",
            "zh-CN": "裁剪区域"
          }
        },
        "name": "cropShape",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "矩形",
                "value": "rect"
              },
              {
                "label": "圆形",
                "value": "round"
              }
            ],
            "options": [
              {
                "label": "矩形",
                "value": "rect"
              },
              {
                "label": "圆形",
                "value": "round"
              }
            ]
          },
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showGrid",
            "zh-CN": "九宫格"
          }
        },
        "name": "showGrid",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cropperProps",
            "zh-CN": "cropperProps"
          }
        },
        "name": "cropperProps",
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
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "modalClassName",
            "zh-CN": "弹窗class"
          }
        },
        "name": "modalClassName",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "modalTitle",
            "zh-CN": "弹窗标题"
          }
        },
        "name": "modalTitle",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "modalWidth",
            "zh-CN": "弹窗宽度"
          }
        },
        "name": "modalWidth",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "modalOk",
            "zh-CN": "确认文字"
          }
        },
        "name": "modalOk",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "modalCancel",
            "zh-CN": "取消文字"
          }
        },
        "name": "modalCancel",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onModalOk",
            "zh-CN": "onModalOk"
          }
        },
        "name": "onModalOk",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "onModalCancel",
            "zh-CN": "取消回调"
          }
        },
        "name": "onModalCancel",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "modalProps",
            "zh-CN": "modalProps"
          }
        },
        "name": "modalProps",
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
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "beforeCrop",
            "zh-CN": "上传回调"
          }
        },
        "name": "beforeCrop",
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
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
              }
            ]
          }
        }
      }
    ],
    
    "supports": {
      "style": true
    },
    component: { isContainer: true } ,
  }
};
const snippets: Snippet[] = [
  {
    "title": "裁剪上传",
    "screenshot": "https://cdn.appthen.com/assets/appthen-imgcrop.svg",
    "schema": {
      "componentName": "ImgCrop",
      "props": {
        quality:'0,4',
        zoomSlider:true,
        rotationSlider:false,
        aspectSlider:false,
        showReset:true,
        resetText:'重置',
        aspect:'1',
        minZoom:1,
        maxZoom:3,
        cropShape:'rect',
        showGrid:false,
        modalTitle:'图片编辑',
        modalWidth:400,
        modalOk:'确认',
        modalCancel:'取消',
      },
      children: [
       {
          componentName: 'Upload',
          props: {},
          children: {
            componentName: 'Button',
            props: {
              children: 'Upload',
            },
          },
        },
      ],
    }
  }
];

export default {
  ...ImgCropMeta,
  snippets
};
