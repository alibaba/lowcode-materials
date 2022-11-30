import {Snippet} from "@alilc/lowcode-types/lib/metadata";
export default [
  {
    title: '锚点',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/anchor-1.png',
    schema: {
      componentName: 'Anchor',
      props: {},
      children: [
        {
          componentName: 'Anchor.Link',
          props: {
            title: 'Document',
          },
        },
        {
          componentName: 'Anchor.Link',
          props: {
            title: 'API',
          },
        },
        {
          componentName: 'Anchor.Link',
          props: {
            title: 'Demo',
          },
        },
      ],
    },
  },
] as Snippet;
