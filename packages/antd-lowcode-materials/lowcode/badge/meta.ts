import snippets from './snippets';

export default {
  snippets,
  componentName: 'Badge',
  title: '徽标数',
  category: '数据展示',
  props: [
    {
      name: 'color',
      title: { label: '圆点颜色', tip: '自定义小圆点的颜色' },
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'count',
      title: {
        label: '展示数字',
        tip: '展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏',
      },
      propType: 'number',
      
    },
    {
      name: 'dot',
      title: {
        label: '展示圆点',
        tip: '不展示数字，只有一个小红点',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'offset',
      title: {
        label: '圆点偏移',
        tip: '设置状态点的位置偏移 [number, number]',
      },
      propType: { type: 'arrayOf', value: 'number' },
    },
    {
      name: 'overflowCount',
      title: { label: '封顶值', tip: '展示封顶的数字值' },
      propType: 'number',
    },
    {
      name: 'showZero',
      title: {
        label: '展示零值',
        tip: '当数值为 0 时，是否展示 Badge',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'status',
      title: { label: '状态', tip: '设置 Badge 为状态点' },
      propType: {
        type: 'oneOf',
        value: ['success', 'processing', 'default', 'error', 'warning'],
      },
    },
    {
      name: 'size',
      title: { label: '大小', tip: '设置 Badge 为大小' },
      propType: {
        type: 'oneOf',
        value: ['default', 'small'],
      },
    },
    {
      name: 'text',
      title: {
        label: '状态文本',
        tip: '在设置了 `status` 的前提下有效，设置状态点的文本',
      },
      condition(target) {
        return !!target.getProps().getPropValue('status');
      },
      propType: 'string',
    },
    {
      name: 'title',
      title: {
        label: '悬浮提示',
        tip: '设置鼠标放在状态点上时显示的文字',
      },
      propType: 'string',
    },
  ],
  configure: { supports: { style: true },    component: { isContainer: true } 



},
};
