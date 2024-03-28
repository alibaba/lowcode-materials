export const snippets = [
  {
    title: 'VarInjectContainer',
    schema: {
      title: 'VarInjectContainer',
      componentName: 'FormilyVarInjectContainer',
      props: {
        render: {
          type: 'JSSlot',
          params: ['scope'],
          value: {
            componentName: 'Slot',
            props: {
              __component_name: 'Slot',
            },
            params: ['scope'],
          },
        },
      },
    },
  },
];
