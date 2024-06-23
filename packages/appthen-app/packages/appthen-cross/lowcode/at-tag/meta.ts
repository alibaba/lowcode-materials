import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtTagMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtTag',
  title: '标签',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtTag',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '展示',
  icon: 'rqetag',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'text',
            'zh-CN': '标签内容',
          },
        },
        name: 'children',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '大小尺寸',
          },
          tip: 'size | 大小尺寸',
        },
        name: 'size',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '常规',
                value: 'normal',
              },
              {
                label: '小',
                value: 'small',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': '样式类型',
          },
          tip: 'type | 样式类型',
        },
        name: 'type',
        description: '样式类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '主要',
                value: 'primary',
              },
              {
                label: '无',
                value: '',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': '标签名字',
          },
          tip: 'name | 标签名字',
        },
        name: 'name',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'circle',
            'zh-CN': '是否圆角',
          },
          tip: 'circle | 是否大圆角',
        },
        name: 'circle',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'active',
            'zh-CN': '选中状态',
          },
          tip: 'active | 是否为选中态',
        },
        name: 'active',
        description: '是否为选中态',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '是否禁用',
          },
          tip: 'disabled | 是否为禁用态',
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          description: '点击(返回标签名字和状态)',
          // @ts-ignore
          template: "onClick(e, ${extParams}) {\n  console.log('onClick', e);\n}",
        },
      ],
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '标签',
    screenshot: '',
    schema: {
      componentName: 'AtTag',
      props: {
        children: '文字',
        active: true,
      },
    },
  },
];

export default {
  ...AtTagMeta,
  snippets,
};
