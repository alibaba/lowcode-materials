import React, { ReactNode } from 'react';
import View from '../View';
import AutoPortal from '../../root-portal/auto-portal';

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
    // @ts-ignore
    const isRootNode = this.props.__isRootNode || this.props.getNode?.(this.props.componentId)?.isRootNode;
    if (fill && isRootNode) {
      return (
        <View
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {this.props.children}
          {isRootNode && <AutoPortal />}
        </View>
      );
    }
    return (
      <React.Fragment>
        {this.props.children}
        {isRootNode && <AutoPortal />}
      </React.Fragment>
    );
  }
}

export default Component;
