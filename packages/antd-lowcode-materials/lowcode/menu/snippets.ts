export default [
  {
    title: '导航菜单',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
    schema: {
      componentName: 'Menu',
      props: {
        mode: 'inline',
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        theme: 'dark',
        items: [
          {
            key: 'item-i5wd',
            category: 'Menu.Item',
            children: '菜单名',
          },
        ],
      },
    },
  },
];
