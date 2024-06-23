import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Taro from '@tarojs/taro';
import { View } from '../../..';
import { SafeViewProps } from './SafeView.PropType';
import { observable } from 'mobx';

export const safeView = {
  statusBarHeight: 0,
  bottomSafeHeight: 0,
};

@observer
class SafeView extends Component<SafeViewProps> {
  componentDidMount(): void {
    if (!safeView.statusBarHeight && Taro.getEnv() !== Taro.ENV_TYPE.WEB) {
      const info = Taro.getSystemInfoSync();
      safeView.statusBarHeight = info?.statusBarHeight || 0.1; // 0.1 防止重复请求
      safeView.bottomSafeHeight = (info?.safeArea?.bottom || 0) - (info?.safeArea?.height || 0);
      this.statusBarHeight = safeView.statusBarHeight;
      this.bottomSafeHeight = safeView.bottomSafeHeight;
    }
  }

  @observable statusBarHeight = 0;
  @observable bottomSafeHeight = 0;

  render() {
    const { style } = this.props;
    const { statusBarHeight, bottomSafeHeight } = this;
    const topHeight = Taro.getEnv() === Taro.ENV_TYPE.RN ? statusBarHeight : (statusBarHeight || safeView.statusBarHeight) + 'px';
    const bottomHeight = Taro.getEnv() === Taro.ENV_TYPE.RN ? bottomSafeHeight : (bottomSafeHeight || safeView.bottomSafeHeight) + 'px';
    return (
      <View style={style}>
        {this.props.forceInset.top === 'always' && <View style={{ height: topHeight }} />}
        {this.props.forceInset.bottom === 'always' && <View style={{ height: bottomHeight }} />}
      </View>
    );
  }
}
export default SafeView;
