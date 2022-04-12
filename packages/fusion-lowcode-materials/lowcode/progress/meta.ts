module.exports = {
  group: '原子组件',
  componentName: 'Progress',
  title: '进度指示器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Progress',
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
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['circle', 'line'],
      },
      description: '形态',
      defaultValue: 'line',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'percent',
      title: '百分比',
      propType: 'number',
      description: '所占百分比',
      defaultValue: 0,
    },
    {
      name: 'state',
      title: '进度状态',
      propType: {
        type: 'oneOf',
        value: ['normal', 'success', 'error'],
      },
      description: '进度状态, 显示优先级: color > progressive > state',
      defaultValue: 'normal',
    },
    {
      name: 'progressive',
      title: {
        label: '色阶变化',
        tip: '是否为色彩阶段变化模式, 显示优先级: color > progressive > state',
      },
      propType: 'bool',
      description: '是否为色彩阶段变化模式, 显示优先级: color > progressive > state',
      defaultValue: false,
    },
    {
      name: 'hasBorder',
      title: '边框',
      propType: 'bool',
      description: '是否添加 Border（只适用于 Line Progress)',
      defaultValue: false,
    },
    {
      name: 'textRender',
      title: {
        label: '文本渲染',
        tip: '文本渲染函数\n@param {Number} percent 当前的进度信息\n@param {Object} option 额外的参数\n@property {Boolean} option.rtl 是否在rtl 模式下渲染\n@return {ReactNode} 返回文本节点',
      },
      propType: 'func',
      description:
        '文本渲染函数\n@param {Number} percent 当前的进度信息\n@param {Object} option 额外的参数\n@property {Boolean} option.rtl 是否在rtl 模式下渲染\n@return {ReactNode} 返回文本节点',
    },
    {
      name: 'color',
      propType: 'string',
      description: '进度条颜色, 显示优先级: color > progressive > state',
    },
    {
      name: 'backgroundColor',
      propType: 'string',
      description: '背景色',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'rtl',
          condition: () => false,
        },
        {
          name: 'prefix',
          condition: () => false,
        },
        {
          name: 'percent',
          title: '百分比',
          supportVariable: true,
          setter: 'NumberSetter',
        },
        {
          name: 'color',
          title: {
            label: '进度条颜色',
            tip: 'color|进度条颜色, 显示优先级: color > progressive > state',
          },
          setter: {
            componentName: 'ColorSetter',
          },
        },
        {
          name: 'backgroundColor',
          title: {
            label: '背景色',
            tip: 'backgroundColor|背景色',
          },
          setter: {
            componentName: 'ColorSetter',
          },
        },
      ],
    },
  },
  icon: '',
  category: '信息反馈',
  snippets: require('./snippets'),
};
