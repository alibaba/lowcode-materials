import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtCheckboxMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtCheckbox',
  title: '多选器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtCheckbox',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqecheck_box-24px',
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
              inputField: 'selectedList',
              outField: 'onChange',
              setStateValueField: 'e',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'selectedList',
            'zh-CN': '已选择',
          },
        },
        name: 'selectedList',
        setter: {
          componentName: 'JsonSetter',
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': '选项列表',
          },
          tip: 'options | 选项列表',
        },
        name: 'options',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'value',
                          'zh-CN': '标识符',
                        },
                      },
                      name: 'value',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['StringSetter', 'NumberSetter'],
                        },
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'label',
                          'zh-CN': '选项标题',
                        },
                      },
                      name: 'label',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'desc',
                          'zh-CN': '选项描述',
                        },
                      },
                      name: 'desc',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: false,
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'disabled',
                          'zh-CN': '禁止点击',
                        },
                      },
                      name: 'disabled',
                      setter: {
                        componentName: 'BoolSetter',
                      },
                    },
                  ],
                },
              },
            },
          },
          isRequired: true,
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'border',
            'zh-CN': '下边框',
          },
          tip: 'border | 是否显示下边框',
        },
        name: 'border',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description: '点击选择后触发',
          // @ts-ignore
          template:
            "onChange(e, ${extParams}) {\n  console.log('onChange', e);\n}",
        },
      ]
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '多选器',
    screenshot: '',
    schema: {
      componentName: 'AtCheckbox',
      props: {
        options: [
          { label: '选项一', value: 'option1', desc: '单选项描述' },
          { label: '选项二', value: 'option2' },
          { label: '选项三禁用', value: 'option3', desc: '单选项描述', disabled: true },
        ],
      },
    },
  },
];

export default {
  ...AtCheckboxMeta,
  snippets,
};
