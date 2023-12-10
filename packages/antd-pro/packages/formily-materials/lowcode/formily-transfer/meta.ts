import { snippets } from './snippets';
import props from './propsSchema';
import { TransferSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyTransfer',
  title: 'Transfer',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyTransfer',
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
  icon: takeIcon(TransferSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
