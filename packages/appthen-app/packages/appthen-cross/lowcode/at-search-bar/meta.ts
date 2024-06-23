import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtSearchBarMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtSearchBar',
  title: '搜索栏',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtSearchBar',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqesearch-bar',
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
              inputField: 'value',
              outField: 'onChange',
              setStateValueField: 'value',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '输入值',
          },
          tip: 'value | 输入框当前值',
        },
        name: 'value',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': '占位文字',
          },
          tip: 'placeholder | 输入框占位符',
        },
        name: 'placeholder',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': '最大长度',
          },
          tip: 'maxLength | 最大输入长度',
        },
        name: 'maxLength',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'fixed',
      //       'zh-CN': '飘浮顶部',
      //     },
      //     tip: 'fixed | 是否飘浮固定顶部',
      //   },
      //   name: 'fixed',
      //   description: '是否固定顶部',
      //   defaultValue: 'false',
      //   setter: {
      //     componentName: 'ObjectSetter',
      //     props: {
      //       config: {
      //         extraSetter: {
      //           componentName: 'MixedSetter',
      //           isRequired: false,
      //           props: {},
      //         },
      //       },
      //     },
      //     isRequired: false,
      //     initialValue: {},
      //   },
      // },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'focus',
            'zh-CN': '是否聚焦',
          },
          tip: 'focus | 是否聚焦',
        },
        name: 'focus',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '是否禁止',
          },
          tip: 'disabled | 是否禁止输入',
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showActionButton',
            'zh-CN': '右侧按钮常显',
          },
          tip: '是否一直显示右侧按钮',
        },
        name: 'showActionButton',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'actionName',
            'zh-CN': '右侧按钮文案',
          },
          tip: 'actionName | 右侧按钮文案',
        },
        name: 'actionName',
        description: '右侧按钮文案',
        defaultValue: '搜索',
        setter: {
          componentName: 'StringSetter',
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'inputType',
      //       'zh-CN': '输入类型',
      //     },
      //     tip: 'inputType | 输入框输入类型',
      //   },
      //   name: 'inputType',
      //   setter: {
      //     componentName: 'StringSetter',
      //   },
      // },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description: '文本输入时触发',
          // @ts-ignore
          template: "onChange(value, ${extParams}) {\n  console.log('onChange', value);\n}",
        },
        {
          name: 'onFocus',
          description: '获得焦点触发',
          // @ts-ignore
          template: "onFocus(e, ${extParams}) {\n  console.log('onFocus', e);\n}",
        },
        {
          name: 'onBlur',
          description: '失去焦点触发',
          // @ts-ignore
          template: "onBlur(e, ${extParams}) {\n  console.log('onBlur', e);\n}",
        },
        {
          name: 'onConfirm',
          // @ts-ignore
          template: "onConfirm(e, ${extParams}) {\n  console.log('onConfirm', e);\n}",
          description: '点击完成按钮时触发',
        },
        {
          name: 'onClear',
          // @ts-ignore
          template: "onClear(e, ${extParams}) {\n  console.log('onClear', e);\n}",
          description: '点击清除按钮时触发事',
        },
        {
          name: 'onActionClick',
          // @ts-ignore
          template: "onActionClick(e, ${extParams}) {\n  console.log('onActionClick', e);\n}",
          description: '右侧按钮点击触发事件',
        },
      ],
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '搜索栏',
    screenshot: '',
    schema: {
      componentName: 'AtSearchBar',
      props: {
        actionName: '搜索',
      },
    },
  },
];

export default {
  ...AtSearchBarMeta,
  snippets,
};
