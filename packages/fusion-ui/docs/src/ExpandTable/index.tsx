import React from 'react';
import { ExpandTable } from '@alifd/fusion-ui';

const props = {
  dataSource: [
    {
      id: 'id-2f5DdE2b-0',
      date: '2013-06-12',
      percent: 1.862,
      documentAmount: 2022,
      currency: 'CNY',
      company: '支付宝科技有限公司',
      childTableProps: {
        dataSource: [],
        columns: [
          {
            title: '公司',
            dataIndex: 'company',
            width: 160,
            formatType: 'link',
            searchable: true,
          },
          {
            title: '单据金额',
            dataIndex: 'documentAmount',
            formatType: 'money',
          },
          {
            title: '币种',
            dataIndex: 'currency',
            formatType: 'currency',
            filters: [
              {
                label: 'CNY',
                value: 'CNY',
              },
              {
                label: 'USD',
                value: 'USD',
              },
              {
                label: 'JPY',
                value: 'JPY',
              },
              {
                label: 'HKD',
                value: 'HKD',
              },
            ],
            filterMode: 'multiple',
            explanation: '提示信息',
            width: 110,
          },
          {
            title: '完成进度',
            dataIndex: 'percent',
            formatType: 'progress',
          },
          {
            title: '到账日期',
            dataIndex: 'date',
            formatType: 'date',
          },
        ],
      },
    },
    {
      id: 'id-2f5DdE2b-1',
      date: '2013-06-12',
      percent: 1.862,
      documentAmount: 2022,
      currency: 'CNY',
      company: '支付宝科技有限公司',
      childTableProps: {
        dataSource: [],
        columns: [
          {
            title: '公司',
            dataIndex: 'company',
            width: 160,
            formatType: 'link',
            searchable: true,
          },
          {
            title: '单据金额',
            dataIndex: 'documentAmount',
            formatType: 'money',
          },
          {
            title: '币种',
            dataIndex: 'currency',
            formatType: 'currency',
            filters: [
              {
                label: 'CNY',
                value: 'CNY',
              },
              {
                label: 'USD',
                value: 'USD',
              },
              {
                label: 'JPY',
                value: 'JPY',
              },
              {
                label: 'HKD',
                value: 'HKD',
              },
            ],
            filterMode: 'multiple',
            explanation: '提示信息',
            width: 110,
          },
          {
            title: '完成进度',
            dataIndex: 'percent',
            formatType: 'progress',
          },
          {
            title: '到账日期',
            dataIndex: 'date',
            formatType: 'date',
          },
        ],
      },
    },
    {
      id: 'id-2f5DdE2b-2',
      date: '2013-06-12',
      percent: 1.862,
      documentAmount: 2022,
      currency: 'CNY',
      company: '支付宝科技有限公司',
      childTableProps: {
        dataSource: [],
        columns: [
          {
            title: '公司',
            dataIndex: 'company',
            width: 160,
            formatType: 'link',
            searchable: true,
          },
          {
            title: '单据金额',
            dataIndex: 'documentAmount',
            formatType: 'money',
          },
          {
            title: '币种',
            dataIndex: 'currency',
            formatType: 'currency',
            filters: [
              {
                label: 'CNY',
                value: 'CNY',
              },
              {
                label: 'USD',
                value: 'USD',
              },
              {
                label: 'JPY',
                value: 'JPY',
              },
              {
                label: 'HKD',
                value: 'HKD',
              },
            ],
            filterMode: 'multiple',
            explanation: '提示信息',
            width: 110,
          },
          {
            title: '完成进度',
            dataIndex: 'percent',
            formatType: 'progress',
          },
          {
            title: '到账日期',
            dataIndex: 'date',
            formatType: 'date',
          },
        ],
      },
    },
  ],
  actionColumnButtons: {
    dataSource: [
      {
        children: '查看',
        type: 'primary',
      },
      {
        children: '编辑',
        type: 'primary',
        disabled: true,
      },
      {
        children: '删除',
        type: 'primary',
      },
    ],
    text: true,
    visibleButtonCount: 3,
  },
  actionBarButtons: {
    dataSource: [
      {
        type: 'primary',
        children: '操作一',
      },
      {
        type: 'normal',
        children: '操作二',
      },
    ],
    visibleButtonCount: 3,
  },
  paginationProps: {
    pageSize: 20,
    current: 1,
  },
  settingButtons: true,
  columns: [
    {
      title: '公司',
      dataIndex: 'company',
      width: 160,
      formatType: 'link',
      searchable: true,
    },
    {
      title: '单据金额',
      dataIndex: 'documentAmount',
      formatType: 'money',
    },
    {
      title: '币种',
      dataIndex: 'currency',
      formatType: 'currency',
      filters: [
        {
          label: 'CNY',
          value: 'CNY',
        },
        {
          label: 'USD',
          value: 'USD',
        },
        {
          label: 'JPY',
          value: 'JPY',
        },
        {
          label: 'HKD',
          value: 'HKD',
        },
      ],
      filterMode: 'multiple',
      explanation: '提示信息',
      width: 110,
    },
    {
      title: '完成进度',
      dataIndex: 'percent',
      formatType: 'progress',
    },
    {
      title: '到账日期',
      dataIndex: 'date',
      formatType: 'date',
    },
  ],
};

export default () => {
  return (
    <div>
      <ExpandTable {...props} />
    </div>
  );
};
