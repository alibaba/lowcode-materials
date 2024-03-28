import React from 'react';

import {LineChart} from 'bizcharts';

// 数据源
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

function Linechart(props) {
  return (
    <LineChart
    data={data}
    title={{
      visible: true,
      text: '折线图',
    }}
    description={{
      visible: true,
      text: '用平滑的曲线代替折线。',
    }}
    xField='year'
    yField='value'
    {...props}
    interactions={[
      {
        type: 'slider',
        cfg: {
          start: 0,
          end: 1,
        },
      },
    ]}
  />
  );
}

export default Linechart;
