import * as React from 'react';
import { Button, ButtonProps } from '@/components/button';
import { MenuButton, MenuButtonProps } from '@/components/menu-button';
import { Space, SpaceProps } from '@/components/container';
import { PayloadButtonProps, usePayloadButtons } from './payload-button';
import { useI18nBundle } from '@/provider/contexts/locale-context/index';
import { omit } from 'lodash';

export interface ProTableButtonGroupProps<Payload = unknown> extends SpaceProps {
  /**
   * 是否设定按钮为文字模式
   */
  text?: boolean;
  /**
   * 可见按钮数量，超过会收起到”更多“菜单中
   */
  maxCount?: number;
  /**
   * 按钮
   */
  payload?: Payload;
  /**
   * 数据源驱动
   */
  dataSource?: Array<PayloadButtonProps<Payload>>;
  /**
   * "更多" 按钮的额外配置
   */
  moreMenuButtonProps?: Partial<MenuButtonProps>;
}

export const ProTableButtonGroup: React.FC<ProTableButtonGroupProps> = ({
  text,
  maxCount,
  payload,
  dataSource,
  moreMenuButtonProps,
  ...otherProps
}) => {
  const i18nBundle = useI18nBundle('ButtonGroup');
  const realDataSource = usePayloadButtons(dataSource, payload);
  const splitIndex = getVisibleSplitIndex(realDataSource, maxCount);
  const visibleButtons = realDataSource.slice(0, splitIndex);
  const menuButtons = realDataSource.slice(splitIndex).map((vo) => omit(vo, ['type', 'text']));
  return (
    <Space {...otherProps}>
      {text
        ? visibleButtons.map((dataSourceItem, idx) => (
            <Button key={idx} text type="primary" {...dataSourceItem} />
          ))
        : visibleButtons.map((dataSourceItem, idx) => <Button key={idx} {...dataSourceItem} />)}
      {menuButtons.length > 0 && (
        <MenuButton
          popupProps={{ align: 'tr br' }}
          label={i18nBundle.more}
          text={text}
          type={text ? 'primary' : 'normal'}
          dataSource={menuButtons}
          {...moreMenuButtonProps}
        />
      )}
    </Space>
  );
};
ProTableButtonGroup.defaultProps = {
  maxCount: 4,
  moreMenuButtonProps: {},
};

ProTableButtonGroup.displayName = 'ProTableButtonGroup';

const getVisibleSplitIndex = (dataSource: ButtonProps[], maxCount: number) => {
  /**
   * ButtonGroup:
   * maxCount 2 时
   * 包括更多按钮显示的数量
   *
   * 按钮 4 个， 显示 3 个按钮 + 1 个更多按钮
   * 按钮 3 个， 显示 3 个按钮
   * 按钮 2 个， 显示 2 个按钮
   *
   * 改进方案:
   * maxCount 2 时
   * 包括更多按钮显示的数量
   *
   * 按钮 4 个， 显示 1 个按钮 + 1 个更多按钮
   * 按钮 3 个， 显示 1 个按钮 + 1 个更多按钮
   * 按钮 2 个， 显示 2 个按钮
   *
   */
  if (dataSource.length <= maxCount) {
    return dataSource.length;
  }
  return maxCount - 1;
};
