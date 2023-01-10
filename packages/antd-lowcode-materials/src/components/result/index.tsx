import React from 'react';
import { Result as OriginalResult } from 'antd';
import * as icons from '@ant-design/icons';

const createFromIconfontCN = icons.createFromIconfontCN;
const Result = (props: any) => {
  // antd icon配置
  const type = props?.icon
  let customIcon = null
  if (props?.icon && typeof props?.icon === 'string') {
    const IconComp = ((icons || {}) as any)[type];
    if (!IconComp) {
      const IconFont = createFromIconfontCN();
      customIcon = <IconFont type={type} />;
    } else {
      customIcon = <IconComp />;
    }
  }
  return <OriginalResult {...props} icon={customIcon || type} />;
};

export default Result;
