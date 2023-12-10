import { snippets } from './snippets';
import props from './propsSchema';
import { TimeRangePickerSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyTimeRangePicker',
  title: 'TimeRangePicker',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyTimeRangePicker',
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
  icon: takeIcon(TimeRangePickerSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
