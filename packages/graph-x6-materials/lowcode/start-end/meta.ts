import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const StartEndMeta: ComponentMetadata = {
  componentName: 'StartEnd',
  title: '起止节点',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  tags: ['node'],
  npm: {
    package: '@alilc/lce-x6-items',
    version: '0.1.3',
    exportName: 'StartEnd',
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
  priority: 2
};
const snippets: Snippet[] = [
  {
    title: '起止节点',
    screenshot: 'https://img.alicdn.com/imgextra/i4/O1CN01sZwPKb1f1JgS9ayrg_!!6000000003946-55-tps-16-16.svg',
    schema: {
      componentName: 'StartEnd',
      props: {},
    },
  },
];

export default {
  ...StartEndMeta,
  snippets,
};
