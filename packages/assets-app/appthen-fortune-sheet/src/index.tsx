import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css"


interface WorkbookProps {
  width?:string;
  height?:string;
}

const WorkbookComponent = (props: WorkbookProps, ref: any) => {
  const { width, height, ...others } = props;

  return (
    <div style={{width:width,height:height}}>
  <Workbook ref={ref}  {...others}   />,
    </div>
  );
};

const RefWorkbookComponent = forwardRef(WorkbookComponent as ForwardRefRenderFunction<any, WorkbookProps>);
RefWorkbookComponent.displayName = 'WorkbookComponent';

export default RefWorkbookComponent;
