import React from 'react';
import { ITextProps } from './Text.PropType';

export class Text extends React.Component<ITextProps> {
  static displayName = 'Text';

  handleInput = (e: any) => {
    if (this.props.onInputText) this.props.onInputText(e.target.innerHTML);
  };

  render() {
    const { style = {}, inlineStyle, children, numberOfLines, editable, onInputText, ...other } = this.props;
    let { className = 'cross-text' } = this.props;
    let _style = style;
    if (inlineStyle) {
      _style = { ...style };
      inlineStyle.forEach((st) => {
        if (st.enable && st.style) _style = Object.assign(_style, st.style);
      });
    }
    if (numberOfLines) {
      className = `${className} M-text-show-row-${numberOfLines}`;
    }
    return (
      <span className={className || undefined} style={_style} contentEditable={editable} suppressContentEditableWarning onBlur={this.handleInput} {...other}>
        {children}
      </span>
    );
  }
}

export default Text;
