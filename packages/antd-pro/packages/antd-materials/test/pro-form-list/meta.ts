
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProFormListMeta: IPublicTypeComponentMetadata = {
  "componentName": "ProFormList",
  "title": "ProFormList",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    package: '@appthen/antd-pro',
    version: 'latest',
    "exportName": "ProFormList",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [

      {
        name: 'name',
        title: {
          label: '名称',
        },
        setter: 'StringSetter',
      },
      {
        name: 'label',
        title: {
          label: '名称',
        },
        setter: 'StringSetter',
      },
    ],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {isContainer: true}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ProFormList",
    "screenshot": "",
    "schema": {
      "componentName": "ProFormList",
      "props": {

      }
    }
  }
];

export default {
  ...ProFormListMeta,
  snippets
};
