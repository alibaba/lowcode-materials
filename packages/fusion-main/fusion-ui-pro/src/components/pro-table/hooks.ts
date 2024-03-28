import * as React from 'react';
import { useDebounceFn, useFusionTable } from 'ahooks';
import { ProTableProps, SortValue } from './types';
import mapValues from 'lodash/mapValues';
import { BasePaginatedOptions, Result } from 'ahooks/lib/useFusionTable';
import { FilterProps } from '@/components/filter';
import { Field } from '@alifd/next';

interface TableParams {
  sorters: Record<string, SortValue>;
  searchers: Record<string, string | undefined>;
  filters: Record<string, any[]>;
}
type FilterParams = Record<string, any>;

export interface UseProTableResult<Item> extends Omit<Result<Item>, 'tableProps'> {
  tableProps: {
    dataSource: Item[];
    loading: boolean;
    onSort: ProTableProps['onSort'];
    onFilter: ProTableProps['onFilter'];
    onSearch: ProTableProps['onSearch'];
    paginationProps: ProTableProps['paginationProps'];
  };
  filterProps: FilterProps;
}

export interface UseProTableServiceParams {
  /**
   * 当前页
   */
  current: number;
  /**
   * 每页条数
   */
  pageSize: number;
  /**
   * 表格筛选/排序/搜索参数
   */
  tableParams: TableParams;

  /**
   * 筛选表单参数
   */
  filterParams: FilterParams;
}

export type UseProTableService<Item = unknown> = (params: UseProTableServiceParams) => Promise<{
  total: number;
  dataSource: Item[];
  [key: string]: any;
}>;

export interface UseProTableOptions<Item = unknown>
  extends Omit<BasePaginatedOptions<Item>, 'paginated'> {
  field?: Field;
}

/**
 * ProTable hooks
 * @param service 请求service
 * @param options 参数
 */
export const useProTable = <Item = unknown>(
  service: UseProTableService<Item>,
  options: UseProTableOptions<Item> = {},
): UseProTableResult<Item> => {
  const [tableParams, setTableParams] = React.useState<TableParams>({
    sorters: {},
    searchers: {},
    filters: {},
  });
  const selfField = Field.useField();
  const field = options.field || selfField;
  const { run: setTableParamsDebounce } = useDebounceFn(setTableParams, { wait: 300 });

  const fusionTable = useFusionTable(
    async (p, filterParams) => {
      const res = await service({ ...p, tableParams, filterParams });
      return {
        ...res,
        list: res.dataSource,
      };
    },
    {
      defaultPageSize: 10,
      ...options,
      field,
    },
  );
  const { run: refresh } = useDebounceFn(fusionTable.refresh, { wait: 100 });
  const tableEvents = React.useMemo<{
    onSort: ProTableProps['onSort'];
    onFilter: ProTableProps['onFilter'];
    onSearch: ProTableProps['onSearch'];
  }>(() => {
    return {
      onFilter: (newVal) => {
        setTableParams((oldVal) => ({
          ...oldVal,
          filters: mapValues(newVal, (vo) => vo && vo.selectedKeys),
        }));
        refresh();
      },
      onSearch: (newVal) =>
        setTableParamsDebounce((oldVal) => {
          refresh();
          return {
            ...oldVal,
            searchers: mapValues(newVal, (vo) => vo && vo.keywords),
          };
        }),
      onSort: (index, order, sorters) => {
        setTableParams((oldVal) => ({
          ...oldVal,
          sorters,
        }));
        refresh();
      },
    };
  }, [setTableParamsDebounce, refresh]);
  const { type, changeType, submit, reset } = fusionTable.search || {};
  return {
    ...fusionTable,
    tableProps: {
      ...fusionTable.tableProps,
      ...tableEvents,
      paginationProps: fusionTable.paginationProps,
    },
    filterProps: {
      enableForm: true,
      onSearch: submit,
      onReset: reset,
      expand: type === 'advance',
      formProps: {
        field,
      },
      onExpand: (expand) => {
        if ((type === 'advance') !== expand) {
          changeType();
        }
      },
    },
  };
};
