// FIXME: 选中tabPane点复制，会出问题，因为复制的组件key一样

export default {
  componentName: 'Collapse.Panel',
  title: '折叠项',
  category: '',
  props: [
    {
      name: 'key',
      title: {
        label: 'key',
        tip: 'key',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'header',
      title: {
        label: '标题',
        tip: '标题',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },

    {
      name: 'extra',
      title: {
        label: '右上角内容',
        tip: '自定义渲染每个面板右上角的内容',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'collapsible',
      title: '可折叠触发区域',
      propType: {
        type: 'oneOf',
        value: ['-', 'header', 'disabled'],
      },
    },
    {
      name: 'showArrow',
      title: {
        label: '显示折叠图标',
        tip: '是否展示当前面板上的箭头',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'forceRender',
      title: {
        label: '隐藏时渲染',
        tip: '被隐藏时是否渲染 DOM 结构',
      },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Collapse'],
      },
    },
  },
};
