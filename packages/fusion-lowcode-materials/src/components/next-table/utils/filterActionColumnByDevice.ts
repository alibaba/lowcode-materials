import type { IWebTableProps } from "../table/webTable";

export default function filterActionColumnByDevice(actionColumn: IWebTableProps['actionColumn'] = [], device: IWebTableProps['device']) {
  return actionColumn.filter((action) => {
    let actionDevice = action.device;

    if (device && actionDevice) {
      if (!Array.isArray(actionDevice)) {
        actionDevice = [actionDevice];
      }

      return actionDevice.includes(device);

    } else {
      return true;
    }
  });
}
