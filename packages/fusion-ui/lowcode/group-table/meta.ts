import { mockProTableRow } from '../pro-table/utils';
import { IComponentDescription } from '../types/index';
import { actionColumnButtonField, actionColumnField } from '../pro-table/actionColumnFields';
import { isJSExpression } from '../utils';
import { columnsField } from '../pro-table/columns-field';
import { buttonGroupConfigureProp } from '../common/button-groups';

const dataSource = [
  {
    header: '头部文字',
    footer: '尾部文字',
    children: [
      {
        company: '支付宝科技有限公司',
        documentAmount: 2022,
        currency: 'CNY',
        percent: 1.862,
        date: '2013-06-12',
        id: 'id-2f5DdE2b-0',
      },
      {
        company: '支付宝科技有限公司',
        documentAmount: 2022,
        currency: 'CNY',
        percent: 1.862,
        date: '2013-06-12',
        id: 'id-2f5DdE2b-0',
      },
    ],
  },
  {
    header: '头部文字2',
    footer: '尾部文字2',
    children: [
      {
        company: '支付宝科技有限公司',
        documentAmount: 2022,
        currency: 'CNY',
        percent: 1.862,
        date: '2013-06-12',
        id: 'id-2f5DdE2b-0',
      },
      {
        company: '支付宝科技有限公司',
        documentAmount: 2022,
        currency: 'CNY',
        percent: 1.862,
        date: '2013-06-12',
        id: 'id-2f5DdE2b-0',
      },
      {
        company: '支付宝科技有限公司',
        documentAmount: 2022,
        currency: 'CNY',
        percent: 1.862,
        date: '2013-06-12',
        id: 'id-2f5DdE2b-0',
      },
      {
        company: '支付宝科技有限公司',
        documentAmount: 2022,
        currency: 'CNY',
        percent: 1.862,
        date: '2013-06-12',
        id: 'id-2f5DdE2b-0',
      },
    ],
  },
];

const positiveIntegerSetter = {
  componentName: 'NumberSetter',
  props: {
    max: 200,
    min: 1,
  },
};

const groupTableMeta: IComponentDescription = {
  componentName: 'GroupTable',
  title: '分组表格',
  docUrl: '',
  icon: 'https://img.alicdn.com/imgextra/i4/O1CN01idASGC1tGLCY6bAUC_!!6000000005874-55-tps-56-56.svg',
  devMode: 'proCode',
  group: '精选组件',
  category: '表格类',
  tags: ['业务组件'],
  npm: {
    package: '@alifd/fusion-ui',
    version: '1.0.24-21',
    exportName: 'GroupTable',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },

  configure: {
    props: [
      columnsField,
      {
        type: 'field',
        name: 'id',
        title: '节点 ID',
        condition: () => false,
        extraProps: {},
        setter: 'NodeSetter',
      },
      actionColumnButtonField,
      {
        ...buttonGroupConfigureProp,
        name: 'actionBarButtons',
        title: '操作栏按钮',
      },
      actionColumnField,
      {
        name: 'dataSource',
        title: '分组内容',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: { label: { type: 'i18n', 'en-US': 'header', 'zh-CN': '头部文字' } },
                      name: 'header',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                    {
                      title: { label: { type: 'i18n', 'en-US': 'label', 'zh-CN': '尾部文字' } },
                      name: 'footer',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                    {
                      title: { label: { type: 'i18n', 'en-US': 'label', 'zh-CN': '数据源' } },
                      name: 'children',
                      setter: (target) => {
                        const columns = target.getProps().getPropValue('columns');
                        if (!columns || isJSExpression(columns)) {
                          return {
                            componentName: 'ExpressionSetter',
                          };
                        }
                        const mockRow = mockProTableRow(columns);
                        return {
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
                              initialValue: mockRow,
                            },
                          },
                        };
                      },
                    },
                  ],
                  extraSetter: { componentName: 'MixedSetter', isRequired: false, props: {} },
                },
              },
              initialValue: {
                header: '标题',
                footer: '尾部',
                children: [],
              },
            },
          },
          isRequired: true,
          initialValue: [],
        },
      },
      {
        type: 'field',
        name: 'paginationProps',
        title: '分页器',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        setter: {
          componentName: 'ObjectSetter',
          display: 'inline',
          props: {
            config: {
              items: [
                {
                  type: 'field',
                  name: 'hidden',
                  title: '关闭分页',
                  extraProps: {
                    display: 'inline',
                    defaultValue: false,
                  },
                  setter: 'BoolSetter',
                },
                {
                  name: 'total',
                  title: '总行数',
                  setter: {
                    componentName: 'NumberSetter',
                    props: {
                      min: 0,
                    },
                  },
                  hidden() {
                    console.log(
                      'visiblevisiblevisiblevisible',
                      this.parent.getParam('hidden').getValue(),
                    );

                    return !this.parent.getParam('hidden').getValue();
                  },
                },
                {
                  name: 'current',
                  title: '当前页',
                  setter: positiveIntegerSetter,
                },
                {
                  name: 'pageSize',
                  title: '每页行数',
                  setter: [
                    {
                      componentName: 'SelectSetter',
                      initialValue: 10,
                      props: {
                        options: [
                          {
                            title: '5',
                            value: 5,
                          },
                          {
                            title: '10',
                            value: 10,
                          },
                          {
                            title: '20',
                            value: 20,
                          },
                          {
                            title: '50',
                            value: 50,
                          },
                        ],
                      },
                    },
                    positiveIntegerSetter,
                  ],
                },
              ],
            },
          },
        },
      },
      {
        type: 'field',
        name: 'rowSelection',
        condition: () => false,
      },
    ],
    component: {
      isContainer: false,
      nestingRule: {},
    },
    supports: {},
  },
  snippets: [
    {
      title: '分组表格',
      screenshot:
        'https://img.alicdn.com/imgextra/i4/O1CN01idASGC1tGLCY6bAUC_!!6000000005874-55-tps-56-56.svg',
      schema: {
        componentName: 'GroupTable',
        props: {
          dataSource,
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
  ],
};

export default groupTableMeta;
