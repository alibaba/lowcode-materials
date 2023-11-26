import * as React from 'react';
import { Loading, Balloon, Tag } from '@alifd/next';
import classnames from 'classnames';
import { CardTagProps } from '../card-header';
import { TooltipProps } from '@alifd/next/lib/balloon';
import { CustomIcon } from '@/components/toggle-icon';

const { Tooltip } = Balloon;

export interface CardSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * 段落标题
   */
  title?: React.ReactNode;
  /**
   * 帮助信息，仅在 title 展示时生效
   */
  explanation?: string;
  /**
   * 帮助信息气泡配置
   */
  explanationTooltipProps?: TooltipProps;
  /**
   * 子卡片顶部操作区域自定义渲染
   */
  actionBar?: React.ReactNode;
  /**
   * 是否启用分割线
   * @default false
   */
  segmentLine?: boolean;
  /**
   * 是否 loading
   * @default false
   */
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  tagGroup?: CardTagProps[];
  headerDivider?: boolean;
  footerDivider?: boolean;
  hasDividerIndent?: boolean;
  noBullet?: boolean;
}

/**
 * 子卡片
 */
export const CardSection: React.FC<CardSectionProps> = ({
  children,
  title,
  className,
  loading,
  segmentLine,
  actionBar,
  explanation,
  explanationTooltipProps,
  tagGroup,
  id,
  headerDivider,
  footerDivider,
  hasDividerIndent,
  noBullet,
  style,
}) => {
  // 获取 loading 状态
  const loadingStatus = loading;
  const content = (
    <>
      {(title || actionBar) && (
        <div className="fusion-ui-card-section-header">
          {title && (
            <div className="fusion-ui-card-section-header__hd">
              <div
                className={classnames('fusion-ui-card-section-header__title', {
                  'fusion-ui-card-section-header-noBullet': noBullet,
                })}
              >
                {title}
              </div>
              <div className="fusion-ui-card-section-header__tooltip">
                {explanation && (
                  <Tooltip
                    trigger={<CustomIcon type="ic_error2" size="xs" />}
                    {...explanationTooltipProps}
                  >
                    {explanation}
                  </Tooltip>
                )}
              </div>
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
                  <Tag color={color} size="small">
                    {label}
                  </Tag>
                );
              })}
            </div>
          )}
          <div className="fusion-ui-card-section-header__hd">
            {actionBar && (
              <div className="fusion-ui-card-section-header__action-bar">{actionBar}</div>
            )}
          </div>
        </div>
      )}
      {headerDivider && (
        <div
          className={classnames('fusion-ui-card-section-header__divider', {
            'fusion-ui-section-divider-indent': hasDividerIndent,
          })}
        />
      )}
      <div className="fusion-ui-card-section-body">{children}</div>
      {footerDivider && (
        <div
          className={classnames('fusion-ui-card-section-footer__divider', {
            'fusion-ui-section-divider-indent': hasDividerIndent,
          })}
        />
      )}
    </>
  );
  // 一般情况
  return (
    <div
      id={id}
      className={classnames('fusion-ui-card-section', {
        'fusion-ui-card-section--segment-line': segmentLine,
        [className]: className,
      })}
      style={style}
    >
      {loadingStatus ? (
        <Loading inline={false} visible={loadingStatus} size="medium">
          {content}
        </Loading>
      ) : (
        content
      )}
    </div>
  );
};

CardSection.displayName = 'CardSection';
CardSection.defaultProps = {
  title: null,
  segmentLine: false,
  loading: false,
  tagGroup: [],
  noBullet: false,
  headerDivider: true,
};
