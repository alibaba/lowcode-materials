import React from 'react';
import classNames from 'classnames';
import { ITextProps } from './Text.PropType';
import { Text as TText } from '@tarojs/components';

export class Text extends React.Component<ITextProps> {
  static displayName = 'Text';

  handleInput = (e: any) => {
    if (this.props.onInputText) this.props.onInputText(e.target.innerHTML);
  };

  render() {
    const {
      style = {},
      inlineStyle,
      children,
      numberOfLines,
      editable,
      onInputText,
      className,
      ...other
    } = this.props;
    let _style = style;
    if (inlineStyle) {
      _style = { ...style };
      inlineStyle.forEach((st) => {
        if (st.enable && st.style) _style = Object.assign(_style, st.style);
      });
    }
    if ((!children || children == 'undefined') && children !== 0) return null;
    return (
      <TText
        className={classNames('cross-text', className, {
          [`M-text-show-row-${numberOfLines}`]: !!numberOfLines,
        })}
        style={_style}
        {...other}
      >
        {children}
      </TText>
    );
  }
}

export default Text;
