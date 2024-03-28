import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DonutChart } from '@alifd/fusion-ui';

export default { title: 'DonutChart' };

const props = {
  legend: {
    position: 'top-left',
  },
  data: [
    { year: '1991', value: 72345678 },
    { year: '1992', value: 4321132 },
    { year: '1993', value: 33121112.5 },
    { year: '1994', value: 45227221 },
    { year: '1995', value: 4321221.9 },
    { year: '1996', value: 6322121 },
    { year: '1997', value: 78312213 },
    { year: '1998', value: 2192312 },
    { year: '1999', value: 6212332 },
    { year: '2000', value: 1192312 },
  ],
  angleField: 'value',
  colorField: 'year',
  label: {
    visible: true,
    type: 'spider',
  },
  color: ['#3BCBD1', '#47A4FE', '#EDBA42', '#F4704E', '#ED6899', '#7F62C3', '#6E7BC9'],
};

export const Basic = () => {
  return (
    <div>
      basic demo
      <DonutChart {...props} />
    </div>
  );
};

Basic.storyName = '基本用法';
Basic.desc = 'DonutChart 的基础用法。';
