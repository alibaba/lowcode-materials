
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AoMaoMeta: IPublicTypeComponentMetadata = {
  "componentName": "AoMao",
  "title": "AoMao编辑器",
  "docUrl": "",
  group: '精选组件',
  category: '编辑器',
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "AoMao",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        name: 'lang',
        title: "语言",
        setter: 'StringSetter',
        defaultValue: "zh-CN",
        supportVariable: true,

      },
      {
        name: 'readonly',
        title: "编辑只读",
        setter: 'BoolSetter',
        supportVariable: true,

      },
      {
        name: 'autoPrepend',
        title: "头部空行",
        setter: 'BoolSetter',
        supportVariable: true,

      },
      {
        name: 'autoAppend',
        title: "尾部空行",
        setter: 'BoolSetter',
        supportVariable: true,

      },
      {
        name: 'visible',
        title: "等待",
        setter: 'BoolSetter',
        defaultValue: false,
        supportVariable: true,

      },


      {
        name: 'contentStyle',
        title: '内容样式',
        type: 'group',
        extraProps: {
          display: 'entry'
        },
        items: [
          {
            name: 'contentStyle',
            title: {
              label: '样式设置',
              tip: 'contentStyle | 用于设置 Drawer 弹出层的样式'
            },
            setter: 'StyleSetter',
            extraProps: {
              display: 'block'
            }
          }
        ]
      },
      {
        name: 'navStyle',
        title: '头部样式',
        type: 'group',
        extraProps: {
          display: 'entry'
        },
        items: [
          {
            name: 'navStyle',
            title: {
              label: '样式设置',
              tip: 'drawerStyle | 用于设置 Drawer 弹出层的样式'
            },
            setter: 'StyleSetter',
            extraProps: {
              display: 'block'
            }
          }
        ]
      },
      {
        name: 'data',
        type: 'group',
        display: 'accordion',

        title: {
          label: '图片配置',
        },
        items: [
          {
            name: 'Images.action',
            title: "请求地址",
            setter: 'StringSetter',
            supportVariable: true,

          },
          {
            name: 'Images.crossOrigin',
            title: "是否跨域",
            setter: 'BoolSetter',
            defaultValue: true,
            supportVariable: true,

          },

          {
            name: 'Images.withCredentials',
            title: "跨域withCredentials",
            setter: 'BoolSetter',
            defaultValue: true,
            supportVariable: true,

          },
          {
            name: 'Images.headers',
            title: "请求头",
            setter: 'JsonSetter',
            supportVariable: true,

          },
          {
            name: 'Images.contentType',
            title: "请求头",
            setter: 'StringSetter',
            defaultValue: "multipart/form-data",
            supportVariable: true,

          },
          {
            name: 'Images.accept',
            title: "文件类型",
            setter: 'StringSetter',
            defaultValue: "svg,png,bmp,jpg,jpeg,gif,tif,tiff,emf,webp",
            supportVariable: true,

          },
          {
            name: 'Images.limitSize',
            title: "文件大小",
            setter: 'StringSetter',
            defaultValue: "1024 * 1024 * 1",
            supportVariable: true,

          },

          {
            name: 'Images.data',
            title: "附带数据",
            setter: 'JsonSetter',
            supportVariable: true,

          },
          {
            name: 'Images.name',
            title: "文件上传名称",
            setter: 'StringSetter',
            defaultValue: "file",
            supportVariable: true,
          },

        ],
      },

    ],
    "supports": {
      "style": true,
      className: true,
      events: ["saveField"]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AoMao编辑器",
    screenshot: 'https://cdn.itq168.com/img/apmao%E7%BC%96%E8%BE%91%E5%99%A8.svg',
    "schema": {
      "componentName": "AoMao",
      "props": {
        contentStyle: {
          "max-width": "720px",
          "margin": " 0 auto",
          "border": "1px dotted silver",
          "height": "100vh",
          " margin-top": " 20px",
          "border-color": "rgb(229, 231, 235)",
          "padding": "30px",
          "box-sizing": "border-box",
        },
        navStyle:
          {

           " overscroll-behavior": "contain",
            "border-width": "1px",
            "border-style": "solid",
            "--tw-border-opacity": 1,
            "border-top-color": "rgb(229 231 235 / var(--tw-border-opacity))",
            "border-bottom-color": "rgb(229 231 235 / var(--tw-border-opacity))",
            "padding": "0.5rem",
        }
        
      }
    }
  }
];

export default {
  ...AoMaoMeta,
  snippets
};
