import { uuid, createVoidItemSchema } from '../utils';

export const Card = {
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

export default createVoidItemSchema(Card, {
  field: () => ({
    name: uuid(),
  }),
  component: () => ({
    // 'x-component-props': {
    //   title: 'Container'
    // }
  }),
});
