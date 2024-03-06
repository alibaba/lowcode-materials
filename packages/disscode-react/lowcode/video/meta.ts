import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const VideoMeta: IPublicTypeComponentMetadata = {
  componentName: 'Video',
  title: '视频',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
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
          tip: ''
        },
        name: '指定视频初始播放位置',
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
          tip: '是否显示视频中间的播放按钮'
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
          tip: '是否开启控制进度的手势'
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
            'en-US': 'objectFit',
            'zh-CN': '裁剪模式',
          },
          tip: '当视频大小与 video 容器大小不一致时，视频的表现形式'
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
    ],
    supports: {
      className: false,
      style: true,
      events: [
        {
          name: 'onPlay',
          description: '当开始/继续播放时触发',
          // @ts-ignore
          template: "onPlay(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onPause',
          description: '当暂停播放时触发',
          // @ts-ignore
          template: "onPause(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onEnded',
          description: '当播放到末尾时触发',
          // @ts-ignore
          template: "onEnded(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onTimeUpdate',
          description: '播放进度变化时触发',
          // @ts-ignore
          template: "onTimeUpdate(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onFullscreenChange',
          description: '进入和退出全屏时触发',
          // @ts-ignore
          template: "onFullscreenChange(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onError',
          description: '视频播放出错时触发',
          // @ts-ignore
          template: "onError(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onSeekComplete',
          description: 'seek 完成时触发',
          // @ts-ignore
          template: "onSeekComplete(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onEnterPictureInPicture',
          description: '播放器进入小窗',
          // @ts-ignore
          template: "onEnterPictureInPicture(e, ${extParams}) {\n\n}",
        },
        {
          name: 'onLeavePictureInPicture',
          description: '播放器退出小窗',
          // @ts-ignore
          template: "onLeavePictureInPicture(e, ${extParams}) {\n\n}",
        },
      ]
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
          backgroundColor: '#333'
        },
      },
    },
  },
];

export default {
  ...VideoMeta,
  snippets,
};
