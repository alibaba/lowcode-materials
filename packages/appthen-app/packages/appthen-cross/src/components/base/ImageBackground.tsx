import React, { Component } from 'react';
import { IStyleItem } from './Text.PropType';
import View from './View';

interface IProp {
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
export class ImageBackground extends Component<IProp> {
  render() {
    const { src, children, className, style = {}, inlineStyle, ...other } = this.props;
    let _className = className;
    let _style = style;
    if (src) {
      _className = `${className || ''} M-image-background`;
      _style = {
        ...style,
        backgroundImage: `url(${src})`,
      };
    }
    if (inlineStyle) {
      inlineStyle.forEach((st) => {
        if (st.enable && st.style) _style = Object.assign(_style, st.style);
      });
    }
    return (
      <View className={_className} style={_style} {...other}>
        {children}
      </View>
    );
  }
}

export default ImageBackground;
