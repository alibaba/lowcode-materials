module.exports = {
  group: '原子组件',
  componentName: 'Tag.Closeable',
  title: '可关闭标签',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Tag',
    main: '',
    destructuring: true,
    subName: 'Closeable',
  },
  props: [
    {
      name: 'closeArea',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '关闭区域',
          en_US: 'Close Area',
        },
        tip: {
          type: 'i18n',
          zh_CN:
            '属性: closeArea | 说明: closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮',
          en_US: 'prop: closeArea | description: close area',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['tag', 'tail'],
      },
      description: 'closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮',
    },
    {
      name: 'size',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标签尺寸',
          en_US: 'Tag Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: size | 说明: 标签的尺寸（large 尺寸为兼容表单场景 large = medium）',
          en_US: 'prop: size | description: tag size',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '标签的尺寸（large 尺寸为兼容表单场景 large = medium）',
    },
    {
      name: 'onClose',
      propType: 'func',
      description: '点击关闭按钮时的回调，返回值 true 则关闭, false 阻止关闭',
    },
    {
      name: 'onClick',
      propType: 'func',
      description: '点击回调',
    },
    {
      name: 'afterClose',
      propType: 'func',
      description: '标签关闭后执行的回调',
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
