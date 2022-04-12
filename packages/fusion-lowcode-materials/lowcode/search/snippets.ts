export default [
  {
    title: '搜索',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_search.png',
    schema: {
      componentName: 'Search',
      props: {
        dataSource: [
          {
            label: 'Recent',
            value: 'Recent',
          },
          {
            label: 'dress',
            value: 'dress',
          },
          {
            label: 'sunglasses',
            value: 'sunglasses',
          },
          {
            label: 't-shirt',
            value: 't-shirt',
          },
        ],
        followTrigger: true,
        searchText: '搜索',
        prefix: 'next-',
        shape: 'normal',
        type: 'normal',
        size: 'medium',
        hasIcon: true,
      },
    },
  },
  {
    title: '带分类',
    screenshot: 'https://img.alicdn.com/tfs/TB1rRaLu5_1gK0jSZFqXXcpaXXa-112-64.png',
    schema: {
      componentName: 'Search',
      props: {
        followTrigger: true,
        defaultFilterValue: 'Products',
        filter: [
          {
            label: 'Products',
            value: 'Products',
          },
          {
            label: 'Products1',
            value: 'Products1',
          },
        ],
        dataSource: [
          {
            label: 'Recent',
            value: 'Recent',
          },
          {
            label: 'dress',
            value: 'dress',
          },
          {
            label: 'sunglasses',
            value: 'sunglasses',
          },
          {
            label: 't-shirt',
            value: 't-shirt',
          },
        ],
        searchText: '搜索',
        prefix: 'next-',
        shape: 'normal',
        type: 'normal',
        size: 'medium',
        hasIcon: true,
      },
    },
  },
];
