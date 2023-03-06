import React, { MouseEventHandler, ReactNode } from "react";
import classnames from "classnames";
import { Button, Search, Pagination, Icon } from '@alifd/next';
import WebRowOrder, { IWebRowOrderProps } from "./webRowOrder";
import WebLinkBar from "./webLinkBar";
import { SearchProps } from "@alifd/next/types/search";
import { PaginationProps } from "@alifd/next/types/pagination";
import { ButtonProps } from "@alifd/next/types/button";

export interface IAction {
  render?: (title: IAction['title']) => ReactNode;
  isDisabled?: () => boolean;
  title?: ReactNode;
  type: ButtonProps['type'];
  disabled: boolean;
  callback?: (action: IAction) => void;
}

export interface IWebToolbarProps {
  deepTablePrefix?: string;
  onSearch?: SearchProps['onSearch'];
  onActionClick?: (action: IAction, index: number) => void;
  locale?: { [prop: string]: string };
  showActionBar?: boolean;
  actionBar?: IAction[];
  showLinkBar?: boolean;
  linkBar?: any;
  showSearch?: boolean;
  searchBarPlaceholder?: string;
  showCustomColumn?: boolean;
  onClickCustomColumn?: MouseEventHandler<HTMLDivElement>;
  rowOrder?: IWebRowOrderProps;
  customBarItem?: {
    render?: () => ReactNode;
    rightRender?: () => ReactNode;
    bottomRender?: () => ReactNode;
  }
  showMiniPager?: boolean;
  paginationProps?: Pick<PaginationProps, 'pageSize' | 'onChange' | 'onPageSizeChange'> & {
    currentPage?: PaginationProps['current'];
    totalCount?: PaginationProps['total'];
  };
  noPadding?: boolean;
}

export default class WebToolbar extends React.Component<IWebToolbarProps> {
  render() {
    const {
      deepTablePrefix, onSearch, onActionClick, locale = {},
      showActionBar, actionBar, showLinkBar, linkBar, showSearch, searchBarPlaceholder, showCustomColumn,
      onClickCustomColumn, rowOrder, customBarItem, showMiniPager, paginationProps, noPadding
    } = this.props;

    const { currentPage, pageSize, totalCount, onChange, onPageSizeChange } = paginationProps || {};

    const renderCustomBarItem = !!(customBarItem && customBarItem.render);
    const renderCustomBarItemRight = !!(customBarItem && customBarItem.rightRender);
    const renderCustomBarItemBottom = !!(customBarItem && customBarItem.bottomRender);
    const renderActionBar = !!(showActionBar && actionBar && actionBar.length);
    const renderLeft = renderActionBar || renderCustomBarItem;

    const renderLinkBar = !!(showLinkBar && linkBar && linkBar.length);
    const renderRight = renderLinkBar || rowOrder || showCustomColumn || showMiniPager || showSearch || renderCustomBarItemRight;

    const renderToolbar = renderLeft || renderRight;
    if (!renderToolbar) {
      return null;
    }

    return (
      <div className={classnames(`${deepTablePrefix}web-toolbar`, {
        [`${deepTablePrefix}no-padding`]: noPadding
      })}>
        {renderLeft ? <div className={`${deepTablePrefix}left-wrap`}>
          {renderActionBar ? actionBar.map((action, index) => {
            const { isDisabled, title, type, disabled, callback, ...rest } = action
            const buttonType = type ? type : index === 0 ? 'secondary' : 'normal';
            const disable = disabled !== undefined ? disabled : isDisabled ? !!(isDisabled()) : false;

            return (
              <Button {...rest} className={`${deepTablePrefix}button`} type={buttonType} disabled={disable}
                key={`${buttonType}-${disable ? "0" : "1"}-${index}`}
                onClick={() => {
                  onActionClick && onActionClick(action, index);
                }}>
                {title}
              </Button>
            );
          }) : null}

          {renderCustomBarItem ? <div className={`${deepTablePrefix}custom`}>
            {customBarItem.render!()}
          </div> : null}
        </div> : null}

        {renderRight ? <div className={`${deepTablePrefix}right-wrap`}>
          {renderLinkBar ?
            <WebLinkBar deepTablePrefix={deepTablePrefix} linkBar={linkBar}
              onActionClick={onActionClick} /> : null}
          {rowOrder ? <WebRowOrder {...rowOrder} {...{ deepTablePrefix }} /> : null}
          {showCustomColumn ? <div className={`${deepTablePrefix}custom-column`}
            onClick={onClickCustomColumn}>
            <Icon className={`${deepTablePrefix}icon`} type="custom-column" size="small" />
            <span className={`${deepTablePrefix}text`}>{locale.customColumn}</span>
          </div> : null}

          {showMiniPager ? <div className={`${deepTablePrefix}pagination`}>
            <Pagination {...
              {
                current: currentPage,
                pageSize,
                total: totalCount,
                onChange,
                onPageSizeChange,
                type: "simple",
                size: "small",
                shape: "arrow-only",
              }} />
          </div> : null}

          {
            showSearch
              ? <Search
                className={`${deepTablePrefix}search`}
                shape="simple"
                hasClear
                placeholder={searchBarPlaceholder}
                onSearch={onSearch}
              /> : null
          }
          {
            renderCustomBarItemRight ? <div className={`${deepTablePrefix}custom-right`}>{customBarItem.rightRender!()}</div> : null
          }
        </div> : null
        }

        <div style={{ clear: 'both' }} />

        {renderCustomBarItemBottom ? <div className={`${deepTablePrefix}custom-bottom`}>
          {customBarItem.bottomRender!()}
        </div> : null}
      </div>
    );
  }
}
