import snippets from './snippets';

export default {
  snippets,
  componentName: 'Progress',
  title: '进度条',
  category: '反馈',
  props: [
    {
      name: 'type',
      title: { label: '类型', tip: '类型' },
      propType: { type: 'oneOf', value: ['line', 'circle', 'dashboard'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            { title: '线型', value: 'line' },
            { title: '圆型', value: 'circle' },
            { title: '仪表盘', value: 'dashboard' },
          ],
        },
      },
      defaultValue: 'line',
    },
    {
      name: 'format',
      title: { label: '内容格式', tip: '内容格式' },
      propType: 'func',
    },
    {
      name: 'percent',
      title: { label: '百分比', tip: '百分比' },
      propType: 'number',
    },
    {
      name: 'showInfo',
      title: { label: '显示数值或图标', tip: '显示数值或图标' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'status',
      title: { label: '状态', tip: '状态' },
      propType: {
        type: 'oneOf',
        value: ['success', 'exception', 'normal', 'active'],
      },
    },
    {
      name: 'steps',
      title: { label: '总步数', tip: '进度条总共步数' },
      condition(target) {
        // 仅线型有效
        return target.getProps().getPropValue('type') === 'line';
      },
      propType: 'number',
    },
    {
      name: 'strokeLinecap',
      title: { label: '进度条的样式', tip: '进度条的样式' },
      propType: {
        type: 'oneOf',
        value: ['round', 'square'],
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            { title: '圆角', value: 'round' },
            { title: '方角', value: 'square' },
          ],
        },
      },
      defaultValue: 'round',
    },
    {
      name: 'strokeWidth',
      title: { label: '线宽度', tip: '线宽度' },
      propType: 'number',
    },
    {
      name: 'strokeColor',
      title: { label: '进度条的颜色', tip: '进度条的颜色' },
      propType: 'string',
      condition(target) {
        // 仪表盘样式无效
        return target.getProps().getPropValue('type') !== 'dashboard';
      },
      setter: 'ColorSetter',
    },
    {
      name: 'trailColor',
      title: {
        label: '未完成的分段的颜色',
        tip: '未完成的分段的颜色',
      },
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'gapDegree',
      title: {
        label: '缺口角度',
        tip: '仪表盘进度条缺口角度，可取值 0 ~ 295',
      },
      condition(target) {
        // 仅仪表盘样式有效
        return target.getProps().getPropValue('type') === 'dashboard';
      },
      propType: 'number',
      defaultValue: 75,
    },
    {
      name: 'gapPosition',
      title: {
        label: '缺口位置',
        tip: '仪表盘进度条缺口位置',
      },
      condition(target) {
        // 仅仪表盘样式有效
        return target.getProps().getPropValue('type') === 'dashboard';
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'bottom', 'left', 'right'],
      },
      defaultValue: 'bottom',
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '进度条的尺寸' },
      propType: { type: 'oneOfType', value: ['oneOf', 'number'] },
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '小', value: 'small' },
              { title: '默认', value: 'default' },
            ],
          },
        },
        {
          componentName: 'NumberSetter',
        },
      ],
    },
  ],
  configure: { supports: { style: true } },
};
