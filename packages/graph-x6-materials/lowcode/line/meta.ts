import { ComponentMetadata, Snippet } from '@alilc/lowcode-engine';

const LineMeta: ComponentMetadata = {
  componentName: 'Line',
  title: '连接线',
  docUrl: '',
  screenshot: '',
  tags: ['edge'],
  devMode: 'proCode',
  npm: {
    package: '@alilc/lce-x6-items',
    version: '0.1.3',
    exportName: 'Line',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    supports: {
      style: false,
      loop: false,
      condition: false
    }
  }
};
const snippets: Snippet[] = [
  {
    title: '连接线',
    screenshot: '',
    schema: {
      componentName: 'Line',
      props: {},
    },
  },
];

export default {
  ...LineMeta,
  snippets,
};
