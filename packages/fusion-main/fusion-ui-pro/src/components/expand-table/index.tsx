import * as React from 'react';
import { AsyncDataSource } from '@/types';
import { ProTableProps, ProTable } from '@/components/pro-table';

export interface ExpandTableDataProps {
  childTableProps: AsyncDataSource;
}

export interface ExpandTableProps extends ProTableProps {
  /**
   * 表格数据源
   */
  dataSource?: ExpandTableDataProps[];
}

/**
 * 子母表
 */
export class ExpandTable extends React.Component<ExpandTableProps> {
  static displayName = 'ExpandTable';

  static defaultProps = {
    showActionBar: true,
    settingButtons: false,
  };

  render() {
    const { dataSource, children, ...otherProps } = this.props;
    const { primaryKey } = otherProps;
    if (!dataSource) return null;
    const parsedDataSource = dataSource.map((item) => {
      return item;
    });
    const expandedRowRender = (record: any) => {
      const { childTableProps } = record;

      return (
        <div className="fusion-ui-expand-table-child">
          <ProTable {...childTableProps} key={record[primaryKey || 'id']} size="small" />
        </div>
      );
    };

    return (
      <ProTable expandedRowRender={expandedRowRender} dataSource={parsedDataSource} {...otherProps}>
        {children}
      </ProTable>
    );
  }
}
