import * as React from 'react';
import { ProTableProps } from '../../types';
import { ProTable } from '../pro-table';

export const GroupTable: React.FC<ProTableProps> = (props) => {
  const { groupHeader: propGroupHeader, groupFooter: propGroupFooter, ...otherProps } = props;
  const groupHeader = propGroupHeader || {
    cell: (record) => record?.header,
  };
  const groupFooter = propGroupFooter || {
    cell: (record) => record?.footer,
  };
  return <ProTable groupHeader={groupHeader} groupFooter={groupFooter} {...otherProps} />;
};

GroupTable.defaultProps = {
  settingButtons: false,
  defaultColumnsSetting: {},
  columnKey: 'key',
  primaryKey: 'id',
  stickyLock: true,
  resizable: true,
  emptyContent: <div type="card" status="DATA_EMPTY" />,
  hasBorder: false,
  size: 'medium',
  isZebra: false,
  cellDefault: '',
  cellTooltipMode: 'none',
};
