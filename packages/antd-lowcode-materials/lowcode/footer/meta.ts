
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FooterMeta: IPublicTypeComponentMetadata = {
  "componentName": "Layout.Footer",
  "title": "Footer",
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
    "title": "Footer",
    "screenshot": "",
    "schema": {
      "componentName": "Layout.Footer",
      "props": {}
    }
  }
];

export default {
  ...FooterMeta,
  // snippets
};
