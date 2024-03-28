import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@alifd/next';

import { ProTableCell, ProTableCellProps } from './pro-table-cell';

export interface ProTableTreeCellProps extends ProTableCellProps {
  indent: number;
}
const KEYCODE = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGE_UP: 33,
  PAGE_DOWN: 34,

  // version 0.x
  ESCAPE: 27,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,

  // MacOS
  CONTROL: 17,
  OPTION: 18,
  CMD: 91,
  COMMAND: 91,
  DELETE: 8,
};

export class ProTableTreeCell extends React.Component<ProTableTreeCellProps> {
  static defaultProps = {
    component: 'td',
    indent: 20,
  };

  static contextTypes = {
    openTreeRowKeys: PropTypes.array,
    indent: PropTypes.number,
    onTreeNodeClick: PropTypes.func,
    isTree: PropTypes.bool,
    rowSelection: PropTypes.object,
  };

  onTreeNodeClick = (record, e) => {
    e.stopPropagation();
    this.context.onTreeNodeClick(record);
  };

  expandedKeydown = (record, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.keyCode === KEYCODE.ENTER) {
      this.onTreeNodeClick(record, e);
    }
  };

  render() {
    const { colIndex, record, prefix, primaryKey, locale, rtl, children } = this.props;
    const { openTreeRowKeys: openRowKeys, indent, isTree, rowSelection } = this.context;
    const treeArrowNodeIndex = rowSelection ? 1 : 0;
    let firstCellStyle;
    let treeArrowNode;
    if (colIndex === treeArrowNodeIndex) {
      let treeArrowType;
      if (isTree) {
        const paddingType = rtl ? 'paddingRight' : 'paddingLeft';
        firstCellStyle = {
          [paddingType]: indent * (record.__level + 1),
        };
        treeArrowNode = <Icon size="xs" rtl={rtl} className={`${prefix}table-tree-placeholder`} />;
        if (record.children && record.children.length) {
          const hasExpanded = openRowKeys.indexOf(record[primaryKey]) > -1;

          treeArrowType = hasExpanded ? 'arrow-down' : 'arrow-right';

          treeArrowNode = (
            <Icon
              className={`${prefix}table-tree-arrow`}
              type={treeArrowType}
              size="xs"
              rtl={rtl}
              onClick={(e) => this.onTreeNodeClick(record, e)}
              onKeyDown={(e) => this.expandedKeydown(record, e)}
              role="button"
              tabIndex={0}
              aria-expanded={hasExpanded}
              aria-label={hasExpanded ? locale.expanded : locale.folded}
            />
          );
        }
      }
    }
    return (
      <ProTableCell {...this.props} innerStyle={firstCellStyle} isIconLeft={!!treeArrowNode}>
        {children}
        {treeArrowNode}
      </ProTableCell>
    );
  }
}
