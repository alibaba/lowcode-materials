import { uuid, createFormItemSchema } from '../utils';

// 直接从designable copy过来，如果有setter不支持那就自己加
export const propsSchema = {};

export default createFormItemSchema(propsSchema, {
  field: () => ({
    name: uuid(),
    title: 'Object',
    type: 'object',
  }),
});
