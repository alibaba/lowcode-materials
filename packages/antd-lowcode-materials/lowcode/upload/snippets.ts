import {Snippet} from "@alilc/lowcode-types/lib/metadata";
export default [
  {
    title: '上传',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/upload-1.png',
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
] as Snippet;
