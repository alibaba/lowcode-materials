module.exports = {
  group: '原子组件',
  componentName: 'MenuButton',
  title: '菜单按钮',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'MenuButton',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'label',
      propType: 'string',
      description: '按钮上的文本内容',
    },
    {
      name: 'autoWidth',
      propType: 'bool',
      description: '弹层是否与按钮宽度相同',
      defaultValue: true,
    },
    {
      name: 'popupTriggerType',
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '弹层触发方式',
      defaultValue: 'click',
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '弹层容器',
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '弹层展开状态',
    },
    {
      name: 'defaultVisible',
      propType: 'bool',
      description: '弹层默认是否展开',
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description: '弹层在显示和隐藏触发的事件',
    },
    {
      name: 'popupStyle',
      propType: 'object',
      description: '弹层自定义样式',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹层自定义样式类',
    },
    {
      name: 'popupProps',
      propType: 'object',
      description: '弹层属性透传',
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'defaultSelectedKeys',
      propType: {
        type: 'arrayOf',
        value: 'string',
      },
      description: '默认激活的菜单项（用法同 Menu 非受控）',
      defaultValue: [],
    },
    {
      name: 'selectedKeys',
      propType: {
        type: 'arrayOf',
        value: 'string',
      },
      description: '激活的菜单项（用法同 Menu 受控）',
    },
    {
      name: 'selectMode',
      propType: {
        type: 'oneOf',
        value: ['single', 'multiple'],
      },
      description: '菜单的选择模式，同 Menu',
    },
    {
      name: 'onItemClick',
      propType: 'func',
      description: '点击菜单项后的回调，同 Menu',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description: '选择菜单后的回调，同 Menu',
    },
    {
      name: 'menuProps',
      propType: 'object',
      description: '菜单属性透传',
    },
    {
      name: 'style',
      propType: 'object',
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
          name: 'popupContainer',
          title: {
            label: '弹层容器',
            tip: '指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数()。',
          },
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: ['StringSetter', 'FunctionSetter'],
            },
          },
        },
      ],
    },
  },
  icon: '',
  category: '常用',
};
