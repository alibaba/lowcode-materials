export default [
  {
    title: '普通型',
    screenshot: 'https://img.alicdn.com/tfs/TB1D0p2u.z1gK0jSZLeXXb9kVXa-112-64.png',
    schema: {
      componentName: 'Tab',
      props: {
        shape: 'pure',
        size: 'medium',
        excessMode: 'slide',
      },
      children: [
        {
          componentName: 'Tab.Item',
          props: {
            title: 'Tab1',
          },
        },
        {
          componentName: 'Tab.Item',
          props: {
            title: 'Tab2',
          },
        },
        {
          componentName: 'Tab.Item',
          props: {
            title: 'Tab3',
          },
        },
      ],
    },
  },
];
