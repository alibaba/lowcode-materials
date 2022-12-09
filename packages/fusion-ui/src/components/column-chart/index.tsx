import React from 'react';
import { ColumnChart as BizColumnChart } from 'bizcharts';

type Iprops = React.ComponentProps<typeof BizColumnChart>;

function ColumnChart(props: Iprops) {
  const { meta, ...others } = props;

  return (
    <BizColumnChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[{ type: 'active-region' }]}
      {...others}
    />
  );
}

export default ColumnChart;
