import * as React from 'react';
import { Loading } from '@alifd/next';
import classnames from 'classnames';
import { CardHeader, CardTagProps } from '../card-header';
import { CardButtonGroupProps } from '../button-group';
import { useFiledState } from '@/utils/hooks/useFiledState';
import { TooltipProps } from '@alifd/next/lib/balloon';
import Operations from '@/common/operations';

export interface IOperationConfig {
  fixed?: boolean; // 是否固定
  showSaveTime?: boolean;
  align?: 'center' | 'flex-start' | 'flex-end';
}

export interface IOperationItem {
  label?: string;
  type?: 'primary' | 'secondary' | 'normal';
  onClick?: () => void;
}

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * 卡片标题
   */
  title?: React.ReactNode;
  description?: React.ReactNode;
  visibleButtonCount?: number;
  /**
   * 帮助信息，仅在 title 展示时生效
   */
  explanation?: string;
  bodyPadding?: boolean;
  /**
   * 帮助信息气泡配置
   */
  explanationTooltipProps?: TooltipProps;
  /**
   * 卡片顶部操作区域自定义渲染
   */
  actionBar?: React.ReactNode;
  actionButtons?: CardButtonGroupProps;
  tagGroup?: CardTagProps[];
  /**
   * 段落分割线; 如果为 true 时，默认最后一个段落没有分割线。
   * @default false
   */
  segmentLine?: boolean;
  /**
   * 是否 loading
   */
  loading?: boolean;
  /**
   * 受控控制 Card 展开收起状态
   */
  isCollapse?: boolean;
  /**
   * 是否开启 Card 显示展开收起
   */
  hasCollapse?: boolean;
  /**
   * 默认收起
   */
  defaultCollapse?: boolean;
  /**
   * 展开收起状态切换后的回调函数
   */
  setCollapse?: (collapseState: boolean) => void;

  /**
   * 是否为弹窗卡片
   */
  isDialogCard?: boolean;
  hasDivider?: boolean;
  operations?: IOperationItem[];
  operationConfig?: IOperationConfig;
  lastSaveTime?: number;
  text?: boolean;
}

export const Card: React.FC<CardProps> = (props) => {
  const {
    title,
    description,
    visibleButtonCount,
    className,
    actionBar,
    actionButtons,
    loading,
    tagGroup,
    style,
    hasCollapse,
    isDialogCard,
    explanation,
    explanationTooltipProps,
    children,
    segmentLine,
    defaultCollapse,
    setCollapse,
    isCollapse,
    hasDivider,
    operations,
    operationConfig,
    lastSaveTime,
    bodyPadding,
    text,
    ...otherProps
  } = props;
  const [collapsed, onCollapse] = useFiledState(
    {
      value: isCollapse,
      defaultValue: defaultCollapse,
      onChange: setCollapse,
    },
    'isCollapse' in props,
  );

  const cardBody = children;
  const layout = 'flow';
  const content = (
    <>
      {(title || hasCollapse || actionBar || actionButtons || tagGroup) && (
        <CardHeader
          text={text}
          title={title}
          description={description}
          visibleButtonCount={visibleButtonCount}
          hasCollapse={hasCollapse}
          actionBar={actionBar}
          actionButtons={actionButtons}
          tagGroup={tagGroup}
          collapsed={collapsed}
          onCollapse={() => onCollapse(!collapsed)}
          explanation={explanation}
          explanationTooltipProps={explanationTooltipProps}
          hasDivider={hasDivider}
        />
      )}
      <div className={classnames('fusion-ui-card-body', {})}>
        {!collapsed && (
          <div
            className={classnames(
              'fusion-ui-card-body__panel',
              `fusion-ui-card-body__panel--${layout}`,
              {
                [`fusion-ui-card-body__nopadding`]: bodyPadding,
              },
            )}
          >
            {cardBody}
          </div>
        )}
      </div>
      {!collapsed && (
        <div className={classnames('fusion-ui-card-footer-actions', {})}>
          <Operations
            operations={operations}
            operationConfig={operationConfig}
            lastSaveTime={lastSaveTime}
          />
        </div>
      )}
    </>
  );
  return (
    <div
      className={classnames('fusion-ui-card', {
        'fusion-ui-card--dialog': isDialogCard,
        [className]: className,
      })}
      style={style || {}}
      {...otherProps}
      data-name="Card"
    >
      {loading ? (
        <Loading visible inline={false} size="medium">
          {content}
        </Loading>
      ) : (
        content
      )}
    </div>
  );
};

Card.defaultProps = {
  segmentLine: false,
  loading: false,
  isDialogCard: false,
  hasCollapse: false,
  defaultCollapse: false,
};

Card.displayName = 'Card';
