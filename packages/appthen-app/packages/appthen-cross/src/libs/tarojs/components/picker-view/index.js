import React from 'react';

class PickerView extends React.Component {
  render() {
    const { ...reset } = this.props;
    return (
      <div className="M-flexbox-horizontal" style={{ overflow: 'hidden' }} {...reset}>
        {this.props.children}
      </div>
    );
  }
}

export default PickerView;
