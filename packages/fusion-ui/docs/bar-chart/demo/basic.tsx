import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BarChart } from '@alifd/fusion-ui';

export default { title: 'BarChart' };

const props = {
  data: [
    { year: '1991', value: 72345678 },
    { year: '1992', value: 4321132 },
    { year: '1993', value: 33121112.5 },
    { year: '1994', value: 45227221 },
    { year: '1995', value: 4321221.9 },
    { year: '1996', value: 6322121 },
    { year: '1997', value: 78312213 },
    { year: '1998', value: 4192312 },
    { year: '1999', value: 6212332 },
    { year: '2000', value: 3192312 },
  ],
  xField: 'value',
  yField: 'year',
  color: '#0079f2',
  label: {
    visible: true,
    position: 'middle',
  },
};

export const Basic = () => {
  return (
    <div>
      basic demo
      <BarChart {...props} />
    </div>
  );
};

Basic.storyName = '基本用法';
Basic.desc = 'BarChart 的基础用法。';
