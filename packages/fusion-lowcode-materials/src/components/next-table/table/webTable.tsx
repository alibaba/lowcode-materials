import React, { ReactNode } from 'react';
import { Table } from '@alifd/next';
import isEqual from 'lodash/isEqual';
import { ColumnProps, TableProps } from '@alifd/next/types/table';
import convertData from '../utils/convertData';
import loadMethods from "../mixin/loadMethods";
import commonMethods, { ICommonMethods } from "../mixin/commonMethods";
import columnMethods, { IColumnMethods } from "../mixin/columnMethods";
import WebToolbar, { IWebToolbarProps } from "../component/webToolbar";
import WebPagination from "../component/webPagination";
import hasRowAction from "../utils/hasRowAction";
import runToolbarActionCallback from "../utils/runToolbarActionCallback";
import buildTableProps from "../utils/buildTableProps";
import editableMethods, { IEditableMethods, IEditableMethodsProps } from "../mixin/editableMethods";
import WebNextTableActionCell, { IWebNextTableActionCellProps } from "../component/webNextTableActionCell";
import WebNextTableCell, { IWebNextTableCellProps } from "../component/webNextTableCell";
import getDataSource from "../utils/getDataSource";
import titleMessageRender from "../utils/render/titleMessageRender";
import { LoadingProps } from '@alifd/next/types/loading';



export interface IWebTableProps extends IWebToolbarProps, IEditableMethodsProps, Omit<IWebNextTableActionCellProps, 'index'>, Omit<TableProps, 'locale' | 'onSelect'> {
  data?: any;
  columns?: any[];
  nextTablePrefix?: string;
  isPagination?: boolean;
  actionTitle?: string;
  actionFixed?: string;
  actionWidth?: number | string;
  pagination?: any;
  primaryKey?: string;
  onFetchData?: (options: Pick<IWebTableState, "currentPage" | "pageSize" | "searchKey" | "orderColumn" | "orderType"> & { from: string; }) => void;
  onLoadData?: (...options: any[]) => void;
  onColumnsChange?: (columns: IWebTableProps['columns']) => void;
  setEmptyContent?: boolean;
  emptyContent?: (() => ReactNode) | ReactNode;
  noPadding?: boolean;
  dataSource?: any;
  device?: string;
  actionHidden?: boolean;
  theme?: string;
  width?: string | number;
  height?: string | number;
  showRowSelector?: boolean;
  onSelect?: NonNullable<TableProps['rowSelection']>['onSelect'];
  onSelectAll?: NonNullable<TableProps['rowSelection']>['onSelectAll'];
  isRowSelectorDisabled?: (rowData: any, index: number) => boolean;
  rowSelector?: string;
  onCellDataChange?: IWebNextTableCellProps['onCellDataChange'];
  clsPrefix?: string;
  tablePrefix?: string;
  className?: string;
  loadingComponent?: (props: LoadingProps) => ReactNode;
 }

interface IWebTableState {
  originalColumns?: any[];
  currentColumns?: any[]
  currentPage: number;
  pageSize: number;
  searchKey: string; 
  orderColumn: string;
  orderType: string;
  dataSource: any;
  totalCount: number;
  isCustomColumnDrawerShown: boolean;
}

interface WebTable extends React.Component<IWebTableProps, IWebTableState>, Omit<ICommonMethods, 'init'>, Omit<IColumnMethods, 'init'>, Omit<IEditableMethods, 'init'> {}
class WebTable extends React.Component<IWebTableProps, IWebTableState> {
  static displayName = 'WebTable';

  constructor(props: IWebTableProps) {
    super(props);

    loadMethods(this, commonMethods);
    loadMethods(this, columnMethods);
    loadMethods(this, editableMethods);
  }

  componentWillReceiveProps(nextProps: IWebTableProps) {
    const { data } = this.props;
    const nextData = getDataSource(nextProps);

    if (!isEqual(nextData, data)) {
      this.setState(convertData(nextData));
    }

    const {originalColumns} = this.state;
    const {columns : nextColumns} = nextProps;

    if (!isEqual(originalColumns, nextColumns)) {
      this.setOriginalColumns(nextColumns);
      this.changeCurrentColumns(nextColumns);
    }
  }

  renderColumn(column: any) {
    const { nextTablePrefix, onCellDataChange } = this.props;
    const { lock, dataKey, width, title, titleRender, message, sortable, align, resizable, filters, filterMode } = column;
    const props: ColumnProps = {
      dataIndex: dataKey,
      cell: (value, rowIndex, rowData) => {
        return (<WebNextTableCell {...{
          value,
          rowIndex,
          rowData,
          column,
          isRenderEditMode: true,
          nextTablePrefix,
          onCellDataChange,
        }}/>);
      },
      title: titleMessageRender(title, message, nextTablePrefix),
      width,
      sortable,
      align,
      resizable,
      filters,
      filterMode,
    };

    if (lock && lock !== 'none') {
      props.lock = lock;
    }

    if (titleRender) {
      props.title = titleRender(column.title);
    }

    return <Table.Column {...props} key={dataKey}/>;
  }


  renderColumns(columns: IWebTableState['currentColumns']) {
    return columns ? columns.map((column) => {
      if (!column.isGroup) {
        return this.renderColumn(column)
      }
      return (
        column.children && column.children.length ? <Table.ColumnGroup key={column.dataKey || `_${Math.random()}`}  title={column.title || 'group'}>
          {
            this.renderColumns(column.children)
          }
        </Table.ColumnGroup> : null
      )
    }) : null;
  }

  renderActionColumns() {
    const {
      actionTitle, actionFixed, actionWidth, actionColumn, actionType,
      maxWebShownActionCount, nextTablePrefix, device, primaryKey, locale
    } = this.props;

    if (!hasRowAction(this.props)) {
      return null;
    }

    const actionColumnProps: ColumnProps = {
      title: actionTitle,
      lock: actionFixed !== 'none' ? actionFixed : false,
      width: actionWidth,
      cell: (value, index, rowData) => {
        return <WebNextTableActionCell {...{
          locale,
          device,
          actionColumn,
          actionType,
          maxWebShownActionCount,
          nextTablePrefix,
          primaryKey,
          value,
          index,
          rowData,
        }}/>;
      },
    };

    return <Table.Column {...actionColumnProps} />;
  }

  render() {
    const { nextTablePrefix, isPagination, locale } = this.props;
    const { dataSource, currentColumns } = this.state;
    const paginationProps = this.getPaginationProps();

    return (
      <div className={`${nextTablePrefix}web-table`}>
        <WebToolbar
          {...(this.props)}
          onActionClick={(item) => {
            runToolbarActionCallback({ action: item });
          }}
          onSearch={this.onSearch.bind(this)}
          onClickCustomColumn={this.showCustomColumnDrawer.bind(this)}
          paginationProps={paginationProps}
        />

        <Table
          {...buildTableProps({
            ...this.props,
            dataSource,
            onSort: this.onSort.bind(this),
            emptyContent: this.renderEmptyContent(),
          })}>
          {this.renderColumns(currentColumns)}
          {this.renderActionColumns()}
        </Table>

        {isPagination ? <WebPagination {...paginationProps} locale={locale}/> : null}

        {this.renderCustomColumnDrawer()}
      </div>
    );
  }
}

export default WebTable;
