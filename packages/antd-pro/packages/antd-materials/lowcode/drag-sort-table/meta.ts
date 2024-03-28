import { snippets } from './snippets'
import { uuid } from '../utils'

const ProTableMeta = {
  componentName: 'DragSortTable',
  title: '拖拽表格',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '高级组件',
  category: '表格类',
  npm: {
    package: '@appthen/antd-pro',
    version: 'latest',
    exportName: 'DragSortTable',
    main: '',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        name: 'ref',
        title: {
          label: 'ref',
          tip: "ref | 通过 this.$('xxx') 获取到组件实例"
        },
        defaultValue: () => {
          return `pro_table_${uuid()}`
        },
        setter: 'StringSetter'
      },
      {
        title: '数据源',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'dataSource',
            title: { label: '表格数据', tip: 'dataSource | 表格数据' },
            propType: 'object',
            setter: 'JsonSetter'
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'request',
                'zh-CN': '请求函数'
              },
              tip: 'request | 获得 dataSource 的方法'
            },
            name: 'request',
            description: '请求函数',
            setter: {
              componentName: 'FunctionSetter',
              isRequired: false
            }
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'manualRequest',
                'zh-CN': '手动请求'
              },
              tip: 'manualRequest | 是否手动触发请求'
            },
            name: 'manualRequest',
            description: '是否手动触发请求',
            setter: {
              componentName: 'BoolSetter',
              isRequired: false,
              initialValue: false
            }
          },
          {
            name: 'loading',
            title: { label: '加载中', tip: 'loading | 是否加载中' },
            propType: 'bool',
            setter: 'BoolSetter'
          },
          {
            name: 'cardBordered',
            title: {
              label: '边框',
              tip: 'cardBordered | Table 和 Search 外围 Card 组件的边框'
            },
            propType: 'bool',
            setter: 'BoolSetter'
          },
          {
            name: 'dragSortKey',
            title: {
              label: '排序名称',
              tip: 'dragSortKey'
            },
            setter: 'StringSetter'
          },

          // {
          //   name: 'dragSortHandlerRender',
          //   title: {
          //     label: '排序图标',
          //     tip: 'dragSortHandlerRender'
          //   },
          //   setter: 'SlotSetter',
          //   initialValue: {
          //     type: 'JSSlot',
          //     params: ['rowData', 'idx'],
          //     value: []
          //   }
          // },
          
          {
            name: 'rowKey',
            title: {
              label: '行Key',
              tip: 'rowKey | 表格行 key 的取值，可以是字符串或一个函数'
            },
            propType: { type: 'oneOfType', value: ['string', 'func'] },
            setter: [
              'StringSetter',
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'getRowKey(record,index,${extParams}){\n// 通过函数获取表格行 key\nreturn record.id;\n}'
                }
              },
              'VariableSetter'
            ],
            defaultValue: 'id'
          }
        ]
      },
      {
        name: 'columns',
        title: { label: '表格列', tip: '表格列的配置描述，具体项见下表' },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: { label: '列标题', tip: 'title | 列标题' },
                      propType: {
                        type: 'oneOfType',
                        value: ['string', 'func']
                      },
                      setter: [
                        'StringSetter',
                        {
                          componentName: 'SlotSetter',
                          title: '列标题插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['options'],
                            value: []
                          }
                        }
                      ],
                      isRequired: true
                    },
                    {
                      name: 'dataIndex',
                      title: { label: '数据字段', tip: 'dataIndex | 数据字段' },
                      propType: 'string',
                      setter: 'StringSetter',
                      isRequired: true
                    },
                    {
                      name: 'valueType',
                      title: { label: '数据类型', tip: 'valueType | 数据类型' },
                      propType: 'string',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '操作',
                              value: 'option'
                            },
                            {
                              title: '文本',
                              value: 'text'
                            },
                            {
                              title: '标签',
                              value: 'tag'
                            },
                            {
                              title: '数字',
                              value: 'digit'
                            },
                            {
                              title: '密码输入框',
                              value: 'password'
                            },
                            {
                              title: '金额',
                              value: 'money'
                            },
                            {
                              title: '日期',
                              value: 'date'
                            },
                            {
                              title: '日期时间',
                              value: 'dateTime'
                            },
                            {
                              title: '日期区间',
                              value: 'dateRange'
                            },
                            {
                              title: '日期时间区间',
                              value: 'dateTimeRange'
                            },
                            {
                              title: '链接',
                              value: 'link'
                            },
                            // {
                            //   title: '标签',
                            //   value: 'tag',
                            // },
                            {
                              title: '头像',
                              value: 'avatar'
                            },
                            {
                              title: '开关',
                              value: 'switch'
                            },
                            {
                              title: '百分比',
                              value: 'percent'
                            },
                            {
                              title: '进度条',
                              value: 'progress'
                            },
                            {
                              title: '下拉框',
                              value: 'select'
                            },
                            {
                              title: '单选框',
                              value: 'radio'
                            },
                            {
                              title: '多选框',
                              value: 'checkbox'
                            },
                            {
                              title: '图片',
                              value: 'image'
                            },
                            {
                              title: 'JSON代码框',
                              value: 'jsonCode'
                            },
                            {
                              title: '代码框',
                              value: 'code'
                            },
                            {
                              title: '颜色选择器',
                              value: 'color'
                            },
                            {
                              title: '级联选择器',
                              value: 'cascader'
                            }
                          ]
                        }
                      }
                    },
                    {
                      name: 'fieldProps',
                      title: {
                        label: '字段属性',
                        tip: 'fieldProps | 字段属性，会透传给表单项'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'formItemProps',
                      title: {
                        label: 'Form.Item 属性',
                        tip: 'formItemProps | 传递给 Form.Item 的配置,可以配置 rules'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'renderTag',
                      title: {
                        label: '使用 Tag 渲染',
                        tip: 'renderTag | 是否使用 Tag 渲染'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'valueEnum',
                      title: {
                        label: '枚举定义',
                        tip: 'valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'request',
                          'zh-CN': '远程获取枚举'
                        },
                        tip: 'request | 远程获取枚举'
                      },
                      name: 'request',
                      description: '远程获取枚举',
                      setter: {
                        componentName: 'FunctionSetter',
                        isRequired: false
                      }
                    },
                    {
                      name: 'options',
                      title: {
                        label: 'options',
                        tip: '支持select, checkbox, radio, radioButton'
                      },
                      description: '数据源',
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'width',
                      title: { label: '宽度', tip: 'width | 宽度' },
                      propType: {
                        type: 'oneOfType',
                        value: ['number', 'string']
                      },
                      setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
                    },
                    {
                      name: 'tooltip',
                      title: {
                        label: '气泡提示',
                        tip: 'tooltip	| 气泡提示'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'ellipsis',
                      title: {
                        label: '是否自动缩略',
                        tip: 'ellipsis | 是否自动缩略'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'copyable',
                      title: {
                        label: '是否可复制',
                        tip: 'copyable | 是否可复制'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    // {
                    //   name: 'valueEnum',
                    //   title: {
                    //     label: '枚举定义',
                    //     tip: 'valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容'
                    //   },
                    //   propType: 'object',
                    //   setter: 'JsonSetter'
                    // },
                    // {
                    //   title: {
                    //     label: {
                    //       type: 'i18n',
                    //       'en-US': 'request',
                    //       'zh-CN': '远程获取枚举'
                    //     },
                    //     tip: 'request | 远程获取枚举'
                    //   },
                    //   name: 'request',
                    //   description: '远程获取枚举',
                    //   setter: {
                    //     componentName: 'FunctionSetter',
                    //     isRequired: false
                    //   }
                    // },
                    {
                      name: 'align',
                      title: { label: '对齐方式', tip: 'align | 对齐方式' },
                      propType: {
                        type: 'oneOf',
                        value: ['left', 'right', 'center']
                      },
                      defaultValue: 'left',
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: 'left',
                                value: 'left'
                              },
                              {
                                title: 'right',
                                value: 'right'
                              },
                              {
                                title: 'center',
                                value: 'center'
                              }
                            ]
                          }
                        },
                        'VariableSetter'
                      ]
                    },
                    {
                      name: 'fixed',
                      title: { label: '列是否固定', tip: 'fixed | 列是否固定' },
                      description:
                        '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                      defaultValue: '',
                      propType: {
                        type: 'oneOf',
                        value: ['', 'left', 'right']
                      },
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: '不固定',
                                value: ''
                              },
                              {
                                title: '固定在左侧',
                                value: 'left'
                              },
                              {
                                title: '固定在右侧',
                                value: 'right'
                              }
                            ]
                          }
                        },
                        'VariableSetter'
                      ]
                    },
                    {
                      name: 'className',
                      title: {
                        label: '列样式类名',
                        tip: 'className | 列样式类名'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'sorter',
                      title: {
                        label: '排序规则',
                        tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true'
                      },
                      propType: { type: 'oneOfType', value: ['bool', 'func'] },
                      setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter']
                    },
                    {
                      name: 'key',
                      title: {
                        label: 'React key',
                        tip: 'key | React需要的key'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'order',
                      title: {
                        label: '排序',
                        tip: 'order | 查询表单中的权重，权重大排序靠前'
                      },
                      propType: 'number',
                      setter: 'NumberSetter'
                    },
                    {
                      name: 'hideInSearch',
                      title: {
                        label: '隐藏搜索列',
                        tip: 'hideInSearch | 在查询表单中不展示此项'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'hideInTable',
                      title: {
                        label: '隐藏列',
                        tip: 'hideInTable | 在 Table 中不展示此列'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'filters',
                      title: {
                        label: '筛选菜单项',
                        tip: 'filters | 表头的筛选菜单项'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'fieldProps.showSearch',
                      title: {
                        label: '下拉框支持搜索',
                        tip: 'fieldProps.showSearch | 下拉框支持搜索'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'render',
                      title: {
                        label: '自定义渲染',
                        tip: 'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引'
                      },
                      propType: 'func',
                      setter: [
                        {
                          componentName: 'SlotSetter',
                          title: '单元格插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['text', 'record', 'index'],
                            value: []
                          }
                        },
                        'VariableSetter'
                      ]
                    }
                  ]
                }
              },
              initialValue: { title: '标题' }
            }
          }
        }
      },
      {
        title: '外观',
        display: 'block',
        type: 'group',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'headerTitle',
                'zh-CN': '表格名称'
              }
            },
            name: 'headerTitle',
            setter: {
              componentName: 'StringSetter',
              isRequired: false
            }
          },
          {
            name: 'showHeader',
            title: { label: '显示表头', tip: 'showHeader | 是否显示表头' },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: true
          },
          {
            name: 'bordered',
            title: {
              label: '显示边框',
              tip: 'bordered | 是否展示外边框和列边框'
            },
            propType: 'bool',
            setter: 'BoolSetter'
          },
          {
            name: 'size',
            title: { label: '表格大小', tip: 'size | 表格大小' },
            propType: {
              type: 'oneOf',
              value: ['default', 'middle', 'small']
            },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: '默认',
                      value: 'default'
                    },
                    {
                      title: '中',
                      value: 'middle'
                    },
                    {
                      title: '小',
                      value: 'small'
                    }
                  ]
                }
              },
              'VariableSetter'
            ],
            defaultValue: 'default'
          },
          {
            name: 'tableLayout',
            title: { label: '表格布局', tip: 'tableLayout | 表格布局' },
            defaultValue: '',
            propType: {
              type: 'oneOf',
              value: ['', 'auto', 'fixed']
            },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: '默认',
                      value: ''
                    },
                    {
                      title: '自动',
                      value: 'auto'
                    },
                    {
                      title: '固定',
                      value: 'fixed'
                    }
                  ]
                }
              },
              'VariableSetter'
            ]
          }
        ]
      },
      {
        title: '分页',
        name: 'pagination',
        supportVariable: true,
        defaultValue: false,
        setter: [
          "BoolSetter",
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [

                  {
                    name: 'defaultPageSize',
                    title: {
                      label: '默认每页条数',
                      tip: 'defaultPageSize | 默认每页条数'
                    },
                    propType: 'number',
                    setter: 'NumberSetter',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    }
                  },
                  {
                    name: 'pageSize',
                    title: { label: '每页条数', tip: 'pagination.pageSize | 每页条数' },
                    propType: 'number',
                    setter: 'NumberSetter',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    },
                    supportVariable: true
                  },
                  // {
                  //   name: 'pagination.total',
                  //   title: { label: '数据总数', tip: 'pagination.total | 数据总数' },
                  //   propType: 'number',
                  //   setter: 'NumberSetter',
                  //   condition: {
                  //     type: 'JSFunction',
                  //     value: 'target => !!target.getProps().getPropValue("pagination")'
                  //   }
                  // },
                  {
                    name: 'defaultCurrent',
                    title: {
                      label: '默认当前页',
                      tip: 'defaultCurrent | 默认的当前页数'
                    },
                    propType: 'number',
                    setter: 'NumberSetter',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    }
                  },
                  // {
                  //   name: 'pagination.current',
                  //   title: { label: '当前页数', tip: 'pagination.current | 当前页数' },
                  //   propType: 'number',
                  //   setter: 'NumberSetter',
                  //   condition: {
                  //     type: 'JSFunction',
                  //     value: 'target => !!target.getProps().getPropValue("pagination")'
                  //   }
                  // },
                  // {
                  //   name: 'pagination.showTotal',
                  //   title: {
                  //     label: '显示总数',
                  //     tip: 'pagination.showTotal | 用于显示数据总量和当前数据顺序'
                  //   },
                  //   propType: 'func',
                  //   setter: [
                  //     {
                  //       componentName: 'FunctionSetter',
                  //       props: {
                  //         template:
                  //           'showTotal(total,range,${extParams}){\n// 用于格式化显示表格数据总量\nreturn `共 ${total} 条`;\n}'
                  //       }
                  //     },
                  //     'VariableSetter'
                  //   ],
                  //   condition: {
                  //     type: 'JSFunction',
                  //     value: 'target => !!target.getProps().getPropValue("pagination")'
                  //   }
                  // },
                  {
                    name: 'showSizeChanger',
                    title: {
                      label: '页数切换',
                      tip: 'pagination.showSizeChanger | 是否展示 pageSize 切换器'
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                    defaultValue: false,
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    }
                  },
                  {
                    name: 'showQuickJumper',
                    title: {
                      label: '快速跳转',
                      tip: 'pagination.showQuickJumper | 是否可以快速跳转至某页'
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                    defaultValue: false,
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    }
                  },
                  {
                    name: 'simple',
                    title: { label: '简单分页', tip: 'pagination.simple | 简单分页' },
                    propType: 'bool',
                    setter: 'BoolSetter',
                    defaultValue: false,
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    }
                  },
                  {
                    name: 'size',
                    title: { label: '分页尺寸', tip: 'pagination.size | 分页尺寸' },
                    propType: {
                      type: 'oneOf',
                      value: ['default', 'small']
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: '默认',
                              value: 'default'
                            },
                            {
                              title: '小',
                              value: 'small'
                            }
                          ]
                        }
                      },
                      'VariableSetter'
                    ],
                    defaultValue: 'default',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    }
                  },
                  {
                    name: 'position',
                    title: { label: '分页位置', tip: 'pagination.position | 分页位置' },
                    setter: {
                      componentName: 'ArraySetter',
                      props: {
                        itemSetter: {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              {
                                title: '上左',
                                value: 'topLeft'
                              },
                              {
                                title: '上中',
                                value: 'topCenter'
                              },
                              {
                                title: '上右',
                                value: 'topRight'
                              },
                              {
                                title: '下左',
                                value: 'bottomLeft'
                              },
                              {
                                title: '下中',
                                value: 'bottomCenter'
                              },
                              {
                                title: '下右',
                                value: 'bottomRight'
                              }
                            ]
                          },
                          initialValue: 'bottomRight'
                        }
                      }
                    },
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("pagination")'
                    }
                  }
                ]

              }
            }
          }]


      },
      {
        title: '滚动',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'scroll.scrollToFirstRowOnChange',
            title: {
              label: '自动滚动',
              tip: 'scroll.scrollToFirstRowOnChange | 是否自动滚动到表格顶部'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: true
          },
          {
            name: 'scroll.x',
            title: {
              label: '横向滚动',
              tip: 'scroll.x | 	设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 max-content'
            },
            propType: { type: 'oneOfType', value: ['number', 'bool'] },
            setter: ['NumberSetter', 'BoolSetter', 'VariableSetter']
          },
          {
            name: 'scroll.y',
            title: {
              label: '纵向滚动',
              tip: 'scroll.y | 	设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值'
            },
            propType: 'number',
            setter: ['NumberSetter', 'VariableSetter']
          }
        ]
      },
      {
        title: '行选择器',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'rowSelection',
            title: { label: '行选择', tip: 'rowSelection | 行选择' },
            propType: 'bool',
            setter: 'BoolSetter',
            defaultValue: false,
            extraProps: {
              setValue: (target, value) => {
                if (value) {
                  target.parent.setPropValue('rowSelection', {
                    type: 'radio'
                  })
                }
              }
            }
          },
          {
            name: 'rowSelection.type',
            title: {
              label: '行选择类型',
              tip: 'rowSelection.type | 多选/单选'
            },
            propType: {
              type: 'oneOf',
              value: ['checkbox', 'radio']
            },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: '多选',
                      value: 'checkbox'
                    },
                    {
                      title: '单选',
                      value: 'radio'
                    }
                  ]
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.preserveSelectedRowKeys',
            title: {
              label: '缓存选项',
              tip: 'rowSelection.preserveSelectedRowKeys | 当数据被删除时仍然保留选项'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.fixed',
            title: {
              label: '固定左边',
              tip: 'rowSelection.fixed | 把选择框列固定在左边'
            },
            propType: 'bool',
            setter: 'BoolSetter',
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.selectedRowKeys',
            title: {
              label: '选中行Key',
              tip: 'rowSelection.selectedRowKeys | 指定选中项的 key 数组'
            },
            propType: 'object',
            setter: 'JsonSetter',
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.getCheckboxProps',
            title: {
              label: '默认属性',
              tip: 'rowSelection.getCheckboxProps | 选择框的默认属性配置'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'getCheckboxProps(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onChange',
            title: {
              label: 'onChange',
              tip: 'rowSelection.onChange | 选中项发生变化时的回调'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onChange(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelect',
            title: {
              label: 'onSelect',
              tip: 'rowSelection.onSelect | 	用户手动选择/取消选择某行的回调'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelect(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelectAll',
            title: {
              label: 'onSelectAll',
              tip: 'rowSelection.onSelectAll | 	用户手动选择/取消选择所有行的回调'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelectAll(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelectInvert',
            title: {
              label: 'onSelectInvert',
              tip: 'rowSelection.onSelectInvert | 用户手动选择反选的回调'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelectInvert(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          },
          {
            name: 'rowSelection.onSelectNone',
            title: {
              label: 'onSelectNone',
              tip: 'rowSelection.onSelectNone | 用户清空选择的回调'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onSelectNone(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}'
                }
              },
              'VariableSetter'
            ],
            condition: {
              type: 'JSFunction',
              value:
                'target => !!target.getProps().getPropValue("rowSelection")'
            }
          }
        ]
      },
      {
        title: '行展开',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'expandable.expandedRowRender',
            title: {
              label: '展开行渲染',
              tip: 'expandable.expandedRowRender | 额外的展开行'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: '展开行插槽',
                initialValue: {
                  type: 'JSSlot',
                  params: ['record', 'index', 'indent', 'expanded'],
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'expandedRowRender(record,index,indent,expanded,${extParams}){\n// 展开行渲染\nreturn `${record.id}`}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'expandable.rowExpandable',
            title: {
              label: '是否可展开',
              tip: 'expandable.rowExpandable | 行是否可展开'
            },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'rowExpandable(record,${extParams}){\n// 行是否可展开\nreturn true;\n}'
                }
              },
              'VariableSetter'
            ]
          }
        ]
      },
      {
        title: '扩展',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'toolBarRenderOpen',
            title: {
              label: '启用工具栏',
              tip: 'toolBarRenderOpen | 是否启用工具栏',
            },
            propType: 'bool',
            setter: 'BoolSetter',
          },
          {
            name: 'toolBarRender',
            title: { label: '工具栏操作', tip: 'toolbar | 工具栏操作' },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: '工具栏操作插槽',
                initialValue: {
                  type: 'JSSlot',
                  params: ['currentPageData'],
                  value: [],
                },
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'renderToolBar(currentPageData,${extParams}){\n// 自定义渲染表格顶部\nreturn "表格顶部";\n}',
                },
              },
              'VariableSetter',
            ],
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("toolBarRenderOpen")',
            },
          },
          {
            name: 'toolbar.title',
            title: {
              label: '标题',
              tip: 'toolbar.title | 自定义标题',
            },
            propType: 'string',
            setter: 'StringSetter',
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("toolBarRenderOpen")',
            },
          },
          {
            name: 'toolbar.subTitle',
            title: {
              label: '子标题',
              tip: 'toolbar.subTitle | 自定义子标题',
            },
            propType: 'string',
            setter: 'StringSetter',
            condition: {
              type: 'JSFunction',
              value: 'target => !!target.getProps().getPropValue("toolBarRenderOpen")',
            },
          },
          {
            name: 'title',
            title: { label: '表格标题', tip: 'title | 表格标题' },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: '表格标题插槽',
                initialValue: {
                  type: 'JSSlot',
                  params: ['currentPageData'],
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'renderTitle(currentPageData,${extParams}){\n// 自定义渲染表格顶部\nreturn "表格顶部";\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'footer',
            title: { label: '表格尾部', tip: 'footer | 表格尾部' },
            propType: 'func',
            setter: [
              {
                componentName: 'SlotSetter',
                title: '表格尾部插槽',
                initialValue: {
                  type: 'JSSlot',
                  params: ['currentPageData'],
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'renderFooter(currentPageData,${extParams}){\n// 自定义渲染表格尾部\nreturn "表格尾部";\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'onHeaderRow',
            title: { label: '头部行属性', tip: 'onHeaderRow | 设置头部行属性' },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onHeaderRow(columns,index,${extParams}){\n// 设置头部行属性\nreturn {onClick:()=>{}};\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'onRow',
            title: { label: '行属性', tip: 'onRow | 设置行属性' },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'onRow(record,index,${extParams}){\n// 设置行属性\nreturn {onClick:event=>{}};\n}'
                }
              },
              'VariableSetter'
            ]
          },
          {
            name: 'rowClassName',
            title: { label: '行类名', tip: 'rowClassName | 表格行的类名' },
            propType: 'func',
            setter: [
              {
                componentName: 'FunctionSetter',
                props: {
                  template:
                    'rowClassName(record,index,${extParams}){\n// 表格行的类名\nreturn `className-${record.type}`;\n}'
                }
              },
              'VariableSetter'
            ]
          }
        ]
      },
      {
        name: 'search',
        title: { label: '查询', tip: '打开查询' },
        supportVariable: true,
        defaultValue: false,

        setter: [
          "BoolSetter",
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    title: {
                      label: {
                        type: 'i18n',
                        'en-US': 'searchText',
                        'zh-CN': '查询文本'
                      },
                      tip: 'searchText | 查询按钮的文本'
                    },
                    name: 'searchText',
                    setter: {
                      componentName: 'StringSetter',
                      isRequired: false,
                      initialValue: ''
                    },
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("search")'
                    }
                  },
                  // {
                  //   title: {
                  //     label: {
                  //       type: 'i18n',
                  //       'en-US': 'filterType',
                  //       'zh-CN': '过滤表单类型	'
                  //     },
                  //     tip: 'filterType | 过滤表单类型		'
                  //   },
                  //   name: 'search.filterType',
                  //   setter: {
                  //     componentName: 'SelectSetter',
                      
                  //     props: {
                  //       options: [
                  //         {
                  //           title: 'query模式',
                  //           value: 'query',
                  //         },
                  //         {
                  //           title: 'light模式',
                  //           value: 'light',
                  //         }
                  //       ],
                  //     },
                  //   },
                  //   condition: {
                  //     type: 'JSFunction',
                  //     value: 'target => !!target.getProps().getPropValue("search")'
                  //   }
                  // },
                  {
                    title: {
                      label: {
                        type: 'i18n',
                        'en-US': 'resetText',
                        'zh-CN': '重置文本'
                      },
                      tip: 'resetText | 重置按钮的文本'
                    },
                    name: 'resetText',
                    setter: {
                      componentName: 'StringSetter',
                      isRequired: false,
                      initialValue: ''
                    },
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("search")'
                    }
                  },
                  {
                    name: 'labelWidth',
                    title: {
                      label: '标签宽度',
                      tip: 'labelWidth | 标签宽度'
                    },
                    propType: 'number',
                    setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("search")'
                    }
                  },
                  {
                    name: 'span',
                    title: {
                      label: '所占列数',
                      tip: 'span | 所占列数'
                    },
                    propType: 'number',
                    setter: 'NumberSetter',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("search")'
                    }
                  },
                  
                  {
                    name: 'collapsed',
                    title: {
                      label: '是否收起',
                      tip: 'collapsed | 是否收起'
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("search")'
                    }
                  },
                  {
                    name: 'defaultCollapsed',
                    title: {
                      label: '默认是否收起',
                      tip: 'defaultCollapsed | 是否收起'
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("search")'
                    }
                  },
                  {
                    name: 'onCollapse',
                    title: {
                      label: '收起按钮的事件',
                      tip: 'onCollapse | 收起按钮的事件	'
                    },
                    propType: 'bool',
                    setter: 'FunctionSetter',
                    condition: {
                      type: 'JSFunction',
                      value: 'target => !!target.getProps().getPropValue("search")'
                    }
                  },
                ],
              },
            },
          }
        ]
      },
      {
        title: '高级',
        display: 'block',
        type: 'group',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'polling',
                'zh-CN': '轮询请求'
              },
              tip: '是否轮询 ProTable，它不会自动提交表单，如果你想自动提交表单的功能，需要在 onValueChange 中调用 formRef.current?.submit()'
            },
            name: 'polling',
            description:
              '是否轮询 ProTable 它不会自动提交表单，如果你想自动提交表单的功能，需要在 onValueChange 中调用 formRef.current?.submit()',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'NumberSetter',
                    isRequired: false,
                    initialValue: 0
                  },
                  {
                    componentName: 'FunctionSetter',
                    isRequired: false
                  }
                ]
              }
            }
          },
          {
            name: 'dateFormatter',
            title: {
              label: '时间格式化',
              tip: 'dateFormatter | number string 或自定义'
            },
            propType: { type: 'oneOfType', value: ['string', 'func'] },
            setter: [
              {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    {
                      title: '数字类型',
                      value: 'number'
                    },
                    {
                      title: '字符串类型',
                      value: 'string'
                    }
                  ]
                }
              },
              'FunctionSetter'
            ],
            defaultValue: 'string'
          }
        ]
      },
      {
        title: '国际化',
        display: 'block',
        type: 'group',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'language',
                'zh-CN': '语言'
              },
              tip: '支持中文和英文'
            },
            name: 'intl',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: '简体中文',
                    value: 'zhCNIntl'
                  },
                  {
                    title: 'enUS',
                    value: 'enUSIntl'
                  }
                ]
              }
            }
          }
        ]
      }
    ],
    supports: {
      events: [

        
        {
          name: 'onDragSortEnd',
          description: '拖拽完成后的回调',
          template:
          'getRowKey(beforeIndex,afterIndex,newDataSource,${extParams}){\n// 通过函数获取信息 \nreturn \n}'
        },
        {
          name: 'onLoad',
          description: '数据加载完成后触发'
        },
        {
          name: 'beforeSearchSubmit',
          description: '格式化搜索表单提交数据'
        },
        {
          name: 'onSubmit',
          description: '提交表单时触发'
        },
        {
          name: 'onReset',
          description: '重置表单时触发'
        },
        {
          name: 'onDataSourceChange',
          description: '可编辑表格修改数据的改变'
        },
        {
          name: 'onExpand',
          description: '@deprecated Use `expandable.onExpand` instead'
        },
        {
          name: 'onRow'
        },
        {
          name: 'onHeaderRow'
        },
        {
          name: 'onChange'
        },
        {
          name: 'onLoadingChange',
          description: 'loading 被修改时触发，一般是网络请求导致的'
        },
        {
          name: 'onRequestError',
          description: '数据加载失败时触发'
        },
        {
          name: 'onValuesChange',
          description: 'Form onValuesChange'
        }
      ],
      style: true,
      className: true
    },
    component: {}
  }
}

export default {
  ...ProTableMeta,
  snippets
}
