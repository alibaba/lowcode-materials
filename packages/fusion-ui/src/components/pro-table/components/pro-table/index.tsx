import * as React from 'react';
import { Space } from '@/components/container';
import { Box, Pagination } from '@alifd/next';
import { ProTableProps, ProTableSettingButtonType } from '../../types';
import { ProTableCompactButton } from '../pro-table-compact-button';
import { ProTableZebraButton } from '../pro-table-zebra-button';
import { ProTableFullscreenButton } from '../pro-table-fullscreen-button';
import { ProTableSettingButton } from '../pro-table-setting-button';
import { useProTableSlots } from '../pro-table-slot';
import {
  ProTableContext,
  useProTableValue,
} from '@/components/pro-table/contexts/pro-table-context';
import {
  ProTableColumnsSettingContext,
  useColumnsSettingValue,
} from '@/components/pro-table/contexts/pro-table-columns-setting-context';
import {
  ProTableColumnsFilterContext,
  useColumnsFilterValue,
} from '@/components/pro-table/contexts/pro-table-columns-filters-context';
import { ProTableBase } from '../pro-table-base/index';
// import { Result } from '@/result';
import {
  ProTableSettingContext,
  useProTableSettingValue,
} from '@/components/pro-table/contexts/pro-table-setting-context';
import is from '@sindresorhus/is';
import { ToggleIconGroup } from '@/components/toggle-icon';
import {
  ProTableColumnsContext,
  useProTableColumnsValue,
} from '@/components/pro-table/contexts/pro-table-columns-context';
import cns from 'classnames';
// import { Pagination } from '../../../pagination/index';
import { ProTableActionBarButtonGroup } from '../pro-table-action-bar-buttons';
import {
  useProTableRowSelectionValue,
  ProTableRowSelectionContext,
} from '../../contexts/pro-table-row-selection-context';

export const ProTable: React.FC<ProTableProps> = (props: ProTableProps) => {
  const slots = useProTableSlots(props);
  const columnsFiltersCtxValue = useColumnsFilterValue(props);
  const columnsSettingCtxValue = useColumnsSettingValue(props);
  const proTableSettingCtxValue = useProTableSettingValue(props);
  const { paginationProps, settingButtons } = props;
  const proTableContainer = React.useRef<HTMLDivElement>();
  const tableBeforeContainer = React.useRef<HTMLDivElement>();

  const proTableCtxValue = useProTableValue({
    pageSize: paginationProps?.pageSize,
    total: paginationProps?.total,
    tableBeforeContainer,
    proTableContainer,
  });
  const proTableColumnsCtxValue = useProTableColumnsValue(props);

  const proTableRowSelectionCtxValue = useProTableRowSelectionValue(props);
  const buttons = React.useMemo<ProTableSettingButtonType[]>(() => {
    if (settingButtons === false) {
      return [];
    }
    if (is.array(settingButtons)) {
      return settingButtons;
    }
    return ['compact', 'zebra', 'fullscreen', 'setting'];
  }, [settingButtons]);
  const loading = React.useMemo(
    () => !columnsFiltersCtxValue.filterPanelVisible && props.loading,
    [columnsFiltersCtxValue.filterPanelVisible, props.loading],
  );
  const hasActionBarButtons = props.actionBarButtons?.dataSource?.length > 0;
  return (
    <ProTableSettingContext.Provider value={proTableSettingCtxValue}>
      <ProTableColumnsSettingContext.Provider value={columnsSettingCtxValue}>
        <ProTableColumnsFilterContext.Provider value={columnsFiltersCtxValue}>
          <ProTableContext.Provider value={proTableCtxValue}>
            <ProTableColumnsContext.Provider value={proTableColumnsCtxValue}>
              <ProTableRowSelectionContext.Provider value={proTableRowSelectionCtxValue}>
                <div
                  className={cns('fusion-ui-pro-table', {
                    'fusion-ui-pro-table-expanded-child': props.isExpandedChild,
                  })}
                  ref={proTableContainer}
                >
                  <div className="fusion-ui-pro-table-body">
                    {slots.actionBarBefore}
                    {(buttons.length > 0 ||
                      hasActionBarButtons ||
                      slots.actionBarLeft ||
                      slots.actionBarRight) && (
                      <div className="fusion-ui-pro-table-action-bar">
                        <Space spacing={8}>
                          {hasActionBarButtons && (
                            <ProTableActionBarButtonGroup {...props.actionBarButtons} />
                          )}
                          {slots.actionBarLeft}
                        </Space>
                        <Space spacing={8}>
                          {slots.actionBarRight}
                          {buttons.length > 0 && (
                            <ToggleIconGroup>
                              {buttons.includes('compact') && <ProTableCompactButton />}
                              {buttons.includes('zebra') && <ProTableZebraButton />}
                              {buttons.includes('fullscreen') && (
                                <ProTableFullscreenButton
                                  onFullscreenStateChange={props.onFullscreenStateChange}
                                />
                              )}
                              {buttons.includes('setting') && <ProTableSettingButton />}
                            </ToggleIconGroup>
                          )}
                        </Space>
                      </div>
                    )}
                    {slots.actionBarAfter}
                    <div className="fusion-ui-pro-table-content">
                      <div ref={tableBeforeContainer} />
                      <ProTableBase {...props} loading={loading}>
                        {slots.table}
                      </ProTableBase>
                      {slots.tableAfter}
                    </div>
                  </div>
                  {paginationProps && !paginationProps.hidden && (
                    <Pagination
                      className="fusion-ui-pagination"
                      {...paginationProps}
                      popupProps={{
                        container: proTableContainer.current,
                        ...paginationProps.popupProps,
                      }}
                    />
                  )}
                </div>
              </ProTableRowSelectionContext.Provider>
            </ProTableColumnsContext.Provider>
          </ProTableContext.Provider>
        </ProTableColumnsFilterContext.Provider>
      </ProTableColumnsSettingContext.Provider>
    </ProTableSettingContext.Provider>
  );
};

ProTable.defaultProps = {
  settingButtons: false,
  defaultColumnsSetting: {},
  columnKey: 'key',
  primaryKey: 'id',
  stickyLock: true,
  resizable: true,
  emptyContent: (
    <Box direction="column" align="center" justify="center">
      <img
        style={{ height: 100, width: 150 }}
        src="https://img.alicdn.com/imgextra/i2/O1CN01rie9sh1CmpqL3fSKD_!!6000000000124-2-tps-300-206.png"
      />
      暂无内容
    </Box>
  ),
  hasBorder: false,
  size: 'medium',
  isZebra: false,
  cellDefault: '',
  cellTooltipMode: 'none',
};
