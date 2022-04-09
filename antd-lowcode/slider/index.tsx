import React from 'react';
import { Slider } from 'antd';
const SliderOuter = (props: any) => {
  const { range } = props;
  let { defaultValue } = props;
  if (range) {
    defaultValue = Array.isArray(defaultValue)
      ? defaultValue
      : [0, defaultValue];
  } else {
    defaultValue = Array.isArray(defaultValue)
      ? defaultValue[1] || defaultValue[0]
      : defaultValue;
  }
  return <Slider {...props} defaultValue={defaultValue}></Slider>;
};

export default SliderOuter;
