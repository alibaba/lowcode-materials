import React from 'react';
import BizBarChart from 'bizcharts/lib/plots/BarChart';

function BarChart(props) {
  return (
    <BizBarChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[
        { type: 'active-region' },
        // { type: 'element-selected' },
        // { type: 'element-active' },
      ]}
      {...props}
    />
  );
}

export default BarChart;
