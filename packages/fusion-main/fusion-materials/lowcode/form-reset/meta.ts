module.exports = {
  group: '原子组件',
  componentName: 'Form.Reset',
  title: '重置按钮',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Form',
    main: '',
    destructuring: true,
    subName: 'Reset',
  },
  props: [
    {
      name: 'onClick',
      propType: 'func',
      description: '点击提交后触发',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'children',
      title: '内容',
      propType: 'string',
    },
    {
      name: 'icon',
      propType: 'string',
      description: '自定义内联样式',
    },
    {
      name: 'type',
      title: '类型',
      propType: {
        type: 'oneOf',
        value: ['primary', 'secondary', 'normal'],
      },
      description: '按钮的类型',
      defaultValue: 'normal',
    },
    {
      name: 'size',
      title: '尺寸',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '按钮的尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'iconSize',
      title: 'Icon 尺寸',
      propType: {
        type: 'oneOf',
        value: ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'],
      },
      defaultValue: 'small',
      description: '按钮中 Icon 的尺寸，用于替代 Icon 的默认大小',
    },
    {
      name: 'ghost',
      title: 'ghost',
      propType: {
        type: 'oneOf',
        value: [true, false, 'light', 'dark'],
      },
      description: '是否为幽灵按钮',
      defaultValue: false,
      initialValue: false,
    },
    {
      name: 'toDefault',
      propType: 'bool',
      description: '返回默认值',
    },
    {
      name: 'loading',
      title: 'loading',
      propType: 'bool',
      description: '设置按钮的载入状态',
      defaultValue: false,
    },
    {
      name: 'text',
      title: 'text',
      propType: 'bool',
      description: '是否为文本按钮',
      defaultValue: false,
    },
    {
      name: 'warning',
      title: 'warning',
      propType: 'bool',
      description: '是否为警告按钮',
      defaultValue: false,
    },
    {
      name: 'disabled',
      title: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'onMouseUp',
      propType: 'func',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'icon',
          setter: 'IconSetter',
          supportVariable: true,
          setValue: (target, value) => {
            target.node.children.importSchema(
              value && {
                componentName: 'Icon',
                props: { type: value, style: { marginRight: 5 } },
              },
              true,
            );
          },
        },
        {
          name: 'children',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '文本内容',
              en_US: 'content',
            },
            tip: '按钮文本内容',
          },
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: ['StringSetter', 'ExpressionSetter'],
            },
          },
        },
      ],
    },
  },
  category: '基础',
};
