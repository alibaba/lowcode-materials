import { uuid, createFormItemSchema } from '../utils';

// 直接从designable copy过来，如果有setter不支持那就自己加
export const propsSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    extra: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    type: {
      type: 'boolean',
      enum: [
        { label: '内置', value: 'inner' },
        { label: '默认', value: '' },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: '',
        optionType: 'button',
      },
    },
    bordered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
};

export default createFormItemSchema(propsSchema, {
  field: () => ({
    name: uuid(),
    type: 'array',
    items: {
      // array 操作如果想可配置，需要讲下面的东西都设置成children1
      type: 'object',
      properties: {
        [uuid()]: {
          type: 'void',
          'x-component': 'ArrayCards.Remove',
          'x-index': 0,
        },
        [uuid()]: {
          type: 'void',
          'x-component': 'ArrayCards.MoveDown',
          'x-index': 1,
        },
        [uuid()]: {
          type: 'void',
          'x-component': 'ArrayCards.MoveUp',
          'x-index': 2,
        },
        [uuid()]: {
          type: 'void',
          'x-component': 'ArrayCards.Index',
          'x-index': 3,
        },
      },
    },
    properties: {
      [uuid()]: {
        type: 'void',
        title: 'Addition',
        'x-component': 'ArrayCards.Addition',
        'x-index': 0,
      },
    },
  }),
});
