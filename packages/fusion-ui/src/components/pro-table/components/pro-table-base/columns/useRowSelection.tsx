import * as React from 'react';
import { Checkbox } from '@alifd/next';
import { CustomIcon } from '@/components/toggle-icon';
import { MenuButton } from '@/components/menu-button';
import {
  ProTableBaseProps,
  ProTableRowKey,
  ProTableRowRecord,
  ProTableRowSelectionType,
} from '../../../types';
import numvert from 'numvert';
import is from '@sindresorhus/is';
import { emptyFn } from '@/utils/constants';
import { ProTableContext } from '../../../contexts/pro-table-context';
import ReactDOM from 'react-dom';
import { ProTableRowSelectionContext } from '../../../contexts/pro-table-row-selection-context';

export const isSelectedAllPages = (selectedRowKeys: ProTableRowKey[], reverseSelection: boolean) =>
  reverseSelection && selectedRowKeys.length === 0;

export const hasSelectedRows = (selectedRowKeys: ProTableRowKey[], reverseSelection: boolean) =>
  reverseSelection || selectedRowKeys.length > 0;

/**
 * 行选择逻辑
 * - 支持选择当前页所有行
 * - 支持跨页选择
 * - 支持选择所有页
 */
export const useRowSelection = (
  originRowSelection: ProTableBaseProps['rowSelection'],
  dataSource: any[] = [],
) => {
  const hasRowSelection = !!originRowSelection;
  const rowSelection = hasRowSelection ? originRowSelection : {};
  const { tableBeforeContainer } = React.useContext(ProTableContext);
  const instance = React.useContext(ProTableRowSelectionContext);
  const tooltip = useProTableSelectionTooltip(
    rowSelection.crossPageSelection === false
      ? instance.currentPageSelectedRowKeys.length
      : instance.selectedRowKeys.length,
    instance.reverseSelection,
  );
  if (!hasRowSelection) {
    return undefined;
  }

  if (rowSelection.ref) {
    rowSelection.ref.current = instance;
  }

  const {
    selectAllPages,
    selectCurrentPage,
    currentPageSelectedRowKeys,
    reverseSelection,
    selectRows,
    selectedRowKeys,
    getRowKeyByRecord,
    currentPageRowKeys,
  } = instance;
  const {
    onSelect = emptyFn,
    onSelectAll = emptyFn,
    selections = ['SELECTION_ALL', 'SELECTION_NONE'],
    titleProps,
  } = rowSelection;
  const isMultiple = rowSelection.mode !== 'single';
  const hasMenu = isMultiple && is.array(selections) && selections.length > 0;

  return {
    mode: rowSelection.mode,
    getProps: rowSelection.getProps,
    selectedRowKeys: currentPageSelectedRowKeys,
    onSelect: (selected: boolean, record: ProTableRowRecord, records: ProTableRowRecord[]) => {
      selectRows(selected, [getRowKeyByRecord(record)]);
      onSelect(selected, record, records);
    },
    columnProps: () => ({
      align: 'left',
      width: hasMenu ? 70 : 50,
    }),
    titleProps: () => ({
      style: {
        display: 'none',
      },
    }),
    titleAddons: !isMultiple
      ? undefined
      : () => {
          const selectionTexts: Record<ProTableRowSelectionType, string> = {
            SELECTION_ALL: '全选所有',
            SELECTION_NONE: '清空所有',
          };
          const globalChecked = currentPageSelectedRowKeys.length > 0;
          const globalCheckedIndeterminate =
            globalChecked &&
            (reverseSelection
              ? selectedRowKeys.length > 0
              : currentPageSelectedRowKeys.length < currentPageRowKeys.length);
          const checkboxProps = titleProps ? titleProps() : {};
          return (
            <>
              {!rowSelection.hideTooltip &&
                tableBeforeContainer.current &&
                tooltip &&
                ReactDOM.createPortal(
                  <div className="fusion-ui-pro-table-selection">{tooltip}</div>,
                  tableBeforeContainer.current,
                )}
              <div className="fusion-ui-pro-table-selection-checkbox">
                <Checkbox
                  checked={globalChecked}
                  indeterminate={globalCheckedIndeterminate}
                  onChange={(selected) => {
                    onSelectAll(selected, dataSource);
                    selectCurrentPage(selected);
                  }}
                  {...checkboxProps}
                />
                {hasMenu && (
                  <MenuButton
                    label={
                      <CustomIcon
                        type="triangle-down"
                        size="xs"
                        className="fusion-ui-pro-table-selection-checkbox-icon"
                      />
                    }
                    text
                    onItemClick={(key: ProTableRowSelectionType) => {
                      if (key === 'SELECTION_ALL') {
                        selectAllPages(true);
                      } else if (key === 'SELECTION_NONE') {
                        selectAllPages(false);
                      }
                    }}
                    popupTriggerType="hover"
                    autoWidth={false}
                    menuProps={{
                      isSelectIconRight: false,
                    }}
                    dataSource={selections.map((vo) => ({ key: vo, label: selectionTexts[vo] }))}
                  />
                )}
              </div>
            </>
          );
        },
    // ...rowSelection,
  };
};

const renders = {
  selected: (amount: number) => (
    <>
      已选中
      <span className="fusion-ui-pro-table-selection-number">{numvert(amount).format('0,0')}</span>
      条
    </>
  ),
  selectedWithPageCount: (amount: number, pageCount: number) => (
    <>
      已选中<span className="fusion-ui-pro-table-selection-number">{pageCount}</span>页, 共
      <span className="fusion-ui-pro-table-selection-number">{numvert(amount).format('0,0')}</span>
      条
    </>
  ),

  allPageUnselected: (amount: number) => (
    <>
      已选中所有页，反选
      <span className="fusion-ui-pro-table-selection-number">{numvert(amount).format('0,0')}</span>
      条
    </>
  ),

  allPageSelectedAll: () => <>已选中所有项</>,
};
const useProTableSelectionTooltip = (selecteAmount: number, reverseSelection: boolean) => {
  const { total, pageSize } = React.useContext(ProTableContext);

  return React.useMemo(() => {
    if (reverseSelection) {
      if (is.number(total)) {
        if (total === 0) {
          return undefined;
        }
        const pageCount =
          is.number(pageSize) && is.number(total) && pageSize !== 0
            ? Math.ceil(total / pageSize)
            : undefined;
        return is.number(pageCount)
          ? renders.selectedWithPageCount(total - selecteAmount, pageCount)
          : renders.selected(total - selecteAmount);
      }
      if (selecteAmount > 0) {
        return renders.allPageUnselected(selecteAmount);
      }
      return renders.allPageSelectedAll();
    }
    if (selecteAmount > 0) {
      return renders.selected(selecteAmount);
    }
    return undefined;
  }, [reverseSelection, selecteAmount, total, pageSize]);
};
