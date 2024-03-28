import { IViewProp } from '../../View.PropType';

export interface HeaderBarProps {
  mode?: 'dark' | 'light';
  backgroundColor?: string;
  imageBackground?: boolean;
  title?: string | React.ReactNode;
  titleAlign?: 'left' | 'center';
  showBack?: boolean;
  translucent?: boolean;
  leftContent?: string | React.ReactNode;
  rightContent?: string | React.ReactNode;
  fixed?: boolean;
  onBack?: () => void;
  bottomContent?: React.ReactNode;
  onLayout?: IViewProp['onLayout'];
  /**
   * 如果 HeaderBar 使用 fixed 模式，则需要传入此项用于占用顶部空间
   */
  bottomContentHeight?: number;
  /**
   * 胶囊自动让位
   */
  capsulePadding?: 'right' | 'top';
  children?: React.ReactNode;
}
