import * as React from 'react';
import { ProTableColumnProps } from '../../types';
import { ProTableColumnTitleFilter } from './pro-table-column-title-filter';
import { ProTableColumnTitleSortter } from './pro-table-column-title-sortter';

import { Balloon } from '@alifd/next';
import { CustomIcon } from '@/components/toggle-icon';
import { ProTableColumnsFilterContext } from '../../contexts/pro-table-columns-filters-context';
import { CellLabel } from '../pro-table-cell/cell-label';

const { Tooltip } = Balloon;

type ProTableColumnTitlePropsKey =
  | 'sortable'
  | 'sortDirections'
  | 'filters'
  | 'filterMode'
  | 'lock'
  | 'searchable'
  | 'isImmediate'
  | 'dataIndex'
  | 'explanation'
  | 'cellTooltipMode';

export type ProTableColumnTitleProps = Pick<ProTableColumnProps, ProTableColumnTitlePropsKey>;

export const ProTableColumnTitle: React.FC<ProTableColumnTitleProps> = ({
  dataIndex,
  sortable,
  sortDirections,
  filters,
  filterMode,
  searchable,
  explanation,
  isImmediate,
  cellTooltipMode,
  lock,
  children,
}) => {
  const showFilter = searchable || !!filters;
  const columnFilters = React.useContext(ProTableColumnsFilterContext);

  return (
    <div className="fusion-ui-pro-table-column-title">
      <CellLabel toolTipMode={cellTooltipMode === 'ellipsis' ? 'always' : cellTooltipMode}>
        {children}
      </CellLabel>
      {(explanation || showFilter || sortable) && (
        <div className="fusion-ui-pro-table-column-title-icons">
          {explanation && (
            <Tooltip trigger={<CustomIcon type="ic_error2" size={14} />} align="bl">
              {explanation}
            </Tooltip>
          )}
          {!showFilter && sortable && (
            <ProTableColumnTitleSortter
              onChange={(val) => columnFilters.setColumnSort(dataIndex, val)}
              value={columnFilters.getColumnSort(dataIndex)}
              sortDirections={sortDirections}
            />
          )}
          {showFilter && (
            <ProTableColumnTitleFilter
              sortable={sortable}
              lock={lock}
              searchable={searchable}
              filters={filters}
              filterMode={filterMode}
              isImmediate={isImmediate}
              columnFilters={columnFilters}
              dataIndex={dataIndex}
              iconType={searchable && !sortable && !filters ? 'search' : undefined}
            />
          )}
        </div>
      )}
    </div>
  );
};

ProTableColumnTitle.displayName = 'ProTableColumnTitle';
ProTableColumnTitle.defaultProps = {};
