import { Radio } from '@formily/antd';
import { createSchemaComponent } from '../../shared';

export default createSchemaComponent({
  componentName: 'Radio.Group',
  component: Radio,
  transform(schema) {
    return schema;
  },
});
