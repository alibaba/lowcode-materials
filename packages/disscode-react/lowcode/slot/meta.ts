module.exports = {
  componentName: 'SlotRender',
  title: '组件插槽',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'SlotRender',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'children',
        title: {
          type: 'i18n',
          'en-US': 'Field',
          'zh-CN': '属性绑定',
        },
        type: 'field',
        setter: 'SlotSetter',
      },
    ],
    component: {},
  },
};
