import React from 'react';
import BizAreaChart from 'bizcharts/lib/plots/AreaChart';

function AreaChart(props) {
  return (
    <BizAreaChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[{ type: 'element-active' }]}
      {...props}
    />
  );
}

export default AreaChart;
