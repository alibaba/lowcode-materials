export default {
  group: '原子组件',
  componentName: 'Message',
  title: '提示',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Message',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'title',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '标题',
          en_US: 'Title',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: title | 说明: 标题',
          en_US: 'prop: title | description: Title',
        },
      },
      propType: 'string',
      description: '标题',
      defaultValue: '标题',
    },
    {
      name: 'type',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '类型',
          en_US: 'Type',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: type | 说明: 反馈类型',
          en_US: 'prop: type | description: message type',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['success', 'warning', 'error', 'notice', 'help', 'loading'],
      },
      description: '反馈类型',
      defaultValue: 'success',
    },
    {
      name: 'shape',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '形状',
          en_US: 'Shape',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: shape | 说明: 外观',
          en_US: 'prop: shape | description: message shape',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['inline', 'addon', 'toast'],
      },
      description: '外观',
      defaultValue: 'inline',
    },
    {
      name: 'size',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '尺寸',
          en_US: 'Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: size | 说明: 尺寸',
          en_US: 'prop: size | description: message size',
        },
      },
      propType: {
        type: 'oneOf',
        value: ['medium', 'large'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'children',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '文本',
          en_US: 'Content',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: children | 说明: 文本内容',
          en_US: 'prop: children | description: message content',
        },
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      description: '内容',
    },
    {
      name: 'visible',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '是否显示',
          en_US: 'Visible',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: visible | 说明: 当前是否显示',
          en_US: 'prop: visible | description: visible',
        },
      },
      propType: 'bool',
      description: '当前是否显示',
    },
    {
      name: 'iconType',
      propType: 'string',
      description: '显示的图标类型，会覆盖内部设置的IconType',
    },
    {
      name: 'closeable',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '显示 Close',
          en_US: 'Show Close',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: closeable | 说明: 显示关闭按钮',
          en_US: 'prop: closeable | description: show close button',
        },
      },
      propType: 'bool',
      description: '显示关闭按钮',
      defaultValue: false,
    },
    {
      name: 'onClose',
      propType: 'func',
      description: '关闭按钮的回调',
    },
    {
      name: 'afterClose',
      propType: 'func',
      description: '关闭之后调用的函数',
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
      description: '收起动画',
      defaultValue: true,
    },
  ],
  configure: {
    props: [
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '形状',
            en_US: 'Shape',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: shape | 说明: 外观',
            en_US: 'prop: shape | description: message shape',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: 'Inline',
                value: 'inline',
              },
              {
                label: 'Addon',
                value: 'addon',
              },
              {
                label: 'Toast',
                value: 'toast',
              },
            ],
          },
        },
        description: '外观',
        defaultValue: 'inline',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '类型',
            en_US: 'Type',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: type | 说明: 反馈类型',
            en_US: 'prop: type | description: message type',
          },
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '成功',
                value: 'success',
              },
              {
                label: '警告',
                value: 'warning',
              },
              {
                label: '失败',
                value: 'error',
              },
              {
                label: '提示',
                value: 'notice',
              },
              {
                label: '帮助',
                value: 'help',
              },
              {
                label: '加载',
                value: 'loading',
              },
            ],
          },
        },
        description: '反馈类型',
        defaultValue: 'success',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标题',
            en_US: 'Title',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: title | 说明: 标题',
            en_US: 'prop: title | description: Title',
          },
        },
        setter: 'StringSetter',
        description: '标题',
        defaultValue: '标题',
      },
      {
        name: 'iconType',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '图标',
            en_US: 'Icon',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: iconType | 说明: 显示的图标类型',
            en_US: 'prop: iconType | description: icon type',
          },
        },
        setter: {
          componentName: 'IconSetter',
        },
      },
      {
        name: 'children',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '文本',
            en_US: 'Content',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: children | 说明: 文本内容',
            en_US: 'prop: children | description: message content',
          },
        },
        setter: 'TextAreaSetter',
        description: '内容',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 尺寸',
            en_US: 'prop: size | description: message size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        description: '尺寸',
        defaultValue: 'medium',
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'visible',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '是否显示',
            en_US: 'Visible',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: visible | 说明: 当前是否显示',
            en_US: 'prop: visible | description: visible',
          },
        },
        setter: 'BoolSetter',
        description: '当前是否显示',
      },
      {
        name: 'closeable',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '关闭按钮',
            en_US: 'Show Close',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: closeable | 说明: 显示关闭按钮',
            en_US: 'prop: closeable | description: show close button',
          },
        },
        setter: 'BoolSetter',
        description: '显示关闭按钮',
        defaultValue: false,
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
        setter: 'BoolSetter',
        description: '收起动画',
        defaultValue: true,
      },
    ],
  },
  icon: '',
  category: '信息反馈',
  snippets: require('./snippets'),
};
