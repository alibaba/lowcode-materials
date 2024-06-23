import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { ExtendComponentMetadata } from '../type';

const EditorMeta: ExtendComponentMetadata = {
  componentName: 'Editor',
  title: '富文本编辑',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Editor',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  hideInProjectType: ['web', 'app'],
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'readOnly',
            'zh-CN': '是否只读',
          },
          tip: '设置编辑器为只读',
        },
        name: 'readOnly',
        // description: '',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': '提示文字',
          },
          // tip: 'placeholder | 提示文字',
        },
        name: 'placeholder',
        description: '提示文字',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '请输入',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showImgSize',
            'zh-CN': '图片大小控件',
          },
          tip: '点击图片时显示图片大小控件',
        },
        name: 'showImgSize',
        // description: '',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showImgToolbar',
            'zh-CN': '点图显工具栏',
          },
          tip: '点击图片时显示工具栏控件',
        },
        name: 'showImgToolbar',
        // description: '',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showImgResize',
            'zh-CN': '点显改图大小',
          },
          tip: '点击图片时显示修改尺寸控件',
        },
        name: 'showImgResize',
        // description: '',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '输入值',
          },
        },
        description: '请绑定输入值',
        name: 'value',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onInput',
          description: '文本输入时触发',
          // @ts-ignore
          template:
            "onInput(e, extParams) {\n  console.log('onInput', e, extParams);\n}",
        },
        {
          name: 'onFocus',
          description: '编辑器聚焦时触发',
          // @ts-ignore
          template: "onFocus(e, extParams) {\n  console.log('onFocus', e, extParams);\n}",
        },
        {
          name: 'onBlur',
          description: '编辑器失去焦点时触发',
          // @ts-ignore
          template: "onBlur(e, extParams) {\n  console.log('onBlur', e, extParams);\n}",
        },
        {
          name: 'onReady',
          description: '编辑器初始化完成时触发',
          // @ts-ignore
          template: "onReady(e) {\n  console.log('onReady', e);\n}",
        },
        {
          name: 'onConfirm',
          description: '点击完成按钮时触发',
          // @ts-ignore
          template: "onConfirm(value, extParams) {\n  console.log('onChange', value, extParams);\n}",
        },
      ],
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  // {
  //   title: '富文本编辑',
  //   screenshot: '',
  //   schema: {
  //     componentName: 'Editor',
  //     props: {},
  //   },
  // },
];

export default {
  ...EditorMeta,
  snippets,
};
