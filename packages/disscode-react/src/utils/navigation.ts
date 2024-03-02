import { objectToQuery, queryToObject } from './data';
import { NavigationOption } from './navigation.type';
import { $preload } from './storage';
import { history } from 'react-router-dom';


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
  return function () {
    const query = queryToObject(window.location.hash.split('?')[1]);
    const params = $preload('PAGE_PARAMS_' + fileName) || {};
    // const name =
    return {
      query,
      params,
    };
  };
};
export const navigateBack = () => history.go(-1);
export const navigateTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  history.push(`${pageName}${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}`);
  // Taro.navigateTo({
  //   url: router.syncMap.pages.includes(pageName) ? `${router.baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
  // });
};
export const redirectTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  history.replace(`${pageName}${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}`);
  // Taro.redirectTo({
  //   url: router.syncMap.pages.includes(pageName) ? `${router.baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
  // });
};
