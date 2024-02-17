export default [
  {
    title: '面包屑',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/breadcrumb-1.jpg',
    schema: {
      componentName: 'Breadcrumb',
      props: {
        routes: [
          {
            path: 'a',
            breadcrumbName: 'Home',
          },
          {
            path: 'center',
            breadcrumbName: 'Application Center',
          },
          {
            path: 'app',
            breadcrumbName: 'An Application',
          },
        ],
        // itemRender: {
        //   type: 'JSSlot',
        //   params: ['route', 'params', 'routes', 'paths'],
        //   value: [
        //     {
        //       componentName: 'Typography.Link',
        //       props: {
        //         href: {
        //           type: 'JSExpression',
        //           value: 'this.route.path',
        //         },
        //         children: {
        //           type: 'JSExpression',
        //           value: 'this.route.breadcrumbName',
        //         },
        //       },
        //     },
        //   ],
        // },
      },
    },
  },
];
