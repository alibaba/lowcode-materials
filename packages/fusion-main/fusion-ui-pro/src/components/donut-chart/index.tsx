import React from 'react';
import DonutChart from 'bizcharts/lib/plots/DonutChart';
import DataSet from '@antv/data-set';
import numeral from 'numeral';

const { DataView } = DataSet;
const dv = new DataView();

const processStatistic = (statistic: string | object) => {
  return typeof statistic === 'string'
    ? {
        title: false,
        content: {
          style: {
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '20',
            lineHeight: 1.2,
          },
          formatter: () => statistic,
        },
      }
    : statistic;
};

function MyDonut(props) {
  const { data, statistic, ...others } = props || {};

  dv.source(data);
  // 求百分比
  dv.transform({
    type: 'percent',
    field: props?.angleField, // 统计字段
    dimension: props?.colorField, // 该字段的占比
    as: 'percent', // 结果存储在该字段
  });

  return (
    <DonutChart
      autoFit
      radius={0.8}
      innerRadius={0.5}
      padding="auto"
      interactions={[
        { type: 'element-selected' },
        // { type: 'element-active' }
      ]}
      data={dv.rows}
      label={{
        offset: 20,
        formatter: (angleField) => {
          const percent =
            typeof angleField?.percent === 'number'
              ? numeral(angleField?.percent).format('0.00%')
              : angleField?.percent;
          return [`${angleField?.[props?.colorField]} ${percent}`];
        },
      }}
      statistic={processStatistic(statistic)}
      {...others}
    />
  );
}

export default MyDonut;
