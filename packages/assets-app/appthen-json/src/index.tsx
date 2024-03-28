import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import ReactJson from 'react-json-view';

interface ComponentProps {
}

const JsonComponent = (props: ComponentProps, ref: any) => {

  return <ReactJson  {...props} />;

};

const RefExampleComponent = forwardRef(JsonComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'JsonComponent';

export default RefExampleComponent;
 