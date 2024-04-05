
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DiffMonacoApiMeta: IPublicTypeComponentMetadata = {
  "componentName": "DiffMonacoApi",
  title: 'code编辑器比对',
  group: '高级组件',
  category: '编辑器',
  "devMode": "proCode",
  "npm": {
    "package": "@appthen/code",
    "version": "0.1.0",
    "exportName": "DiffMonacoApi",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    props: [
      {
        title: '比对数据',
        name: 'original',
        supportVariable: true,
        defaultValue: '',
        setter: ['StringSetter'],
      },
      {
        title: '默认数据',
        name: 'value',
        supportVariable: true,
        defaultValue: '',
        setter: ['StringSetter'],
      },
      {
        title: '全屏支持',
        name: 'supportFullScreen',
        supportVariable: true,
        defaultValue:false,
        setter: ['BoolSetter'],
      },
      {
        title: '宽度',
        name: 'width',
        supportVariable: true,
        defaultValue: 'auto',
        setter: ['StringSetter'],
      },
      {
        title: '高度',
        name: 'height',
        supportVariable: true,
        defaultValue: 'auto',
        setter: ['StringSetter'],
      },
      {
        title: '语言',
        name: 'language',
        supportVariable: true,
        defaultValue: 'sql',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              { label: 'apex', value: 'apex' },
              { label: 'azcli', value: 'azcli' },
              { label: 'bat', value: 'bat' },
              { label: 'c', value: 'c' },
              { label: 'clojure', value: 'clojure' },
              { label: 'coffeescript', value: 'coffeescript' },
              { label: 'cpp', value: 'cpp' },
              { label: 'csharp', value: 'csharp' },
              { label: 'csp', value: 'csp' },
              { label: 'css', value: 'css' },
              { label: 'dockerfile', value: 'dockerfile' },
              { label: 'fsharp', value: 'fsharp' },
              { label: 'go', value: 'go' },
              { label: 'graphql', value: 'graphql' },
              { label: 'handlebars', value: 'handlebars' },
              { label: 'html', value: 'html' },
              { label: 'ini', value: 'ini' },
              { label: 'java', value: 'java' },
              { label: 'javascript', value: 'javascript' },
              { label: 'json', value: 'json' },
              { label: 'kotlin', value: 'kotlin' },
              { label: 'less', value: 'less' },
              { label: 'lua', value: 'lua' },
              { label: 'markdown', value: 'markdown' },
              { label: 'msdax', value: 'msdax' },
              { label: 'mysql', value: 'mysql' },
              { label: 'objective-c', value: 'objective-c' },
              { label: 'pascal', value: 'pascal' },
              { label: 'perl', value: 'perl' },
              { label: 'pgsql', value: 'pgsql' },
              { label: 'php', value: 'php' },
              { label: 'plaintext', value: 'plaintext' },
              { label: 'postiats', value: 'postiats' },
              { label: 'powerquery', value: 'powerquery' },
              { label: 'powershell', value: 'powershell' },
              { label: 'pug', value: 'pug' },
              { label: 'python', value: 'python' },
              { label: 'r', value: 'r' },
              { label: 'razor', value: 'razor' },
              { label: 'redis', value: 'redis' },
              { label: 'redshift', value: 'redshift' },
              { label: 'ruby', value: 'ruby' },
              { label: 'rust', value: 'rust' },
              { label: 'sb', value: 'sb' },
              { label: 'scheme', value: 'scheme' },
              { label: 'scss', value: 'scss' },
              { label: 'shell', value: 'shell' },
              { label: 'sol', value: 'sol' },
              { label: 'sql', value: 'sql' },
              { label: 'st', value: 'st' },
              { label: 'swift', value: 'swift' },
              { label: 'tcl', value: 'tcl' },
              { label: 'typescript', value: 'typescript' },
              { label: 'vb', value: 'vb' },
              { label: 'xml', value: 'xml' },
              { label: 'yaml', value: 'yaml' },
            ],
          },
        },
      },
      {
        title: '路径',
        name: 'path',
        supportVariable: true,
        defaultValue: '',
        setter: ['StringSetter'],
      },
      {
        title: '风格',
        name: 'theme',
        supportVariable: true,
        defaultValue: 'vs-dark',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: 'vs',
                value: 'vs',
              },
              {
                label: 'hc-black',
                value: 'hc-black',
              },
              {
                label: 'vs-dark',
                value: 'vs-dark',
              },
              {
                label: 'hc-light',
                value: 'hc-light',
              },
            ],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,

      events: ['editorDidMount', 'editorWillMount', 'onChange'],
    },
    component: {},
  },
  
};
const a = JSON.stringify({ a: 'appthen' }, null, 2);
const b = JSON.stringify({ b: 'appthen平台' }, null, 2);
const snippets: Snippet[] = [
  {
    title: 'code比对',
    screenshot: 'https://cdn.appthen.cn/editor/assets/appthen-code.svg',
    schema: {
      componentName: 'DiffMonacoApi',
      props: {
        width: '100%',
        height: '400px',
        original: a,
        value: b,
      },
    },
  },
];

export default {
  ...DiffMonacoApiMeta,
  snippets
};
