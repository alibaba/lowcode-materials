import isPlainObject from "lodash/isPlainObject";
import forOwn from "lodash/forOwn";
import isArray from "lodash/isArray";

function deepCopyExcept(data: any, callback: (value: any, key: string | number) => boolean) {
  let dest: any, i, shouldExcept, newValue;

  if (isPlainObject(data)) {
    dest = {};
    forOwn(data, (value, key) => {
      newValue = deepCopyExcept(value, callback);
      shouldExcept = callback(newValue, key);
      if (!shouldExcept) {
        dest[key] = newValue;
      }
    });
  } else if (isArray(data)) {
    dest = [];
    for (i = 0; i < data.length; i++) {
      newValue = deepCopyExcept(data[i], callback);
      shouldExcept = callback(newValue, i);
      if (!shouldExcept) {
        dest.push(newValue);
      }
    }
  } else {
    return data;
  }
  return dest;
};

export default function getCleanRowData(rowData: any) {
  if (rowData) {
    const blackList = ['__mode__', '__fields__', '__expand__'];
    return deepCopyExcept(rowData, (value, key) => {
      return blackList.indexOf(<string>key) !== -1
    })
  }
}
