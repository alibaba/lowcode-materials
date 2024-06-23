import React from 'react';
import omit from 'omit.js';
import { View as TView } from '@tarojs/components';
import AnimateView, { AnimateProp } from '../animate';

import { IViewProp, LayoutValue } from './View.PropType';
import SafeView from './Bar/SafeView';
import Taro from '@tarojs/taro';

let globalViewId = 0;

export class View extends React.Component<IViewProp & AnimateProp> {
  static displayName = 'View';

  constructor(props: IViewProp) {
    super(props);
    this.viewId = 'v_' + String(globalViewId++);
  }

  componentDidMount() {
    if (this.props.onLayout) {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        setTimeout(() => {
          this.getNode();
        }, 500);
      } else {
        Taro.nextTick(() => {
          this.getNode();
        });
      }
    }
  }

  viewId: string = '0';
  layoutValue?: LayoutValue;
  queryNode(cb: (res: Taro.NodesRef) => void) {
    const query = Taro.createSelectorQuery();
    query.select('#' + this.viewId).boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec(cb);
  }
  getNode() {
    this.queryNode((res) => {
      if (res[0]) this.onLayout(res[0]);
      if (!res[0]) {
        let isExec = false;
        Taro.eventCenter.once((Taro.Current?.router as any)?.onReady, () => {
          isExec = true;
          this.queryNode((res) => {
            if (res[0]) this.onLayout(res[0]);
          });
        });
        setTimeout(() => {
          if (!isExec) {
            this.queryNode((res) => {
              if (res[0]) this.onLayout(res[0]);
              if (!res[0]) return console.warn('View 获取dom node 失败');
            });
          }
        }, 500);
      }
    });
  }
  onLayout(node) {
    this.layoutValue = {
      width: node.width,
      height: node.height,
      x: node.left,
      y: node.top,
    };
    this.props.onLayout && this.props.onLayout(this.layoutValue);
  }

  render() {
    const {
      style = {},
      elevation,
      inlineStyle,
      safeTop,
      safeBottom,
      children,
      onClick,
      onLayout,
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
    if (onLayout) {
      (other as any).id = this.viewId;
      (other as any).onLayout = this.onLayout;
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
      <TView onClick={onClick} className={className} style={_style} {...omit(other, [])}>
        {safeTop && <SafeView forceInset={{ top: 'always', bottom: 'never' }} />}
        {children}
        {safeBottom && <SafeView forceInset={{ top: 'never', bottom: 'always' }} />}
      </TView>
    );
  }
}

export default View;
