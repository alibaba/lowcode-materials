export const globalStyleField = {
  type: 'group',
  title: '全局样式',
  name: 'globalStyle',
  extraProps: {
    display: 'accordion',
    defaultCollapsed: true,
  },
  items: [
    {
      name: 'hasBorder',
      title: '列分隔线',
      display: 'inline',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'isZebra',
      title: '斑马线',
      display: 'inline',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'hasBorder',
      title: '边框',
      display: 'inline',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'loading',
      title: '加载中',
      display: 'inline',
      defaultValue: false,
      setter: ['BoolSetter','VariableSetter'],
    },
    {
      name: 'hasHeader',
      title: '头部',
      display: 'inline',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'fixedHeader',
      title: '固定表头',
      display: 'inline',
      defaultValue: false,
      setter: 'BoolSetter',
    },

    {
      name: 'size',
      title: '密度',
      display: 'inline',
      defaultValue: 'medium',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '紧凑',
              value: 'small',
              tip: 'small',
            },
            {
              title: '正常',
              value: 'medium',
              tip: 'medium',
            },
          ],
        },
      },
    },
  ],
};
