import React from 'react';
import BizLineChart from 'bizcharts/lib/plots/LineChart';

function LineChart(props) {
  return (
    <BizLineChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[{ type: 'element-active' }]}
      {...props}
    />
  );
}

export default LineChart;
