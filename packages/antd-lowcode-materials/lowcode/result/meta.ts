import snippets from './snippets';
import { AntdIconSetter } from '../_setters';

export default {
  snippets,
  componentName: 'Result',
  title: '结果',
  category: '反馈',
  props: [
    {
      name: 'title',
      title: { label: '标题', tip: 'title 文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
      supportVariable: true
    },
    {
      name: 'subTitle',
      title: { label: '副标题', tip: 'subTitle 文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
      supportVariable: true
    },
    {
      name: 'status',
      title: {
        label: '状态',
        tip: '结果的状态，决定图标和颜色',
      },
      propType: {
        type: 'oneOf',
        value: ['success', 'error', 'info', 'warning', '404', '403', '500'],
      },
    },
    {
      name: 'icon',
      title: { label: '自定义 icon', tip: '自定义 icon' },
      propType: 'node',
      setter: [AntdIconSetter, 'SlotSetter'],
    },
    {
      name: 'extra',
      title: { label: '操作区', tip: '操作区' },
      propType: 'node',
    },
  ],
  configure: { supports: { style: true } },
};
