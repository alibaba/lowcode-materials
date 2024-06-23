import React, { ReactNode } from 'react';

interface IProps {
  /**
   * 全屏调试
   */
  fill?: boolean;

  children?: React.ReactNode;
}

export class Component extends React.PureComponent<IProps> {
  render(): ReactNode {
    const { fill } = this.props;
    if (fill) {
      // return 
    }
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default Component;
