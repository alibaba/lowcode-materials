
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const iframeMeta: ComponentMetadata = {
  group: '自定义组件',
  "componentName": "iframe",
  "title": "内嵌",
  category: '系统功能',
  // "docUrl": "",
  "npm": {
    "package": "eagle-custom-material-ui",
    "version": "latest",
    "exportName": "iframe",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": "链接",
        "name": "src",
        "setter": {
          "componentName": "StringSetter",
        }
      },
      {
        "title": "标题",
        "name": "title",
        "setter": {
          "componentName": "StringSetter",
        }
      },
      {
        "title": "id",
        "name": "id",
        "setter": {
          "componentName": "StringSetter",
        }
      },
      {
        "title": "滚动条",
        "name": "scrolling",
        defaultValue: 'yes',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '否',
                value: 'no',
              },
              {
                label: '是',
                value: 'yes',
              },
            ],
          },
        },
      },
      {
        "title": "边框",
        "name": "frameBorder",
        defaultValue: '0',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '无',
                value: '0',
              },
              {
                label: '有边框',
                value: '1',
              },
            ],
          },
        },
      },
      {
        "title": "按钮边框",
        "name": "buttonColor",
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        "title": "显示跳转",
        "name": "todisplay",
        defaultValue:true,

        "setter": {
          "componentName": "BoolSetter",
        }
      },
      {
        "title": "图标显示",
        "name": "icon",
        defaultValue:'exit',
        "setter": {
          "componentName": "IconSetter",
        }
      },
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "内链组件",
    screenshot: 'https://cdn.itq168.com/img/20221016105837.png?imageslim',
    "schema": {
      "componentName": "iframe",
      "props": {
        width: '100%',
        height: '200'
      }
    }
  }
];

export default {
  ...iframeMeta,
  snippets
};
