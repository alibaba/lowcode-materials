import type { IWebTableProps } from "../table/webTable";
import filterActionColumnByDevice from "./filterActionColumnByDevice";

export default function filterActionColumn(actionColumn: IWebTableProps['actionColumn'], rowData: any, device: IWebTableProps['device']) {
  const filterByEditable = actionColumn.filter((action) => {
    if (action.render && typeof action.render === 'function' && !action.render(action.title, rowData)) {
      return false
    }
    if (rowData.__mode__ === "EDIT") {
      return action.mode === "EDIT";
    } else {
      return action.mode !== "EDIT";
    }

  });

  return filterActionColumnByDevice(filterByEditable, device);
}
