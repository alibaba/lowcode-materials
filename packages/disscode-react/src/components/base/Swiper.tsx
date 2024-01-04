import React from 'react';
import { Swiper } from '@tarojs/components';

import { SwiperProps } from './Swiper.PropType';

class _Swiper extends React.Component<SwiperProps> {
  static defaultProps: SwiperProps = {
    indicatorColor: 'rgba(0,0,0,0.3)',
    indicatorActiveColor: '#000',
    current: 0,
    interval: 5000,
  };

  onIndexChanged = (index: number): void => {
    const { onChange } = this.props;
    onChange && onChange({ detail: { current: index } });
  };

  /**
   * e, state, context(ref to swiper's this)
   */
  onMomentumScrollEnd = (e: any, state: { index: number }): void => {
    const { onAnimationFinish } = this.props;
    onAnimationFinish && onAnimationFinish({ detail: { current: state.index } });
  };

  render() {
    const { children, style, indicatorDots = true, indicatorColor = '#999', indicatorActiveColor = '#333', autoplay, current, interval, circular, vertical } = this.props;

    return (
      <Swiper
        style={style}
        indicatorDots={indicatorDots}
        indicatorColor={indicatorColor}
        indicatorActiveColor={indicatorActiveColor}
        vertical={vertical}
        circular
        autoplay
      >
        {children}
      </Swiper>
    );
  }
}

export default _Swiper;
