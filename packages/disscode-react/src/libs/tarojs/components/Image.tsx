import React from 'react';

class Image extends React.PureComponent {
  render(): React.ReactNode {
    return <img {...this.props} />;
  }
}

export default Image;
