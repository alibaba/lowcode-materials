import snippets from './snippets';

export default {
  snippets,
  componentName: 'Image',
  title: '图片',
  category: '数据展示',
  props: [
    {
      name: 'url',
      title: { label: '图片地址', tip: '图片地址' },
      propType: { type: 'string' },
    },
    {
      name: 'src',
      title: { label: '图片描述', tip: '图片描述' },
      propType: { type: 'string' },
    },
    {
      name: 'fallback	',
      title: { label: '容错地址', tip: '加载失败容错地址	' },
      propType: 'string',
    },
    {
      name: 'preview',
      title: { label: '支持预览', tip: '支持预览' },
      defaultValue: true,
      propType: 'bool',
    },
    {
      name: 'placeholder',
      title: { label: '加载占位', tip: '加载占位，为 true 时使用默认占位	' },
      propType: 'bool',
    },
    {
      name: 'width',
      title: { label: '宽度', tip: '宽度' },
      propType: 'number',
    },
    {
      name: 'height',
      title: { label: '高度', tip: '高度' },
      propType: 'number',
    },
  ],
  configure: { supports: { style: true },
  className:true,events:[
    'onError'
  ]

},
};
