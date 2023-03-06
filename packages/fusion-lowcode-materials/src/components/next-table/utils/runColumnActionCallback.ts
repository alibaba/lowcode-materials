import { IActionColumnItem } from "../component/webDeepTableActionCell";
import getCleanRowData from "./getCleanRowData";

export default function runColumnActionCallback(param: { action: IActionColumnItem; rowData: any; index?: number }) {
  const { action, rowData, index } = param;
  const { callback = () => { } } = action;

  try {
    if (rowData && callback) {
      return Promise.resolve(callback(getCleanRowData(rowData), action, index));
    }
  } catch (e) {
    if (e instanceof Error) {
      console.warn(e.stack);
    }
  }

  return Promise.reject();
};
