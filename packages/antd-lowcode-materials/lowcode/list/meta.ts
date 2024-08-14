import snippets from './snippets';

export default {
  snippets,
  componentName: 'List',
  title: '列表',
  category: '数据展示',
  props: [
    {
      title: '数据源',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'dataSource',
          title: { label: '列表数据源', tip: '列表数据源' },
          propType: { type: 'arrayOf', value: 'any' },
          setter: ['JsonSetter', 'VariableSetter'],
        },
        {
          name: 'loading',
          title: {
            label: '是否加载中',
            tip: 'loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位',
          },
          propType: 'bool',
          defaultValue: false,
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'rowKey',
          title: {
            label: '行Key',
            tip: 'rowKey | 当 renderItem 自定义渲染列表项有效时，自定义每一行的 key 的获取方式',
          },
          propType: {
            type: 'oneOfType',
            value: ['string', 'function'],
          },
          defaultValue: 'id',
          setter: [
            'StringSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'rowKey(item,${extParams}){\n// 自定义每一行的 key\nreturn `key-${item.id}`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'itemLayout',
          title: {
            label: '尺寸',
            tip: 'itemLayout  | 设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排',
          },
          propType: { type: 'oneOf', value: ['horizontal', 'vertical'] },
          defaultValue: 'horizontal',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '水平',
                    value: 'horizontal',
                  },
                  {
                    title: '垂直',
                    value: 'vertical',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'size',
          title: { label: '尺寸', tip: 'size  | 列表的尺寸' },
          propType: { type: 'oneOf', value: ['default', 'large', 'small'] },
          defaultValue: 'default',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '大',
                    value: 'large',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'bordered',
          title: { label: '显示边框', tip: 'bordered | 是否展示边框' },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'split',
          title: { label: '展示分割线', tip: 'split | 是否展示分割线' },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: '栅格',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'gridEnable',
          title: { label: '启用栅格', tip: 'grid | 是否启用栅格' },
          propType: 'bool',
          setter: 'BoolSetter',
          extraProps: {
            setValue(target, value) {
              if (value === false) {
                const { node } = target;
                node.setPropValue('grid', false);
              }
            },
          },
        },
        {
          name: 'grid.column',
          title: { label: '列数', tip: 'grid.column | 栅格的列数' },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 4,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("gridEnable")',
          },
        },
        {
          name: 'grid.gutter',
          title: { label: '间隔', tip: 'grid.gutter | 栅格的间隔' },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 0,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("gridEnable")',
          },
        },
      ],
    },
    {
      title: '分页',
      name: 'pagination',
      supportVariable: true,
      defaultValue: true,
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


    // {
    //   title: '分页',
    //   display: 'block',
    //   type: 'group',
    //   items: [
    //     {
    //       name: 'pagination',
    //       title: { label: '显示分页', tip: 'pagination | 显示分页' },
    //       propType: 'object',
    //       setter: 'BoolSetter',
    //       extraProps: {
    //         setValue: (target, value) => {
    //           if (value) {
    //             target.parent.setPropValue('pagination', {
    //               pageSize: 5,
    //             });
    //           }
    //         },
    //       },
    //     },
    //     {
    //       name: 'pagination.pageSize',
    //       title: { label: '每页条数', tip: 'pagination.pageSize | 每页条数' },
    //       setter: 'NumberSetter',
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     {
    //       name: 'pagination.total',
    //       title: { label: '数据总数', tip: 'pagination.total | 数据总数' },
    //       setter: 'NumberSetter',
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     // {
    //     //   name: 'pagination.defaultCurrent',
    //     //   title: {
    //     //     label: '默认当前页',
    //     //     tip: 'pagination.defaultCurrent | 默认的当前页数',
    //     //   },
    //     //   setter: [
    //     //     {
    //     //       componentName: 'NumberSetter',
    //     //       props: {
    //     //         initialValue: 1,
    //     //       },
    //     //     },
    //     //     'VariableSetter',
    //     //   ],
    //     //   condition: {
    //     //     type: 'JSFunction',
    //     //     value: 'target => !!target.getProps().getPropValue("pagination")',
    //     //   },
    //     // },
    //     {
    //       name: 'pagination.current',
    //       title: { label: '当前页数', tip: 'pagination.current | 当前页数' },
    //       setter: 'NumberSetter',
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     {
    //       name: 'pagination.showTotal',
    //       title: {
    //         label: '显示总数',
    //         tip: 'pagination.showTotal | 用于显示数据总量和当前数据顺序',
    //       },
    //       propType: 'func',
    //       setter: [
    //         {
    //           componentName: 'FunctionSetter',
    //           props: {
    //             template:
    //               'showTotal(total,range,${extParams}){\n// 用于格式化显示表格数据总量\nreturn `共 ${total} 条`;\n}',
    //           },
    //         },
    //         'VariableSetter',
    //       ],
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     {
    //       name: 'pagination.showSizeChanger',
    //       title: {
    //         label: '页数切换',
    //         tip: 'pagination.showSizeChanger | 是否展示 pageSize 切换器',
    //       },
    //       propType: 'bool',
    //       setter: 'BoolSetter',
    //       defaultValue: false,
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     {
    //       name: 'pagination.showQuickJumper',
    //       title: {
    //         label: '快速跳转',
    //         tip: 'pagination.showQuickJumper | 是否可以快速跳转至某页',
    //       },
    //       propType: 'bool',
    //       setter: 'BoolSetter',
    //       defaultValue: false,
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     {
    //       name: 'pagination.simple',
    //       title: { label: '简单分页', tip: 'pagination.simple | 简单分页' },
    //       propType: 'bool',
    //       setter: 'BoolSetter',
    //       defaultValue: false,
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     {
    //       name: 'pagination.size',
    //       title: { label: '分页尺寸', tip: 'pagination.size | 分页尺寸' },
    //       propType: {
    //         type: 'oneOf',
    //         value: ['default', 'small'],
    //       },
    //       setter: [
    //         {
    //           componentName: 'RadioGroupSetter',
    //           props: {
    //             options: [
    //               {
    //                 title: '默认',
    //                 value: 'default',
    //               },
    //               {
    //                 title: '小',
    //                 value: 'small',
    //               },
    //             ],
    //           },
    //         },
    //         'VariableSetter',
    //       ],
    //       defaultValue: 'default',
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //     {
    //       name: 'pagination.position',
    //       title: { label: '分页位置', tip: 'pagination.position | 分页位置' },
    //       setter: {
    //         componentName: 'SelectSetter',
    //         props: {
    //           options: [
    //             {
    //               title: '上',
    //               value: 'top',
    //             },
    //             {
    //               title: '下',
    //               value: 'bottom',
    //             },
    //             {
    //               title: '上下',
    //               value: 'both',
    //             },
    //           ],
    //         },
    //         initialValue: 'bottomRight',
    //       },
    //       condition: {
    //         type: 'JSFunction',
    //         value: 'target => !!target.getProps().getPropValue("pagination")',
    //       },
    //     },
    //   ],
    // },
    {
      title: '扩展',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'renderItem',
          title: {
            label: '渲染函数',
            tip: 'renderItem | 当使用 dataSource 时，可以用 `renderItem` 自定义渲染列表项',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '渲染函数插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['item'],
                value: [
                  {
                    componentName: 'List.Item',
                    props: {},
                    children: {
                      componentName: 'Typography.Text',
                      props: {
                        children: {
                          type: 'JSExpression',
                          value: 'this.item.text',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'renderItem(item,${extParams}){\n// 自定义渲染列表项\nreturn `item`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'header',
          title: {
            label: '列表头部',
            tip: 'header | 列表头部',
          },
          propType: 'node',
          setter: [
            {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Typography.Text',
                    props: {
                      children: '列表头部',
                    },
                  },
                ],
              },
            },'BoolSetter'
          ]
        },
        {
          name: 'footer',
          title: {
            label: '列表底部',
            tip: 'footer | 列表底部',
          },
          propType: 'node',
          setter: [
            {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Typography.Text',
                    props: {
                      children: '列表底部',
                    },
                  },
                ],
              },
            },'BoolSetter'
          ]
        },
        {
          name: 'loadMore',
          title: {
            label: '加载更多',
            tip: 'loadMore | 加载更多',
          },
          propType: 'node',
          setter: [
            {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Button',
                    props: {
                      children: 'loading more',
                    },
                  },
                ],
              },
            },"BoolSetter"
          ],
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      className: true ,
      events: [
        {
          name: 'pagination.onChange',
          description:"页码或 pageSize 改变的回调",
          template: 'onChange(page,pageSize,${extParams}){\n// 页码或 pageSize 改变的回调\n}',
        },
      ],
    },
  },
};
