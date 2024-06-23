import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtRadioMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtRadio',
  title: '单选器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtRadio',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqeradio',
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
            'zh-CN': '当前值',
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
            "onChange(value, e, ${extParams}) {\n  console.log('onChange', value);\n}",
        },
      ]
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '单选器',
    screenshot: '',
    schema: {
      componentName: 'AtRadio',
      props: {
        options: [
          { label: '单选项一', value: 'option1', desc: '单选项描述' },
          { label: '单选项二', value: 'option2' },
          { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true },
        ],
      },
    },
  },
];

export default {
  ...AtRadioMeta,
  snippets,
};
