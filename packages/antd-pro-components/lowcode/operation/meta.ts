
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const OperationMeta: IPublicTypeComponentMetadata = {
  "componentName": "Operation",
  "title": "Operation",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "antd-pro-components",
    "version": "0.1.0",
    "exportName": "StatisticCard",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "Operation"
  },
  "configure": {
    "props": [],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Operation",
    "screenshot": "",
    "schema": {
      "componentName": "Operation",
      "props": {}
    }
  }
];

export default {
  ...OperationMeta,
  snippets
};
