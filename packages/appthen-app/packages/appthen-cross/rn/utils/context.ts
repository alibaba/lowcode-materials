import Taro from '@tarojs/taro';
import React from 'react';

interface PageContextValue {
  _id: string;
  Runtime: TaroGeneral.ENV_TYPE;
  PageProps: Record<string, any>;
}

export const PageContext = React.createContext<PageContextValue>({
  _id: '',
  Runtime: Taro.ENV_TYPE.RN,
  PageProps: {},
});
