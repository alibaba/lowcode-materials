import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtAvatarMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtAvatar',
  title: '头像',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtAvatar',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '展示',
  icon: 'rqexiangce',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': '头像大小',
          },
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '正常',
                value: 'normal',
              },
              {
                label: '大',
                value: 'large',
              },
              {
                label: '小',
                value: 'small',
              },
            ],
            options: [
              {
                label: '正常',
                value: 'normal',
              },
              {
                label: '大',
                value: 'large',
              },
              {
                label: '小',
                value: 'small',
              },
            ],
          },
          initialValue: 'normal',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'circle',
            'zh-CN': '是否圆形',
          },
          tip: 'circle | 头像是否圆形',
        },
        name: 'circle',
        description: '头像是否圆形',
        defaultValue: 'false',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'text',
            'zh-CN': '文字头像',
          },
          tip: 'text | 以文字形式展示头像',
        },
        name: 'text',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': '图片地址',
          },
          tip: 'image | 头像图片地址',
        },
        name: 'image',
        setter: {
          componentName: 'ImageSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'customStyle',
            'zh-CN': '样式',
          },
        },
        name: 'customStyle',
        display: 'accordion',
        setter: {
          componentName: 'StyleSetter',
          props: {
            showModuleList: ['background', 'border', 'layout', 'position'],
          },
        },
      },
    ],
    supports: {
      style: false,
      className: false,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '头像',
    screenshot: '',
    schema: {
      componentName: 'AtAvatar',
      props: {
        size: 'normal',
        circle: true,
      },
    },
  },
];

export default {
  ...AtAvatarMeta,
  snippets,
};
