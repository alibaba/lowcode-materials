
const snippets= [
  {
    "title": "颜色选择器",
    "screenshot": "https://cdn.appthen.com/editor/antd/img/ColorPicker.svg",
    "schema": {
      "componentName": "ColorPicker",
      "props": {}
    }
  }
];
export default {
snippets,
  "componentName": "ColorPicker",
  "title": "颜色选择器",
  category: '反馈',
  "docUrl": "",
  "screenshot": "https://cdn.appthen.com/editor/antd/img/ColorPicker.svg",
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "禁用"
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
            "en-US": "defaultValue",
            "zh-CN": "默认值"
          },
        },
        "name": "defaultValue",
        "setter": {
          "componentName": "ColorSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "*颜色值"
          },
        },
        "name": "value",
        "setter": {
          "componentName": 'ColorSetter',
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "open",
            "zh-CN": "打开"
          }
        },
        "name": "open",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showText",
            "zh-CN": "显示颜色文本"
          }
        },
        "name": "showText",
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
            "en-US": "placement",
            "zh-CN": "窗口位置"
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
            "en-US": "trigger",
            "zh-CN": "触发方式"
          }
        },
        "name": "trigger",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "点击",
                "value": "click"
              },
              {
                "label": "触摸",
                "value": "hover"
              }
            ],
            "options": [
              {
                "label": "点击",
                "value": "click"
              },
              {
                "label": "触摸",
                "value": "hover"
              }
            ]
          },
          "initialValue": "click"
        }
      },


      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "trigger",
            "zh-CN": "大小"
          }
        },
        "name": "size",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "options": [
              {
                "label": "小",
                "value": "small"
              },
              {
                "label": "中",
                "value": "middle"
              },
              {
                "label": "大",
                "value": "large"
              }
            ]
          },
          "initialValue": "click"
        }
      },

      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "format",
            "zh-CN": "格式化"
          }
        },
        "name": "format",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ],
            "options": [
              {
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ]
          },
          "initialValue": "hex"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultFormat",
            "zh-CN": "格式值"
          }
        },
        "name": "defaultFormat",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ],
            "options": [
              {
                "label": "hex",
                "value": "hex"
              },
              {
                "label": "rgb",
                "value": "rgb"
              },
              {
                "label": "hsb",
                "value": "hsb"
              }
            ]
          },
          "initialValue": "hex"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "allowClear",
            "zh-CN": "允许清除颜色"
          }
        },
        "name": "allowClear",
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
            "en-US": "allowClear",
            "zh-CN": "销毁弹窗"
          }
        },
        "name": "destroyTooltipOnHide",
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
            "en-US": "allowClear",
            "zh-CN": "配置箭头"
          },
          tip: '配置弹出的箭头',

        },
        "name": "arrow",
        "setter": {
          "componentName": "BoolSetter",
          "initialValue": true
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true,
      "events":['onOpenChange','onChange','onChangeComplete','onFormatChange','onClear']
    },
    "component": {}
  }
};


// export default {
//   ...ColorPickerMeta,
//   snippets
// };
