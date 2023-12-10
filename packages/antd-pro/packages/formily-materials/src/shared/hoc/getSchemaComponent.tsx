import * as React from 'react';
import { createElement } from 'react';
import { FormItem } from '@formily/antd';
import { createSchemaField, useForm, Schema } from '@formily/react';
import { syncUI, IFormItemProps, useSchema, useScope } from '../';
import { Alert } from 'antd';
import type { JSXComponent } from '@formily/react';

// 兼容 Input.TextArea 类组件
const getComponentName = (componentName) => {
  return componentName.split('.')[0];
};

interface ICreateSchemaComponent {
  componentName: string;
  component: JSXComponent;
  transform?: (schema: Schema) => Schema;
}

/**
 * 将普通组件转换成使用 formily SchemaField 渲染的组件
 */
export const createSchemaComponent = (options: ICreateSchemaComponent) => {
  const { componentName, component } = options;

  // 默认注册 FormItem
  const SchemaField = createSchemaField({
    components: {
      [getComponentName(componentName)]: component,
      FormItem,
    },
  });

  const SchemaComponent: React.FC<IFormItemProps> = (props) => {
    const scope = useScope();

    const form = useForm();

    const schema = useSchema(props);

    schema.mapProperties((s, key) => {
      s['x-component'] = componentName;

      schema.properties[key] = options?.transform?.(s) || s;
    });

    if (!form) {
      return <Alert message="Formily component can only be used in formily form" type="error" />;
    }

    return <SchemaField schema={schema} scope={scope} />;
  };

  return syncUI(SchemaComponent);
};

export const createVoidSchemaComponent = (options: ICreateSchemaComponent) => {
  return createSchemaComponent({
    ...options,
    transform(schema) {
      // 拦截
      schema.type = 'void';
      schema['x-decorator'] = undefined;
      return options?.transform?.(schema);
    },
  });
};
