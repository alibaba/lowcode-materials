import * as React from 'react';
import { ColumnProps } from '@alifd/next/types/table';
import { Table } from '@alifd/next';
import is from '@sindresorhus/is';
import omit from 'lodash/omit';
import { ProTableColumnTitle } from '../pro-table-column-title';
import { ProTableColumnProps, ProTableProps } from '../../types';
import { getColumnKey } from '../pro-table-base/utils';
import { formatColumnProps } from './pro-table-column-formatter';

interface ColumnWithSetting {
  key: string;
  column: ProTableColumnProps;
  children: ColumnWithSetting[];
}

export const useColumnsWithSetting = ({
  columns,
  columnKey,
  columnsSetting,
  cellDefault,
  cellTooltipMode,
}: Pick<
  ProTableProps,
  'columns' | 'columnKey' | 'columnsSetting' | 'cellDefault' | 'cellTooltipMode'
>) =>
  React.useMemo(() => {
    const fn = (items: ProTableColumnProps[]): ColumnWithSetting[] =>
      is.array(items)
        ? items
            .map((column, index) => {
              const key = getColumnKey(column, columnKey);
              // 列格式化
              const typeColumnProps = formatColumnProps(column);
              const col = {
                // 设置优先级: 列配置 > 列类型提供值 > 表格
                cellTooltipMode,
                cellDefault,
                ...typeColumnProps,
                ...column,
              };

              const columnSetting = {
                sortRank: index,
                ...columnsSetting[key],
              };
              // 列设置参数
              col.width = is.number(columnSetting.width) ? columnSetting.width : col.width;
              col.lock = is.nullOrUndefined(columnSetting.lock) ? col.lock : columnSetting.lock;
              let lockRank = 0;
              if (col.lock === 'right') {
                lockRank = 100000;
              } else if (col.lock) {
                lockRank = -100000;
              }

              return {
                key,
                hidden: is.boolean(columnSetting.hidden) ? columnSetting.hidden : false,
                columnSort: columnSetting.sortRank + lockRank,
                column: col,
                children: col.group ? fn(column.children) : [],
              };
            })
            .sort((aItem, bItem) => aItem.columnSort - bItem.columnSort)
            .filter((item) => !item.hidden)
        : [];
    const columnsWithSetting = fn(columns);
    const flatColumns = [];
    const reduceflatColumns = (items: ColumnWithSetting[]) => {
      items.forEach((vo) => {
        if (vo.children.length > 0) {
          reduceflatColumns(vo.children);
        } else {
          flatColumns.push(vo.column);
        }
      });
    };
    reduceflatColumns(columnsWithSetting);

    return {
      columnsWithSetting,
      flatColumns,
    };
  }, [columnKey, columns, columnsSetting, cellTooltipMode, cellDefault]);

export const renderColumns = (
  items: ColumnWithSetting[],
  options: {
    resizable: boolean;
  },
) =>
  items.map(({ column, key, children }) => {
    if (column.group) {
      return (
        <Table.ColumnGroup key={key} title={column.group} {...column}>
          {renderColumns(children, options)}
        </Table.ColumnGroup>
      );
    }
    const _columnProps = pickColumnProps(column);
    return (
      <Table.Column
        key={key}
        resizable={options.resizable}
        {..._columnProps}
        dataKey={column.dataIndex}
        title={<ProTableColumnTitle {...column}>{column.title}</ProTableColumnTitle>}
      />
    );
  });

/**
 * 不传多余的参数下去以免组件报不识别 prop 的 warning
 */
export const pickColumnProps = (col: ProTableColumnProps): ColumnProps => {
  return omit(col, [
    'tableEl',
    'groupHeader',
    'groupFooter',
    'group',
    'children',
    'type',
    'formatType',
    'formatConfig',
    'tagCondition',
    'i18nBundle',
    // 剔除排序/筛选功能
    'searchable',
    'sortable',
    'sortDirections',
    'filters',
    'filterMode',
  ]);
};
