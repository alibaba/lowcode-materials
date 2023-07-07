module.exports = {
  group: '原子组件',
  componentName: 'Nav',
  title: '导航',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Nav',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'children',
      propType: 'node',
      description: '导航项和子导航',
    },
    {
      name: 'type',
      propType: {
        type: 'oneOf',
        value: ['normal', 'primary', 'secondary', 'line'],
      },
      description: '导航类型',
      defaultValue: 'normal',
    },
    {
      name: 'direction',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '导航布局',
      defaultValue: 'ver',
    },
    {
      name: 'hozAlign',
      propType: {
        type: 'oneOf',
        value: ['left', 'right'],
      },
      description: '对齐方向',
      defaultValue: 'left',
    },
    {
      name: 'activeDirection',
      propType: {
        type: 'oneOf',
        value: [null, 'top', 'bottom', 'left', 'right'],
      },
      description: '选中条方向',
    },
    {
      name: 'mode',
      propType: {
        type: 'oneOf',
        value: ['inline', 'popup'],
      },
      description: '子导航打开的模式',
      defaultValue: 'inline',
    },
    {
      name: 'triggerType',
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '子导航打开的触发方式',
      defaultValue: 'click',
    },
    {
      name: 'inlineIndent',
      propType: 'number',
      description: '内联子导航缩进距离',
      defaultValue: 20,
    },
    {
      name: 'defaultOpenAll',
      propType: 'bool',
      description: '初始展开所有的子导航',
      defaultValue: false,
    },
    {
      name: 'openMode',
      propType: {
        type: 'oneOf',
        value: ['single', 'multiple'],
      },
      description: '内联子导航的展开模式',
      defaultValue: 'multiple',
    },
    {
      name: 'selectedKeys',
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
      description: '当前选中导航key值',
    },
    {
      name: 'defaultSelectedKeys',
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
      description: '初始选中导航项的key值',
    },
    {
      name: 'onSelect',
      propType: 'func',
      description:
        '选中或取消选中导航项触发的回调函数\n@param {Array} selectedKeys 选中的所有导航项的 key\n@param {Object} item 选中或取消选中的导航项\n@param {Object} extra 额外参数\n@param {Boolean} extra.select 是否是选中\n@param {Array} extra.key 导航项的 key\n@param {Object} extra.label 导航项的文本\n@param {Array} extra.keyPath 导航项 key 的路径',
    },
    {
      name: 'popupAlign',
      propType: {
        type: 'oneOf',
        value: ['follow', 'outside'],
      },
      description:
        '弹出子导航的对齐方式（水平导航只支持 follow ）\n@eumdesc Item 顶端对齐, Nav 顶端对齐',
      defaultValue: 'follow',
    },
    {
      name: 'popupClassName',
      propType: 'string',
      description: '弹出子导航的自定义类名',
    },
    {
      name: 'iconOnly',
      propType: 'bool',
      description: '是否只显示图标',
    },
    {
      name: 'hasArrow',
      propType: 'bool',
      description: '是否显示右侧的箭头',
      defaultValue: true,
    },
    {
      name: 'hasTooltip',
      propType: 'bool',
      description: '是否有ToolTips',
      defaultValue: false,
    },
    {
      name: 'header',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '自定义导航头部',
    },
    {
      name: 'footer',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '自定义导航尾部',
    },
    {
      name: 'embeddable',
      propType: 'bool',
      description: '开启嵌入式模式',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
  },
  icon: '',
  category: '引导',
};
