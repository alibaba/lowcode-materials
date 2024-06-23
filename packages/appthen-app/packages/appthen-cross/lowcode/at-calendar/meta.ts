import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtCalendarMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtCalendar',
  title: '日历',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '4.0.16',
    exportName: 'AtCalendar',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqerili',
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
              inputField: 'currentDate',
              outField: 'onDayClick',
              outValueField: 'value',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'currentDate',
            'zh-CN': '当前时间',
          },
          tip: '2023-11-11'
        },
        name: 'currentDate',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
              },
              {
                componentName: 'NumberSetter',
              },
              {
                componentName: 'VariableSetter',
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'start',
                            'zh-CN': '开始',
                          },
                        },
                        name: 'start',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              {
                                componentName: 'StringSetter',
                              },
                              {
                                componentName: 'NumberSetter',
                              },
                            ],
                          },
                          isRequired: true,
                        },
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'end',
                            'zh-CN': '结束',
                          },
                        },
                        name: 'end',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              {
                                componentName: 'StringSetter',
                              },
                              {
                                componentName: 'NumberSetter',
                              },
                            ],
                          },
                        },
                      },
                    ],
                    // extraSetter: {
                    //   componentName: 'MixedSetter',
                    //   isRequired: false,
                    //   props: {},
                    // },
                  },
                },
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'isMultiSelect',
            'zh-CN': '范围选择',
          },
        },
        name: 'isMultiSelect',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'calendarWidth',
            'zh-CN': '日历宽度'
          },
          tip: 'APP端需要填写'
        },
        name: 'calendarWidth',
        setter: {
          componentName: 'NumberSetter',
          props: {
            placeholder: 'APP端需要填写'
          }
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'format',
            'zh-CN': '日期格式',
          },
        },
        name: 'format',
        setter: {
          componentName: 'StringSetter',
          initialValue: 'YYYY-MM-DD'
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'monthFormat',
            'zh-CN': '月份格式',
          },
          tip: 'YYYY年MM月'
        },
        name: 'monthFormat',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validDates',
            'zh-CN': '标记有效时间',
          },
          tip: '需要标记的有效时间'
        },
        name: 'validDates',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
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
                                'zh-CN': '值',
                              },
                            },
                            name: 'value',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
                                  },
                                  {
                                    componentName: 'NumberSetter',
                                  },
                                ],
                              },
                              isRequired: true,
                            },
                          },
                        ],
                        extraSetter: {
                          componentName: 'MixedSetter',
                          isRequired: false,
                          props: {},
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'minDate',
            'zh-CN': '最小可选',
          },
          tip: '最小的可选时间'
        },
        name: 'minDate',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
              },
              {
                componentName: 'NumberSetter',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxDate',
            'zh-CN': '最大可选',
          },
        },
        name: 'maxDate',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
              },
              {
                componentName: 'NumberSetter',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'isSwiper',
            'zh-CN': '是否滑动',
          },
        },
        name: 'isSwiper',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'marks',
            'zh-CN': '标记时间',
          },
          tip: '需要标记(多选)的时间'
        },
        name: 'marks',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
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
                                'zh-CN': '值',
                              },
                            },
                            name: 'value',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'StringSetter',
                                  },
                                  {
                                    componentName: 'NumberSetter',
                                  },
                                ],
                              },
                              isRequired: true,
                            },
                          },
                        ],
                        extraSetter: {
                          componentName: 'MixedSetter',
                          isRequired: false,
                          props: {},
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hideArrow',
            'zh-CN': '隐藏箭头',
          },
        },
        name: 'hideArrow',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'isVertical',
            'zh-CN': '垂直滑动',
          },
        },
        name: 'isVertical',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onSelectDate',
          description: '选中日期时候触发',
          // @ts-ignore
          template:
            "onSelectDate(value, ${extParams}) {\n  console.log('onSelectDate', value);\n}",
        },
        {
          name: 'onDayClick',
          description: '点击日期时候触发',
          // @ts-ignore
          template:
            "onDayClick(item, ${extParams}) {\n  console.log('onDayClick', item.value);\n}",
        },
        {
          name: 'onMonthChange',
          description: '月份改变时触发',
          // @ts-ignore
          template:
            "onMonthChange(value, ${extParams}) {\n  console.log('onMonthChange', value);\n}",
        },
      ],
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '日历',
    screenshot: '',
    schema: {
      componentName: 'AtCalendar',
      props: {},
    },
  },
];

export default {
  ...AtCalendarMeta,
  snippets,
};
