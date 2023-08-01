import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Slider',
  title: '图片轮播',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Slider',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'className',
      propType: 'any',
      description: '自定义传入的样式',
    },
    {
      name: 'slidesToShow',
      title: {
        label: '图片数量',
        tip: 'slidesToShow|同时展示的图片数量',
      },
      propType: 'number',
      description: '同时展示的图片数量',
      defaultValue: 1,
    },
    {
      name: 'slidesToScroll',
      title: {
        label: '同时滑动的图片数量',
        tip: 'slidesToScroll',
      },
      propType: 'number',
      description: '同时滑动的图片数量',
      defaultValue: 1,
    },
    {
      name: 'speed',
      title: {
        label: '轮播速度',
        tip: 'speed',
      },
      propType: 'number',
      description: '轮播速度',
      defaultValue: 600,
    },
    {
      name: 'activeIndex',
      title: {
        label: '指定轮播图',
        tip: 'activeIndex|跳转到指定的轮播图（受控）',
      },
      propType: 'number',
      description: '跳转到指定的轮播图（受控）',
    },
    {
      name: 'adaptiveHeight',
      title: {
        label: '自适应高度',
        tip: 'adaptiveHeight',
      },
      propType: 'bool',
      description: '是否使用自适应高度',
      defaultValue: false,
    },
    {
      name: 'animation',
      title: {
        label: '动效类型',
        tip: 'animation',
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'bool'],
      },
      description: "动效类型，默认是'slide'",
      defaultValue: 'slide',
    },
    {
      name: 'arrows',
      title: {
        label: '箭头',
        tip: 'arrows|是否显示箭头',
      },
      propType: 'bool',
      description: '是否显示箭头',
      defaultValue: true,
    },
    {
      name: 'arrowSize',
      title: {
        label: '箭头大小',
        tip: "arrowSize|导航箭头大小 可选值: 'medium', 'large'",
      },
      propType: {
        type: 'oneOf',
        value: ['medium', 'large'],
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
      propType: {
        type: 'oneOf',
        value: ['inner', 'outer'],
      },
      description: "导航箭头位置 可选值: 'inner', 'outer'",
      defaultValue: 'inner',
    },
    {
      name: 'arrowDirection',
      title: {
        label: '箭头方向',
        tip: "arrowDirection|导航箭头的方向 可选值: 'hoz', 'ver'",
      },
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: "导航箭头的方向 可选值: 'hoz', 'ver'",
      defaultValue: 'hoz',
    },
    {
      name: 'autoplay',
      title: {
        label: '自动播放',
        tip: 'autoplay',
      },
      propType: 'bool',
      description: '是否自动播放',
      defaultValue: false,
    },
    {
      name: 'autoplaySpeed',
      title: {
        label: '自动播放的速度',
        tip: 'autoplaySpeed, 默认 3000 毫秒',
      },
      propType: 'number',
      description: '自动播放的速度',
      defaultValue: 3000,
    },
    {
      name: 'nextArrow',
      propType: 'node',
      description: '向后箭头',
      defaultValue: null,
    },
    {
      name: 'prevArrow',
      propType: 'node',
      description: '向前箭头',
      defaultValue: null,
    },
    {
      name: 'centerMode',
      title: {
        label: '居中模式',
        tip: 'centerMode',
      },
      propType: 'bool',
      description: '是否启用居中模式',
      defaultValue: false,
    },
    {
      name: 'dots',
      title: {
        label: '导航锚点',
        tip: 'dots|是否显示导航锚点',
      },
      propType: 'bool',
      description: '是否显示导航锚点',
      defaultValue: true,
    },
    {
      name: 'dotsDirection',
      title: {
        label: '导航锚点位置',
        tip: 'dotsDirection',
      },
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '导航锚点位置',
      defaultValue: 'hoz',
    },
    {
      name: 'draggable',
      title: {
        label: '可拖拽',
        tip: 'draggable',
      },
      propType: 'bool',
      description: '是否可拖拽',
      defaultValue: true,
    },
    {
      name: 'infinite',
      title: {
        label: '无穷循环',
        tip: 'infinite',
      },
      propType: 'bool',
      description: '是否使用无穷循环模式',
      defaultValue: true,
    },
    {
      name: 'defaultActiveIndex',
      title: {
        label: '初始轮播图',
        tip: 'defaultActiveIndex|初始被激活的轮播图',
      },
      propType: 'number',
      description: '初始被激活的轮播图',
      defaultValue: 0,
    },
    {
      name: 'lazyLoad',
      title: {
        label: '懒加载',
        tip: 'lazyLoad|是否启用懒加载',
      },
      propType: 'bool',
      description: '是否启用懒加载',
      defaultValue: false,
    },
    {
      name: 'slideDirection',
      title: {
        label: '轮播方向',
        tip: 'slideDirection',
      },
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '轮播方向',
      defaultValue: 'hoz',
    },
    {
      name: 'triggerType',
      title: {
        label: '触发方式',
        tip: 'triggerType|锚点导航触发方式',
      },
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '锚点导航触发方式',
      defaultValue: 'click',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '轮播切换的回调函数\n@param {Number} index 幻灯片的索引',
    },
    {
      name: 'onBeforeChange',
      propType: 'func',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义传入的class',
      defaultValue: null,
    },
    {
      name: 'focusOnSelect',
      title: {
        label: '自动居中',
        tip: 'focusOnSelect|多图轮播时，点击选中后自动居中',
      },
      propType: 'bool',
      description: '多图轮播时，点击选中后自动居中',
      defaultValue: false,
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: {
      isExtends: true,
      override: [
        {
          name: 'rtl',
          condition: () => false,
        },
        {
          name: 'prefix',
          condition: () => false,
        },
      ],
    },
  },
  icon: '',
  category: '信息展示',
  snippets,
};
