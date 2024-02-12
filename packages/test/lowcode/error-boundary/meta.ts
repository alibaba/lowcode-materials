
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ErrorBoundaryMeta: IPublicTypeComponentMetadata = {
  "componentName": "ErrorBoundary",
  "title": "ErrorBoundary",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "test",
    "version": "0.1.0",
    "exportName": "Alert",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": "ErrorBoundary"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "message",
            "zh-CN": "message"
          }
        },
        "name": "message",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "description",
            "zh-CN": "description"
          }
        },
        "name": "description",
        "setter": {
          "componentName": "SlotSetter",
          "props": {
            "mode": "node"
          },
          "isRequired": false,
          "initialValue": {
            "type": "JSSlot",
            "value": []
          }
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ErrorBoundary",
    "screenshot": "",
    "schema": {
      "componentName": "ErrorBoundary",
      "props": {}
    }
  }
];

export default {
  ...ErrorBoundaryMeta,
  snippets
};
