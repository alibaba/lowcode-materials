module.exports = {
  group: '原子组件',
  componentName: 'Dropdown',
  title: '下拉菜单',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Dropdown',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
    },
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
    },
    {
      name: 'visible',
      propType: 'bool',
      description: '弹层当前是否显示',
    },
    {
      name: 'defaultVisible',
      propType: 'bool',
      description: '弹层默认是否显示',
      defaultValue: false,
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '弹层显示或隐藏时触发的回调函数\n@param {Boolean} visible 弹层是否显示\n@param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发',
    },
    {
      name: 'triggerType',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          {
            type: 'instanceOf',
            value: 'array',
          },
        ],
      },
      description:
        "触发弹层显示或隐藏的操作类型，可以是 'click'，'hover'，或者它们组成的数组，如 ['hover', 'click']",
      defaultValue: 'hover',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '设置此属性，弹层无法显示或隐藏',
      defaultValue: false,
    },
    {
      name: 'align',
      propType: 'string',
      description: '弹层相对于触发元素的定位, 详见 Overlay 的定位部分',
      defaultValue: 'tl bl',
    },
    {
      name: 'offset',
      propType: {
        type: 'instanceOf',
        value: 'array',
      },
      description:
        '弹层相对于trigger的定位的微调, 接收数组[hoz, ver], 表示弹层在 left / top 上的增量\ne.g. [100, 100] 表示往右(RTL 模式下是往左) 、下分布偏移100px',
      defaultValue: [0, 0],
    },
    {
      name: 'delay',
      propType: 'number',
      description: '弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效',
      defaultValue: 200,
    },
    {
      name: 'autoFocus',
      propType: 'bool',
      description: '弹层打开时是否让其中的元素自动获取焦点',
    },
    {
      name: 'hasMask',
      propType: 'bool',
      description: '是否显示遮罩',
      defaultValue: false,
    },
    {
      name: 'cache',
      propType: 'bool',
      description: '隐藏时是否保留子节点',
      defaultValue: false,
    },
    {
      name: 'animation',
      propType: {
        type: 'oneOfType',
        value: ['object', 'bool'],
      },
      description:
        "配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画\n@default { in: 'expandInDown', out: 'expandOutUp' }",
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
          name: 'trigger',
          title: {
            label: '触发元素',
            tip: '',
          },
          setter: 'SlotSetter',
          supportVariable: true,
        },
        {
          name: 'animation',
          title: {
            label: 'animation',
            tip: "配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画\n@default { in: 'expandInDown', out: 'expandOutUp' }",
          },
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: [
                {
                  componentName: 'ObjectSetter',
                  props: {
                    config: {
                      items: [
                        {
                          name: 'in',
                          description: '',
                          setter: 'StringSetter',
                          supportVariable: true,
                          defaultValue: 'enter-class',
                        },
                        {
                          name: 'out',
                          description: '',
                          setter: 'StringSetter',
                          supportVariable: true,
                          defaultValue: 'leave-class',
                        },
                      ],
                    },
                  },
                  initialValue: {
                    in: 'enter-class',
                    out: 'leave-class',
                  },
                },
                {
                  componentName: 'BoolSetter',
                  initialValue: true,
                },
              ],
            },
          },
        },
      ],
    },
  },
  icon: '',
  category: '信息输入',
};
