export const fieldSchema = {
  type: 'object',
  properties: {
    'field-group': {
      type: 'void',
      'x-component': 'CollapseItem',
      properties: {
        name: {
          title: '字段标识',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        title: {
          title: '标题',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
        description: {
          title: '描述',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input.TextArea',
        },
        'x-display': {
          title: '展示状态',
          type: 'string',
          enum: ['visible', 'hidden', 'none', ''],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            defaultValue: 'visible',
          },
          'x-decorator-props': {
            tooltip: '半隐藏只会隐藏UI，全隐藏会删除数据',
          },
        },
        'x-pattern': {
          title: 'UI形态',
          type: 'string',
          enum: ['editable', 'disabled', 'readOnly', 'readPretty', ''],
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            defaultValue: 'editable',
          },
        },
        default: {
          title: '默认值',
          'x-decorator': 'FormItem',
          'x-component': 'ValueInput',
        },
        enum: {
          title: '可选项',
          'x-decorator': 'FormItem',
          'x-component': 'DataSourceSetter',
        },
        'x-reactions': {
          'x-decorator': 'FormItem',
          'x-component': 'ReactionsSetter',
        },
        'x-validator': {
          type: 'array',
          'x-component': 'ValidatorSetter',
        },
        required: {
          title: '必填',
          type: 'boolean',
          'x-decorator': 'FormItem',
          'x-component': 'Switch',
        },
      },
    },
  },
};
