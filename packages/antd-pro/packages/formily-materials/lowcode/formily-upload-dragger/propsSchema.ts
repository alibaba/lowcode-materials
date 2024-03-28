import { Upload } from '../formily-upload/propsSchema';
import { uuid, createFormItemSchema } from '../utils';

export default createFormItemSchema(Upload, {
  field: () => ({
    name: uuid(),
    title: 'Drag Upload',
    type: 'Array<object>',
  }),
  component: () => ({
    'x-component-props': {
      textContent: 'Click or drag file to this area to upload',
    },
  }),
});
