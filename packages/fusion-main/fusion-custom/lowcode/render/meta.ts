
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const renderMeta: ComponentMetadata = {
  group: '自定义组件',
  "componentName": "render",
  "title": "vditor渲染",
  category: '编辑器',
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "eagle-custom-material-ui",
    "version": "0.1.0",
    "exportName": "render",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "默认数据",
        "name": "data",
        supportVariable: true,
        "setter": {
          "componentName": "StringSetter",
        }
      },
      {
        "title": "标题添加锚点",
        "name": "anchor",
        supportVariable: true,
        defaultValue: 0,
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                value: 0,
                title: '不渲染',
              },
              {
                value: 1,
                title: '渲染于标题前',
              },
              {
                value: 2,
                title: '渲染于标题后',
              },
            ],
          },
        },
      },
      {
        "title": "选中阅读",
        "name": "speech.enable",
        supportVariable: true,
        defaultValue: false,
        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": "默认模式",
        "name": "mode",
        supportVariable: true,
        "setter": {
          "componentName": "StringSetter",
        }
      },
      {
        "title":"cdn",
        "name": "cdn",
        supportVariable: true,
        defaultValue: '',
        setter:['StringSetter'],
      },
      {
        "title": "图片懒加载",
        "name": "lazyLoadImage",
        supportVariable: true,
        defaultValue: '',

        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                value: 'Loading',
                title: '启用',
              },
              {
                value: '',
                title: '禁用',
              },

            ],
          },
        },
      },
      {
        title: 'TOC章节',
        type: 'group',
        display: 'block',
        items: [
          {
            "title": "是否显示",
            "name": "tocShow",
            supportVariable: true,
            defaultValue: true,
            "setter": ['BoolSetter']
          },
          {
            "title": "toc宽度",
            "name": "spacing",
            supportVariable: true,
            "setter": {
              "componentName": "NumberSetter",
            }
          },
        ]
      },

      {
        title: 'markdown',
        type: 'group',
        display: 'block',
        items: [
          {
            "title":"自动空格",
            "name": "markdown.autoSpace",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"自动矫正术语",
            "name": "markdown.fixTermTypo",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"段落开头空两个",
            "name": "markdown.paragraphBeginningSpace",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"插入目录",
            "name": "markdown.toc",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
        ]
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "vditor渲染",
    "screenshot": "https://cdn.itq168.com/img/20221016105708.png?imageslim",
    "schema": {
      "componentName": "render",
      "props": {
        data:"## 标题1 \n 测试  \n  ## 标题2  \n   ### 标题3 \n 测试 ",
        spacing:20,
        cdn:'https://unpkg.com/vditor@3.9.1'

      }
    }
  }
];

export default {
  ...renderMeta,
  snippets
};
