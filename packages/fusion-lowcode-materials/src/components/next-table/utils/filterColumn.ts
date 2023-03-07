import type { IWebCustomColumnDrawerProps } from "../component/webCustomColumnDrawer";

export default function filterColumn(columns: IWebCustomColumnDrawerProps['columns'] = []) {
  return columns.filter((item) => {
      return item.hidden !== true;
  });
}
