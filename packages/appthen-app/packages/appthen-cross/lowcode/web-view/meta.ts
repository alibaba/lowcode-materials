import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const WebViewMeta: IPublicTypeComponentMetadata = {
  componentName: 'WebView',
  title: 'Web视图',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'WebView',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '布局',
  icon: 'rqeliulanqi',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '网页链接',
          },
          tip: "可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。"
        },
        name: 'src',
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {
      className: false,
      style: true,
      events: [
        {
          name: 'onLoad',
          description: '网页加载成功触发',
          // @ts-ignore
          template: "onLoad(e, ${extParams}) {\n  console.log('onLoad', e.detail.src);\n}",
        },
        {
          name: 'onError',
          description: '网页加载失败触发',
          // @ts-ignore
          template: "onError(e, ${extParams}) {\n  console.log('onError', e.detail.src);\n}",
        },
        {
          name: 'onMessage',
          description: '收到消息后触发',
          // @ts-ignore
          template: "onMessage(e, ${extParams}) {\n  console.log('onMessage', e.detail.data);\n}",
        },
      ]
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Web视图',
    screenshot: '',
    schema: {
      componentName: 'WebView',
      props: {
        src: "https://m.baidu.com",
        style: {
        },
      },
    },
  },
];

export default {
  ...WebViewMeta,
  snippets,
};
