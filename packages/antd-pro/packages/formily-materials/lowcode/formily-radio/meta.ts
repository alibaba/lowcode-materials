import { snippets } from './snippets';
import props from './propsSchema';
import { RadioGroupSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyRadio',
  title: 'Radio',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyRadio',
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
  icon: takeIcon(RadioGroupSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
