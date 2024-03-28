import { ComponentClass } from 'react';

export interface StatusBarProps {
  mode: 'dark' | 'light';
  /** 是否隐藏状态栏 */
  hidden?: boolean;
}

declare const StatusBar: ComponentClass<StatusBarProps>;

export default StatusBar;
