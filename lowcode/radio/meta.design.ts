import snippets from './snippets.design';

export default {
  group: '原子组件',
  componentName: 'Radio',
  title: '单选框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Radio',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
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
      name: 'id',
      propType: 'string',
      description: 'input元素id',
    },
    {
      name: 'name',
      propType: 'string',
      description: 'name',
    },
    {
      name: 'checked',
      propType: 'bool',
      description: '是否选中',
    },
    {
      name: 'defaultChecked',
      propType: 'bool',
      description: '是否默认选中',
    },
    {
      name: 'label',
      propType: 'string',
      description: '通过属性配置label',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否被禁用',
    },
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      description: 'value',
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
      defaultValue: false,
    },
    {
      name: 'renderPreview',
      propType: 'func',
      description: '预览态模式下渲染的内容',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '状态变化时触发的事件\n@param {Boolean} checked 是否选中\n@param {Event} e Dom 事件对象',
    },
    {
      name: 'onMouseEnter',
      propType: 'func',
      description: '鼠标进入enter事件\n@param {Event} e Dom 事件对象',
    },
    {
      name: 'onMouseLeave',
      propType: 'func',
      description: '鼠标离开事件\n@param {Event} e Dom 事件对象',
    },
  ],
  icon: '',
  category: '信息输入',
  snippets,
};
