import React from 'react';
import { Drawer as OriginalDrawer } from 'antd';

const Drawer: any = (props: any) => {
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    // 低代码编辑态中强制显示，将控制权交给引擎侧
    innerProps.open = true;
  }
  return <OriginalDrawer {...props} {...innerProps} />;
};
export default Drawer;
