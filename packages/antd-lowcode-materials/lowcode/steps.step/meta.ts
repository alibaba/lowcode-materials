import snippets from './snippets';

export default {
  snippets,
  componentName: 'Steps.Step',
  title: '步骤项',
  props: [
    {
      name: 'title',
      title: { label: '标题', tip: '标题' },
      propType: 'string',
    },
    {
      name: 'subTitle',
      title: { label: '子标题', tip: '子标题' },
      propType: 'string',
    },
    {
      name: 'description',
      title: { label: '步骤描述', tip: '步骤描述' },
      propType: 'string',
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
    },
    {
      name: 'icon',
      title: { label: '图标', tip: '图标' },
      propType: 'node',
    },
    {
      name: 'status',
      title: { label: '状态', tip: '状态' },
      propType: 'string',
    },
  ],
  configure: {
    component: { nestingRule: { parentWhitelist: ['Steps'] } },
    supports: { style: true },
  },
};
