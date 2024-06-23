import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { Button, View } from '@tarojs/components';

import { IViewProp, LayoutValue } from './View.PropType';
import SafeView from './Bar/SafeView';

interface IViewContextValue {
  gutter?: number | [number, number];
}
export const ViewContext = React.createContext<IViewContextValue>({});

let globalViewId = 0;

class RqView extends Component<IViewProp> {
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
    const { style, inlineStyle, elevation, safeTop, safeBottom, children, onLongPress, onLayout, onClick, miniButton, activeOpacity = 1, ...other } = this.props;
    let { className } = this.props;
    let _style = style;
    if (inlineStyle) {
      inlineStyle.forEach((st) => {
        if (st.enable && st.style) _style = Object.assign(_style || {}, st.style);
      });
    }
    if (activeOpacity !== 1) className = `${className || ''} M-touch-active`;
    if (elevation) {
      className = className + ' M-boxshadow-' + elevation;
    }
    if (onLayout) {
      (other as any).id = this.viewId;
      (other as any).onLayout = this.onLayout;
    }
    const Node = miniButton ? Button : View;
    return (
      <Node className={className} onClick={onClick} onLongPress={onLongPress} style={_style} {...(other as any)}>
        {safeTop && <SafeView forceInset={{ top: 'always', bottom: 'never' }} />}
        {children}
        {safeBottom && <SafeView forceInset={{ top: 'never', bottom: 'always' }} />}
      </Node>
    );
  }
}

export default RqView;
