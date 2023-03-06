import assign from "lodash/assign";
import isObject from "lodash/isObject";
import isEmpty from "lodash/isEmpty";
import dispatchResizeEvent from "../utils/dispatchResizeEvent";
import getCleanRowData from "../utils/getCleanRowData";
import type WebTable from "../table/webTable";

function getDataItemByValue(rowData: any, instance: WebTable) {
  const { primaryKey } = instance.props;
  const primaryValue = isObject(rowData) ? (rowData as any)[primaryKey!] : rowData;

  return instance.getDataItem(primaryValue);
}

function getAndCloneDataItem(rowData: any, instance: WebTable) {
  return getCleanRowData(getDataItemByValue(rowData, instance));
}

function callTableCell(rowData: any, instance: WebTable, callback: (field: any) => any) {
  const item = getDataItemByValue(rowData, instance) || {};
  const { __fields__ } = item;

  if (__fields__) {
    const promiseList: Promise<any>[] = [];

    Object.keys(__fields__).forEach((name) => {
      const field = __fields__[name];
      if (field && callback) {
        promiseList.push(Promise.resolve(callback(field)));
      }
    });

    return Promise.all(promiseList);
  }

  return Promise.resolve();
}

// editRow(rowData): 使指定的行切换到编辑模式。
// saveRow(rowData): 保存行至数据
// resetRow(rowData): 重置行到数据（若保存过，则为保存过后的数据）。


export interface IEditableMethodsProps {
  onEditRow?(rowItem: any): void;
  onResetRow?(rowItem: any): void;
  onSaveRow?(rowItem: any): void;
}

export interface IEditableMethods {
  init(this: WebTable): void;
  validateRow(this: WebTable, rowData: any): any;
  editRow(this: WebTable, rowData: any): any;
  saveRow(this: WebTable, rowData: any): any;
  resetRow(this: WebTable, rowData: any): any;
}

const methods: IEditableMethods = {
  init() {
    const mergeState = {};

    this.state = this.state || {};
    assign(this.state, mergeState);
  },
  validateRow(rowData) {
    return callTableCell(rowData, this, (field) => {
      return field.validateCell();
    }).then((dataList) => {
      const result: any = {};

      dataList && dataList.forEach((field) => {
        field && Object.keys(field).forEach((name) => {
          result[name] = field[name];
        });
      });

      return isEmpty(result) ? undefined : result;
    });
  },
  editRow(rowData) {
    const { onEditRow } = this.props;

    const promise = callTableCell(rowData, this, (field) => {
      return field.setEditable(true);
    }).then(() => {
      const rowItem = getAndCloneDataItem(rowData, this);
      rowItem && onEditRow && onEditRow(rowItem);

      return rowItem;
    });

    promise.finally(() => {
      dispatchResizeEvent();
    });

    return promise;
  },
  saveRow(rowData) {
    const { onSaveRow } = this.props;

    const promise = this.validateRow(rowData).then((error: Error) => {
      if (error) {
        return Promise.reject(error);

      } else {
        return callTableCell(rowData, this, (field) => {
          return field.saveCell();
        });
      }
    }).then(() => {
      const rowItem = getAndCloneDataItem(rowData, this);
      rowItem && onSaveRow && onSaveRow(rowItem);

      return rowItem;
    });

    promise.finally(() => {
      dispatchResizeEvent();
    });

    return promise;
  },
  resetRow(rowData) {
    const { onResetRow } = this.props;

    const promise = callTableCell(rowData, this, (field) => {
      return field.resetCell();
    }).then(() => {
      const rowItem = getAndCloneDataItem(rowData, this);
      rowItem && onResetRow && onResetRow(rowItem);

      return rowItem;
    });

    promise.finally(() => {
      dispatchResizeEvent();
    });

    return promise;
  },
};

export default methods;
