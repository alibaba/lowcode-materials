export default [
  {
    title: '文本',
    screenshot: 'typography-text-1.png',
    schema: {
      componentName: 'Typography.Text',
      props: {
        children: 'text',
      },
    },
  },
  {
    title: '可复制文本',
    screenshot: 'typography-text-2.png',
    schema: {
      componentName: 'Typography.Text',
      props: {
        copyable: true,
        children: 'text',
      },
    },
  },
  {
    title: '可编辑文本',
    screenshot: 'typography-text-3.png',
    schema: {
      componentName: 'Typography.Text',
      props: {
        editable: true,
        children: 'text',
      },
    },
  },
];
