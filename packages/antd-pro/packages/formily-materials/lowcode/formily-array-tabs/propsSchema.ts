import { uuid, createFormItemSchema } from '../utils';

// 直接从designable copy过来，如果有setter不支持那就自己加
export const propsSchema = {
  type: 'object',
  properties: {
    // type: {
    //   type: 'string',
    //   enum: [
    //     { label: 'Line', value: 'line' },
    //     { label: 'Card', value: 'card' },
    //     { label: 'Editable-Card', value: 'editable-card' },
    //   ],
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Select',
    //   default: 'editable-card'
    // },
    size: {
      type: 'string',
      enum: [
        { label: '默认', value: 'default' },
        { label: '大', value: 'large' },
        { label: '小', value: 'small' },
      ],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        optionType: 'button',
      },
      default: 'default',
    },
    hideAdd: {
      title: '隐藏加号',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      default: false,
    },
  },
};

export default createFormItemSchema(propsSchema, {
  field: () => ({
    name: uuid(),
    type: 'array',
  }),
});
