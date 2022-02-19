module.exports = [
  {
    title: '面包屑',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_breadcrumb.png',
    schema: {
      componentName: 'Breadcrumb',
      props: {
        maxNode: 100,
        component: 'nav',
      },
      children: [
        {
          componentName: 'Breadcrumb.Item',
          props: {
            children: '一级',
            primaryKey: 'breadcrumb-item-1',
            target: '_self',
          },
        },
        {
          componentName: 'Breadcrumb.Item',
          props: {
            children: '二级',
            primaryKey: 'breadcrumb-item-2',
            target: '_self',
          },
        },
        {
          componentName: 'Breadcrumb.Item',
          props: {
            children: '三级',
            primaryKey: 'breadcrumb-item-3',
            target: '_self',
          },
        },
      ],
    },
  },
];
