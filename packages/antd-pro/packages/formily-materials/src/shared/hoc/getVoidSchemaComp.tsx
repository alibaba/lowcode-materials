import * as React from 'react';
import { createElement, useContext } from 'react';
import { FormItem } from '@formily/antd';
import { createSchemaField, useForm } from '@formily/react';
import { syncUI, IFormItemProps, useVoidSchema } from '../';
import { Alert } from 'antd';

/**
 * @deprecated
 */
const getVoidSchemaComponent = (component: any, defaultProps?: any, transformSchema?: any) => {
  const SchemaField = createSchemaField({
    components: {
      ...component,
      FormItem,
    },
  });

  const VoidSchemaComponent: React.FC<IFormItemProps> = (props) => {
    const form = useForm();

    let schema = useVoidSchema(props, defaultProps);

    const appContext = useContext<any>((window as any).__appContext);

    if (!form) {
      return <Alert message="formily component can only be used in formily form" type="error" />;
    }

    if (transformSchema) {
      schema = transformSchema(schema);
    }

    return <SchemaField schema={schema} scope={{ $this: appContext?.pageContext }} />;
  };

  return syncUI(VoidSchemaComponent);
};

export default getVoidSchemaComponent;
