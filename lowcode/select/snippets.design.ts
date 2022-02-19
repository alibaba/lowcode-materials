import parseData from '../utils/parse-data';

const plainData = 'Option 1\n*Option 2\nOption 3\nOption 4\nOption 5';
const list = parseData(plainData).filter(({ type }) => 'node' === type);
const dataSource = [];
const value = [];

list.forEach((item, index) => {
  dataSource.push({
    label: item.value,
    value: index,
    disabled: item.state === 'disabled',
  });
  if (item.state === 'active') {
    value.push(index);
  }
});

export default [
  {
    title: '选择器',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_select.png',
    schema: {
      componentName: 'Select',
      props: {
        mode: 'single',
        hasArrow: true,
        cacheValue: true,
        visible: true,
        plainData,
        dataSource,
        value,
      },
    },
  },
];
