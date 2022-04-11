module.exports = {
  group: '原子组件',
  componentName: 'Tag',
  title: '标签',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Tag',
    main: '',
    destructuring: true,
  },
  props: [
    {
      name: 'type',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标签类型',
          en_US: 'Tag Type',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: type | 说明: 标签的类型',
          en_US: 'prop: type | description: tag type',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['normal', 'primary'],
      },
      description: '标签的类型',
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
      name: 'color',
      propType: 'string',
      description:
        '标签颜色, 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效',
    },
    {
      name: 'animation',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '开启动效',
          en_US: 'Animation',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: animation | 说明: 是否开启动效',
          en_US: 'prop: animation | description: enable animation',
        },
      },
      propType: 'bool',
      description: '是否开启动效',
    },
    {
      name: 'afterAppear',
      propType: 'func',
      description: '标签出现动画结束后执行的回调',
    },
    {
      name: 'onClick',
      propType: 'func',
      description: '点击回调',
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
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'color',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '标签颜色',
              en_US: 'Tag Color',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: color | 说明: 是否开启动效',
              en_US:
                'prop: color | description: 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效',
            },
          },
          setter: {
            componentName: 'ColorSetter',
          },
        },
      ],
    },
  },
  icon: '',
  category: '信息展示',
  snippets: require('./snippets'),
};
