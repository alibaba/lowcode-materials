module.exports = {
  group: '原子组件',
  componentName: 'Wrapper',
  title: '备注容器',
  category: 'Others',
  npm: {
    package: '@alilc/lowcode-materials',
    version: 'latest',
    exportName: 'NoteWrapper',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'note',
      propType: 'string',
      defaultValue: '这是一个备注',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: false,
    },
    props: [
      {
        name: 'style',
        setter: 'StyleSetter',
        supportVariable: true,
      },
      {
        name: 'note',
        propType: 'string',
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
  },
  icon: '',
};
