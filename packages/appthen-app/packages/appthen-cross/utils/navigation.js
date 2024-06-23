import Taro, { Current } from '@tarojs/taro';
import { objectToQuery } from './data';
import { $preload } from './storage';
let router = {
    baseUrl: '/pages/app',
    syncMap: {
        pages: [],
    }
};
export const loadSyncMap = function (config) {
    router = config;
};
export const createRoute = (fileName) => {
    var _a;
    const query = ((_a = Current.router) === null || _a === void 0 ? void 0 : _a.params) || {};
    const params = $preload('PAGE_PARAMS_' + fileName) || {};
    return function () {
        return {
            query,
            params,
        };
    };
};
export const navigateBack = Taro.navigateBack;
export const navigateTo = (pageName, { query = {}, params } = {}) => {
    if (params)
        $preload('PAGE_PARAMS_' + pageName, params);
    Taro.navigateTo({
        url: router.syncMap.pages.includes(pageName) ? `${router.baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
    });
};
export const redirectTo = (pageName, { query = {}, params } = {}) => {
    if (params)
        $preload('PAGE_PARAMS_' + pageName, params);
    Taro.redirectTo({
        url: router.syncMap.pages.includes(pageName) ? `${router.baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName,
    });
};
//# sourceMappingURL=navigation.js.map