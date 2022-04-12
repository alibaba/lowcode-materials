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
      name: 'type',
      title: '字体大小',
      extraProps: {
        defaultValue: 'body2',
      },
      defaultValue: 'body2',
      initialValue: 'body2',
      setter: {
        componentName: 'SelectSetter',
        initialValue: 'body2',
        props: {
          defaultValue: 'body2',
          options: [
            {
              title: '默认',
              value: 'inherit',
            },
            {
              title: 'h1',
              value: 'h1',
            },
            {
              title: 'h2',
              value: 'h2',
            },
            {
              title: 'h3',
              value: 'h3',
            },
            {
              title: 'h4',
              value: 'h4',
            },
            {
              title: 'h5',
              value: 'h5',
            },
            {
              title: 'h6',
              value: 'h6',
            },
            {
              title: 'body1',
              value: 'body1',
            },
            {
              title: 'body2',
              value: 'body2',
            },
            {
              title: 'caption',
              value: 'caption',
            },
            {
              title: 'overline',
              value: 'overline',
            },
          ],
        },
      },
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
