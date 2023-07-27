module.exports = {
  group: '原子组件',
  componentName: 'Collapse',
  title: '折叠面板',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Collapse',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'dataSource',
      propType: 'array',
      description: '使用数据模型构建',
    },
    {
      name: 'defaultExpandedKeys',
      propType: {
        type: 'arrayOf',
        value: 'string',
      },
      description: '默认展开keys',
    },
    {
      name: 'expandedKeys',
      propType: {
        type: 'arrayOf',
        value: 'string',
      },
      description: '受控展开keys',
    },
    {
      name: 'onExpand',
      propType: 'func',
      description: '展开状态发升变化时候的回调',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '所有禁用',
    },
    {
      name: 'className',
      propType: 'string',
      description: '扩展class',
    },
    {
      name: 'style',
      propType: 'object',
      description: '组件接受行内样式',
    },
    {
      name: 'accordion',
      propType: 'bool',
      description: '手风琴模式，一次只能打开一个',
      defaultValue: false,
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: {
      isExtends: true,
      override: [
        {
          name: 'dataSource',
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: ['JsonSetter', 'ExpressionSetter'],
            },
          },
        },
      ],
    },
  },
  icon: '',
  category: '信息输入',
};
