import React from 'react';

export const isIos = () => {
  return false;
}

interface IProps {
  className?: string;
  behavior?: 'padding' | 'absolute';
  enabled?: boolean;
  keyboardVerticalOffset?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

class KeyboardAvoidingView extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default KeyboardAvoidingView;
