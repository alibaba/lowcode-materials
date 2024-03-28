import React, { ComponentClass } from 'react';

export interface IStyleItem {
  name: string;
  enable: boolean;
  style: React.CSSProperties;
}
export interface ITextProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  inlineStyle?: IStyleItem[];
  numberOfLines?: number;
  editable?: boolean;
  onInputText?: (value: string) => void;
}

declare const Text: ComponentClass<ITextProps>;

export default Text;
