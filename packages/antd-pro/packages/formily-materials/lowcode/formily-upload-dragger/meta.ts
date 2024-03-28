import { snippets } from './snippets';
import props from './propsSchema';
import { UploadDraggerSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyUploadDragger',
  title: 'UploadDragger',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyUploadDragger',
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
  icon: takeIcon(UploadDraggerSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
