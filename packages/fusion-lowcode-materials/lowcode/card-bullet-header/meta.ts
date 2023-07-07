module.exports = {
  group: '原子组件',
  componentName: 'CardBulletHeader',
  title: 'CardBulletHeader',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Card',
    main: '',
    destructuring: true,
    subName: 'BulletHeader',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'title',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '卡片的标题',
    },
    {
      name: 'subTitle',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '卡片的副标题',
    },
    {
      name: 'showTitleBullet',
      propType: 'bool',
      description: '是否显示标题的项目符号',
      defaultValue: true,
    },
    {
      name: 'extra',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '标题区域的用户自定义内容',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  category: '基础',
};
