import { objectToQuery } from './data';
import axios from 'axios';
export { create as dataSource } from '@alilc/lowcode-datasource-engine/runtime';
export function requestHandle(config) {
    return async function (options) {
        const { contentType, uri, query, params, method, headers = {} } = options;
        const data = contentType === 'FORM' && Object.keys(params).length > 0 ? new FormData() : params;
        if (contentType === 'FORM') {
            for (const k in params) {
                if (typeof params[k] !== 'undefined') {
                    data.append(k, params[k]);
                }
            }
        }
        delete options.contentType;
        const url = uri + (query && Object.keys(query).length > 0 ? objectToQuery(query) : '');
        const requestConfig = Object.assign(Object.assign(Object.assign({}, options), { url, method: method, data, headers: headers }), config);
        const response = await axios(requestConfig);
        return response;
    };
}
//# sourceMappingURL=dataSource.js.map