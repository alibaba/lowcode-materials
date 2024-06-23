import React, { createElement } from 'react';
interface ViewProp {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: any;
  ref?: string | ((node: any) => any);
  key?: string | number;
  onClick?: (e: React.MouseEvent) => void;
  onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
}
const View = ({ className = '', style, children, ...other }: ViewProp) => {
  return (
    <div className={className} style={style} {...other}>
      {children}
    </div>
  );
};
export default View;
