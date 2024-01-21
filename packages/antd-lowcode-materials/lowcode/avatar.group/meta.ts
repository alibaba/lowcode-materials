import snippets from './snippets';

export default {
  snippets,
  componentName: 'Avatar.Group',
  title: '头像组',
  category: '数据展示',
  props: [
    {
      name: 'maxCount',
      title: { label: '头像数量', tip: '最大头像数量' },
      propType: 'number',
    },
    {
      name: 'maxPopoverPlacement',
      title: { label: '头像弹出位置', tip: '多余头像弹出位置' },
      propType: { type: 'oneOf', value: ['top', 'bottom'] },
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '设置头像的大小' },
      propType: {
        type: 'oneOfType',
        value: ['number', { type: 'oneOf', value: ['large', 'small', 'default'] }],
      },
      defaultValue: 'default',
    },

    
    {
      name: 'maxStyle',
      title: '多余头像样式',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'maxStyle',
          title: {
            label: '多余头像样式',
            tip: '多余头像样式',
          },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
    {
      name: 'shape',
      title: { label: '头像形状', tip: '指定头像的形状' },
      propType: { type: 'oneOf', value: ['circle', 'square'] },
    },
    // {
    //   name: 'src',
    //   title: { label: '图片地址', tip: '图片类头像的资源地址' },
    //   propType: 'string',
    // },
    // {
    //   name: 'alt',
    //   title: {
    //     label: '替代文本',
    //     tip: '图像无法显示时的替代文本',
    //   },
    //   propType: 'string',
    // },
    // {
    //   name: 'onError',
    //   title: {
    //     label: '图片加载失败的事件',
    //     tip: '图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为',
    //   },
    //   propType: 'func',
    // },
    // {
    //   name: 'gap',
    //   title: {
    //     label: '文字边距',
    //     tip: '字符类型距离左右两侧边界单位像素',
    //   },
    //   propType: 'number',
    // },
  ],
  configure: {
    component: { isContainer: true },

    supports: {
      style: true,

      events: [
        // {
        //   name: 'onError',
        //   template: "onError(${extParams}){\n// 图片加载失败的事件\nconsole.log('onError');}",
        // },
      ],
    },
    
  },
};
