import { snippets } from './snippets';
import props from './propsSchema';
import { PasswordSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyPassword',
  title: 'Password',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyPassword',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: takeIcon(PasswordSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
