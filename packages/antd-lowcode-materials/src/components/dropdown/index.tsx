import React from 'react';
import { Dropdown as OriginalDropdown } from 'antd';
import { withSingleChild } from '../../utils/hoc';

const Dropdown: any = (props: any) => {
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    // 低代码编辑态中强制显示，将控制权交给引擎侧
    innerProps.open = true;
  }
  return <OriginalDropdown {...props} {...innerProps} />;
};
export default withSingleChild(Dropdown, ['children', 'overlay']);
