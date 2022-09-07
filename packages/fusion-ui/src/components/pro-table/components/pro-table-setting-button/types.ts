export interface ProTableSettingItem {
  /**
   * 排序排名，顺序从小到大
   */
  sortRank?: number;
  /**
   * 是否隐藏
   * @default false
   */
  hidden?: boolean;
  /**
   * 拖拽宽度
   */
  width?: number | string;
  /**
   * 锁列
   */
  lock?: boolean | string;
}

export type ProTableSettingActionType = 'init' | 'input' | 'resize';

export interface ProTableSettingMenuItem {
  children?: ProTableSettingMenuItem[];
  title?: React.ReactNode;
  defaultSortRank?: number;
  defaultLock?: boolean | string;
  id: string;
}
