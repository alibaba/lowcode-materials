import snippets from './snippets';

export default {
  snippets,
  componentName: 'Statistic',
  title: '统计数值',
  category: '数据展示',
  props: [
    {
      name: 'decimalSeparator',
      title: { label: '设置小数点', tip: '设置小数点' },
      propType: 'string',
    },
    {
      name: 'formatter',
      title: { label: '自定义数值展示', tip: '自定义数值展示' },
      propType: 'func',
    },
    {
      name: 'groupSeparator',
      title: { label: '设置千分位标识符', tip: '设置千分位标识符' },
      propType: 'string',
    },
    {
      name: 'precision',
      title: { label: '数值精度', tip: '数值精度' },
      propType: 'number',
    },
    {
      name: 'prefix',
      title: { label: '设置数值的前缀', tip: '设置数值的前缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'suffix',
      title: { label: '设置数值的后缀', tip: '设置数值的后缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'title',
      title: { label: '数值的标题', tip: '数值的标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'value',
      title: { label: '数值内容', tip: '数值内容' },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
    },
    {
      name: 'valueStyle',
      title: { label: '设置数值的样式', tip: '设置数值的样式' },
      propType: 'object',
    },
  ],
  configure: { supports: { style: true } },
};
