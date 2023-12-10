import { snippets } from './snippets';
import props from './propsSchema';
import { TreeSelectSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyTreeSelect',
  title: 'TreeSelect',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyTreeSelect',
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
  icon: takeIcon(TreeSelectSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
