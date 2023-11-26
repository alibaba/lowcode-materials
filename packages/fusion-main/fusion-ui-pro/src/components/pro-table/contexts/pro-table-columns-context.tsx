import { createContext, useMemo } from 'react';
import { ProTableBaseProps } from '../types';

export const useProTableColumnsValue = ({
  columns = [],
  columnKey = 'key',
}: Pick<ProTableBaseProps, 'columns' | 'columnKey'>) => {
  return useMemo(
    () => ({
      columns,
      columnKey,
    }),
    [columnKey, columns],
  );
};

export type ProTableColumnsValue = ReturnType<typeof useProTableColumnsValue>;
export const ProTableColumnsContext = createContext<ProTableColumnsValue>({
  columns: [],
  columnKey: 'key',
});
