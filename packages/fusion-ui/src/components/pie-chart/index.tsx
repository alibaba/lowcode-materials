import React from 'react';
import PieChart from 'bizcharts/lib/plots/PieChart';
import numeral from 'numeral';
import DataSet from '@antv/data-set';

const { DataView } = DataSet;
const dv = new DataView();

function MyPie(props) {
  const { data, ...others } = props || {};

  dv.source(data);
  // 求百分比
  dv.transform({
    type: 'percent',
    field: props?.angleField, // 统计字段
    dimension: props?.colorField, // 该字段的占比
    as: 'percent', // 结果存储在该字段
  });

  return (
    <PieChart
      isMaterial
      data={dv.rows}
      radius={0.8}
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
      interactions={[
        { type: 'element-selected' },
        // { type: 'element-active' }
      ]}
      {...others}
    />
  );
}

export default MyPie;
