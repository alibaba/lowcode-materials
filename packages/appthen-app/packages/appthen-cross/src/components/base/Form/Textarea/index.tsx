import React from 'react';
import { Textarea as TTextarea } from '@tarojs/components';
import { RQTextareaProps } from './index.type';

const Textarea = ({ onChange, ...props }: RQTextareaProps) => {
  return <TTextarea onInput={(e) => onChange?.(e.detail.value)} {...props} />;
};

export default Textarea;
