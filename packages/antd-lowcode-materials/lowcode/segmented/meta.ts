
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SegmentedMeta: IPublicTypeComponentMetadata = {
  "componentName": "Segmented",
  "title": "分段控制器",
  "docUrl": "",
  "screenshot": "",
  category: '数据展示',

  "devMode": "proCode",
  "configure": {
    "props": [
           
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "block",
            "zh-CN": "调整父元素"
          },
          "tip": "将宽度调整为父元素宽度的选项"
        },
        "name": "block",
        "description": "Option to fit width to its parent's width",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "是否禁用"
          }
        },
        "name": "disabled",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "控件尺寸"
          },
          "tip": "size | Option to control the display size"
        },
        "name": "size",
        "description": "Option to control the display size",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
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
            ],
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
          "initialValue": "small"
        }
      },

      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "options",
            "zh-CN": "配置项目"
          }
        },
        "name": "options",
        "setter": {
          "componentName": "JsonSetter",
          "isRequired": true,
          "initialValue": []
        }
      },

      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "选中值"
          }
        },
        "name": "value",
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
      },


      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultValue",
            "zh-CN": "默认值"
          }
        },
        "name": "defaultValue",
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

 





    ],
    "supports": {
      "className": true,
      "style": true,
      events:['onChange']
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "分段控制器",
    "screenshot": "https://cdn.appthen.com/assets/appthen-Segmented.svg",
    "schema": {
      "componentName": "Segmented",
      "props": {
        options:['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
      }
    }
  }
];

export default {
  ...SegmentedMeta,
  snippets
};
