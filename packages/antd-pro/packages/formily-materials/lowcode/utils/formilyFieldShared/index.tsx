import { fieldSchema } from './FieldSchema';
import { formItemSchema } from './FormItemSchema';

export interface IDefaultPropsValue {
  field?: any;
  component?: any;
  decorator?: any;
}

export const createFormItemSchema = (componentsSchema: any, initial?: IDefaultPropsValue) => {
  return [
    {
      name: 'fieldProps',
      title: '字段属性',
      display: 'accordion',
      // defaultValue: initial?.field,
      setter: {
        componentName: 'FormilySchemaSetter',
        props: {
          propsSchema: fieldSchema,
          defaultValue: initial?.field,
        },
      },
    },
    {
      name: 'componentProps',
      title: '组件属性',
      display: 'accordion',
      // defaultValue: initial?.component,
      setter: {
        componentName: 'FormilySchemaSetter',
        props: {
          // 多包一层是为了复用locale翻译
          propsSchema: {
            properties: {
              'x-component-props': componentsSchema,
            },
          },
          defaultValue: initial?.component,
        },
      },
    },
    {
      name: 'decoratorProps',
      title: '容器属性',
      display: 'accordion',
      // defaultValue: initial?.decorator,
      setter: {
        componentName: 'FormilySchemaSetter',
        props: {
          propsSchema: {
            properties: {
              'x-decorator-props': formItemSchema,
            },
          },
          defaultValue: initial?.decorator,
        },
      },
    },
  ];
};

export const createVoidItemSchema = (componentsSchema: any, initial?: IDefaultPropsValue) => {
  return [
    {
      name: 'fieldProps',
      title: '字段属性',
      display: 'accordion',
      // defaultValue: initial?.field,
      setter: {
        componentName: 'FormilySchemaSetter',
        props: {
          propsSchema: fieldSchema,
          defaultValue: initial?.field,
        },
      },
    },
    {
      name: 'componentProps',
      title: '组件属性',
      display: 'accordion',
      // defaultValue: initial?.component,
      setter: {
        componentName: 'FormilySchemaSetter',
        props: {
          // 多包一层是为了复用locale翻译
          propsSchema: {
            properties: {
              'x-component-props': componentsSchema,
            },
          },
          defaultValue: initial?.component,
        },
      },
    },
  ];
};
