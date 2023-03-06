import React from 'react';
import { Button } from '@alifd/next'
import { ButtonProps } from '@alifd/next/types/button';

export default function linkRender(value?: { title?: string; href?: string } | string, column?: any, rowData?: any, onClick?: () => void) {
  if (value === undefined || value === null) {
    return '';
  }
  let renderProps: ButtonProps = {
    text: true,
    type: 'primary',
    className: `deep-table-link-button`,
    title: typeof value == 'object' ? value.title : value,
    style: { ...(rowData.style || {}) },
    onClick: () => {
      onClick && typeof onClick === 'function' && onClick();
      if (typeof value === 'object' && value.href) {
        location.href = value.href;
      } else if (typeof value == 'string') {
        location.href = value;
      }
    }
  }
  return (
    <Button {...renderProps}>{typeof value == 'object' ? value.title : value}</Button>
  );
};
