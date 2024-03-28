import { createSchemaComponent } from '../../shared';
import React, { createElement } from 'react';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import MonacoInput from './MonacoInput';

export const FormilyMonacoInput = connect(
  // @ts-ignore
  MonacoInput,
  mapProps((props, field) => {
    return {
      ...props,
      loading: field?.['loading'] || field?.['validating'],
    };
  }),
  mapReadPretty((props) => {
    return <MonacoInput {...props} readOnly />;
  }),
);

export default createSchemaComponent({
  componentName: 'MonacoInput',
  component: FormilyMonacoInput,
});
