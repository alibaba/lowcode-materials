// @ts-nocheck
/**
 * 数据转换方法
 */

export const objectToQuery = (obj: object, haveQuestion = true) => {
  let str = '';
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      str += str === '' ? (haveQuestion ? '?' : '') : '&';
      str += k + '=';
      str += obj[k];
    }
  }
  return str;
};

export const queryToObject = (url: string) => {
  url = decodeURIComponent(url);
  let obj: any = {};
  if (url) {
    url = url.replace(/#[^#]*$/, '');
    let queryStr = url;
    let marchResult: any = null;
    let regex = /(\w+)(=([^&#]+)?)?/g;
    while ((marchResult = regex.exec(queryStr)) != null) {
      if (marchResult[1] in obj) {
        let values: any = obj[marchResult[1]];
        if (values instanceof Array) {
          values.push(marchResult[2] ? (marchResult[3] ? marchResult[3] : '') : null);
          obj.marchResult[1] = values;
        } else {
          let arr: any = [];
          arr.push(values);
          arr.push(marchResult[2] ? (marchResult[3] ? marchResult[3] : '') : null);
          obj[marchResult[1]] = arr;
        }
      } else {
        obj[marchResult[1]] = marchResult[2] ? (marchResult[3] ? marchResult[3] : '') : null;
      }
    }
  }
  return obj as any;
};
