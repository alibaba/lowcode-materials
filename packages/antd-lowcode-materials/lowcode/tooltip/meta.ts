import snippets from './snippets';

export default {
  snippets,
  componentName: 'Tooltip',
  title: '文字提示',
  category: '反馈',
  props: [
    {
      title: '内容',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'title',
          title: {
            label: '提示文字',
            tip: 'title | 提示文字',
          },
          propType: { type: 'oneOfType', value: ['string', 'node'] },
          setter: ['StringSetter', 'SlotSetter', 'VariableSetter'],
        },
      ],
    },
    {
      title: '控制',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultOpen',
          title: {
            label: '默认显隐',
            tip: 'defaultOpen | 默认是否显隐',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'open',
          title: {
            label: '当前显隐',
            tip: 'open | 当前是否显隐',
          },
          propType: 'bool',
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'placement',
          title: { label: '气泡位置', tip: 'placement | 气泡位置' },
          propType: {
            type: 'oneOf',
            value: [
              'top',
              'left',
              'right',
              'bottom',
              'topLeft',
              'topRight',
              'bottomLeft',
              'bottomRight',
              'leftTop',
              'leftBottom',
              'rightTop',
              'rightBottom',
            ],
          },
          defaultValue: 'top',
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
        {
          name: 'autoAdjustOverflow',
          title: {
            label: '自动调整',
            tip: 'autoAdjustOverflow | 气泡被遮挡时自动调整位置',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'arrowPointAtCenter',
          title: {
            label: '指向中心',
            tip: 'arrowPointAtCenter | 箭头是否指向目标元素中心',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'color',
          title: {
            label: '背景颜色',
            tip: 'color | 背景颜色',
          },
          propType: 'string',
          setter: 'ColorSetter',
        },
        {
          name: 'zIndex',
          title: {
            label: 'zIndex',
            tip: 'zIndex | 设置 Tooltip 的 z-index值',
          },
          propType: 'number',
          setter: 'NumberSetter',
        },
      ],
    },
    {
      name: 'overlayStyle',
      title: '卡片样式',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'overlayStyle',
          title: { label: '样式设置', tip: 'overlayStyle | 卡片样式' },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
    {
      name: 'overlayInnerStyle',
      title: '卡片内容样式',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'overlayInnerStyle',
          title: {
            label: '样式设置',
            tip: 'overlayStyle | 卡片内容区域的样式',
          },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
    {
      title: '行为',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'trigger',
          title: { label: '触发行为', tip: 'trigger | 触发行为' },
          propType: {
            type: 'oneOf',
            value: ['hover', 'focus', 'click', 'contextMenu'],
          },
          defaultValue: 'hover',
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '鼠标悬停',
                  value: 'hover',
                },
                {
                  title: '获得焦点',
                  value: 'focus',
                },
                {
                  title: '鼠标点击',
                  value: 'click',
                },
                {
                  title: '右键菜单',
                  value: 'contextMenu',
                },
              ],
            },
          },
        },
        {
          name: 'mouseEnterDelay',
          title: {
            label: '展示延时',
            tip: 'mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒',
          },
          propType: 'number',
          defaultValue: 0.1,
          setter: {
            componentName: 'NumberSetter',
            props: {
              step: 0.1,
            },
          },
        },
        {
          name: 'mouseLeaveDelay',
          title: {
            label: '隐藏延时',
            tip: 'mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒',
          },
          propType: 'number',
          defaultValue: 0.1,
          setter: {
            componentName: 'NumberSetter',
            props: {
              step: 0.1,
            },
          },
        },
      ],
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onOpenChange',
          description:" 显示隐藏的回调",

          template:
            "onOpenChange(open,${extParams}){\n// 显示隐藏的回调\nconsole.log('onOpenChange',open);}",
        },
      ],
    },
  },
};
