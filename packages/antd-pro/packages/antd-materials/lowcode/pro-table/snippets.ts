import { Snippet } from '@alilc/lowcode-types'

const getColumns = () => {
  return [
    {
      title: '姓名',
      dataIndex: 'name',
      valueType: 'text'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      valueType: 'digit'
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      valueType: 'avatar'
    },
    {
      title: '状态',
      dataIndex: 'status',
      renderTag: true,
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: { text: '关闭', status: 'Default' },
        running: { text: '运行中', status: 'Processing' },
        online: { text: '已上线', status: 'Success' },
        error: { text: '异常', status: 'Error' }
      }
    },
    {
      title: '贷款金额',
      dataIndex: 'loan',
      valueType: 'money'
    },
    {
      title: '交易进度',
      dataIndex: 'trade_progress',
      valueType: 'progress'
    },
    {
      title: '个人简介',
      dataIndex: 'link',
      valueType: 'link',
      copyable: true
    },
    {
      title: '地址',
      dataIndex: 'address',
      valueType: 'tag'
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      valueType: 'dateTime'
    }
  ]
}

const getDataSource = () => {
  return [
    {
      id: '1',
      name: 'disscode',
      age: 30,
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Xiao_Zhan_at_the_Weibo_Night_Ceremony_January_11_2020.jpg/1280px-Xiao_Zhan_at_the_Weibo_Night_Ceremony_January_11_2020.jpg',
      link: 'https://en.wikipedia.org/wiki/Xiao_Zhan',
      loan: 700000,
      trade_progress: 17,
      address: '西湖区湖底公园1号',
      create_time: '2022-04-21 21:00',
      status: 'close'
    },
    {
      id: '2',
      name: 'IDE',
      age: 28,
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/%E7%8E%8B%E4%B8%80%E5%8D%9A.jpg',
      link: 'https://en.wikipedia.org/wiki/Wang_Yibo',
      loan: 600000,
      trade_progress: 36,
      address: '滨江区网商路699号',
      create_time: '2022-04-21 22:00',
      status: 'running'
    }
  ]
}

export const snippets: Snippet[] = [
  {
    title: 'CRUD 表格',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {
        cardBordered: true,
        dataSource: getDataSource(),
        columns: [
          ...getColumns(),
          {
            title: '操作',
            dataIndex: 'options',
            valueType: 'option',
            align: 'left',
            fixed: '',
            render: {
              type: 'JSSlot',
              params: ['text', 'record', 'index'],
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'link',
                    children: '编辑',
                    htmlType: 'button',
                    size: 'small',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false,
                    icon: ''
                  }
                },
                {
                  componentName: 'ProPopconfirm',
                  props: {
                    title: '确定删除?',
                    okType: 'primary',
                    okText: '确定',
                    cancelText: '取消'
                  },
                  children: [
                    {
                      componentName: 'Button',
                      props: {
                        children: '删除',
                        htmlType: 'button',
                        type: 'link',
                        size: 'small',
                        shape: 'default',
                        block: false,
                        danger: true,
                        ghost: false,
                        disabled: false,
                        icon: ''
                      }
                    }
                  ]
                }
              ]
            }
          }
        ],
        rowKey: 'id',
        pagination: {
          defaultPageSize: 10
        },
        search: false,
        toolBarRender: {
          type: 'JSSlot',
          params: ['currentPageData'],
          value: [
            {
              componentName: 'Button',
              props: {
                type: 'primary',
                children: '新增',
                htmlType: 'button',
                size: 'middle',
                shape: 'default',
                icon: {
                  type: 'JSSlot',
                  value: [
                    {
                      componentName: 'Icon',
                      props: {
                        type: 'PlusOutlined',
                        size: 16,
                        rotate: 0,
                        spin: false
                      }
                    }
                  ]
                },
                block: false,
                danger: false,
                ghost: false,
                disabled: false
              }
            }
          ]
        },
        intl: 'zhCNIntl'
      }
    }
  },
  {
    title: '查询表格',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {
        cardBordered: true,
        dataSource: getDataSource(),
        columns: getColumns(),
        rowKey: 'id',
        pagination: {
          defaultPageSize: 10
        },
        search: false,
        intl: 'zhCNIntl'
      }
    }
  },
  {
    title: '嵌套表格',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {
        cardBordered: true,
        dataSource: getDataSource(),
        columns: getColumns(),
        rowKey: 'id',
        pagination: {
          defaultPageSize: 10
        },
        expandable: {
          expandedRowRender: {
            type: 'JSSlot',
            params: ['record', 'index', 'indent', 'expanded'],
            value: [
              {
                componentName: 'ProTable',
                props: {
                  columns: [
                    { title: 'Date', dataIndex: 'date', key: 'date' },
                    { title: 'Name', dataIndex: 'name', key: 'name' },
                    {
                      title: 'Upgrade Status',
                      dataIndex: 'upgradeNum',
                      key: 'upgradeNum'
                    }
                  ],
                  headerTitle: false,
                  search: false,
                  options: false,
                  dataSource: [
                    {
                      key: 0,
                      date: '2014-12-24 23:12:00',
                      name: 'This is production name',
                      upgradeNum: 'Upgraded: 56'
                    },
                    {
                      key: 1,
                      date: '2014-12-24 23:12:00',
                      name: 'This is production name',
                      upgradeNum: 'Upgraded: 57'
                    },
                    {
                      key: 2,
                      date: '2014-12-24 23:12:00',
                      name: 'This is production name',
                      upgradeNum: 'Upgraded: 58'
                    }
                  ],
                  pagination: false
                }
              }
            ]
          }
        },
        intl: 'zhCNIntl'
      }
    }
  },
  {
    title: '表格',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {
        cardBordered: true,
        dataSource: getDataSource(),
        columns: [
          ...getColumns(),
          {
            title: '操作',
            dataIndex: 'options',
            valueType: 'option',
            align: 'left',
            fixed: '',
            render: {
              type: 'JSSlot',
              params: ['text', 'record', 'index'],
              value: [
                {
                  componentName: 'Button',
                  props: {
                    type: 'link',
                    children: '编辑',
                    htmlType: 'button',
                    size: 'small',
                    shape: 'default',
                    block: false,
                    danger: false,
                    ghost: false,
                    disabled: false,
                    icon: ''
                  }
                },
                {
                  componentName: 'ProPopconfirm',
                  props: {
                    title: '确定删除?',
                    okType: 'primary',
                    okText: '确定',
                    cancelText: '取消'
                  },
                  children: [
                    {
                      componentName: 'Button',
                      props: {
                        children: '删除',
                        htmlType: 'button',
                        type: 'link',
                        size: 'small',
                        shape: 'default',
                        block: false,
                        danger: true,
                        ghost: false,
                        disabled: false,
                        icon: ''
                      }
                    }
                  ]
                }
              ]
            }
          }
        ],
        rowKey: 'id',
        pagination: {
          defaultPageSize: 10
        },
        toolBarRender: {
          type: 'JSSlot',
          params: ['currentPageData'],
          value: [
            {
              componentName: 'Button',
              props: {
                type: 'primary',
                children: '新增',
                htmlType: 'button',
                size: 'middle',
                shape: 'default',
                icon: {
                  type: 'JSSlot',
                  value: [
                    {
                      componentName: 'Icon',
                      props: {
                        type: 'PlusOutlined',
                        size: 16,
                        rotate: 0,
                        spin: false
                      }
                    }
                  ]
                },
                block: false,
                danger: false,
                ghost: false,
                disabled: false
              }
            }
          ]
        },
        intl: 'zhCNIntl'
      }
    }
  },
]
