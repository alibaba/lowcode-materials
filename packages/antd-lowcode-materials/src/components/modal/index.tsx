import React from 'react';
import { Modal as OriginalModal } from 'antd';

const Modal: any = (props: any) => {
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    // 低代码编辑态中强制显示，将控制权交给引擎侧
    innerProps.open = true;
  }
  return <OriginalModal {...props} {...innerProps} />;
};
Modal.info = OriginalModal.info;
Modal.success = OriginalModal.success;
Modal.error = OriginalModal.error;
Modal.warning = OriginalModal.warning;
Modal.warn = OriginalModal.warn;
Modal.confirm = OriginalModal.confirm;
export default Modal;
