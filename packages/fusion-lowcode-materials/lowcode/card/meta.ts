module.exports = {
  group: '原子组件',
  componentName: 'Card',
  title: '卡片',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Card',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'id',
      propType: 'string',
    },
    {
      name: 'showTitleBullet',
      title: '标题符号',
      propType: 'bool',
      description: '标题的项目符号',
      defaultValue: true,
    },
    {
      name: 'showHeadDivider',
      title: '分割线',
      propType: 'bool',
      description: '头部分隔线',
      defaultValue: true,
    },
    {
      name: 'title',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      description: '标题',
    },
    {
      name: 'subTitle',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      description: '副标题',
    },
    {
      name: 'extra',
      title: {
        label: '自定义内容',
        tip: '标题栏用户自定义内容',
      },
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      description: '标题栏用户自定义内容',
    },
    {
      name: 'contentHeight',
      title: '内容高度',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      description: '内容区域的固定高度',
      defaultValue: 120,
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'rtl',
      propType: 'bool',
      description: '文本方向是从右向左',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: {
      isExtends: true,
      override: [
        {
          name: 'id',
          condition: () => false,
        },
        {
          name: 'rtl',
          condition: () => false,
        },
      ],
    },
  },
  icon: 'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_card.png',
  category: '信息输入',
  snippets: require('./snippets'),
};
