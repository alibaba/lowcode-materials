import React, { Component } from 'react';

import { Text, Platform } from 'react-native';
import { ITextProps } from './Text.PropType';

class TText extends Component<ITextProps> {
  render() {
    const { className = '', style, inlineStyle, children, ...other } = this.props;
    let _className = className;
    let _style: React.CSSProperties | undefined = style;
    if (Platform.OS === 'android') {
      if (!_style) _style = {};
      (_style as any).includeFontPadding = false;
    }
    if (inlineStyle) {
      _style = { ...style };
      inlineStyle.forEach((st) => {
        if (st.enable && st.style) _style = Object.assign(_style || {}, st.style);
      });
    }
    if (typeof _style?.fontWeight === 'number') {
      _style.fontWeight = String(_style.fontWeight);
    }
    return (
      <Text className={_className} style={_style} includeFontPadding={false} {...other}>
        {children}
      </Text>
    );
  }
}

export default TText;
