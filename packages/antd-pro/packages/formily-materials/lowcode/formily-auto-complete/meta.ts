import { snippets } from './snippets';
import props from './propsSchema';
import { SelectSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyAutoComplete',
  title: 'AutoComplete',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyAutoComplete',
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
  icon: takeIcon(SelectSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
