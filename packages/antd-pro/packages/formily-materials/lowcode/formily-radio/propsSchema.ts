import { uuid, createFormItemSchema } from '../utils';
import { ISchema } from '@formily/react';

const Radio: ISchema & { Group?: ISchema } = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
};

Radio.Group = {
  type: 'object',
  properties: {
    optionType: {
      type: 'string',
      enum: ['default', 'button'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'default',
        optionType: 'button',
      },
    },
    buttonStyle: {
      type: 'string',
      enum: ['outline', 'solid'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'outline',
        optionType: 'button',
      },
    },
  },
};

export default createFormItemSchema(Radio.Group, {
  field: () => ({
    name: uuid(),
    title: 'Radio Group',
    enum: [
      {
        label: '选项1',
        value: 1,
      },
      {
        label: '选项2',
        value: 2,
      },
    ],
  }),
});
