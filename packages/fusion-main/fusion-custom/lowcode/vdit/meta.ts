
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const vditMeta: ComponentMetadata = {
  group: '自定义组件',
  "componentName": "vdit",
  "title": "vditor编辑器",
  category: '编辑器',
  "docUrl": "",
  "screenshot": "",
  "npm": {
    "package": "eagle-custom-material-ui",
    "version": "0.1.0",
    "exportName": "vdit",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [

      {
        title: '基础选项',
        type: 'group',
        display: 'block',
        items: [
          {
            "title":"当前数据",
            "name": "value",
            defaultValue: "测试数据",
            supportVariable: true,

            "setter": {
              "componentName": "StringSetter",
              },
            
          },
          {
            "title":"高度",
            "name": "height",
            supportVariable: true,

            defaultValue: '400px',
            setter:['StringSetter'],
          },
          {
            "title":"毫秒间隔",
            "name": "delay",
            supportVariable: true,
            defaultValue: 1000,
            setter:['NumberSetter'],
          },
          {
            "title":"全屏层级",
            "name": "fullscreen.index",
            supportVariable: true,

            defaultValue: 99999,
            setter:['NumberSetter'],
          },
          {
            "title":"宽度",
            "name": "width",
            supportVariable: true,

            defaultValue: 'auto',
            setter:['StringSetter'],
          },

          {
            "title":"图标风格",
            "name": "icon",
            defaultValue: 'material',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: 'ant',
                    value: 'ant',
                  },
                  {
                    label: 'material',
                    value: 'material',
                  },
                ],
              },
            },
          },
          {
            "title":"编辑模式",
            "name": "mode",
            defaultValue: 'wysiwyg',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: '所见即所得',
                    value: 'wysiwyg',
                  },
                  {
                    label: '即时渲染',
                    value: 'ir',
                  },
                  {
                    label: '分屏预览',
                    value: 'ir',
                  },
                ],
              },
            },
          },
          {
            "title":"主题",
            "name": "theme",
            defaultValue: 'classic',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: 'classic',
                    value: 'classic',
                  },
                  {
                    label: 'dark',
                    value: 'dark',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        title: '工具栏',
        type: 'group',
        display: 'block',
        items: [
          {
            "title":"cdn",
            "name": "cdn",
            supportVariable: true,
            defaultValue: '',
            setter:['StringSetter'],
          },
          {
            name: 'toolbarConfig.hide',
            title: '是否隐藏',
            supportVariable: true,
            setter: ['BoolSetter'],
            defaultValue: false,

          },
          {
            name: 'toolbarConfig.pin',
            title: '是否固定',
            supportVariable: true,
            setter: ['BoolSetter'],
            defaultValue: false,

          },
          {
            "title":"计数值",
            "name": "counter.enable",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"允许输入的最大值",
            "name": "counter.max",
            "setter": {
              "componentName": "NumberSetter",
              },
          },
          {
            "title":"本地缓存",
            "name": "cache.enable",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
        ],
      },
      {
        title: 'markdown',
        type: 'group',
        display: 'block',
        items: [
          {
            "title":"行号",
            "name": "preview.hljs.lineNumber",
            supportVariable: true,
            defaultValue: false,
            setter:['BoolSetter'],
          },
          {
            "title":"自动空格",
            "name": "preview.markdown.autoSpace",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"自动矫正术语",
            "name": "preview.markdown.fixTermTypo",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"段落开头空两个",
            "name": "preview.markdown.paragraphBeginningSpace",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"插入目录",
            "name": "preview.markdown.toc",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
        ]
      },
      {
        title: '大纲',
        type: 'group',
        display: 'block',
        items: [
          {
            "title":"展现大纲",
            "name": "outline.enable",
            defaultValue: false,
            "setter": {
              "componentName": "BoolSetter",
              },
          },
          {
            "title":"大纲位置",
            "name": "outline.position",
            defaultValue: 'left',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: '左边',
                    value: 'left',
                  },
                  {
                    label: '右边',
                    value: 'right',
                  },
                ],
              },
            },
          },
        ]
      },
      {
        title: '上传',
        type: 'group',
        display: 'block',
        items: [
          {
            "title":"上传地址",
            "name": "upload.url",
            defaultValue:'/api/system/file/',
            "setter": {
              "componentName": "StringSetter",
              },
          },
          {
            "title":"黏贴上传地址",
            "name": "upload.linkToImgUrl",
            defaultValue:'/api/system/file/',
            "setter": {
              "componentName": "StringSetter",
              },
          },
          {
            "title":"文件大小Byte",
            "name": "upload.max",
            defaultValue:1024810240,
            "setter": {
              "componentName": "NumberSetter",
              },
          },
          {
            "title":"headers",
            "name": "upload.headers",
            "setter": {
              "componentName": "JsonSetter",
              },
          },
          {
            "title":"文件类型",
            "name": "upload.accept",
            "setter": {
              "componentName": "StringSetter",
              },
          },
          {
            "title":"扩展参数",
            "name": "upload.extraData",
            "setter": {
              "componentName": "JsonSetter",
              },
          },
          {
            "title":"上传字段名称",
            "name": "upload.fieldName",
            defaultValue:'file',
            "setter": {
              "componentName": "StringSetter",
              },
          },
          {
            "title":"多个文件",
            "name": "upload.multiple",
            "setter": {
              "componentName": "BoolSetter",
              },
          },
        ]
      }
    ],
    "supports": {
      "style": true,
      events: ['saveField','upload.success','upload.linkToImgFormat','upload.format'],
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "vditor编辑器",
    "screenshot": "https://cdn.itq168.com/img/20221016105634.png?imageslim",
    "schema": {
      "componentName": "vdit",
      "props": {
        data:'初始化数据',
        height: '400px',
        cdn:'https://unpkg.com/vditor@3.9.1'
      }
    }
  }
];

export default {
  ...vditMeta,
  snippets
};
