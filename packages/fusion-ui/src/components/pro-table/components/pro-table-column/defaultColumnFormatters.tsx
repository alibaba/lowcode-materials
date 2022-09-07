import * as React from 'react';
import { ProTableColumnProps } from '../../types';
import { ProTableColumnFormatter } from './pro-table-column-formatter';
import is from '@sindresorhus/is';
import {
  formatBankCard,
  formatDate,
  formatMoney,
  formatNumber,
  formatPercent,
} from '@/utils/formatters';
// import { EmployeeInfo } from '@/employee-select';
// import { UploadList } from '@/upload/components/Upload/components/UploadList';
import { colorToStatus } from '../pro-table-cells/utils';
import {
  Progress,
  Tag,
  Upload as UploadList,
  Input,
  NumberPicker,
  DatePicker2,
  Select,
} from '@alifd/next';
// import { Tag } from '@/tag';

const EditComponent = (props: any) => {
  const { component, value, onChange, style = {}, ...otherProps } = props;
  const [data, setData] = React.useState(value);
  if (!style.width) {
    style.width = '100%';
  }
  const Comp = component || Input;
  return (
    <Comp
      value={data}
      style={style}
      fullWidth
      hasClear
      onChange={(changeValue) => {
        setData(changeValue);
        onChange && onChange(changeValue);
      }}
      {...otherProps}
    />
  );
};

const TextEditCell = (value, rowIndex, record, context, dataIndex) => {
  return (
    <EditComponent
      component={Input}
      value={value}
      onChange={(data) => {
        record[dataIndex] = data;
        record[`origin-${dataIndex}`] = value;
      }}
    />
  );
};

const NumberEditCell = (value, rowIndex, record, context, dataIndex) => {
  return (
    <EditComponent
      component={NumberPicker}
      value={value}
      step="0.01"
      onChange={(data) => {
        record[dataIndex] = data;
        record[`origin-${dataIndex}`] = value;
      }}
    />
  );
};

const DateEditCell = (value, rowIndex, record, context, dataIndex) => {
  return (
    <EditComponent
      component={DatePicker2}
      value={value}
      onChange={(data) => {
        record[dataIndex] = data;
        record[`origin-${dataIndex}`] = value;
      }}
    />
  );
};

const SelectEditCell = (value, rowIndex, record, context, dataIndex) => {
  return (
    <EditComponent
      component={Select}
      dataSource={[
        {
          label: 'BHD',
          value: 'BHD',
        },
        {
          label: 'BIF',
          value: 'BIF',
        },
        {
          label: 'CLF',
          value: 'CLF',
        },
        {
          label: 'CLP',
          value: 'CLP',
        },
        {
          label: 'DJF',
          value: 'DJF',
        },
        {
          label: 'GNF',
          value: 'GNF',
        },
        {
          label: 'IQD',
          value: 'IQD',
        },
        {
          label: 'ISK',
          value: 'ISK',
        },
        {
          label: 'JOD',
          value: 'JOD',
        },
        {
          label: 'JPY',
          value: 'JPY',
        },
        {
          label: 'KMF',
          value: 'KMF',
        },
        {
          label: 'KRW',
          value: 'KRW',
        },
        {
          label: 'KWD',
          value: 'KWD',
        },
        {
          label: 'LYD',
          value: 'LYD',
        },
        {
          label: 'OMR',
          value: 'OMR',
        },
        {
          label: 'PYG',
          value: 'PYG',
        },
        {
          label: 'RWF',
          value: 'RWF',
        },
        {
          label: 'TND',
          value: 'TND',
        },
        {
          label: 'UGX',
          value: 'UGX',
        },
        {
          label: 'UYI',
          value: 'UYI',
        },
        {
          label: 'UYW',
          value: 'UYW',
        },
        {
          label: 'VUV',
          value: 'VUV',
        },
        {
          label: 'XAF',
          value: 'XAF',
        },
        {
          label: 'XOF',
          value: 'XOF',
        },
        {
          label: 'XPF',
          value: 'XPF',
        },
        {
          label: 'IDR',
          value: 'IDR',
        },
        {
          label: 'TWD',
          value: 'TWD',
        },
        {
          label: 'VND',
          value: 'VND',
        },
      ]}
      value={value}
      onChange={(data) => {
        record[dataIndex] = data;
        record[`origin-${dataIndex}`] = value;
      }}
    />
  );
};

/**
 * 不同类型列的格式化方法a
 */
export const defaultColumnFormatters: Record<
  ProTableColumnProps['formatType'],
  ProTableColumnFormatter
> = {
  text: (options) => {
    return {
      cellTooltipMode: 'ellipsis',
      width: 100,
      cell: options.cellFactory(({ value, getLabel }) => value && getLabel()),
      editCell: TextEditCell,
    };
  },
  number: (options) => ({
    cellTooltipMode: 'ellipsis',
    cell: options.formatterCellFactory(formatNumber),
    editCell: NumberEditCell,
  }),
  // 金额渲染
  money: (options) => ({
    cellTooltipMode: 'ellipsis',
    // 金额 + 币种，宽度设置为 120
    // 金额展示，宽度设置为 90
    width: options.formatTypeParser.rawOptions[0] ? 120 : 90,
    align: 'right',
    cell: options.formatterCellFactory(formatMoney),
    editCell: NumberEditCell,
  }),
  // 日期渲染
  date: (options) => ({
    cellTooltipMode: 'ellipsis',
    width: 158,
    align: 'center',
    cell: options.formatterCellFactory(formatDate),
    editCell: DateEditCell,
  }),
  // 电话显示
  phone: () => ({
    cellTooltipMode: 'ellipsis',
    width: 142,
    editCell: TextEditCell,
  }),

  // 币种展示
  currency: (options) => ({
    cellTooltipMode: 'ellipsis',
    width: 40,
    cell: options.cellFactory(({ value, getLabel }) => value && getLabel()),
    editCell: SelectEditCell,
  }),
  // OU 编码
  ou: () => ({
    cellTooltipMode: 'ellipsis',
    width: 58,
    align: 'center',
  }),
  // 百分比
  percent: (options) => ({
    cellTooltipMode: 'ellipsis',
    width: 80,
    cell: options.formatterCellFactory(formatPercent),
    editCell: NumberEditCell,
  }),
  // 进度条
  progress: (options) => ({
    cellTooltipMode: 'ellipsis',
    width: 180,
    cell: options.cellFactory(({ value, getCellColor }) => {
      if (is.number(value) || is.numericString(value)) {
        const status = colorToStatus(getCellColor(), ['normal', 'success', 'error']) || 'normal';
        return <Progress percent={+value * 100} state={status} progressive={!status} />;
      }
      return undefined;
    }),
    formatColor: undefined,
    editCell: NumberEditCell,
  }),
  link: () => ({
    cellTooltipMode: 'none',
    cell: (value) => (
      <a href="#" onClick={() => false}>
        {value}
      </a>
    ),
    editCell: TextEditCell,
  }),
  tag: (options) => ({
    cellTooltipMode: 'none',
    width: 90,
    cell: options.cellFactory(
      ({ value, getLabel, getCellColor }) =>
        value && (
          <Tag color={getCellColor()} size="small">
            {getLabel()}
          </Tag>
        ),
    ),
    formatColor: undefined,
  }),
  textTag: (options) => ({
    cellTooltipMode: 'none',
    width: 90,
    cell: options.cellFactory(
      ({ value, getLabel, getCellColor }) =>
        value && (
          <Tag color={getCellColor()} size="small" shape="text" type="primary">
            {getLabel()}
          </Tag>
        ),
    ),
    formatColor: undefined,
  }),
  files: () => ({
    cellTooltipMode: 'none',
    width: 180,
    cell: (value) =>
      value && <UploadList listType="table" value={value} showDownloadIcon showPreviewIcon />,
    formatColor: undefined,
  }),
  bankCard: () => ({
    cellTooltipMode: 'ellipsis',
    width: 183,
    cell: formatBankCard,
  }),
  employee: () => ({
    cellTooltipMode: 'none',
    width: 160,
    cell: (value) => value && <div dataSource={value} triggerType={['hover', 'click']} />,
  }),
};
