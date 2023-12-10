import { snippets } from './snippets';
import props from './propsSchema';
import { TextSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyMonacoInput',
  title: 'MonacoInput',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyMonacoInput',
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
  icon: takeIcon(TextSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
