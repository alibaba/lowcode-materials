import * as React from 'react';
import { useFullscreen } from 'ahooks';
import is from '@sindresorhus/is';
import { useI18nBundle } from '@/provider';
import { ToggleIcon } from '@/components/toggle-icon';
import { ProTableContext } from '../contexts/pro-table-context';

interface ProTableFullscreenButtonProps {
  /**
   * 全屏状态变化回调
   */
  onFullscreenStateChange?: (fullscreenState: boolean) => void;
}

/**
 * 表格全屏设置按钮
 */
export const ProTableFullscreenButton: React.FC<ProTableFullscreenButtonProps> = ({
  onFullscreenStateChange,
}) => {
  const i18nBundle = useI18nBundle('ProTable');
  const { proTableContainer } = React.useContext(ProTableContext);

  const [isFullscreen, { toggleFull }] = useFullscreen(proTableContainer, {
    onFull: () => {
      const ele = proTableContainer.current;
      if (ele) {
        ele.classList.add('fullscreen');
      }
      if (is.function_(onFullscreenStateChange)) {
        onFullscreenStateChange(true);
      }
    },
    onExitFull: () => {
      const ele = proTableContainer.current;
      if (ele) {
        ele.classList.remove('fullscreen');
      }

      if (is.function_(onFullscreenStateChange)) {
        onFullscreenStateChange(false);
      }
    },
  });

  return (
    <ToggleIcon
      title={
        isFullscreen
          ? i18nBundle.fullscreenButtonCloseTooltip
          : i18nBundle.fullscreenButtonOpenTooltip
      }
      type={isFullscreen ? 'table-disfullscreen' : 'table-fullscreen'}
      onClick={toggleFull}
    />
  );
};

ProTableFullscreenButton.displayName = 'ProTableFullscreenButton';
