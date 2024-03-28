import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { default as formBaseProps } from '../pro-form/common/form-base-props';

const ChildFormMeta: ComponentMetadata = {
  componentName: 'ChildForm',
  title: '子表单',
  docUrl: '',
  screenshot: '',
  category: '表单类',
  group: '精选组件',
  devMode: 'proCode',
  hidden: true,
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.24',
    exportName: 'ChildForm',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: formBaseProps,
    supports: {
      className: true,
      style: true,
    },
    component: {
      isContainer: true,
      isMinimalRenderUnit: true,
      nestingRule: {
        childWhitelist: new RegExp('form.*', 'i'),
      },
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '子表单',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01MJT0lc1pXVaHIcoBy_!!6000000005370-55-tps-56-56.svg',
    schema: {
      componentName: 'ChildForm',
      props: {
        primaryKey: String(Math.floor(Math.random() * 10000)),
        placeholder: '请在右侧面板添加表单项+',
        placeholderStyle: {
          height: '38px',
          color: '#0088FF',
          background: '#d8d8d836',
          border: 0,
          gridArea: 'span 4 / span 4',
        },
        columns: 3,
        labelCol: {
          fixedSpan: 4,
        },
        labelAlign: 'top',
        emptyContent: '添加表单项',
      },
      children: [...new Array(3).keys()].map((item) => ({
        componentName: 'FormInput',
        props: {
          formItemProps: {
            primaryKey: String(Math.floor(Math.random() * 10000) + item),
            label: '表单项',
            size: 'medium',
            device: 'desktop',
            fullWidth: true,
          },
          placeholder: '请输入',
        },
      })),
    },
  },
];

export default {
  ...ChildFormMeta,
  snippets,
};
