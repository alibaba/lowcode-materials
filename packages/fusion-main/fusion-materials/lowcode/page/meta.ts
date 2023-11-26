export default [
  {
    group: '原子组件',
    componentName: 'Page',
    title: '页面',
    props: [
      {
        name: 'style',
        propType: 'object',
        defaultValue: {
          padding: 12,
        },
      },
    ],
    configure: {
      events: {
        supportedLifecycles: [
          {
            description: '初始化时',
            name: 'constructor',
          },
          {
            description: '装载后',
            name: 'componentDidMount',
          },
          {
            description: '更新时',
            name: 'componentDidMount',
          },
          {
            description: '卸载时',
            name: 'componentWillUnmount',
          },
        ],
      },
      supports: {
        style: true,
      },
      component: {
        isContainer: true,
        disableBehaviors: '*',
      },
    },
    category: '基础',
  },
  {
    componentName: 'Leaf',
    npm: {
      package: '@alifd/next',
      version: '{{version}}',
      exportName: 'Typography',
      main: '',
      destructuring: true,
      subName: 'Text',
    },
    configure: {
      component: {
        disableBehaviors: '*',
      },
      advanced: {
        callbacks: {
          onHoverHook: () => false,
          onMouseDownHook: () => false,
          onClickHook: () => false,
        },
      },
    },
  },
];