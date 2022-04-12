import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Slider',
  title: '图片轮播',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Slider',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'slideDirection',
        title: {
          label: '轮播方向',
          tip: 'slideDirection',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '水平',
                value: 'hoz',
              },
              {
                label: '垂直',
                value: 'ver',
              },
            ],
          },
        },
        description: '轮播方向',
        defaultValue: 'hoz',
      },
      {
        name: 'speed',
        title: {
          label: '轮播速度',
          tip: 'speed',
        },
        setter: 'NumberSetter',
        description: '轮播速度',
        defaultValue: 600,
      },
      {
        name: 'arrows',
        title: {
          label: '箭头',
          tip: 'arrows|是否显示箭头',
        },
        setter: 'BoolSetter',
        description: '是否显示箭头',
        defaultValue: true,
      },
      {
        name: 'arrowSize',
        title: {
          label: '箭头大小',
          tip: "arrowSize|导航箭头大小 可选值: 'medium', 'large'",
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        description: "导航箭头大小 可选值: 'medium', 'large'",
        defaultValue: 'medium',
      },
      {
        name: 'arrowPosition',
        title: {
          label: '箭头位置',
          tip: "arrowPosition|导航箭头位置 可选值: 'inner', 'outer'",
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '内',
                value: 'inner',
              },
              {
                label: '外',
                value: 'outter',
              },
            ],
          },
        },
        description: "导航箭头位置 可选值: 'inner', 'outer'",
        defaultValue: 'inner',
      },
      {
        name: 'dots',
        title: {
          label: '导航锚点',
          tip: 'dots|是否显示导航锚点',
        },
        setter: 'BoolSetter',
        description: '是否显示导航锚点',
        defaultValue: true,
      },
      {
        name: 'dotsDirection',
        title: {
          label: '导航锚点位置',
          tip: 'dotsDirection',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '水平',
                value: 'hoz',
              },
              {
                label: '垂直',
                value: 'ver',
              },
            ],
          },
        },
        description: '导航锚点位置',
        defaultValue: 'hoz',
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'style.height',
        title: '高度',
        setter: 'NumberSetter',
      },
      {
        name: 'slidesToShow',
        title: {
          label: '图片数量',
          tip: 'slidesToShow|同时展示的图片数量',
        },
        setter: 'NumberSetter',
        description: '同时展示的图片数量',
        defaultValue: 1,
      },
    ],
  },
  icon: '',
  category: '信息展示',
  snippets,
};
