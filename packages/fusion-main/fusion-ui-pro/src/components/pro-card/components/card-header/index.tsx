import * as React from 'react';
import { Button, Balloon, Tag } from '@alifd/next';
import { CustomIcon } from '@/components/toggle-icon';
import { ButtonGroup } from '@/components/button-group';
import { CardButtonGroupProps } from '../button-group';
import classnames from 'classnames';
import { TooltipProps } from '@alifd/next/lib/balloon';

const Tooltip = Balloon;

function formatActionButtons(actionButtons) {
  if (actionButtons && Array.isArray(actionButtons)) {
    return actionButtons.map((item) => {
      if (item.label && !item.children) {
        item.children = item.label;
      }
      return item;
    });
  }
  return [];
}
export interface CardTagProps {
  label?: string;
  color?: string;
}

export interface CardHeaderProps {
  /**
   * 卡片标题
   */
  title?: React.ReactNode;
  description?: React.ReactNode;
  /**
   * 卡片顶部操作区域自定义渲染
   */
  actionBar?: React.ReactNode;
  actionButtons?: CardButtonGroupProps;
  text?: boolean;
  visibleButtonCount?: number;
  tagGroup?: CardTagProps[];
  /**
   * 受控控制 Card 展开收起状态
   */
  isCollapse?: boolean;
  /**
   * 是否开启 Card 显示展开收起
   */
  hasCollapse?: boolean;

  collapsed?: boolean;
  onCollapse?: () => void;

  /**
   * 帮助信息，仅在 title 展示时生效
   */
  explanation?: string;
  /**
   * 帮助信息气泡配置
   */
  explanationTooltipProps?: TooltipProps;
  hasDivider?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  hasCollapse,
  actionBar,
  collapsed,
  onCollapse,
  explanation,
  explanationTooltipProps,
  hasDivider,
  tagGroup,
  actionButtons,
  text,
  visibleButtonCount,
}) => {
  return (
    <div
      className={classnames('fusion-ui-card-header', {
        'fusion-ui-card-header--collapsed': collapsed,
      })}
      onClick={collapsed ? onCollapse : undefined}
    >
      <div className="fusion-ui-card-header__content">
        <div className="fusion-ui-card-header__hd">
          {title && <div className="fusion-ui-card-header__title">{title}</div>}
          {title && explanation && (
            <div className="fusion-ui-card-header__tooltip">
              <Tooltip
                trigger={<CustomIcon type="ic_error2" size="xs" />}
                {...explanationTooltipProps}
              >
                {explanation}
              </Tooltip>
            </div>
          )}
          {tagGroup.map((item) => {
            let label: any = item;
            let color: any = 'blue';
            if (typeof item === 'object') {
              label = item.label;
              if (item.color) {
                color = item.color;
              }
            }
            return (
              <Tag color={color} size="medium">
                {label}
              </Tag>
            );
          })}
        </div>
        <div className="fusion-ui-card-header__ft">
          {actionBar && <div className="fusion-ui-card-header__action-bar">{actionBar}</div>}
          <ButtonGroup
            dataSource={formatActionButtons(actionButtons)}
            text={text}
            visibleButtonCount={visibleButtonCount}
          />
          {hasCollapse && (
            <Button
              className={classnames('fusion-ui-card-header__collapse-btn', {
                'fusion-ui-card-header__collapse-btn--collapsed': collapsed,
              })}
              text
              onClick={onCollapse}
              type={'primary'}
            >
              {collapsed ? (
                <>
                  <span>展开&nbsp;</span>
                  <CustomIcon size="xs" type="triangle-down" />
                </>
              ) : (
                <>
                  <span>收起&nbsp;</span>
                  <CustomIcon size="xs" type="triangle-up" />
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      {description ? <div className="fusion-ui-card-header__desc">{description}</div> : null}
      {hasDivider && !collapsed && <div className={classnames('fusion-ui-card-header__divider')} />}
    </div>
  );
};
CardHeader.defaultProps = {
  onCollapse: () => {},
  hasDivider: true,
  tagGroup: [],
};

CardHeader.displayName = 'CardHeader';
