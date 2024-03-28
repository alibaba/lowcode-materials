import * as React from 'react';
import { FC, useContext } from 'react';
import { useI18nBundle } from '@/provider';
import { ProTableSettingContext } from '../contexts/pro-table-setting-context';
import { ToggleIcon } from '@/components/toggle-icon';

/**
 * 表格密度调整按钮
 */
export const ProTableCompactButton: FC = () => {
  const i18nBundle = useI18nBundle('ProTable');
  const { tableSetting, setTableSetting } = useContext(ProTableSettingContext);

  const onSizeChange = () => {
    setTableSetting((oldState) => ({
      ...oldState,
      size: oldState.size === 'small' ? 'medium' : 'small',
    }));
  };
  return (
    <ToggleIcon
      title={
        tableSetting.size === 'small'
          ? i18nBundle.compactButtonNormalTooltip
          : i18nBundle.compactButtonCompactTooltip
      }
      type={tableSetting.size === 'small' ? 'table-wide' : 'table-narrow'}
      onClick={onSizeChange}
    />
  );
};
ProTableCompactButton.displayName = 'ProTableCompactButton';
