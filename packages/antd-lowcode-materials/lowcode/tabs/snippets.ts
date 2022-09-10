export default [
  {
    title: '普通型',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-1.jpg',
    schema: {
      componentName: 'Tabs',
      props: {
        type: 'line',
        items: [
          {
            label: '标签项1',
            key: 'tab-item-1',
            children: {
              type: 'JSSlot',
              value: [],
            },
          },
          {
            label: '标签项2',
            key: 'tab-item-2',
            children: {
              type: 'JSSlot',
              value: [],
            },
          }
        ]
      }
    },
  },
  {
    title: '卡片型',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-2.jpg',
    schema: {
      componentName: 'Tabs',
      props: {
        type: 'card',
        items: [
          {
            label: '标签项1',
            key: 'tab-item-1',
            children: {
              type: 'JSSlot',
              value: [],
            },
          },
          {
            label: '标签项2',
            key: 'tab-item-2',
            children: {
              type: 'JSSlot',
              value: [],
            },
          }
        ]
      }
    },
  },
  {
    title: '可编辑卡片',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-3.jpg',
    schema: {
      componentName: 'Tabs',
      props: {
        type: 'editable-card',
        items: [
          {
            label: '标签项1',
            key: 'tab-item-1',
            children: {
              type: 'JSSlot',
              value: [],
            },
          },
          {
            label: '标签项2',
            key: 'tab-item-2',
            children: {
              type: 'JSSlot',
              value: [],
            },
          }
        ]
      }
    },
  },
];
