import React from 'react';
import { BarChart as BizBarChart } from 'bizcharts';

type Iprops = React.ComponentProps<typeof BizBarChart>;

function BarChart(props:Iprops) {
  return (
    <BizBarChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[
        { type: 'active-region' },
      ]}
      {...props}
    />
  );
}

export default BarChart;
