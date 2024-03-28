module.exports = {
  componentName: 'NextText',
  title: '文本',
  category: '基础元素',
  group: '精选组件',
  npm: {
    package: '@alilc/lowcode-materials',
    version: 'latest',
    exportName: 'NextText',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'classname',
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'children',
      propType: 'string',
    },
    {
      name: 'mark',
      title: '标记',
      propType: 'bool',
      description: '添加标记样式',
      defaultValue: false,
    },
    {
      name: 'code',
      title: '代码',
      propType: 'bool',
      description: '添加代码样式',
      defaultValue: false,
    },
    {
      name: 'delete',
      title: '删除线',
      propType: 'bool',
      description: '添加删除线样式',
      defaultValue: false,
    },
    {
      name: 'underline',
      title: '下划线',
      propType: 'bool',
      description: '添加下划线样式',
      defaultValue: false,
    },
    {
      name: 'strong',
      propType: 'bool',
      description: '是否加粗',
      defaultValue: false,
    },
    {
      name: 'className',
      propType: 'string',
      },
    {
      name: 'onClick',
      propType: 'func',
      description: '鼠标点击',
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
          name: 'prefix',
          condition: () => false,
        },
        {
          name: 'classname',
          condition: () => false,
        },
        {
          name: 'children',
          supportVariable: true,
          title: {
            label: {
              type: 'i18n',
              zh_CN: '文本内容',
              en_US: 'Text',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性：children | 说明：文本内容',
              en_US: 'prop: children | description: text of the content',
            },
          },
          setter: 'TextAreaSetter',
          supportVariable: true,
        },
      ],
    },
  },
  snippets: require('./snippets'),
};
