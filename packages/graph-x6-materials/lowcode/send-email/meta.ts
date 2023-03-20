import { ComponentMetadata, Snippet } from '@alilc/lowcode-engine';

const SendEmailMeta: ComponentMetadata = {
  componentName: 'SendEmail',
  title: '发送邮件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  tags: ['node'],
  npm: {
    package: '@alilc/lce-x6-items',
    version: '0.1.3',
    exportName: 'SendEmail',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': '名称',
          },
        },
        name: 'name',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
    ],
    supports: {
      style: false,
      loop: false,
      condition: false
    },
    component: {},
  },
  category: '事件节点',
  priority: 1
};
const snippets: Snippet[] = [
  {
    title: '发送邮件',
    screenshot: '',
    schema: {
      componentName: 'SendEmail',
      props: {},
    },
  },
];

export default {
  ...SendEmailMeta,
  snippets,
};
