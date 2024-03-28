import React from 'react';
import BizColumnChart from 'bizcharts/lib/plots/ColumnChart';
// import { processMetaOfChart } from '@/pages/demo/utils/format';

function ColumnChart(props) {
  const { meta, ...others } = props;

  return (
    <BizColumnChart
      // meta={processMetaOfChart(meta)}
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[
        { type: 'active-region' },
        // { type: 'element-selected' },
        // { type: 'element-active' },
      ]}
      {...others}
    />
  );

  // return <GroupedColumnChart
  //   autoFit
  //   isGroup
  //   {...others}
  // />
}

export default ColumnChart;
