import * as React from 'react';
import { createElement, Component, createRef } from 'react';
import Editor from '@monaco-editor/react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const AntIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export interface IMonacoInputProps {
  height?: string;
  defaultLanguage?: string;
  defaultValue?: string;
  value?: string;
  readOnly?: boolean;
  options?: {
    lineNumbers?: 'on' | 'off';
  };
  theme: 'vs-dark' | 'light';
  onChange: (value: any) => void;
  loading?: boolean;
}

export default class MonacoInput extends Component<IMonacoInputProps, any> {
  editorRef: any;

  constructor(props) {
    super(props);
    this.editorRef = createRef();
  }

  getValue() {
    return this.editorRef.current.getValue();
  }

  getEditorInstance() {
    return this.editorRef.current;
  }

  onEditorMount(editor) {
    this.editorRef.current = editor;
  }

  onEditorChange(value) {
    this.props?.onChange?.(value);
  }

  render() {
    const {
      defaultLanguage,
      height,
      theme = 'light',
      readOnly = false,
      options,
      loading,
    } = this.props;

    const value = this.props.value || this.props.defaultValue;

    return (
      <Spin indicator={AntIcon} spinning={!!loading}>
        <Editor
          options={{
            ...(options || {}),
            readOnly,
          }}
          theme={theme}
          defaultLanguage={defaultLanguage || 'javascript'}
          height={typeof height === 'string' ? parseInt(height) : height}
          value={value}
          onChange={this.onEditorChange.bind(this)}
          onMount={this.onEditorMount.bind(this)}
        />
      </Spin>
    );
  }
}
