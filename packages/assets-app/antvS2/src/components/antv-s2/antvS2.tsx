import React, { forwardRef, Ref } from 'react';


import { SheetComponent  } from '@antv/s2-react';
import '@antv/s2-react/dist/style.min.css';

import { createElement } from 'react';

export interface SheetComponentInputProps {
width?: number;
}

const ColorfulSheetComponent: React.FC<SheetComponentInputProps> = function ColorfulInput({


  ...otherProps
}) {

  return (
    <SheetComponent
   {...otherProps}
  />
  );
};

export default ColorfulSheetComponent;
