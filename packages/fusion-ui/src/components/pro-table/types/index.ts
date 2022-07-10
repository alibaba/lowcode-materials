import * as React from 'react';
import {
  ColumnProps,
  GroupFooterProps,
  GroupHeaderProps,
  TableProps,
} from '@alifd/next/types/table';
import { ButtonGroupProps } from '@/components/button-group';
// import { PaginationProps } from '@/pagination';
import { ProTableSlotsOptions } from '../components/pro-table-slot';
import {
  ProTableSettingActionType,
  ProTableSettingItem,
} from '../components/pro-table-setting-button/types';
import { CheckboxProps } from '@alifd/next/types/checkbox';
import { RadioProps } from '@alifd/next/types/radio';
import { AsyncDataSource, ColorType } from '@/types';
import { ProTableButtonGroupProps } from '../components/pro-table-button-group/index';
import { PayloadButtonProps } from '../components/pro-table-button-group/payload-button';

/**
 * 全局和列都支持的配置
 * 设置优先级: 列配置 > 列类型提供值 > 表格
 */
export interface ProTableCellCommonProps {
  /**
   * 单元格没值时缺省值
   * 设置优先级: 列配置 > 列类型提供值 > 表格
   * @default ''
   */
  cellDefault?: React.ReactNode;
  /**
   * 单元格tooltip显示逻辑
   * 设置优先级: 列配置 > 列类型提供值 > 表格
   * - ellipsis 在显示省略号时显示tooltip
   * - none 不显示tooltip
   * @default 'none'
   */
  cellTooltipMode?: 'ellipsis' | 'none';
}

export interface ProTableRowInstance {
  /** 当前行主键值 */
  rowKey?: ProTableRowKey;
  /** 当前行下标 */
  rowIndex: number;
  /** 当前行数据 */
  rowRecord: ProTableRowRecord;
}

export interface ProTablePaginationInstance {
  /** 表格总行数 */
  total: number;
  /** 当前页数 */
  current: number;
  /** 当前每页行数 */
  pageSize: number;
  /** 设置当前页数 */
  setCurrent: (page: number) => void;
  /** 设置每页行数 */
  setPageSize: (pageSize: number) => void;
}
export interface ProTableInstance {
  rowSelection: ProTableRowSelectionInstance;
  // pagination: ProTablePaginationInstance;
}
export interface ProTableColumnProps extends ProTableCellCommonProps, Omit<ColumnProps, 'filters'> {
  /**
   * 列的唯一表示，当不存在是默认取dataIndex的值
   */
  key?: string;
  /**
   * 当设定 group, 表明此为父子表头的父表头, 值会作为父表头标题存在
   */
  group?: React.ReactNode;

  // totalCell?: ColumnProps['cell'];
  /**
   * 传入ProTable预置类型 或是 通过columnFormatter的扩展类型
   * https://yuque.antfin-inc.com/docs/share/34a98885-3630-4a3f-921e-f29366b586b7
   */
  formatType?:
    | 'id'
    | 'number'
    | 'money'
    | 'currency'
    | 'date'
    | 'phone'
    | 'ou'
    | 'bankCard'
    | 'percent'
    | 'progress'
    | 'link'
    | 'tag'
    | 'textTag'
    | 'files'
    | 'employee'
    | string;
  /** 格式化参数 */
  formatOptions?: string[];
  /**
   * 值转换，如果是字典转换走dataSource
   */
  formatValue?: (value: unknown, rowIndex: number, record: unknown) => unknown;
  /**
   * 回调、对象映射得到单元格的颜色
   */
  formatColor?: ColorType | ((value: unknown) => ColorType) | Record<string, ColorType>;
  /**
   * 单元格点击事件
   */
  onCellClick?: (value: unknown, rowIndex: number, record: unknown) => void;
  /**
   * 列dataSource，当前仅text/currency/textTag/tag类型的formatter支持
   */
  dataSource?: AsyncDataSource;

  /**
   * 帮助信息
   */
  explanation?: string;
  /**
   * 设定 group 后, children作为子表头的值存在
   */
  children?: ProTableColumnProps[];
  /**
   * 是否支持关键字搜索
   * @default false
   */
  searchable?: boolean;

  /**
   * 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`
   */
  filters?: AsyncDataSource;

  /**
   * 关键字和筛选是否是即时生效
   * @default true
   */
  isImmediate?: boolean;
  cell?:
    | React.ReactNode
    | ((value: unknown, rowIndex: number, record: unknown, context: any) => React.ReactNode);
}

export interface SearchParam {
  keywords: string;
  visible: boolean;
}
export interface FilterParam {
  selectedKeys: string[];
  visible: boolean;
}

export type SortValue = 'desc' | 'asc' | 'default';
export interface ProTableColumnFilterValue {
  keywords?: string;
  sort?: SortValue;
  selectedKeys?: string[];
}
export type ProTableColumnsFilterValue = Record<string, ProTableColumnFilterValue>;

export type ProTableRowRecord = Record<string, any>;
export type ProTableRowKey = string;
export interface ProTableRowSelectionInstance {
  /** 选中/反选的key */
  readonly selectedRowKeys: ProTableRowKey[];
  /** 是否是反选模式 */
  readonly reverseSelection: boolean;
  /** 当前页选中所有的key */
  readonly currentPageSelectedRowKeys: ProTableRowKey[];
  /** 当前页所有的key */
  readonly currentPageRowKeys: ProTableRowKey[];
  /** 当前是否有选中的 */
  readonly hasSelectedRows: () => boolean;
  /** 选择/取消选择所有页所有项 */
  readonly selectAllPages: (selected: boolean) => void;
  /** 选择/取消选择当前页所有项 */
  readonly selectCurrentPage: (selected: boolean) => void;
  /** 选择/取消选择多项 */
  readonly selectRows: (selected: boolean, rowKeys: ProTableRowKey[]) => void;
  /** 判断当前行是否是选中状态 */
  readonly isSelectedRowKey: (rowKey: ProTableRowKey) => boolean;
  /** 获取行数据key */
  readonly getRowKeyByRecord: (rowRecord: ProTableRowRecord) => ProTableRowKey;
}
export type ProTableRowSelectionType = 'SELECTION_ALL' | 'SELECTION_NONE';

export type ProTableRowPayload = ProTableRowInstance;
export type ProTablePayload = ProTableInstance;

interface ActionColumnButton
  extends Omit<PayloadButtonProps<ProTableRowPayload>, 'disabled' | 'hidden'> {
  key?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean | ((payload: ProTableRowPayload) => boolean) | string;
  /**
   * 是否隐藏
   * @default false
   */
  hidden?: boolean | ((payload: ProTableRowPayload) => boolean) | string;
}

export interface ProTableActionColumnButtons
  extends Omit<ProTableButtonGroupProps<ProTableRowPayload>, 'dataSource'> {
  dataSource: ActionColumnButton[];
}
export type ProTableActionBarButtons = ProTableButtonGroupProps<ProTablePayload>;
export interface ProTableBaseProps
  extends ProTableCellCommonProps,
    Omit<TableProps, 'columns' | 'onSort' | 'rowSelection'> {
  /**
   * 指定列唯一的标识，一般不需要设置
   * @default key
   */
  columnKey?: 'dataIndex' | 'key';

  /**
   * 表格列设置
   */
  columns?: ProTableColumnProps[];

  /**
   * 可以调整大小
   */
  resizable?: boolean;

  /**
   * 排序模式是单列还是多列
   * @default 'multiple'
   */
  sortMode?: 'single' | 'multiple';
  /**
   * 排序值
   */
  sort?: Record<string, SortValue>;
  /**
   * 点击列排序触发的事件
   */
  onSort?: (dataIndex: string, order: SortValue, sort: Record<string, SortValue>) => void;
  searchParams?: Record<string, SearchParam>;
  /**
   * 点击列搜索触发的事件
   */
  onSearch?: (searchParams: Record<string, SearchParam>) => void;
  filterParams?: Record<string, FilterParam>;
  /**
   * 点击列排序触发的事件
   */
  onFilter?: (filterParams: Record<string, FilterParam>) => void;
  columnFilters?: ProTableColumnsFilterValue;
  onColumnsFilterChange?: (
    newValue: ProTableColumnsFilterValue,
    oldValue: ProTableColumnsFilterValue,
    changedColumnFilterValue?: ProTableColumnFilterValue,
    changedColumnDataIndex?: string,
  ) => void;

  groupHeader?: React.ReactNode | GroupHeaderProps;
  groupFooter?: React.ReactNode | GroupFooterProps;
  /**
   * 是否设置 Table 为 Table.stickyLock
   */
  stickyLock?: boolean;
  /**
   * 序号列
   */
  indexColumn?: boolean;
  /**
   * 序号列props
   */
  indexColumnProps?: Partial<ColumnProps>;
  /**
   * 操作列配置覆盖
   */
  actionColumnProps?: Partial<ColumnProps>;
  /**
   * 操作列按钮组
   */
  actionColumnButtons?: ProTableActionColumnButtons;
  /**
   * 操作列按钮配置列表
   * @deprecated 使用 actionColumnButtons
   */
  actionColumn?: ActionColumnButton[];
  /**
   * 操作列按钮组的props
   * @deprecated 使用 actionColumnButtons
   */
  actionButtonGroupProps?: ButtonGroupProps;
  /**
   * 自定义列操作
   * @deprecated 使用 actionColumnButtons
   */
  actionColumnPredication?: (payload: {
    actionColumn?: any[];
    index: number;
    record: any;
  }) => ActionColumnButton[];
  /**
   * 操作列点击触发事件
   * @deprecated 使用 actionColumnButtons
   */
  onActionColumnClick?: (payload: {
    currentActionKey: string;
    selectedRowKey: string;
    record: any;
  }) => void;
  /**
   * 总计数据源, 传入后显示总计行, 统计行需要
   */
  totalDataSource?: Record<string, React.ReactNode>;

  /**
   * 是否启用选择模式
   * https://yuque.antfin-inc.com/docs/share/34ec077c-14d5-4408-bfd4-d2827bfd87ec
   */
  rowSelection?: {
    /**
     * 选择实例
     * https://yuque.antfin-inc.com/docs/share/34ec077c-14d5-4408-bfd4-d2827bfd87ec
     */
    ref?: React.MutableRefObject<ProTableRowSelectionInstance>;
    // columnProps?: () => any;
    // titleAddons?: () => any;
    /**
     * 获取selection的默认属性
     * @param record 当前操作行数据
     * @param index 当前行下标
     */
    getProps?: (record: ProTableRowRecord, index: number) => CheckboxProps | RadioProps;
    /**
     * 选择改变的时候触发的事件，
     * @param selectedRowKeys 选中/反选的keys
     * @param reverseSelection 是否反选模式
     * @param records 只会包含当前dataSource的数据，很可能会小于selectedRowKeys的长度。
     */
    onChange?: (
      selectedRowKeys: ProTableRowKey[],
      reverseSelection: boolean,
      records: ProTableRowRecord[],
    ) => void;
    /**
     * 用户手动选择/取消选择某行的回调
     * @param selected 选择/取消选择
     * @param record 当前操作行数据
     * @param records 只会包含当前dataSource的数据
     */
    onSelect?: (selected: boolean, record: ProTableRowRecord, records: ProTableRowRecord[]) => void;
    /**
     * 用户手动选择/取消选择本页所有行的回调
     * @param selected 选择/取消选择
     * @param records 只会包含当前dataSource的数据。
     */
    onSelectAll?: (selected: boolean, records: ProTableRowRecord[]) => void;
    /**
     * 用户手动选择/取消选择本页所有行的回调
     * @param selected 选择/取消选择
     * @param records 只会包含当前dataSource的数据。
     */
    onSelectAllPages?: (selected: boolean, records: ProTableRowRecord[]) => void;
    /**
     * 选择selection的模式, 可选值为single, multiple
     * @default 'multiple'
     */
    mode?: 'single' | 'multiple';
    /**
     * 菜单配置项
     * - SELECTION_ALL 开启全选所有页
     * - SELECTION_NONE 开启取消选择所有项
     * @default ['SELECTION_ALL', 'SELECTION_NONE']
     */
    selections?: Array<'SELECTION_ALL' | 'SELECTION_NONE'>;
    /**
     * 选中的值
     */
    selectedRowKeys?: ProTableRowKey[];
    /**
     * 默认选中的值
     */
    defaultSelectedRowKeys?: ProTableRowKey[];
    /**
     * 是否是反向选择
     * @default false
     */
    reverseSelection?: boolean;
    /**
     * 默认反向选择
     * @default false
     */
    defaultReverseSelection?: boolean;

    /**
     * 是否可以跨页选择，全选所有页强制开启跨页
     * @default true
     */
    crossPageSelection?: boolean;

    /**
     * 是否隐藏 tooltip
     * @default false
     */
    hideTooltip?: boolean;
    /**
     * 列头标题CheckBox样式覆盖
     */
    titleProps?: () => CheckboxProps;
  };

  // /**
  //  * 单元格内容过长配置
  //  * @default 'ellipsis'
  //  */
  // cellOverflow?: 'ellipsis' | 'warp' | 'visible';
}

type ProTableColumnsSetting = Record<string, ProTableSettingItem>;
export type ProTableSettingButtonType = 'compact' | 'zebra' | 'fullscreen' | 'setting';
export interface ProTableProps
  extends ProTableSlotsOptions,
    Omit<ProTableBaseProps, 'settingProps'> {
  /**
   * 表格操作栏按钮
   */
  actionBarButtons?: ProTableActionBarButtons;
  /**
   * 表格设置按钮
   * @default false
   */
  settingButtons?: ProTableSettingButtonType[] | boolean;
  /**
   * 分页设置
   */
  // paginationProps?: PaginationProps;
  /**
   * 列设置
   */
  columnsSetting?: ProTableColumnsSetting;
  /** 默认列设置 */
  defaultColumnsSetting?: ProTableColumnsSetting;
  /**
   * 设置改变时的回调
   */
  onColumnsSettingChange?: (
    newSetting: ProTableColumnsSetting,
    actionType: ProTableSettingActionType,
  ) => void;
  /**
   * 全屏状态变化回调
   */
  onFullscreenStateChange?: (fullscreenState: boolean) => void;

  /**
   * 是否是子母表的子表
   * @default false
   */
  isExpandedChild?: boolean;

  paginationProps?: Record<string, any>;
}
