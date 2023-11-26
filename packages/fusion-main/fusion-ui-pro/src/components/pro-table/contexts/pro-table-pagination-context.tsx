import { createContext, useMemo } from 'react';
import { ProTableProps, ProTablePaginationInstance } from '../types';
import { useFiledState } from '../../utils/hooks/useFiledState';
import { emptyFn } from '../../utils/constants';

export const useProTablePaginationValue = ({
  paginationProps = {},
}: Pick<ProTableProps, 'paginationProps'>) => {
  const [pageSize, setPageSize] = useFiledState(
    {
      value: paginationProps.pageSize,
      defaultValue: 10,
      onChange: paginationProps.onPageSizeChange,
    },
    !!paginationProps.pageSize,
  );

  const [current, setCurrent] = useFiledState<number, []>(
    {
      value: paginationProps.current,
      defaultValue: paginationProps.defaultCurrent,
      onChange: (newVal) => paginationProps.onChange(newVal, {}),
    },
    !!paginationProps.pageSize,
  );
  const total = paginationProps.total || 0;
  return useMemo<ProTablePaginationInstance>(
    () => ({
      total,
      current,
      setCurrent,
      pageSize,
      setPageSize,
    }),
    [total, current, setCurrent, pageSize, setPageSize],
  );
};

export type ProTablePaginationValue = ReturnType<typeof useProTablePaginationValue>;
export const ProTablePaginationContext = createContext<ProTablePaginationValue>({
  total: 0,
  current: 0,
  setCurrent: emptyFn,
  pageSize: 10,
  setPageSize: emptyFn,
});
