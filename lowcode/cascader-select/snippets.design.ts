import parseData from '../utils/parse-data';
import { createDataSource } from './adaptor';

const plainData =
  '*1\n\t*1-1\n\t\t1-1-1\n\t\t1-1-2\n\t\t1-1-3\n\t\t1-1-4\n\t\t*1-1-5\n\t1-2\n\t1-3\n\t1-4\n\t1-5\n2\n\t2-1\n\t2-2\n\t2-3\n\t2-4\n\t2-5\n3\n\t3-1\n\t3-2\n\t3-3\n\t3-4\n\t3-5\n4\n\t4-1\n\t4-2\n\t4-3\n\t4-4\n\t4-5\n5\n\t5-1\n\t5-2\n\t5-3\n\t5-4\n\t5-5';
const list = parseData(plainData).filter(({ type }) => 'node' === type);
const keys = { selected: [], expanded: [] };
const dataSource = createDataSource(list, keys);

export default [
  {
    title: '级联选择器',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_cascader-select.png',
    schema: {
      componentName: 'CascaderSelect',
      props: {
        prefix: 'next-',
        size: 'medium',
        hasArrow: true,
        hasBorder: true,
        expandTriggerType: 'click',
        resultAutoWidth: true,
        notFoundContent: 'Not Found',
        plainData,
        dataSource,
        value: keys.selected,
      },
    },
  },
  {
    title: '级联',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_cascader.png',
    schema: {
      componentName: 'Cascader',
      props: {
        prefix: 'next-',
        expandTriggerType: 'click',
        plainData,
        dataSource,
        value: keys.selected,
      },
    },
  },
];
