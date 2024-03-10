export default [
  {
    title: '面包屑',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/breadcrumb-1.jpg',
    schema: {
      componentName: 'Breadcrumb',
      props: {
        items: [
          {
            path: '/index',
            title: 'home',
          },
          {
            path: '/first',
            title: 'first',
            children: [
              {
                path: '/general',
                title: 'General',
              },
              {
                path: '/layout',
                title: 'Layout',
              },
              {
                path: '/navigation',
                title: 'Navigation',
              },
            ],
          },
          {
            path: '/second',
            title: 'second',
          },
        ]

      },
    },
  },
];
