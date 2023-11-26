
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const navapiMeta: ComponentMetadata = {
  "componentName": "navapi",
  "title": "导航",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  group: '自定义组件',
  category: '系统功能',
  "npm": {
    "package": "eagle-custom-material-ui",
    "version": "1.1.6",
    "exportName": "navapi",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "数据源",
        "name": "data",
        "description": "html",
        supportVariable: true,
        "setter": ['JsonSetter']
      },
      {
        "title": "导航布局",
        "name": "direction",
        supportVariable: true,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '水平',
                value: 'hoz',
              },
              {
                label: '垂直',
                value: 'ver',
              },
            ],
          },
        }
      }
      ,
      {
        "title": "导航类型",
        "name": "type",
        supportVariable: true,
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '普通',
                value: 'normal',
              },
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '次要',
                value: 'secondary',
              },
              {
                label: '线形',
                value: 'line',
              },
            ],
          },
        }
      },
      {
        "title": "展开模式",
        "name": "openMode",
        supportVariable: true,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '单个',
                value: 'single',
              },
              {
                label: '多个',
                value: 'multiple',
              },
            ],
          },
        }
      },
      {
        "title": "触发方式",
        "name": "triggerType",
        supportVariable: true,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '点击',
                value: 'click',
              },
              {
                label: '触发',
                value: 'hover',
              },
            ],
          },
        }
      },
      {
        "title": "子菜单模式",
        "name": "mode",
        supportVariable: true,
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: 'inline',
                value: 'inline',
              },
              {
                label: 'popup',
                value: 'popup',
              },
            ],
          },
        }
      },
      {
        "title": "默认展开所有",
        "name": "defaultOpenAll",
        supportVariable: false,
        setter: 'BoolSetter'
      },
      {
        "title": "子导航缩进距离",
        "name": "inlineIndent",
        supportVariable: true,
        setter: 'NumberSetter'
      },
      {
        "title": "只显示图标",
        "name": "iconOnly",
        supportVariable: true,
        defaultValue:false,
        setter: 'BoolSetter'
      },
      {
        "title": "是否嵌入模式",
        "name": "embeddable",
        supportVariable: true,
        defaultValue:false,
        setter: 'BoolSetter'
      },
      {
        "title": "右侧箭头",
        "name": "hasArrow",
        supportVariable: true,
        setter: {
          componentName: 'BoolSetter',
        }
      },
      {
        "title": "选中的value",
        "name": "selectedKeys",
        supportVariable: true,
        setter: {
          componentName: 'JsonSetter',
        }
      },
      {
        "title": "初始化选中的value",
        "name": "defaultSelectedKeys",
        supportVariable: true,
        setter: {
          componentName: 'JsonSetter',
        }
      }
    ],
    "supports": {
      "style": true,
      events: ['onSelect'],

    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "导航",
    "screenshot": "https://cdn.itq168.com/img/20230212164713.png?imageslim",
    "schema": {
      "componentName": "navapi",
      "props": {
        inlineIndent:20,
        data:[
          {
            "label": "菜单项一",
            "value": "key1",
            "children": [
              {
                "label": "选项一",
                "value": "key1-1"
              },
              {
                "label": "选项二",
                "value": "key1-2"
              }
            ]
          },
          {
            "label": "菜单项二",
            "value": "key2",
            "children": [
              {
                "label": "选项一",
                "value": "key2-1"
              },
              {
                "label": "选项二",
                "value": "key2-2"
              }
            ]
          },
          {
            "label": "菜单项三",
            "value": "key3"
          }
        ]
      }
    }
  }
];

export default {
  ...navapiMeta,
  snippets
};
