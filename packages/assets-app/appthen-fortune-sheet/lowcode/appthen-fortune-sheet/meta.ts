
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AppthenFortuneSheetMeta: IPublicTypeComponentMetadata = {
  "componentName": "AppthenFortuneSheet",
  "title": "excel表格",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  group: '高级组件',
  category: '编辑器',
  "npm": {
    "package": "@appthen/fortuneSheet",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "height",
            "zh-CN": "高度"
          }
        },
        "name": "height",
        "setter": [
          {
            "componentName": "StringSetter",
            "isRequired": true,
            "initialValue": '600px'
          },
        ]
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "width",
            "zh-CN": "宽度"
          }
        },
        "name": "width",
        "setter": [
          {
            "componentName": "StringSetter",
            "isRequired": true,
            "initialValue": '100%'
          },
        ]
      },


      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "data",
            "zh-CN": "数据源"
          }
        },
        "name": "data",
        "setter": [
          {
            "componentName": "JsonSetter",
            "isRequired": true,
            "initialValue": {}
          },
          "FunctionSetter"
        ]
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "lang",
            "zh-CN": "语言"
          }
        },
        "name": "lang",
        "setter": {
          "componentName": "SelectSetter",
          "isRequired": true,
          "initialValue": "zh",
          props:
      {
        options: [
          {
            "label": "中文",
            "value": "zh"
          },
          {
            "label": "英文",
            "value": "en"
          },
          {
            "label": "繁体中文",
            "value": "zh_tw"
          },
          {
            "label": "西班牙文",
            "value": "es"
          },
        ]
      } 
          }

      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ref",
            "zh-CN": "ref"
          }
        },
        "name": "ref",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
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
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "column",
            "zh-CN": "默认列数量"
          }
        },
        "name": "column",
        "setter": {
          "componentName": "NumberSetter",
          initialValue:60,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "row",
            "zh-CN": "默认行数量"
          }
        },
        "name": "row",
        "setter": {
          "componentName": "NumberSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showToolbar",
            "zh-CN": "工具栏显示"
          }
        },
        "name": "showToolbar",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rowHeaderWidth",
            "zh-CN": "行区域宽度"
          }
        },
        "name": "rowHeaderWidth",
        "setter": {
          "componentName": "NumberSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "columnHeaderHeight",
            "zh-CN": "列区域宽度"
          }
        },
        "name": "columnHeaderHeight",
        "setter": {
          "componentName": "NumberSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "toolbarItems",
            "zh-CN": "工具栏显示类型"
          }
        },
        "name": "toolbarItems",
        "setter": {
          "componentName": "JsonSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showSheetTabs",
            "zh-CN": "底部按钮"
          }
        },
        "name": "showSheetTabs",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "cellContextMenu",
            "zh-CN": "右键菜单"
          }
        },
        "name": "cellContextMenu",
        "setter": {
          "componentName": "JsonSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "sheetTabContextMenu",
            "zh-CN": "sheetTab右键菜单"
          }
        },
        "name": "sheetTabContextMenu",
        "setter": {
          "componentName": "JsonSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "showFormulaBar",
            "zh-CN": "公式栏"
          }
        },
        "name": "showFormulaBar",
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "defaultFontSize",
            "zh-CN": "字体默认大小"
          }
        },
        "name": "defaultFontSize",
        "setter": {
          "componentName": "NumberSetter",
        }
      },
    ],
    "supports": {
      "style": true,
      events:[
        {
          name:'onChange',
          description:'更改回调',
          template:'function (data) {\n  console.log(data);\n}'
        },
        {
          name:'applyOp',
          description:'在线协同场景',
        }
      ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "excel表格",
    "screenshot": "https://cdn.disscode.com/assets/appthen-Excel2.svg",
    "schema": {
      "componentName": "AppthenFortuneSheet",
      "props": {
        "toolbarItems": [
          "undo",
          "redo",
          "format-painter",
          "clear-format",
          "|",
          "currency-format",
          "percentage-format",
          "number-decrease",
          "number-increase",
          "format",
          "font-size",
          "|",
          "bold",
          "italic",
          "strike-through",
          "underline",
          "|",
          "font-color",
          "background",
          "border",
          "merge-cell",
          "|",
          "horizontal-align",
          "vertical-align",
          "text-wrap",
          "text-rotation",
          "|",
          "freeze",
          "sort",
          "image",
          "comment",
          "quick-formula"
        ],
        "cellContextMenu": [
          "copy",
          "paste",
          "|",
          "insert-row",
          "insert-column",
          "delete-row",
          "delete-column",
          "delete-cell",
          "hide-row",
          "hide-column",
          "clear",
          "sort",
          "filter",
          "chart",
          "image",
          "link",
          "data",
          "cell-format"
        ],
        "sheetTabContextMenu": [
          "delete",
          "copy",
          "rename",
          "color",
          "hide",
          "|",
          "move"
        ],
        "data": [
          {
            "name": "Sheet1"
          }
        ],
        "lang": "zh",
        "height": "600px",
        "width": "100%",
        "column": 60,
        "row": 30,
        "showToolbar": true,
        "showSheetTabs": true,
        "showFormulaBar": true,
        "defaultFontSize": 12
      },
    }
    
  }
];

export default {
  ...AppthenFortuneSheetMeta,
  snippets
};
