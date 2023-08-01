module.exports = {
  group: '原子组件',
  componentName: 'Table',
  title: 'Table',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Table',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
    },
    {
      name: 'children',
      propType: 'string',
    },
    {
      name: 'pure',
      propType: 'bool',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'tableLayout',
      propType: {
        type: 'oneOf',
        value: ['fixed', 'auto'],
      },
    },
    {
      name: 'tableWidth',
      propType: 'number',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium'],
      },
    },
    {
      name: 'dataSource',
      propType: {
        type: 'arrayOf',
        value: 'object',
      },
    },
    {
      name: 'entireDataSource',
      propType: 'array',
    },
    {
      name: 'onRowClick',
      propType: 'func',
    },
    {
      name: 'onRowMouseEnter',
      propType: 'func',
    },
    {
      name: 'rowProps',
      propType: 'func',
    },
    {
      name: 'cellProps',
      propType: 'func',
    },
    {
      name: 'hasBorder',
      propType: 'bool',
    },
    {
      name: 'hasHeader',
      propType: 'bool',
    },
    {
      name: 'isZebra',
      propType: 'bool',
    },
    {
      name: 'loading',
      propType: 'bool',
    },
    {
      name: 'filterParams',
      propType: 'object',
    },
    {
      name: 'sort',
      propType: 'object',
    },
    {
      name: 'sortIcons',
      propType: 'object',
    },
    {
      name: 'locale',
      propType: 'object',
    },
    {
      name: 'components',
      propType: 'object',
    },
    {
      name: 'columns',
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'title',
              description: '列标题',
              propType: 'string',
            },
            {
              name: 'dataIndex',
              description: '列名称',
              propType: 'string',
            },
          ],
        },
      },
    },
    {
      name: 'emptyContent',
      propType: 'node',
    },
    {
      name: 'primaryKey',
      propType: 'string',
    },
    {
      name: 'lockType',
      propType: {
        type: 'oneOf',
        value: ['left', 'right'],
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'wrapperContent',
      propType: 'any',
    },
    {
      name: 'refs',
      propType: 'object',
    },
    {
      name: 'expandedRowRender',
      propType: 'func',
    },
    {
      name: 'expandedRowIndent',
      propType: 'array',
    },
    {
      name: 'hasExpandedRowCtrl',
      propType: 'bool',
    },
    {
      name: 'getExpandedColProps',
      propType: 'func',
    },
    {
      name: 'openRowKeys',
      propType: 'array',
    },
    {
      name: 'onRowOpen',
      propType: 'func',
    },
    {
      name: 'onExpandedRowClick',
      propType: 'func',
    },
    {
      name: 'fixedHeader',
      propType: 'bool',
    },
    {
      name: 'rowSelection',
      propType: 'object',
    },
    {
      name: 'stickyHeader',
      propType: 'bool',
    },
    {
      name: 'offsetTop',
      propType: 'number',
    },
    {
      name: 'affixProps',
      propType: 'object',
    },
    {
      name: 'indent',
      propType: 'number',
    },
    {
      name: 'isTree',
      propType: 'bool',
    },
    {
      name: 'useVirtual',
      propType: 'bool',
    },
    {
      name: 'onBodyScroll',
      propType: 'func',
    },
    {
      name: 'expandedIndexSimulate',
      propType: 'bool',
    },
    {
      name: 'crossline',
      propType: 'bool',
    },
    {
      name: 'lengths',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'dataSource',
          setter: 'JsonSetter',
          supportVariable: true,
        },
        {
          name: 'children',
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'componentName',
                        title: '子组件',
                        defaultValue: 'Table.Column',
                        setter: {
                          componentName: 'StringSetter',
                        },
                      },
                      {
                        name: 'props',
                        title: 'props',
                        setter: {
                          componentName: 'ObjectSetter',
                          props: {
                            config: {
                              items: [
                                {
                                  name: 'title',
                                  setter: {
                                    componentName: 'StringSetter',
                                  },
                                },
                                {
                                  name: 'dataIndex',
                                  setter: {
                                    componentName: 'StringSetter',
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
          extraProps: {
            defaultValue: '',
            onChange: {
              type: 'JSFunction',
              value:
                '(val, field, editor) => {\n debugger;\n console.log(\'val\', val);//field.node.children.importSchema(val && {"componentName": "Table.Column", "props": {"type": val, "style": {"marginRight": 5}}}, true); //field.top.setPropValue(\'children\', [{"componentName": "Icon", "props": {"type": val}}, (field.top.getPropValue(\'children\') || []).slice(-1)]);\n}',
            },
          },
        },
      ],
    },
  },
  category: '基础',
};
