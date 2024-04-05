import * as React from 'react';
import { createElement } from 'react';
import ReactDOM from 'react-dom';

// import React, { useState } from 'react';
// import MonacoEditor from 'react-monaco-editor';
import SingleMonacoEditorComponent from '@alilc/lowcode-plugin-base-monaco-editor';

export interface monacoProps {
  /**
   * 类型
   */
  width?: string;
  height?: string;
  language?: string;
  path?: string;
  data?: string;
  theme?: string;
  onChange?: (string) => void;
}

const MonacoApi: React.FC<monacoProps> = function monacoProps(props) {
  return (
    <SingleMonacoEditorComponent
      height={props.height}
      width={props.width}
      path={props.path}
      language={props.language}
      defaultValue={props.data}
      supportFullScreen
      options={props}
      theme={props.theme}
      onChange={props.onChange}
    />
  );
};

export default MonacoApi;
