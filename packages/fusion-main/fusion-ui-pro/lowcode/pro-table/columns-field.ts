import { uuid, mockProTableRow, mockId } from './utils';
import { IProps } from '../types/index';
import { hideProp, deepEqual, isJSExpression } from '../utils';
import debounce from 'lodash/debounce';

export const columnsField: IProps = {
  type: 'field',
  name: 'columns',
  title: '数据列',
  extraProps: {
    display: 'accordion',
  },
  setValue: debounce((field, columns) => {
    const _columns = isJSExpression(columns) ? columns.mock : columns;
    if (!_columns || !Array.isArray(_columns) || !_columns.length) {
      return;
    }
    const { node } = field;
    const dataSource = node.getPropValue('dataSource') || [];
    const _dataSource = isJSExpression(dataSource) ? dataSource.mock : dataSource;
    if (!_dataSource || !Array.isArray(_dataSource) || !_dataSource.length) {
      return;
    }
    const primaryKey = node.getPropValue('primaryKey') || 'id';
    const mockRow = mockProTableRow(columns);
    const newData = dataSource.map((item) => ({
      [primaryKey]: mockId(),
      ...mockRow,
      ...item,
    }));
    if (!deepEqual(newData, dataSource)) {
      node.setPropValue('dataSource', newData);
    }
  }),
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
                title: '标题',
                display: 'inline',
                initialValue: '姓名',
                isRequired: true,
                setter: 'StringSetter',
              },
              {
                name: 'formatType',
                title: '数据类型',
                display: 'inline',
                initialValue: 'text',
                isRequired: true,
                setter: {
                  componentName: 'SelectSetter',
                  props: {
                    options: [
                      { value: 'text', title: '文本' },
                      { value: 'number', title: '数字' },
                      { value: 'money', title: '金额' },
                      { value: 'date', title: '日期' },
                      { value: 'phone', title: '手机号' },
                      { value: 'currency', title: '币种' },
                      { value: 'ou', title: 'OU编码' },
                      { value: 'percent', title: '百分比' },
                      { value: 'progress', title: '进度条' },
                      { value: 'link', title: '链接' },
                      { value: 'dialog', title: '弹窗' },
                      { value: 'tag', title: '标签' },
                      { value: 'textTag', title: '文字标签' },
                      { value: 'files', title: '附件' },
                      { value: 'bankCard', title: '银行卡号' },
                      { value: 'employee', title: '员工' },
                      { value: 'function', title: '自定义函数' },

                    ],
                  },
                },
              },
              {
                name: 'dataIndex',
                title: '数据字段',
                display: 'inline',
                initialValue: (currentValue, defaultValue) =>
                  currentValue || defaultValue || `data-${uuid()}`,
                setter: 'StringSetter',
              },
              {
                name: 'align',
                title: '对齐方式',
                display: 'inline',
                initialValue: 'left',
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      {
                        value: 'left',
                        title: '居左',
                      },
                      {
                        value: 'center',
                        title: '居中',
                      },
                      {
                        value: 'right',
                        title: '居右',
                      },
                    ],
                  },
                },
              },

              {
                name: 'lock',
                title: '锁列',
                display: 'inline',
                initialValue: 'none',
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      {
                        title: '左侧',
                        value: 'left',
                        tip: 'left',
                      },
                      {
                        title: '不锁',
                        value: 'none',
                        tip: 'none',
                      },
                      {
                        title: '右侧',
                        value: 'right',
                        tip: 'right',
                      },
                    ],
                    compact: false,
                  },
                },
              },

              // 格式化参数
              {
                name: 'formatOptions',
                title: '格式化参数',
                setter: 'ArraySetter',
                condition: hideProp,
              },
              {
                name: '_format_options_date',
                title: '时间格式',
                display: 'inline',
                defaultValue: 'YYYY-MM-DD HH:mm:ss',
                condition: (target) => {
                  return target.parent.getPropValue('formatType') === 'date';
                },
                getValue: (target) => {
                  const formatOptions = target.getProps().getPropValue('formatOptions') || [];
                  return formatOptions[0];
                },
                setValue: (target, value) => {
                  target.parent.setPropValue('formatOptions', [value]);
                },
                setter: {
                  componentName: 'SelectSetter',
                  props: {
                    options: [
                      { value: 'YYYY-MM-DD HH:mm:ss', title: '年-月-日 时:分:秒' },
                      { value: 'YYYY-MM-DD HH:mm', title: '年-月-日 时:分' },
                      { value: 'YYYY-MM-DD', title: '年-月-日' },
                      { value: 'YYYY-MM', title: '年-月' },
                      { value: 'YYYY', title: '年' },
                    ],
                  },
                },
              },

              // 高级设置
              {
                name: 'explanation',
                title: '表头说明',
                display: 'inline',
                initialValue: '',
                setter: 'StringSetter',
              },

              {
                name: 'width',
                title: '宽度',
                display: 'inline',
                setter: {
                  componentName: 'NumberSetter',
                  props: {
                    units: [
                      {
                        type: 'px',
                        list: true,
                      },
                      {
                        type: '%',
                        list: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'hidden',
                title: '是否隐藏',
                display: 'inline',
                initialValue: false,
                setter: 'BoolSetter',
              },
              {
                name: 'width',
                title: '宽度',
                display: 'inline',
                setter: 'NumberSetter',
              },
              {
                name: 'maxChars',
                title: '字数限定',
                display: 'inline',
                setter: 'NumberSetter',
                hidden() {
                  return this.parent.getParam('formatType').toData() !== 'text';
                },
              },

              {
                name: 'sortable',
                title: '列排序',
                display: 'inline',
                initialValue: false,
                setter: 'BoolSetter',
              },
              {
                name: 'searchable',
                title: '列搜索',
                display: 'inline',
                initialValue: false,
                setter: 'BoolSetter',
              },
              {
                name: 'filters',
                title: {
                  label: '筛选菜单项',
                  tip: 'filters | 表头的筛选菜单项',
                },
                propType: 'object',
                setter: 'JsonSetter',
              },
              {
                name: 'cell',
                title: '自定义渲染',
                setter: 'FunctionSetter',
              },
              // {
              //   name: 'CellFactoryCellOptions.getCellColor',
              //   title: '标签颜色',
              //   setter: 'FunctionSetter',
              // },

 
              
              // {
              //   name: 'render',
              //   title: {
              //     label: '自定义渲染',
              //     tip:
              //       'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引',
              //   },
              //   propType: 'func',
              //   setter: [
              //     {
              //       componentName: 'SlotSetter',
              //       title: '单元格插槽',
              //       initialValue: {
              //         type: 'JSSlot',
              //         params: ['text', 'record', 'index'],
              //         value: [
              //           {
              //             componentName: 'Box',
              //           },
              //         ],
              //       },
              //     },
              //     'VariableSetter',
              //   ],
              // },
              {
                name: 'onCellClick',
                condition: hideProp,
              },
              {
                name: 'behavior',
                title: '交互设置',
                display: 'block',
                condition: (target) => {
                  const formatType = target.parent.getPropValue('formatType');
                  return formatType && ['dialog', 'link'].includes(formatType);
                },
                setter: {
                  componentName: 'BehaviorSetter',
                  props: (target) => {
                    return {
                      actions: ['onCellClick'],
                      type: target.parent.getPropValue('formatType'),
                    };
                  },
                },
              },
            ],
          },
        },
        initialValue: () => {
          return {
            title: '列标题',
            formatType: 'text',
            dataIndex: 'dataIndex',
          };
        },
      },
    },
  },
};
