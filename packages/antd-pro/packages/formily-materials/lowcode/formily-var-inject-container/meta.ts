import { snippets } from './snippets';
import props from './propsSchema';
import { EntitySource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyVarInjectContainer',
  title: 'VarInjectContainer',
  group: 'Formily',
  category: '变量组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyVarInjectContainer',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      ...props,
      {
        name: 'render',
        title: {
          label: '自定义渲染',
          tip: 'render | 插槽内的物料表达式可通过 this.scope 获取到 Formily 传递下来变量（如 $record、$index...）',
        },
        propType: 'func',
        setter: [
          {
            componentName: 'SlotSetter',
            title: '单元格插槽',
            initialValue: {
              type: 'JSSlot',
              params: ['scope'],
              value: [],
            },
          },
          'VariableSetter',
        ],
      },
    ],
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: takeIcon(EntitySource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
