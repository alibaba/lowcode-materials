import parseData from '../utils/parse-data';

const plainData =
  '*Panel Header 1\n\tPeople always make mistakes, frustrated, nerve-racking, but cannot remain stagnant.\nPanel Header 2\n\tPeople always make mistakes, frustrated, nerve-racking, but cannot remain stagnant.\nPanel Header 3\n\tPeople always make mistakes, frustrated, nerve-racking, but cannot remain stagnant.\n';

const list = parseData(plainData).filter((node) => 'node' === node.type);
const defaultExpandedKeys = [];
const dataSource = list.map((item, index) => {
  if (item.state === 'active') {
    defaultExpandedKeys.push(`panel_${index}`);
  }
  return {
    key: `panel_${index}`,
    title: item.value,
    content: item.children.map(({ type, value }) => (type === 'node' ? value : '')),
    disabled: item.state === 'disabled',
  };
});

export default [
  {
    title: '折叠面板',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_dialog.png',
    schema: {
      componentName: 'Collapse',
      props: {
        accordion: false,
        plainData,
        dataSource,
        defaultExpandedKeys,
      },
    },
  },
];
