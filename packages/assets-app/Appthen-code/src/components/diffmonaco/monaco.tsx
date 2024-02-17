import * as React from 'react';
import { createElement } from 'react';
import ReactDOM from 'react-dom';

// import React, { useState } from 'react';
// import MonacoEditor from 'react-monaco-editor';
import LowcodePluginBaseMonacoEditor from '@alilc/lowcode-plugin-base-monaco-editor';

export interface diffmonacoProps {
  /**
   * 类型
   */
  width?: string;
  height?: string;
  language?: string;
  original?: string;
  value?: string;
  path?: string;
  data?: string;
  theme?: string;
  onChange?: (string) => void;
}

const diffmonacoapi: React.FC<diffmonacoProps> = function diffmonacoProps(props) {
  // const [files, setFiles] = React.useState({
  //   'a.json': {
  //     name: 'a.json',
  //     language: 'json',
  //     value: '{ "a": 1 }',
  //   },
  //   'b.js': {
  //     name: 'b.js',
  //     language: 'javascript',
  //     value: 'var a = 1',
  //   },
  //   'c.sql': {
  //     name: 'c.sql',
  //     language: 'sql',
  //     value: 'SELECT * from table where id = 1',
  //   },
  // });
  // const [fileName, setFileName] = React.useState('a.json');
  // const file = files[fileName];

  return (
    <LowcodePluginBaseMonacoEditor.MonacoDiffEditor
    {...props}

      // editorDidMount={(monaco: IMonacoInstance, editor: IEditorInstance) => {}}
      // saveViewState={true}
      // onChange={(next) => {
      //   setFiles((v) => ({
      //     ...v,
      //     [file.name]: {
      //       ...v[file.name],
      //       value: next,
      //     },
      //   }));
      // }}
    />
  );
};

export default diffmonacoapi;
