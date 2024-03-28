import { ComponentClass } from 'react';

export interface FootbarItem {
  name: string;
  text?: string;
  iconPath: string;
  selectedIconPath: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  styleSelected?: React.CSSProperties;

  /**
   * 徽标提示
   */
  badge?: string;
  /**
   * 红点
   */
  dot?: boolean;
}

export interface FooterBarProps {
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 选中颜色
   */
  selectedColor?: string;
  // position?: 'top' | 'bottom';

  /**
   * 按钮列表
   */
  list?: FootbarItem[];

  style?: React.CSSProperties;

  /**
   * 当前项
   */
  current?: number | string;
  onChange?: (index: number, name?: string) => void;
}


declare const FooterBar: ComponentClass<FooterBarProps>;

export default FooterBar;
