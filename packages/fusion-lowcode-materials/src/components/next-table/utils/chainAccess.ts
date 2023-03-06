export function safeAccess(obj: { [prop: string]: any }, str: string) {
  return str.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
};

export function safeWrite(obj: { [prop: string]: any }, str: string, value: any) {
  const segs = str.split('.');
  const key = segs.pop();
  const leaf = segs.reduce((o, k) => {
    if (!o[k]) {
      o[k] = {};
    }
    return o[k];
  }, obj);
  if (typeof key === 'string') {
    leaf[key] = value;
  }
};

