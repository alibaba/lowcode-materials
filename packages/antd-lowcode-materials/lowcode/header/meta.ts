
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const HeaderMeta: IPublicTypeComponentMetadata = {
  "componentName": "Layout.Header",
  "title": "Header",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "configure": {
    "props": [

    ],
    "supports": {
      "style": true,
      "className": true
    },
    "component": {isContainer:true}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Header",
    "screenshot": "",
    "schema": {
      "componentName": "Layout.Header",
      "props": {}
    }
  }
];

export default {
  ...HeaderMeta,
  // snippets
};
