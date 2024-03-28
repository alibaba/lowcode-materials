import parseData from '../utils/parse-data';
const plainData =
  'Content1\nContent2\n*Content3\n*Content4\n*Content5\nContent6\nContent7\nContent8\nContent9\nContent10';
const list = parseData(plainData).filter(({ type }) => type === 'node');
const keys = [];
const dataSource = list.map((item, i) => {
  if (item.state === 'active') {
    keys.push(`${i}`);
  }
  return {
    label: `${item.value}`,
    value: `${i}`,
    disabled: item.state === 'disabled',
  };
});

export default [
  {
    title: '穿梭框',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_transfer.png',
    schema: {
      componentName: 'Transfer',
      props: {
        prefix: 'next-',
        mode: 'normal',
        titles: ['TitleLeft', 'TitleRight'],
        dataSource,
        plainData,
        defaultLeftChecked: keys,
        notFoundContent: 'Not Found',
      },
    },
  },
];
