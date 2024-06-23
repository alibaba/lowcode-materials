
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SpinMeta: ComponentMetadata = {
  "componentName": "Spin",
  "title": "Spin",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "cross-ui",
    "version": "4.0.33",
    "exportName": "Spin",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "spinning",
            "zh-CN": "spinning"
          }
        },
        "name": "spinning",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": true,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "tip",
            "zh-CN": "tip"
          }
        },
        "name": "tip",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            ]
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
const snippets: Snippet[] = [
  {
    "title": "Spin",
    "screenshot": "",
    "schema": {
      "componentName": "Spin",
      "props": {}
    }
  }
];

export default {
  ...SpinMeta,
  snippets
};
