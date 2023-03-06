import deepcopy from 'lodash/cloneDeep';
import isPlainObject from "lodash/isPlainObject";

export default function convertData(data: Array<any> | { data?: Array<any>; currentPage?: string; totalCount?: string; }) {
    let dataSource: Array<any> | undefined = [];
    let currentPage = 1;
    let totalCount = 0;

    if (Array.isArray(data)) {
        dataSource = data;

    } else if (isPlainObject(data)) {
        dataSource = data.data;
        currentPage = typeof data.currentPage !== "undefined" ? parseInt(data.currentPage, 10) : 1;
        totalCount = typeof data.totalCount !== "undefined" ? parseInt(data.totalCount, 10) : 0;
    }

    return {dataSource : dataSource ? deepcopy(dataSource) : [], currentPage, totalCount};
}
