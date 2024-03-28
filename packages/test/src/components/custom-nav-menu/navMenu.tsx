import * as React from 'react';
import { createElement } from 'react';


export interface customNavProps {
    colors?: 'string';
    onChange?: (value: string) => void;
  }
  
  const customNav: React.FC<customNavProps> = function customNavProps({
    colors,
    onChange
  }) {
  
    return <p>测试</p>;
  
  };
  
  export default customNav;

  
