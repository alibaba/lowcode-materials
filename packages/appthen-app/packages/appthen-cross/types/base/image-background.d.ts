import { ComponentClass } from 'react';

export interface IImageBackgroundProps {
  src?: string | number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  inlineStyle?: IStyleItem[];

  /**
   * 图片样式
   */
  imageStyle?: React.CSSProperties;
  // ref?: string | ((node: any) => any);
  key?: string | number;
  onLoad?: () => void;
}

declare const ImageBackground: ComponentClass<IImageBackgroundProps>;

export default ImageBackground;
