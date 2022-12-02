export default [
  {
    title: '导航菜单',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
    schema: {
      componentName: 'Menu',
      props: {
        mode: 'inline',
        defaultSelectedKeys: ["item-i6we2"],
        defaultOpenKeys: ["item-i6we2"],
        theme: 'dark',
        items: [
          {
            key: 'item-i5wd',
            label: "菜单1",
            type: "group",
            children: [],
          },
          {

            key: 'sub1',
            label: "菜单2",
            type: "group",
            children: [
              {
                key: 'item-i6we',
                label: "子菜单1",
                type: "group",
                children: [
                  {
                    key: 'item-i6we2',
                    label: "子菜单1",
                    type: "group",
                  },
                ]
              },
            ],
          },
        ],
      },
    },
  },
];
