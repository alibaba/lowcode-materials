import AtActivityIndicator from '../activity-indicator';
import React, { Component, ReactNode } from 'react';
import View from '../base/View';

interface Props {
  spinning: boolean;
  tip?: string;
  children: ReactNode;
}

class Spin extends Component<Props> {
  render() {
    const { spinning, tip, children } = this.props;

    return (
      <View style={{ position: 'relative' }}>
        {/* 只有当 `spinning` 为 true 时，才显示加载动画 */}
        {spinning && (
          // @ts-ignore
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <AtActivityIndicator size={32} content={tip} />
            {/* @ts-ignore */}
          </div>
        )}

        {/* 显示子组件 */}
        {children}
      </View>
    );
  }
}

export default Spin;
