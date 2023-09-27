import { IPublicTypeConfigure } from '@alilc/lowcode-types';

export const plotConfigure: NonNullable<IPublicTypeConfigure['props']> = [
  {
    name: 'autoFit',
    title: '自适应宽高',
    display: 'block',
    defaultValue: true,
    setter: 'BoolSetter',
  },
  {
    name: 'height',
    title: '高度',
    display: "block",
    defaultValue: 300,
    setter: {
      componentName: 'NumberSetter',
    },
  }
];
