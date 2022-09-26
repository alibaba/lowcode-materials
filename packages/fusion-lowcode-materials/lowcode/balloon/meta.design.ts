import snippets from './snippets.design';

export default {
  group: '原子组件',
  componentName: 'Balloon',
  title: '气泡框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: 'latest',
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
    props: [
      {
        name: 'mode',
        title: '模式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '气泡',
                value: 'Balloon',
              },
              {
                label: '提示',
                value: 'Tooltip',
              },
            ],
          },
        },
      },
      {
        name: 'type',
        title: '样式类型',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '普通',
                value: 'normal',
              },
              {
                label: '主要',
                value: 'primary',
              },
            ],
          },
        },
        defaultValue: 'normal',
      },
      {
        name: 'triggerType',
        title: '触发行为',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '悬停',
                value: 'hover',
              },
              {
                label: '点击',
                value: 'click',
              },
            ],
          },
        },
        description:
          "触发行为\n鼠标悬浮, 鼠标点击('hover','click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若弹窗内容有复杂交互请使用click",
        defaultValue: 'hover',
      },
      {
        name: 'align',
        title: '弹出位置',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '顶部',
                value: 't',
              },
              {
                label: '右侧',
                value: 'r',
              },
              {
                label: '底部',
                value: 'b',
              },
              {
                label: '左侧',
                value: 'l',
              },
              {
                label: '顶部左侧',
                value: 'tl',
              },
              {
                label: '顶部右侧',
                value: 'tr',
              },
              {
                label: '底部左侧',
                value: 'bl',
              },
              {
                label: '底部右侧',
                value: 'br',
              },
              {
                label: '左侧顶部',
                value: 'lt',
              },
              {
                label: '左侧底部',
                value: 'lb',
              },
              {
                label: '右侧顶部',
                value: 'rt',
              },
              {
                label: '右侧底部',
                value: 'rb',
              },
            ],
          },
        },
        description:
          '弹出层位置\n@enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合',
        defaultValue: 'b',
      },
      {
        name: 'closable',
        title: '关闭按钮',
        setter: 'BoolSetter',
      },
      {
        name: 'followTrigger',
        title: '跟随滚动',
        setter: 'BoolSetter',
      },
      {
        name: 'defaultVisible',
        title: '展示弹层',
        setter: 'BoolSetter',
        description: '弹层当前显示的状态',
      },
      {
        name: 'children',
        title: '弹层内容',
        setter: 'TextAreaSetter',
      },
    ],
  },
  icon: '',
  category: '信息反馈',
  snippets,
};
