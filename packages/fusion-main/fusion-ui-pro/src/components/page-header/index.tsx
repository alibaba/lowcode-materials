import * as React from 'react';
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import { Icon, Breadcrumb, Avatar, Button } from '@alifd/next';
import { bizCssPrefix } from '../../variables';
import Operations from '@/common/operations';

const TransButton = Button;

export interface PageHeaderProps {
  backIcon?: string | React.ReactNode;
  prefixCls?: string;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  style?: React.CSSProperties;
  showBreadcrumb?: boolean;
  breadcrumb?: any[] | React.ReactElement<typeof Breadcrumb>;
  breadcrumbRender?: (props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode;
  tags?: React.ReactElement | React.ReactElement[];
  footer?: React.ReactNode;
  extra?: React.ReactNode;
  showAvatar?: boolean;
  showActions?: boolean;
  avatar?: object;
  onBack?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  ghost?: boolean;
  direction?: string;
  pageHeader?: any;
  operations?: any[];
  operationConfig?: Record<string, any>;
}

const renderBack = (
  prefixCls: string,
  backIcon?: string | React.ReactNode,
  onBack?: (e?: React.MouseEvent<HTMLDivElement>) => void,
) => {
  if (!backIcon) {
    return null;
  }
  return (
    <div className={`${prefixCls}-back`}>
      <TransButton
        text
        onClick={(e?: React.MouseEvent<HTMLDivElement>) => {
          onBack?.(e);
        }}
        className={`${prefixCls}-back-button`}
      >
        <Icon type={backIcon} />
      </TransButton>
    </div>
  );
};

const renderBreadcrumb = (breadcrumb: any[]) => {
  if (!breadcrumb) return null;
  if (!Array.isArray(breadcrumb)) {
    return breadcrumb;
  }
  if (!breadcrumb.length) {
    return null;
  }
  return (
    <Breadcrumb>
      {breadcrumb.map((item) => {
        return <Breadcrumb.Item>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

const getBackIcon = (props: PageHeaderProps, direction = '') => {
  if (props.backIcon !== undefined) {
    return props.backIcon;
  } else if (direction) {
    return direction === 'rtl' ? 'arrow-right' : 'arrow-left';
  } else {
    return null;
  }
};

const renderOperations = (
  prefixCls: string,
  operations: any[],
  operationConfig = { align: 'right' },
) => {
  const operationsProps = { operations, operationConfig };
  let content;
  if (!operations || !operations.length) {
    content = null;
  } else {
    content = <Operations {...operationsProps} />;
  }
  return <div className={`${prefixCls}-actions`}>{content}</div>;
};
const renderTitle = (
  prefixCls: string,
  props: PageHeaderProps,
  direction = '',
  operations: any[],
  operationConfig: { align: 'right' },
) => {
  const { title, showAvatar, avatar, showActions, subTitle, tags, extra, onBack } = props;
  const headingPrefixCls = `${prefixCls}-heading`;
  const hasHeading = title || subTitle || tags || extra;
  // If there is nothing, return a null
  if (!hasHeading) {
    return null;
  }
  const backIcon = getBackIcon(props, direction);
  const backIconDom = renderBack(prefixCls, backIcon, onBack);
  const hasTitle = backIconDom || avatar || hasHeading;
  return (
    <div className={headingPrefixCls}>
      {hasTitle && (
        <div className={`${headingPrefixCls}-left`}>
          {backIconDom}
          {showAvatar && avatar && <Avatar className={`${headingPrefixCls}-avatar`} {...avatar} />}
          {title && (
            <span
              className={`${headingPrefixCls}-title`}
              title={typeof title === 'string' ? title : undefined}
            >
              {title}
            </span>
          )}
          {subTitle && (
            <span
              className={`${headingPrefixCls}-sub-title`}
              title={typeof subTitle === 'string' ? subTitle : undefined}
            >
              {subTitle}
            </span>
          )}
          {tags && <span className={`${headingPrefixCls}-tags`}>{tags}</span>}
        </div>
      )}
      {extra && <span className={`${headingPrefixCls}-extra`}>{extra}</span>}
      {showActions && operations && renderOperations(prefixCls, operations, operationConfig)}
    </div>
  );
};

const renderFooter = (prefixCls: string, footer: React.ReactNode) => {
  if (footer) {
    return <div className={`${prefixCls}-footer`}>{footer}</div>;
  }
  return null;
};

const renderChildren = (prefixCls: string, children: React.ReactNode) => (
  <div className={`${prefixCls}-content`}>{children}</div>
);

const PageHeader: React.FC<PageHeaderProps> = (props: PageHeaderProps) => {
  const [compact, updateCompact] = React.useState(false);
  const onResize = ({ width }: { width: number }) => {
    updateCompact(width < 768);
  };
  const {
    prefixCls = `${bizCssPrefix}-page-header`,
    style,
    footer,
    children,
    breadcrumb,
    breadcrumbRender,
    showBreadcrumb,
    className: customizeClassName,
    direction,
    pageHeader,
    operations,
    operationConfig,
  } = props;
  let ghost: undefined | boolean = true;
  // Use `ghost` from `props` or from `ConfigProvider` instead.
  if ('ghost' in props) {
    ghost = props.ghost;
  } else if (pageHeader && 'ghost' in pageHeader) {
    ghost = pageHeader.ghost;
  }

  const getDefaultBreadcrumbDom = () => {
    if (breadcrumb as any[]) {
      return renderBreadcrumb(breadcrumb as any[]);
    }
    return null;
  };

  const defaultBreadcrumbDom = getDefaultBreadcrumbDom();

  const isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb;
  //  support breadcrumbRender function
  const breadcrumbRenderDomFromProps =
    breadcrumbRender?.(props, defaultBreadcrumbDom) || defaultBreadcrumbDom;

  const breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps;

  const className = classNames(prefixCls, customizeClassName, {
    'has-breadcrumb': !!breadcrumbDom && breadcrumbDom,
    'has-footer': !!footer,
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-compact`]: compact,
  });

  return (
    <ResizeObserver onResize={onResize}>
      <div className={className} style={style}>
        {showBreadcrumb && breadcrumbDom}
        {renderTitle(prefixCls, props, direction, operations, operationConfig)}
        {children && renderChildren(prefixCls, children)}
        {renderFooter(prefixCls, footer)}
      </div>
    </ResizeObserver>
  );
};

PageHeader.defaultProps = {
  showBreadcrumb: true,
  showAvatar: false,
  showOperation: true,
  showActions: false,
};

export { PageHeader };
