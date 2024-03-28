import { ComponentClass } from 'react';
import { CommonEventFunction } from '@tarojs/components/types/common';
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

declare const ScrollView: ComponentClass<ScrollViewProps>;

export default ScrollView;
