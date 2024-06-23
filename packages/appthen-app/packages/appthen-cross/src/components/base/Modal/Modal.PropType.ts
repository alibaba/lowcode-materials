import React from "react";

/**
 * Modal
 */
export interface ModalProps<C extends React.Component> {
  ref?: any;
  visible?: boolean;
  children?: React.ReactNode;
  /** 点击蒙层是否允许关闭	 */
  maskClosable?: boolean;
  overlayOpacity?: number;
  animate?: 'fade' | 'pop' | 'slide-bottom' | 'slide-top' | 'slide-left' | 'slide-right';
  style?: React.CSSProperties;
  renderView?: (props: C['props']) => React.ReactNode;
  /**
   * PC 中使用
   */
  width?: number | string;
  height?: number | string;
  zIndex?: number;
  onClose?: () => void;
  /* 全屏无动画 原teaset Overlay会遇到ios键盘遮挡问题 */
  topView?: boolean;
}