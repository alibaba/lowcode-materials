import type { IWebTableProps } from "../table/webTable";

export default function getDataSource(props: IWebTableProps) {
  if (props) {
      return props.dataSource || props.data;
  }
}
