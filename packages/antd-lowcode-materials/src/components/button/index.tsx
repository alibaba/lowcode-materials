import React, { forwardRef, Ref } from 'react';
import { Button as OriginalButton } from 'antd';

const Button: any = (props: any, ref: Ref<any>) => {
  const innerProps: any = {};
  if (!props.href?.trim() || props.__designMode === 'design') {
    // 解决低代码编辑器中按钮设置href属性造成按钮点击重定向问题
    innerProps.href = undefined;
  }
  return <OriginalButton {...props} {...innerProps} ref={ref} />;
};
export default forwardRef(Button);
