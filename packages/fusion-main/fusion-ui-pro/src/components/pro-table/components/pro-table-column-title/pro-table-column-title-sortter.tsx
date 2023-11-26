import * as React from 'react';
import { CustomIcon } from '@/components/toggle-icon';
import { SortValue } from '../../types';
import cns from 'classnames';

export interface ProTableColumnTitleSortterProps {
  value?: SortValue;
  className?: string;
  sortDirections?: SortValue[];
  onChange: (val: SortValue) => void;
}
export const ProTableColumnTitleSortter: React.FC<ProTableColumnTitleSortterProps> = ({
  sortDirections = ['desc', 'asc', 'default'],
  value,
  onChange,
}) => {
  const val = value || 'default';
  return (
    <div
      className={cns(
        'fusion-ui-pro-table-column-title-sortter',
        `fusion-ui-pro-table-column-title-sortter--${val}`,
      )}
      onClick={() => {
        const index = sortDirections.indexOf(val);
        onChange(sortDirections[(index + 1) % sortDirections.length]);
      }}
    >
      <CustomIcon type="triangle-up" size={12} />
      <CustomIcon type="triangle-down" size={12} />
    </div>
  );
};
ProTableColumnTitleSortter.displayName = 'ProTableColumnTitleSortter';
ProTableColumnTitleSortter.defaultProps = {
  sortDirections: ['desc', 'asc', 'default'],
  value: 'default',
};
