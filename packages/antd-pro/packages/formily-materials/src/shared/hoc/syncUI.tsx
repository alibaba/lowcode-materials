import * as React from 'react';
import { IFormItemProps } from '../';
import FormControlContext from '../context/FormControlContext';
import { createElement, useEffect, useContext, useState } from 'react';

// props改变时需要更新form
// https://v2.formilyjs.org/zh-CN/guide/advanced/controlled#schema-%E5%8F%97%E6%8E%A7
const syncUI = (Component: React.FC<any>) => {
  return function (props: IFormItemProps) {
    const [hasInit, setHasInit] = useState(false);

    const { updateForm } = useContext(FormControlContext);

    const { fieldProps, componentProps, decoratorProps, __designMode, children } = props as any;

    useEffect(() => {
      if (!hasInit) {
        // 组件mount时不需要update form
        return setHasInit(true);
      }

      // 运行时不需要 updateForm
      if (__designMode !== 'design') {
        return;
      }

      updateForm();
    }, [fieldProps, componentProps, decoratorProps, __designMode, children]);

    return <Component {...props} />;
  };
};

export default syncUI;
