import * as React from 'react';
import { createElement } from 'react';
import { observer, useForm } from '@formily/react';
import { Alert } from 'antd';
import { createVoidSchemaComponent } from '../../shared';

const FormilyVarInjectContainer: React.FC<{
  __designMode: 'design';
  $record: any;
  $index: number;
  render: (scope) => any;
}> = observer((props) => {
  const form = useForm();

  if (!form) {
    return <Alert message="formily component can only be used in formily form" type="error" />;
  }

  const scope = {
    $record: props.$record,
    $index: props.$index,
  };

  if (props.__designMode === 'design') {
    return <div {...props}>{props.render(scope)}</div>;
  }

  if (typeof props.render === 'function') {
    return <div {...props}>{props.render(scope)}</div>;
  } else {
    return <Alert message="Formily 变量注入容器只能使用自定义渲染" type="warning" />;
  }
});

export default createVoidSchemaComponent({
  componentName: 'VarInjectContainer',
  component: FormilyVarInjectContainer,
  transform(schema) {
    if (!schema['x-component-props']) {
      schema['x-component-props'] = {};
    }

    // FormItem 会占用高度
    delete schema['x-decorator'];

    // if (schema['x-component-props'].__designMode !== 'design') {
    // 注入变量
    schema['x-component-props'].$record = '{{ $record }}';
    schema['x-component-props'].$index = '{{ $index }}';
    // }

    return schema;
  },
});
