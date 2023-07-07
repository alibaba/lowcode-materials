export default {
  group: '原子组件',
  componentName: 'Progress',
  title: '进度指示器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
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
    props: [
      {
        name: 'shape',
        title: '形状',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '圆形',
                value: 'circle',
              },
              {
                label: '线',
                value: 'line',
              },
            ],
          },
        },
        description: '形态',
        defaultValue: 'line',
      },
      {
        name: 'progressive',
        title: {
          label: '类型',
          tip: '是否为色彩阶段变化模式, 显示优先级: color > progressive > state',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '基础型',
                value: false,
              },
              {
                label: '阶段型',
                value: true,
              },
            ],
          },
        },
        description: '是否为色彩阶段变化模式, 显示优先级: color > progressive > state',
        defaultValue: false,
      },
      {
        name: 'state',
        title: '状态',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '普通',
                value: 'normal',
              },
              {
                label: '成功',
                value: 'success',
              },
              {
                label: '失败',
                value: 'error',
              },
            ],
          },
        },
        description: '进度状态, 显示优先级: color > progressive > state',
        defaultValue: 'normal',
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '小',
                value: 'small',
              },
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        description: '尺寸',
        defaultValue: 'medium',
      },
      {
        name: '!showData',
        title: {
          label: '显示数据',
          tip: '是否显示百分比数据',
        },
        setter: 'BoolSetter',
        setValue: (target, value) => {
          if (value === false) {
            target.parent.setPropValue('textRender', () => {});
          } else {
            target.parent.setPropValue('textRender', (percent) => `${Math.floor(percent)}%`);
          }
        },
        defaultValue: true,
      },
      {
        name: 'hasBorder',
        condition: (target) => {
          return target?.parent?.getPropValue('shape') === 'line';
        },
        title: '边框',
        setter: 'BoolSetter',
        description: '是否添加 Border（只适用于 Line Progress)',
        defaultValue: false,
      },
      {
        name: 'style.width',
        condition: (target) => {
          return target?.parent?.getPropValue('shape') === 'line';
        },
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'percent',
        title: '百分比',
        setter: 'NumberSetter',
      },
    ],
  },
  icon: '',
  category: '信息展示',
  snippets: require('./snippets'),
};
