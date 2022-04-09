import snippets from './snippets';

export default {
  snippets,
  componentName: 'Space',
  title: '间距',
  category: '布局',
  props: [
    {
      name: 'align',
      title: { label: '对齐方式', tip: '对齐方式' },
      propType: {
        type: 'oneOf',
        value: ['start', 'end', 'center', 'baseline'],
      },
    },
    {
      name: 'direction',
      title: { label: '间距方向', tip: '间距方向' },
      propType: { type: 'oneOf', value: ['vertical', 'horizontal'] },
    },
    {
      name: 'size',
      title: { label: '间距大小', tip: '间距大小' },
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'oneOf',
            value: ['small', 'middle', 'large'],
          },
          'number',
        ],
      },
      defaultValue: 'middle',
    },
  ],
  configure: { component: { isContainer: true }, supports: { style: true } },
};
