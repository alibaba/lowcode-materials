import * as React from 'react';
import { createElement } from 'react';
import { Upload, Button } from '@alifd/next';

import { bizCssPrefix } from '../../variables';

export interface uploadCustomProps {
  color?: string;
  title?: string;
}

const uploadCustom: React.FC<uploadCustomProps> = function uploadCustomProps({
  color,
  title,
  ...otherProps
}) {
  const _otherProps = otherProps || {};

  const shape = otherProps?.shape || null;

  if (shape === 'card') {
    return (
      <Upload {..._otherProps} headers={{ Authorization: localStorage.getItem('Authorization') }} />
    );
  } else if (shape === 'Dragger') {
    return (
      <Upload.Dragger
        {..._otherProps}
        headers={{ Authorization: localStorage.getItem('Authorization') }}
      />
    );
  } else {
    return (
      <Upload {..._otherProps}>
        <Button type="primary">{title}</Button>
      </Upload>
    );
  }
};

export default uploadCustom;
