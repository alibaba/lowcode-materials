
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SchemaBuilderObjMeta: ComponentMetadata = {
  "componentName": "SchemaBuilderObj",
  "title": "二代表单设计器",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "loco-form",
    "version": "0.1.0",
    "exportName": "SchemaBuilderObj",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
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
        "setter": 'JsonSetter',
        supportVariable: true,
        defaultValue:{},
      }
    ],
    "supports": {
      events: ['releaseOnClick','saveOnClick'],
      
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "SchemaBuilderObj",
    "screenshot": "",
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
