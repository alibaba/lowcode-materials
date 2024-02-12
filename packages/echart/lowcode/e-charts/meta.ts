
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const EChartsMeta: IPublicTypeComponentMetadata = {
  "componentName": "ECharts",
  "title": "图表",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-echarts",
    "version": "0.1.0",
    "exportName": "ECharts",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  group: '原子组件',
  category: '展示',
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "option",
            "zh-CN": "图表配置"
          }
        },
        "name": "option",
        "setter": {
          "componentName": "JsonSetter",
          "initialValue": {}
        }
      }
    ],
    publicMethods: [
      {
        name: 'refresh',
        desc: '刷新',
        code: 'refresh()',
      },
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "图表",
    "screenshot": "https://cdn.disscode.com/FvRQ-vh132wSuT4XOyTOCpifKYmV",
    "schema": {
      "componentName": "ECharts",
      "props": {
        option: {
          "xAxis": {
              "type": "category",
              "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          "yAxis": {
              "type": "value"
          },
          "series": [{
              "data": [120, 200, 150, 80, 70, 110, 130],
              "type": "bar",
              "showBackground": true,
              "backgroundStyle": {
                  "color": "rgba(220, 220, 220, 0.8)"
              }
          }]
      }
      }
    }
  }
];

export default {
  ...EChartsMeta,
  snippets
};
