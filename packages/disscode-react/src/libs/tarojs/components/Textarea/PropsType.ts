import { EventOnLineChange, InputProps } from '../Input/PropsType';

export interface TextareaProps extends InputProps {
  autoHeight?: boolean;
  autoFocus?: boolean;
  maxlength?: number;
  placeholderStyle?: string;
  onLineChange?: (evt: EventOnLineChange) => void;
}
