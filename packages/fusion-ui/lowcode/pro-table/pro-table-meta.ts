import { mockProTableRow, mockId, getDataSourceItemSetter } from './utils';
import { IComponentDescription } from '../types/index';
import { actionColumnButtonField, actionColumnField } from './actionColumnFields';
import { isJSExpression } from '../utils';
import { columnsField } from './columns-field';
import { buttonGroupConfigureProp } from '../common/button-groups';
import { globalStyleField } from './global-style';

const positiveIntegerSetter = {
  componentName: 'NumberSetter',
  props: {
    max: 200,
    min: 1,
  },
};

export const ProTableProps = [
  columnsField,
  {
    type: 'field',
    name: 'id',
    title: '节点 ID',
    condition: () => false,
    extraProps: {},
    setter: 'NodeSetter',
  },
  actionColumnField,
  actionColumnButtonField,
  {
    ...buttonGroupConfigureProp,
    name: 'actionBarButtons',
    title: '操作栏按钮',
  },
  {
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

      const items = columns.map((column, index) => {
        return {
          title: {
            label: {
              type: 'i18n',
              'en-US': column.dataIndex,
              'zh-CN': column.title,
            },
          },
          name: column.dataIndex,
          important: index < 2,
          setter: getDataSourceItemSetter(column.formatType),
          defaultValue: mockRow[column.dataIndex],
        };
      });
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
                      items,
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
  {
    type: 'group',
    title: '高级',
    name: 'advanced',
    extraProps: {
      display: 'accordion',
      defaultCollapsed: true,
    },
    items: [
      {
        type: 'field',
        name: '!选择模式',
        title: '选择模式',
        display: 'inline',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '无',
                value: 'none',
                tip: 'none',
              },
              {
                title: '多选',
                value: 'multiple',
                tip: 'multiple',
              },
              {
                title: '单选',
                value: 'single',
                tip: 'single',
              },
            ],
          },
        },
        defaultValue: 'none',
        getValue: (target) => {
          const rowSelection = target.parent.getPropValue('rowSelection');
          if (!rowSelection) {
            return 'none';
          }
          return rowSelection.mode === 'single' ? 'single' : 'multiple';
        },
        setValue: (field, value) => {
          const { node } = field;
          if (['single', 'multiple'].includes(value)) {
            node.setPropValue('rowSelection', {
              ...node.getPropValue('rowSelection'),
              mode: value,
            });
          } else {
            node.setPropValue('rowSelection', undefined);
          }
        },
      },
      {
        type: 'field',
        name: 'indexColumn',
        title: '开启序号列',
        extraProps: {
          display: 'inline',
          defaultValue: false,
        },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        type: 'field',
        name: 'settingButtons',
        title: '开启设置按钮',
        extraProps: {
          display: 'inline',
          defaultValue: false,
        },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        type: 'field',
        name: 'primaryKey',
        title: {
          label: '数据主键',
          tip: '数据主键用于区分数据中不同的行，对行选择和行编辑功能非常重要，不同的行主键值不可重复，一般采用数据库中自增 ID 字段',
        },
        extraProps: {
          display: 'inline',
          defaultValue: 'id',
          condition: () => false,
        },
      },
      {
        name: 'cellDefault',
        title: {
          label: '单元格缺省填充',
          tip: '当单元格值为空时，显示内容',
        },
        setter: 'StringSetter',
      },
    ],
  },
  globalStyleField,
];

export const proTableMeta: IComponentDescription = {
  componentName: 'ProTable',
  title: '高级表格',
  docUrl: '',
  icon: 'https://img.alicdn.com/imgextra/i4/O1CN01z4HeA61OwhjktJNDW_!!6000000001770-55-tps-56-56.svg',
  devMode: 'proCode',
  group: '精选组件',
  category: '表格类',
  tags: ['业务组件'],
  npm: {
    package: '@alifd/fusion-ui',
    version: '1.0.24-21',
    exportName: 'ProTable',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },

  configure: {
    props: ProTableProps,
    component: {
      isContainer: false,
      isMinimalRenderUnit: true,
      nestingRule: {},
    },
    supports: {},
  },
  props: [],
  snippets: [
    {
      title: '高级表格',
      screenshot:
        'https://img.alicdn.com/imgextra/i1/O1CN01R1OdLV1GgCXW0rjop_!!6000000000651-2-tps-112-112.png',
      schema: {
        componentName: 'ProTable',
        props: {
          dataSource: [
            {
              id: 'id-2f5DdE2b-0',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
            {
              id: 'id-2f5DdE2b-1',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
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
    {
      title: '树状表格',
      screenshot:
        'https://img.alicdn.com/imgextra/i1/O1CN01m4IZ481VKPwFFbDhP_!!6000000002634-2-tps-112-112.png',
      schema: {
        componentName: 'ProTable',
        props: {
          isTree: true,
          dataSource: [
            {
              id: 'id-2f5DdE2b-0',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
              children: [
                {
                  id: '2f5DdE2b-5Aee-c43c-e1db-0-0',
                  date: '2013-06-12',
                  percent: 1.862,
                  documentAmount: 2022,
                  currency: 'CNY',
                  company: '支付宝科技有限公司',
                },
                {
                  id: '2f5DdE2b-5Aee-c43c-e1db-0-1',
                  date: '2013-06-12',
                  percent: 1.862,
                  documentAmount: 2022,
                  currency: 'CNY',
                  company: '支付宝科技有限公司',
                },
              ],
            },
            {
              id: 'id-2f5DdE2b-1',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
              children: [
                {
                  id: '2f5DdE2b-5Aee-c43c-e1db-1-0',
                  date: '2013-06-12',
                  percent: 1.862,
                  documentAmount: 2022,
                  currency: 'CNY',
                  company: '支付宝科技有限公司',
                },
                {
                  id: '2f5DdE2b-5Aee-c43c-e1db-1-1',
                  date: '2013-06-12',
                  percent: 1.862,
                  documentAmount: 2022,
                  currency: 'CNY',
                  company: '支付宝科技有限公司',
                },
              ],
            },
          ],
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
