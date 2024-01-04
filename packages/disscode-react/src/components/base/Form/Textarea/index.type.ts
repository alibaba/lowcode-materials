import { TextareaProps } from "@tarojs/components";

export interface RQTextareaProps extends TextareaProps {
  onChange?: (value: string) => void;
}