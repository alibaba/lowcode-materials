
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AppthenJsonMeta: IPublicTypeComponentMetadata = {
  "componentName": "AppthenJson",
  title: 'json编辑器',
  group: '高级组件',
  category: '编辑器',
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/json",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  configure: {
    props: [
      {
        title: 'value',
        name: 'src',
        description: '数据',
        supportVariable: true,

        setter: {
          componentName: 'JsonSetter',
          isRequired: true,
          initialValue: {},
        },
      },
      {
        title: 'defaultValue',
        name: 'defaultValue',
        description: '数据',
        supportVariable: true,

        setter: {
          componentName: 'JsonSetter',
          isRequired: true,
          initialValue: {},
        },
      },
      {
        title: '主题',
        name: 'theme',
        description: '主题',
        supportVariable: true,

        setter: {
          initialValue: 'rjv-default',
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: 'rjv-default',
                value: 'rjv-default',
              },
              {
                label: 'ashes',
                value: 'ashes',
              },
              {
                label: 'bespin',
                value: 'bespin',
              },
              {
                label: 'apathy',
                value: 'apathy',
              },
              {
                label: 'apathy:inverted',
                value: 'apathy:inverted',
              },
              {
                label: 'brewer',
                value: 'brewer',
              },
              {
                label: 'threezerotwofour',
                value: 'threezerotwofour',
              },
            ],
          },
        },
      },
      {
        title: 'icon样式',
        name: 'iconStyle',
        supportVariable: true,

        setter: {
          initialValue: 'circle',
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: 'circle',
                value: 'circle',
              },
              {
                label: 'square',
                value: 'square',
              },
              {
                label: 'triangle',
                value: 'triangle',
              },
            ],
          },
        },
      },
      {
        title: '是否新增',
        name: 'onAdd',
        supportVariable: true,

        setter: {
          initialValue: true,
          componentName: 'BoolSetter',
        },
      },
      {
        title: '是否编辑',
        name: 'onEdit',
        supportVariable: true,

        setter: {
          initialValue: false,
          componentName: 'BoolSetter',
        },
      },
      {
        title: '是否删除',
        name: 'onDelete',
        supportVariable: true,

        setter: {
          initialValue: false,
          componentName: 'BoolSetter',
        },
      },
      {
        title: '折叠',
        name: 'collapsed',
        supportVariable: true,

        setter: {
          initialValue: false,
          componentName: 'BoolSetter',
        },
      },
      {
        title: '内部排序',
        name: 'sortKeys',
        supportVariable: true,

        setter: {
          initialValue: false,
          componentName: 'BoolSetter',
        },
      },
      {
        title: '失败消息',
        name: 'validationMessage',
        supportVariable: true,

        description: 'onEdit、onAdd或onDelete回调的验证失败的自定义消息',
        setter: {
          componentName: 'StringSetter',
          initialValue: '错误的操作',
        },
      },
    ],
    supports: {
      style: true,
      events: ['onAdd', 'onEdit', 'onDelete', 'onSelect'],
      className: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'json编辑器',
    screenshot: 'http://cdn.itq168.com/img/20230105105333.png?imageslim',
    schema: {
      componentName: 'AppthenJson',
      props: {},
    },
  },
];

export default {
  ...AppthenJsonMeta,
  snippets
};
