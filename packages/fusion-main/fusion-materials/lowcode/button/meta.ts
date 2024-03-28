import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Button',
  title: '按钮',
  icon: 'https://img.alicdn.com/tfs/TB1rT0gPQL0gK0jSZFAXXcA9pXa-200-200.svg',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Button',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
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
      title: {
        label: {
          type: 'i18n',
          zh_CN: '按钮类型',
          en_US: 'Button Type',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: type | 说明: 按钮类型',
          en_US: 'prop: type | description: button type',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['primary', 'secondary', 'normal'],
      },
      description: '按钮的类型',
      defaultValue: 'normal',
    },
    {
      name: 'size',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '按钮尺寸',
          en_US: 'Button Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: size | 说明: 按钮尺寸',
          en_US: 'prop: size | description: button size',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '按钮的尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'iconSize',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '图标尺寸',
          en_US: 'Icon Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: iconSize | 说明: 图标尺寸',
          en_US: 'prop: iconSize | description: icon size',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'],
      },
      defaultValue: 'small',
      description: '按钮中 Icon 的尺寸，用于替代 Icon 的默认大小',
    },
    {
      name: 'ghost',
      title: {
        type: 'i18n',
        zh_CN: '幽灵按钮',
        en_US: 'ghost',
      },
      propType: {
        type: 'oneOf',
        value: [true, false, 'light', 'dark'],
      },
      description: '是否为幽灵按钮',
      defaultValue: false,
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
      title: {
        type: 'i18n',
        zh_CN: '文本按钮',
        en_US: 'text',
      },
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
      title: {
        type: 'i18n',
        zh_CN: '禁用',
        en_US: 'disabled',
      },
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'onClick',
      title: 'onClick',
      propType: 'func',
      description: '点击按钮的回调\n@param {Object} e Event Object',
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
          name: 'ghost',
          title: {
            type: 'i18n',
            zh_CN: '幽灵按钮',
            en_US: 'ghost',
          },
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'True',
                  value: true,
                },
                {
                  title: 'False',
                  value: false,
                },
                {
                  title: 'Light',
                  value: 'light',
                },
                {
                  title: 'Dark',
                  value: 'dark',
                },
              ],
            },
          },
          description: '是否为幽灵按钮',
          defaultValue: false,
        },
        {
          name: 'children',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '按钮内容',
              en_US: 'Content',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: children | 说明: 按钮文本',
              en_US: 'prop: children | description: button content',
            },
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
  category: '通用',
  snippets,
};
