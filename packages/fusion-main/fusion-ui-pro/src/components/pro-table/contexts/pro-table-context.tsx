import { createContext, MutableRefObject, useMemo } from 'react';

export const useProTableValue = (options: {
  tableBeforeContainer: MutableRefObject<HTMLElement>;
  proTableContainer: MutableRefObject<HTMLElement>;
  pageSize?: number;
  total?: number;
}) => {
  const { proTableContainer, tableBeforeContainer, pageSize, total } = options;
  return useMemo(
    () => ({
      proTableContainer,
      tableBeforeContainer,
      pageSize,
      total,
    }),
    [proTableContainer, tableBeforeContainer, pageSize, total],
  );
};

export type ProTableValue = ReturnType<typeof useProTableValue>;
export const ProTableContext = createContext<ProTableValue>({
  proTableContainer: { current: document.body },
  tableBeforeContainer: { current: document.body },
  pageSize: undefined,
  total: undefined,
});
