import snippets from './snippets';
import { AntdIconSetter } from '../_setters';

export default {
  snippets,
  componentName: 'Icon',
  title: '图标',
  category: '通用',
  props: [
    {
      name: 'className',
      title: { label: '设置图标的样式名', tip: '设置图标的样式名' },
      propType: 'string',
    },
    {
      name: 'style',
      title: {
        label: '设置图标的样式，例如 `fontSize` 和 `color`',
        tip: '设置图标的样式，例如 `fontSize` 和 `color`',
      },
      propType: 'object',
    },
    {
      name: 'type',
      description: '图标',
      propType: 'string',
      setter: 'StringSetter',
      // setter: AntdIconSetter,

    },
    {
      name: 'size',
      description: '大小',
      propType: 'number',
      defaultValue: 20,
    },
    {
      name: 'color',
      description: '颜色',
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'rotate',
      title: {
        label: '旋转角度',
        tip: '图标旋转角度',
      },
      propType: 'number',
      defaultValue: 0,
    },
    {
      name: 'spin',
      title: { label: '旋转动画', tip: '是否有旋转动画' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'onClick',
      title: { label: '点击回调', tip: '点击按钮时的回调' },
      propType: 'func',
    },
  ],
  configure: { supports: { style: true } },
};
