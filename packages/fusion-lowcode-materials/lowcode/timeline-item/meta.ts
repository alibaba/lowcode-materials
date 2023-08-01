module.exports = {
  group: '原子组件',
  componentName: 'Timeline.Item',
  title: '时间轴项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Timeline',
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'state',
      propType: {
        type: 'oneOf',
        value: ['done', 'process', 'error', 'success'],
      },
      description: '节点状态',
      defaultValue: 'done',
    },
    {
      name: 'icon',
      propType: 'string',
      description: '图标',
    },
    {
      name: 'dot',
      propType: 'node',
      description: '自定义时间轴节点',
    },
    {
      name: 'time',
      propType: 'string',
      description: '格式化后的时间',
    },
    {
      name: 'title',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      description: '标题',
    },
    {
      name: 'timeLeft',
      propType: 'string',
      description: '左侧时间',
    },
    {
      name: 'content',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      description: '右侧内容',
    },
    {
      name: 'animation',
      propType: 'bool',
      description: '动画',
      defaultValue: true,
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: false,
      nestingRule: {
        parentWhitelist: ['Timeline'],
      },
    },
    props: [
      {
        name: 'title',
        setter: 'StringSetter',
        supportVariable: true,
        title: '标题',
      },
      {
        name: 'icon',
        title: '图标',
        setter: 'IconSetter',
        supportVariable: true,
        description: '图标',
      },
      {
        name: 'state',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['done', 'process', 'error', 'success'],
          },
        },
        title: '节点状态',
        defaultValue: 'done',
      },
      {
        name: 'time',
        setter: 'DateSetter',
        supportVariable: true,
        title: '右侧时间',
      },
      {
        name: 'timeLeft',
        setter: 'DateSetter',
        supportVariable: true,
        title: '左侧时间',
      },
      {
        name: 'content',
        setter: 'TextAreaSetter',
        supportVariable: true,
        title: '右侧内容',
      },
      {
        name: 'animation',
        setter: 'BoolSetter',
        supportVariable: true,
        title: '启用动画',
        defaultValue: true,
      },
    ],
  },
  icon: '',
  category: 'null',
};
