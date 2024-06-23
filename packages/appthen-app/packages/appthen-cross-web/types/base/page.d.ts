import React, { ComponentClass } from 'react';

/**
 * 页面组件Props基础
 */
export interface CrossPageProps {
  isModal?: boolean;
  navigation?: CrossPageNavigation;
  query?: object;
  params?: object;
}

export interface CrossPageNavigation {
  goBack: () => void;
  navigate: (
    pageName: string,
    params?: {
      query?: object;
      params?: object;
    },
  ) => void;
  redirect: (
    pageName: string,
    params?: {
      query?: object;
      params?: object;
    },
  ) => void;
}


interface IPageProps extends CrossPageProps {
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: string;
  keyboard?: boolean;
  children: React.ReactNode;
  absolute?: boolean;
  statusBarMode?: 'light' | 'dark';
}

declare const Page: ComponentClass<IPageProps>;

export default Page;


