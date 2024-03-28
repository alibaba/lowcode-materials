import { uuid, createFormItemSchema } from '../utils';

// 直接从designable copy过来，如果有setter不支持那就自己加
export const propsSchema = {
  type: 'object',
  properties: {
    defaultLanguage: {
      title: '语言',
      type: 'string',
      value: 'mysql',
      enum: ['text', 'json', 'javascript', 'mysql'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      default: 'text',
    },
    defaultValue: {
      title: '默认值',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    height: {
      type: 'string',
      title: '高度',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      default: 160,
    },
    readOnly: {
      title: '只读',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      default: false,
    },
    theme: {
      title: '主题色',
      type: 'string',
      enum: ['vs-dark', 'light'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      default: 'light',
    },
    'options.lineNumbers': {
      title: '行号',
      type: 'string',
      enum: ['on', 'off'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      default: 'on',
    },
  },
};

export default createFormItemSchema(propsSchema, {
  field: () => ({
    name: uuid(),
    title: 'MonacoInput',
  }),
});
