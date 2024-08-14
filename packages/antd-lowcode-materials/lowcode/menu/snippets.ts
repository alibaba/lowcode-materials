export default [
  {
    title: '导航菜单',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
    schema: {
      componentName: 'Menu',
      props: {
        items:  [
          {
            key: '1',
            label: '菜单项1',
            children: [
              {
                key: '1-1',
                label: '子菜单项1',
              },
              {
                key: '1-2',
                label: '子菜单项2',
              },
            ],
          },
          {
            key: '2',
            label: '菜单项2',
          },
        ],
      },
    },
  },
];
