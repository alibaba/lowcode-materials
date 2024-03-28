import * as React from 'react';
import { useRef } from 'react';
import { OverlayProps } from '@alifd/next/types/overlay/index';
import { ProTableSettingOverlay } from './pro-table-setting-overlay';
import { useI18nBundle } from '@/provider';
import { ToggleIcon } from '@/components/toggle-icon';
import { ProTableColumnsSettingContext } from '@/components/pro-table/contexts/pro-table-columns-setting-context';

export interface ProTableSettingButtonProps {
  /**
   * 排序窗口属性，属性参考 Fusion Overlay
   */
  sortOverlayProps?: Partial<OverlayProps>;
}

const settingKeys = new Set(['sortRank', 'hidden', 'lock']);
export const ProTableSettingButton: React.FC<ProTableSettingButtonProps> = ({
  sortOverlayProps,
}) => {
  const [visible, setVisible] = React.useState(false);
  const { columnsSetting } = React.useContext(ProTableColumnsSettingContext);
  const buttonRef = useRef();
  const i18nBundle = useI18nBundle('ProTable');
  const hasSetting = React.useMemo(
    () =>
      Object.values(columnsSetting).some(
        (vo) => vo && Object.keys(vo).some((k) => settingKeys.has(k)),
      ),
    [columnsSetting],
  );
  return (
    <div>
      <ToggleIcon
        title={i18nBundle.settingButtonTooltip}
        type="table-setting"
        onClick={() => setVisible(!visible)}
        active={visible || hasSetting}
        ref={buttonRef}
      />
      {visible && (
        <ProTableSettingOverlay
          visible={visible}
          onRequestClose={(type) => type === 'docClick' && setVisible(false)}
          target={buttonRef.current}
          safeNode={buttonRef.current}
          offset={[8, 8]}
          {...sortOverlayProps}
        />
      )}
    </div>
  );
};
ProTableSettingButton.displayName = 'ProTableSettingButton';
