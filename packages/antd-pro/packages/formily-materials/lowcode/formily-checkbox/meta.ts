import { snippets } from './snippets';
import props from './propsSchema';
import { CheckboxGroupSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyCheckbox',
  title: 'Checkbox',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyCheckbox',
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
  icon: takeIcon(CheckboxGroupSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
