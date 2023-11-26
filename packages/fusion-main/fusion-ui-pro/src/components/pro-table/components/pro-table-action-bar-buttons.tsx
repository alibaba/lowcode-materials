import React, { useContext, useMemo } from 'react';
import { ProTableButtonGroup } from './pro-table-button-group/index';
import { ProTableActionBarButtons } from '../types';
import { ProTableRowSelectionContext } from '../contexts/pro-table-row-selection-context';

export const ProTableActionBarButtonGroup: React.FC<ProTableActionBarButtons> = (props) => {
  const rowSelection = useContext(ProTableRowSelectionContext);
  const payload = useMemo(
    () => ({
      rowSelection,
    }),
    [rowSelection],
  );
  return <ProTableButtonGroup payload={payload} {...props} />;
};
