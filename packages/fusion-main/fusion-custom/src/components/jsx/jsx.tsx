import * as React from 'react';
import { createElement } from 'react';

export interface JsxProps {
  /**
   * 类型
   */
  propName?: any;
}

const JsxApi: React.FC<JsxProps> = function JsxProps(props) {

  return props.propName;

};

export default JsxApi;
