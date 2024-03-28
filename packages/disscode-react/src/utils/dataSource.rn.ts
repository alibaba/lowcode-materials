import Taro from '@tarojs/taro';
import { objectToQuery } from './data';

export { create as dataSource } from '@alilc/lowcode-datasource-engine/runtime';

export function requestHandle(config?: Record<string, unknown>) {
  return function (options: any) {
    return new Promise((resolve, reject) => {
      const { contentType, uri, query, params, method, headers = {} } = options;
      console.log('[api request] ', uri, options);

      let data = '';
      if (contentType === 'FORM') {
        for (const k in params) {
          if (typeof params[k] !== 'undefined') {
            if (typeof params[k] !== 'string' && typeof params[k] !== 'number') {
              console.warn('API PARAMS 参数值只可以为字符串或数值 字段名: ' + k);
            }
            data += '\r\n--XXX';
            data += `\r\nContent-Disposition: form-data; name="${k}"`;
            data += '\r\n';
            data += `\r\n${params[k]}`;
          }
        }
        data += '\r\n--XXX--';
      }

      const url = uri.replace('huafutong-api.keyrey.tech', 'hft-win-java.keyrey.tech') + (query && Object.keys(query).length > 0 ? objectToQuery(query) : '');
      Taro.request({
        url,
        data: contentType === 'FORM' ? data : params,
        header: {
          'content-type':
            contentType === 'application/x-www-form-urlencoded'
              ? 'application/x-www-form-urlencoded'
              : 'multipart/form-data; boundary=XXX',
          ...headers,
        },
        method,
        timeout: 10000,
        success: async (res) => {
          console.log('[api response] ', uri, res);
          resolve(res);
        },
        fail: (e) => {
          console.log('[api fail] ', uri, e);
          reject(e);
        },
      });
    });
  };
}
