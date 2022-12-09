import React from 'react';
import { AreaChart as BizAreaChart } from 'bizcharts';

type Iprops = React.ComponentProps<typeof BizAreaChart>;

function AreaChart(props:Iprops) {
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
