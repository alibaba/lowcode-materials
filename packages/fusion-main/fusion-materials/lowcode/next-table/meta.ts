module.exports = {
  group: '原子组件',
  componentName: 'NextTable',
  title: '表格',
  docUrl: '',
  screenshot: '',
  npm: {
    package: 'NextTable',
    version: '{{version}}',
    exportName: 'NextTable',
    main: 'lib/index.js',
    subName: '',
  },
  props: [
    {
      name: 'columns',
      title: '数据列',
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'title',
              description: '列标题',
              propType: 'string',
              defaultValue: 'Title',
            },
            {
              name: 'dataKey',
              description: '列索引',
              propType: 'string',
              defaultValue: 'Key',
            },
            {
              name: 'dataType',
              description: '数据类型',
              propType: {
                type: 'oneOf',
                value: ['text', 'timestamp', 'cascadeTimestamp', 'employee', 'money', 'moneyRange'],
              },
              defaultValue: 'Key',
            },
            {
              name: 'editType',
              description: '编辑类型',
              propType: {
                type: 'oneOf',
                value: ['select', 'text', 'radio', 'date', 'employee'],
              },
              defaultValue: 'Key',
            },
          ],
        },
      },
    },
    {
      name: 'data',
      title: '数据源',
      propType: {
        type: 'oneOfType',
        value: ['Json', 'JSExpression'],
      },
    },
    {
      name: 'actionTitle',
      title: '操作列标题',
      propType: 'string',
    },
    {
      name: 'actionColumn',
      title: '操作列',
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'title',
              description: '列标题',
              propType: 'string',
              defaultValue: 'Title',
            },
            {
              name: 'callback',
              description: 'callback',
              propType: 'func',
              defaultValue: {
                type: 'JSFunction',
                value:
                  '(rowData, action, table) => {\n return table.editRow(rowData).then((row) => {\n console.log(row);\n })}',
              },
            },
          ],
        },
      },
    },
    {
      name: 'customBarItem',
      isRequired: true,
      title: '自定义工具栏渲染',
      propType: 'any',
    },
  ],
  configure: {
    props: [
      {
        name: 'customBarItem',
        isRequired: true,
        title: '自定义工具栏渲染',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'render',
                  title: '整体自定义渲染',
                  setter: {
                    componentName: 'FunctionSetter',
                    props: {
                      supportParams: true,
                    },
                  },
                },
                {
                  name: 'rightRender',
                  title: '底部自定义渲染',
                  setter: {
                    componentName: 'SlotSetter',
                    initialValue: {
                      type: 'JSSlot',
                      params: ['value', 'index', 'record'],
                      value: [],
                    },
                  },
                },
                {
                  name: 'bottomRender',
                  title: '右侧自定义渲染',
                  setter: {
                    componentName: 'SlotSetter',
                    initialValue: {
                      type: 'JSSlot',
                      params: ['value', 'index', 'record'],
                      value: [],
                    },
                  },
                },
              ],
            },
          },
        },
      },
      {
        name: 'StyleAndTheme',
        title: '风格和样式',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'theme',
            title: '主题',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'zebra',
                    value: 'zebra',
                  },
                  {
                    title: 'split',
                    value: 'split',
                  },
                  {
                    title: 'border',
                    value: 'border',
                  },
                ],
              },
            },
          },
          {
            name: 'hasHeader',
            title: '是否显示表头',
            setter: 'BoolSetter',
            supportVariable: true,
          },
          {
            name: 'fixedHeader',
            title: '是否固定表头',
            setter: 'BoolSetter',
            supportVariable: true,
          },
          {
            name: 'stickyHeader',
            title: '表头是否是sticky',
            setter: 'BoolSetter',
            supportVariable: true,
          },
          {
            name: 'setEmptyContent',
            title: '开启自定义空提示',
            setter: 'BoolSetter',
            supportVariable: true,
          },
          {
            description: '最大高度',
            name: 'maxBodyHeight',
            setter: 'StringSetter',
            supportVariable: true,
          },
        ],
      },
      {
        name: 'Selector',
        title: '行选择器',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'rowSelector',
            title: '选择器模式',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'checkboxSelector',
                    value: 'checkboxSelector',
                  },
                  {
                    title: 'radioSelector',
                    value: 'radioSelector',
                  },
                ],
              },
            },
          },
          {
            name: 'showRowSelector',
            title: '是否启用选择模式',
            setter: 'BoolSetter',
            supportVariable: true,
          },
        ],
      },
      {
        name: 'Pagination',
        title: '分页设置',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'isPagination',
            title: '是否显示分页',
            setter: 'BoolSetter',
            supportVariable: true,
            initialValue: true,
          },
          {
            name: 'pagination',
            title: '分页设置',
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'paginationPosition',
                      title: '翻页器显示位置',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'left',
                              value: 'left',
                            },
                            {
                              title: 'right',
                              value: 'right',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'size',
                      title: '分页组件大小',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'small',
                              value: 'small',
                            },
                            {
                              title: 'medium',
                              value: 'medium',
                            },
                            {
                              title: 'large',
                              value: 'large',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'type',
                      title: '分页组件类型',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'normal',
                              value: 'normal',
                            },
                            {
                              title: 'simple',
                              value: 'simple',
                            },
                            {
                              title: 'mini',
                              value: 'mini',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'shape',
                      title: '前进后退按钮样式',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: 'normal',
                              value: 'normal',
                            },
                            {
                              title: 'arrow-only',
                              value: 'arrow-only',
                            },
                            {
                              title: 'arrow-prev-only',
                              value: 'arrow-prev-only',
                            },
                            {
                              title: 'no-border',
                              value: 'no-border',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'pageSizeSelector',
                      title: '每页显示选择器类型',
                      setter: 'BoolSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'pageSizeList',
                      title: '每页显示选择器可选值',
                      setter: 'StringSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'pageSizePosition',
                      title: '每页显示选择器在组件中的位置',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: 'start',
                              value: 'start',
                            },
                            {
                              title: 'end',
                              value: 'end',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'hideOnlyOnePage',
                      title: 'hideOnlyOnePage',
                      setter: 'BoolSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'showJump',
                      title: 'showJump',
                      setter: 'BoolSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'pageShowCount',
                      title: '页码显示的数量',
                      setter: 'NumberSetter',
                      supportVariable: true,
                    },
                  ],
                },
              },
              initialValue: {
                type: 'normal',
                shape: 'arrow-only',
                pageSize: 10,
                pageSizeSelector: false,
                pageSizeList: '5,10,20',
                pageSizePosition: 'end',
                paginationPosition: 'right',
                hideOnlyOnePage: false,
                showJump: true,
              },
            },
          },
        ],
      },
      {
        name: 'ExpandAndTree',
        title: '可折叠/树形表格',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'hasExpandedRowCtrl',
            title: '启用折叠',
            setter: 'BoolSetter',
            supportVariable: true,
          },
          {
            name: 'isTree',
            title: '启用树形',
            setter: 'BoolSetter',
            supportVariable: true,
          },
        ],
      },
      {
        name: 'TopAction',
        title: '顶部操作选项',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'showMiniPager',
            title: '顶部迷你分页器',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'showActionBar',
            title: '显示操作条',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'showLinkBar',
            title: '显示外链条',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'showSearch',
            title: '显示搜索',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'searchBarPlaceholder',
            title: '搜索 placeholder',
            setter: 'StringSetter',
            supportVariable: true,
          },
          {
            name: 'showCustomColumn',
            title: '显示筛选器',
            setter: {
              componentName: 'BoolSetter',
            },
          },
        ],
      },
      {
        name: 'actionBar',
        title: '操作条',
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
                      description: '标题',
                      setter: 'StringSetter',
                      supportVariable: true,
                      initialValue: 'Title',
                    },
                    {
                      name: 'callback',
                      description: 'callback',
                      setter: {
                        componentName: 'FunctionSetter',
                      },
                    },
                  ],
                },
              },
              initialValue: {
                title: 'Title',
              },
            },
          },
        },
      },
      {
        name: 'linkBar',
        title: '外链操作条',
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
                      description: '标题',
                      setter: 'StringSetter',
                      supportVariable: true,
                      initialValue: 'Title',
                    },
                    {
                      name: 'callback',
                      description: 'callback',
                      setter: {
                        componentName: 'FunctionSetter',
                      },
                    },
                  ],
                },
              },
              initialValue: {
                title: 'Title',
              },
            },
          },
        },
      },
      {
        name: 'columns',
        title: '数据列',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'ExpressionSetter',
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            name: 'title',
                            description: '列标题',
                            setter: 'StringSetter',
                            supportVariable: true,
                          },
                          {
                            name: 'dataKey',
                            description: '列索引',
                            setter: 'StringSetter',
                            supportVariable: true,
                          },
                          {
                            description: '宽度',
                            name: 'width',
                            setter: 'StringSetter',
                            supportVariable: true,
                          },
                          {
                            name: 'dataType',
                            description: '数据类型',
                            setter: {
                              componentName: 'SelectSetter',
                              props: {
                                options: [
                                  {
                                    title: 'text',
                                    value: 'text',
                                  },
                                  {
                                    title: 'timestamp',
                                    value: 'timestamp',
                                  },
                                  {
                                    title: 'cascadeTimestamp',
                                    value: 'cascadeTimestamp',
                                  },
                                  {
                                    title: 'employee',
                                    value: 'employee',
                                  },
                                  {
                                    title: 'money',
                                    value: 'money',
                                  },
                                  {
                                    title: 'moneyRange',
                                    value: 'moneyRange',
                                  },
                                ],
                              },
                            },
                          },
                          {
                            name: 'editType',
                            description: '编辑类型',
                            setter: {
                              componentName: 'SelectSetter',
                              props: {
                                options: [
                                  {
                                    title: 'select',
                                    value: 'select',
                                  },
                                  {
                                    title: 'text',
                                    value: 'text',
                                  },
                                  {
                                    title: 'radio',
                                    value: 'radio',
                                  },
                                  {
                                    title: 'date',
                                    value: 'date',
                                  },
                                  {
                                    title: 'employee',
                                    value: 'employee',
                                  },
                                ],
                              },
                            },
                          },
                          {
                            name: 'lock',
                            description: '锁定位置',
                            setter: {
                              componentName: 'RadioGroupSetter',
                              props: {
                                options: [
                                  {
                                    title: '左',
                                    value: 'left',
                                  },
                                  {
                                    title: '右',
                                    value: 'right',
                                  },
                                  {
                                    title: '无',
                                    value: '',
                                  },
                                ],
                              },
                              initialValue: '',
                            },
                          },
                          {
                            name: 'cell',
                            title: '自定义渲染',
                            setter: 'FunctionSetter',
                          },
                          {
                            description: '自定义渲染',
                            name: 'render',
                            setter: {
                              componentName: 'SlotSetter',
                              title: '单元格自定义',
                              initialValue: {
                                type: 'JSSlot',
                                params: ['value', 'index', 'record'],
                                value: [
                                  {
                                    componentName: 'Box',
                                  },
                                ],
                              },
                            },
                          },
                        ],
                      },
                    },
                    initialValue: {
                      title: 'Title',
                      dataKey: 'Key',
                      dataType: 'text',
                      editType: 'text',
                      // width: 200,
                      lock: '',
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        name: 'data',
        title: '数据源',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['JsonSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'action',
        title: '操作列选项',
        type: 'group',
        extraProps: {
          display: 'entry',
        },
        items: [
          {
            name: 'actionTitle',
            title: '操作列标题',
            setter: 'StringSetter',
            supportVariable: true,
          },
          {
            name: 'actionWidth',
            title: '操作列宽度',
            setter: 'NumberSetter',
            supportVariable: true,
          },
          {
            name: 'actionType',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'link',
                    value: 'link',
                  },
                  {
                    title: 'button',
                    value: 'button',
                  },
                ],
              },
            },
          },
          {
            name: 'actionFixed',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'right',
                    value: 'right',
                  },
                  {
                    title: 'none',
                    value: 'none',
                  },
                ],
              },
            },
          },
          {
            name: 'actionHidden',
            setter: 'BoolSetter',
            supportVariable: true,
            initialValue: false,
          },
        ],
      },
      {
        name: 'actionColumn',
        title: '操作列',
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
                      description: '列标题',
                      setter: 'StringSetter',
                      supportVariable: true,
                      initialValue: 'Title',
                    },
                    {
                      name: 'callback',
                      description: 'callback',
                      setter: {
                        componentName: 'FunctionSetter',
                      },
                    },
                  ],
                },
              },
              initialValue: {
                title: 'Title',
                callback: {
                  type: 'JSFunction',
                  value:
                    '(rowData, action, table) => {\n return table.editRow(rowData).then((row) => {\n console.log(row);\n })}',
                },
              },
            },
          },
        },
      },
    ],
    supports: {
      style: true,
      events: [
        'onFetchData',
        'onSelect',
        'onRowClick',
        'onRowMouseEnter',
        'onRowMouseLeave',
        'onResizeChange',
        'onColumnsChange',
        'onRowOpen',
        'onShowSearch',
        'onHideSearch',
      ],
    },
  },
  icon: 'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_table.png',
  category: '信息输入',
  snippets: require('./snippets'),
};
