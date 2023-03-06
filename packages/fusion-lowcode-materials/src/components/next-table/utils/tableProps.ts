import type { IWebTableProps } from "../table/webTable";

export function fetchKey<T>(source: T, keyList: Array<keyof T>): Partial<T> {
  const result: Partial<T> = {};

  keyList.forEach((k) => {
    const v = source[k];

    if (typeof v !== "undefined") {
      result[k] = v;
    }
  });

  return result;
}

export const tableProps: Array<keyof IWebTableProps> = [
  'clsPrefix',
  'loading',
  'device',
  'locale',
  'data',
  'children',
  'size',
  'hasBorder',
  'isZebra',
  'noPadding',

  'useVirtual',
  'dataSource',
  'onLoadData',
  'onFetchData',
  'columns',
  'openRowKeys',
  'onFilter',

  'actionBar',
  'isPagination',
  'pagination',
  'actionColumn',
  'showMiniPager',
  'sort',
  'sortIcons',
  'onColumnsChange',

  'primaryKey', 'theme', 'hasHeader', 'fixedHeader', 'maxBodyHeight', 'stickyHeader', 'isTree', 'indent',
  'onRowClick', 'onRowMouseEnter', 'onRowMouseLeave', 'onResizeChange', 'width', 'height', 'loadingComponent',
  'hasExpandedRowCtrl', 'expandedRowRender', 'onRowOpen', 'expandedRowIndent',
  'showRowSelector', 'onSelect', 'onSelectAll', 'isRowSelectorDisabled', 'rowSelector',
  'actionHidden',
  'actionColumn',
  'actionTitle',
  'actionType',
  'actionFixed',
  'actionWidth',
  'maxWebShownActionCount',
  'rowSelection',
  'cellProps',
  'rowProps',
  'offsetTop',


  'showActionBar',
  'actionBar',
  'showSearch',
  'showCustomColumn',
  'searchBarPlaceholder',
  'showLinkBar',
  'linkBar',
  "rowOrder",
  "customBarItem",
  'onCellDataChange',
  'expandedIndexSimulate',
  'onEditRow',
  'onSaveRow',
  'onResetRow',
  'setEmptyContent',
  'emptyContent'
];

export const paginationProps = [
  'size',
  'type',
  'shape',
  'pageShowCount',
  'pageSize',
  'pageSizeSelector',
  'pageSizeList',
  'pageNumberRender',
  'pageSizePosition',
  'useFloatLayout',
  'hideOnlyOnePage',
  'showJump',
  'link',
  'popupProps',
  'paginationPosition',
];

