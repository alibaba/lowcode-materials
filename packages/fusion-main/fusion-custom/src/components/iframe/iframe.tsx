import * as React from 'react';
import { createElement } from 'react';
import { Box, Button,Icon } from '@alifd/next';

export interface iframeProps {
  /**
   * 类型
   */
  src?: 'string',
  buttonColor?:'string',
  todisplay:'bool',
  icon:string
}

const iframe: React.FC<iframeProps> = function iframeProps({
  src,
  buttonColor,
  todisplay,
  icon,
  ...otherProps
}) {

  const handelchange = () => {
    if (src){
      window.open(src,"_blank")
    }
  }


  const _otherProps = otherProps || {};
  return (
    <Box   style={{display:'flex',flexDirection: 'column',alignItems:'flex-end'}}   >
      {todisplay &&       <Button  onClick={handelchange} style={{width:35,marginRight:15,marginBottom:'-35px',borderColor:buttonColor}}><Icon style={{color:buttonColor}}  type={icon} /></Button>}
     <iframe src={src} { ..._otherProps } />
    </Box>
  );
};

export default iframe;


