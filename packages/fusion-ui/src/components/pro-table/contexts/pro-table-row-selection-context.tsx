import { createContext, useMemo, useCallback } from 'react';
import {
  ProTableBaseProps,
  ProTableRowKey,
  ProTableRowRecord,
  ProTableRowSelectionInstance,
} from '../types';

import is from '@sindresorhus/is';
import { emptyArray, emptyFn } from '@/utils/constants';
import { useFiledState } from '@/utils/hooks/useFiledState';
import { useUpdateEffect } from 'ahooks';

export const isSelectedAllPages = (selectedRowKeys: ProTableRowKey[], reverseSelection: boolean) =>
  reverseSelection && selectedRowKeys.length === 0;

const arrayOmit = (arr: string[] = [], omitArr: string[] = []) => {
  if (omitArr.length === 0) {
    return arr;
  }
  const keySet = new Set(omitArr);
  return arrayUnique(arr.filter((vo) => !keySet.has(vo))); // 剔除keys
};
const arrayUnique = (arr: string[] = []) => Array.from(new Set(arr));
const arrayMerge = (arr1: string[] = [], arr2: string[] = []) => {
  return arrayUnique([...arr1, ...arr2]);
};
const arrayPick = (arr: string[] = [], pickArr: string[] = []) => {
  if (arr.length === 0) {
    return arr;
  }
  if (!pickArr || pickArr.length === 0) {
    return [];
  }
  const keySet = new Set(pickArr);
  return arrayUnique(arr.filter((vo) => keySet.has(vo))); // 剔除keys
};
const flatDataSource = (dataSource: ProTableRowRecord[]) => {
  let ret = [];
  dataSource.forEach((vo) => {
    if (!vo) return;
    ret.push(vo);
    if (is.array(vo.children)) {
      ret = ret.concat(vo.children);
    }
  });
  return ret.length === dataSource.length ? dataSource : ret;
};

export const useProTableRowSelectionValue = ({
  rowSelection = {},
  dataSource = [],
  primaryKey = 'id',
}: Pick<
  ProTableBaseProps,
  'rowSelection' | 'dataSource' | 'primaryKey'
>): ProTableRowSelectionInstance => {
  const mode = rowSelection.mode || 'multiple';

  /** 是否是反向选择状态 */
  const [reverseSelection, setReverseSelection] = useFiledState(
    {
      value: rowSelection.reverseSelection,
      defaultValue: rowSelection.defaultReverseSelection || false,
    },
    'reverseSelection' in rowSelection,
  );
  const getRowKeyByRecord = useCallback(
    (record: ProTableRowRecord) => record && record[primaryKey],
    [primaryKey],
  );

  /**
   * 反/已选keys列表
   * - reverseSelection为false时为已选的keys
   * - reverseSelection为true时为反选的keys
   */
  const [selectedRowKeys, setSelectRowKeys] = useFiledState(
    {
      value: rowSelection.selectedRowKeys,
      defaultValue: rowSelection.defaultSelectedRowKeys || [],
      onChange: (keys, isReverseSelection) => {
        setReverseSelection(isReverseSelection);
        if (is.function_(rowSelection.onChange)) {
          const keysSet = new Set(keys);
          const selectedRecords = isReverseSelection
            ? dataSource.filter((vo) => !keysSet.has(getRowKeyByRecord(vo)))
            : dataSource.filter((vo) => keysSet.has(getRowKeyByRecord(vo)));
          rowSelection.onChange(keys, isReverseSelection, selectedRecords);
        }
      },
    },
    !!rowSelection.selectedRowKeys,
  );
  // mode修改时，清空所选项
  useUpdateEffect(() => {
    setSelectRowKeys([], false);
  }, [mode, setSelectRowKeys]);
  /** 当前页keys */
  const flattedDataSource = useMemo(() => flatDataSource(dataSource), [dataSource]);

  const { getProps } = rowSelection;
  /** 当前页disabledKeys */
  const currentPageDisableKeys = useMemo(() => {
    if (!is.function_(getProps)) {
      return emptyArray;
    }
    return flattedDataSource
      .filter((vo, index) => getProps(vo, index).disabled)
      .map(getRowKeyByRecord);
  }, [flattedDataSource, getProps, getRowKeyByRecord]);

  /** 增加/取消选择 */
  const selectRows = useCallback(
    (selected: boolean, keys: ProTableRowKey[]) => {
      if (mode === 'single') {
        if (keys.length === 0) {
          return;
        }
        setSelectRowKeys((oldKeys) => {
          if (selected) {
            if (keys.length > 1) {
              console.warn('当前是单选模式, 不支持全选所有页');
            }

            return [keys[keys.length - 1]];
          }
          // 取消选择: 已选模式剔除选择的keys
          return arrayOmit(oldKeys, keys);
        }, false);
        return;
      }

      setSelectRowKeys((oldKeys) => {
        if (selected) {
          // 增加选择: 反选模式下剔除keys; 已选模式增加选择的keys
          return reverseSelection ? arrayOmit(oldKeys, keys) : arrayMerge(oldKeys, keys);
        }
        // 取消选择: 反选模式下增加keys; 已选模式剔除选择的keys
        return reverseSelection ? arrayMerge(oldKeys, keys) : arrayOmit(oldKeys, keys);
      }, reverseSelection);
    },
    [reverseSelection, setSelectRowKeys, mode],
  );
  /** 当前页keys */
  const currentPageRowKeys = arrayOmit(
    useMemo(() => flattedDataSource.map(getRowKeyByRecord), [flattedDataSource, getRowKeyByRecord]),
    currentPageDisableKeys,
  );
  // arrayOmit(currentPageRowKeys, currentPageDisableKeys);
  /** 本页已选行 */
  const currentPageSelectedRowKeys = useMemo(
    () =>
      reverseSelection
        ? arrayOmit(currentPageRowKeys, selectedRowKeys)
        : arrayPick(currentPageRowKeys, selectedRowKeys),
    [currentPageRowKeys, reverseSelection, selectedRowKeys],
  );

  const selectAllPages = useCallback(
    (selected: boolean) => {
      if (selected && mode === 'single') {
        console.warn('当前是单选模式, 不支持全选所有页');
        return;
      }
      return setSelectRowKeys([], selected);
    },
    [setSelectRowKeys, mode],
  );
  const selectCurrentPage = useCallback(
    (selected: boolean) => {
      if (selected && mode === 'single') {
        console.warn('当前是单选模式, 不支持全选当前页');
        return;
      }
      return selectRows(selected, currentPageRowKeys);
    },
    [currentPageRowKeys, selectRows, mode],
  );
  const isSelectedRowKey = useCallback(
    (rowKey: ProTableRowKey) =>
      reverseSelection ? !selectedRowKeys.includes(rowKey) : selectedRowKeys.includes(rowKey),
    [reverseSelection, selectedRowKeys],
  );
  const hasSelectedRows = useCallback(
    () => reverseSelection || selectedRowKeys.length > 0,
    [reverseSelection, selectedRowKeys],
  );

  return {
    selectAllPages,
    selectCurrentPage,
    selectRows,
    hasSelectedRows,
    isSelectedRowKey,
    currentPageSelectedRowKeys,
    currentPageRowKeys,
    reverseSelection,
    selectedRowKeys,
    getRowKeyByRecord,
  };
};

export const ProTableRowSelectionContext = createContext<ProTableRowSelectionInstance>({
  selectAllPages: emptyFn,
  selectCurrentPage: emptyFn,
  selectRows: emptyFn,
  currentPageSelectedRowKeys: emptyArray,
  currentPageRowKeys: emptyArray,
  reverseSelection: false,
  selectedRowKeys: emptyArray,
  isSelectedRowKey: () => false,
  getRowKeyByRecord: () => '',
  hasSelectedRows: () => false,
});
