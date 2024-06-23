import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
const RowMeta: IPublicTypeComponentMetadata = {
  componentName: 'Row',
  title: '行',
  // docUrl: ' https://nutui.jd.com ',
  // screenshot: 'row.png',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Row',
    main: '',
    destructuring: true,
    subName: '',
  },
  // hideInProjectType: ['web', 'app'],
  group: '原子组件',
  category: '布局',
  icon: 'rqebiaodanzujian-shurukuang',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'gutter',
            'zh-CN': '间隔距离',
          },
          tip: {
            type: 'i18n',
            'en-US': 'The spacing between columns in pixels.',
            'zh-CN': '列之间的间隔距离，单位为像素。',
          },
        },
        name: 'gutter',
        description: '间隔距离',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'align',
            'zh-CN': '对齐方式',
          },
          tip: {
            type: 'i18n',
            'en-US': 'The alignment of flex items.',
            'zh-CN': 'flex 子项的对齐方式。',
          },
        },
        name: 'align',
        description: '对齐方式',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '左对齐',
                value: 'left',
              },
              {
                label: '居中对齐',
                value: 'center',
              },
              {
                label: '右对齐',
                value: 'right',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'justify',
            'zh-CN': '水平排列方式',
          },
          tip: {
            type: 'i18n',
            'en-US': 'The horizontal arrangement of flex items.',
            'zh-CN': 'flex 子项的水平排列方式。',
          },
        },
        name: 'justify',
        description: '水平排列方式',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '左对齐',
                value: 'start',
              },
              {
                label: '居中对齐',
                value: 'center',
              },
              {
                label: '右对齐',
                value: 'end',
              },
              {
                label: '两端对齐',
                value: 'between',
              },
              {
                label: '环绕排列',
                value: 'around',
              },
            ],
          },
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '行布局',
      screenshot: '',
      schema: {
        componentName: 'Row',
        props: {},
        children: [
          {
            componentName: 'Col',
            props: {
              span: 12,
            },
            children: [],
          },
          {
            componentName: 'Col',
            props: {
              span: 12,
            },
            children: [],
          },
        ],
      },
    },
  ],
};
export default RowMeta;
