import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ConditionStyleSetterConfig, NodeChildrenSetterConfig, ViewStyleSetterConfig } from '../base';

const ViewMeta: IPublicTypeComponentMetadata = {
  componentName: 'View',
  title: '容器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'View',
    main: '',
    destructuring: true,
    subName: '',
  },
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        name: 'activeOpacity',
        setter: 'NumberSetter',
        title: '点击变色',
      },
      {
        name: 'elevation',
        setter: 'NumberSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'simpleShadow',
            'zh-CN': '简易阴影',
          },
          tip: '兼容RN—Android阴影缺陷'
        },
      },
      {
        name: 'safeTop',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'safeTop',
            'zh-CN': '顶部安区',
          },
          tip: '用于页面顶部占位，用于适配刘海屏、水滴屏等，自动增加内边距，防止遮挡（请注意此容器不可设置固定高度）'
        },
      },
      {
        name: 'safeBottom',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'safeTop',
            'zh-CN': '底部安区',
          },
          tip: '用于页面底部占位，用于苹果等含有底部小白条的区域，自动增加内边距，防止误触（请注意此容器不可设置固定高度）'
        },
      },
      {
        name: 'animationIn',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'animationIn',
            'zh-CN': '进入动画',
          },
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              { "label": "无动画", "value": '' },
              { "label": "弹跳", "value": "bounceIn" },
              { "label": "向下弹跳进入", "value": "bounceInDown" },
              { "label": "向左弹跳进入", "value": "bounceInLeft" },
              { "label": "向右弹跳进入", "value": "bounceInRight" },
              { "label": "向上弹跳进入", "value": "bounceInUp" },
              { "label": "淡入", "value": "fadeIn" },
              { "label": "向下淡入", "value": "fadeInDown" },
              { "label": "向下淡入大", "value": "fadeInDownBig" },
              { "label": "向左淡入", "value": "fadeInLeft" },
              { "label": "向左淡入大", "value": "fadeInLeftBig" },
              { "label": "向右淡入", "value": "fadeInRight" },
              { "label": "向右淡入大", "value": "fadeInRightBig" },
              { "label": "向上淡入", "value": "fadeInUp" },
              { "label": "向上淡入大", "value": "fadeInUpBig" },
              { "label": "闪烁", "value": "flash" },
              { "label": "弹性进入", "value": "flipInX" },
              { "label": "弹性进入", "value": "flipInY" },
              { "label": "气旋进入", "value": "lightSpeedIn" },
              { "label": "脉冲", "value": "pulse" },
              { "label": "振荡进入", "value": "rubberBand" },
              { "label": "摇摆", "value": "shake" },
              { "label": "晃动进入", "value": "swing" },
              { "label": "转动进入", "value": "rotateIn" },
              { "label": "向下转动进入", "value": "rotateInDownLeft" },
              { "label": "向下转动进入", "value": "rotateInDownRight" },
              { "label": "向上转动进入", "value": "rotateInUpLeft" },
              { "label": "向上转动进入", "value": "rotateInUpRight" },
              { "label": "放大进入", "value": "zoomIn" },
              { "label": "向下放大进入", "value": "zoomInDown" },
              { "label": "向左放大进入", "value": "zoomInLeft" },
              { "label": "向右放大进入", "value": "zoomInRight" },
              { "label": "向上放大进入", "value": "zoomInUp" },
              { "label": "向下滑动进入", "value": "slideInDown" },
              { "label": "向左滑动进入", "value": "slideInLeft" },
              { "label": "向右滑动进入", "value": "slideInRight" },
              { "label": "向上滑动进入", "value": "slideInUp" }
            ]
          }
        }
      },
      {
        name: 'inDelay',
        setter: 'NumberSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inDelay',
            'zh-CN': '进入延迟',
          },
        },
      },
      {
        name: 'inDuration',
        setter: 'NumberSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inDuration',
            'zh-CN': '进入时长',
          },
        },
      },
      {
        name: 'animationOut',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'animationOut',
            'zh-CN': '离开动画',
          },
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              { "label": "无动画", "value": '' },
              { "label": "弹跳退出", "value": "bounceOut" },
              { "label": "向下弹跳退出", "value": "bounceOutDown" },
              { "label": "向左弹跳退出", "value": "bounceOutLeft" },
              { "label": "向右弹跳退出", "value": "bounceOutRight" },
              { "label": "向上弹跳退出", "value": "bounceOutUp" },
              { "label": "淡出", "value": "fadeOut" },
              { "label": "向下淡出", "value": "fadeOutDown" },
              { "label": "向下淡出大", "value": "fadeOutDownBig" },
              { "label": "向左淡出", "value": "fadeOutLeft" },
              { "label": "向左淡出大", "value": "fadeOutLeftBig" },
              { "label": "向右淡出", "value": "fadeOutRight" },
              { "label": "向右淡出大", "value": "fadeOutRightBig" },
              { "label": "向上淡出", "value": "fadeOutUp" },
              { "label": "向上淡出大", "value": "fadeOutUpBig" },
              { "label": "闪烁", "value": "flash" },
              { "label": "弹性退出", "value": "flipOutX" },
              { "label": "弹性退出", "value": "flipOutY" },
              { "label": "气旋退出", "value": "lightSpeedOut" },
              { "label": "脉冲退出", "value": "pulse" },
              { "label": "摇摆退出", "value": "rubberBand" },
              { "label": "摇摆退出", "value": "shake" },
              { "label": "晃动退出", "value": "swing" },
              { "label": "转动退出", "value": "rotateOut" },
              { "label": "向下转动退出", "value": "rotateOutDownLeft" },
              { "label": "向下转动退出", "value": "rotateOutDownRight" },
              { "label": "向上转动退出", "value": "rotateOutUpLeft" },
              { "label": "向上转动退出", "value": "rotateOutUpRight" },
              { "label": "缩小退出", "value": "zoomOut" },
              { "label": "向下缩小退出", "value": "zoomOutDown" },
              { "label": "向左缩小退出", "value": "zoomOutLeft" },
              { "label": "向右缩小退出", "value": "zoomOutRight" },
              { "label": "向上缩小退出", "value": "zoomOutUp" },
              { "label": "向下滑动退出", "value": "slideOutDown" },
              { "label": "向左滑动退出", "value": "slideOutLeft" },
              { "label": "向右滑动退出", "value": "slideOutRight" },
              { "label": "向上滑动退出", "value": "slideOutUp" }
            ]
          }
        }
      },
      {
        name: 'outDelay',
        setter: 'NumberSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'outDelay',
            'zh-CN': '离开延迟',
          },
        },
      },
      {
        name: 'outDuration',
        setter: 'NumberSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'outDuration',
            'zh-CN': '离开时长',
          },
        },
      },
      {
        name: 'onMount',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMount',
            'zh-CN': '初始播放',
          },
        },
      },
      {
        name: 'visible',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'visible',
            'zh-CN': '是否播放',
          },
        },
      },
      {
        name: 'repeat',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'repeat',
            'zh-CN': '重复次数',
          },
          tip: '动画重复多少次（最小：1，最大：3）'
        },
      },
      {
        name: 'loop',
        setter: 'BoolSetter',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loop',
            'zh-CN': '循环播放',
          },
        },
      },
      ViewStyleSetterConfig,
      ConditionStyleSetterConfig,
      NodeChildrenSetterConfig,
    ],
    supports: {
      // className: true,
      style: false,
      events: [
        {
          name: 'onClick',
          description: '点击',
          // @ts-ignore
          template: "onClick(e, ${extParams}) {\n  console.log('onClick');\n}",
        },
        {
          name: 'onLongTap',
          description: '长按',
          // @ts-ignore
          template: "onLongTap(e, ${extParams}) {\n  console.log('onLongTap');\n}",
        },
        {
          name: 'onTouchStart',
          description: '触摸开始',
          template: "onTouchStart(e, ${extParams}) {\n  console.log('onTouchStart');\n}",
        },
        {
          name: 'onTouchEnd',
          description: '触摸结束',
          template: "onTouchEnd(e, ${extParams}) {\n  console.log('onTouchEnd');\n}",
        },
        {
          name: 'onTouchMove',
          description: '触摸移动',
          template: "onTouchMove(e, ${extParams}) {\n  console.log('onTouchMove');\n}",
        },
        {
          name: 'onTouchCancel',
          description: '触摸被打断',
          template: "onTouchCancel(e, ${extParams}) {\n  console.log('onTouchCancel');\n}",
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '容器',
    screenshot: '',
    schema: {
      componentName: 'View',
      props: {},
    },
  },
];

export default {
  ...ViewMeta,
  snippets,
};
