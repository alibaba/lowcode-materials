module.exports = {
  group: '原子组件',
  componentName: 'Form.Item',
  title: '表单项',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Form',
    main: '',
    destructuring: true,
    subName: 'Item',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'label',
      propType: 'string',
      description: '标签',
    },
    {
      name: 'labelCol',
      propType: {
        type: 'shape',
        value: [
          {
            name: 'span',
            description: 'span',
            propType: 'number',
          },
          {
            name: 'offset',
            description: 'offset',
            propType: 'number',
          },
        ],
      },
      description:
        'label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
    },
    {
      name: 'wrapperCol',
      propType: {
        type: 'shape',
        value: [
          {
            name: 'span',
            description: 'span',
            propType: 'number',
          },
          {
            name: 'offset',
            description: 'offset',
            propType: 'number',
          },
        ],
      },
      description: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
    },
    {
      name: 'help',
      title: {
        label: '自定义提示信息',
        tip: '如不设置，则会根据校验规则自动生成.',
      },
      propType: 'string',
      description: '自定义提示信息，如不设置，则会根据校验规则自动生成.',
    },
    {
      name: 'extra',
      title: {
        label: '额外的提示信息',
        tip: '和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面',
      },
      propType: 'string',
      description:
        '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面',
    },
    {
      name: 'validateState',
      title: {
        label: '校验状态',
        tip: '如不设置，则会根据校验规则自动生成\n@enumdesc 失败, 成功, 校验中, 警告',
      },
      propType: {
        type: 'oneOf',
        value: ['error', 'success', 'loading', 'warning'],
      },
      description:
        '校验状态，如不设置，则会根据校验规则自动生成\n@enumdesc 失败, 成功, 校验中, 警告',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内联样式',
    },
    {
      name: 'size',
      title: {
        label: 'Size',
        tip: '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。',
      },
      propType: {
        type: 'oneOf',
        value: ['large', 'small', 'medium'],
      },
      description:
        '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。',
    },
    {
      name: 'fullWidth',
      title: {
        label: 'fullWidth',
        tip: '单个 Item 中表单类组件宽度是否是100%',
      },
      propType: 'bool',
      description: '单个 Item 中表单类组件宽度是否是100%',
    },
    {
      name: 'labelAlign',
      title: {
        label: '标签的位置',
        tip: '上, 左, 内',
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'left', 'inset'],
      },
      description: '标签的位置\n@enumdesc 上, 左, 内',
    },
    {
      name: 'labelTextAlign',
      title: {
        label: '标签的左右对齐方式',
        tip: '左, 右',
      },
      propType: {
        type: 'oneOf',
        value: ['left', 'right'],
      },
      description: '标签的左右对齐方式\n@enumdesc 左, 右',
    },
    {
      name: 'className',
      propType: 'string',
      description: '扩展class',
    },
    {
      name: 'required',
      title: {
        label: '不能为空',
        tip: '[表单校验] 不能为空',
      },
      propType: 'bool',
      description: '[表单校验] 不能为空',
    },
    {
      name: 'requiredMessage',
      title: {
        label: '自定义错误信息',
        tip: '[表单校验]为空时自定义错误信息',
      },
      propType: 'string',
      description: 'required 自定义错误信息',
    },
    {
      name: 'min',
      title: {
        label: '最小值',
        tip: '[表单校验] 最小值',
      },
      propType: 'number',
      description: '[表单校验] 最小值',
    },
    {
      name: 'max',
      title: {
        label: '最大值',
        tip: '[表单校验] 最大值',
      },
      propType: 'number',
      description: '[表单校验] 最大值',
    },
    {
      name: 'minmaxMessage',
      title: {
        label: 'min/max message',
        tip: '[表单校验] min/max 自定义错误信息',
      },
      propType: 'string',
      description: 'min/max 自定义错误信息',
    },
    {
      name: 'minLength',
      title: {
        label: '最小长度',
        tip: '[表单校验] 字符串最小长度 / 数组最小个数',
      },
      propType: 'number',
      description: '[表单校验] 字符串最小长度 / 数组最小个数',
    },
    {
      name: 'maxLength',
      title: {
        label: '最大长度',
        tip: '[表单校验] 字符串最大长度 / 数组最大个数',
      },
      propType: 'number',
      description: '[表单校验] 字符串最大长度 / 数组最大个数',
    },
    {
      name: 'minmaxLengthMessage',
      title: {
        label: 'max|min length error message',
        tip: '[表单校验] minLength/maxLength 自定义错误信息',
      },
      propType: 'string',
      description: 'minLength/maxLength 自定义错误信息',
    },
    {
      name: 'length',
      title: {
        label: '长度',
        tip: '[表单校验] 字符串精确长度 / 数组精确个数',
      },
      propType: 'number',
      description: '[表单校验] 字符串精确长度 / 数组精确个数',
    },
    {
      name: 'lengthMessage',
      title: {
        label: 'length error message',
        tip: '[表单校验] minLength/maxLength 自定义错误信息',
      },
      propType: 'string',
      description: 'length 自定义错误信息',
    },
    {
      name: 'pattern',
      title: {
        label: '正则',
        tip: '[表单校验] 正则校验',
      },
      propType: 'string',
      description: '正则校验',
    },
    {
      name: 'patternMessage',
      title: {
        label: 'pattern error message',
        tip: '[表单校验] pattern 自定义错误信息',
      },
      propType: 'string',
      description: 'pattern 自定义错误信息',
    },
    {
      name: 'format',
      title: {
        label: 'format',
        tip: '[表单校验] 四种常用的 pattern',
      },
      propType: {
        type: 'oneOf',
        value: ['number', 'email', 'url', 'tel'],
      },
      description: '[表单校验] 四种常用的 pattern',
    },
    {
      name: 'formatMessage',
      title: {
        label: 'format error message',
        tip: '[表单校验] format 自定义错误信息',
      },
      propType: 'string',
      description: 'format 自定义错误信息',
    },
    {
      name: 'validator',
      propType: 'func',
      description: '[表单校验] 自定义校验函数',
    },
    {
      name: 'autoValidate',
      propType: 'bool',
      description: '是否修改数据时自动触发校验',
    },
    {
      name: 'device',
      propType: {
        type: 'oneOf',
        value: ['phone', 'tablet', 'desktop'],
      },
      description: '预设屏幕宽度',
    },
    {
      name: 'responsive',
      propType: 'bool',
    },
    {
      name: 'colSpan',
      propType: 'number',
      description: '在响应式布局模式下，表单项占多少列',
    },
    {
      name: 'labelWidth',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      description: '在响应式布局下，且label在左边时，label的宽度是多少',
      defaultValue: 100,
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否开启预览态',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['Form'],
      },
    },
    supports: {
      style: true,
    },
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标签文本',
            en_US: 'Label',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: label | 说明: 标签文本内容',
            en_US: 'prop: label | description: label content',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
        description: '标签',
      },
      {
        name: 'help',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '错误提示',
            en_US: 'Help Info',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: help | 说明: 自定义提示信息, 如不设置，则会根据校验规则自动生成.',
            en_US: 'prop: help | description: help infomation',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
        description: '自定义提示信息，如不设置，则会根据校验规则自动生成.',
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '帮助提示',
            en_US: 'Extra Info',
          },
          tip: {
            type: 'i18n',
            zh_CN:
              '属性: extra | 说明: 额外的提示信息, 和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面',
            en_US: 'prop: extra | description: extra infomation',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'validateState',
        title: {
          label: '校验状态',
          tip: '如不设置，则会根据校验规则自动生成\n@enumdesc 失败, 成功, 校验中, 警告',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['error', 'success', 'loading', 'warning'],
          },
        },
      },
      {
        name: 'size',
        title: {
          label: '尺寸',
          tip: '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['small', 'medium', 'large'],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'labelAlign',
        title: {
          label: '标签位置',
          tip: '上, 左, 内',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['top', 'left', 'inset'],
          },
        },
        defaultValue: 'left',
      },
      {
        name: 'labelTextAlign',
        title: {
          label: '标签对齐',
          tip: '左, 右',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['left', 'right'],
          },
        },
        defaultValue: 'left',
      },
      {
        name: 'device',
        title: {
          label: '设备',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['phone', 'tablet', 'desktop'],
          },
        },
        defaultValue: 'desktop',
      },
      {
        name: 'fullWidth',
        title: {
          label: '宽度占满',
          tip: '单个 Item 中表单类组件宽度是否是100%',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '单个 Item 中表单类组件宽度是否是100%',
      },
      {
        name: 'isPreview',
        title: {
          label: '预览态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否开启预览态',
      },
      {
        name: 'autoValidate',
        title: {
          label: '自动校验',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否修改数据时自动触发校验',
      },
      {
        type: 'group',
        display: 'accordion',
        title: '校验',
        items: [
          {
            type: 'group',
            display: 'popup',
            title: '非空校验',
            items: [
              {
                name: 'required',
                title: {
                  label: '不能为空',
                  tip: '[表单校验] 不能为空',
                },
                setter: 'BoolSetter',
                supportVariable: true,
                description: '[表单校验] 不能为空',
              },
              {
                name: 'requiredMessage',
                title: {
                  label: '错误信息',
                  tip: '[表单校验]为空时自定义错误信息',
                },
                setter: 'StringSetter',
                supportVariable: true,
                description: 'required 自定义错误信息',
              },
            ],
          },
          {
            type: 'group',
            display: 'popup',
            title: '最大/最小值校验',
            items: [
              {
                name: 'min',
                title: {
                  label: '最小值',
                  tip: '[表单校验] 最小值',
                },
                setter: 'NumberSetter',
                supportVariable: true,
                description: '[表单校验] 最小值',
              },
              {
                name: 'max',
                title: {
                  label: '最大值',
                  tip: '[表单校验] 最大值',
                },
                setter: 'NumberSetter',
                supportVariable: true,
                description: '[表单校验] 最大值',
              },
              {
                name: 'minmaxMessage',
                title: {
                  label: '错误信息',
                  tip: '[表单校验] min/max 自定义错误信息',
                },
                setter: 'StringSetter',
                supportVariable: true,
              },
            ],
          },
          {
            type: 'group',
            display: 'popup',
            title: '最大/最小长度校验',
            items: [
              {
                name: 'minLength',
                title: {
                  label: '最小长度',
                  tip: '[表单校验] 字符串最小长度 / 数组最小个数',
                },
                setter: 'NumberSetter',
                supportVariable: true,
                description: '[表单校验] 字符串最小长度 / 数组最小个数',
              },
              {
                name: 'maxLength',
                title: {
                  label: '最大长度',
                  tip: '[表单校验] 字符串最大长度 / 数组最大个数',
                },
                setter: 'NumberSetter',
                supportVariable: true,
                description: '[表单校验] 字符串最大长度 / 数组最大个数',
              },
              {
                name: 'minmaxLengthMessage',
                title: {
                  label: '错误信息',
                  tip: '[表单校验] minLength/maxLength 自定义错误信息',
                },
                setter: 'StringSetter',
                supportVariable: true,
                description: 'minLength/maxLength 自定义错误信息',
              },
            ],
          },
          {
            type: 'group',
            display: 'popup',
            title: '长度校验',
            items: [
              {
                name: 'length',
                title: {
                  label: '长度',
                  tip: '[表单校验] 字符串精确长度 / 数组精确个数',
                },
                setter: 'NumberSetter',
                supportVariable: true,
                description: '[表单校验] 字符串精确长度 / 数组精确个数',
              },
              {
                name: 'lengthMessage',
                title: {
                  label: '错误信息',
                  tip: '[表单校验] minLength/maxLength 自定义错误信息',
                },
                setter: 'StringSetter',
                supportVariable: true,
                description: 'length 自定义错误信息',
              },
            ],
          },
          {
            type: 'group',
            display: 'popup',
            title: '正则校验',
            items: [
              {
                name: 'pattern',
                title: {
                  label: '正则',
                  tip: '[表单校验] 正则校验',
                },
                setter: 'StringSetter',
                supportVariable: true,
                description: '正则校验',
              },
              {
                name: 'patternMessage',
                title: {
                  label: '错误信息',
                  tip: '[表单校验] pattern 自定义错误信息',
                },
                setter: 'StringSetter',
                supportVariable: true,
                description: 'pattern 自定义错误信息',
              },
            ],
          },
          {
            type: 'group',
            display: 'popup',
            title: '格式化校验',
            items: [
              {
                name: 'format',
                title: {
                  label: 'format',
                  tip: '[表单校验] 四种常用的 pattern',
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: ['number', 'email', 'url', 'tel'],
                  },
                },
                description: '[表单校验] 四种常用的 pattern',
              },
              {
                name: 'formatMessage',
                title: {
                  label: '错误信息',
                  tip: '[表单校验] format 自定义错误信息',
                },
                setter: 'StringSetter',
                supportVariable: true,
                description: 'format 自定义错误信息',
              },
            ],
          },
          {
            name: 'validator',
            display: 'popup',
            title: {
              label: '自定义校验函数',
            },
            setter: 'FunctionSetter',
            supportVariable: true,
            description: '[表单校验] 自定义校验函数',
          },
        ],
      },
      {
        type: 'group',
        title: '布局',
        display: 'accordion',
        items: [
          {
            name: 'labelCol',
            display: 'inline',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'span',
                      description: 'span',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'offset',
                      description: 'offset',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                  ],
                },
              },
            },
            description:
              'label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
          },
          {
            name: 'wrapperCol',
            display: 'inline',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'span',
                      description: 'span',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'offset',
                      description: 'offset',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                  ],
                },
              },
            },
            description: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
          },
        ],
      },
      {
        type: 'group',
        title: '高级',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
        ],
      },
    ],
    advanced: {
      callbacks: {
        onNodeRemove: (removedNode, currentNode) => {
          if (!removedNode || !currentNode) {
            return;
          }
          const children = currentNode.children;
          // 若无children,则说明当前P组件内已为空,需要删除P组件本身
          if (children && children.length === 0) {
            currentNode.remove();
          }
        },
      },
    },
  },
  icon: 'https://img.alicdn.com/tfs/TB1nYqOuW61gK0jSZFlXXXDKFXa-112-64.png',
  category: '信息输入',
  snippets: require('./snippets'),

};
