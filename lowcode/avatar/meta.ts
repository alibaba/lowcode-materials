module.exports = {
  group: '原子组件',
  componentName: 'Avatar',
  title: '头像',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Avatar',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'children',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '文本内容',
          en_US: 'Content',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: children | 说明: 文本内容',
          en_US: 'prop: children | description: avatar content',
        },
      },
      propType: 'string',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'size',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '头像尺寸',
          en_US: 'Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: size | 说明: 头像的大小',
          en_US: 'prop: size | description: avatar size',
        },
      },
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'oneOf',
            value: ['small', 'medium', 'large'],
          },
          'number',
        ],
      },
      description: '头像的大小',
      defaultValue: 'medium',
    },
    {
      name: 'shape',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '头像形状',
          en_US: 'Shape',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: shape | 说明: 头像的形状',
          en_US: 'prop: shape | description: avatar shape',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['circle', 'square'],
      },
      description: '头像的形状',
      defaultValue: 'circle',
    },
    {
      name: 'icon',
      title: 'icon',
      propType: 'string',
      description: 'icon 类头像的图标类型，可设为 Icon 的 `type` 或 `ReactNode`',
    },
    {
      name: 'src',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '头像地址',
          en_US: 'Src',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: src | 说明: 图片类头像的资源地址',
          en_US: 'prop: src | description: resource address',
        },
      },
      propType: 'string',
      description: '图片类头像的资源地址',
    },
    {
      name: 'onError',
      propType: 'func',
      description: '图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为',
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
          name: 'icon',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '图标',
              en_US: 'Icon',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: icon | 说明: 图标类型',
              en_US: 'prop: icon | description: icon type',
            },
          },
          setter: {
            componentName: 'IconSetter',
          },
        },
      ],
    },
  },
  icon: '',
  category: '信息展示',
  snippets: require('./snippets'),
};
