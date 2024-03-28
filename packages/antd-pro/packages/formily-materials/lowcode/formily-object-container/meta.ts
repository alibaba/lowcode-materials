import { snippets } from './snippets';
import props from './propsSchema';
import { ObjectSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyObjectContainer',
  title: 'Object',
  group: 'Formily',
  category: '布局组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyObjectContainer',
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
  icon: takeIcon(ObjectSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
