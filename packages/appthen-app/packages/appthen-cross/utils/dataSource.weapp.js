import Taro from '@tarojs/taro';
import { objectToQuery } from './data';
export { create as dataSource } from '@alilc/lowcode-datasource-engine/runtime';
export function requestHandle(config) {
    return function (options) {
        return new Promise((resolve, reject) => {
            const { contentType, uri, query, params, method, headers = {} } = options;
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
            const url = uri + (query && Object.keys(query).length > 0 ? objectToQuery(query) : '');
            Taro.request({
                url,
                data: contentType === 'FORM' ? data : params,
                header: Object.assign({ 'content-type': contentType === 'application/x-www-form-urlencoded'
                        ? 'application/x-www-form-urlencoded'
                        : 'multipart/form-data; boundary=XXX' }, headers),
                method: method,
                success: async (res) => {
                    resolve(res);
                },
                fail: (e) => {
                    console.warn('request fail:', e);
                    reject(e);
                },
            });
        });
    };
}
//# sourceMappingURL=dataSource.weapp.js.map