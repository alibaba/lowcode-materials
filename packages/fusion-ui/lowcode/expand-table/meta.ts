import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { proTableMeta } from '../pro-table/pro-table-meta';
import { mockProTableRow, mockId } from '../pro-table/utils';
import { isJSExpression } from '../utils';

const childProps = proTableMeta.configure.props.map((item) => {
  if (item.name === 'dataSource') {
    return {
      type: 'field',
      name: 'dataSource',
      title: '表格数据源',
      display: 'accordion',
      setter: (target) => {
        const dataSource = target.getProps().getPropValue('dataSource');
        if (isJSExpression(dataSource)) {
          return {
            componentName: 'ExpressionSetter',
          };
        }
        const current = dataSource[target.path[1]];
        const columns = current?.childTableProps?.columns;
        if (!columns || isJSExpression(columns)) {
          return {
            componentName: 'ExpressionSetter',
          };
        }
        const mockRow = mockProTableRow(columns);
        const primaryKey = target.getProps().getPropValue('primaryKey') || 'id';
        return {
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
                        items: columns.map((column, index) => {
                          return {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': column.dataIndex,
                                'zh-CN': column.title,
                              },
                            },
                            name: column.dataIndex,
                            setter: {
                              isRequired: index < 2,
                              componentName: 'StringSetter',
                            },
                            defaultValue: mockRow[column.dataIndex],
                          };
                        }),
                      },
                    },
                    initialValue: () => {
                      return {
                        ...mockRow,
                        [primaryKey]: mockId(),
                      };
                    },
                  },
                },
              },
              'ExpressionSetter',
            ],
          },
        };
      },
    };
  }
  return item;
});

const props = proTableMeta.configure.props.map((item) => {
  if (item.name === 'dataSource') {
    return {
      type: 'field',
      name: 'dataSource',
      title: '表格数据源',
      display: 'accordion',
      setter: (target) => {
        const columns = target.getProps().getPropValue('columns');
        if (!columns || isJSExpression(columns)) {
          return {
            componentName: 'ExpressionSetter',
          };
        }
        const mockRow = mockProTableRow(columns);
        const primaryKey = target.getProps().getPropValue('primaryKey') || 'id';
        return {
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
                          ...columns.map((column, index) => {
                            return {
                              title: {
                                label: {
                                  type: 'i18n',
                                  'en-US': column.dataIndex,
                                  'zh-CN': column.title,
                                },
                              },
                              name: column.dataIndex,
                              setter: {
                                isRequired: index < 2,
                                componentName: 'StringSetter',
                              },
                              defaultValue: mockRow[column.dataIndex],
                            };
                          }),
                          {
                            title: {
                              label: { type: 'i18n', 'en-US': 'ChildTable', 'zh-CN': '子表格配置' },
                            },
                            display: 'accordion',
                            name: 'childTableProps',
                            setter: {
                              componentName: 'ObjectSetter',
                              props: {
                                config: {
                                  items: childProps,
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                    initialValue: () => {
                      return {
                        ...mockRow,
                        [primaryKey]: mockId(),
                      };
                    },
                  },
                },
              },
              'ExpressionSetter',
            ],
          },
        };
      },
    };
  }
  return item;
});

const ExpandTableMeta: ComponentMetadata = {
  componentName: 'ExpandTable',
  title: '母子表格',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i4/O1CN01N3gxxr1cjKnzi9iBU_!!6000000003636-55-tps-56-56.svg',
  devMode: 'proCode',
  group: '精选组件',
  category: '表格类',
  tags: ['业务组件'],
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.8',
    exportName: 'ExpandTable',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onBodyScroll',
          description: '在内容区域滚动的时候触发的函数',
        },
      ],
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '母子表格',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN01N3gxxr1cjKnzi9iBU_!!6000000003636-55-tps-56-56.svg',
    schema: {
      componentName: 'ExpandTable',
      props: {
        dataSource: [
          {
            id: 'id-2f5DdE2b-0',
            date: '2013-06-12',
            percent: 1.862,
            documentAmount: 2022,
            currency: 'CNY',
            company: '支付宝科技有限公司',
            childTableProps: {
              dataSource: [],
              columns: [
                {
                  title: '公司',
                  dataIndex: 'company',
                  width: 160,
                  formatType: 'link',
                  searchable: true,
                },
                {
                  title: '单据金额',
                  dataIndex: 'documentAmount',
                  formatType: 'money',
                },
                {
                  title: '币种',
                  dataIndex: 'currency',
                  formatType: 'currency',
                  filters: [
                    {
                      label: 'CNY',
                      value: 'CNY',
                    },
                    {
                      label: 'USD',
                      value: 'USD',
                    },
                    {
                      label: 'JPY',
                      value: 'JPY',
                    },
                    {
                      label: 'HKD',
                      value: 'HKD',
                    },
                  ],
                  filterMode: 'multiple',
                  explanation: '提示信息',
                  width: 110,
                },
                {
                  title: '完成进度',
                  dataIndex: 'percent',
                  formatType: 'progress',
                },
                {
                  title: '到账日期',
                  dataIndex: 'date',
                  formatType: 'date',
                },
              ],
            },
          },
          {
            id: 'id-2f5DdE2b-1',
            date: '2013-06-12',
            percent: 1.862,
            documentAmount: 2022,
            currency: 'CNY',
            company: '支付宝科技有限公司',
            childTableProps: {
              dataSource: [],
              columns: [
                {
                  title: '公司',
                  dataIndex: 'company',
                  width: 160,
                  formatType: 'link',
                  searchable: true,
                },
                {
                  title: '单据金额',
                  dataIndex: 'documentAmount',
                  formatType: 'money',
                },
                {
                  title: '币种',
                  dataIndex: 'currency',
                  formatType: 'currency',
                  filters: [
                    {
                      label: 'CNY',
                      value: 'CNY',
                    },
                    {
                      label: 'USD',
                      value: 'USD',
                    },
                    {
                      label: 'JPY',
                      value: 'JPY',
                    },
                    {
                      label: 'HKD',
                      value: 'HKD',
                    },
                  ],
                  filterMode: 'multiple',
                  explanation: '提示信息',
                  width: 110,
                },
                {
                  title: '完成进度',
                  dataIndex: 'percent',
                  formatType: 'progress',
                },
                {
                  title: '到账日期',
                  dataIndex: 'date',
                  formatType: 'date',
                },
              ],
            },
          },
          {
            id: 'id-2f5DdE2b-2',
            date: '2013-06-12',
            percent: 1.862,
            documentAmount: 2022,
            currency: 'CNY',
            company: '支付宝科技有限公司',
            childTableProps: {
              dataSource: [],
              columns: [
                {
                  title: '公司',
                  dataIndex: 'company',
                  width: 160,
                  formatType: 'link',
                  searchable: true,
                },
                {
                  title: '单据金额',
                  dataIndex: 'documentAmount',
                  formatType: 'money',
                },
                {
                  title: '币种',
                  dataIndex: 'currency',
                  formatType: 'currency',
                  filters: [
                    {
                      label: 'CNY',
                      value: 'CNY',
                    },
                    {
                      label: 'USD',
                      value: 'USD',
                    },
                    {
                      label: 'JPY',
                      value: 'JPY',
                    },
                    {
                      label: 'HKD',
                      value: 'HKD',
                    },
                  ],
                  filterMode: 'multiple',
                  explanation: '提示信息',
                  width: 110,
                },
                {
                  title: '完成进度',
                  dataIndex: 'percent',
                  formatType: 'progress',
                },
                {
                  title: '到账日期',
                  dataIndex: 'date',
                  formatType: 'date',
                },
              ],
            },
          },
        ],
        actionColumnButtons: {
          dataSource: [
            {
              children: '查看',
              type: 'primary',
            },
            {
              children: '编辑',
              type: 'primary',
              disabled: true,
            },
            {
              children: '删除',
              type: 'primary',
            },
          ],
          text: true,
          visibleButtonCount: 3,
        },
        actionBarButtons: {
          dataSource: [
            {
              type: 'primary',
              children: '操作一',
            },
            {
              type: 'normal',
              children: '操作二',
            },
          ],
          visibleButtonCount: 3,
        },
        paginationProps: {
          pageSize: 20,
          current: 1,
        },
        settingButtons: true,
        columns: [
          {
            title: '公司',
            dataIndex: 'company',
            width: 160,
            formatType: 'link',
            searchable: true,
          },
          {
            title: '单据金额',
            dataIndex: 'documentAmount',
            formatType: 'money',
          },
          {
            title: '币种',
            dataIndex: 'currency',
            formatType: 'currency',
            filters: [
              {
                label: 'CNY',
                value: 'CNY',
              },
              {
                label: 'USD',
                value: 'USD',
              },
              {
                label: 'JPY',
                value: 'JPY',
              },
              {
                label: 'HKD',
                value: 'HKD',
              },
            ],
            filterMode: 'multiple',
            explanation: '提示信息',
            width: 110,
          },
          {
            title: '完成进度',
            dataIndex: 'percent',
            formatType: 'progress',
          },
          {
            title: '到账日期',
            dataIndex: 'date',
            formatType: 'date',
          },
        ],
      },
    },
  },
];

export default {
  ...ExpandTableMeta,
  snippets,
};
