import { ComponentClass } from 'react';

export interface ICsInputProps {
  /**
   * 文本类型
   */
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'nickname' | 'safe-password';

  /**
   * 增强校验
   */
  checkType?: 'price' | 'int';

  className?: string;

  /**
   * 确认按钮
   */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  value?: string;
  /**
   * 默认占位文字
   */
  placeholder?: string;

  placeholderStyle?: string;

  /**
   * 输入框样式
   */
  style?: React.CSSProperties;

  /**
   * 自动聚焦
   */
  autoFocus?: boolean;

  /**
   * 密码输入
   */
  password?: boolean;

  maxlength?: number;

  disabled?: boolean;

  /**
   * @des
   */
  inputStyle?: React.CSSProperties;

  openType?: string;

  hideClear?: boolean;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onChange?: (val: string) => void;
  /** 点击完成按钮时触发
   *
   * event.detail = {value: value}
   * @supported weapp, rn
   * @h5 借用[Form 组件](form.html)的`onSubmit`事件来替代
   */
  onConfirm?: () => void;
  onKeyDown?: () => void;
}

declare const Input: ComponentClass<ICsInputProps>;

export default Input;

