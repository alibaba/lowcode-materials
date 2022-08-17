module.exports = {
  group: '原子组件',
  componentName: 'Form.Submit',
  title: '提交按钮',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Form',
    main: '',
    destructuring: true,
    subName: 'Submit',
  },
  props: [
    {
      name: 'onClick',
      propType: 'func',
      description:
        '点击提交后触发\n@param {Object} value 数据\n@param {Object} errors 错误数据\n@param {class} field 实例',
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
      name: 'validate',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否校验',
          en_US: 'Validate',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: validate | 说明: 是否校验/需要校验的 name 数组',
          en_US: 'prop: validate | description: validate or validate array',
        },
      },
      propType: {
        type: 'oneOfType',
        value: [
          'bool',
          {
            type: 'instanceOf',
            value: 'array',
          },
        ],
      },
      description: '是否校验/需要校验的 name 数组',
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
      name: 'htmlType',
      propType: 'string',
      defaultValue: 'submit',
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
          name: 'disabled',
          setter: {
            componentName: 'MixedSetter',
            props: {
              setters: ['ExpressionSetter', 'BoolSetter'],
            },
          },
        },
        {
          name: 'icon',
          setter: 'IconSetter',
          supportVariable: true,
          extraProps: {
            defaultValue: '',
            onChange: {
              type: 'JSFunction',
              value:
                '(val, field, editor) => {\n  field.node.children.importSchema(val && {"componentName": "Icon", "props": {"type": val, "style": {"marginRight": 5}}}, true); //field.top.setPropValue(\'children\', [{"componentName": "Icon", "props": {"type": val}}, (field.top.getPropValue(\'children\') || []).slice(-1)]);\n}',
            },
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
