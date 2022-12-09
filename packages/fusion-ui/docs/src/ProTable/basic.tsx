import * as React from 'react';
import { ProTable, useProTable } from '@alifd/fusion-ui';
import { fetchPaginationList } from './service';
import { Dialog } from '@alifd/next';

const columns = [
  {
    title: '公司',
    dataIndex: 'company',
    width: 160,
  },
  {
    title: '完成进度',
    dataIndex: 'percent',
    formatType: 'percent',
  },
];
const actionColumnButtons = {
  dataSource: [
    { children: '查看' },
    {
      children: '编辑',
      disabled: (payload) => payload.rowRecord.percent > 0.5,
    },
    {
      children: '删除',
      onClick: (e, payload) => {
        Dialog.confirm({
          title: `是否删除${payload.rowRecord.company}`,
        });
      },
    },
  ],
};

export default () => {
  const { tableProps } = useProTable(fetchPaginationList);

  return <ProTable columns={columns} {...tableProps} actionColumnButtons={actionColumnButtons} />;
};
