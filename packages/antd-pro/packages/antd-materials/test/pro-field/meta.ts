
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProFieldMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProField",
  "title": "ProField",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/antd-pro",
    "version": "1.0.0-rc.32",
    "exportName": "ProField",
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
            "en-US": "text",
            "zh-CN": "格式化的值"
          }
        },
        "name": "text",
        "setter": {
          "componentName": "JsonSetter",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "valueType",
            "zh-CN": "表单类型"
          }
        },
        "name": "valueType",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "SelectSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "code",
                      "value": "code"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "progress",
                      "value": "progress"
                    },
                    {
                      "label": "select",
                      "value": "select"
                    },
                    {
                      "label": "textarea",
                      "value": "textarea"
                    },
                    {
                      "label": "time",
                      "value": "time"
                    },
                    {
                      "label": "image",
                      "value": "image"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "text",
                      "value": "text"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "money",
                      "value": "money"
                    },
                    {
                      "label": "index",
                      "value": "index"
                    },
                    {
                      "label": "indexBorder",
                      "value": "indexBorder"
                    },
                    {
                      "label": "date",
                      "value": "date"
                    },
                    {
                      "label": "dateWeek",
                      "value": "dateWeek"
                    },
                    {
                      "label": "dateMonth",
                      "value": "dateMonth"
                    },
                    {
                      "label": "dateQuarter",
                      "value": "dateQuarter"
                    },
                    {
                      "label": "dateYear",
                      "value": "dateYear"
                    },
                    {
                      "label": "dateTime",
                      "value": "dateTime"
                    },
                    {
                      "label": "fromNow",
                      "value": "fromNow"
                    },
                    {
                      "label": "dateRange",
                      "value": "dateRange"
                    },
                    {
                      "label": "dateTimeRange",
                      "value": "dateTimeRange"
                    },
                    {
                      "label": "dateWeekRange",
                      "value": "dateWeekRange"
                    },
                    {
                      "label": "dateMonthRange",
                      "value": "dateMonthRange"
                    },
                    {
                      "label": "dateQuarterRange",
                      "value": "dateQuarterRange"
                    },
                    {
                      "label": "dateYearRange",
                      "value": "dateYearRange"
                    },
                    {
                      "label": "timeRange",
                      "value": "timeRange"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "rate",
                      "value": "rate"
                    },
                    {
                      "label": "slider",
                      "value": "slider"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "radioButton",
                      "value": "radioButton"
                    },
                    {
                      "label": "percent",
                      "value": "percent"
                    },
                    {
                      "label": "digit",
                      "value": "digit"
                    },
                    {
                      "label": "digitRange",
                      "value": "digitRange"
                    },
                    {
                      "label": "second",
                      "value": "second"
                    },
                    {
                      "label": "jsonCode",
                      "value": "jsonCode"
                    },
                    {
                      "label": "avatar",
                      "value": "avatar"
                    },
                    {
                      "label": "cascader",
                      "value": "cascader"
                    },
                    {
                      "label": "treeSelect",
                      "value": "treeSelect"
                    },
                    {
                      "label": "color",
                      "value": "color"
                    },
                    {
                      "label": "segmented",
                      "value": "segmented"
                    },
                    {
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "formList",
                      "value": "formList"
                    },
                    {
                      "label": "formSet",
                      "value": "formSet"
                    },
                    {
                      "label": "divider",
                      "value": "divider"
                    },
                    {
                      "label": "dependency",
                      "value": "dependency"
                    }
                  ],
                  "options": [
                    {
                      "label": "code",
                      "value": "code"
                    },
                    {
                      "label": "option",
                      "value": "option"
                    },
                    {
                      "label": "progress",
                      "value": "progress"
                    },
                    {
                      "label": "select",
                      "value": "select"
                    },
                    {
                      "label": "textarea",
                      "value": "textarea"
                    },
                    {
                      "label": "time",
                      "value": "time"
                    },
                    {
                      "label": "image",
                      "value": "image"
                    },
                    {
                      "label": "switch",
                      "value": "switch"
                    },
                    {
                      "label": "text",
                      "value": "text"
                    },
                    {
                      "label": "password",
                      "value": "password"
                    },
                    {
                      "label": "money",
                      "value": "money"
                    },
                    {
                      "label": "index",
                      "value": "index"
                    },
                    {
                      "label": "indexBorder",
                      "value": "indexBorder"
                    },
                    {
                      "label": "date",
                      "value": "date"
                    },
                    {
                      "label": "dateWeek",
                      "value": "dateWeek"
                    },
                    {
                      "label": "dateMonth",
                      "value": "dateMonth"
                    },
                    {
                      "label": "dateQuarter",
                      "value": "dateQuarter"
                    },
                    {
                      "label": "dateYear",
                      "value": "dateYear"
                    },
                    {
                      "label": "dateTime",
                      "value": "dateTime"
                    },
                    {
                      "label": "fromNow",
                      "value": "fromNow"
                    },
                    {
                      "label": "dateRange",
                      "value": "dateRange"
                    },
                    {
                      "label": "dateTimeRange",
                      "value": "dateTimeRange"
                    },
                    {
                      "label": "dateWeekRange",
                      "value": "dateWeekRange"
                    },
                    {
                      "label": "dateMonthRange",
                      "value": "dateMonthRange"
                    },
                    {
                      "label": "dateQuarterRange",
                      "value": "dateQuarterRange"
                    },
                    {
                      "label": "dateYearRange",
                      "value": "dateYearRange"
                    },
                    {
                      "label": "timeRange",
                      "value": "timeRange"
                    },
                    {
                      "label": "checkbox",
                      "value": "checkbox"
                    },
                    {
                      "label": "rate",
                      "value": "rate"
                    },
                    {
                      "label": "slider",
                      "value": "slider"
                    },
                    {
                      "label": "radio",
                      "value": "radio"
                    },
                    {
                      "label": "radioButton",
                      "value": "radioButton"
                    },
                    {
                      "label": "percent",
                      "value": "percent"
                    },
                    {
                      "label": "digit",
                      "value": "digit"
                    },
                    {
                      "label": "digitRange",
                      "value": "digitRange"
                    },
                    {
                      "label": "second",
                      "value": "second"
                    },
                    {
                      "label": "jsonCode",
                      "value": "jsonCode"
                    },
                    {
                      "label": "avatar",
                      "value": "avatar"
                    },
                    {
                      "label": "cascader",
                      "value": "cascader"
                    },
                    {
                      "label": "treeSelect",
                      "value": "treeSelect"
                    },
                    {
                      "label": "color",
                      "value": "color"
                    },
                    {
                      "label": "segmented",
                      "value": "segmented"
                    },
                    {
                      "label": "group",
                      "value": "group"
                    },
                    {
                      "label": "formList",
                      "value": "formList"
                    },
                    {
                      "label": "formSet",
                      "value": "formSet"
                    },
                    {
                      "label": "divider",
                      "value": "divider"
                    },
                    {
                      "label": "dependency",
                      "value": "dependency"
                    }
                  ]
                },
                "initialValue": "codtextarea"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "label",
            "zh-CN": "Label"
          },
          "tip": "label | Label"
        },
        "name": "label",
        "description": "Label",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
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
            "en-US": "onChange",
            "zh-CN": "onChange"
          }
        },
        "name": "onChange",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "mode",
            "zh-CN": "组件的渲染模式类型"
          },
          "tip": "mode | 组件的渲染模式类型"
        },
        "name": "mode",
        "description": "组件的渲染模式类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "read",
                "value": "read"
              },
              {
                "label": "edit",
                "value": "edit"
              },
              {
                "label": "update",
                "value": "update"
              }
            ],
            "options": [
              {
                "label": "read",
                "value": "read"
              },
              {
                "label": "edit",
                "value": "edit"
              },
              {
                "label": "update",
                "value": "update"
              }
            ]
          },
          "initialValue": "read"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "value",
            "zh-CN": "value"
          }
        },
        "name": "value",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "readonly",
            "zh-CN": "readonly"
          }
        },
        "name": "readonly",
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
            "en-US": "light",
            "zh-CN": "轻量模式"
          },
          "tip": "light | 轻量模式"
        },
        "name": "light",
        "description": "轻量模式",
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
            "en-US": "fieldProps",
            "zh-CN": "放置到组件上 pro"
          },
          "tip": "fieldProps | 放置到组件上 props"
        },
        "name": "fieldProps",
        "description": "放置到组件上 props",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "plain",
            "zh-CN": "精简模式"
          },
          "tip": "plain | 简约模式"
        },
        "name": "plain",
        "description": "简约模式",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProField",
    "screenshot": "",
    "schema": {
      "componentName": "ProField",
      "props": {}
    }
  }
];

export default {
  ...ProFieldMeta,
  snippets
};
