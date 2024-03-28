const isType =
  <T>(type: string | string[]) =>
  (obj: unknown): obj is T =>
    obj != null &&
    (Array.isArray(type) ? type : [type]).some(
      (t) => getType(obj) === `[object ${t}]`
    )

export const getType = (obj: any) => Object.prototype.toString.call(obj)

export const isPlainObj = isType<object>('Object')
