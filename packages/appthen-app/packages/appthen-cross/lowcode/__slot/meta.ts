module.exports = {
  componentName: 'Slot',
  title: '组件插槽',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Slot',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '导航',
  icon: 'rqetabbar',
  configure: {
    props: [
      {
        name: '___title',
        title: {
          type: 'i18n',
          'en-US': 'Slot Title',
          'zh-CN': '插槽标题',
        },
        setter: 'StringSetter',
        defaultValue: '插槽容器',
      },
      {
        name: '___params',
        title: {
          type: 'i18n',
          'en-US': 'Slot Params',
          'zh-CN': '插槽入参',
        },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'StringSetter',
              props: {
                placeholder: {
                  type: 'i18n',
                  'zh-CN': '参数名称',
                  'en-US': 'Argument Name',
                },
              },
            },
          },
        },
      },
    ],
    component: {
      isContainer: true,
      disableBehaviors: '*',
    },
    // events/className/style/general/directives
    supports: false,
    advanced: {
      callbacks: {
        onHoverHook: () => false,
        onMouseDownHook: () => false,
        onClickHook: () => false,
      },
    },
  },
};
