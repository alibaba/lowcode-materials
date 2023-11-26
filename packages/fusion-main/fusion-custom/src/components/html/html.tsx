import * as React from 'react';
import { createElement } from 'react';

export interface htmlProps {
  /**
   * 类型
   */
  html?: 'String';
}

const htmlapi: React.FC<htmlProps> = function htmlProps(props) {

  const htmlobj=()=> {
    return {__html: props.html};
  }
  return  <div dangerouslySetInnerHTML={htmlobj()}></div>;
};

export default htmlapi;
