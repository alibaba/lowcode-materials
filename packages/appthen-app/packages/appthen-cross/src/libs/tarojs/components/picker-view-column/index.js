import React from 'react';

class PickerViewColumn extends React.Component {
  render() {
    const { style, ...rest } = this.props;
    return (
      <div
        className="M-flex-item"
        {...rest}
        style={{
          ...style,
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default PickerViewColumn;
