import React from 'react';
interface IProp {
  children?: React.ReactNode;
  className?: string;
  openType?: any;
  sessionFrom?: any;
  style?: any;
  ref?: string | ((node: any) => any);
  key?: string | number;
  onClick?: (e: React.MouseEvent) => void;
}
const Button = ({ className = '', style, children, openType, sessionFrom, ...other }: IProp) => {
  return (
    <div className={className} style={style} {...other}>
      {children}
    </div>
  );
};
export default Button;
