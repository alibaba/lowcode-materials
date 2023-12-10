import { uuid, createFormItemSchema } from '../utils';

// 直接从designable copy过来，如果有setter不支持那就自己加
export const propsSchema = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
};

export default createFormItemSchema(propsSchema, {
  field: () => ({
    name: uuid(),
    title: 'Checkbox Group',
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
