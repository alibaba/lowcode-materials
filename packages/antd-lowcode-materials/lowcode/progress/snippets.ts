import {Snippet} from "@alilc/lowcode-types/lib/metadata";
export default [
  {
    title: '进度条',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/progress-1.png',
    schema: {
      componentName: 'Progress',
      props: {
        percent: 20,
        status: 'active',
      },
    },
  },
  {
    title: '进度圈',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/progress-2.png',
    schema: {
      componentName: 'Progress',
      props: {
        percent: 20,
        type: 'circle',
      },
    },
  },
] as Snippet;
