
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SchemaBuilderObjMeta: IPublicTypeComponentMetadata = {
  "componentName": "SchemaBuilderObj",
  "title": "form编辑器",
  group: '高级组件',
  category: '编辑器',
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/form",
    "version": "0.1.0",
    "exportName": "SchemaBuilderObj",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  }, 
   "configure": {
    "props": [
      {
        "title": "默认数据",
        "name": "defaultValue",
        "setter": 'JsonSetter',
        supportVariable: true,
      },
      {
        "title": "高度",
        "name": "heightData",
        "setter": 'StringSetter',
        supportVariable: true,
        defaultValue:'90vh',
      },
      {
        "title": "导入按钮",
        "name": "importBtn",
        "setter": 'BoolSetter',
        supportVariable: true,
        defaultValue:false,
      },
      {
        "title": "导出按钮",
        "name": "exportBtn",
        "setter": 'BoolSetter',
        supportVariable: true,
        defaultValue:false,
      },
      {
        "title": "清除按钮",
        "name": "clearBtn",
        "setter": 'BoolSetter',
        supportVariable: true,
        defaultValue:false,
      },
      {
        "title": "logo标志",
        "name": "logo",
        setter:{
          componentName: 'SlotSetter',
          title: '标题插槽',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },        
        supportVariable: true,
        // defaultValue:{},
      }
    ],
    "supports": {
      events: ['releaseOnClick','saveOnClick','onMount'],
      
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "form编辑器",
    "screenshot": "https://cdn.itq168.com/img/form_fill.svg",
    "schema": {
      "componentName": "SchemaBuilderObj",
      "props": {}
    }
  }
];

export default {
  ...SchemaBuilderObjMeta,
  snippets
};
