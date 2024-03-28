import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action, toJS } from 'mobx';
import { px } from '../../../utils';

import View from '../View';
import ScrollView from '../ScrollView';

import ListEmpty from './ListEmpty';
import ListTip from './ListTip';
// import SelectorBar from './SelectorBar';
// import RadioCheckboxWidget from '../Form/FormWidget/Radio/RadioCheckboxWidget';
import { AutoListProps } from './AutoList.PropType';
// import { Pagination } from 'antd';

@observer
class ListView<T, SelectionKeyType = number> extends Component<AutoListProps<T, SelectionKeyType>> {
  static defaultProps = {
    mode: 'scroll',
    pageMode: 'auto',
    keyExtractor: (_item: any, index: number) => index.toString(),
  };

  @observable isLoad = false;
  @observable refreshing = false;
  @observable loading = false;
  @observable nodata = false;
  @observable currentPage = 0;
  @observable pageSize = 20;
  @observable listData: T[] = [];
  @observable total = 0;
  @observable dataLength: number = 0;

  /**
   * 选择器相关
   */
  @observable selection = false;
  @observable selectMap: { [propName: string]: T } | { [propName: string]: T } = {};

  @action componentDidMount() {
    this.isLoad = true;
    const { pageSize, dataSource, autoFetch = true, autoFetchDelayTime = 300 } = this.props;
    if (pageSize) {
      this.pageSize = pageSize;
    }
    if (autoFetch) {
      if (typeof dataSource === 'function') {
        setTimeout(() => {
          this.refresh();
        }, autoFetchDelayTime);
      }
      if (Array.isArray(toJS(dataSource))) {
        setTimeout(() => {
          if (dataSource?.length === 0) {
            this.nodata = true;
          }
          this.forceUpdate();
        }, autoFetchDelayTime || 1000);
      }
    }
  }

  @action toggleSelection = (isOpen: boolean) => {
    this.selection = typeof isOpen === 'boolean' ? isOpen : !this.selection;
    if (!this.selection) {
      this.selectMap = {};
      // onSelect
      this.props.onSelect && this.props.onSelect([], []);
    }
  };
  @action onClickRadio = (item: T) => {
    const { selectionKey, selectionType, onSelect } = this.props;
    if (selectionKey) {
      const key = item[selectionKey] as any;
      if (selectionType === 'checkbox') {
        const selectMap = {
          ...this.selectMap,
        };
        if (this.selectMap[key]) {
          delete selectMap[key];
        } else {
          selectMap[key] = item;
        }
        this.selectMap = selectMap;
      } else {
        this.selectMap = { [key]: item };
      }
      // onSelect
      if (onSelect) {
        const arr = this.listData.filter((_item) => this.selectMap[_item[selectionKey] as any]);
        onSelect && onSelect(arr.map((_item) => _item[selectionKey]) as any, arr);
      }
    }
  };

  @action
  refresh(reset: boolean = false, callback?: () => void) {
    if (this.refreshing) return;
    this.refreshing = true;
    this.currentPage = 0;
    this.loading = false;
    this.nodata = false;
    this.listData = [];
    this.dataLength = 0;
    if (!reset) this.loadNext(callback);
  }

  onPullRefresh = (finish: () => void) => {
    this.props.onPullRefresh && this.props.onPullRefresh();
    this.refresh(false, finish);
  };

  @action changeData = (cb: (data: T[]) => T[]) => {
    if (typeof cb === 'function') {
      const data = cb(this.listData);
      this.listData = data;
    }
  };

  @action clear = () => {
    this.refresh(true);
  };

  onEndReached = () => {
    this.loadNext();
  };

  @action
  async loadNext(callback?: () => void) {
    const { pageMode, dataSource, onFetchDataPagination } = this.props;
    if (this.nodata || this.loading) return;
    const pageSize = this.pageSize || 20;
    this.currentPage += 1;
    try {
      this.loading = true;
      if (pageMode === 'pagination' && onFetchDataPagination) {
        const { total, data } = await onFetchDataPagination(this.currentPage, pageSize);
        this.total = total;
        this.loading = false;
        if (data.length < pageSize) this.nodata = true;
        const listData = this.listData.concat(data);
        this.listData = listData;
        this.dataLength = listData.length;
        this.refreshing = false;
        callback && callback();
      }
      if (pageMode === 'auto' && dataSource && typeof dataSource === 'function') {
        const list = await dataSource(this.currentPage, pageSize);
        this.loading = false;
        if (list.length < pageSize) this.nodata = true;
        const listData = this.listData.concat(list);
        this.listData = listData;
        this.dataLength = listData.length;
        this.refreshing = false;
        this.forceUpdate();
        callback && callback();
      }
    } catch (e) {
      console.log('[loadNext e] ', e);
      // 此处增加请求失败后逻辑
      this.loading = false;
      this.refreshing = false;
      callback && callback();
    }
  }

  renderEmpty(data: T[]) {
    const { nodata, loading } = this;
    return !loading && nodata && data.length === 0 ? (
      <View>
        <ListEmpty text={this.props.emptyText} />
      </View>
    ) : (
      <View />
    );
  }

  // renderFooterInfo(nodata: boolean, loading: boolean) {
  //   const { footerMarginTop } = this.props;
  //   return loading || nodata ? (
  //     <View
  //       className='M-p-v-b-15'
  //       style={{
  //         marginTop: px(typeof footerMarginTop === 'number' ? footerMarginTop : 0),
  //       }}
  //     >
  //       {!nodata && loading && (
  //         <View className='M-horizontal-center'>
  //           <Text className='M-f-s-12 M-f-c-666'>正在加载</Text>
  //         </View>
  //       )}
  //       {nodata && !loading && (
  //         <View className='M-horizontal-center'>
  //           <Text className='M-f-s-12 M-f-c-666'>没有更多了</Text>
  //         </View>
  //       )}
  //     </View>
  //   ) : (
  //     <View />
  //   );
  // }

  getKeyExtractor = (item, index) => {
    const { keyExtractor } = this.props;
    if (typeof keyExtractor === 'string' && item[keyExtractor]) {
      return String(keyExtractor);
    }
    if (typeof keyExtractor === 'function') {
      return keyExtractor(item, index);
    }
    return String(index);
  };

  render() {
    if (!this.isLoad) return null;
    // @ts-ignore
    const { listData, nodata, loading } = this;
    const { mode } = this.props;
    return mode === 'scroll' ? (
      <View className='cs-autolist M-flex-item M-flexbox-vertical'>
        <ScrollView
          onScroll={this.props.onScroll}
          // onRefresherRefresh={this.onPullRefresh}
          className='M-flex-item'
          scrollY
          onScrollToLower={this.onEndReached}
        >
          {this.renderList()}
        </ScrollView>
        {/* Selection */}
        {/* {this.props.selection && (
          <SelectorBar
            isOpenSelection={this.selection}
            num={Object.keys(this.selectMap).length}
            onClickOpen={() => this.toggleSelection.bind(true)}
            onClickClose={() => this.toggleSelection.bind(false)}
            handleButton={this.props.selectionHandleButton}
          />
        )} */}
      </View>
    ) : (
      <View>{this.renderList()}</View>
    );
  }

  private renderItem = (item: T, index: number) => {
    const { selectionKey, renderItem = () => <View /> } = this.props;
    const { selection } = this;
    const children = renderItem(item, index, this.currentPage);
    return selection && selectionKey ? (
      <View key={this.getKeyExtractor(item, index)} {...this.props.itemViewProps}>
        <View className='M-flexbox-horizontal' style={{ position: 'relative' }}>
          <View className='M-center-all M-p-l-5 M-p-r-10' style={{ position: 'absolute', left: 0, top: 0, zIndex: 10 }}>
            {/* <RadioCheckboxWidget active={!!this.selectMap[item[selectionKey] as any]} type={selectionType} onClick={this.onClickRadio.bind(this, item)} /> */}
          </View>
          <View className='M-flex-item'>{children}</View>
        </View>
      </View>
    ) : (
      <View key={this.getKeyExtractor(item, index)} {...this.props.itemViewProps}>
        {children}
      </View>
    );
  };

  private renderList = () => {
    const { nodata, loading } = this;
    const { pageMode = 'auto', gutter, emptyHideHeader = false, footerMarginTop, dataSource } = this.props;
    const data = toJS(dataSource && typeof dataSource === 'object' ? dataSource : this.listData);
    const paddingHorizontal = px(gutter ? (typeof gutter === 'number' ? gutter : 0) * 2 : 0);
    const paddingVertical = px(gutter ? (typeof gutter === 'number' ? gutter : 0) * 2 : 0);
    return (
      // @ts-ignore
      <React.Fragment>
        {/* 渲染头部 */}
        {!emptyHideHeader || !nodata || data.length > 0 ? this.props.renderHeader : null}
        {/* 空状态 */}
        {this.renderEmpty(data)}
        {/* List */}
        <View
          style={
            gutter
              ? {
                  padding: paddingHorizontal,
                  paddingRight: paddingHorizontal,
                  paddingTop: paddingVertical,
                  paddingBottom: paddingVertical,
                }
              : undefined
          }
        >
          {data.length > 0 && data.slice().map(this.renderItem)}
        </View>
        {/* Footer */}
        {pageMode === 'auto' && (
          <ListTip
            nodata={nodata && data.length > 0}
            loading={loading}
            style={{
              paddingTop: px(26),
              paddingBottom: px(26),
              marginTop: px(typeof footerMarginTop === 'number' ? footerMarginTop : 0),
            }}
          />
        )}
      </React.Fragment>
    );
  };
}

export default ListView;
