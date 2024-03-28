import * as React from 'react';
import { createElement } from 'react';
import { Alert } from 'antd';
import { useForm } from '@formily/react';
import {
  syncUI,
  IFormItemProps,
  useSchema,
  mergeProperties,
  reactNode2Schema,
  useSchemaField,
} from '../../shared';

const ObjectContainerPreview: React.FC = (props) => {
  return <div {...props}>{props.children}</div>;
};

const FormilyObjectContainer: React.FC<IFormItemProps> = syncUI((props) => {
  const form = useForm();

  if (!form) {
    return <Alert message="formily component can only be used in formily form" type="error" />;
  }

  if (props.__designMode === 'design') {
    return <ObjectContainerPreview {...props} />;
  }

  const schema = useSchema(props);

  const { name } = props.fieldProps;

  // __origin_child 用于处理嵌套的问题
  const { schema: childrenSchema, componentsNameMap: componentMap } = reactNode2Schema(
    props.__origin_child || props.children,
  );

  mergeProperties(schema.properties[name], childrenSchema);

  schema.properties[name]['x-component-props'] = undefined;

  const SchemaField = useSchemaField(componentMap);

  return <SchemaField schema={schema} />;
});

export default FormilyObjectContainer;
