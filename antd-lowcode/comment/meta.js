export default {
  componentName: 'Comment',
  title: '评论',
  category: '数据展示',
  props: [
    {
      name: 'actions',
      title: {
        label: '操作列表',
        tip: '在评论内容下面呈现的操作项列表',
      },
      propType: { type: 'arrayOf', value: 'node' },
    },
    {
      name: 'author',
      title: { label: '要显示为注释作者的元素', tip: '要显示为注释作者的元素' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'avatar',
      title: {
        label: '头像元素',
        tip: '要显示为评论头像的元素 - 通常是 antd Avatar 或者 src',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'children',
      title: {
        label: '子节点',
        tip: '嵌套注释应作为注释的子项提供',
      },
      propType: 'node',
    },
    {
      name: 'content',
      title: { label: '评论的主要内容', tip: '评论的主要内容' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'datetime',
      title: { label: '展示时间描述', tip: '展示时间描述' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
  ],
  configure: { supports: { style: true } },
};
