export default {
  componentName: 'Descriptions.Item',
  title: '描述列表项',
  props: [
    {
      name: 'key',
      title: {
        label: 'key',
        tip: 'key',
      },
      propType: 'string',
    },
    {
      name: 'tab',
      title: {
        label: '标题',
        tip: '标题',
      },
      propType: 'string',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: { style: true },
  },
};
