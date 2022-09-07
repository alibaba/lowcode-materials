import pick from 'lodash/pick';
import { TableProps } from '@alifd/next/types/table';
import { ProTableColumnProps, ProTableBaseProps } from '../../types';

export function getColumnKey(column: ProTableColumnProps, columnKey?: string) {
  if (columnKey) {
    if (column[columnKey]) {
      return column[columnKey];
    }
  }
  if (column.key) {
    return column.key;
  }
  if (column.dataIndex) {
    return column.dataIndex;
  }
  console.warn(
    `[TableX] 自定义列需要每个 column 必须有 ${columnKey} | key | dataIndex 属性`,
    column,
  );
}

const nextTablePropsKeys: Array<keyof TableProps> = [
  // next table 所有属性
  'affixProps',
  'cellProps',
  'className',
  'columns',
  'crossline',
  'dataSource',
  'emptyContent',
  'expandedIndexSimulate',
  'expandedRowIndent',
  'expandedRowRender',
  'filterParams',
  'fixedHeader',
  // 'getCellProps', // fusion 废弃
  'getExpandedColProps',
  // 'getRowProps', // fusion 废弃
  'hasBorder',
  'hasExpandedRowCtrl',
  'hasHeader',
  'indent',
  'isTree',
  'isZebra',
  'loading',
  'loadingComponent',
  'locale',
  'maxBodyHeight',
  'offsetTop',
  'onBodyScroll',
  'onExpandedRowClick',
  'onFilter',
  'onResizeChange',
  'onRowClick',
  'onRowMouseEnter',
  'onRowMouseLeave',
  'onRowOpen',
  'onSort',
  'openRowKeys',
  'prefix',
  'primaryKey',
  'pure',
  'rowExpandable',
  'rowHeight',
  'rowProps',
  'rowSelection',
  'rtl',
  'scrollToRow',
  'size',
  'sort',
  'sortIcons',
  'stickyHeader',
  'style',
  'tableLayout',
  'tableWidth',
  'useVirtual',
  'warning',
];
export const pickTableProps = (whaleTableProps: ProTableBaseProps) => {
  return pick(
    whaleTableProps,
    nextTablePropsKeys.filter((vo) => whaleTableProps[vo] !== undefined),
  );
};
