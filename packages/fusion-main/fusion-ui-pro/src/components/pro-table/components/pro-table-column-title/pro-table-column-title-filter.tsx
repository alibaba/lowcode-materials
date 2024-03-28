import * as React from 'react';
import { Dropdown } from '@alifd/next';
import { CustomIcon } from '@/components/toggle-icon';
import cns from 'classnames';
import {
  ProTableColumnTitleFilterPanel,
  ProTableColumnFilterPanelProps,
} from './pro-table-column-title-filter-panel';
import { ProTableContext } from '@/components/pro-table/contexts/pro-table-context';

export interface ProTableColumnTitleFilterProps
  extends Omit<ProTableColumnFilterPanelProps, 'value' | 'defaultValue' | 'onChange'> {
  iconType?: string;
}

/**
 * ProTable 列标题
 */
export const ProTableColumnTitleFilter: React.FC<ProTableColumnTitleFilterProps> = ({
  rtl,
  iconType,
  columnFilters,
  dataIndex,
  ...others
}) => {
  const [visible, setVisible] = React.useState(false);

  const hasValue = React.useMemo(() => {
    return !!(
      columnFilters.getColumnKeywords(dataIndex) ||
      columnFilters.getColumnSort(dataIndex) ||
      columnFilters.getColumnSelectedKeys(dataIndex)?.length > 0
    );
  }, [columnFilters, dataIndex]);

  const { tableBeforeContainer } = React.useContext(ProTableContext);
  const triggerRef = React.useRef();
  const trigger = (
    <span style={{ lineHeight: '100%' }} role="button" tabIndex={0} ref={triggerRef}>
      <CustomIcon
        type={iconType || 'table-filter'}
        size={14}
        style={{
          position: 'relative',
          top: iconType ? 0 : -1,
        }}
        className={cns('fusion-ui-pro-table-column-title-filter', {
          'fusion-ui-pro-table-column-title-filter--active': visible || hasValue,
        })}
      />
    </span>
  );
  return (
    <Dropdown
      visible={visible}
      onVisibleChange={(val) => {
        columnFilters.setFilterPanelVisible(val);
        setVisible(val);
      }}
      offset={[0, 8]}
      trigger={trigger}
      triggerType="click"
      rtl={rtl}
      container={tableBeforeContainer.current}
    >
      <ProTableColumnTitleFilterPanel
        rtl={rtl}
        dataIndex={dataIndex}
        columnFilters={columnFilters}
        onClose={() => setVisible(false)}
        {...others}
      />
    </Dropdown>
  );
};
ProTableColumnTitleFilter.displayName = 'ProTableColumnTitleFilter';
