import { FootbarItem } from '@/components/Bar/FooterBar/FooterBar';

export interface ITabViewProps {
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
  list?: ITabViewItem[];

  style?: React.CSSProperties;

  tabbarStyle?: React.CSSProperties;

  /**
   * 当前项
   */
  current?: number | string;
  onChange?: (index: number, name?: string) => void;
}

export interface ITabViewItem {
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

  view?: React.ReactElement;
  /**
   * 渲染延迟
   */
  delay?: number;
}
declare const TabView: ComponentClass<ITabViewProps>;

export default TabView;

