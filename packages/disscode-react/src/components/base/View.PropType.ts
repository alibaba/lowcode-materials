import React from 'react';

export interface LayoutValue {
  width: number;
  height: number;
  x: number;
  y: number;
}

interface IStyleItem {
  name: string;
  enable: boolean;
  style: React.CSSProperties;
}

export interface IViewProp {
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  inlineStyle?: IStyleItem[];
  key?: string | number;
  activeOpacity?: number;

  /**
   * 多端通用简易阴影
   */
  elevation?: number;

  safeTop?: boolean;
  safeBottom?: boolean;

  onClick?: (e: any) => void;
  onLongPress?: (e: any) => void;
  onLayout?: (layout: LayoutValue) => void;

  miniButton?: boolean;
  openType?:
    | 'contact'
    | 'contactShare'
    | 'share'
    | 'getRealnameAuthInfo'
    | 'getAuthorize'
    | 'getPhoneNumber'
    | 'getUserInfo'
    | 'lifestyle'
    | 'launchApp'
    | 'openSetting'
    | 'feedback'
    | 'chooseAvatar';
  onChooseAvatar?: (e: any) => void;
}
