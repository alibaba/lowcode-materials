module.exports = {
  group: '原子组件',
  componentName: 'Table.Column',
  title: 'Table.Column',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Table',
    main: '',
    destructuring: true,
    subName: 'Column',
  },
  props: [
    {
      name: 'title',
      propType: 'string',
    },
    {
      name: 'dataIndex',
      propType: 'string',
    },
    {
      name: 'cell',
      propType: 'func',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'cell',
          setter: {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              value: [],
            },
            props: {
              supportParams: true,
            },
          },
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
  },
  category: '基础',
};
