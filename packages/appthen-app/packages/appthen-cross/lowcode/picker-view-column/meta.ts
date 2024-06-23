import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'PickerViewColumn',
  title: '滚动子项',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'PickerViewColumn',
    main: '',
    destructuring: true,
    subName: '',
  },
  // group: '原子组件',
  // category: '数据输入',
  // icon: 'rqexialakuang',
  configure: {
    props: [
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '滚动子项',
    // screenshot: 'rqexialakuang',
    schema: {
      componentName: 'PickerViewColumn',
      children: [
        // {
        //   componentName: 'View',
        //   props: {
        //     style: {
        //       height: '50px',
        //       lineHeight: '50px',
        //       textAlign: 'center'
        //     }
        //   },
        //   children: Array(5).map(i => {
        //     return {
        //       componentName: 'Text',
        //       props: {
        //         style: {
        //           fontSize: '14px',
        //           color: '#333'
        //         }
        //       },
        //       children: '选项' + (i + 1)
        //     }
        //   })
        // }
      ],
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
