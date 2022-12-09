import React from 'react';
import { LineChart as BizLineChart } from 'bizcharts';

type Iprops = React.ComponentProps<typeof BizLineChart>;

function LineChart(props: Iprops) {
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
