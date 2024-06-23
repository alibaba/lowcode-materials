import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'Picker',
  title: '弹出选择器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'Picker',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqexialakuang',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': '类型',
          },
        },
        name: 'mode',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                label: '普通选择器',
                value: 'selector',
              },
              {
                label: '多列选择器',
                value: 'multiSelector',
              },
              {
                label: '时间选择器',
                value: 'time',
              },
              {
                label: '日期选择器',
                value: 'date',
              },
            ],
          },
          initialValue: 'selector',
        },
      },
      {
        name: 'range',
        title: { label: '可选项', tip: '类型为 普通选择器 或 多列选择器 时，可选项 有效' },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'VariableSetter',
              },
              {
                componentName: 'JsonSetter',
                title: 'JSON编辑',
              },
            ],
          },
        },
      },
      {
        name: 'value',
        title: { label: '值', tip: '表示选择了 可选项 中的第几个（下标从 0 开始）' },
        // propType: { type: 'arrayOf', value: 'any' },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'StringSetter',
              },
              {
                componentName: 'VariableSetter',
              },
            ],
          },
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rangeKey',
            'zh-CN': '数据索引值',
          },
          tip: '当 可选项为 是一个 Object Array 时，通过 数据索引值 来指定 Object 中 key 的值作为选择器显示内容',
        },
        name: 'rangeKey',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '是否禁用',
          },
        },
        name: 'disabled',
        description: '是否禁用',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          // initialValue: false,
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onChange',
          description: '选择后触发',
          // @ts-ignore
          template:
            "onPickerChange(e, extParams) {\n  console.log('onPickerChange', e.detail.value, extParams);\n}",
        },
        {
          name: 'onColumnChange',
          description: '列改变后触发',
          // @ts-ignore
          template:
            "onPickerColumnChange(e, extParams) {\n  console.log('onPickerColumnChange', e, extParams);\n}",
        },
      ],
      style: false,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '选择器',
    screenshot: 'rqexialakuang',
    schema: {
      componentName: 'Picker',
      props: {},
      children: [
        {
          componentName: 'View',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'row',
              height: '40px',
              backgroundColor: '#eeeeee',
              borderRadius: '6px',
              paddingRight: '5px',
              marginTop: '10px',
            },
          },
          children: [
            {
              componentName: 'View',
              props: {
                style: {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingLeft: '10px',
                },
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#666666',
                    },
                    children: '点击选择',
                  },
                },
              ],
            },
            {
              componentName: 'View',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                },
              },
              children: [
                {
                  componentName: 'AtIcon',
                  props: {
                    value: 'chevron-down',
                    size: 20,
                    color: '#666',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: '时间选择器',
    screenshot: 'rqeshijianxuanze',
    schema: {
      componentName: 'Picker',
      props: {
        mode: 'time',
        value: '08:00',
      },
      children: [
        {
          componentName: 'View',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'row',
              height: '40px',
              backgroundColor: '#eeeeee',
              borderRadius: '6px',
              paddingRight: '5px',
              marginTop: '10px',
            },
          },
          children: [
            {
              componentName: 'View',
              props: {
                style: {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingLeft: '10px',
                },
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#666666',
                    },
                    children: '点击选择',
                  },
                },
              ],
            },
            {
              componentName: 'View',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                },
              },
              children: [
                {
                  componentName: 'AtIcon',
                  props: {
                    value: 'chevron-down',
                    size: 20,
                    color: '#666',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    title: '日期选择器',
    screenshot: 'rqekeshihuapingtaiicon_riqixuanze',
    schema: {
      componentName: 'Picker',
      props: {
        mode: 'date',
        value: '2023-01-01',
      },
      children: [
        {
          componentName: 'View',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'row',
              height: '40px',
              backgroundColor: '#eeeeee',
              borderRadius: '6px',
              paddingRight: '5px',
              marginTop: '10px',
            },
          },
          children: [
            {
              componentName: 'View',
              props: {
                style: {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingLeft: '10px',
                },
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#666666',
                    },
                    children: '点击选择',
                  },
                },
              ],
            },
            {
              componentName: 'View',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                },
              },
              children: [
                {
                  componentName: 'AtIcon',
                  props: {
                    value: 'chevron-down',
                    size: 20,
                    color: '#666',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export default {
  ...PickerMeta,
  snippets,
};
