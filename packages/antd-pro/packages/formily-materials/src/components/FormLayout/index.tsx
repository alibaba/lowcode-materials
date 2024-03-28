import { FormLayout } from '@formily/antd';
import { IFormItemProps, createVoidSchemaComponent } from '../../shared';

const FormilyFormLayout: React.FC<IFormItemProps> = createVoidSchemaComponent({
  componentName: 'FormLayout',
  component: FormLayout,
});

export default FormilyFormLayout;
