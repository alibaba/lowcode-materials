export function uuid() {
  return ((Math.random() * 1e6) >> 0).toString(36);
}
