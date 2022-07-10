import * as React from 'react';
import { useContext, useCallback } from 'react';
import { useI18nBundle } from '@/provider';
import { ProTableSettingContext } from '../contexts/pro-table-setting-context';
import { ToggleIcon } from '@/components/toggle-icon';

/**
 * 表格设置斑马线按钮
 */
export const ProTableZebraButton: React.FC = () => {
  const { tableSetting, setTableSetting } = useContext(ProTableSettingContext);
  const i18nBundle = useI18nBundle('ProTable');
  const handleClick = useCallback(
    () =>
      setTableSetting((oldState) => ({
        ...oldState,
        isZebra: !oldState.isZebra,
      })),
    [setTableSetting],
  );
  return (
    <ToggleIcon
      title={
        tableSetting.isZebra
          ? i18nBundle.zebraButtonOpenTooltip
          : i18nBundle.zebraButtonCloseTooltip
      }
      type={tableSetting.isZebra ? 'table-zebra' : 'table-zebra'}
      active={tableSetting.isZebra}
      onClick={handleClick}
    />
  );
};
ProTableZebraButton.displayName = 'ProTableZebraButton';
