import { snippets } from './snippets';
import props from './propsSchema';
import { ArrayTableSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyArrayTable',
  title: 'ArrayTable',
  group: 'Formily',
  category: '自增组件',
  npm: {
    package: '@seada/formily-materials',
    version: 'latest',
    exportName: 'FormilyArrayTable',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'columns',
        title: { label: '表格列', tip: '表格列的配置描述，具体项见下表' },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: { label: '列标题', tip: 'title | 列标题' },
                      propType: { type: 'oneOfType', value: ['string', 'func'] },
                      setter: [
                        'StringSetter',
                        {
                          componentName: 'SlotSetter',
                          title: '列标题插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['options'],
                            value: [],
                          },
                        },
                      ],
                      isRequired: true,
                    },
                    {
                      name: 'render',
                      title: {
                        label: '自定义渲染',
                        tip: 'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引',
                      },
                      propType: 'func',
                      setter: [
                        {
                          componentName: 'SlotSetter',
                          title: '单元格插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['text', 'record', 'index'],
                            value: [],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                  ],
                },
              },
              initialValue: { title: '标题' },
            },
          },
        },
      },
      ...props,
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
  advanced: {},
  icon: takeIcon(ArrayTableSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
