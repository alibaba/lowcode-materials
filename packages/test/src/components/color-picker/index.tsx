import React, { Ref } from 'react';
import { ColorPicker } from 'antd';
import type { MenuProps } from 'antd';


const customColorPicker: any = (props: any, ref: Ref<any>) => {
  const {items,icon,...otherProps} = props



  return (
 <ColorPicker {...otherProps} />

  );
};

  

  export default customColorPicker;

