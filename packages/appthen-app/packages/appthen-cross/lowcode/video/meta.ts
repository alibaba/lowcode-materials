import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const VideoMeta: IPublicTypeComponentMetadata = {
  componentName: 'Video',
  title: '视频',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Video',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '媒体',
  icon: 'rqevideo',
  configure: {
    props: [
      {
        name: 'componentSetterHeader',
        title: ' ',
        virtual: () => true,
        display: 'plain',
        setter: {
          componentName: 'ComponentHeaderSetter',
          props: {
            fastBind: {
              inputField: 'src',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '资源地址',
          },
        },
        name: 'src',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'poster',
            'zh-CN': '封面地址',
          },
        },
        name: 'poster',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '视频标题',
          },
          tip: "视频的标题，全屏时在顶部展示"
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'controls',
            'zh-CN': '显示控件',
          },
        },
        name: 'controls',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoplay',
            'zh-CN': '自动播放',
          },
        },
        name: 'autoplay',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loop',
            'zh-CN': '循环播放',
          },
        },
        name: 'loop',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'muted',
            'zh-CN': '静音播放',
          },
        },
        name: 'muted',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'initialTime',
            'zh-CN': '初始位置',
          },
          tip: '指定视频初始播放位置',
        },
        name: 'initialTime',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showFullscreenBtn',
            'zh-CN': '全屏按钮',
          },
        },
        name: 'showFullscreenBtn',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showCenterPlayBtn',
            'zh-CN': '中间按钮',
          },
          tip: '是否显示视频中间的播放按钮',
        },
        name: 'showCenterPlayBtn',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showProgress',
            'zh-CN': '显示进度',
          },
          tip: '若不设置，宽度大于240时才会显示',
        },
        name: 'showProgress',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showPlayBtn',
            'zh-CN': '底栏播放按钮',
          },
          tip: '是否显示视频底部控制栏的播放按钮',
        },
        name: 'showPlayBtn',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showCenterPlayBtn',
            'zh-CN': '中间播放按钮',
          },
          tip: '是否显示视频中间的播放按钮',
        },
        name: 'showCenterPlayBtn',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'enableProgressGesture',
            'zh-CN': '手势控制',
          },
          tip: '是否开启控制进度的手势',
        },
        name: 'enableProgressGesture',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'enablePlayGesture',
            'zh-CN': '播放手势',
          },
          tip: '是否开启播放手势，即双击切换播放/暂停',
        },
        name: 'enablePlayGesture',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoPauseIfNavigate',
            'zh-CN': '离开暂停',
          },
          tip: '当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放',
        },
        name: 'autoPauseIfNavigate',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoPauseIfOpenNative',
            'zh-CN': '跳转微信暂停',
          },
          tip: '当跳转到其它微信原生页面时，是否自动暂停本页面的视频',
        },
        name: 'autoPauseIfOpenNative',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'vslideGesture',
            'zh-CN': '非全屏-手势',
          },
          tip: '在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）',
        },
        name: 'vslideGesture',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'vslideGestureInFullscreen',
            'zh-CN': '全屏-手势',
          },
          tip: '在全屏模式下，是否开启亮度与音量调节手势',
        },
        name: 'vslideGestureInFullscreen',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showBottomProgress',
            'zh-CN': '底部进度条',
          },
          tip: '是否展示底部进度条',
        },
        name: 'showBottomProgress',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showMuteBtn',
            'zh-CN': '静音按钮',
          },
          tip: '是否显示静音按钮',
        },
        name: 'showMuteBtn',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'customCache',
            'zh-CN': '自定义缓存',
          },
          tip: '用于解决微信小程序中播放中卡顿的问题',
        },
        name: 'customCache',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': '全屏方向',
          },
          tip: '设置全屏时视频的方向，不指定则根据宽高比自动判断',
        },
        name: 'direction',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '正常竖向',
                value: 0,
              },
              {
                label: '屏幕逆时针90度',
                value: 90,
              },
              {
                label: '屏幕顺时针90度',
                value: -90,
              },
            ],
            options: [
              {
                label: '正常竖向',
                value: 0,
              },
              {
                label: '屏幕逆时针90度',
                value: 90,
              },
              {
                label: '屏幕顺时针90度',
                value: -90,
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'playBtnPosition',
            'zh-CN': '播放按钮位置',
          },
        },
        name: 'playBtnPosition',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '控制栏',
                value: 'bottom',
              },
              {
                label: '视频中间',
                value: 'center',
              },
            ],
            options: [
              {
                label: '控制栏',
                value: 'bottom',
              },
              {
                label: '视频中间',
                value: 'center',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'objectFit',
            'zh-CN': '裁剪模式',
          },
          tip: '当视频大小与 video 容器大小不一致时，视频的表现形式',
        },
        name: 'objectFit',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '包含',
                value: 'contain',
              },
              {
                label: '填充',
                value: 'fill',
              },
              {
                label: '覆盖',
                value: 'cover',
              },
            ],
            options: [
              {
                label: '包含',
                value: 'contain',
              },
              {
                label: '填充',
                value: 'fill',
              },
              {
                label: '覆盖',
                value: 'cover',
              },
            ],
          },
        },
      },
      {
        name: 'danmuList',
        title: { label: '弹幕列表' },
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        name: 'danmuBtn',
        title: { label: '弹幕按钮', tip: '是否显示弹幕按钮，只在初始化时有效，不能动态变更' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'enableAutoRotation',
        title: { label: '横屏自动全屏', tip: '是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'showScreenLockButton',
        title: { label: '显示锁屏按钮', tip: '是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'showSnapshotButton',
        title: { label: '显示截屏按钮', tip: '是否显示截屏按钮，仅在全屏时显示' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'showBackgroundPlaybackButton',
        title: { label: '后台音频播放', tip: '是否展示后台音频播放按钮' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'backgroundPoster',
            'zh-CN': '后台播放图标',
          },
          tip: '进入后台音频播放后的通知栏图标（Android 独有）'
        },
        name: 'backgroundPoster',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'enableDanmu',
        title: { label: '显示弹幕', tip: '是否展示弹幕，只在初始化时有效，不能动态变更' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'showCastingButton',
        title: { label: '投屏按钮', tip: '显示投屏按钮。安卓在同层渲染下生效，支持 DLNA 协议；iOS 支持 AirPlay 和 DLNA 协议。可以通过VideoContext的相关方法进行操作。' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': '组件ID',
          },
          tip: '用于 this.utils.createVideoContext("id") 创建 video 上下文 VideoContext 对象'
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'pictureInPictureShowProgress',
        title: { label: '小窗显示进度', tip: '是否在小窗模式下显示播放进度' },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pictureInPictureMode',
            'zh-CN': '小窗模式',
          },
          tip: '设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）'
        },
        name: 'pictureInPictureMode',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '取消小窗',
                value: undefined,
              },
              {
                label: '路由 push 时触发小窗',
                value: 'push',
              },
              {
                label: '路由 pop 时触发小窗',
                value: 'pop',
              },
            ],
            options: [
              {
                label: '取消小窗',
                value: undefined,
              },
              {
                label: '路由 push 时触发小窗',
                value: 'push',
              },
              {
                label: '路由 pop 时触发小窗',
                value: 'pop',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'adUnitId',
            'zh-CN': '广告单元ID',
          },
          tip: '视频前贴广告单元ID，更多详情可参考开放能力视频前贴广告'
        },
        name: 'adUnitId',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'posterForCrawler',
            'zh-CN': '搜索场景封面',
          },
          tip: '用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址'
        },
        name: 'posterForCrawler',
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {
      className: false,
      style: true,
      events: [
        {
          name: 'onLoadedMetaData',
          description: '视频元数据加载完成时触发',
          // @ts-ignore
          template: 'onLoadedMetaData(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onPlay',
          description: '当开始/继续播放时触发',
          // @ts-ignore
          template: 'onPlay(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onPause',
          description: '当暂停播放时触发',
          // @ts-ignore
          template: 'onPause(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onEnded',
          description: '当播放到末尾时触发',
          // @ts-ignore
          template: 'onEnded(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onTimeUpdate',
          description: '播放进度变化时触发',
          // @ts-ignore
          template: 'onTimeUpdate(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onFullscreenChange',
          description: '进入和退出全屏时触发',
          // @ts-ignore
          template: 'onFullscreenChange(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onError',
          description: '视频播放出错时触发',
          // @ts-ignore
          template: 'onError(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onSeekComplete',
          description: 'seek 完成时触发',
          // @ts-ignore
          template: 'onSeekComplete(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onEnterPictureInPicture',
          description: '播放器进入小窗',
          // @ts-ignore
          template: 'onEnterPictureInPicture(e, ${extParams}) {\n\n}',
        },
        {
          name: 'onLeavePictureInPicture',
          description: '播放器退出小窗',
          // @ts-ignore
          template: 'onLeavePictureInPicture(e, ${extParams}) {\n\n}',
        },
      ],
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '视频',
    screenshot: '',
    schema: {
      componentName: 'Video',
      props: {
        style: {
          width: '100%',
          height: '200px',
          backgroundColor: '#333',
        },
      },
    },
  },
];

export default {
  ...VideoMeta,
  snippets,
};
