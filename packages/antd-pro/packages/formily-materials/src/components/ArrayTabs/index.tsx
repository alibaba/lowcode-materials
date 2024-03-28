import * as React from 'react';
import { createElement } from 'react';
import { ArrayTabs } from '@formily/antd';
import { useForm } from '@formily/react';
import { Alert } from 'antd';
import {
  syncUI,
  IFormItemProps,
  useSchema,
  useSchemaField,
  reactNode2SchemaV2,
  getComponentNamesSet,
  mergeItems,
} from '../../shared';
import { ArrayTabsPreview } from './preview';

const FormilyArrayTabs: React.FC<IFormItemProps> = syncUI((props) => {
  const form = useForm();

  if (!form) {
    return <Alert message="formily component can only be used in formily form" type="error" />;
  }

  if (props.__designMode === 'design') {
    return <ArrayTabsPreview {...props} />;
  }

  const children = props.__origin_child || props.children || [];

  const { name } = props.fieldProps;

  const componentNamesSet = getComponentNamesSet(children, 1);

  const { outerSchema: childrenSchema } = reactNode2SchemaV2(children);

  const schema = useSchema(props, {
    'x-component': 'ArrayTabs',
  });

  mergeItems(schema.properties[name], {
    ...childrenSchema,
  });

  componentNamesSet.add('ArrayTabs');

  const SchemaField = useSchemaField(componentNamesSet, {
    ArrayTabs: ArrayTabs,
  });

  return <SchemaField schema={schema} />;
});

export default FormilyArrayTabs;
