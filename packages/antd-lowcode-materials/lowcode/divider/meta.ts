import snippets from './snippets';

export default {
  snippets,
  componentName: 'Divider',
  title: '分割线',
  category: '布局',
  props: [
    {
      name: 'className',
      title: { label: '分割线样式类', tip: '分割线样式类' },
      propType: 'string',
    },
    {
      name: 'dashed',
      title: { label: '是否虚线', tip: '是否虚线' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'orientation',
      title: { label: '标题位置', tip: '分割线标题的位置' },
      propType: { type: 'oneOf', value: ['left', 'right', 'center'] },
    },
    {
      name: 'orientationMargin',
      title: {
        label: '标题边距',
        tip:
          '标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right',
      },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
    },
    {
      name: 'style',
      title: { label: '分割线样式对象', tip: '分割线样式对象' },
      propType: 'object',
    },
    {
      name: 'type',
      title: { label: '方向', tip: '水平还是垂直类型' },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical'] },
    },
    {
      name: 'plain',
      title: {
        label: '普通正文样式',
        tip: '文字是否显示为普通正文样式',
      },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: { style: true, className: true },
  },
};
