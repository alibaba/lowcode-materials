import * as React from 'react';
import classnames from 'classnames';
import { ProTableColumnProps, ProTableCellCommonProps } from '@/components/pro-table/types';
import { CellLabel } from './cell-label';
import { getColorWithFormat } from '../pro-table-cells/utils';

import { obj, pickAttrs } from '@/utils/util';

export interface ProTableCellProps extends ProTableCellCommonProps, ProTableColumnProps {
  record: any;
  value: any;
  isIconLeft: boolean;
  colIndex: number;
  rowIndex: number;
  __colIndex: number | string; // 经过锁列调整后的列索引，lock right的列会从非0开始
  context: any;
  component: 'td' | 'th' | 'div';
  innerStyle: object;
  type: 'header' | 'body';
  rowSpan?: number;
  getCellDomRef?: string;
  primaryKey: string;
  dataKey: string;
  __normalized: any;
  filterMenuProps: any;
  filterProps: any;
  expandedIndexSimulate: any;
  wordBreak: any;
  editCell: any;
}

export class ProTableCell extends React.Component<ProTableCellProps> {
  static defaultProps = {
    component: 'td',
    type: 'body',
    isIconLeft: false,
    cell: (value: any) => value,
    prefix: 'fusion-ui-',
  };

  shouldComponentUpdate(nextProps: ProTableCellProps) {
    if (nextProps.pure) {
      const isEqual = obj.shallowEqual(this.props, nextProps);
      return !isEqual;
    }
    return true;
  }

  render() {
    const {
      prefix,
      className,
      cell,
      value: originValue,
      resizable,
      asyncResizable,
      colIndex,
      rowIndex,
      __colIndex,
      record,
      context,
      align,
      style = {},
      formatValue,
      component: Tag,
      children,
      title,
      width,
      innerStyle,
      primaryKey,
      __normalized,
      filterMode,
      filterMenuProps,
      filterProps,
      filters,
      sortable,
      sortDirections,
      lock,
      pure,
      locale,
      expandedIndexSimulate,
      rtl,
      isIconLeft,
      type,
      htmlTitle,
      wordBreak,
      editCell,
      dataKey,
      getCellDomRef,
      onCellClick,
      formatColor,
      cellTooltipMode,
      cellDefault,
      ...others
    } = this.props;
    const tagStyle = { ...style };
    const isDataRow = rowIndex !== undefined;
    const value =
      formatValue && isDataRow ? formatValue(originValue, rowIndex, record) : originValue;
    const cellProps = { value, index: rowIndex, record, context };
    let content = cell;
    const editContent = editCell;
    if (record?.editMode && editContent) {
      content = editContent(value, rowIndex, record, context, dataKey);
    } else if (React.isValidElement(content)) {
      content = React.cloneElement(content, cellProps);
    } else if (typeof content === 'function') {
      content = content(value, rowIndex, record, context);
    }
    if (align) {
      tagStyle.textAlign = align;
      if (rtl) {
        if (align === 'left') {
          tagStyle.textAlign = 'right';
        } else if (align === 'right') {
          tagStyle.textAlign = 'left';
        }
      }
    }
    const cls = classnames({
      [`${prefix}table-cell`]: true,
      [`${prefix}table-word-break-${wordBreak}`]: !!wordBreak,
      [className]: className,
    });
    const contentWithTooltip = isDataRow ? (
      <CellLabel
        onClick={onCellClick && (() => onCellClick(value, rowIndex, record))}
        color={formatColor && getColorWithFormat(value, formatColor)}
        toolTipMode={cellTooltipMode}
      >
        {content || cellDefault}
      </CellLabel>
    ) : (
      content
    );

    return (
      <Tag {...pickAttrs(others)} className={cls} style={tagStyle} role="gridcell">
        <div
          className={`${prefix}table-cell-wrapper`}
          ref={getCellDomRef}
          style={innerStyle}
          title={htmlTitle}
          data-next-table-col={__colIndex}
          data-next-table-row={rowIndex}
        >
          {isIconLeft ? children : contentWithTooltip}
          {isIconLeft ? contentWithTooltip : children}
        </div>
      </Tag>
    );
  }
}
