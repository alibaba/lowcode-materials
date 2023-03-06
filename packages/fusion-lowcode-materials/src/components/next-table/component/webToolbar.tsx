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
  nextTablePrefix?: string;
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
      nextTablePrefix, onSearch, onActionClick, locale = {},
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
      <div className={classnames(`${nextTablePrefix}web-toolbar`, {
        [`${nextTablePrefix}no-padding`]: noPadding
      })}>
        {renderLeft ? <div className={`${nextTablePrefix}left-wrap`}>
          {renderActionBar ? actionBar.map((action, index) => {
            const { isDisabled, title, type, disabled, callback, ...rest } = action
            const buttonType = type ? type : index === 0 ? 'secondary' : 'normal';
            const disable = disabled !== undefined ? disabled : isDisabled ? !!(isDisabled()) : false;

            return (
              <Button {...rest} className={`${nextTablePrefix}button`} type={buttonType} disabled={disable}
                key={`${buttonType}-${disable ? "0" : "1"}-${index}`}
                onClick={() => {
                  onActionClick && onActionClick(action, index);
                }}>
                {title}
              </Button>
            );
          }) : null}

          {renderCustomBarItem ? <div className={`${nextTablePrefix}custom`}>
            {customBarItem.render!()}
          </div> : null}
        </div> : null}

        {renderRight ? <div className={`${nextTablePrefix}right-wrap`}>
          {renderLinkBar ?
            <WebLinkBar nextTablePrefix={nextTablePrefix} linkBar={linkBar}
              onActionClick={onActionClick} /> : null}
          {rowOrder ? <WebRowOrder {...rowOrder} {...{ nextTablePrefix }} /> : null}
          {showCustomColumn ? <div className={`${nextTablePrefix}custom-column`}
            onClick={onClickCustomColumn}>
            <Icon className={`${nextTablePrefix}icon`} type="custom-column" size="small" />
            <span className={`${nextTablePrefix}text`}>{locale.customColumn}</span>
          </div> : null}

          {showMiniPager ? <div className={`${nextTablePrefix}pagination`}>
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
                className={`${nextTablePrefix}search`}
                shape="simple"
                hasClear
                placeholder={searchBarPlaceholder}
                onSearch={onSearch}
              /> : null
          }
          {
            renderCustomBarItemRight ? <div className={`${nextTablePrefix}custom-right`}>{customBarItem.rightRender!()}</div> : null
          }
        </div> : null
        }

        <div style={{ clear: 'both' }} />

        {renderCustomBarItemBottom ? <div className={`${nextTablePrefix}custom-bottom`}>
          {customBarItem.bottomRender!()}
        </div> : null}
      </div>
    );
  }
}
