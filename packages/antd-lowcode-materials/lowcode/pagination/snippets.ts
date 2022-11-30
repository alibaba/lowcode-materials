import {Snippet} from "@alilc/lowcode-types/lib/metadata";
export default [
  {
    title: '分页',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/pagination-1.jpg',
    schema: {
      componentName: 'Pagination',
      props: {
        pageSize: 10,
        total: 50,
        current: 1,
      },
    },
  },
] as Snippet;
