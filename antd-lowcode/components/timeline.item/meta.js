export default {
  componentName: 'Timeline.Item',
  title: '时间轴项',
  category: '',
  props: [
    {
      name: 'color',
      title: { label: '颜色', tip: '颜色' },
      propType: 'string',
      defaultValue: '#00f',
      setter: 'ColorSetter',
    },
    {
      name: 'dot',
      title: {
        label: '时间轴点',
        tip: '时间轴点',
      },
      propType: 'node',
    },
    {
      name: 'label',
      title: {
        label: '标签',
        tip: '标签',
      },
      propType: { type: 'oneOfType', value: ['string', 'node', 'func'] },
    },
    {
      name: 'position',
      title: {
        label: '位置',
        tip: '位置',
      },
      propType: { type: 'oneOf', value: ['left', 'right'] },
    },
  ],
  configure: { supports: { style: true } },
};
