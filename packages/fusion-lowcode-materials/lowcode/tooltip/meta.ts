module.exports = {
  group: '原子组件',
  componentName: 'Tooltip',
  title: 'Tooltip',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Balloon',
    main: '',
    destructuring: true,
    subName: 'Tooltip',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      description: '样式类名的品牌前缀',
      defaultValue: 'next-',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
    {
      name: 'children',
      propType: 'node',
      description: 'tooltip的内容',
    },
    {
      name: 'align',
      propType: {
        type: 'oneOf',
        value: ['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb'],
      },
      description:
        '弹出层位置\n@enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合',
      defaultValue: 'b',
    },
    {
      name: 'trigger',
      propType: 'node',
      description: '触发元素',
    },
    {
      name: 'triggerType',
      propType: {
        type: 'oneOf',
        value: ['hover', 'click'],
      },
      description:
        "触发行为\n鼠标悬浮,  鼠标点击('hover', 'click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用triggerType为click的Balloon组件",
      defaultValue: 'hover',
    },
    {
      name: 'popupStyle',
      propType: 'object',
      description: '弹层组件style，透传给Popup',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹层组件className，透传给Popup',
    },
    {
      name: 'popupProps',
      propType: 'object',
      description: '弹层组件属性，透传给Popup',
    },
    {
      name: 'pure',
      propType: 'bool',
      description: '是否pure render',
    },
    {
      name: 'popupContainer',
      propType: 'string',
      description: '指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。',
    },
    {
      name: 'followTrigger',
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'id',
      propType: 'string',
      description: '弹层id, 传入值才会支持无障碍',
    },
    {
      name: 'delay',
      propType: 'number',
      description: '如果需要让 Tooltip 内容可被点击，可以设置这个参数，例如 100',
      defaultValue: 0,
    },
  ],
  category: '基础',
};
