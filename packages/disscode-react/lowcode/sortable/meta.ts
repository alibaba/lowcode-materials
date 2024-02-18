import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SortableMeta: IPublicTypeComponentMetadata = {
  componentName: 'Sortable',
  title: '可排序组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@appthen/react',
    version: '0.0.5',
    exportName: 'Sortable',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '展示',
  icon: 'rqevideo',
  configure: {
    props: [
      {
        title: {
          label: '子项类名',
          tip: '自定义子项的 CSS 类名。',
        },
        name: 'itemClassName',
        description: '子项类名',
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onSort',
          description: '当开始/继续播放时触发',
          // @ts-ignore
          template: 'onSort(sortedIds) {\n\n}',
        },
        {
          name: 'dragImageSourceHandler',
          description: '拖拽图像源处理器',
          // @ts-ignore
          template: 'dragImageSourceHandler(elem) {\n  return elem;\n}',
        },
      ],
    },
  },
  component: {
    isContainer: true,
  },
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: '可排序组件',
    screenshot: '',
    schema: {
      componentName: 'Sortable',
      props: {},
      children: [
        {
          componentName: 'View',
          props: {},
        },
      ],
    },
  },
];

export default {
  ...SortableMeta,
  snippets,
};
