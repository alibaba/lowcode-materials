export default [
  {
    title: '表格',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'Table',
      props: {
        dataSource: [
          {
            id: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            id: '2',
            name: '王一博',
            age: 28,
            address: '滨江区网商路699号',
          },
        ],
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
        ],
        rowKey: 'id',
        pagination: {
          pageSize: 10,
          total: 15,
          current: 1,
        },
      },
    },
  },
];
