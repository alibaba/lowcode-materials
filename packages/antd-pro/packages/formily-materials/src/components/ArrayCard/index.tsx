import * as React from 'react';
import { createElement } from 'react';
import { ArrayCards } from '@formily/antd';
import { useForm } from '@formily/react';
import { Alert } from 'antd';
import {
  syncUI,
  IFormItemProps,
  useSchema,
  mergeItems,
  reactNode2Schema,
  useSchemaField,
} from '../../shared';
import ArrayCardsPreview from './preview';

const FormilyArrayCards: React.FC<IFormItemProps> = syncUI((props) => {
  const form = useForm();

  if (!form) {
    return <Alert message="formily component can only be used in formily form" type="error" />;
  }

  if (props.__designMode === 'design') {
    return <ArrayCardsPreview {...props} />;
  }

  const schema = useSchema(props, {
    'x-component': 'ArrayCards',
  });

  const { name } = props.fieldProps;

  // __origin_child 用于处理嵌套 ArrayCards 的问题
  const { schema: childrenSchema, componentsNameMap: componentMap } = reactNode2Schema(
    props.__origin_child || props.children,
  );

  mergeItems(schema.properties[name], childrenSchema);

  componentMap.add('ArrayCards');

  const SchemaField = useSchemaField(componentMap, { ArrayCards });

  return <SchemaField schema={schema} />;
});

export default FormilyArrayCards;
