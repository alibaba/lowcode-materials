import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CanvasMeta: IPublicTypeComponentMetadata = {
  componentName: 'Canvas',
  title: '画布',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '3.0.0',
    exportName: 'Canvas',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '展示',
  icon: 'rqeliebiao',
  configure: {
    props: [
      {
        title: {
          label: '组件唯一标识符',
          tip: '组件的唯一标识符 id',
        },
        name: 'id',
        description: '组件唯一标识符',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: '画布类型',
          tip: '指定画布的类型，支持 2d 和 webgl。',
        },
        name: 'type',
        description: '画布类型',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: '画布标识符',
          tip: '画布的标识符 canvasId',
        },
        name: 'canvasId',
        description: '画布标识符',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: '禁止滚动',
          tip: '是否禁止画布上的滚动。',
        },
        name: 'disableScroll',
        description: '禁止滚动',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: '宽度',
          tip: '画布的宽度。',
        },
        name: 'width',
        description: '宽度',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: '高度',
          tip: '画布的高度。',
        },
        name: 'height',
        description: '高度',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: '透传属性',
          tip: '用于透传 `WebComponents` 上的属性到内部 H5 标签上。',
        },
        name: 'nativeProps',
        description: '透传属性',
        setter: {
          componentName: 'ObjectSetter',
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onTouchStart',
          description: '手指触摸动作开始',
          // @ts-ignore
          template: `onTouchStart(e) {
  console.log('onTouchStart');
}`,
        },
        {
          name: 'onTouchMove',
          description: '手指触摸后移动',
          template: `onTouchMove(e) {
  console.log('onTouchMove');
}`,
        },
        {
          name: 'onTouchEnd',
          description: '手指触摸动作结束',
          template: `onTouchEnd(e) {
  console.log('onTouchEnd');
}`,
        },
        {
          name: 'onTouchCancel',
          description: '手指触摸动作被打断',
          template: `onTouchCancel(e) {
  console.log('onTouchCancel');
}`,
        },
        {
          name: 'onLongTap',
          description: '手指长按',
          template: `onLongTap(e) {
  console.log('onLongTap');
}`,
        },
        {
          name: 'onError',
          description: '发生错误时触发',
          template: `onError(e) {
  console.log('onError');
}`,
        },
        {
          name: 'onTap',
          description: '点击',
          template: `onTap(e) {
  console.log('onTap');
}`,
        },
        {
          name: 'onReady',
          description: 'canvas 组件初始化成功触发',
          template: `onReady(e) {
  console.log('onReady');
}`,
        },
      ],
    },
  },
  component: {},
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: '画布',
    screenshot: '',
    schema: {
      componentName: 'Canvas',
      props: {},
    },
  },
];

export default {
  ...CanvasMeta,
  snippets,
};
