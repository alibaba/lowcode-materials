import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AutoListMeta: IPublicTypeComponentMetadata = {
  componentName: 'AutoList',
  title: '自动列表',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.5',
    exportName: 'AutoList',
    main: '',
    destructuring: true,
    subName: '',
  },
  icon: 'rqeliebiao',
  group: '原子组件',
  category: '展示',
  configure: {
    props: [
      {
        title: '数据源',
        name: '',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'dataSource',
            title: { label: '列表数据源', tip: '列表数据源' },
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'VariableSetter',
                  },
                  {
                    componentName: 'JsonSetter',
                    // title: 'JSON编辑',
                  },
                  {
                    componentName: 'FunctionSetter',
                    // title: '动作',
                    props: {
                      template: `fetchData(page, pageSize) {\n  return this.dataSourceMap['list'].load({\n    page,\n    pageSize,\n  });\n}`,
                      templateActionName: 'fetchData',
                      templateActionDesc: '获取数据源',
                    },
                  },
                ],
              },
              initialValue: [
                { title: '示例数据1', id: 1 },
                { title: '示例数据2', id: 2 },
                { title: '示例数据1', id: 2 },
              ],
            },
          },
        ],
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFetch',
            'zh-CN': '自动加载',
          },
          tip: '当数据源类型为动作时有效',
        },
        name: 'autoFetch',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: true,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFetchDelayTime',
            'zh-CN': '延迟加载',
          },
        },
        name: 'autoFetchDelayTime',
        setter: {
          componentName: 'NumberSetter',
          props: {
            placeholder: '延迟 x 毫秒加载'
          }
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': '模式',
          },
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '滚动',
                value: 'scroll',
              },
              {
                label: '无滚动',
                value: 'noscroll',
              },
              // {
              //   label: 'table',
              //   value: 'table',
              // },
            ],
            options: [
              {
                label: '滚动',
                value: 'scroll',
              },
              {
                label: '无滚动',
                value: 'noscroll',
              },
              // {
              //   label: 'table',
              //   value: 'table',
              // },
            ],
          },
          initialValue: 'scroll',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pageMode',
            'zh-CN': '分页模式',
          },
        },
        name: 'pageMode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '无限加载',
                value: 'auto',
              },
              {
                label: '分页',
                value: 'pagination',
              },
            ],
            options: [
              {
                label: '无限加载',
                value: 'auto',
              },
              {
                label: '分页',
                value: 'pagination',
              },
            ],
          },
          initialValue: 'auto',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'keyExtractor',
            'zh-CN': '数据索引值',
          },
        },
        name: 'keyExtractor',
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template: `keyExtractor(item, index) {\nreturn String(index)\n}`,
            templateActionName: 'keyExtractor',
            templateActionDesc: '生成索引值',
          }
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'emptyText',
            'zh-CN': '空文本',
          },
        },
        name: 'emptyText',
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
            'en-US': 'footerMarginTop',
            'zh-CN': '底部占位距离',
          },
        },
        name: 'footerMarginTop',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pageSize',
            'zh-CN': '每页数量',
          },
        },
        name: 'pageSize',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 10,
        },
      },
      {
        name: 'renderItem',
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderItem',
            'zh-CN': '列表项内容',
          },
        },
        // propType: 'func',
        setter: {
          componentName: 'SlotSetter',
          title: '列表项内容',
          initialValue: {
            type: 'JSSlot',
            params: ['item', 'index', 'currentPage'],
            value: [
              {
                componentName: 'View',
                props: {},
                children: [],
              },
            ],
          },
        },
      },
      {
        name: 'renderHeader',
        title: {
          label: '列表头部',
          tip: 'header | 列表头部',
        },
        // propType: 'node',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'renderFooter',
        title: {
          label: '列表尾部',
          tip: 'footer | 列表尾部',
        },
        // propType: 'node',
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'emptyHideHeader',
            'zh-CN': '无数据隐藏头部',
          },
          // tip: 'emptyHideHeader | 是否数据为空时隐藏 header',
        },
        name: 'emptyHideHeader',
        description: '是否数据为空时隐藏 header',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'gutter',
      //       'zh-CN': '间距 单填一个整数 ',
      //     },
      //     tip: 'gutter | 间距 单填一个整数 表示横向间距 px，【横向，竖向】',
      //   },
      //   name: 'gutter',
      //   description: '间距 单填一个整数 表示横向间距 px，【横向，竖向】',
      //   setter: {
      //     componentName: 'NumberSetter',
      //     isRequired: false,
      //     initialValue: 0,
      //   },
      // },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'itemViewProps',
      //       'zh-CN': 'Item容器附加属性',
      //     },
      //     tip: 'itemViewProps | Item容器附加属性 （目前用于选择器时多加一层View后单行多列出现问题）',
      //   },
      //   name: 'itemViewProps',
      //   description: 'Item容器附加属性 （目前用于选择器时多加一层View后单行多列出现问题）',
      //   setter: {
      //     componentName: 'ObjectSetter',
      //     props: {
      //       config: {
      //         items: [
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'children',
      //                 'zh-CN': 'children',
      //               },
      //             },
      //             name: 'children',
      //             setter: {
      //               componentName: 'MixedSetter',
      //               isRequired: false,
      //               props: {},
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'className',
      //                 'zh-CN': 'className',
      //               },
      //             },
      //             name: 'className',
      //             setter: {
      //               componentName: 'StringSetter',
      //               isRequired: false,
      //               initialValue: '',
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'style',
      //                 'zh-CN': 'style',
      //               },
      //             },
      //             name: 'style',
      //             setter: {
      //               componentName: 'MixedSetter',
      //               isRequired: false,
      //               props: {},
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'ref',
      //                 'zh-CN': 'ref',
      //               },
      //             },
      //             name: 'ref',
      //             setter: {
      //               componentName: 'MixedSetter',
      //               props: {
      //                 setters: [
      //                   {
      //                     componentName: 'StringSetter',
      //                     isRequired: false,
      //                     initialValue: '',
      //                   },
      //                   {
      //                     componentName: 'FunctionSetter',
      //                   },
      //                 ],
      //               },
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'key',
      //                 'zh-CN': 'key',
      //               },
      //             },
      //             name: 'key',
      //             setter: {
      //               componentName: 'MixedSetter',
      //               props: {
      //                 setters: [
      //                   {
      //                     componentName: 'StringSetter',
      //                     isRequired: false,
      //                     initialValue: '',
      //                   },
      //                   {
      //                     componentName: 'NumberSetter',
      //                     isRequired: false,
      //                     initialValue: 0,
      //                   },
      //                 ],
      //               },
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'activeOpacity',
      //                 'zh-CN': 'activeOpacity',
      //               },
      //             },
      //             name: 'activeOpacity',
      //             setter: {
      //               componentName: 'NumberSetter',
      //               isRequired: false,
      //               initialValue: 0,
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'onClick',
      //                 'zh-CN': 'onClick',
      //               },
      //             },
      //             name: 'onClick',
      //             setter: {
      //               componentName: 'FunctionSetter',
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'onLongPress',
      //                 'zh-CN': 'onLongPress',
      //               },
      //             },
      //             name: 'onLongPress',
      //             setter: {
      //               componentName: 'FunctionSetter',
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'onLayout',
      //                 'zh-CN': 'onLayout',
      //               },
      //             },
      //             name: 'onLayout',
      //             setter: {
      //               componentName: 'FunctionSetter',
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'miniButton',
      //                 'zh-CN': 'miniButton',
      //               },
      //             },
      //             name: 'miniButton',
      //             setter: {
      //               componentName: 'BoolSetter',
      //               isRequired: false,
      //               initialValue: false,
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'openType',
      //                 'zh-CN': 'openType',
      //               },
      //             },
      //             name: 'openType',
      //             setter: {
      //               componentName: 'SelectSetter',
      //               props: {
      //                 dataSource: [
      //                   {
      //                     label: 'contact',
      //                     value: 'contact',
      //                   },
      //                   {
      //                     label: 'contactShare',
      //                     value: 'contactShare',
      //                   },
      //                   {
      //                     label: 'share',
      //                     value: 'share',
      //                   },
      //                   {
      //                     label: 'getRealnameAuthInfo',
      //                     value: 'getRealnameAuthInfo',
      //                   },
      //                   {
      //                     label: 'getAuthorize',
      //                     value: 'getAuthorize',
      //                   },
      //                   {
      //                     label: 'getPhoneNumber',
      //                     value: 'getPhoneNumber',
      //                   },
      //                   {
      //                     label: 'getUserInfo',
      //                     value: 'getUserInfo',
      //                   },
      //                   {
      //                     label: 'lifestyle',
      //                     value: 'lifestyle',
      //                   },
      //                   {
      //                     label: 'launchApp',
      //                     value: 'launchApp',
      //                   },
      //                   {
      //                     label: 'openSetting',
      //                     value: 'openSetting',
      //                   },
      //                   {
      //                     label: 'feedback',
      //                     value: 'feedback',
      //                   },
      //                 ],
      //                 options: [
      //                   {
      //                     label: 'contact',
      //                     value: 'contact',
      //                   },
      //                   {
      //                     label: 'contactShare',
      //                     value: 'contactShare',
      //                   },
      //                   {
      //                     label: 'share',
      //                     value: 'share',
      //                   },
      //                   {
      //                     label: 'getRealnameAuthInfo',
      //                     value: 'getRealnameAuthInfo',
      //                   },
      //                   {
      //                     label: 'getAuthorize',
      //                     value: 'getAuthorize',
      //                   },
      //                   {
      //                     label: 'getPhoneNumber',
      //                     value: 'getPhoneNumber',
      //                   },
      //                   {
      //                     label: 'getUserInfo',
      //                     value: 'getUserInfo',
      //                   },
      //                   {
      //                     label: 'lifestyle',
      //                     value: 'lifestyle',
      //                   },
      //                   {
      //                     label: 'launchApp',
      //                     value: 'launchApp',
      //                   },
      //                   {
      //                     label: 'openSetting',
      //                     value: 'openSetting',
      //                   },
      //                   {
      //                     label: 'feedback',
      //                     value: 'feedback',
      //                   },
      //                 ],
      //               },
      //               initialValue: 'contact',
      //             },
      //           },
      //           {
      //             title: {
      //               label: {
      //                 type: 'i18n',
      //                 'en-US': 'forceInset',
      //                 'zh-CN': 'forceInset',
      //               },
      //             },
      //             name: 'forceInset',
      //             setter: {
      //               componentName: 'StringSetter',
      //               isRequired: false,
      //               initialValue: '',
      //             },
      //           },
      //         ],
      //         extraSetter: {
      //           componentName: 'MixedSetter',
      //           isRequired: false,
      //           props: {},
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'selection',
      //       'zh-CN': '选择器',
      //     },
      //     tip: 'selection | 选择器',
      //   },
      //   name: 'selection',
      //   description: '选择器',
      //   setter: {
      //     componentName: 'BoolSetter',
      //     isRequired: false,
      //     initialValue: false,
      //   },
      // },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'selectionKey',
      //       'zh-CN': 'selectionKey',
      //     },
      //   },
      //   name: 'selectionKey',
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
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'selectionType',
      //       'zh-CN': '单/多选',
      //     },
      //     tip: 'selectionType | 单/多选',
      //   },
      //   name: 'selectionType',
      //   description: '单/多选',
      //   setter: {
      //     componentName: 'RadioGroupSetter',
      //     props: {
      //       dataSource: [
      //         {
      //           label: 'checkbox',
      //           value: 'checkbox',
      //         },
      //         {
      //           label: 'radio',
      //           value: 'radio',
      //         },
      //       ],
      //       options: [
      //         {
      //           label: 'checkbox',
      //           value: 'checkbox',
      //         },
      //         {
      //           label: 'radio',
      //           value: 'radio',
      //         },
      //       ],
      //     },
      //     initialValue: 'checkbox',
      //   },
      // },
      // {
      //   title: {
      //     label: {
      //       type: 'i18n',
      //       'en-US': 'selectionHandleButton',
      //       'zh-CN': 'selectionHandleButton',
      //     },
      //   },
      //   name: 'selectionHandleButton',
      //   setter: {
      //     componentName: 'SlotSetter',
      //     props: {
      //       mode: 'node',
      //     },
      //     isRequired: false,
      //     initialValue: {
      //       type: 'JSSlot',
      //       value: [],
      //     },
      //   },
      // },
    ],
    supports: {
      events: [
        {
          name: 'onFetchData',
          description: '拉取数据',
        },
        // {
        //   name: 'onFetchDataPagination',
        //   description: '拉取数据包含数据总数',
        // },
        {
          name: 'onPullRefresh',
        },
        // {
        //   name: 'onSelect',
        // },
      ],
      style: true,
    },
    component: {},
    publicMethods: [
      {
        name: 'refresh',
        desc: '刷新列表',
        code: 'refresh()',
      },
      {
        name: 'loadNext',
        desc: '加载下一页',
        code: 'loadNext()',
      },
      {
        name: 'changeData',
        desc: '设置列表数据',
        code: 'changeData((data) => {\n  \n  return data; \n})',
      },
    ]
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '自动列表',
    screenshot: '',
    schema: {
      componentName: 'AutoList',
      props: {},
    },
  },
];

export default {
  ...AutoListMeta,
  snippets,
};
