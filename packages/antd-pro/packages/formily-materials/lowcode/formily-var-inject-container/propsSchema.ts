import { uuid, createVoidItemSchema } from '../utils';

export const Container = {
  type: 'object',
  properties: {},
};

export default createVoidItemSchema(Container, {
  field: () => ({
    name: uuid(),
  }),
  component: () => ({
    'x-component-props': {
      title: 'Container',
    },
  }),
});
