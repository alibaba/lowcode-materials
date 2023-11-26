import React from 'react';
import GaugeChart from 'bizcharts/lib/plots/GaugeChart';

function GaugesChart(props) {
  return (
    <GaugeChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[{ type: 'element-active' }]}
      {...props}
    />
  );
}

export default GaugesChart;
