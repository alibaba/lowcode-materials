import React from 'react';
import { Table as OriginalTable } from 'antd';

const Table = (props: any) => {
  const columns = (props.columns || []).filter((item: any) => !item?.hidden);

  return <OriginalTable {...props} columns={columns} />;
};

export default Table;
