
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProFormGroupMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProFormGroup",
  "title": "表单组",
  "docUrl": "",
  "screenshot": "",
  group: '高级组件',
  category: '表单类',
  "devMode": "proCode",
  "npm": {
    package: '@appthen/antd-pro',
    "version": "0.1.0",
    "exportName": "ProFormGroup",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '标题'
          },
          tip: '标题'
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
          
          isRequired: false
        }
      },
    ],
    "supports": {
      "style": true
    },
    component: { isContainer: true },
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProFormGroup",
    "screenshot": "",
    "schema": {
      "componentName": "ProFormGroup",
      "props": {

      }
    }
  }
];

export default {
  ...ProFormGroupMeta,
  snippets
};
