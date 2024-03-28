import { snippets } from './snippets';
import props from './propsSchema';
import { DateRangePickerSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyDateRangePicker',
  title: 'DateRangePicker',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyDateRangePicker',
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
  icon: takeIcon(DateRangePickerSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
