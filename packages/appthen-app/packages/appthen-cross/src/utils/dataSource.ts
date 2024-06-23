import { objectToQuery } from './data';
import { RuntimeOptionsConfig } from '@alilc/lowcode-types';
import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';

export { create as dataSource } from '@alilc/lowcode-datasource-engine/runtime';

export function requestHandle(config?: Record<string, unknown>) {
  return async function (options: RuntimeOptionsConfig & { query: Record<string, string> }) {
    const { contentType, uri, query, params, method, headers = {} } = options;
    const data =
      contentType === 'FORM' && Object.keys(params as any).length > 0 ? new FormData() : params;
    if (contentType === 'FORM') {
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          (data as FormData).append(k, params[k] as any);
        }
      }
    }
    delete options.contentType;
    const url = uri + (query && Object.keys(query).length > 0 ? objectToQuery(query) : '');
    const requestConfig: AxiosRequestConfig = {
      ...options,
      url,
      method: method as Method,
      data,
      headers: headers as AxiosRequestHeaders,
      ...config,
    };
    const response = await axios(requestConfig);
    return response;
  };
}
