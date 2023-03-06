import React from "react";
import classnames from 'classnames';
import isString from "lodash/isString";
import { Pagination } from '@alifd/next';
import { paginationProps, fetchKey } from "../utils/tableProps";
import { PaginationProps } from "@alifd/next/types/pagination";

export interface IWebPaginationProps extends Pick<PaginationProps, 'pageSize' | 'onChange' | 'onPageSizeChange' | 'pageSizeList'> {
  deepTablePrefix?: string;
  currentPage?: PaginationProps['current'];
  totalCount?: PaginationProps['total'];
  locale?: {
    [prop: string]: string;
  }
  hideOnlyOnePage?: boolean; 
  noPadding?: boolean;
  paginationPosition?: string;
}

export default class WebPagination extends React.Component<IWebPaginationProps> {
  render() {
    const { deepTablePrefix, currentPage, pageSize, totalCount, locale, onChange, onPageSizeChange, hideOnlyOnePage, noPadding } = this.props;

    const myProps = fetchKey<IWebPaginationProps>(this.props, paginationProps as Array<keyof IWebPaginationProps>);
    const { pageSizeList, paginationPosition = 'right', ...rest } = myProps;

    if (hideOnlyOnePage && pageSize !== undefined && totalCount !== undefined && pageSize > totalCount) {
      return null
    }
    return (
      <div className={classnames(`${deepTablePrefix}web-pagination-wrap`, {
        [`${deepTablePrefix}no-padding`]: noPadding
      })}>
        <Pagination
          className={classnames(`${deepTablePrefix}web-pagination`, `${deepTablePrefix}web-pagination-${paginationPosition}`)}
          totalRender={(total) => {
            return (
              <span>{locale && locale.totalCount ? locale.totalCount : '总计'}:{' '}{total}{' '}</span>);
          }}
          {...
            {
              ...rest,
              pageSizeList: (pageSizeList && isString(pageSizeList)) ? (() => {
                const pageSizeArray = pageSizeList.split(',');
                if (pageSizeArray.length > 1) {
                  return pageSizeArray.map(i => parseInt(i, 10));
                }
              })() : pageSizeList,
              current: currentPage,
              pageSize,
              total: totalCount,
              onChange,
              onPageSizeChange,
            }
          }
        />
        <div style={{ clear: 'both' }}/>
      </div>
    );
  }
}
