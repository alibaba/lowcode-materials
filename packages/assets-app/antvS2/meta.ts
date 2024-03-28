
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SheetComponentMeta: IPublicTypeComponentMetadata = {
  "componentName": "SheetComponent",
  "title": "SheetComponent",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/antvS2",
    "version": "0.1.0",
    "exportName": "SheetComponent",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [

      {
        name: 'dataCfg',
        title: { label: '数据配置', tip: '数据配置' },
        supportVariable: true,
        // "condition": {
        //   "type": 'JSFunction',
        //  "value": 'target => !target.getProps().getPropValue("advanced")',
        // },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  // {
                  //   name: 'show',
                  //   title: { label: '显示', tip: '是否显示' },
                  //   propType: 'bool',
                  //   initialValue: true,
                  //   setter: 'BoolSetter',
                  // },
                ],
              },
            },
          },
          "JsonSetter","FunctionSetter"
        ]
      },
      {
        name: 'S2Options',
        title: { label: '表格参数配置', tip: '表格参数配置' },
        supportVariable: true,
        // "condition": {
        //   "type": 'JSFunction',
        //  "value": 'target => !target.getProps().getPropValue("advanced")',
        // },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  // {
                  //   name: 'show',
                  //   title: { label: '显示', tip: '是否显示' },
                  //   propType: 'bool',
                  //   initialValue: true,
                  //   setter: 'BoolSetter',
                  // },
                ],
              },
            },
          },
          "JsonSetter","FunctionSetter"
        ]
      },      {
        name: 'S2Theme',
        title: { label: '主题配置', tip: '主题配置' },
        supportVariable: true,
        // "condition": {
        //   "type": 'JSFunction',
        //  "value": 'target => !target.getProps().getPropValue("advanced")',
        // },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  // {
                  //   name: 'show',
                  //   title: { label: '显示', tip: '是否显示' },
                  //   propType: 'bool',
                  //   initialValue: true,
                  //   setter: 'BoolSetter',
                  // },
                ],
              },
            },
          },
          "JsonSetter","FunctionSetter"
        ]
      },
      {
        name: 'S2Event',
        title: { label: '事件配置', tip: '事件配置' },
        supportVariable: true,
        // "condition": {
        //   "type": 'JSFunction',
        //  "value": 'target => !target.getProps().getPropValue("advanced")',
        // },
        setter: [
          "JsonSetter",
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
     
                ],
              },
            },
          },
         "FunctionSetter"
        ]
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
    "title": "SheetComponent",
    "screenshot": "",
    "schema": {
      "componentName": "SheetComponent",
      "props": {
        dataCfg : {
          fields: {
            rows: ['province', 'city'],
            columns: ['type'],
            values: ['price'],
          },
          data: [
            {
              province: "浙江",
              city: "杭州",
              type: "笔",
              price: "1",
            },
            {
              province: "浙江",
              city: "杭州",
              type: "纸张",
              price: "2",
            },
            {
              province: "浙江",
              city: "舟山",
              type: "笔",
              price: "17",
            },
            {
              province: "浙江",
              city: "舟山",
              type: "纸张",
              price: "6",
            },
            {
              province: "吉林",
              city: "长春",
              type: "笔",
              price: "8",
            },
            {
              province: "吉林",
              city: "白山",
              type: "笔",
              price: "12",
            },
            {
              province: "吉林",
              city: "长春",
              type: "纸张",
              price: "3",
            },
            {
              province: "吉林",
              city: "白山",
              type: "纸张",
              price: "25",
            },
            {
              province: "浙江",
              city: "杭州",
              type: "笔",
              cost: "0.5",
            },
            {
              province: "浙江",
              city: "杭州",
              type: "纸张",
              cost: "20",
            },
            {
              province: "浙江",
              city: "舟山",
              type: "笔",
              cost: "1.7",
            },
            {
              province: "浙江",
              city: "舟山",
              type: "纸张",
              cost: "0.12",
            },
            {
              province: "吉林",
              city: "长春",
              type: "笔",
              cost: "10",
            },
            {
              province: "吉林",
              city: "白山",
              type: "笔",
              cost: "9",
            },
            {
              province: "吉林",
              city: "长春",
              type: "纸张",
              cost: "3",
            },
            {
              province: "吉林",
              city: "白山",
              type: "纸张",
              cost: "1",
            }
          ]
        },
        s2Options : {
          width: 600,
          height: 480
        }
      }
    }
  }
];

export default {
  ...SheetComponentMeta,
  snippets
};
