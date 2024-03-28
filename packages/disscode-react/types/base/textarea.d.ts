import { ComponentClass } from 'react';

import { TextareaProps } from "@tarojs/components";

export interface RQTextareaProps extends TextareaProps {
  onChange?: (value: string) => void;
}

declare const Textarea: ComponentClass<RQTextareaProps>;

export default Textarea;
