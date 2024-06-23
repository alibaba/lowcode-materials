/**
 * 全局传递数据
 */
const preloadData = {};
export const $preload = (name: string, data?: object) => {
  if (typeof data === 'undefined') {
    return preloadData[name];
  } else {
    preloadData[name] = data;
  }
};

export const preload = $preload;

export const setItem = function (key: string, value: string) {
  if (typeof value !== 'string') value = String(value);
  return new Promise<void>((resolve) => {
    localStorage.setItem(key, value);
    resolve();
  });
};
export const getItem = function (key: string) {
  return new Promise<string>((resolve) => {
    const result: string = localStorage.getItem(key) || '';
    resolve(result);
  });
};
export const removeItem = function (key: string) {
  return new Promise<void>((resolve) => {
    localStorage.removeItem(key);
    resolve();
  });
};

export const $storage = {
  setItem,
  getItem,
  removeItem,
};
