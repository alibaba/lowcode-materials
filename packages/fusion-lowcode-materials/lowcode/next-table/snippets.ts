module.exports = [
  {
    title: 'NextTable',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png',
    schema: {
      componentName: 'NextTable',
      title: '表格',
      props: {
        setEmptyContent: true,
        emptyContent: {
          type: 'JSSlot',
          title: 'EmptyContent',
          value: [
            {
              componentName: 'Typography.Text',
              props: {
                children: 'No Data',
              },
            },
          ],
        },
        showMiniPager: true,
        showActionBar: true,
        actionBar: [
          {
            title: '新增',
            type: 'primary',
          },
          {
            title: '编辑',
          },
        ],
        columns: [
          {
            dataKey: 'name',
            width: 200,
            align: 'center',
            title: '姓名',
            editType: 'text',
          },
          {
            dataKey: 'age',
            width: 200,
            align: 'center',
            title: '年龄',
          },
          {
            dataKey: 'role',
            width: 200,
            align: 'center',
            title: '职责',
          },
        ],
        data: [
          {
            name: '王小',
            id: '1',
            age: 15000,
            role: '开发',
          },
          {
            name: '王中',
            id: '2',
            age: 25000,
            role: '产品',
          },
          {
            name: '王大',
            id: '3',
            age: 35000,
            role: '设计',
          },
        ],
        actionTitle: '操作',
        actionWidth: 180,
        actionType: 'link',
        actionFixed: 'right',
        actionHidden: false,
        maxWebShownActionCount: 2,
        actionColumn: [
          {
            title: '编辑',
            callback: {
              type: 'JSFunction',
              value:
                '(rowData, action, table) => {\n return table.editRow(rowData).then((row) => {\n console.log(row);\n });\n }',
            },
          },
          {
            title: '保存',
            callback: {
              type: 'JSFunction',
              value:
                '(rowData, action, table) => { \nreturn table.saveRow(rowData).then((row) => { \nconsole.log(row); \n}); \n}',
            },
            mode: 'EDIT',
          },
        ],
      },
    },
  },
];
