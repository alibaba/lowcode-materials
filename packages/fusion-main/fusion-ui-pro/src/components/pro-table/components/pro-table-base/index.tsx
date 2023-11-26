import * as React from 'react';
import cns from 'classnames';
import { Table } from '@alifd/next';
import { TableProps } from '@alifd/next/types/table';
import { getColumnKey, pickTableProps } from './utils';
import { useMemo } from 'react';
import { useActionColumn } from './columns/useActionColumn';
import { useIndexColumn } from './columns/useIndexColumn';
import { ProTableBaseProps } from '../../types';
import { renderColumns, useColumnsWithSetting } from '../pro-table-column';
import { useRowSelection } from './columns/useRowSelection';
import { ProTableColumnsSettingContext } from '../../contexts/pro-table-columns-setting-context';
import { ProTableSettingContext } from '@/components/pro-table/contexts/pro-table-setting-context';
import { registerColumnFormatters } from '../pro-table-column/pro-table-column-formatter';
import { defaultColumnFormatters } from '../pro-table-column/defaultColumnFormatters';
import { emptyFn } from '@/utils/constants';
import { ProTableCell } from '../pro-table-cell/pro-table-cell';
import { ProTableTreeCell } from '../pro-table-cell/pro-table-tree-cell';
// import { ProTableCell } from '../pro-table-cell';

registerColumnFormatters(defaultColumnFormatters);
const totalCell = () => 'Total';
const valueCell = (val) => val;

export const ProTableBase: React.FC<ProTableBaseProps> = (props) => {
  const { tableSetting } = React.useContext(ProTableSettingContext);
  const {
    columnKey,
    resizable,
    dataSource: originalDataSource,
    rowSelection,
    expandedRowRender,
    groupHeader,
    groupFooter,
    totalDataSource,
  } = props;

  const actionColumnProps = useActionColumn(props);
  const indexColumnProps = useIndexColumn(props);

  const { updateColumnSetting, columnsSetting } = React.useContext(ProTableColumnsSettingContext);

  const { flatColumns, columnsWithSetting } = useColumnsWithSetting({
    columnKey,
    columnsSetting,
    columns: props.columns,
    cellDefault: props.cellDefault,
    cellTooltipMode: props.cellTooltipMode,
  });

  // table 属性
  const externalProps: Partial<TableProps> = {
    expandedIndexSimulate: expandedRowRender ? true : undefined,
  };
  if (resizable) {
    externalProps.hasBorder = false;
    externalProps.onResizeChange = (dataIndex, width) => {
      const columnItem = flatColumns.find((vo) => vo.dataIndex === dataIndex);
      if (!columnItem) {
        console.warn(`未找到dataIndex=${dataIndex}的columnItem`);
        return;
      }
      updateColumnSetting(
        getColumnKey(columnItem, columnKey),
        (oldSetting) => {
          const oldWidth = +oldSetting.width || +columnItem.width || 200;
          return {
            width: Math.max(10, oldWidth + width),
          };
        },
        'resize',
      );
    };
  }

  const dataSource = useMemo(
    () => (totalDataSource ? [...(originalDataSource || []), totalDataSource] : originalDataSource),
    [totalDataSource, originalDataSource],
  );
  if (totalDataSource) {
    // 数据列第一列的下标，去掉表左侧功能列
    const dataColumnsStartIndex = [expandedRowRender, rowSelection, indexColumnProps].filter(
      (vo) => vo,
    ).length;
    // 数据列最后一列的下标，去掉表右侧功能列
    const dataColumnsEndIndex = dataColumnsStartIndex + flatColumns.length - 1;

    // 统计行下标
    const totalRowIndex = dataSource.length - 1;
    externalProps.rowProps = (record, rowIndex) => {
      if (rowIndex === totalRowIndex) {
        return {
          className: 'fusion-ui-pro-table-total-row',
        };
      }
      return {};
    };

    externalProps.cellProps = (rowIndex, colIndex) => {
      if (rowIndex === totalRowIndex) {
        // 统计行的数据第一列显示 Total 文案
        if (colIndex === 0) {
          return {
            cell: totalCell,
            onCellClick: undefined,
            formatValue: undefined,
          };
        }
        // 不在数据列范围内的隐藏
        if (colIndex < dataColumnsStartIndex || colIndex > dataColumnsEndIndex) {
          return {
            cell: emptyFn,
            onCellClick: undefined,
            formatValue: undefined,
          };
        }

        return {
          cell: valueCell,
          onCellClick: undefined,
          formatValue: undefined,
        };
      }
      return {};
    };
  }

  const NextTable = props.stickyLock ? Table.StickyLock : Table;
  const nextTableProps = pickTableProps({
    ...externalProps,
    ...props,
    ...tableSetting,
    rowSelection: useRowSelection(rowSelection, originalDataSource),
    dataSource,
    columns: undefined, // 剔除columns
    className: cns('fusion-ui-pro-table-base', props.className),
  });
  const columns = renderColumns(columnsWithSetting, {
    resizable,
  });

  return (
    <NextTable
      {...nextTableProps}
      // @ts-ignore
      components={{
        Cell: nextTableProps.isTree ? ProTableTreeCell : ProTableCell,
      }}
    >
      {groupHeader &&
        (React.isValidElement(groupHeader) ? (
          groupHeader
        ) : (
          <Table.GroupHeader {...(groupHeader as any)} />
        ))}
      {groupFooter &&
        (React.isValidElement(groupFooter) ? (
          groupFooter
        ) : (
          <Table.GroupFooter {...(groupFooter as any)} />
        ))}

      {indexColumnProps && <Table.Column {...indexColumnProps} />}
      {columns}
      {actionColumnProps && <Table.Column {...actionColumnProps} />}
      {props.children}
    </NextTable>
  );
};

ProTableBase.displayName = 'ProTableBase';
