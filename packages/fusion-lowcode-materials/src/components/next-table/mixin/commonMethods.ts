import assign from "lodash/assign";
import deepcopy from "lodash/cloneDeep";
import { isValidElement, ReactNode } from "react";
import WebTable from "../table/webTable";
import convertData from "../utils/convertData";
import getDataSource from "../utils/getDataSource";


export interface ICommonMethods {
  init(this: WebTable): void;
  loadData(this: WebTable, from: string): void;
  getDataSource(this: WebTable): any;
  getDataItem(this: WebTable, value: any): any;
  onSort(this: WebTable, dataIndex: string, order: string): void;
  onSearch(this: WebTable, searchKey: string): void;
  renderEmptyContent(this: WebTable): ReactNode | null;
  onPageSizeChange(this: WebTable, pageSize: number): void;
  onPageNumChange(this: WebTable, current: number): void;
  getPaginationProps(this: WebTable): any;
}

const methods: ICommonMethods =  {
  init() {
    const { pagination = {} } = this.props;
    const { pageSize } = pagination;
    const result = convertData(getDataSource(this.props));

    const mergeState = {
      searchKey: '',
      orderColumn: '',
      orderType: '',
      dataSource: result.dataSource || [],
      totalCount: result.totalCount || 0,
      pageSize,
      currentPage: result.currentPage || 1,
    };

    this.state = this.state || {};
    assign(this.state, mergeState);
  },
  loadData(this, from) {
    const { onFetchData, onLoadData } = this.props;
    const { currentPage, pageSize, searchKey, orderColumn, orderType } = this.state;

    if (onLoadData) {
      onLoadData(currentPage, pageSize, searchKey, orderColumn, orderType, from);

    } else {
      onFetchData && onFetchData({ currentPage, pageSize, searchKey, orderColumn, orderType, from });
    }
  },
  getDataSource(this) {
    const { dataSource } = this.state;

    const list = deepcopy(dataSource);

    list.forEach((item: any) => {
      delete item.__mode__;
      delete item.__fields__;
      delete item.__expand__;
    });

    return list;
  },
  getDataItem(value) {
    const { primaryKey } = this.props;
    const { dataSource } = this.state;

    return dataSource.find((item: any) => {
      return item[primaryKey!] === value;
    });
  },
  onSort(dataIndex, order) {
    this.setState({
      orderColumn: dataIndex,
      orderType: order,
    }, () => {
      this.loadData('order');
    });
  },
  onSearch(searchKey) {
    this.setState({ searchKey }, () => {
      this.loadData('search');
    });
  },
  renderEmptyContent() {
    const { setEmptyContent, emptyContent } = this.props;

    if (!setEmptyContent) {
      return null;
    }

    return typeof emptyContent === 'function' ? emptyContent() : isValidElement(emptyContent) ? emptyContent : null;
  },
  onPageSizeChange(pageSize) {
    this.setState({ pageSize }, () => {
      this.loadData('pagination');
    });
  },
  onPageNumChange(current) {
    this.setState({
      currentPage: current,
    }, () => {
      this.loadData('pagination');
    });
  },
  getPaginationProps() {
    const { deepTablePrefix, pagination, locale, noPadding } = this.props;
    const { currentPage, pageSize, totalCount } = this.state;
    return {
      deepTablePrefix, currentPage, totalCount,
      ...pagination,
      noPadding,
      pageSize,
      locale,
      onChange: this.onPageNumChange.bind(this),
      onPageSizeChange: this.onPageSizeChange.bind(this),
    };
  },
};

export default methods;
