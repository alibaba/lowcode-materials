import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SwiperMeta: IPublicTypeComponentMetadata = {
  componentName: 'Swiper',
  title: '滑块视图容器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Swiper',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '布局',
  icon: 'rqeswiper',
  configure: {
    props: [
      {
        title: {
          label: '指示点',
          tip: '是否显示面板指示点',
        },
        name: 'indicatorDots',
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        title: {
          label: '指示点颜色',
        },
        name: 'indicatorColor',
        setter: { componentName: 'ColorSetter' },
      },
      {
        title: {
          label: '选中点颜色',
        },
        name: 'indicatorActiveColor',
        setter: 'ColorSetter',
      },
      {
        title: {
          label: '自动切换',
          tip: '是否自动切换',
        },
        name: 'autoplay',
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        title: {
          label: '当前滑块',
          tip: '当前所在滑块的下标',
        },
        name: 'current',
        setter: 'BoolSetter',
      },
      {
        title: {
          label: '切换时间',
          tip: '自动切换时间间隔 默认5000(毫秒)',
        },
        name: 'interval',
        setter: 'NumberSetter',
      },
      {
        title: {
          label: '衔接滑动',
          tip: '是否采用衔接滑动',
        },
        name: 'circular',
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        title: {
          label: '纵向滑动',
          tip: '滑动方向是否为纵向',
        },
        name: 'vertical',
        setter: 'BoolSetter',
      },
      {
        title: {
          label: '前边距',
          tip: '前边距，可用于露出前一项的一小部分（APP不支持）',
        },
        name: 'previousMargin',
        setter: {
          componentName: 'PxNumberSetter',
          props: {
            min: 0,
          },
        },
      },
      {
        title: {
          label: '后边距',
          tip: '后边距，可用于露出后一项的一小部分（APP不支持）',
        },
        name: 'nextMargin',
        setter: {
          componentName: 'PxNumberSetter',
          props: {
            min: 0,
          },
        },
      },
      {
        title: {
          label: '滑块数量',
          tip: '同时显示的滑块数量',
        },
        name: 'displayMultipleItems',
        setter: 'NumberSetter',
      },
    ],
    supports: {
      events: [
        {
          name: 'onChange',
          description: '当前滑块改变时触发',
          // @ts-ignore
          template:
            "onSwiperChange(e, ${extParams}) {\n  console.log('onSwiperChange', e.detail.value);\n}",
        },
        {
          name: 'onAnimationFinish',
          description: '动画结束时会触发',
          // @ts-ignore
          template:
            "onSwiperAnimationFinish(e, ${extParams}) {\n  console.log('onSwiperAnimationFinish', e.detail.value);\n}",
        },
      ],
      style: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['SwiperItem'],
      },
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '滑块视图容器',
    screenshot: '',
    schema: {
      componentName: 'View',
      props: {
        style: {
          backgroundColor: '#fff',
          borderRadius: '12px',
          height: '160px',
          overflow: 'hidden',
        },
      },
      children: [
        {
          componentName: 'Swiper',
          props: {
            style: {
              height: '160px',
            },
            indicatorDots: true,
            autoplay: true,
            circular: true,
          },
          children: [
            {
              componentName: 'SwiperItem',
              props: {},
              children: [
                {
                  componentName: 'View',
                  props: {
                    style: {
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#066feb',
                    },
                  },
                },
              ],
            },
            {
              componentName: 'SwiperItem',
              props: {},
              children: [
                {
                  componentName: 'View',
                  props: {
                    style: {
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f5a623',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export default {
  ...SwiperMeta,
  snippets,
};
