import Taro, { Current } from '@tarojs/taro';
import { $preload } from './storage';
import { objectToQuery } from './data';
import { NavigationOption } from './navigation.type';

let router = {
  baseUrl: '/pages/app',
  syncMap: {
    pages: [] as string[],
  }
}
export const loadSyncMap = function(config: typeof router) {
  router = config;
}

export const createRoute = (fileName: string) => {
  const query = Current.router?.params || {};
  const params = $preload('PAGE_PARAMS_' + fileName) || {};
  return function () {
    return {
      query,
      params,
    };
  };
};
export const navigateBack = Taro.navigateBack;
export const navigateTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  Taro.navigateTo({
    url: router.syncMap.pages.includes(pageName) ? `${router.baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
  });
};
export const redirectTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  Taro.redirectTo({
    url: router.syncMap.pages.includes(pageName) ? `${router.baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
  });
};
