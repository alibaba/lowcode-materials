
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ContentMeta: IPublicTypeComponentMetadata = {
  "componentName": "Layout.Content",
  "title": "Content",
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
    "title": "Content",
    "screenshot": "",
    "schema": {
      "componentName": "Layout.Content",
      "props": {}
    }
  }
];

export default {
  ...ContentMeta,
  // snippets
};
