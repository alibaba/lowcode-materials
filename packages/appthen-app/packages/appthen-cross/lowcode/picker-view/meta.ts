import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'PickerView',
  title: '滚动选择器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'PickerView',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqegundongtiao',
  configure: {
    props: [
      {
        name: 'value',
        title: { label: '值', tip: '数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。' },
        // propType: { type: 'arrayOf', value: 'any' },
        setter: {
          componentName: 'JsonSetter',
          initialValue: [],
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
            "onPickerViewChange(e, extParams) {\n  console.log('onPickerViewChange', e.detail.value, extParams);\n}",
        },
      ],
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '滚动选择器',
    screenshot: 'rqegundongtiao',
    schema: {
      componentName: 'PickerView',
      props: {
        style: {
          height: '220px',
          backgroundColor: '#fff'
        },
        indicatorStyle: "height: 50px;"
      },
      children: [
        {
          componentName: 'PickerViewColumn',
          children: [
            {
              componentName: 'View',
              props: {
                style: {
                  minHeight: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#333',
                    },
                    children: '选项1'
                  }
                },
              ]
            },
            {
              componentName: 'View',
              props: {
                style: {
                  minHeight: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#333',
                    },
                    children: '选项2'
                  }
                },
              ]
            },
            {
              componentName: 'View',
              props: {
                style: {
                  minHeight: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#333',
                    },
                    children: '选项3'
                  }
                },
              ]
            },
            {
              componentName: 'View',
              props: {
                style: {
                  minHeight: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#333',
                    },
                    children: '选项4'
                  },
                },
              ]
            },
            {
              componentName: 'View',
              props: {
                style: {
                  minHeight: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              },
              children: [
                {
                  componentName: 'Text',
                  props: {
                    style: {
                      fontSize: '14px',
                      color: '#333',
                    },
                    children: '选项5'
                  },
                },
              ]
            },
          ]
        }
      ]
    },
  },
  // {
  //   title: '时间选择器',
  //   screenshot: 'rqeshijianxuanze',
  //   schema: {
  //     componentName: 'Picker',
  //     props: {
  //       mode: 'time',
  //       value: '08:00',
  //     },
  //     children: [
  //       {
  //         componentName: 'View',
  //         props: {
  //           style: {
  //             display: 'flex',
  //             flexDirection: 'row',
  //             height: '40px',
  //             backgroundColor: '#eeeeee',
  //             borderRadius: '6px',
  //             paddingRight: '5px',
  //             marginTop: '10px',
  //           },
  //         },
  //         children: [
  //           {
  //             componentName: 'View',
  //             props: {
  //               style: {
  //                 flex: 1,
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 justifyContent: 'center',
  //                 paddingLeft: '10px',
  //               },
  //             },
  //             children: [
  //               {
  //                 componentName: 'Text',
  //                 props: {
  //                   style: {
  //                     fontSize: '14px',
  //                     color: '#666666',
  //                   },
  //                   children: '点击选择',
  //                 },
  //               },
  //             ],
  //           },
  //           {
  //             componentName: 'View',
  //             props: {
  //               style: {
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 justifyContent: 'center',
  //               },
  //             },
  //             children: [
  //               {
  //                 componentName: 'AtIcon',
  //                 props: {
  //                   value: 'chevron-down',
  //                   size: 20,
  //                   color: '#666',
  //                 },
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  // {
  //   title: '滚动选择器',
  //   screenshot: 'rqekeshihuapingtaiicon_riqixuanze',
  //   schema: {
  //     componentName: 'Picker',
  //     props: {
  //       mode: 'date',
  //       value: '2023-01-01',
  //     },
  //     children: [
  //       {
  //         componentName: 'View',
  //         props: {
  //           style: {
  //             display: 'flex',
  //             flexDirection: 'row',
  //             height: '40px',
  //             backgroundColor: '#eeeeee',
  //             borderRadius: '6px',
  //             paddingRight: '5px',
  //             marginTop: '10px',
  //           },
  //         },
  //         children: [
  //           {
  //             componentName: 'View',
  //             props: {
  //               style: {
  //                 flex: 1,
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 justifyContent: 'center',
  //                 paddingLeft: '10px',
  //               },
  //             },
  //             children: [
  //               {
  //                 componentName: 'Text',
  //                 props: {
  //                   style: {
  //                     fontSize: '14px',
  //                     color: '#666666',
  //                   },
  //                   children: '点击选择',
  //                 },
  //               },
  //             ],
  //           },
  //           {
  //             componentName: 'View',
  //             props: {
  //               style: {
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 justifyContent: 'center',
  //               },
  //             },
  //             children: [
  //               {
  //                 componentName: 'AtIcon',
  //                 props: {
  //                   value: 'chevron-down',
  //                   size: 20,
  //                   color: '#666',
  //                 },
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
];

export default {
  ...PickerMeta,
  snippets,
};
