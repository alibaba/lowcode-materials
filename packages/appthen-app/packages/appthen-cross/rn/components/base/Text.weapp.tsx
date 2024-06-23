import React from 'react';
import { Text } from '@tarojs/components';
import { ITextProps } from './Text.PropType';

export class RText extends React.Component<ITextProps> {
  static displayName = 'Text';

  handleInput = (e: any) => {
    if (this.props.onInputText) this.props.onInputText(e.target.innerHTML);
  };

  render() {
    const { style = {}, className = 'cross-text', inlineStyle, children, numberOfLines, editable, onInputText, ...other } = this.props;
    let _className = className;
    let _style = style;
    if (inlineStyle) {
      _style = { ...style };
      inlineStyle.forEach((st) => {
        if (st.enable && st.style) _style = Object.assign(_style, st.style);
      });
    }
    if (numberOfLines) {
      _className = `${_className} M-text-show-row-${numberOfLines}`;
    }
    return (
      <Text className={_className || undefined} style={_style} {...other}>
        {children}
      </Text>
    );
  }
}

export default RText;
