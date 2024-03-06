import snippets from './snippets';

export default {
  snippets,
  componentName: 'Dropdown',
  title: '下拉菜单',
  category: '导航',
  props: [
    // {
    //   name: 'open',
    //   title: { label: '菜单是否显示', tip: '菜单是否显示' },
    //   propType: { type: 'oneOf', value: [true, false, '-'] },
    //   defaultValue: '-',
    //   setter: {
    //     componentName: 'RadioGroupSetter',
    //     props: {
    //       options: [
    //         {
    //           title: '默认非受控',
    //           value: '-',
    //         },
    //         {
    //           title: '显示',
    //           value: true,
    //         },
    //         {
    //           title: '不显示',
    //           value: false,
    //         },
    //       ],
    //     },
    //   },
    //   // extraProps: {
    //   //   getValue(target, fieldValue) {
    //   //     const { node } = target;
    //   //     let value = node.getPropValue('open');
    //   //     if (value === undefined) {
    //   //       value = '-';
    //   //     }
    //   //     return value;
    //   //   },
    //   //   setValue(target, value) {
    //   //     const { node } = target;
    //   //     if (value === '-') {
    //   //       setTimeout(() => {
    //   //         node.clearPropValue('open');
    //   //       });
    //   //     }
    //   //   },
    //   // },
    // },
    // {
    //   name: 'arrow',
    //   title: { label: '显示下拉箭头', tip: '是否显示下拉箭头' },
    //   propType: 'bool',
    //   defaultValue: false,
    // },
    // {
    //   name: 'autoAdjustOverflow	',
    //   title: { label: '下拉位置调整', tip: '下拉框被遮挡时自动调整位置	' },
    //   propType: 'bool',
    //   defaultValue: true,
    // },
    // {
    //   name: 'autoFocus	',
    //   title: { label: '聚焦下拉框	', tip: '打开后自动聚焦下拉框		' },
    //   propType: 'bool',
    //   defaultValue: false,
    // },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
    },
    {
      name: 'destroyPopupOnHide',
      title: { label: '关闭销毁', tip: '关闭后是否销毁 Dropdown	' },
      propType: 'bool',
      defaultValue: false,
    },
    // {
    //   name: 'dropdownRender',
    //   title: { label: '自定义内容', tip: '自定义下拉框内容' },
    //   // propType: 'node',
    //   setter: ['SlotSetter'],

    // },
    
    // {
    //   name: 'getPopupContainer',
    //   title: {
    //     label: '渲染父节点',
    //     tip:
    //       '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010)',
    //   },
    //   propType: 'func',
    // },
    {
      name: 'overlay',
      title: { label: '菜单', tip: '菜单' },
      propType: { type: 'oneOfType', value: ['node', 'func'] },
    },
    // {
    //   name: 'overlayClassName',
    //   title: { label: '根元素的类名称', tip: '根元素的类名称' },
    //   propType: 'string',
    // },
    // {
    //   name: 'overlayStyle',
    //   title: { label: '根元素的样式', tip: '根元素的样式' },
    //   propType: 'object',
    // },
    {
      name: 'placement',
      title: {
        label: '弹出位置',
        tip:
          '菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`',
      },
      propType: {
        type: 'oneOf',
        value: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
      },
    },
    {
      name: 'trigger',
      title: {
        label: '触发下拉的行为',
        tip: '触发下拉的行为, 移动端不支持 hover',
      },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOf', value: ['click', 'hover', 'contextMenu'] },
      },

    },
    {
      name: 'onOpenChange',
      title: {
        label: '显示状态回调',
        tip: '菜单显示状态改变时调用，参数为 `open`',
      },
      propType: 'func',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onOpenChange',
          description:"菜单显示状态改变时调用",

          template:
            "onOpenChange(open,${extParams}){\n// 菜单显示状态改变时调用\nconsole.log('onOpenChange',open);}",
        },
      ],
    },
  },
};
