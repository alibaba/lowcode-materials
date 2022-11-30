import { ComponentMetadata } from "@alilc/lowcode-types";
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
    {
      name: 'wrap',
      title: { label: '是否自动换行', tip: '是否自动换行' },
      propType: "bool",
      condition: {
        type: 'JSFunction',
        value: 'target => target.getProps().getPropValue("direction")==="horizontal"',
      },
    },
    {
      name: 'split',
      title: { label: '间隔组件', tip: '间隔组件,可拖组件进来， 常用的有竖向分隔线' },
      propType: "node",
    },
  ],
  configure: { component: { isContainer: true }, supports: { style: true } },
} as ComponentMetadata | any;
