module.exports = {
  group: '原子组件',
  componentName: 'Balloon',
  title: '气泡框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Balloon',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'pure',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'type',
      propType: {
        type: 'oneOf',
        value: ['normal', 'primary'],
      },
      description: '样式类型',
      defaultValue: 'normal',
    },
    {
      name: 'triggerType',
      title: '触发行为',
      propType: {
        type: 'oneOf',
        value: ['hover', 'click'],
      },
      description:
        "触发行为\n鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用click",
      defaultValue: 'hover',
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '弹层当前显示的状态',
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '弹层在显示和隐藏触发的事件\n@param {Boolean} visible 弹层是否隐藏和显示\n@param {String} type 触发弹层显示或隐藏的来源， closeClick 表示由自带的关闭按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发',
    },
    {
      name: 'align',
      title: '弹出位置',
      propType: {
        type: 'oneOf',
        value: ['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb'],
      },
      description:
        '弹出层位置\n@enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合',
      defaultValue: 'b',
    },
    {
      name: 'offset',
      propType: {
        type: 'arrayOf',
        value: 'number',
      },
      description:
        '弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量\ne.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px',
      defaultValue: [0, 0],
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素',
    },
    {
      name: 'delay',
      title: '延迟显示',
      propType: 'number',
      description: '弹层在触发以后的延时显示, 单位毫秒 ms',
    },
    {
      name: 'trigger',
      propType: 'node',
      description: '触发元素',
    },
    {
      name: 'onClick',
      propType: 'func',
    },
    {
      name: 'onClose',
      propType: 'func',
      description: '任何visible为false时会触发的事件',
    },
    {
      name: 'onHover',
      propType: 'func',
    },
    {
      name: 'defaultVisible',
      title: '默认显示',
      propType: 'bool',
      description: '弹层默认显示的状态',
      defaultValue: false,
    },
    {
      name: 'alignEdge',
      title: '边缘对齐',
      propType: 'bool',
      description: '弹出层对齐方式, 是否为边缘对齐',
      defaultValue: false,
    },
    {
      name: 'closable',
      title: '关闭按钮',
      propType: 'bool',
      description: '是否显示关闭按钮',
      defaultValue: true,
    },
    {
      name: 'needAdjust',
      title: '自动调整',
      propType: 'bool',
      description: '是否进行自动位置调整',
      defaultValue: false,
    },
    {
      name: 'afterClose',
      propType: 'func',
      description: '浮层关闭后触发的事件, 如果有动画，则在动画结束后触发',
    },
    {
      name: 'shouldUpdatePosition',
      propType: 'bool',
      description: '强制更新定位信息',
    },
    {
      name: 'autoFocus',
      title: '自动聚焦',
      propType: 'bool',
      description: '弹层出现后是否自动focus到内部第一个元素',
      defaultValue: true,
    },
    {
      name: 'followTrigger',
      title: '跟随滚动',
      propType: 'bool',
      description: '是否跟随滚动',
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
          name: 'prefix',
          condition: () => false,
        },
        {
          name: 'rtl',
          condition: () => false,
        },
        {
          name: 'pure',
          condition: () => false,
        },
        {
          name: 'visible',
          condition: () => false,
        },
        {
          name: 'offset',
          condition: () => false,
        },
        {
          name: 'shouldUpdatePosition',
          condition: () => false,
        },
        {
          name: 'popupContainer',
          title: {
            docUrl: 'https://fusion.alibaba-inc.com/pc/component/basic/balloon#demo-api',
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
  category: '信息反馈',
  snippets: require('./snippets'),
};
