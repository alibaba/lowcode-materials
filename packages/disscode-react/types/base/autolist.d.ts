import React, { ComponentClass } from 'react';
import { EventOnScroll } from './scroll-view';
import { IViewProp } from './view';

export interface AutoListProps<T, SelectionKeyType = number> {
  mode?: 'scroll' | 'noscroll' | 'table';
  pageMode?: 'auto' | 'pagination';

  keyExtractor: string | ((item: T, index: number) => string);

  /**
   * 数据源
   */
  dataSource?: T[] | string | ((page: number, pageSize?: number) => Promise<T[]>);

  /**
   * 是否自动加载
   */
  autoFetch?: boolean;

  /**
   * 自动加载延迟时间
   */
  autoFetchDelayTime?: number;

  /**
   * 拉取数据包含数据总数
   */
  onFetchDataPagination?: (
    page: number,
    pageSize?: number,
  ) => Promise<{
    total: number;
    data: T[];
  }>;
  onScroll?: (evt: EventOnScroll) => void;
  onPullRefresh?: () => void;
  emptyText: string;
  footerMarginTop?: number;
  pageSize?: number;
  renderItem: (item: T, index: number, currentPage: number) => React.ReactElement;
  renderHeader?: React.ComponentType<any> | React.ReactElement | null;
  renderFooter?: React.ComponentType<any> | React.ReactElement | null;
  /**
   * 是否数据为空时隐藏 header
   */
  emptyHideHeader?: boolean;

  /**
   * 间距 单填一个整数 表示横向间距 px，【横向，竖向】
   * 暂不支持响应式
   * Rn AutoList 仅支持横竖向相同的数值
   */
  gutter?: number;
  /** Item容器附加属性 （目前用于选择器时多加一层View后单行多列出现问题） */
  itemViewProps?: IViewProp;

  /** 选择器 */
  selection?: boolean;
  selectionKey?: keyof T;
  /** 单/多选 */
  selectionType?: 'checkbox' | 'radio';
  onSelect?: (selected: SelectionKeyType[], selectedRows: T[]) => void;
  selectionHandleButton?: React.ReactNode;
}

interface AutoListRenderItemData<T> {
  item: T;
  index: number;
  currentPage: number;
}

declare const AutoList: ComponentClass<AutoListProps>;

export default AutoList;

