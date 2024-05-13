
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AnchorMeta: IPublicTypeComponentMetadata = {
  "componentName": "Anchor",
  "title": "锚点",
  "docUrl": "",
  category: '导航',
  "screenshot": "",
  "devMode": "proCode",
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "offsetTop",
            "zh-CN": "距离窗口偏移量"
          }
        },
        "name": "offsetTop",
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
            "en-US": "bounds",
            "zh-CN": "锚点区域边界"
          }
        },
        "name": "bounds",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "affix",
            "zh-CN": "固定模式"
          }
        },
        "name": "affix",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": true,
          "initialValue": true
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showInkInFixed",
            "zh-CN": "是否显示小方块"
          }
        },
        "name": "showInkInFixed",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "getContainer",
            "zh-CN": "指定容器"
          }
        },
        "name": "getContainer",
        "setter": {
          "componentName": "FunctionSetter",
          "isRequired": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "getCurrentAnchor",
            "zh-CN": "自定义高亮的锚点"
          },
          "tip": "自定义高亮的锚点"
        },
        "name": "getCurrentAnchor",
        "description": "Return customize highlight anchor",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "targetOffset",
            "zh-CN": "Scroll to "
          },
          "tip": "targetOffset | Scroll to target offset value, if none, it's offsetTop prop value or 0."
        },
        "name": "targetOffset",
        "description": "Scroll to target offset value, if none, it's offsetTop prop value or 0.",
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
            "en-US": "items",
            "zh-CN": "数据源"
          }
        },
        "name": "items",
        "setter": "JsonSetter"
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "direction",
            "zh-CN": "方向"
          }
        },
        "name": "direction",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "垂直",
                "value": "vertical"
              },
              {
                "label": "水平",
                "value": "horizontal"
              }
            ],
            "options": [
              {
                "label": "垂直",
                "value": "vertical"
              },
              {
                "label": "水平",
                "value": "horizontal"
              }
            ]
          },
          "initialValue": "vertical"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "replace",
            "zh-CN": "replace"
          }
        },
        "name": "replace",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true,
      events:['onClick','onChange']
    },
    "component": {
      "isContainer": true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "锚点",
    "screenshot": "https://cdn.appthen.com/editor/antd/img/Anchor.svg",
    "schema": {
      "componentName": "Anchor",
      "props": {
        items:[{
          "key": "part-1",
          "href": "#k1",
          "title": "Part 1"
      }, {
          "key": "part-2",
          "href": "#k2",
          "title": "Part 2"
      }, {
          "key": "part-3",
          "href": "#k3",
          "title": "Part 3"
      }]
      }
    }
  }
];

export default {
  ...AnchorMeta,
  snippets
};
