import { snippets } from './snippets';
import props from './propsSchema';
import { CardSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyCard',
  title: 'Card',
  group: 'Formily',
  category: '布局组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyCard',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: takeIcon(CardSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
