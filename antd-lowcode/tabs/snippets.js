export default [
  {
    title: '普通型',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-1.jpg',
    schema: {
      componentName: 'Tabs',
      props: {
        type: 'line',
      },
      children: [
        {
          componentName: 'Tabs.TabPane',
          props: {
            tab: '标签项1',
            key: 'tab-item-1',
          },
        },
        {
          componentName: 'Tabs.TabPane',
          props: {
            tab: '标签项2',
            key: 'tab-item-2',
          },
        },
      ],
    },
  },
  {
    title: '卡片型',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-2.jpg',
    schema: {
      componentName: 'Tabs',
      props: {
        type: 'card',
      },
      children: [
        {
          componentName: 'Tabs.TabPane',
          props: {
            tab: '标签项1',
            key: 'tab-item-1',
          },
        },
        {
          componentName: 'Tabs.TabPane',
          props: {
            tab: '标签项2',
            key: 'tab-item-2',
          },
        },
      ],
    },
  },
  {
    title: '可编辑卡片',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-3.jpg',
    schema: {
      componentName: 'Tabs',
      props: {
        type: 'editable-card',
      },
      children: [
        {
          componentName: 'Tabs.TabPane',
          props: {
            tab: '标签项1',
            key: 'tab-item-1',
          },
        },
        {
          componentName: 'Tabs.TabPane',
          props: {
            tab: '标签项2',
            key: 'tab-item-2',
          },
        },
      ],
    },
  },
];
