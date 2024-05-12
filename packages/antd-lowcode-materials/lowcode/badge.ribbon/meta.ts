import snippets from './snippets';

export default {
  snippets,
  componentName: 'Badge.Ribbon',
  title: '缎带徽标',
  category: '数据展示',
  props: [
    {
      name: 'color',
      title: { label: '圆点颜色', tip: '自定义缎带的颜色	' },
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'placement',
      title: { label: '缎带的位置', tip: '缎带的位置，start 和 end 随文字方向（RTL 或 LTR）变动	' },
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'start',
                value: 'start',
              },
              {
                title: 'end',
                value: 'end',
              }
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'text',
      title: { label: '填入的内容', tip: '填入的内容	' },
      setter: [
        'StringSetter',
        {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        'VariableSetter',
      ],
    },
  ],
  configure: { supports: { style: true },    component: { isContainer: true } 



},
};
