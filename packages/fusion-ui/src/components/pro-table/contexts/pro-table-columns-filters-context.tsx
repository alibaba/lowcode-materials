import { emptyFn } from '@/utils/constants';
import { useFiledState } from '@/utils/hooks/useFiledState';
import is from '@sindresorhus/is';
import { useState, useMemo, useCallback, createContext } from 'react';
import { SortValue, ProTableBaseProps } from '../types';

type UseColumnsFilterOptions = Pick<
  ProTableBaseProps,
  'searchParams' | 'sort' | 'filterParams' | 'sortMode' | 'onSort' | 'onSearch' | 'onFilter'
>;

export const useColumnsFilterValue = (options: UseColumnsFilterOptions) => {
  const [sort, setSort] = useFiledState(
    {
      value: options.sort,
      onChange: (sortMap: Record<string, SortValue>, dataIndex: string) => {
        if (is.function_(options.onSort)) {
          options.onSort(dataIndex, sortMap[dataIndex], sortMap);
        }
      },
    },
    !!options.sort,
  );
  const [filterParams, setFilterParams] = useFiledState(
    {
      value: options.filterParams,
      onChange: options.onFilter,
    },
    !!options.filterParams,
  );

  const [searchParams, setSearchParams] = useFiledState(
    {
      value: options.searchParams,
      onChange: options.onSearch,
    },
    !!options.filterParams,
  );
  /** 获取列的排序值 */
  const getColumnSort = useCallback((dataIndex: string) => sort?.[dataIndex], [sort]);
  /** 设置列的排序值 */
  const setColumnSort = useCallback(
    (dataIndex: string, val: SortValue) =>
      setSort((oldVal) => {
        const newVal = !val || val === 'default' ? undefined : val;
        if (options.sortMode === 'single') {
          return {
            [dataIndex]: newVal,
          };
        }
        return {
          ...oldVal,
          [dataIndex]: newVal,
        };
      }, dataIndex),
    [setSort, options.sortMode],
  );
  /** 获取列的筛选值 */
  const getColumnSelectedKeys = useCallback(
    (dataIndex: string) => filterParams?.[dataIndex]?.selectedKeys,
    [filterParams],
  );
  /** 设置列的筛选值 */
  const setColumnSelectedKeys = useCallback(
    (dataIndex: string, selectedKeys: string[], visible: boolean) =>
      setFilterParams((oldVal) => ({
        ...oldVal,
        [dataIndex]:
          selectedKeys?.length > 0
            ? {
                visible,
                selectedKeys,
              }
            : undefined,
      })),
    [setFilterParams],
  );
  /** 获取列的关键字值 */
  const getColumnKeywords = useCallback(
    (dataIndex: string) => searchParams?.[dataIndex]?.keywords,
    [searchParams],
  );
  /** 设置列的关键字值 */
  const setColumnKeywords = useCallback(
    (dataIndex: string, keywords: string, visible: boolean) =>
      setSearchParams((oldVal) => ({
        ...oldVal,
        [dataIndex]: keywords
          ? {
              visible,
              keywords,
            }
          : undefined,
      })),
    [setSearchParams],
  );
  /** 是否有过滤面板显示 */
  const [filterPanelVisible, setFilterPanelVisible] = useState(false);
  return useMemo(
    () => ({
      filterPanelVisible,
      setFilterPanelVisible,
      sort,
      setSort,
      filterParams,
      setFilterParams,
      searchParams,
      setSearchParams,
      getColumnSort,
      getColumnSelectedKeys,
      getColumnKeywords,
      setColumnSort,
      setColumnSelectedKeys,
      setColumnKeywords,
    }),
    [
      filterPanelVisible,
      filterParams,
      getColumnKeywords,
      getColumnSelectedKeys,
      getColumnSort,
      searchParams,
      setColumnKeywords,
      setColumnSelectedKeys,
      setColumnSort,
      setFilterParams,
      setSearchParams,
      setSort,
      sort,
    ],
  );
};
export type ProTableColumnsFilterValue = ReturnType<typeof useColumnsFilterValue>;
export const ProTableColumnsFilterContext = createContext<ProTableColumnsFilterValue>({
  filterPanelVisible: false,
  setFilterPanelVisible: emptyFn,
  filterParams: {},
  getColumnKeywords: () => '',
  getColumnSelectedKeys: () => [],
  getColumnSort: () => 'default',
  searchParams: {},
  setFilterParams: emptyFn,
  setSearchParams: emptyFn,
  setSort: emptyFn,
  sort: {},
  setColumnSort: emptyFn,
  setColumnSelectedKeys: emptyFn,
  setColumnKeywords: emptyFn,
});
