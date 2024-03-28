import * as React from 'react';

import { Input } from '@alifd/next';

import FormItem from './form-item';

const FormInput = (props: any) => {
  const { formItemProps = {}, ...componentProps } = props;
  return (
    <FormItem {...formItemProps}>
      <Input {...componentProps} />
    </FormItem>
  );
};

FormInput.displayName = 'FormInput';

export default FormInput;
