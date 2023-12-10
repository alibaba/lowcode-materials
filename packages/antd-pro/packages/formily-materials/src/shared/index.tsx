import { Schema } from '@formily/react';

const compile = (expression: string, scope = {}) => {
  try {
    // eslint-disable-next-line no-new-func
    return new Function('$root', `with($root) { return (${expression}); }`)(scope);
  } catch (e) {
    console.warn(e);
    return `{{${expression}}}`;
  }
};

Schema.registerCompiler(compile);

export interface IFormItemProps {
  __designMode?: string;
  __component_name: string;
  componentProps: any;
  componentId?: string;
  fieldProps: any;
  decoratorProps: any;
  style?: any;
}
export * from './utils';
export { default as FormControlContext } from './context/FormControlContext';
export { default as syncUI } from './hoc/syncUI';
export { default as useSchema } from './hooks/useSchema';
export { default as useSchemaField } from './hooks/useSchemaField';
export { default as useVoidSchema } from './hooks/useVoidSchema';
export { createSchemaComponent, createVoidSchemaComponent } from './hoc/getSchemaComponent';
export { default as getVoidSchemaComponent } from './hoc/getVoidSchemaComp';
export { useScope } from './hooks/useScope';
