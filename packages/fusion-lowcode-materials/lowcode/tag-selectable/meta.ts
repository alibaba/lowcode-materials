module.exports = {
  group: '原子组件',
  componentName: 'Tag.Selectable',
  title: '可选中标签',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Tag',
    main: '',
    destructuring: true,
    subName: 'Selectable',
  },
  props: [
    {
      name: 'checked',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否选中',
          en_US: 'Checked',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: checked | 说明: 标签是否被选中，受控用法',
          en_US: 'prop: checked | description: tag checked',
        },
      },
      propType: 'bool',
      description: '标签是否被选中，受控用法',
    },
    {
      name: 'defaultChecked',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '默认选中',
          en_US: 'Default Checked',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: defaultChecked | 说明: 标签是否默认被选中，非受控用法',
          en_US: 'prop: defaultChecked | description: tag default checked',
        },
      },
      propType: 'bool',
      description: '标签是否默认被选中，非受控用法',
    },
    {
      name: 'disabled',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否禁用',
          en_US: 'Disabled',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: disabled | 说明: 标签是否被禁用',
          en_US: 'prop: disabled | description: tag disabled',
        },
      },
      propType: 'bool',
      description: '标签是否被禁用',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '选中状态变化时触发的事件 Function(checked: Boolean, e: Event) => void',
    },
    {
      name: 'children',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标签文本',
          en_US: 'Content',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: children | 说明: 标签文本内容',
          en_US: 'prop: children | description: tag content',
        },
      },
      propType: 'string',
      description: '内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {},
  icon: '',
  category: '信息输入',
};
