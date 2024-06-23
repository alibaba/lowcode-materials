import React from 'react';
import omit from 'omit.js';
import { View as RQView } from '@tarojs/components';

import { IViewProp } from './View.PropType';
import SafeView from './Bar/SafeView';

export class View extends React.Component<IViewProp> {
  static displayName = 'View';

  render() {
    const { style = {}, elevation, inlineStyle, safeTop, safeBottom, children, onClick, activeOpacity = 1, ...other } = this.props;
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
    return (
      <RQView onClick={onClick} className={className} style={_style} {...omit(other, ['onLayout'])}>
        {safeTop && <SafeView forceInset={{ top: 'always', bottom: 'never' }} />}
        {children}
        {safeBottom && <SafeView forceInset={{ top: 'never', bottom: 'always' }} />}
      </RQView>
    );
  }
}

export default View;
