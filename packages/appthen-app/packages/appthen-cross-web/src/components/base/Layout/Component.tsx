import React, { ReactNode } from 'react';
import View from '../View';

interface IProps {
  /**
   * 全屏调试
   */
  fill?: boolean;

  children?: React.ReactNode;

  getNode?: any;
  componentId?: string;
}

export class Component extends React.PureComponent<IProps> {
  render(): ReactNode {
    const { fill } = this.props;
    if (fill && this.props.getNode?.(this.props.componentId)?.isRootNode) {
      return (
        <View
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {this.props.children}
        </View>
      );
    }
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default Component;
