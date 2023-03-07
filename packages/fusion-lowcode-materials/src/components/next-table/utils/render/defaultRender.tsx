import React from 'react';
import isObject from "lodash/isObject";

export default function defaultRender(value: any, className = '') {
  if (value === undefined || value === null) {
    return '';
  }

  if (isObject(value)) {
    value = JSON.stringify(value);
  }

  return (
    <span title={value} className={className}>
      {value}
    </span>
  );
};
