export { get, set, has } from 'lodash';

// simple uuid
export function uuid() {
  return ((Math.random() * 1e6) >> 0).toString(36);
}
