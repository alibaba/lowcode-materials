import Taro from '@tarojs/taro';
import React from 'react';

interface PageContextValue {
  _id: string;
}

export const PageContext = React.createContext<PageContextValue>({
  _id: '',
});
