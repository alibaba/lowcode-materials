import Taro from '@tarojs/taro';
/**
 * 全局传递数据
 */
const preloadData = {};
export const $preload = (name, data) => {
    if (typeof data === 'undefined') {
        return preloadData[name];
    }
    else {
        preloadData[name] = data;
    }
};
export const preload = $preload;
export const setItem = function (key, value) {
    if (typeof value !== 'string')
        value = String(value);
    return Taro.setStorage({ key, data: value });
};
export const getItem = function (key) {
    return new Promise((resolve) => {
        Taro.getStorage({ key })
            .then(({ data }) => {
            if (data) {
                resolve(data);
            }
            else {
                resolve();
            }
        })
            .catch(() => resolve());
    });
};
export const removeItem = function (key) {
    return Taro.removeStorage({ key });
};
export const getItemSync = function (key) {
    return Taro.getStorageSync(key);
};
export const $storage = {
    setItem,
    getItem,
    removeItem,
    getItemSync,
};
//# sourceMappingURL=storage.js.map