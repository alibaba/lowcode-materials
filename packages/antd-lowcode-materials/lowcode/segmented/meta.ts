import snippets from './snippets';

export default {
  snippets,
  componentName: 'Segmented',
  title: '分段控制器',
  category: '数据展示',
  group: '基础组件',
  props: [
    {
      name: 'block',
      title: { label: 'block ', tip: '将宽度调整为父元素宽度的选项 ' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认的选中项' },
      setter: ['StringSetter', 'NumberSetter'],
    },
    {
      name: 'disabled',
      title: { label: '禁用', tip: '是否禁用' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'options',
      title: { label: '配置内容', tip: '数据化配置选项内容' },
      setter: ['JsonSetter', 'VariableSetter'],
    },
    {
      name: 'size',
      title: { label: '控件尺寸', tip: '控件尺寸' },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      defaultValue: 'middle',
    },
    // {
    //   name: 'value',
    //   title: { label: '选中项', tip: '当前选中项' },
    //   propType: {
    //     type: 'arrayOf',
    //     value: { type: 'oneOfType', value: ['string', 'number'] },
    //   },
    // },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(value,selectedOptions,${extParams}){\n// 选择完成后的回调\nconsole.log('onChange', value, selectedOptions);}",
        }
      ],
    },
  },
};
