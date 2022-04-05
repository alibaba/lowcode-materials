export { default as get } from 'lodash.get';
export { default as set } from 'lodash.set';
export { default as has } from 'lodash.has';

// simple uuid
export function uuid() {
  return ((Math.random() * 1e6) >> 0).toString(36);
}
