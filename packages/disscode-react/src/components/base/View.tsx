import React from 'react';
import omit from 'omit.js';
import { View as TView } from '@tarojs/components';

import { IViewProp } from './View.PropType';
import SafeView from './Bar/SafeView';
import AnimateView, { AnimateProp } from '../animate';

export class View extends React.Component<IViewProp & AnimateProp> {
  static displayName = 'View';

  render() {
    const {
      style = {},
      elevation,
      inlineStyle,
      safeTop,
      safeBottom,
      children,
      onClick,
      activeOpacity = 1,
      ...other
    } = this.props;
    let { className } = this.props;
    let _style = style;
    if (inlineStyle) {
      _style = { ...style };
      inlineStyle.forEach((st) => {
        if (st.enable && st.style) _style = Object.assign(_style, st.style);
      });
    }
    if (activeOpacity !== 1) className = `${className} M-touch-active`;
    if (elevation) {
      className = className + ' M-boxshadow-' + elevation;
    }
    const {
      animationIn,
      animationOut,
      inDelay,
      outDelay,
      inDuration,
      outDuration,
      onMount,
      visible,
      repeat,
      loop,
    } = this.props;
    const isAnimateView = Boolean(animationIn || animationOut);
    return isAnimateView ? (
      <AnimateView
        animationIn={animationIn}
        animationOut={animationOut}
        inDelay={inDelay}
        outDelay={outDelay}
        inDuration={inDuration}
        outDuration={outDuration}
        onMount={onMount}
        visible={visible}
        repeat={repeat}
        loop={loop}
        onClick={onClick}
        className={className}
        style={_style}
        {...omit(other, [])}
      >
        {safeTop && <SafeView forceInset={{ top: 'always', bottom: 'never' }} />}
        {children}
        {safeBottom && <SafeView forceInset={{ top: 'never', bottom: 'always' }} />}
      </AnimateView>
    ) : (
      <TView onClick={onClick} className={className} style={_style} {...omit(other, ['onLayout'])}>
        {safeTop && <SafeView forceInset={{ top: 'always', bottom: 'never' }} />}
        {children}
        {safeBottom && <SafeView forceInset={{ top: 'never', bottom: 'always' }} />}
      </TView>
    );
  }
}

export default View;
