import { ScrollView, View } from '@tarojs/components';
import { CommonEventFunction } from '@tarojs/components/types/common';
import classNames from 'classnames';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import omit from 'omit.js';
import React from 'react';

export type ScrollMetrics = {
  contentLength: number;
  dOffset: number;
  dt: number;
  offset: number;
  offsetX: number;
  offsetY: number;
  timestamp: number;
  velocity: number;
  visibleLength: number;
};

export type EventOnScrollToUpper = {
  distanceFromTop: number;
};

export type EventOnScrollToLower = {
  distanceFromEnd: number;
};

export type EventOnScroll = {
  detail: {
    scrollLeft: number;
    scrollTop: number;
    scrollHeight: number;
    scrollWidth: number;
    deltaX: number;
    deltaY: number;
  };
};

export interface ScrollViewState {
  snapScrollTop: number;
  snapScrollLeft: number;
}

export interface ScrollViewProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  showScrollbar?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  bounces?: boolean;
  upperThreshold?: number;
  lowerThreshold?: number;
  scrollTop?: number;
  scrollLeft?: number;
  scrollWithAnimation?: boolean;
  enableBackToTop?: boolean;
  onScrollToUpper?: CommonEventFunction;
  onScrollToLower?: CommonEventFunction;
  onRefresherRefresh?: (finish: () => void) => void;
  onScroll?: CommonEventFunction;
}

@observer
export class HocScrollView extends React.Component<ScrollViewProps> {
  /**
   * 用于 scrollTo*
   * bug 由于pc端使用 出现只要使用ueditor 输入，scrollView 就会滚动到 目前 scrollTop 的位置 所以默认值为 undefined
   */
  @observable _scrollTop?: number = undefined;
  @observable _scrollLeft?: number = undefined;
  scrollTo = ({ x, y }: { x?: number; y?: number }) => {
    if (typeof x === 'number') {
      this._scrollLeft = x - 1;
      setTimeout(() => {
        this._scrollLeft = (this._scrollLeft || 0) + 1;
      }, 100);
    }
    if (typeof y === 'number') {
      this._scrollTop = y - 1;
      setTimeout(() => {
        this._scrollTop = (this._scrollTop || 0) + 1;
      }, 100);
    }
    /**
     * bug 由于pc端使用 出现只要使用ueditor 输入，scrollView 就会滚动到 目前 scrollTop 的位置
     * 所以 在使用scrollTo 之后，将 scrollTop 设置为 undefind
     */
    this._scrollTop = undefined;
    this._scrollLeft = undefined;
  };
  onScroll = (e: any) => {
    this.scrollTop = e.detail.scrollTop;
    this.scrollLeft = e.detail.scrollLeft;
    this.props.onScroll && this.props.onScroll(e);
  };

  scrollTop: number = 0;
  scrollLeft: number = 0;

  render() {
    const { className = '', style = {}, showScrollbar, children, scrollY, scrollX, ...other } = this.props;

    return (
      <View className={`cs-scroll-view M-flex-item`}>
        {/* @ts-ignore */}
        <ScrollView
          scrollWithAnimation
          scrollTop={this._scrollTop}
          onScroll={this.onScroll}
          scrollLeft={this._scrollLeft}
          scrollX={scrollX}
          scrollY={scrollY || !scrollX}
          style={style}
          className={classNames('cs-scroll-view__scroll', className)}
          // @ts-ignore 解决滚动条显隐
          showsHorizontalScrollIndicator={typeof showScrollbar === 'undefined' ? true : showScrollbar}
          showsVerticalScrollIndicator={typeof showScrollbar === 'undefined' ? true : showScrollbar}
          // @ts-ignore 解决滚动条位置错乱问题
          scrollIndicatorInsets={{ right: 1 }}
          {...omit(other, ['onScroll', 'onRefresherRefresh'])}
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}

export default HocScrollView;

// export default ScrollView;
