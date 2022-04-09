export default [
  {
    title: '上传',
    screenshot: 'upload-1.png',
    schema: {
      componentName: 'Upload',
      props: {},
      children: {
        componentName: 'Button',
        props: {
          children: 'Upload',
        },
      },
    },
  },
];
