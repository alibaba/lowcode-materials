import { objectToQuery, queryToObject } from './data';
import { NavigationOption } from './navigation.type';
import { $preload } from './storage';

import { createHashHistory } from "history";
export const history = createHashHistory();

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

export const navigateBack = history.back;
export const navigateTo = (pageName, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload("PAGE_PARAMS_" + pageName, params);
  history.push(
    `/${pageName}${
      Object.keys(query).length > 0 ? "?" : ""
    }${objectToQuery(query, false)}`
  );
};
export const redirectTo = (pageName, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload("PAGE_PARAMS_" + pageName, params);
  history.replace(
    `/${pageName}${
      Object.keys(query).length > 0 ? "?" : ""
    }${objectToQuery(query, false)}`
  );
};
