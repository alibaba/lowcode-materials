import parseData from '../utils/parse-data';
import { createDataSource } from './adaptor';

const plainData =
  '*Trunk\n\t-Branch\n\t\t*Branch\n\t\t\tLeaf\n\t\tLeaf\n\t*Branch\n\t\tLeaf\n\t\tLeaf';
const list = parseData(plainData).filter(({ type }) => 'node' === type);
const keys = { selected: [], expanded: [] };
const dataSource = createDataSource(list, keys);

export default [
  {
    title: '树型选择控件',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_select.png',
    schema: {
      componentName: 'TreeSelect',
      props: {
        mode: 'single',
        hasArrow: true,
        cacheValue: true,
        visible: true,
        plainData,
        dataSource,
        value: keys.selected,
      },
    },
  },
];
