import React from 'react';
import { Popover as OriginalPopover } from 'antd';

interface PopoverProps {
  open?: boolean;
}

const Popover = (props: PopoverProps) => {

  return <OriginalPopover 
            {...props} 
            open = {!props.open ? undefined : props.open}
        />;
};

export default Popover;