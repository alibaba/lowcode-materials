
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
    "package": "@appthen/AoMao",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [

      {
        name: 'data',
        title: "数据源",
        setter: 'TextAreaSetter',
        supportVariable: true,
      },
      {
        name: 'lang',
        title: "语言",
        setter: 'StringSetter',
        defaultValue: "zh-CN",
        supportVariable: true,
      },
      {
        name: 'items',
        title: "工具栏配置",
        setter: 'JsonSetter',
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
            name: 'slotContent',
            title: {
              label: '内容槽位',
              tip: 'slotContent | header和内容之间'
            },
            setter: [
              {   
                "componentName": "SlotSetter",
                initialValue: {
                  type: 'JSSlot',

                  value: []
                }
              }
            ],

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
      events: [
  
      {
        name: 'saveField',
       description:"初始化完成并返回ref操作函数",
       template:
          "saveField(ref,${extParams}){\n// 返回ref操作函数\nconsole.log('ref', ref);}",
      },
    ]
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "AoMao编辑器",
    screenshot: 'https://cdn.appthen.cn/editor/assets/appthen-aomao.svg',
    "schema": {
      "componentName": "AoMao",
      "props": {
        items:[['collapse'], ['undo', 'redo', 'removeformat', 'paintformat'],
        ['heading', 'fontfamily', 'fontsize',], ['fontcolor', 'backcolor', 'image', 'bold', 'italic', 'strikethrough', 'underline', 'icon'],
        ['orderedlist', 'unorderedlist', 'mention', 'lightblock', 'lineheight', 'code', 'alignment', 'tasklist', 'codeblock'], ['quote', 'status', 'selectall', 'hr', 'link']]
        ,contentStyle: {
          "max-width": "720px",
          "margin": " 0 auto",
          "margin-top":"5px",
          "border": "1px dotted silver",
          "min-height": "600px",
          " margin-top": " 20px",
          "border-color": "rgb(229, 231, 235)",
          "padding": "30px",
          "box-sizing": "border-box",
        },
        navStyle:
          {


        }
        
      }
    }
  }
];

export default {
  ...AoMaoMeta,
  snippets
};
