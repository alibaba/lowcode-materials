import { IWebTableProps } from "../table/webTable";
import filterActionColumnByDevice from "./filterActionColumnByDevice";

export default function hasRowAction(props: IWebTableProps, withoutEdit?: boolean) {
  const { actionHidden, actionColumn, device } = props;

  if (actionHidden) {
    return false;
  }

  if (actionColumn && actionColumn.length) {
    let actionColumnFilter = filterActionColumnByDevice(actionColumn, device);

    if (withoutEdit) {
      actionColumnFilter = actionColumnFilter.filter((action) => {
        return action.mode !== "EDIT";
      });
    }

    return !!(actionColumnFilter && actionColumnFilter.length);

  } else {
    return false;
  }
}
