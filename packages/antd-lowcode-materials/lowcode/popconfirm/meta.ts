import snippets from './snippets';

export default {
  snippets,
  componentName: 'Popconfirm',
  title: '气泡确认框',
  category: '反馈',
  props: [
    {
      name: 'title',
      title: { label: '确认框内容', tip: '确认框内容' },
      propType: { type: 'oneOfType', value: ['string', 'node', 'func'] },
    },
 
    {
      name: 'cancelText',
      title: { label: '取消按钮文字', tip: '取消按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'showCancel',
      title: { label: '取消显示', tip: '取消按钮显示' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'icon',
      title: { label: '图标', tip: '图标显示' },
      propType: 'node',
      setter: 'SlotSetter',
      supportVariable: true
    },
    {
      name: 'disabled',
      title: { label: '禁用', tip: '阻止点击 Popconfirm 子元素时弹出确认框	' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'description',
      title: { label: '确认内容', tip: '确认内容详细描述' },
      propType: 'string',
      setter: ['StringSetter','SlotSetter'],
      supportVariable: true
    },
    {
      name: 'okType',
      title: { label: '确认按钮类型', tip: '确认按钮类型' },
      propType: {
        type: 'oneOf',
        value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text'],
      },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '主按钮',
              value: 'primary',
            },
            {
              title: '虚线框按钮',
              value: 'dashed',
            },
            {
              title: '危险按钮',
              value: 'danger',
            },
            {
              title: '链接按钮',
              value: 'link',
            },
            {
              title: '类文本按钮',
              value: 'text',
            },
          ],
        },
      },
    },
    {
      name: 'placement',
      title: { label: '位置', tip: '显示位置' },

      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '上',
              value: 'top',
            },
            {
              title: '左',
              value: 'left',
            },
            {
              title: '右',
              value: 'right',
            },
            {
              title: '下',
              value: 'bottom',
            },
            {
              title: '上左',
              value: 'topLeft',
            },
            {
              title: '上右',
              value: 'topRight',
            },
            {
              title: '下左',
              value: 'bottomLeft',
            },
            {
              title: '下右',
              value: 'bottomRight',
            },
            {
              title: '左上',
              value: 'leftTop',
            },
            {
              title: '左下',
              value: 'leftBottom',
            },
            {
              title: '右上',
              value: 'rightTop',
            },
            {
              title: '右下',
              value: 'rightBottom',
            },
          ],
        },
      },
    },
    // {
    //   name: 'okButtonProps',
    //   title: { label: 'ok按钮props', tip: 'ok按钮props' },
    //   propType: 'object',
    // },
    // {
    //   name: 'cancelButtonProps',
    //   title: { label: 'cancel按钮props', tip: 'cancel按钮props' },
    //   propType: 'object',
    // },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onConfirm',
          description:"点击确认的回调",

          template: "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}",
        },
        'onCancel','onPopupClick'
      ],
    },
  },
};
