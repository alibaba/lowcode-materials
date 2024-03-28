import { uuid, createFormItemSchema } from '../utils';
import { ISchema } from '@formily/react';

const Switch: ISchema = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    size: {
      type: 'string',
      enum: ['large', 'small', 'default', ''],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'default',
      },
    },
  },
};

export default createFormItemSchema(Switch, {
  field: () => ({
    name: uuid(),
    title: 'Switch',
  }),
});
