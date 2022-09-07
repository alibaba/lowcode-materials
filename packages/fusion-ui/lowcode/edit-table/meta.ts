import { IComponentDescription } from '../types/index';
import { ProTableProps } from '../pro-table/pro-table-meta';

function editTablePropsFilter(prop: any) {
  const ignorePropNames: string[] = ['dataSource'];
  return !ignorePropNames.includes(prop?.name);
}

const EditTableProps = ProTableProps.filter(editTablePropsFilter).map((item) => {
  if (item.name === 'advanced') {
    return {
      type: 'group',
      title: '高级',
      name: 'other',
      extraProps: {
        display: 'accordion',
        defaultCollapsed: true,
      },
      items: [
        {
          name: 'addPosition',
          title: '新增行位置',
          defaultValue: 'end',
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  label: '上',
                  value: 'start',
                },
                {
                  label: '下',
                  value: 'end',
                },
              ],
            },
          },
        },
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
    };
  }
  return { ...item };
});

export const editTableMeta: IComponentDescription = {
  componentName: 'EditTable',
  title: '可编辑表格',
  docUrl: '',
  icon: 'https://img.alicdn.com/imgextra/i4/O1CN01dtjMvv1heoyqst9u5_!!6000000004303-55-tps-56-56.svg',
  devMode: 'procode',
  group: '精选组件',
  category: '表格类',
  tags: ['业务组件'],
  npm: {
    package: '@alifd/fusion-ui',
    version: '1.0.24-21',
    exportName: 'EditTable',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },

  configure: {
    props: EditTableProps,
    component: {
      isContainer: false,
      nestingRule: {},
    },
    supports: {
      events: ['onSave', 'onRemove'],
    },
  },
  snippets: [
    {
      title: '可编辑表格',
      screenshot:
        'https://img.alicdn.com/imgextra/i4/O1CN01dtjMvv1heoyqst9u5_!!6000000004303-55-tps-56-56.svg',
      schema: {
        componentName: 'EditTable',
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
            {
              id: 'id-2f5DdE2b-2',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
            {
              id: 'id-2f5DdE2b-3',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
            {
              id: 'id-2f5DdE2b-4',
              date: '2013-06-12',
              percent: 1.862,
              documentAmount: 2022,
              currency: 'CNY',
              company: '支付宝科技有限公司',
            },
          ],
          actionColumnButtons: {
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

export default editTableMeta;
