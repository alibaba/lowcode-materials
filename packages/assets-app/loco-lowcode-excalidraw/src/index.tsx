import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';

interface ExcalidrawProps {
  height?: string;
}

const ExcalidrawComponent = (props: ExcalidrawProps) => {
  return (
    <>
      <div style={{ height: props.height }}>
        <Excalidraw langCode="zh-CN" {...props} />
      </div>
    </>
  );
};

const RefExcalidrawComponent = forwardRef(
  ExcalidrawComponent as ForwardRefRenderFunction<any, ExcalidrawProps>,
);
RefExcalidrawComponent.displayName = 'ExampleComponent';

export default RefExcalidrawComponent;
