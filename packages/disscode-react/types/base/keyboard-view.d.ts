import { ComponentClass } from 'react';


export interface IKeyboardAvoidingViewProps {
  className?: string;
  behavior?: 'padding' | 'absolute';
  enabled?: boolean;
  keyboardVerticalOffset?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

declare const KeyboardAvoidingView: ComponentClass<IKeyboardAvoidingViewProps>;

export default KeyboardAvoidingView;
