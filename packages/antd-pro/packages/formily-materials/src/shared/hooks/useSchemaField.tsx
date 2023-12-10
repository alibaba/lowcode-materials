import { createSchemaField } from '@formily/react';
import { useContext, useMemo } from 'react';
import { FormItem } from '@formily/antd';

export default (componentsSet: Set<string>, defaultComponent?: any) => {
  // components 并不是全量组件，只是画布上需要的组件
  const { components, pageContext } = useContext<any>((window as any).__appContext);

  const importComponents = {};

  componentsSet.forEach((item) => {
    // 兼容 Input.Textarea 类组件
    const componentName = item.split('.')[0];
    importComponents[componentName] = components[item] || components[componentName];
  });

  const SchemaField = useMemo(() => {
    return createSchemaField({
      components: {
        FormItem,
        ...importComponents,
        ...defaultComponent,
      },
      scope: {
        $this: pageContext,
      },
    });
  }, []);

  return SchemaField;
};
