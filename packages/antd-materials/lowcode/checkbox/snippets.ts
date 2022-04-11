export default [
  {
    title: '多选框',
    screenshot: 'checkbox-1.png',
    schema: {
      componentName: 'Checkbox',
      props: {
        children: 'Checkbox',
      },
    },
  },
  {
    title: '多选框组',
    screenshot: 'checkbox-group-1.png',
    schema: {
      componentName: 'Checkbox.Group',
      props: {
        options: [
          {
            label: 'A',
            value: 'A',
          },
          {
            label: 'B',
            value: 'B',
          },
          {
            label: 'C',
            value: 'C',
          },
        ],
      },
    },
  },
];
