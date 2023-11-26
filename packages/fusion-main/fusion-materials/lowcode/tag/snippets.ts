module.exports = [
  {
    title: '标签',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
    schema: {
      componentName: 'Tag',
      props: {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        animation: false,
        children: ['Tag'],
      },
    },
  },
  {
    title: '可关闭标签',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
    schema: {
      componentName: 'Tag.Closeable',
      props: {
        prefix: 'next-',
        closeArea: 'tail',
        size: 'medium',
        children: ['Tag'],
      },
    },
  },
  {
    title: '可选中标签',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
    schema: {
      componentName: 'Tag.Selectable',
      props: {
        prefix: 'next-',
        children: ['Tag'],
      },
    },
  },
];
