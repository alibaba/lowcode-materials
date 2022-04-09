// FIXME: 选中tabPane点复制，会出问题，因为复制的组件key一样

export default {
  componentName: 'List.Item',
  title: '列表项',
  category: '',
  props: [
    {
      name: 'actions',
      title: {
        label: '列表操作组',
        tip: '列表操作组',
      },
      propType: { type: 'arrayOf', value: 'node' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'SlotSetter',
            title: '操作组插槽',
            initialValue: {
              type: 'JSSlot',
              value: [],
            },
          },
        },
      },
    },
    {
      name: 'extra',
      title: {
        label: '额外内容',
        tip: '额外内容',
      },
      propType: 'node',
      setter: 'SlotSetter',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['List'],
      },
    },
  },
};
