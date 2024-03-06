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
            breadcrumbName: '首页',
          },
          {
            path: 'center',
            breadcrumbName: '应用中心',
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
