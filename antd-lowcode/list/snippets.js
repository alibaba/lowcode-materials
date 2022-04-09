export default [
  {
    title: '简单列表',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/list-1.png',
    schema: {
      componentName: 'List',
      props: {
        dataSource: [
          {
            id: 1,
            text: 'Racing car sprays burning fuel into crowd.',
          },
          {
            id: 2,
            text: 'Japanese princess to wed commoner.',
          },
          {
            id: 3,
            text: 'Australian walks 100km after outback crash.',
          },
          {
            id: 4,
            text: 'Man charged over missing wedding girl.',
          },
          {
            id: 5,
            text: 'Los Angeles battles huge wildfires.',
          },
        ],
        renderItem: {
          type: 'JSSlot',
          params: ['item'],
          value: [
            {
              componentName: 'List.Item',
              props: {},
              children: {
                componentName: 'Typography.Text',
                props: {
                  children: {
                    type: 'JSExpression',
                    value: 'this.item.text',
                  },
                },
              },
            },
          ],
        },
        header: {
          type: 'JSSlot',
          value: [
            {
              componentName: 'Typography.Text',
              props: {
                children: '列表头部',
              },
            },
          ],
        },
        footer: {
          type: 'JSSlot',
          value: [
            {
              componentName: 'Typography.Text',
              props: {
                children: '列表底部',
              },
            },
          ],
        },
        itemLayout: 'horizontal',
        size: 'default',
        bordered: true,
        split: true,
        pagination: {
          pageSize: 5,
          total: 10,
          current: 1,
        },
      },
    },
  },
  {
    title: '基础列表',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/list-1.png',
    schema: {
      componentName: 'List',
      props: {
        dataSource: [
          {
            id: 1,
            title: 'Ant Design Title 1',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team',
          },
          {
            id: 2,
            title: 'Ant Design Title 2',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team',
          },
          {
            id: 3,
            title: 'Ant Design Title 3',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team',
          },
          {
            id: 4,
            title: 'Ant Design Title 4',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team',
          },
          {
            id: 5,
            title: 'Ant Design Title 5',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            description:
              'Ant Design, a design language for background applications, is refined by Ant UED Team',
          },
        ],
        renderItem: {
          type: 'JSSlot',
          params: ['item'],
          value: [
            {
              componentName: 'List.Item',
              props: {},
              children: {
                componentName: 'List.Item.Meta',
                props: {
                  avatar: {
                    type: 'JSSlot',
                    value: [
                      {
                        componentName: 'Avatar',
                        props: {
                          icon: {
                            componentName: 'Icon',
                            props: {
                              type: 'UserOutlined',
                            },
                          },
                          src: {
                            type: 'JSExpression',
                            value: 'this.item.avatar',
                          },
                        },
                      },
                    ],
                  },
                  title: {
                    type: 'JSSlot',
                    value: [
                      {
                        componentName: 'Typography.Link',
                        props: {
                          children: {
                            type: 'JSExpression',
                            value: 'this.item.title',
                          },
                        },
                      },
                    ],
                  },
                  description: {
                    type: 'JSSlot',
                    value: [
                      {
                        componentName: 'Typography.Text',
                        props: {
                          children: {
                            type: 'JSExpression',
                            value: 'this.item.description',
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
        itemLayout: 'horizontal',
        size: 'default',
        bordered: true,
        split: true,
        pagination: {
          pageSize: 10,
          total: 15,
          current: 1,
        },
      },
    },
  },
];
